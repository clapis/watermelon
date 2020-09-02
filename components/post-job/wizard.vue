<template>
  <div class="wizard">

    <div class="wizard__header">
      <div class="bar">
        <div class="bar-progress" :style="{ width: progress + '%' }"></div>
      </div>

      <div class="d-flex justify-content-around">
        <div
          v-for="(step, index) in steps"
          v-bind:key="`step-${index}`"
          @click.prevent.stop="backTo(index)"
          class="step text-center"
          :class="{ 
               'past-step': index < currentStep,
               'future-step': index > currentStep,
               'current-step': index === currentStep
              }"
        >
          <span style="font-size: 150%">
            <component :is="step.icon" />
          </span>
          <!-- <b-icon :icon="step.icon" font-scale="1.5"></b-icon> -->
          <div>{{step.title}}</div>
        </div>
      </div>
    </div>

    <div class="wizard__body">
      <b-form>
        <slot></slot>
      </b-form>
    </div>

    <div class="wizard__footer d-flex">
      <b-button @click="previousStep" v-if="currentStep > 0" variant="outline-secondary">Previous</b-button>
      <b-button
        @click="nextStep"
        v-if="currentStep < totalSteps - 1"
        variant="dark"
        class="ml-auto"
      >Next</b-button>
      <b-button
        @click="onSubmit"
        v-if="currentStep === totalSteps - 1"
        variant="dark"
        class="ml-auto"
      >Publish</b-button>
    </div>

  </div>
</template>

<script>
import { BForm } from 'bootstrap-vue';
import { BIconHouseFill, BIconPersonCheckFill, BIconCloudUpload } from 'bootstrap-vue';


export default {
  components: { BForm, BIconHouseFill, BIconPersonCheckFill, BIconCloudUpload },
  data() {
    return {
      steps: [],
      currentStep: 0,
    };
  },
  props: {},
  mounted() {
    this.steps = this.$children;
    this.switchStep(0);
  },
  computed: {
    totalSteps() {
      return this.steps.length;
    },
    progress() {
      return (this.currentStep / (this.steps.length - 1)) * 100;
    },
  },
  methods: {
    previousStep() {
      this.switchStep(this.currentStep - 1);
    },
    async nextStep() {
      if (!(await this.validate())) return;
      this.switchStep(this.currentStep + 1);
    },
    async onSubmit() {
      if (!(await this.validate())) return;
      this.$emit("onSubmit");
    },
    backTo(index) {
      if (index < this.currentStep) this.switchStep(index);
    },
    switchStep(index) {
      this.steps.forEach(step => step.isActive = false);
      this.currentStep = index;
      this.steps[index].isActive = true;
      this.$nextTick(() => this.$parent.$el.scrollIntoView({ behavior: "smooth" }));
    },
    validate() {
      return this.steps[this.currentStep].validate();
    },
  },
};
</script>

<style lang="scss" scoped>
.wizard {
  margin: 0 auto;
  max-width: 800px;
}

.wizard__header {
  .bar {
    top: 25px;
    width: 75%;
    height: 1px;
    margin: 0 auto;
    position: relative;
    background-color: #ccc;
    z-index: -1;

    .bar-progress {
      height: 100%;
      background-color: #777;
      transition: width 0.3s ease;
    }
  }

  .step {
   
    padding: 0 1rem;
    background: white;

    &.past-step {
      cursor: pointer;
      color: #777;
    }

    &.future-step {
      color: #ccc;
    }
  }
}

.wizard__body {
  margin: 3rem auto;
}
</style>