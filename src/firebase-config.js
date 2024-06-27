import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNRoMz94YkUgv86yUq24Y2UpExuo6cXQc",
  authDomain: "front-end-lab10.firebaseapp.com",
  projectId: "front-end-lab10",
  storageBucket: "front-end-lab10.appspot.com",
  messagingSenderId: "473348153899",
  appId: "1:473348153899:web:0096dd6bc5bf88f897806e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
