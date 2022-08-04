myBtn.addEventListener("click", () => {
  let savedName = window.localStorage.getItem("UserName");
  let savedEmail = window.localStorage.getItem("UserMail");
  let savedPass = window.localStorage.getItem("UserPass");
  let trueName = JSON.parse(savedName);
  let trueEmail = JSON.parse(savedEmail);
  let truePass = JSON.parse(savedPass);

  if (
    document.getElementById("user").value === trueName &&
    document.getElementById("mail").value === trueEmail &&
    document.getElementById("pass").value === truePass
  ) {
    document.getElementById("user").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("pass").value = "";

    location.href = "./main.html";
  } else {
    alert("invalid");
  }
  document.getElementById("user").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("pass").value = "";
});
