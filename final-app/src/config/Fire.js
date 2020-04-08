import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfO1-GFvUCptJEDq7vkXZ6ZeF5zqnGcLE",
    authDomain: "project-d964b.firebaseapp.com",
    databaseURL: "https://project-d964b.firebaseio.com",
    projectId: "project-d964b",
    storageBucket: "project-d964b.appspot.com",
    messagingSenderId: "11161984430",
    appId: "1:11161984430:web:812942c6c133087d8bbc3f",
    measurementId: "G-RQD7TQ54NB"
  };
  const fire = firebase.initializeApp(config);
  export default fire;