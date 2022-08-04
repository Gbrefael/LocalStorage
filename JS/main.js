let nameDiv = document.createElement("div");
document.body.appendChild(nameDiv);

let myBtn = document.getElementById("myBtn2");

let changeColor = () => {
  let r = document.getElementById("user").value;
  let g = document.getElementById("mail").value;
  let b = document.getElementById("pass").value;

  return `rgb(${r},${g},${b})`;
};

myBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = changeColor();
});

let sBtn = document.getElementById("sBtn");

sBtn.addEventListener("click", () => {
  let red = document.getElementById("user");
  let green = document.getElementById("mail");
  let blue = document.getElementById("pass");

  let savedRed = red.value;
  let savedGreen = green.value;
  let savedBlue = blue.value;

  let jsRed = JSON.stringify(savedRed);
  let jsGreen = JSON.stringify(savedGreen);
  let jsBlue = JSON.stringify(savedBlue);

  window.localStorage.setItem("myRedColor", jsRed);
  window.localStorage.setItem("myGreenColor", jsGreen);
  window.localStorage.setItem("myBlueColor", jsBlue);

  document.getElementById("user").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("pass").value = "";

  document.body.style.backgroundColor = "white";
});

let showBtn = document.getElementById("show");

let colorDiv = document.createElement("div");
document.body.appendChild(colorDiv);

showBtn.addEventListener("click", () => {
  let perRed = window.localStorage.getItem("myRedColor");
  let perGreen = window.localStorage.getItem("myGreenColor");
  let perBlue = window.localStorage.getItem("myBlueColor");

  let actRed = JSON.parse(perRed);
  let actGreen = JSON.parse(perGreen);
  let actBlue = JSON.parse(perBlue);

  document.body.style.backgroundColor = `rgb(${actRed},${actGreen},${actBlue})`;
});
