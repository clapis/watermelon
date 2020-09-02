<template>
  <div>
    <intro>
      <template v-slot:main>
        # using (dotnet) {
      </template>
      <template v-slot:sub>
        <p>
          
        </p>
      </template>
    </intro>
    <div class="text-muted text-center">
      coming soon..
    </div>

  </div>
</template>

<script>
import Intro from "~/components/intro";

export default {
  components: { Intro }
}
</script>