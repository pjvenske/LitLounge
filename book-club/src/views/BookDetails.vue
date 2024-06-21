<template>
  <div>
    <div >
      <h2>{{ getBookDetails()?.title }}</h2>
      <h3>{{ getBookDetails()?.author }}</h3>
      <p>{{ getBookDetails()?.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'; // Step 1: Import useRoute
import getCollection from '../composables/getCollection';
// Import your data fetching library/method, e.g., a Firestore fetch method

const route = useRoute();
const book = getCollection('books')


const getBookDetails = () => {
  const bookId = route.params.id;
  const currentBook = book.documents.value.find((doc) => doc.id === bookId)
  console.log(book.value)

  return currentBook
};


</script>

<style>
/* Style as needed */
</style>

<style>
/* Style as needed */
</style>