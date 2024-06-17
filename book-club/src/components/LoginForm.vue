<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="Enter Email..." v-model="email">
        <input type="password" required placeholder="Enter Password..." v-model="password">
        <div class="error">{{ error }}</div>
        <button>Log in</button>
        </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import useLogin from '@/composables/useLogin'
  
  export default {
      setup(props, context) {
          //refs
          const email = ref('')
          const password = ref('')

          const { error, login } = useLogin()
  
          const handleSubmit = async () => {
              await login(email.value, password.value)
              if(!error.value) {
                  context.emit('login')
              }
          }
          return { email, password, handleSubmit, error, useLogin }
      }
  }
  </script>
  
  <style>
  
  </style>