<template>
  <div class="currentRead">
    <!-- <p>{{ showCurrentRead() }}</p> -->
  </div>
</template>

<script setup>

import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'

   
// const { addDoc, error } = useCollection('bookclub')
// const { user } = getUser()

// console.log('user is', user.value.displayName)

const showCurrentRead = () => {
  const currentBook = {
    title: 'test'
  }

  return currentBook
}
</script>

<style>

</style>