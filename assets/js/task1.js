console.group("=====While=====");
let num = 26;
while(num>0) {
    num--
    console.log(num)
}
console.groupEnd();




console.group("=====For=====");
for (let num2 = 25; num2 >= 0; num2--) {
  console.log(num2);
}
console.groupEnd();




console.group("=====Do-while=====");
let num3 = 25;
do {
    console.log(num3);
    num3--;
} while (num3>=0)
console.groupEnd();
