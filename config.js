import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBqNAoDLV2qtfio50WlexnGZaFyNx2nPVg",
  authDomain: "story-hub-c7e8e.firebaseapp.com",
  databaseURL: "https://story-hub-c7e8e.firebaseio.com",
  projectId: "story-hub-c7e8e",
  storageBucket: "story-hub-c7e8e.appspot.com",
  messagingSenderId: "1054106795890",
  appId: "1:1054106795890:web:c7d82891eed3dc9b5867eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore();