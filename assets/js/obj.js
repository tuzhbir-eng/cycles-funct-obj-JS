console.group("Профіль клієнта");

const customer = {
  firstName: "Vlad",
  lastName: "Tyzhbir",
  email: "tuzhbir@gmail.com",
  password: "qwerty",
  phoneNumber: 380666666666,
  adress: "Zhydachiv, Chornovola str., 13/2",
  getAdress() {
    return `${this.adress}`;
  },
  changePhoneNumber(newNumber) {
    this.phoneNumber = newNumber;
    return this.phoneNumber;
  },
};

console.log(customer);

const customerAdress = customer.getAdress();
console.log("customer adress: ", customerAdress);

const newNumber = customer.changePhoneNumber(380333333333);
console.log("Changed phone Number: ", newNumber);

customer.gender = "male";

delete customer.adress;
console.groupEnd();

//////////КОПІЮВАННЯ ОБ'ЄКТІВ
console.group("Копіювання об`єктів");
//СПОСІБ 1
const customer2 = Object.assign({}, customer);
console.log(customer2 === customer);

//СПОСІБ 2
const customer3 = { ...customer };
customer3.firstName = "AnotherName";
console.log(customer3);
console.log(customer === customer3);
console.groupEnd();
// //test
// for (let key in customer) {
//     console.log('Key:>> ', customer[key]);
// }
////////////////////////////////////////////////////////////////////////////////////////////////
console.group("Аудит характеристик");
const cat = {
  name: "Niachyk",
  color: "orange",
  isMale: true,
  isFurnitureDemage: false,
  booleanValue(isBool) {
    return isBool ? "так" : "ні";
  },
};

for (let key in cat) {
  console.log(key, ":", typeof cat[key] === "boolean" ? cat.booleanValue(cat[key]) : cat[key]);
}

console.groupEnd();
/////////////////////////////////////////////////////////////////////////////////////////////////
console.group("Конструктори та Прототипи");

function Book(author, name, date, publishing, price) {
  this.author = author;
  this.name = name;
  this.date = date;
  this.publishing = publishing;
  this.price = price;
}



Book.prototype.getDate = function () {
  const today = new Date();
  const currentYear = today.getFullYear();
  const age = currentYear - this.date;
  return age;
};
Book.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};


const book1 = new Book("Taras Shevchenko", "Kobzar", 1840, "Kyiv,  Kobzar", 500);
const book2 = new Book("Lorem ipsum", "Sotonn", 1876, "Lviv,  Barvinok", 500);

console.group("Test");
console.log("book1: ", book1);
console.log("book2: ", book2);


console.log(book1.getDate());
console.log(book2.getDate());
book2.setPrice(1000);
console.groupEnd();

console.groupEnd();
