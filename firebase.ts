import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC2AMA4DzComogZxlKDrqtRQUPZrmyYdM8",
  authDomain:"loginpage-88825.firebaseapp.com",
  projectId: "loginpage-88825",
  storageBucket: "loginpage-88825.appspot.com",
  messagingSenderId:"962289027598",
  appId: "1:962289027598:web:c2dac0e75cfcf205a94a5f"
  };

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const storage=getStorage(app)
export const db = getFirestore()