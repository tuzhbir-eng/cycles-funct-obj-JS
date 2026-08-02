let tries = Number(prompt('Type your number: '));
const num = (Math.floor(Math.random() * 20) + 1);

while (tries <= 20) {
  if(tries !==num) {
    tries = Number(prompt("Try again: "));
  } else {
    alert("Congratulation!");
  }
}