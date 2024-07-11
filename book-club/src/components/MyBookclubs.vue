<template>
  <div class="clubs">
    <h1>My book clubs:</h1>
    <div @click="goToClub" class="clubName">
        <p>{{ showCurrentRead()?.name }}</p>
    </div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>

import getUser from '../composables/getUser'
import getCollection from '@/composables/getCollection';

props:['id']

const bookclub = getCollection('bookclub')
const userData = getCollection('user-data')
const { user } = getUser()
import { useRouter } from 'vue-router';

const router = useRouter();

const goToClub = () => {
    const currentUserData = userData.documents.value.find((doc) => doc.id == user.value.uid);
    const currentBookclub = bookclub.documents.value.find((doc) => doc.id == currentUserData?.bookclubId);

    if (currentBookclub) {
      router.push({path: '/bookclub/$currentBookclub.id'})
    }
}

const showCurrentRead = () => {

  const currentUserData = userData.documents.value.find((doc) => doc.id == user.value.uid)
  const currentBookclub = bookclub.documents.value.find((doc) => doc.id == currentUserData?.bookclubId)

  return currentBookclub
}
</script>

<style>
.clubs {
    background-color: #C97D60;
    width: 50%;
    margin: 30px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 3px 5px rgba(41, 41, 41, 0.362);
}

.clubName {
  display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #FFBCB5;
    border-radius: 10px;
    height: 40%;
    text-align: center;
    color: #FFBCB5;
    font-size: 30px;
}

.clubName:hover {
  cursor: pointer;
}
</style>