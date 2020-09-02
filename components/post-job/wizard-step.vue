<template>
    <validation-observer ref="observer" v-if="isActive">
      <slot></slot>
    </validation-observer>
</template>

<script>
import { ValidationObserver } from "vee-validate/dist/vee-validate.full.esm";

export default {
  components: {
    ValidationObserver,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    validate() {
      return this.$refs.observer.validate();
    },
  },
};
</script>