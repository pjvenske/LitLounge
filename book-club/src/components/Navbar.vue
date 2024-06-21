<template>
    <nav>
        <div class="navbar">
            <div class="logo">
                <h3>LitLounge</h3>
                <img src="../assets/litLogo.svg">
            </div>
            <div v-if="user" class="links">
                <router-link to="/home">Home</router-link>
                <router-link to="/clubmenu">Clubs</router-link>
            </div>
            <div v-if="user">
                <button @click="handleClick">Logout</button>
            </div>
        </div>
    </nav>

</template>

<script>
import useLogout from '@/composables/useLogout';
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'

export default {
    setup() {
        const { logout, error } = useLogout()
        const router = useRouter()

        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if(!error.value) {
                router.push({ name: 'welcome' })
            }
        }

        return { logout, handleClick, error, user}
    }

}
</script>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #63372C;
    padding: 0;
    margin: 0;
}

.logo {
    display: flex;
    color: #C97D60;
    font-size: 40px;
    font-weight: bold;
}

.links {
    color: #C97D60;
    font-size: 30px;
}
</style>