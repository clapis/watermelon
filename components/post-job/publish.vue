<template>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <b-card @click="tooltip = false">
        <job id="job-preview" :value="value" preview class="mb-2" />

        <b-tooltip
          target="job-preview"
          triggers="manual"
          :show.sync="tooltip"
          variant="dark"
          placement="left"
        >
          <b-icon-eye /> Preview&nbsp;
        </b-tooltip>

        <hr />

        <validation-provider name="Email" rules="required" v-slot="validation">
          <b-form-group label="Contact e-mail" label-for="email" 
            description="Used for listing administration - it will never be public.">
            <b-form-input
              id="email"
              v-model="value.email"
              :state="state(validation)"
              placeholder="hr@yourcompany.com"
            ></b-form-input>
          </b-form-group>
        </validation-provider>

        <validation-provider rules="required" v-slot="validation">
          <b-form-group label="Promote your listing">
            <b-list-group :class="{ invalid: state(validation) === false }">
              <b-list-group-item
                v-for="product in products"
                :key="product.id"
                :class="{ disabled: product.disabled }"
                class="d-flex align-items-baseline"
              >
                <input
                  type="radio"
                  name="product"
                  :id="product.id"
                  :value="product.id"
                  v-model="value.product"
                  :disabled="product.disabled"
                />
                <div class="ml-2">
                  <label class="mb-0" :for="product.id">{{ product.name }}</label>
                  <span class="form-text small text-muted">{{ product.description }}</span>
                </div>
                <div class="ml-auto">€{{ product.price }}</div>
              </b-list-group-item>
            </b-list-group>
          </b-form-group>
        </validation-provider>
      </b-card>
    </div>
  </div>
</template>

<script>
import Job from "~/components/job";
import { BCard, BFormGroup, BFormInput, BListGroup, BListGroupItem, BTooltip, BIconEye } from "bootstrap-vue";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";

export default {
  components: {
    Job,
    BCard,
    BFormGroup,
    BFormInput,
    BListGroup,
    BListGroupItem,
    ValidationProvider,
    BTooltip,
    BIconEye
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { tooltip: true };
  },
  computed: {
    products() {
      return this.$store.state.products.all;
    },
  },
  mounted() {
    this.value.product =
      this.value.product || this.$store.state.products.default;
  },
  methods: {
    state({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-group.invalid {
  border: 1px solid #dc3545;
}
</style>