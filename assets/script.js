// abrir abas
function sob() {
  var page0 = document.getElementById("home");
  var page1 = document.getElementById("sob");
  page1.style.display = "block";
  page0.style.display ="none";
}

function hab() {
  var page0 = document.getElementById("home");
  var page1 = document.getElementById("hab");
  page1.style.display = "block";
  page0.style.display ="none";
}

function edu() {
  var page0 = document.getElementById("home");
  var page1 = document.getElementById("edu");
  page1.style.display = "block";
  page0.style.display ="none";
}

function exp() {
  var page0 = document.getElementById("home");
  var page1 = document.getElementById("exp");
  page1.style.display = "block";
  page0.style.display ="none";
}



// Fechar abas
function BackMenu() {
  var page0 = document.getElementById("home");
  var page1 = document.getElementById("sob");
  var page2 = document.getElementById("hab");
  var page3 = document.getElementById("edu");
  var page4 = document.getElementById("exp");
  page1.style.display ="none";
  page2.style.display ="none";
  page3.style.display ="none";
  page4.style.display ="none";
  page0.style.display = "block";
}