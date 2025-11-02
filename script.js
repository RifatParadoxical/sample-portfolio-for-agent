// === INITIAL SETUP ===
var nickname = "Rifat";
var splitNumber = nickname.split('');
var initialWordWidth = 100 / splitNumber.length;
var Name = document.getElementById('name');
Name.classList.add(`text-[${initialWordWidth}vw]`);
Name.innerText = nickname;

var container = document.getElementById("container");
container.classList.add("bg-zinc-900");

var cd = document.getElementById("canvas_display");
var credit = document.getElementById("credit");

// === FONT LIST (Google Fonts) ===
var fonts = [
  "'Momo Trust Display', sans-serif",
  "'Momo Signature', cursive",
  "'Playfair Display', serif",
  "'Lobster Two', cursive",
  "'Noto Serif', serif",
  "'Saira', sans-serif",
  "'Josefin Sans', sans-serif",
  "'Alfa Slab One', serif",
  "'Jersey 10', sans-serif",
  "'Lobster', cursive",
  "'Shadows Into Light', cursive",
  "'Caveat', cursive"
];

var i = 0;

// === FONT SWITCH ANIMATION ===
var interval = setInterval(() => {
  Name.style.fontFamily = fonts[i];
  i++;
  if (i >= fonts.length) {
    clearInterval(interval);

    // Expand canvas
    cd.classList.add("expand-from-center");

    // Show credit text
    setTimeout(() => {
      credit.classList.add("show-zoom");
    }, 800);
  }
}, 250);

// === BACKGROUND AND SHRINK EFFECT ===
setTimeout(() => {
  container.classList.replace("bg-zinc-900", "bg-slate-950");
  cd.classList.add("shrink-to-center");
  Name.classList.add("hidden");
}, 8000);

// === SET CURRENT YEAR ===
var year = document.getElementById("current-year");
year.innerText = new Date().getFullYear();
