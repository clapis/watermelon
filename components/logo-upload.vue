<template>
  <div class="logo-upload">
    <client-only>
      <file-pond
        :files="files"
        @addfile="onAddFile"
        @removefile="onRemoveFile"
        image-crop-aspect-ratio="1:1"
        image-resize-target-width="100"
        image-resize-target-height="100"
        accepted-file-types="image/jpeg, image/png"
        image-transform-output-mime-type="image/png"
        label-idle="Logo"
        style-panel-layout="integrated"
        style-panel-aspect-ratio="1:1"
        style-button-remove-item-position="right"
      />
    </client-only>
  </div>
</template>

<script>

export default {
  components: { 
    FilePond: () => import('~/plugins/filepond.js') 
  },
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      files: this.value ? [{ source: `data:image/png;base64,${this.value}` }] : [],
    };
  },
  methods: {
    onAddFile(err, item) {
      if (err) return;
      this.$emit("input", item.getFileEncodeBase64String());
    },
    onRemoveFile(err, item) {
      if (err) return;
      this.$emit("input", null);
    },
  },
};
</script>

<style>
.logo-upload {
  width: 125px;
  height: 125px;
}

.filepond--file-info,
.filepond--image-preview-overlay {
  display: none !important;
}

.filepond--drop-label,
.filepond--drop-label label {
  cursor: pointer !important;
}

.icon-upload::before {
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  display: inline-block;
  vertical-align: text-bottom;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' class='bi bi-upload' fill='%234f4f4f' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8zM5 4.854a.5.5 0 0 0 .707 0L8 2.56l2.293 2.293A.5.5 0 1 0 11 4.146L8.354 1.5a.5.5 0 0 0-.708 0L5 4.146a.5.5 0 0 0 0 .708z'/%3E%3Cpath fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 2z'/%3E%3C/svg%3E");
}
</style>