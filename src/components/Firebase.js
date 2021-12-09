import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSq1s00JDXRFvbGyXIYCFbsGWdHcMU45I",
  authDomain: "the-art-of-thriving.firebaseapp.com",
  databaseURL: "https://the-art-of-thriving-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-art-of-thriving",
  storageBucket: "the-art-of-thriving.appspot.com",
  messagingSenderId: "462765906388",
  appId: "1:462765906388:web:be1c00ca15b54477db1e41",
  measurementId: "G-0GQT34F9N0"
};

// Initialize Firebase allows for use of fireabse throughout the whole app
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

//signing in with google
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//signing in using email and password
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//registering a new user with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
