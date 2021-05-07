import firebase from "firebase";
import "firebase/auth"

const config = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

firebase.initializeApp(config);
export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export default firebase;