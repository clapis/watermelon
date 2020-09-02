<template>
  <div>
    <intro>
      <template v-slot:main># focus.</template>
    </intro>

    <wizard @onSubmit="post">
      <wizard-step title="Company" icon="b-icon-house-fill">
        <company v-model="job" />
      </wizard-step>

      <wizard-step title="Position" icon="b-icon-person-check-fill">
        <position v-model="job" />
      </wizard-step>

      <wizard-step title="Publish" icon="b-icon-cloud-upload">
        <publish v-model="job" />
      </wizard-step>
    </wizard>

    <!-- <pre>{{ job | pretty }}</pre> -->
  </div>
</template>

<script>
import Intro from "~/components/intro";

import Wizard from "~/components/post-job/wizard";
import WizardStep from "~/components/post-job/wizard-step";

import Company from "~/components/post-job/company";
import Position from "~/components/post-job/position";
import Publish from "~/components/post-job/publish";

export default {
  head: {
    script: [{ src: "https://js.stripe.com/v3/" }],
  },
  components: {
    Intro,
    Wizard,
    WizardStep,
    Company,
    Position,
    Publish
  },
  data() {
    return {
      job: {}
    };
  },
  methods: {
    post() {
      this.$store
        .dispatch("shop/checkout", this.job)
        .then((res) => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.error("publish error:", err);
        });
    },
  },
  filters: {
    pretty: (value) => JSON.stringify(value, null, 2),
  }
};
</script>