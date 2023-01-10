// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtIrOC3xSG6IbS4VUDNE0JkJ6bw4B_VYo",
  authDomain: "task-manager-bb4a0.firebaseapp.com",
  projectId: "task-manager-bb4a0",
  storageBucket: "task-manager-bb4a0.appspot.com",
  messagingSenderId: "118679547409",
  appId: "1:118679547409:web:18d8f4d8325efd254f4bb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const firestore = getFirestore(app);
