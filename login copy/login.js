







var firebaseConfig = {
    apiKey: "AIzaSyDrB2xwRFYeZB4xlkaWMwgByx1yCLUSYP0",
    authDomain: "trucklaundary.firebaseapp.com",
    projectId: "trucklaundar",
    storageBucket: "trucklaundary.appspot.com",
    messagingSenderId: "35214736297",
    appId: "1:35214736297:web:58f6f8b3dea66a44c2e2b8"
  };
  
firebase.initializeApp(firebaseConfig);
  
const auth = firebase.auth()
const analytics = firebase.analytics()
  



function register () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        
        var user = auth.currentUser
        
        var database_ref = database.ref()
        
        var user_data = {
        email : email,
        
        last_login : Date.now()
      }
    
      alert('User Created!!')
    })
    .catch(function(error) {
        
        var error_code = error.code
        var error_message = error.message
        
        alert(error_message)
    })
}



function login () {
    
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    
    
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        
    }
    
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
        
        var user = auth.currentUser
        
        
        var database_ref = database.ref()
        
        
        var user_data = {
            last_login : Date.now()
      }
      
      
      database_ref.child('users/' + user.uid).update(user_data)
      
      
      //alert('User Logged In!!')
      window.location.replace("ma");
  
    })
    .catch(function(error) {
        
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
}




// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }
    
    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

