<template>
    <div>
        <h1>Agregar</h1>
        <form class="form-group" @submit.prevent="addJob(name)">
            <input type="text" v-model="name">
            <button type="submit" class="btn btn-success">Agregar</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'Add',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['addJob'])
    }
}
</script>