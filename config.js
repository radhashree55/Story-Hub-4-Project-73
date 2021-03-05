import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyD91j25D9FMhIJWYVz3LSN8-HVXAVqcSMY",
    authDomain: "story-hub-53a9d.firebaseapp.com",
    projectId: "story-hub-53a9d",
    storageBucket: "story-hub-53a9d.appspot.com",
    messagingSenderId: "837429477207",
    appId: "1:837429477207:web:92d98245d659647cc24812",
    measurementId: "G-R3X4BLMNY6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()