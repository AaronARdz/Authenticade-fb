<template>
    <div>
        <h1>Eliminar</h1>
        <form class="form-group" @submit.prevent="deleteJob(jobId)">
            <label class="form-control">{{jobId}}</label>
            <button type="submit" class="btn btn-success">Eliminar</button>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    name: 'Delete',
    data() {
        return {
            jobId: this.$route.params.id
        }
    },
    created() {
        this.getJob(this.$route.params.id)
    },
    methods: {
        ...mapActions(['deleteJob','getJob'])
    }
}
</script>