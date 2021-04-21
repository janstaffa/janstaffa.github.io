const inputs = document.querySelectorAll('td.input');
const G = 6.67 * Math.pow(10, -11);
const sunWeight = 1.989 * Math.pow(10, 30);

const calc = (distance) => {
  const realDistance = parseFloat(distance) * 1000;
  const output = G * (sunWeight / Math.pow(realDistance, 2));
  if (Number.isNaN(output)) {
    return '<span style="color:red;">zadejte prosím číslo ( ͡° ͜ʖ ͡°)</span>';
  } else {
    return output + ' N/kg';
  }
};
const myEvent = new Event('input', {
  bubbles: true,
  cancelable: true,
});

Array.from(inputs).map((input) => {
  input.addEventListener('input', (e) => {
    e.target.nextSibling.nextSibling.innerHTML = calc(e.target.innerText);
  });
  input.dispatchEvent(myEvent);
});
