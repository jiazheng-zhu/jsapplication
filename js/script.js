function checkUserName() {
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("enter one user name！");
        return false;
    } else if (!name.match(/^[|u4E00-\u9FA5a-zA-Z0-9_]/)) {
        alert("The user name can only contain letters, numbers and underscores！");
        return false;
    } else {
        return true;
    }
}

function checkPassword() {
    var pwd = document.getElementById("password").value;
    if (pwd == "") {
        alert("Please input a password！");
        return false;
    } else if (isNaN(pwd)) {
        alert("Password input must be numeric！");
        return false;
    } else if (pwd.length <= 6) {
        alert("The length of password input should be at least 6 digits！");
        return false;
    } else {
        return true;
    }
}
var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
function checkEmail() {
    var email = document.getElementById("email").value;
    if (email == "") {
        alert("Please input email！");
        return false;
    } else if (reg.test(email)) {
        return true;
    } else {
        alert("The mailbox format is incorrect");
        return false;
    }

}
var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
function checkPhone() {
    var phone = document.getElementById("phone").value;
    if (phone == "") {
        alert("Please enter the phone number！");
        return false;
    } else if (myreg.test(phone)) {
        return true;
    } else {
        alert("The phone is not correct");
        return false;
    }

} 
function checkForm() {
    if (checkUserName() && checkPassword() && checkPhone() && checkEmail()) {
        alert("User registered successfully！");
        return true;
    } else {
        return false;
    }
}function checkUserName() {
    var name = document.getElementById("name").value;
    if (name == "") {
        alert("enter one user name！");
        return false;
    } else if (!name.match(/^[|u4E00-\u9FA5a-zA-Z0-9_]/)) {
        alert("The user name can only contain letters, numbers and underscores！");
        return false;
    } else {
        return true;
    }
}

function checkPassword() {
    var pwd = document.getElementById("password").value;
    if (pwd == "") {
        alert("Please input a password！");
        return false;
    } else if (isNaN(pwd)) {
        alert("Password input must be numeric！");
        return false;
    } else if (pwd.length <= 6) {
        alert("The length of password input should be at least 6 digits！");
        return false;
    } else {
        return true;
    }
}  
function checkForm() {
    if (checkUserName() && checkPassword()) {
        alert("User login successfully！");
        return true;
    } else {
        return false;
    }
}