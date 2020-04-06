//Firebase Import
import firebase from "firebase/app";
//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBQoLkZ9959fp60-974DWbeeS-FDiiCw-4",
  authDomain: "lassasi-webpage.firebaseapp.com",
  databaseURL: "https://lassasi-webpage.firebaseio.com",
  projectId: "lassasi-webpage",
  storageBucket: "lassasi-webpage.appspot.com",
  messagingSenderId: "623983424546",
  appId: "1:623983424546:web:3f31e6ff17d7c35efec67b",
  measurementId: "G-SGVRGLX8YE",
};
//Firebase Initialize
export default firebase.initializeApp(firebaseConfig);
