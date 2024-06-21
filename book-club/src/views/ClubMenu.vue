<template>
  <div>
    <Navbar />
    <h1>Club Menu</h1>
    <SearchClubs />
  </div>
</template>

<script setup>
import SearchClubs from '../components/SearchClubs.vue'
import Navbar from '@/components/Navbar.vue';

components: { SearchClubs, Navbar }
</script>

<style>
h1 {
  color: #63372C;
  text-align: center;
}
</style>