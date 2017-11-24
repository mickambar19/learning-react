// function objectify(key, value){
//   let obj = {}
//   obj[key] = value
//   return obj
// }

function objectify (key, value){
  return {
    [key]: value
  }
}

console.log(objectify('tyles', 27));

function welcomeMsg(fName, lName, email){
  return "Hello," + fName + " " + lName + ". The email you used to sign up is " + email
}

console.log(welcomeMsg('Alexis', 'Jimenez', 'mickambar19@gmail.com'));

function welcomeMsg2(fName, lName, email){
  return "Hello," + fName + " " + lName + ". The email you used to sign up is  \"" + email + "\""
}

console.log(welcomeMsg2('Alexis', 'Jimenez', 'mickambar19@gmail.com'));

function welcomeMsg3(fName, lName, email){
  return `Hello, ${fName} ${lName}. The email you used to sign up is  ${email}`
}

console.log(welcomeMsg2('Alexis', 'Jimenez', 'mickambar19@gmail.com'));

/**
 * Template Literals (Template strings)
 * */
// function welcomeTemplate(fName, lName, email){
//   return "<div>" +
//     "<h1>" +
//       "Hello, " + fName + lName + "." +
//     "</h1>" +
//     "<i>The mail you used to sign up is "+ email + "</i>" +
//   "</div>"
// }

function welcomeTemplate(fName, lName, email){
  return `<div>
    <h1>
    Hello,  ${fName} ${lName} .
    </h1>
    <i>The mail you used to sign up is ${email} </i>
    </div>`
}
document.body.innerHTML = welcomeTemplate('Alexis', 'Jimenez', 'mickambar19@gmail.com');

/**
 * Arrow Functions
 * */
//fn declaration
function add(x, y) {
  return x + y;
}

// fn expression
var add = function (x,y){
  return x + y;
}

var add = (x,y) => {
  return x + y
};

add(1,2);

let users = ['Alexis', 'Miguel'];

users.map(function (user) {
  //
});

users.map(()=>{

});


// function getTweets() {
//   return fetch('https://api.users.com/' + uid)
//     .then(function (response) {
//       return response.json()
//     })
//     .then(function (response) {
//       return response.data
//     })
//     .then(function (tweets) {
//       return tweets.filter(function (tweet) {
//         return tweet.stars > 50
//
//       })
//     })
//     .then(function (tweets) {
//       return tweets.filter(function (tweet) {
//         return tweet.rts > 50
//       })
//     })
// }

function getTweets() {
  return fetch('https://api.users.com/' + uid)
    .then(response => response.json())
    .then(response => response.data )
    .then(tweets => tweets.filter(tweet =>  tweet.stars > 50))
    .then(tweets => tweets.filter(tweet =>  tweet.rts > 50))
}


/**
 * Default Parameters*/
// Problem with ||
// function calculatePayment(price, salesTax, discount) {
//   salesTax = salesTax || 0.047
//   discount = discount || 0
//   console.log('Tax', salesTax);
//   console.log('discount', discount);
//   // math
//
// }
//
// calculatePayment(100, 0, 0);

// function calculatePayment(price, salesTax, discount) {
//   salesTax = typeof salesTax === 'undefined'? 0.047 : salesTax;
//   discount = typeof discount === 'undefined'? 0 : discount;
//   console.log('Tax', salesTax);
//   console.log('discount', discount);
//   // math
//
// }
//
// calculatePayment(100, 0, 0);

// function calculatePayment(price, salesTax = 0.047, discount = 0) {
//   console.log('Tax', salesTax);
//   console.log('discount', discount);
//   // math
//
// }
//
// calculatePayment(100, 0, 0);
// calculatePayment(100, 5, 10);

function isRequired(name){
  throw new Error(name + ' is required');
}
function calculatePayment(price = isRequired('price'), salesTax = 0.047, discount = 0) {
  console.log('Tax', salesTax);
  console.log('discount', discount);
  // math
  
}

calculatePayment(100, 0, 0);
calculatePayment(100, 5, 10);
calculatePayment();