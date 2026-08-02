let sum = 0;
let steps = Number(prompt("Type your steps"));

while (true) {
  sum = Number(sum) + Number(steps);
  steps = prompt("Type your steps again");
  if (steps === "стоп" || steps === null) {
    break;
  }
}
console.log("Sum of steps: ", sum);
