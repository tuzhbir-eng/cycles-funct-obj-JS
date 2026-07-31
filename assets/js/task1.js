console.group("1. ✅ Вивести числа від 25 до 0 (порядок зменшення).");

console.group("=====While=====");
let numDecrease = 26;
while (numDecrease > 0) {
  numDecrease--;
  console.log(numDecrease);
}
console.groupEnd();






console.group("=====For=====");
for (let numDecrease2 = 25; numDecrease2 >= 0; numDecrease2--) {
  console.log(numDecrease2);
}
console.groupEnd();






console.group("=====Do-while=====");
let numDecrease3 = 25;
do {
  console.log(numDecrease3);
  numDecrease3--;
} while (numDecrease3 >= 0);
console.groupEnd();
console.groupEnd();















console.group("2. ✅ Вивести числа від 10 до 50, які кратні 5.")

console.group("=====While=====")
let numMultiple = 5;
while (numMultiple <50) {
    numMultiple+=5;
    console.log(numMultiple);
}
console.groupEnd();



console.group("=====For=====");

for(let numMultiple2 = 10; numMultiple2<=50; numMultiple2+=5) {
    console.log(numMultiple2)
}
console.groupEnd();




console.group("=====Do-while=====");
let numMultiple3 = 10;
do {
    console.log(numMultiple3)
    numMultiple3+=5
} while(numMultiple3<=50)

console.groupEnd();
console.groupEnd();













