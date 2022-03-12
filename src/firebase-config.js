import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDeuUd4Ahk7fyu0vcEfN9BzCkxftjNfhXk",
  authDomain: "react-todo-41c62.firebaseapp.com",
  projectId: "react-todo-41c62",
  storageBucket: "react-todo-41c62.appspot.com",
  messagingSenderId: "234710294436",
  appId: "1:234710294436:web:106b56be3fe4932d34eb31"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export  {db}