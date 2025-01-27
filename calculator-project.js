//using DOM in line 2 helps access any content in the input element in class display
const display = document.querySelector('.display')

//this function'role is to make each key on the calculator show once an argument is passed
function calculation(input) {
  display.value += input;
}
//this function is used to computethe results when the equal to button is clicked
function computeResult() {
  display.value = eval(display.value);
}
//this function resets or clears any content displayed in the input
function reset() {
  display.value ='';
}