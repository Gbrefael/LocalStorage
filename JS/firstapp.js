let users = [];

let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", () => {
  let userName = document.getElementById("user");
  let nameVal = userName.value;
  let jsonName = JSON.stringify(nameVal);
  window.localStorage.setItem("UserName", jsonName);
  userName.value = "";

  let userMail = document.getElementById("mail");
  let mailVal = userMail.value;
  let jsonMail = JSON.stringify(mailVal);
  window.localStorage.setItem("UserMail", jsonMail);
  userMail.value = "";

  let userPass = document.getElementById("pass");
  let passVal = userPass.value;
  let jsonPass = JSON.stringify(passVal);
  window.localStorage.setItem("UserPass", jsonPass);
  userPass.value = "";

  let newUser = {
    name: userName,
    email: userMail,
    password: userPass,
  };

  users.push(newUser);

  if (userName < 3) {
    alert("Please try again");
  } else {
    location.href = "./login.html";
  }
});
