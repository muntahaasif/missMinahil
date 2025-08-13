// function updateDateTime(){
//     let now = new Date();
//     let date = now.toLocaleDateString();
//     let time = now.toLocaleTimeString();
//     document.getElementById("dateTime").innerHTML = date + " | " + time;
// }
// setInterval(updateDateTime, 1000);
// updateDateTime();

// let months =
//  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  let now = new Date();
//  let monthIndex = now.getMonth();
//  alert("Current Month is " + months[monthIndex]);

// let days = ["sun", "mon", "tue", "Wed", "thu", "fri", "sat", "sun"];
// let now = new Date();
// let dayIndex = now.getDay();
// alert("Today is " + days[dayIndex]);

// let now = new Date();
// let dayIndex = now.getDay();
// if(dayIndex === 0 || dayIndex === 6){
//     alert("Today is fun day");
// } else{
//     alert("It's a working day");
// }

// let now = new Date();
// let date = now.getDate();
// if( date < 16){
//     alert("First fifteen Days of the month");
// } else {
//     alert("Last days of the month");
// }

// myDate = new Date();
// minuteSince1970 = myDate.getTime() / (1000 * 60);
// console.log("Minutes since midnight, jan 1", minuteSince1970);

// let now = new Date();
// let hours = now.getHours();
// if (hours < 12){
//     alert("It's AM");
// }else{
//     alert("It's PM");
// }

// let laterDate = new Date(2020, 11, 31);
// console.log(laterDate);

// let ramadanStart = new Date(2015, 5, 18);
// let today = new Date();
// let diffInTime = today.getTime() - ramadanStart.getTime();
// let diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
// alert (diffInDays + " days have passed since 1st ramadan, 2015");

// let referenceDate = new Date();
// let start2015 = new Date(2015, 0, 1);
// let milliSec = referenceDate.getTime() - start2015.getTime();
// let secs = Math.floor(milliSec / 1000);
// document.write("Second elapse between " + start2015 + "and" + referenceDate + ": " + secs)

// let currentDate = new Date();
// let currentHours = currentDate.getHours();
// console.log("Current Hours: " , currentHours);
// currentDate.setHours(currentHours + 1);
// document.write("Update date & time: " + currentDate);

// let date = new Date();
// date.setFullYear(date.getFullYear() - 100);
// alert("Date 100 years back: " + date);

// let age = prompt("Please enter your age");
// let currentYear = new Date().getFullYear();
// let birthyear = currentYear - age;
// document.write("you were born in the year: " + birthyear);


// function showDateTime () {
//     let now = new Date();
//     document.write("Current date & time " + now);
// }
// showDateTime();

// function greetUser (firstName, lastName){
//     let fullName = firstName + " " + lastName;
//     document.write("Hello, " + fullName + " ! welcome")
// }
// greetUser (prompt("Enter your first name: "),prompt("Enter your last name:"));

// function addNumbers (num1 , num2){
//     return num1 + num2;
// }
// let num1 = +prompt("enter your first number");
// let num2 = +prompt("Enter your second number");
// let sum = addNumbers(num1, num2);
// document.write("The sum of two numbers is: " + sum);



