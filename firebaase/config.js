const firebase = require('firebase')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbShJPZX4P5FilMFCjn7ekeyA3WxSPquI",
  authDomain: "webapp-d38de.firebaseapp.com",
  projectId: "webapp-d38de",
  storageBucket: "webapp-d38de.appspot.com",
  messagingSenderId: "399290005113",
  appId: "1:399290005113:web:dc49794c46192e13f546a8"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const User = db.collection("Users")
module.exports = User;

