/*
https://codewithcurious.com/projects/interactive-login-and-registration-form/
*/

let login_button = document.getElementById("login_button");
let register_button = document.getElementById("register_button");
let select_option = document.getElementById("select_option");
let login_form = document.getElementById("login_form");
let register_form = document.getElementById("register_form");

login_button.onclick = function () {
  login_form.style.display = "flex";
  select_option.style.display = "none";
};

register_button.onclick = function () {
  register_form.style.display = "flex";
  select_option.style.display = "none";
};

/*Check Login*/

document.getElementById("login_form").addEventListener("submit", function (event) {
    event.preventDefault();

    let user = document.getElementById("username_login").value;
    let password = document.getElementById("password_login").value;

    if (user == "admin" && password == "password") {
      alert("Login Successful");
    } else {
      alert("Invalid username or password");
    }
  });

/*Check Register*/

let password_register = document.getElementById("password_register");
let password_confirm = document.getElementById("password_register_confirm");

register_form.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = document.getElementById("username_register").value;
  let email = document.getElementById("email_register").value;

  if (username && email && password_register.value && password_confirm.value) {
    if (password_register.value === password_confirm.value) {
      alert("Registration Successful");
      register_form.reset();
    } else {
      alert("Passwords do not match");
    }
  } else {
    alert("Please fill in all fields");
  }
});

/*View Password*/

let view_password = document.getElementById("view_password");
let hide_password = document.getElementById("hide_password");

if (view_password.getAttribute("data-state") == 0) {
  hide_password.style.display = "none";
} else {
  view_password.style.display = "none";
}

view_password.addEventListener("click", function () {
  hide_password.style.display = "inline";
  view_password.style.display = "none";
  password_register.type = "text";
  password_confirm.type = "text";
});

hide_password.addEventListener("click", function () {
  hide_password.style.display = "none";
  view_password.style.display = "inline";
  password_register.type = "password";
  password_confirm.type = "password";
});
