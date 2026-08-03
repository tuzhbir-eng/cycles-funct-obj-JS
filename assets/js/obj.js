const customer = {
firstName: 'Vlad',
lastName: 'Tyzhbir',
email: 'tuzhbir@gmail.com',
password: 'qwerty',
phoneNumber: 380666666666,
adress: 'Zhydachiv, Chornovola str., 13/2',
getAdress () {
    return `${this.adress}`;
},
changePhoneNumber(newNumber) {
    this.phoneNumber = newNumber;
    return this.phoneNumber;
},
};

console.log(customer);

const customerAdress = customer.getAdress();
console.log('customer adress: ', customerAdress);


const newNumber = customer.changePhoneNumber(380333333333);
console.log ('Changed phone Number: ', newNumber);

customer.gender = 'male';

delete customer.adress;


//СПОСІБ 1
const customer2=Object.assign({}, customer);
console.log(customer2 === customer);

//СПОСІБ 2
const customer3 = {...customer}
customer3.firstName = 'AnotherName';
console.log(customer3);
console.log(customer === customer3);