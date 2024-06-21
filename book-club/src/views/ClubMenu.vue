<template>
  <div>
    <Navbar />
    <p>club menu</p>
    <SearchClubs />
  </div>
</template>

<script setup>
import SearchClubs from '../components/SearchClubs.vue'
import Navbar from '@/components/Navbar.vue';

components: { SearchClubs, Navbar }
</script>

<style>

</style>