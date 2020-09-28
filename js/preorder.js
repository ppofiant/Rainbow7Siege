var valid = "true";
var typetext;
console.log("test");

function validateName() {
    var name = document.getElementById('username').value;
    typetext = "Hello, " + name + ".\nThankyou for Pre-Ordered!" ;
    var namealert = document.getElementById('namealert');

    if (name.length <= 2) {
        namealert.innerHTML = "*Name must be filled with minimal 3 characters";
        valid = "false";
    } else {
        namealert.innerHTML = "";
    }
}

function validateEmail() {
    var email = document.getElementById('email').value;
    var emailalert = document.getElementById('emailalert');

    var count = 0;
    var i;

    for (i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            count += 1;
        }
    }

    if (email.indexOf('@') == -1 ||
        email.indexOf('.com') == -1 ||
        email.indexOf('@') == 0 ||
        email.indexOf('.') == 0 ||
        count > 1
    ) {
        emailalert.innerHTML = "*Email must be filled i.e(asd@asd.com)";
        valid = "false";
    } else {
        emailalert.innerHTML = "";
    }
}


function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordalert = document.getElementById('passalert');

    if (password.length < 8) {
        passwordalert.innerHTML = "*Password must be filled with minimum 8 letters";
        valid = "false";
    } else {
        passwordalert.innerHTML = "";
    }
}

function validateCPassword() {
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var cpasswordalert = document.getElementById('cpassalert');

    if (password != cpassword) {
        cpasswordalert.innerHTML = "*Password and Confirm Password must be same";
        valid = "false";
    } else {
        cpasswordalert.innerHTML = "";
    }
}


function validateAddress() {
    var address = document.getElementById('address').value;
    var addressalert = document.getElementById('addressalert');

    if (address.length <= 0) {
        addressalert.innerHTML = "*Address must be filled";
        valid = "false";
        return;
    } else {
        addressalert.innerHTML = "";
    }
}

function validateAgreement() {
    var agreeAlert = document.getElementById('agreementalert');

    if (document.getElementById('agree').checked == false) {
        agreeAlert.innerHTML = "*Please check the agreement";
        valid = "false";
    } else {
        agreeAlert.innerHTML = "";
    }
}

function validateAll() {
    valid = "true";
    validateAgreement();
    validateName();
    validateEmail();
    validatePassword();
    validateAddress();
    validateAgreement();

    if(valid == "true") {
        alert(typetext);
        return;
    }
}