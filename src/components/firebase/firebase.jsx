// ✅ Correct imports using Compat version
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6QEHqaF7BAnj4edqLp26acsokZkIiubE",
  authDomain: "ushop-db.firebaseapp.com",
  projectId: "ushop-db",
  storageBucket: "ushop-db.firebasestorage.app",
  messagingSenderId: "77513007163",
  appId: "1:77513007163:web:960ed64649f3650204bc1e",
  measurementId: "G-TPZN3N2EHE",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
// Initialize Firebase (only once)
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
