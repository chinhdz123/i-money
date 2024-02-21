import firebase from 'firebase/app'
import 'firebase/firestore'
require('firebase/auth')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB5keH3t6rONU_GJqNXZtf4E1q73XnL-dE',
  authDomain: 'i-money-7751a.firebaseapp.com',
  projectId: 'i-money-7751a',
  storageBucket: 'i-money-7751a.appspot.com',
  messagingSenderId: '561074992032',
  appId: '1:561074992032:web:cef5ee7281ed5de2ce6ac5',
  measurementId: 'G-SWENPLPYCS'
}

firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
