// JavaScript Notes

function show() {
  document.getElementById("oregon").style.display = "block";
}

function hello() {
  let name = prompt("What is your name?", "Josy");
  document.getElementById("title").innerHTML = "Hello " + name + "!";
}

function enter() {
  const btn = document.getElementById("btn");
  btn.style.color = "white";
  btn.style.backgroundColor = "green";
}

function down() {
  document.getElementById("btn").style.backgroundColor = "red";
}

function out() {
  const btn = document.getElementById("btn");
  btn.style.color = "black";
  btn.style.backgroundColor = "lightgrey";
}

let images = [
  "https://gardenandgun.com/wp-content/uploads/2024/02/Atlantic-Beach_Terry-Ward.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYrHIgUGNc8-i5zOU6CnX-IR_d9x0esyBoBfM6CSctg9QTPyita5GEfFzjdok5Vr-hKQ&usqp=CAU",
  "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1824,w_2736,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Oregon-best-beaches-summer-cape-kiwanda_2489076057_wzlhja.jpg"
];
let counter = 0;

function change() {
  const img = document.getElementById("image");
  img.src = images[counter];
  counter = (counter + 1) % images.length;
}
function popup() {
  window.alert("Don't click this. Really!");
}
