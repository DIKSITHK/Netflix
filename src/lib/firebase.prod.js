import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyBrxV-mEH5RMjh1o3Q07fMfFr-10bz3iUM",
    authDomain: "netflix-clone-49789.firebaseapp.com",
    projectId: "netflix-clone-49789",
    storageBucket: "netflix-clone-49789.appspot.com",
    messagingSenderId: "760313783509",
    appId: "1:760313783509:web:b17958885cbfd5e700ae5c",
    measurementId: "G-05CVLMRCZ4"
};

const firebase = Firebase.initializeApp(config);

export { firebase };