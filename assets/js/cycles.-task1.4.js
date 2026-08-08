let tries = Number(prompt('Try to guess number from 1 to 20: '));
const num = (Math.floor(Math.random() * 20) + 1);

while (tries !==num) {
    tries = Number(prompt("Try again: "))
}
alert('Congratulations!');