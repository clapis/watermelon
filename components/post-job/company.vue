<template>
  <div class="row justify-content-center">
    <div class="col-auto">
      <b-form-group label="　">
        <logo-upload v-model="value.logo" />
      </b-form-group>
    </div>
    <div class="col col-md-6">
      <validation-provider name="Company Name" rules="required" v-slot="validation">
        <b-form-group label="Company Name" label-for="company">
          <b-form-input
            id="company"
            v-model="value.companyName"
            :state="state(validation)"
            placeholder="Your Company"
            autofocus
          ></b-form-input>
        </b-form-group>
      </validation-provider>

      <validation-provider name="Website" rules="required" v-slot="validation">
        <b-form-group label="Website" label-for="website">
          <b-form-input
            id="website"
            type="url"
            v-model="value.website"
            :state="state(validation)"
            placeholder="https://yourcompany.com/"
          ></b-form-input>
        </b-form-group>
      </validation-provider>
    </div>
  </div>
</template>

<script>
import LogoUpload from "~/components/logo-upload";
import { BFormGroup, BFormInput } from 'bootstrap-vue';
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";

export default {
  components: {
    BFormGroup,
    BFormInput,
    ValidationProvider,
    LogoUpload
  },
  props: {
    value: Object,
  },
  methods: {
    state({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
};
</script>