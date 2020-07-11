<template>
  <div id="app" class="container mt-4">
    <div id="nav">
      <router-link to="/" v-if="userExists">Home</router-link> |
      <router-link to="/login" v-if="!userExists">Login</router-link> |
      <router-link to="/register" v-if="!userExists">Register</router-link> |
      <button @click="userLogout" v-if="userExists">Cerrar Sesion</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions(['userLogout'])
  },
  computed: {
    ...mapGetters(['userExists'])
  }
}
</script>

<style>

</style>
