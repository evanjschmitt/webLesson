function validateForm() {
    let validForm = true;
    let accountMade = false;
    document.getElementsByClassName("errorText").innerText = "";
    //Validate Username
    var usernameVal = document.getElementById("username").value;
    let validUser = /^([a-zA-Z0-9!#$%.]{1,20})$/;
    if (!validUser.test(usernameVal)) {
      document.getElementById("usernameError").innerText =
        "Please enter a username between 1-20 characters";
      validForm = false;
    } else {
      document.getElementById("usernameError").innerText = "";
    }
  
    //Validate Password
    let passwordVal = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordCon").value;
    let validPass = /^.{8,10}$/;
    if (!validPass.test(passwordVal)) {
      validForm = false;
      document.getElementById("passwordError").innerText =
        "Password must be between 8 and 10 characters";
    } else {
      document.getElementById("passwordError").innerText = "";
      if (passwordVal === passwordConfirm) {
        document.getElementById("passwordConError").innerText = "";
      } else {
        validForm = false;
        document.getElementById("passwordConError").innerText =
          "Your passwords must match";
      }
      if ((validForm == true)) {
          accountMade = true;
        document.getElementById(
          "welcomeMessage"
        ).innerHTML = `Thank you ${usernameVal} for registering!`;
      }
    }
  }