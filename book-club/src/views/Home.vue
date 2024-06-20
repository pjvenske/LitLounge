<template>
    <div>
        <Navbar />
        <div v-if="user">
            <h3>Hello {{ user.displayName }}</h3>
        </div>
        <div class="homeContainer">
            <CurrentRead />
            <MyBookclubs />
        </div>
    </div>


    
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CurrentRead from '../components/CurrentRead.vue'
import getUser from '../composables/getUser.js'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import MyBookclubs from '../components/MyBookclubs.vue'

export default {
    components: { Navbar, CurrentRead, MyBookclubs },
    setup() {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'welcome' })
            }
        })
        
        console.log('current user', user.value.displayName)

        return { user }
    }
}

</script>

<style>
.homeContainer {
    display: flex;
    justify-content: space-between;
}

</style>