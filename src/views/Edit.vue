<template>
    <div class="container">

        <div class="card text-white bg-primary mb-3" style="max-width: 40rem;">
            <div class="card-header">Editar</div>
            <div class="card-body">
                <h5 class="card-title">Job ID: {{id}} </h5>
                <p class="card-text">Name: {{job.name}}</p>
            </div>
        </div>
        <form class="form-group" @submit.prevent="editJob(job)">
            <input type="text" class="form-control" placeholder="job.name"
            v-model="job.name" style="max-width: 30em;">
            <button type="submit" class="btn btn-success mt-2">Editar</button>
        </form>
    </div>

</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Edit',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getJob(this.id)
    },
    methods: {
        ...mapActions(['getJob', 'editJob'])
    },
    computed: {
        ...mapState(['job'])
    }
}
</script>