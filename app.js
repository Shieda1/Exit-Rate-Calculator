// https://www.omnicalculator.com/finance/exit-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const exitrateRadio = document.getElementById('exitrateRadio');
const numberofpageviewsRadio = document.getElementById('numberofpageviewsRadio');
const numberofexitsRadio = document.getElementById('numberofexitsRadio');

let exitrate;
let numberofpageviews = v1;
let numberofexits = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

exitrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Number of pageviews';
  variable2.textContent = 'Number of exits';
  numberofpageviews = v1;
  numberofexits = v2;
  result.textContent = '';
});

numberofpageviewsRadio.addEventListener('click', function() {
  variable1.textContent = 'Exit rate';
  variable2.textContent = 'Number of exits';
  exitrate = v1;
  numberofexits = v2;
  result.textContent = '';
});

numberofexitsRadio.addEventListener('click', function() {
  variable1.textContent = 'Exit rate';
  variable2.textContent = 'Number of pageviews';
  exitrate = v1;
  numberofpageviews = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(exitrateRadio.checked)
    result.textContent = `Exit rate = ${computeexitrate().toFixed(2)}`;

  else if(numberofpageviewsRadio.checked)
    result.textContent = `Number of pageviews = ${computenumberofpageviews().toFixed(2)}`;

  else if(numberofexitsRadio.checked)
    result.textContent = `Number of exits = ${computenumberofexits().toFixed(2)}`;
})

// calculation

function computeexitrate() {
  return (Number(numberofexits.value) / Number(numberofpageviews.value)) * 100;
}

function computenumberofpageviews() {
  return Number(numberofexits.value) / (Number(exitrate.value) / 100);
}

function computenumberofexits() {
  return (Number(exitrate.value) / 100) * Number(numberofpageviews.value);
}