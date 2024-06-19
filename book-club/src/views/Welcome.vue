<template>
  <div>
    <Navbar />
    <div class="welcome container">
      <h1>Welcome</h1>

      <div v-if="showLogin">
          <LoginForm @login="enterHome" />
          <p>Don't have an account? <span @click="showLogin = false">Sign Up</span> here</p>
      </div>
      <div v-else>
          <SignupForm @signup="enterHome" />
          <p>Have an account? <span @click="showLogin = true">Login</span> here</p>

      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

export default {
    components: { SignupForm, LoginForm, Navbar },
    setup() {
        const showLogin = ref(true)
        const router = useRouter()


        const enterHome = () => {
          router.push({ name: 'home' })
        }


        return { showLogin, enterHome }
    }
}
</script>

<style>
    .welcome {
    text-align: center;
    padding: 20px 0;
    color: #63372C;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
    color: #F2E5D7;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
    color:#F2E5D7;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #63372C;
    background: #63372C;
    outline: none;
    color: #F2E5D7;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
    cursor: pointer;
    background: #C97D60;
    height: 40px;
    width: 80px;
    border-radius: 50px;
    border:1px solid #C97D60;
    color: #F2E5D7;
  }
</style>