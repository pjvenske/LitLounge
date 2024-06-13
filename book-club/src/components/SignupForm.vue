<template>
    <div>
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="Enter Username..." v-model="displayName">
            <input type="email" required placeholder="Enter Email..." v-model="email">
            <input type="password" required placeholder="Enter Password..." v-model="password">
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        //refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit =() => {
            console.log(displayName.value, email.value, password.value)
        }
        return { displayName, email, password, handleSubmit }
    }
}
</script>

<style>

</style>