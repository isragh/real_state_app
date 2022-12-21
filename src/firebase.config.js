import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6xn4lxS8Le4QFc8s2EZO4K1Xlr_FnCWc",
  authDomain: "real-estate-app-75b32.firebaseapp.com",
  projectId: "real-estate-app-75b32",
  storageBucket: "real-estate-app-75b32.appspot.com",
  messagingSenderId: "326367745072",
  appId: "1:326367745072:web:ea0020a7cc4a943b7649f5"
};

initializeApp(firebaseConfig);

export const db = getFirestore()