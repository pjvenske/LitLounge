<template>
    <nav>
        <div class="navbar">
            <div class="logo">
                <h3>LitLounge</h3>
                <img src="../assets/litLogo.svg">
            </div>
            <div v-if="user" class="links">
                <router-link to="/home"><img src="../assets/🦆 icon _home_.svg"></router-link>
                <router-link to="/clubmenu"><img src="../assets/🦆 icon _book_.svg"></router-link>
                <router-link to="/search"><img src="../assets/🦆 icon _magnifying glass_.svg"></router-link>
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
    padding: 20px;
    margin: 0;
    height:100px;
    width: 100vw;
    box-sizing: border-box;
}

.logo {
    display: flex;
    color: #C97D60;
    font-size: 40px;
    font-weight: bold;
}

.links {
    display: flex;
    gap: 30px;
    color: #C97D60;
    margin: auto;
}
</style>