<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="Enter Email..." v-model="email">
        <input type="password" required placeholder="Enter Password..." v-model="password">
        <button>Log in</button>
        </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
      setup() {
          //refs
          const email = ref('')
          const password = ref('')
  
          const handleSubmit =() => {
              console.log(email.value, password.value)
          }
          return { email, password, handleSubmit }
      }
  }
  </script>
  
  <style>
  
  </style>