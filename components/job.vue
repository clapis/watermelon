<template>
  <div class="job" :class="{ 'job--featured': value.isFeatured, 'job--preview': preview }">
    <div class="job__header row align-items-center no-gutters" v-b-toggle="'job-' + value.id">
      <div class="col-md-5 col-12">
        <b-media>
          <template v-slot:aside>
            <b-avatar :src="logo" :text="initials" square :size="48"></b-avatar>
          </template>
          <div class="job__position">{{ value.position }}</div>
          <span class="text-muted">{{ value.companyName }}</span>
        </b-media>
      </div>
      <div class="col-md d-none d-md-block">
        <span
          v-for="tag in value.tags"
          :key="tag"
          class="badge badge-light text-uppercase m-1"
        >{{tag}}</span>
      </div>
      <div class="col-md-2 d-none d-md-block text-right">
        <small class="text-muted">{{ age }}</small>
        <div class="job__location">{{ value.remote ? 'Remote' : value.location }}</div>
      </div>
      <div class="col-md-2 d-none d-md-block" v-if="!preview">
        <b-button
          :href="value.applyUrl"
          target="_blank"
          rel="noopener"
          class="job__apply-btn"
          variant="danger"
        >Apply</b-button>
      </div>
    </div>

    <b-collapse :id="'job-' + value.id" accordion="jobs">
      <div class="job__body p-3 m-md-2">
        <div class="job__description" v-html="value.description"></div>
        <div class="d-md-none d-flex justify-content-center" v-if="!preview">
          <b-button
            :href="value.applyUrl"
            target="_blank"
            rel="noopener"
            variant="danger"
            class="px-5 mt-2"
          >Apply</b-button>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import { BMedia, BAvatar } from "bootstrap-vue";

export default {
  components: {
    BMedia,
    BAvatar,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    preview: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    initials() {
      return this.value.companyName
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0])
        .join("");
    },
    age() {
      return this.value.age > 1 ? `${this.value.age}d` : "today";
    },
    logo() {
      if (this.preview && this.value.logo)
        return `data:image/png;base64,${this.value.logo}`;
      if (this.value.hasLogo)
        return `${this.$config.apiUrl}/companies/${this.value.companyId}/logo`;
    },
  },
};
</script>

<style scoped>
.job__header {
  padding: 0.75rem;
  outline-style: none;
}

.job__header:hover,
.job__header.not-collapsed {
  background-color: #f8f9fa;
}
.job__header:hover .job__apply-btn,
.job__header.not-collapsed .job__apply-btn {
  display: block;
}

.job__header.not-collapsed {
  border-left: 4px solid #afafaf;
}

.job__position {
  font-weight: 600;
}

.job__location {
  font-size: 0.9rem;
}

.job__apply-btn {
  width: 80%;
  display: none;
  margin-left: auto;
}

@media (min-width: 992px) {
  .job:not(.job--preview) .job__description {
    max-width: 800px;
    margin-left: 60px;
  }
}

/* Featured */
.job--featured .job__header {
  background-color: cornsilk;
}

/* Preview  Mode */
.job--preview .job__header {
  background-color: #f8f9fa;
}
</style>