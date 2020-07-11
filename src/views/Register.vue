<template>
    <div>
        <h1>Registro de Usuarios</h1>
        <form @submit.prevent="createUser({email: email,password: passOne})">
            <input 
            type="email" placeholder="Ingrese su correo"
            v-model="email">
            <input 
            type="password" placeholder="Ingrese su contrasena"
            v-model="passOne">
            <input 
            type="password" placeholder="Confirme su contrasena"
            v-model="passTwo">
            <button type="sumbit" :disabled='!deactivate' >Registrate</button>
        </form>
        <p>{{error}}</p>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            passOne: '',
            passTwo: '',
        }
    },
    created() {

    },
    methods: {
        ...mapActions(['createUser'])
    },
    computed: {
        ...mapState(['error']),
        deactivate() {
            return this.passOne === this.passTwo && this.passOne.trim() !== '' && this.passOne.length > 5
        }
    }
}
</script>