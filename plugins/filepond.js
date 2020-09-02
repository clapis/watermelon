// Import FilePond
import VueFilePond from "vue-filepond";

// Import plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImageCrop from "filepond-plugin-image-crop/dist/filepond-plugin-image-crop.esm.js";
import FilePondPluginImageResize from "filepond-plugin-image-resize/dist/filepond-plugin-image-resize.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
import FilePondPluginImageTransform from "filepond-plugin-image-transform/dist/filepond-plugin-image-transform.esm.js";
import FilePondPluginFileEncode from "filepond-plugin-file-encode/dist/filepond-plugin-file-encode.esm.js";

// Import styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Create FilePond component
export default VueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginFileEncode,
  FilePondPluginImagePreview
);