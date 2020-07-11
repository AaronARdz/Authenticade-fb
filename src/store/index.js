import Vue from 'vue'
import Vuex from 'vuex'

import {auth, db} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    jobs: [],
    job: {name: '', id: ''}
  },
  mutations: {
    setUser(state,payload) {
      state.user = payload
    },
    setError(state,payload) {
      state.error = payload
    },
    setJobs(state, payload) {
      state.jobs = payload
    },
    setJob(state, payload) {
      state.job  = payload
    },
  },
  actions: {
    getJobs({commit, state},){
      const jobs = []
      db.collection(state.user.email).get()
      .then(res => {
        res.forEach(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let job = doc.data()
          job.id = doc.id
          jobs.push(job)
        })
        commit('setJobs', jobs)
      })
    },
    getJob({commit, state}, jobId){
      db.collection(state.user.email).doc(jobId).get()
      .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
        let job = doc.data()
        job.id = doc.id
        commit('setJob', job)
      })
    },
    editJob({commit, state}, job){
      console.log('edit')
      db.collection(state.user.email).doc(job.id).update({
        name: job.name
      })
      .then(() => {
        console.log('job edited')
        router.push('/')
      })
    },
    addJob({commit, state}, name) {
      db.collection(state.user.email).add({
        name: name
      })
      .then(doc => {
        console.log("added" + doc.id)
        router.push('/')
      })
    },
    deleteJob({commit, state}, id) {
      db.collection(state.user.email).doc(id).delete()
      .then(() => {
        console.log('deleted job')
        this.dispatch('getJobs')
      })
    },
    createUser({commit}, user) {
      auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res)
        const userCreated ={
          email: res.user.email,
          uid: res.user.uid,
          password: res.user.password
        }
        db.collection(res.user.email).add({
          name: 'example job'
        }).then(doc => {
          commit('setUser', userCreated)
          router.push('/')
        }).catch(error => console.log(error))
      }).catch(error => {
        console.log(error)
        commit('setError', error)
      })
    },
    userLogin({commit}, user) {
      auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res)
        const loggedUser ={
          email: res.user.email,
          uid: res.user.uid,
          password: res.user.password
        }
        commit('setUser', loggedUser)
        router.push('/')
      })
      .catch(error => {
        console.log(error)
        commit('setError', error)
      })
    },
    userLogout({commit}) {
      auth.signOut()
      .then(() => {
        router.push('/login')
      })
    },
    detectUser({commit},user) {
      commit('setUser',user)
    }
  },
  getters: {
    userExists(state) {
      if (state.user === null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {
  }
})
