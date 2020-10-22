var coptag = document.createElement('p'); coptag.innerHTML = "";
coptag.id = "coptxt"; coptag.style.transform = 'rotate(-90deg)'; coptag.style.position = 'relative';
coptag. style.boxSizing = 'border-box'; coptag.style.margin = '0px';
coptag.style.borderRadius = "0 15px 0 0"; coptag.style.backgroundColor = 'rgb(255,255,255)';
coptag.style.top = 'calc(100% - 75.5px)'; coptag.style.left = 'calc(100% - 73px)';
coptag.style.height = '20px'; coptag.style.width = '130px'; coptag.style.display = 'none';

document.getElementById('testsub').appendChild(coptag);
var tag = setInterval(Tagger, 7200);

function Tagger() {
  var coptag = document.getElementById('coptxt');
  var img = document.getElementById('testsub');
  style = img.currentStyle || window.getComputedStyle(img, false);
  bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
  var cut = bi.indexOf("img-"); bi = bi.substring(cut);
  if(bi === 'img-Angel.jpeg') {coptag.innerHTML = "c13studio"; coptag.style.display = 'block';
      coptag.onmouseover = function() {mouseOverA()}; coptag.onmouseout = function() {mouseOutA()};
      coptag.style.paddingLeft = '25px';}
  else if(bi === 'img-Diana.jpeg') {coptag.innerHTML = "Diego Delso"; coptag.style.display = 'block';
      coptag.onmouseover = function() {mouseOverB()}; coptag.onmouseout = function() {mouseOutB()};
      coptag.style.paddingLeft = '15px';}
  else {coptag.innerHTML = ""; coptag.style.display = 'none';}
}

function mouseOverA() {
  document.getElementById("coptxt").innerHTML = "© c13studio";
  document.getElementById("coptxt").style.paddingLeft = '15px';
}
function mouseOutA() {
  document.getElementById("coptxt").innerHTML = "c13studio";
  document.getElementById("coptxt").style.paddingLeft = '25px';
}

function mouseOverB() {
  document.getElementById("coptxt").innerHTML = "CC BY-SA 4.0";
  document.getElementById("coptxt").style.paddingLeft = '10px';
}
function mouseOutB() {
  document.getElementById("coptxt").innerHTML = "Diego Delso";
  document.getElementById("coptxt").style.paddingLeft = '15px';
}
