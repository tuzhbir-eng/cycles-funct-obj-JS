function isWorkingAgePerson(age){
return age>=16 && age<=60;
}
console.group('Age checkUp');
console.log(isWorkingAgePerson(15));//false
console.log(isWorkingAgePerson(16));//true
console.log(isWorkingAgePerson(60));//true
console.log(isWorkingAgePerson(61));//false
console.groupEnd();

////////////////////////////////////////////////////////////////////////////////

function checkMultiplicity(value1, value2) {
return value1 % value2 ===0;
}
console.group('Multiplicity');
console.log(checkMultiplicity(25, 5)) // true
console.log(checkMultiplicity(15, 3)) // true
console.log(checkMultiplicity(15, 5)) // true
console.log(checkMultiplicity(15, 4)) // false
console.groupEnd();

/////////////////////////////////////////////////////////////////////////////////
