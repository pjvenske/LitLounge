<template>
  <div>
    <Navbar />
    <div class="bookDetail" >
      <h2>{{ getBookDetails()?.title }}</h2>
      <img :src="getBookDetails()?.img">
      <h3>{{ getBookDetails()?.author }}</h3>
      <p class="description">{{ getBookDetails()?.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'; // Step 1: Import useRoute
import getCollection from '../composables/getCollection';
import Navbar from '../components/Navbar.vue'
// Import your data fetching library/method, e.g., a Firestore fetch method

components: { Navbar }

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
.bookDetail {
  text-align: center;
  margin: 30px;
  color: #63372C;
}

.bookDetail img {
  width: 150px;
}
.description {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 3px 5px rgba(41, 41, 41, 0.362);
}
</style>

