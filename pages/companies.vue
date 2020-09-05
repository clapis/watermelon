<template>
  <div>
    <intro>
      <template v-slot:main>
        # using (dotnet) {
      </template>
    </intro>

    <div class="companies">
      <company v-for="company in companies" :key="company.id" :value="company" />
      <client-only>
        <infinite-loading @infinite="scroll">
          <div slot="no-more"></div>
          <div slot="no-results"></div>
        </infinite-loading>
      </client-only>
    </div>
  </div>
</template>

<script>
import Intro from "~/components/intro";
import Company from "~/components/company";

export default {
  components: { 
    Intro,
    Company,
    InfiniteLoading: () => import('vue-infinite-loading')
  },
  computed: {
    companies() {
      return this.$store.state.companies.list;
    }
  },
  methods: {
    scroll($state) {
      this.$store.dispatch("companies/fetch")
        .then(any => any ? $state.loaded() : $state.complete())
        .catch(err => $state.error());
    }
  }
}
</script>

<style lang="scss">
.company {
  border-top: 1px solid #efefef;
}
</style>