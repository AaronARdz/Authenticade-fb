<template>
    <div class="container">
        <h1>Ruta protegida</h1>
        <p>{{user.email}}</p>
        <router-link
        to="/add"
        >
        <button class="btn btn-info">Agregar</button>
        </router-link>
        <div>
            <ul class="list-group">
            <li class="list-group-item" v-for="(job,index) in jobs" :key="index">
                {{job.name}} {{job.id}}
            <router-link :to="{name: 'Edit', params: {id: job.id}}">
                <button class="btn btn-primary float-right">Editar</button>
            </router-link>
            <button class="btn btn-danger float-right" @click="deleteJob(job.id)">Eliminar</button>
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'Home',
    computed: {
        ...mapState(['user','jobs'])
    },
    methods: {
        ...mapActions(['getJobs', 'deleteJob'])
    },
    created() {
        this.getJobs()
    }
}
</script>