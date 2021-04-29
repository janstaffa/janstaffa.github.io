const inputs = document.querySelectorAll('td.input');
const G = 6.67 * Math.pow(10, -11);
const sunWeight = 1.989 * Math.pow(10, 30);
const formatNumber = (n) => {
  return n.replace('.', ',').replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
    return ' ' + s;
  });
};
const calc = (distance) => {
  const realDistance = parseFloat(distance) * 1000;
  const output = G * (sunWeight / Math.pow(realDistance, 2));
  if (Number.isNaN(output)) {
    return '<span style="color:red;">zadejte prosím číslo</span>';
  } else {
    return formatNumber(output.toFixed(6)) + ' N/kg';
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

let ratio = 15.4;
const RATIO_STEP = 0.6;
let realScale = false;

const earth = document.querySelector('#earth');
const distanceDisplay = document.querySelector('#distance');
const intenzityDisplay = document.querySelector('#intenzity');

const line = document.querySelector('#line-path');
const sun = document.querySelector('#sun');
line.setAttribute('x1', earth.offsetLeft + earth.clientWidth / 2);
line.setAttribute('y1', earth.offsetTop + earth.clientHeight / 2);
line.setAttribute('x2', sun.clientWidth / 2);
line.setAttribute('y2', sun.clientHeight / 2);

const updateData = () => {
  let x1 = line.getAttribute('x1');
  let y1 = line.getAttribute('y1');
  let x2 = line.getAttribute('x2');
  let y2 = line.getAttribute('y2');

  let lineLength = Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
  lineLength = lineLength * 8704.375 * ratio;
  distanceDisplay.innerText = formatNumber(lineLength.toFixed(2)) + ' km';
  earth.setAttribute(
    'title',
    `Distance from sun: ${formatNumber(lineLength.toFixed(2))} km`
  );
  intenzityDisplay.innerText = calc(lineLength);
};
updateData();

const dragElement = (el) => {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const elementDrag = (e) => {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    const top = el.offsetTop - pos2;
    const left = el.offsetLeft - pos1;
    const parent = document.querySelector('.interactive');
    if (
      top > 0 &&
      left > 0 &&
      top < parent.clientHeight &&
      left < parent.clientWidth
    ) {
      el.style.top = el.offsetTop - pos2 + 'px';
      el.style.left = el.offsetLeft - pos1 + 'px';

      line.setAttribute('x1', left + el.clientWidth / 2);
      line.setAttribute('y1', top + el.clientHeight / 2);

      let x1 = line.getAttribute('x1');
      let y1 = line.getAttribute('y1');
      let x2 = line.getAttribute('x2');
      let y2 = line.getAttribute('y2');

      let lineLength = Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
      lineLength = lineLength * 8704.375 * ratio;
      distanceDisplay.innerText = formatNumber(lineLength.toFixed(2)) + ' km';
      earth.setAttribute(
        'title',
        `Distance from sun: ${formatNumber(lineLength.toFixed(2))} km`
      );
      intenzityDisplay.innerText = calc(lineLength);
    }
  };

  const dragMouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  el.onmousedown = dragMouseDown;
};

dragElement(earth);

const rerenderOrbits = () => {
  const svg = document.getElementById('svg');
  const orbits = svg.querySelectorAll('circle');

  orbits[0].setAttribute('r', 6663 / ratio);
  orbits[1].setAttribute('r', 12407 / ratio);
  orbits[2].setAttribute('r', 17186 / ratio);
  orbits[3].setAttribute('r', 26193 / ratio);
  orbits[4].setAttribute('r', 89380 / ratio);
  orbits[5].setAttribute('r', 160838 / ratio);
  orbits[6].setAttribute('r', 321677 / ratio);
  orbits[7].setAttribute('r', 516981 / ratio);

  if (realScale) {
    sun.style.width = 160 / ratio;
    sun.style.height = 160 / ratio;
    sun.style.marginTop = 80 - 160 / ratio / 2;
    sun.style.marginLeft = 80 - 160 / ratio / 2;
  } else {
    sun.style.width = 160;
    sun.style.height = 160;
    sun.style.marginTop = 0;
    sun.style.marginLeft = 0;
  }
};
rerenderOrbits();

const zoomBtn = document.getElementById('zoom');
const unzoomBtn = document.getElementById('unzoom');

const zoom = () => {
  if (ratio - RATIO_STEP > 0) {
    ratio -= RATIO_STEP;
    rerenderOrbits();
    updateData();
  }
};
const unzoom = () => {
  if (ratio + RATIO_STEP > 0) {
    ratio += RATIO_STEP;
    rerenderOrbits();
    updateData();
  }
};
zoomBtn.addEventListener('click', (e) => {
  zoom();
});

unzoomBtn.addEventListener('click', (e) => {
  unzoom();
});

const container = document.querySelector('.interactive');
container.addEventListener('mousewheel', (e) => {
  e.preventDefault();
  if (e.wheelDelta < 0) {
    unzoom();
  } else {
    zoom();
  }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', (e) => {
  ratio = 15.4;
  rerenderOrbits();
  updateData();
});

const onetoone = document.getElementById('onetoone');
onetoone.addEventListener('click', (e) => {
  realScale = !realScale;
  rerenderOrbits();
  updateData();
});
