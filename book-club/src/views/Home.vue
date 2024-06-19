<template>
    <div>
        <Navbar />
        <div v-if="user">
            <h3>Hello {{ user.displayName }}</h3>
        </div>
        <CurrentRead />
    </div>


    
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CurrentRead from '../components/CurrentRead.vue'
import getUser from '../composables/getUser.js'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: { Navbar, CurrentRead },
    setup() {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'welcome' })
            }
        })

        return { user }
    }
}

</script>

<style>

</style>