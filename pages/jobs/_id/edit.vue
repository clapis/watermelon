<template>
  <div>
    <intro>
      <template v-slot:main># edit</template>
    </intro>

  </div>
</template>


<script>
import Intro from "~/components/intro";

export default {
  components: {
    Intro
  },
  data() {
    return {
      job: {}
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  async fetch() {
    this.job = await this.$axios.$get(`jobs/${this.id}`);
  },
  methods: {
    async update(job) {
      await this.$axios.$put(`jobs/${this.id}`, this.job);

      this.$router.push("/");
    }
  }
};
</script>