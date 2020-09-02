<template>
  <div class="intro text-center mx-auto mb-5">
    <h1>
      <slot name="main"></slot>
    </h1>
    <div class="lead mx-2">
      <slot name="sub"></slot>
    </div>
  </div>
</template>

<style>
.intro {
  max-width: 600px;
}
</style>