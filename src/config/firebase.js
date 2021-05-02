import firebase from "firebase";
import "firebase/auth"

const config = JSON.parse(process.env.FIREBASE_CONFIG);

const firebase = firebase.initializeApp(config);

export const auth = firebase.auth()

export default firebase;
