<template>
  <div class="currentRead">
    <h1>Current Read:</h1>
    <img :src="showCurrentRead()?.img">
    <div class="desc">
      <h2>{{ showCurrentRead()?.title }}</h2>
      <h3>{{ showCurrentRead()?.author }}</h3>
      <p>{{ showCurrentRead()?.desc }}</p>
    </div>
  </div>
</template>

<script setup>

import getUser from '../composables/getUser'
import getCollection from '@/composables/getCollection';

const bookclub = getCollection('bookclub')
const book = getCollection('books')
const userData = getCollection('user-data')
const { user } = getUser()


const showCurrentRead = () => {

  const currentUserData = userData.documents.value.find((doc) => doc.id == user.value.uid)
  const currentBookclub = bookclub.documents.value.find((doc) => doc.id == currentUserData?.bookclubId)
  const currentRead = book.documents.value.find((doc) => doc.id == currentBookclub?.currentRead)


  return currentRead
}
</script>


<style>
.currentRead img{
  width: 150px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(41, 41, 41, 0.362);

}

.currentRead {
  text-align: center;
  width: 50%;
  margin: 30px;
  color: #63372C;
}

.desc {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 3px 5px rgba(41, 41, 41, 0.362);
}
</style>