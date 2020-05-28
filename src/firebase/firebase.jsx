import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA3U3NI16Po7UyNTxwFeA9da4UdxDNt8iU",
    authDomain: "virtual-networking-278509.firebaseapp.com",
    databaseURL: "https://virtual-networking-278509.firebaseio.com",
    projectId: "virtual-networking-278509",
    storageBucket: "virtual-networking-278509.appspot.com",
    messagingSenderId: "981458827796",
    appId: "1:981458827796:web:d0ef5efceeabe2c7d78501",
    measurementId: "G-DVK8S8X84W"
  };

  firebase.initializeApp(firebaseConfig)


  const storage = firebase.storage();

  export {storage, firebase as default};