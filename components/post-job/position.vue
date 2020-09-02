<template>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <validation-provider name="Position" rules="required" v-slot="validation">
        <b-form-group label="Position" label-for="position">
          <b-form-input
            id="position"
            v-model="value.position"
            :state="state(validation)"
            placeholder="Software Engineer"
          ></b-form-input>
        </b-form-group>
      </validation-provider>

      <client-only>
        <b-form-group label="Description">
          <html-editor v-model="value.description" />
        </b-form-group>
      </client-only>

      <div class="row align-items-end justify-content-between">
        <div class="col" v-if="!value.remote">
          <validation-provider name="Location" rules="required" v-slot="validation">
            <b-form-group label="Location" label-for="location">
              <b-form-input
                id="location"
                key="location"
                v-model="value.location"
                :state="state(validation)"
                placeholder="Amsterdam"
              ></b-form-input>
            </b-form-group>
          </validation-provider>
        </div>

        <div class="col-auto">
          <b-form-group>
            <b-form-checkbox id="remote" switch v-model="value.remote">Remote</b-form-checkbox>
          </b-form-group>
        </div>
      </div>

      <b-form-group label="Tags" label-for="tags-separators">
        <b-form-tags
          input-id="tags-separators"
          v-model="value.tags"
          placeholder="Enter new tags separated by space or comma"
          separator=" ,"
        ></b-form-tags>
      </b-form-group>

      <validation-provider name="Apply Url" rules="required" v-slot="validation">
        <b-form-group label="Apply Url" label-for="applyUrl">
          <b-form-input
            id="applyUrl"
            v-model="value.applyUrl"
            :state="state(validation)"
            placeholder="https://yourcompany.com/vacancies/position"
          ></b-form-input>
        </b-form-group>
      </validation-provider>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { BFormGroup, BFormInput, BFormCheckbox, BFormTags } from 'bootstrap-vue';

export default {
  components: {
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BFormTags,
    ValidationProvider,
    HtmlEditor: () => import('~/components/html-editor')
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