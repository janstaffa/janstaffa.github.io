"use strict";

var inputs = document.querySelectorAll('td.input');
var G = 6.67 * Math.pow(10, -11);
var sunWeight = 1.989 * Math.pow(10, 30);

var formatNumber = function formatNumber(n) {
  return n.replace('.', ',').replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
    return ' ' + s;
  });
};

var calc = function calc(distance) {
  var realDistance = parseFloat(distance) * 1000;
  var output = G * (sunWeight / Math.pow(realDistance, 2));

  if (Number.isNaN(output)) {
    return '<span style="color:red;">zadejte prosím číslo ( ͡° ͜ʖ ͡°)</span>';
  } else {
    return formatNumber(output.toFixed(6)) + ' N/kg';
  }
};

var myEvent = new Event('input', {
  bubbles: true,
  cancelable: true
});
Array.from(inputs).map(function (input) {
  input.addEventListener('input', function (e) {
    e.target.nextSibling.nextSibling.innerHTML = calc(e.target.innerText);
  });
  input.dispatchEvent(myEvent);
});
var ratio = 1;
var RATIO_STEP = 0.6;
var draggable = document.querySelector('.draggable');
var distanceDisplay = document.querySelector('#distance');
var intenzityDisplay = document.querySelector('#intenzity');
var line = document.querySelector('#line-path');
var sun = document.querySelector('#sun');
line.setAttribute('x1', draggable.offsetLeft + draggable.clientWidth / 2);
line.setAttribute('y1', draggable.offsetTop + draggable.clientHeight / 2);
line.setAttribute('x2', sun.clientWidth / 2);
line.setAttribute('y2', sun.clientHeight / 2);

var updateData = function updateData() {
  var x1 = line.getAttribute('x1');
  var y1 = line.getAttribute('y1');
  var x2 = line.getAttribute('x2');
  var y2 = line.getAttribute('y2');
  var lineLength = Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
  lineLength = lineLength * 8704.375 * ratio;
  distanceDisplay.innerText = formatNumber(lineLength.toFixed(2)) + ' km';
  draggable.setAttribute('title', "Distance from sun: ".concat(formatNumber(lineLength.toFixed(2)), " km"));
  intenzityDisplay.innerText = calc(lineLength);
};

updateData();

var dragElement = function dragElement(el) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

  var closeDragElement = function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  var elementDrag = function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    var top = el.offsetTop - pos2;
    var left = el.offsetLeft - pos1;
    var parent = document.querySelector('.interactive');

    if (top > 0 && left > 0 && top < parent.clientHeight && left < parent.clientWidth) {
      el.style.top = el.offsetTop - pos2 + 'px';
      el.style.left = el.offsetLeft - pos1 + 'px';
      line.setAttribute('x1', left + el.clientWidth / 2);
      line.setAttribute('y1', top + el.clientHeight / 2);
      var x1 = line.getAttribute('x1');
      var y1 = line.getAttribute('y1');
      var x2 = line.getAttribute('x2');
      var y2 = line.getAttribute('y2');
      var lineLength = Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
      lineLength = lineLength * 8704.375 * ratio;
      distanceDisplay.innerText = formatNumber(lineLength.toFixed(2)) + ' km';
      draggable.setAttribute('title', "Distance from sun: ".concat(formatNumber(lineLength.toFixed(2)), " km"));
      intenzityDisplay.innerText = calc(lineLength);
    }
  };

  var dragMouseDown = function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  el.onmousedown = dragMouseDown;
};

dragElement(draggable);

var rerenderOrbits = function rerenderOrbits() {
  var svg = document.getElementById('svg');
  var orbits = svg.querySelectorAll('circle');
  orbits[0].setAttribute('r', 6663 / ratio);
  orbits[1].setAttribute('r', 12407 / ratio);
  orbits[2].setAttribute('r', 17186 / ratio);
  orbits[3].setAttribute('r', 26193 / ratio);
  orbits[4].setAttribute('r', 89380 / ratio);
  orbits[5].setAttribute('r', 160838 / ratio);
  orbits[6].setAttribute('r', 321677 / ratio);
  orbits[7].setAttribute('r', 516981 / ratio);
};

var zoomBtn = document.getElementById('zoom');
var unzoomBtn = document.getElementById('unzoom');

var zoom = function zoom() {
  if (ratio - RATIO_STEP > 0) ratio -= RATIO_STEP;
  rerenderOrbits();
  updateData();
};

var unzoom = function unzoom() {
  if (ratio - RATIO_STEP > 0) ratio += RATIO_STEP;
  rerenderOrbits();
  updateData();
};

zoomBtn.addEventListener('click', function (e) {
  zoom();
});
unzoomBtn.addEventListener('click', function (e) {
  unzoom();
});
var container = document.querySelector('.interactive');
container.addEventListener('mousewheel', function (e) {
  e.preventDefault();

  if (e.wheelDelta < 0) {
    unzoom();
  } else {
    zoom();
  }
});