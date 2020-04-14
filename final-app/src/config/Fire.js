import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfO1-GFvUCptJEDq7vkXZ6ZeF5zqnGcLE",
    authDomain: "project-d964b.firebaseapp.com",
    databaseURL: "https://project-d964b.firebaseio.com",
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;