var result = document.querySelector('.result');
var secondResult = document.querySelector('.secondResult');
var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var zero = document.querySelector('.zero');
one = 1;
two = 2;
three = 3;
four = 4;
five = 5;
six = 6;
seven = 7;
eight = 8;
nine = 9;
zero = 0;

var buffer = 0;
var buffer2 = 0;
var buffer3 = 0;
var bufferResult = 0;
var operation = 0;

clickClean();

function clickMe(x){
  if (buffer !== 0) {
  buffer += `${x}`;
}
else {
buffer = x;
}
result.innerHTML = `${buffer}`;
if (result.innerHTML.length > 8 && result.innerHTML.length <=16 ){
  result.style.fontSize = '2rem';
}
else if (result.innerHTML.length > 16) {
  clickClean();
}
else {
  result.style.fontSize = '4rem';
}
}

function clickPlus(){
  if (bufferResult != 0){
    buffer = bufferResult;
  }
  buffer2 = buffer;
  buffer = 0;
  result.innerHTML = `${buffer}`;
  secondResult.innerHTML = `${buffer2}+`;
  operation = 1
}
function clickMinus(){
   if (bufferResult != 0){
    buffer = bufferResult;
  }
  buffer2 = buffer;
  buffer = 0;
  result.innerHTML = `${buffer}`;
  secondResult.innerHTML = `${buffer2}-`;
  operation = 2
}
function clickMultiply(){
  if (bufferResult != 0){
  buffer = bufferResult;
  }
  buffer2 = buffer;
  buffer = 0;
  result.innerHTML = `${buffer}`;
  secondResult.innerHTML = `${buffer2}*`;
  operation = 3
}
function clickDivide(){
  if (bufferResult != 0){
  buffer = bufferResult;
  }
  buffer2 = buffer;
  buffer = 0;
  result.innerHTML = `${buffer}`;
  secondResult.innerHTML = `${buffer2}/`;
  operation = 4
}
function clickPercent(){
  if (bufferResult != 0){
  buffer = bufferResult;
  }
  buffer2 = buffer;
  buffer = 0;
  result.innerHTML = `${buffer}`;
  secondResult.innerHTML = `${buffer2}%`;
  operation = 5
  resultResult();
}
function clickClean(){
  buffer = 0;
  buffer2 = 0;
  bufferResult = 0;
  operation = 0;
  result.innerHTML = `${bufferResult}`;
  secondResult.innerHTML = `${buffer2}`;
  result.style.fontSize = '4rem';
}
function clickPoint(){
  buffer = buffer + ".";
  result.innerHTML = `${buffer}`;
}
function resultResult(){
  if (operation ==1) {
    buffer3 = Number(buffer);
    buffer = Number(buffer);
    buffer2 = Number(buffer2);
    bufferResult = buffer + buffer2;
    buffer2 = bufferResult;
    buffer = buffer3;
    if (Number.isInteger(bufferResult) == true) {
    result.innerHTML = `${bufferResult}`;
  }
    else {
      result.innerHTML = `${bufferResult.toFixed(5)}`;
  }

    
    secondResult.innerHTML = 0;
  }
  else if (operation ==2) {
    buffer3 = Number(buffer);
    buffer = Number(buffer);
    buffer2 = Number(buffer2);
    bufferResult = buffer2 - buffer;
    buffer2 = bufferResult;
    buffer = buffer3;
    if (Number.isInteger(bufferResult) == true) {
    result.innerHTML = `${bufferResult}`;
  }

    else {
      result.innerHTML = `${bufferResult.toFixed(5)}`;
  }
    secondResult.innerHTML = 0;
  }
  else if (operation ==3) {
    buffer3 = Number(buffer);
    buffer = Number(buffer);
    buffer2 = Number(buffer2);
    bufferResult = buffer * buffer2;
    buffer2 = bufferResult;
    buffer = buffer3;
    if (Number.isInteger(bufferResult) == true) {
    result.innerHTML = `${bufferResult}`;
  }

    else {
      result.innerHTML = `${bufferResult.toFixed(5)}`;
  }
    secondResult.innerHTML = 0;
  }
  else if (operation ==4) {
    buffer3 = Number(buffer);
    buffer = Number(buffer);
    buffer2 = Number(buffer2);
    bufferResult = buffer2 / buffer;
    buffer2 = bufferResult;
    buffer = buffer3;
   if (Number.isInteger(bufferResult) == true) {
    result.innerHTML = `${bufferResult}`;
  }

    else {
      result.innerHTML = `${bufferResult.toFixed(5)}`;
  }

    secondResult.innerHTML = 0;
  }
    else if (operation ==5) {
    buffer3 = Number(buffer);
    buffer = Number(buffer);
    buffer2 = Number(buffer2);
    bufferResult = buffer2/100;
    buffer2 = bufferResult;
    buffer = buffer3;
   if (Number.isInteger(bufferResult) == true) {
    result.innerHTML = `${bufferResult}`;
  }

    else {
      result.innerHTML = `${bufferResult.toFixed(5)}`;
  }
  
    secondResult.innerHTML = 0;
  }

if (result.innerHTML.length > 8 && result.innerHTML.length <=16 ){
  result.style.fontSize = '2rem';
}
else if (result.innerHTML.length > 16) {
  result.innerHTML = `Ошибка! Столько цифр я не покажу.`;
}
else {
  result.style.fontSize = '4rem';
}

}
