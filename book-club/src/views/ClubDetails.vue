<template>
  <div>
    <Navbar />
    <div class="club">
      <h1>{{ showClub()?.name }}</h1>
    </div>
    <div class="clubContainer">
      <CurrentRead />
      <WishList />
    </div>
  </div>
</template>

<script setup>
import getUser from '../composables/getUser'
import getCollection from '@/composables/getCollection';
import CurrentRead from '@/components/CurrentRead.vue';
import WishList from '@/components/WishList.vue'
import Navbar from '../components/Navbar.vue';

components: { CurrentRead, WishList, Navbar }

const bookclub = getCollection('bookclub')
const userData = getCollection('user-data')
const { user } = getUser()


const showClub = () => {
    const currentUserData = userData.documents.value.find((doc) => doc.id == user.value.uid);
    const currentBookclub = bookclub.documents.value.find((doc) => doc.id == currentUserData?.bookclubId);

    return currentBookclub
}
</script>

<style>
.clubContainer {
  display: flex;
}

</style>