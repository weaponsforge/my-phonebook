// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getStorage, getDownloadURL, ref } from 'firebase/storage'
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_WEB_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_WEB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_WEB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_WEB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_WEB_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_WEB_MEASUREMENT_ID
}

// Initialize Firebase
// Initialize Firebase
const firebaseApp = (getApps().length === 0)
  ? initializeApp(firebaseConfig)
  : getApps()[0]

const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)
const auth = getAuth(firebaseApp)

export {
  db,
  ref,
  auth,
  storage,
  firebaseApp,
  signOut,
  getAuth,
  getDownloadURL,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
}
