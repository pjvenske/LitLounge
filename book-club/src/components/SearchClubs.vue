<template>
    <div class="clubs">
      <ul>
        <li v-for="club in clubs.document" :key="club">{{ club?.name }}</li>
      </ul>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import getCollection from '@/composables/getCollection';

const clubs = ref([]);

onMounted(async () => {
  clubs.value = await getCollection('bookclub');
});



</script>

<style>
.clubs {
    color: #63372c;
}
</style>