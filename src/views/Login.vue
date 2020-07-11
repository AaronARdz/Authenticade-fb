<template>
    <div>
        <h1>User Login</h1>
        <form @submit.prevent="userLogin({email: email, password: pass})">
            <input type="email"
            placeholder="ingrese email"
            v-model="email"
            >
            <input type="password"
            placeholder="ingrese contrasena"
            v-model="pass"
            >
            <button type="submit">Acceder</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            pass: ''
        }
    },
    methods: {
        ...mapActions(['userLogin'])
    },
    computed: {
        ...mapState(['error'])
    }
}
</script>