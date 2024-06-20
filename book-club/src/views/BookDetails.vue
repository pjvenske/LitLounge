<template>
  <div>
    <div class="club">
      <p>{{ showClub()?.name }}</p>
    </div>
    <div>
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

components: { CurrentRead, WishList }

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

</style>