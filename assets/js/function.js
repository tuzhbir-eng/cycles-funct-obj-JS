let age=0;
function isWorkingAgePerson(age){
return age>=16 && age<=60;
}
console.log(isWorkingAgePerson(15));//false
console.log(isWorkingAgePerson(16));//true
console.log(isWorkingAgePerson(60));//true
console.log(isWorkingAgePerson(61));//false
/////////////////////////////////////////////////////////////////////////////////
