<template>
  <div>
    <intro>
      <template v-slot:main>
        .#
      </template>
      <template v-slot:sub>
        .Net jobs in the Netherlands. Nothing more.
      </template>
    </intro>

    <div class="search mx-auto mb-5">
      <svg class="search__icon" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" alt="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"></path></g></svg>      
      <input type="search" v-model="filter" class="search__text form-control" aria-label="Search">
    </div>

    <div class="jobs">
      <job v-for="job in jobs" :key="job.id" :value="job" />
      <p class="text-center" v-if="filter && jobs.length === 0">No jobs found for '<i>{{filter}}</i>'</p>
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
import Job from "~/components/job";
import Intro from "~/components/intro";

export default {
  components: {
    Job,
    Intro,
    InfiniteLoading: () => import('vue-infinite-loading')
  },
  computed: {
    jobs() {
      return this.$store.getters['jobs/filtered'];
    },
    filter: {
      get() { return this.$store.state.jobs.filter; },
      set(value) { this.$store.commit('jobs/SET_FILTER', value); }
    },
  },
  fetch() {
    // return this.$store.dispatch("jobs/fetch");
  },
  methods: {
    scroll($state) {
      this.$store.dispatch("jobs/fetch")
        .then(any => any ? $state.loaded() : $state.complete())
        .catch(err => $state.error());
    }
  }
};
</script>

<style lang="scss" scoped>

.job {
  border-top: 1px solid #efefef;
}

.search {
  max-width:500px;
  position: relative;
}

.search__icon {
  top: 50%;
  left: 0.75rem;
  margin-top: -8px;
  position: absolute;
}

.search__text {
  padding-left: 2.25rem;
}

</style>
