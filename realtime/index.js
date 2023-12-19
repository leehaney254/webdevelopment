const firebase = require('firebase')
let json;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWb-pPO-mxbiT7Ha7DIYhYlpDqtBFyhjg",
  authDomain: "testing-58bc5.firebaseapp.com",
  databaseURL: "https://testing-58bc5-default-rtdb.firebaseio.com",
  projectId: "testing-58bc5",
  storageBucket: "testing-58bc5.appspot.com",
  messagingSenderId: "816235286882",
  appId: "1:816235286882:web:f54dff143119a578621c3b"
};

// Get a database reference to our posts
firebase.initializeApp(firebaseConfig);
const ref = firebase.database().ref("Sensor");

// Attach an asynchronous callback to read the data at our posts reference
ref.on('value', (snapshot) => {
  json = snapshot.val();
  console.log(json);;
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

