"use strict";

var inputs = document.querySelectorAll('td.input');
var G = 6.67 * Math.pow(10, -11);
var sunWeight = 1.989 * Math.pow(10, 30);

var calc = function calc(distance) {
  var realDistance = parseFloat(distance) * 1000;
  var output = G * (sunWeight / Math.pow(realDistance, 2));

  if (Number.isNaN(output)) {
    return '<span style="color:red;">zadejte prosím číslo ( ͡° ͜ʖ ͡°)</span>';
  } else {
    return output + ' N/kg';
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