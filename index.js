var obj = {
    "empName" : "Teja",
    "tech" : "JS",
    "isAlive" : true ,
    "empName" : "Tejaswini" ,
    "empName" : "Tejaswini Pendota"
    // "empname" : "Tejaswini Teja"
}
// console.log(obj)
console.table(obj)
console.log(obj.empName)
console.log(obj["tech"])


//Hi , My Name is Teja, I am Currently learning JS because Iam true
console.log(`Hi , My name is ${obj.empName}, I am Currently learning ${obj.tech} because Iam ${obj.isAlive}`)
console.log(`Hi , My name is ${obj['empName']}, I am Currently learning ${obj['tech']} because Iam ${obj['isAlive']}`)


// CRUD properties
// create,read,update,delete
obj ["gender"] = "Female"  // adding property to existing object
obj ['tech'] = "Javascript"  // Updating Existing property of object
// delete obj.empname       // deleting existing property from object
console.log(obj)


// Adding  Address
var address = {
    "state": "TS",
    "city": "Hyderabad",
    "pincode": "500042"
}
console.log(address);
obj['address'] = address  // includes in obj 
console.log(obj)

console.log(obj.address)   // address object
console.log(obj['address'].pincode) // address pincode
console.log(obj.address['pincode'])
console.log(obj['address'] ['pincode'])

var employee = {
    "empName":"John",
    "empId":"100",
    "address": {
        "state":"AP",
        "capital":"Amaravathi",
    },
    0: "employee"
}

console.log(employee)
delete employee.empId
console.log(employee)
console.log(employee.address.capital)
// console.log(employee.0)
console.log(employee['0'])


var arr = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }
]
// Rate : 3.9 , Count : 120
console.log(arr)
console.log(`Rate :${arr[0].rating.rate} Count : ${arr[0].rating.count}`)
obj = arr[0]
console.log(`Rate :${obj.rating.rate} Count : ${obj.rating.count}`)




//    TASK QUESTIONS
// You are given an object book with the properties title, author, and yearPublished. Perform the following operations:
// 1.	Access the author property and print it.
// 2.	Modify the yearPublished property to 2022.
// 3.	Add a new property genre to the book object with the value “Fiction”.
// 4.	Delete the title property from the book object
var book = {
    "title" : "The Zombie Room",
    "author" : "R.D. Ronald",
    "yearPublished" : "2012",
}
console.log(`author :${book.author}`) //access author property      
book ['yearPublished'] = "2022"  // updated
book ['genre'] = "Fiction"  // adding new property
delete book.title
console.log(book)

// Question 2:
// You are given an object employee with the properties name, age, position, and salary. Perform the following operations:
// 1.	Access the position property and print it.
// 2.	Modify the salary property to 50000.
// 3.	Add a new property department to the employee object with the value “HR”.
// 4.	Delete the age property from the employee object.
var employee = {
    "name" : "Akshara",
    "age" : "24",
    "position" : "Product Engineer",
    "salary" : "25000",
} 
console.log(`position : ${employee.position}`)
employee ['salary'] = "50000"
employee ['department'] = "HR"
delete employee.age
console.log(employee)


// Question 3:
// You are given an object product with the properties id, name, price, and category. Perform the following operations:
// 1.	Access the price property and print it.
// 2.	Modify the category property to “Electronics”.
// 3.	Add a new property inStock to the product object with the value true.
// 4.	Delete the id property from the product object.
var product = {
    "id" : "TME1D2",
    "name" : "Zedteck Deck Oven",
    "price" : "32000",
    "category" : "Single deck oven",
}
console.log(`price : ${product.price}`)
product ['category'] = "Electronics"
product ['inStock'] = "true"
delete product.id
console.log(product)



// Question 4:
// You are given an object car with the properties make, model, year, and color. Perform the following operations:
// 1.	Access the make property and print it.
// 2.	Modify the color property to “Black”.
// 3.	Add a new property engineType to the car object with the value “V6”.
// 4.	Delete the year property from the car object.
var car = {
    "make" : "South Korea",
    "model" : "SX Opt Turbo DCT DT",
    "year" : "2006",
    "color" : "Fiery Red",
}
console.log(`property : ${car.make}`)
car ['color'] = "Black"
car ['engineType'] = "V6"
delete car.year
console.log(car)


// Question 5:
// You are given an object student with the properties name, age, grade, and school. Perform the following operations:
// 1.	Access the school property and print it.
// 2.	Modify the grade property to 95.
// 3.	Add a new property hobbies to the student object with the value ["reading", "sports"].
// 4.	Delete the age property from the student object.
var student = {
    "name" : "Shruthi",
    "age" : "14",
    "grade" : "A",
    "school" : "ST. Mary's School",
}
console.log(student.school)
console.log(`school : ${student.school}`)
student ['grade'] = "95"
student ['hobbies'] = ["reading , sports"]
delete student.age
console.log(student)

// Question 6:
// You are given an object user with the following structure:
// const user = {
//   username: "john_doe",
//   profile: {
//     firstName: "John",
//     lastName: "Doe",
//     age: 28,
//     address: {
//       street: "456 Elm St",
//       city: "Gotham",
//       zip: "54321"
//     }
//   },
//   preferences: {
//     theme: "dark",
//     notifications: true
//   }
// };
// Perform the following operations:
// 1.	Access the city property from the address object and print it.
// 2.	Modify the theme property in the preferences object to “light”.
// 3.	Add a new property phone to the profile object with the value “555-9876”.
// 4.	Delete the zip property from the address object.
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };  
console.log(user.profile.address.city)
user.preferences ['theme'] = "light"
user.profile ['phone'] = "555-9876"
delete user.profile.address.zip
console.log(user)

// // Question 7:
// // You are given an object company with the following structure:
// const company = {
//   name: "Tech Solutions",
//   employees: [
//     {
//       name: "Alice",
//       position: "Developer",
//       contact: {
//         email: "alice@tech.com",
//         phone: "555-2345"
//       }
//     },
//     {
//       name: "Bob",
//       position: "Manager",
//       contact: {
//         email: "bob@tech.com",
//         phone: "555-6789"
//       }
//     }
//   ],
//   location: "New York"
// };
// Perform the following operations:
// 1.	Access the email of the second employee (Bob) and print it.
// 2.	Modify the phone number of Alice to “555-1111”.
// 3.	Add a new property department with the value “Engineering” to the first employee (Alice).
// 4.	Delete the location property from the company object.
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
};
console.log(company.employees[1].contact.email)   // 2nd element 
company.employees[0].contact['phone'] = "555-1111"
company.employees[0]['department'] = "Engineering"
delete company.location
console.log(company)