<template>
    <div class="wishList">
      <h1>Wish List:</h1>
        <div class="list">
          <ul v-for="book in showWishList()" :key="book">
            <li><img :src="book.img"></li>
          </ul>
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

const showWishList = () => {
  const currentUserData = userData.documents.value.find((doc) => doc.id == user.value.uid)
  const currentBookclub = bookclub.documents.value.find((doc) => doc.id == currentUserData?.bookclubId)
  
  // Ensure wishList is an array before calling .includes
  const wishList = book.documents.value.filter((doc) => 
    Array.isArray(currentBookclub?.wishList) && currentBookclub.wishList.includes(doc.id)
  )

  return wishList
}
</script>

  
  
<style>
.wishList img{
  width: 150px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(41, 41, 41, 0.362);

}

.wishList {
  text-align: center;
  width: 50%;
  margin: 30px;
  color: #63372C;
  text-decoration: none;
}
.wishList ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between; /* This spreads the items evenly across the container */
  align-items: center; /* This vertically centers the items */
  gap: 10px; /* Adjust the gap as needed */
}

  
</style>