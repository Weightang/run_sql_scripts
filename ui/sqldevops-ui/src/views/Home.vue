<template>
    <div>
        <h1>Home</h1>
    </div>
</template>

<script>
import { login } from '@/http/api/home.js'
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        this.getHello();
    },
    methods: {
       async getHello() {
            const res = await login()
            console.log(res)
        }
    },
    

}
</script>

<style>

</style>