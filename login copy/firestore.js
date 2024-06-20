var firebaseConfig = {
    apiKey: "AIzaSyDrB2xwRFYeZB4xlkaWMwgByx1yCLUSYP0",
    authDomain: "trucklaundary.firebaseapp.com",
    projectId: "trucklaundar",
    storageBucket: "trucklaundary.appspot.com",
    messagingSenderId: "35214736297",
    appId: "1:35214736297:web:58f6f8b3dea66a44c2e2b8"
  };

firebase.initializeApp(firebaseConfig);

var database= firebase.database()

function ddtd(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    database.ref('users/' + email).set({
        email: email,
        password: password
    })

  }