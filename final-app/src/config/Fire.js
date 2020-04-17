import firebase from 'firebase';
import 'firebase/auth';
import apiConfig from '../apiKeys'

const firebaseConfig = {
    apiKey: apiConfig.FirebaseKey,
    authDomain: apiConfig.domain,
    databaseURL: apiConfig.baseURL,
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;