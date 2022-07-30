import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
        apiKey: "AIzaSyBv0MvUcQGXmYDrRnVkmd7VzrZmM2EIamI",
        authDomain: "journal-9ca63.firebaseapp.com",
        projectId: "journal-9ca63",
        storageBucket: "journal-9ca63.appspot.com",
        messagingSenderId: "91666709756",
        appId: "1:91666709756:web:37529895a08efb804c6b79"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app);
export { db, storage };