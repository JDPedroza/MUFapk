import Firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCx2jmEfybyo0nMezyYT4drYha_KrHgQ98",
    authDomain: "mufappproject.firebaseapp.com",
    databaseURL: "https://mufappproject.firebaseio.com",
    projectId: "mufappproject",
    storageBucket: "mufappproject.appspot.com",
    messagingSenderId: "421938467104",
    appId: "1:421938467104:web:29f679cd16d24f869b0745",
    measurementId: "G-7YGMST7D2P"
};

export default Firebase.initializeApp(firebaseConfig);