console.group("1. ✅ Вивести числа від 25 до 0 (порядок зменшення).");

console.group("=====================While=========================");
let numDecrease = 26;
while (numDecrease > 0) {
  numDecrease--;
  console.log(numDecrease);
}
console.groupEnd();

console.group("========================For=========================");
for (let numDecrease2 = 25; numDecrease2 >= 0; numDecrease2--) {
  console.log(numDecrease2);
}
console.groupEnd();

console.group("======================Do-while=======================");
let numDecrease3 = 25;
do {
  console.log(numDecrease3);
  numDecrease3--;
} while (numDecrease3 >= 0);
console.groupEnd();
console.groupEnd();
///////////////////////////////////////////////////////////////////////////////////////////////////////////

console.group("2. ✅ Вивести числа від 10 до 50, які кратні 5.");
console.group("=======================While=======================");
let numMultiple = 5;
while (numMultiple < 50) {
  numMultiple += 5;
  console.log(numMultiple);
}
console.groupEnd();

console.group("========================For=========================");

for (let numMultiple2 = 10; numMultiple2 <= 50; numMultiple2 += 5) {
  console.log(numMultiple2);
}
console.groupEnd();

console.group("======================Do-while======================");
let numMultiple3 = 10;
do {
  console.log(numMultiple3);
  numMultiple3 += 5;
} while (numMultiple3 <= 50);

console.groupEnd();
console.groupEnd();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.group(
  "3. ✅ Користувач вводить два цілі числа в довільному порядку. Знайти суму чисел в межах від меншого до більшого.",
);
console.group("==========================While==============================");
let whileNum1 = Number(prompt("Type first number(while)"));
let whileNum2 = Number(prompt("Type second number(while)"));

const min = Math.min(whileNum1, whileNum2);
const max = Math.max(whileNum1, whileNum2);

let sum = 0;
let counter = min;
while (counter <= max) {
  sum += counter;
  counter++;
}
console.log(`Sum from ${min} to ${max}: ${sum}`);
console.groupEnd();

console.group("============================For==============================");
let forNum1 = Number(prompt("Type first number(for)"));
let forNum2 = Number(prompt("Type second number(for)"));

let min2 = Math.min(forNum1, forNum2);
let max2 = Math.max(forNum1, forNum2);

let sum2 = 0;
for (let counter2 = min2; counter2 <= max2; counter2++) {
  sum2 += counter2;
}
console.log(`Sum from ${min2} to ${max2}: ${sum2}`);

console.groupEnd();

console.group("===========================Do-while=============================");
let dowhileNum1 = Number(prompt("Type first number(do-while)"));
let dowhileNum2 = Number(prompt("Type second number(do-while)"));

let min3 = Math.min(dowhileNum1, dowhileNum2);
let max3 = Math.max(dowhileNum1, dowhileNum2);

let sum3 = 0;
let counter3 = min3;
do {
  sum3 += counter3;
  counter3++;
} while (counter3 <= max3);
console.log(`Sum from ${min3} to ${max3}: ${sum3}`);
console.groupEnd();
console.groupEnd();
