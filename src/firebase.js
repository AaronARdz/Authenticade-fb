import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD82GTOnh9IgHTFS_TLkXu3vSk4mL2BuUw",
    authDomain: "auth-2020-d2253.firebaseapp.com",
    databaseURL: "https://auth-2020-d2253.firebaseio.com",
    projectId: "auth-2020-d2253",
    storageBucket: "auth-2020-d2253.appspot.com",
    messagingSenderId: "1066363348011",
    appId: "1:1066363348011:web:ce397f805d3b209e10f66e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()



export {db, auth}