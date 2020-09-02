<template>
  <div class="container d-flex flex-column vh-100">
    <div>
      <x-header />
    </div>
    <nuxt class="flex-shrink-0" />
    <div class="mt-auto">
       <x-footer />
    </div>
  </div>
</template>

<script>
import XHeader from "~/components/layout/header.vue";
import XFooter from "~/components/layout/footer.vue";

export default {
  components: {
    XHeader,
    XFooter
  }
};
</script>