<template>
  <div class="currentRead">
    <p>{{ addDoc }}</p>
  </div>
</template>

<script>
import useCollection from '@/composables/getCurrentRead';
import { ref } from 'vue'

export default {
   setup() {
    const book = ref('')

    const { addDoc, error } = useCollection('books')
    console.log(addDoc)

    return { book, addDoc, error }
   }
}
</script>

<style>

</style>