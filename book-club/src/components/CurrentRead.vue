<template>
  <div class="currentRead">
    <h2>Current Read</h2>
    <p>{{ currentRead }}</p>
  </div>
</template>

<script>
import getCurrentRead from '@/composables/getCurrentRead';

export default {
   setup() {
      const currentRead = getCurrentRead();

      currentRead
      console.log(currentRead)
   }
}
</script>

<style>

</style>