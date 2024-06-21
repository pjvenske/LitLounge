<template>
    <div>
        <Navbar />
        <div class="books">
        <ul>
            <li  v-for="book in books.documents" :key="book" @click="selectBook(book)">
                <img :src="book?.img">
            </li>
        </ul>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import getCollection from '@/composables/getCollection';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue'

components: {Navbar}

const books = ref([]);
const selectedBook = ref(null);
const router = useRouter();

onMounted(async () => {
  books.value = await getCollection('books');
  
  console.log(books.value)
});

function selectBook(book) {
  selectedBook.value = book;
  router.push(`/book/${book.id}`); // Use router.push to navigate
}



</script>

<style>
.books img{
    width: 150px
}

.books ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0; 
  list-style-type: none; 
}

.books li {
  margin-right: 10px; 
}
</style>