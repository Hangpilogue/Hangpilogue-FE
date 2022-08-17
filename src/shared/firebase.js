import { initializeApp } from 'firebase/app';
import {getStorage} from "firebase/storage"



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRrsVOysYctv4q5cPyGKFL3lTeEDDgjQ0",
  authDomain: "react-auth-example-f22bd.firebaseapp.com",
  projectId: "react-auth-example-f22bd",
  storageBucket: "react-auth-example-f22bd.appspot.com",
  messagingSenderId: "780000847006",
  appId: "1:780000847006:web:460ca0f8b42aee84bd078f",
  measurementId: "G-3V6P85J00L"
};

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)