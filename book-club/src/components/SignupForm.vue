<template>
    <div>
        <h2>Sign Up</h2>
        <form @submit.prevent="handleSubmit">
            <input type="text" required placeholder="Enter Username..." v-model="displayName">
            <input type="email" required placeholder="Enter Email..." v-model="email">
            <input type="password" required placeholder="Enter Password..." v-model="password">
            <div class="error">{{ error }}</div>
            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
// import useCollection from '@/composables/useCollection'

export default {
    setup(props, context) {
        const { error, signup } = useSignup()
        // const userData = useCollection('user-data')

        // const addUser = () => {
        //     const clubs = userData.documents.add(doc)

        //     return clubs
        // }

        //refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value )
            if(!error.value) {
                  context.emit('signup')
              }
        }
        return { displayName, email, password, handleSubmit, useSignup, error }
    }
}
</script>

<style>

</style>