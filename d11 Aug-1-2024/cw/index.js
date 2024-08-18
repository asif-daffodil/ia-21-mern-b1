// condition

var age = 20;
var gender = "Female";

if (age <= 12 && age >= 0) {
    console.log("You are a child");
}else if(age <= 19 && age > 12){
    console.log("You are a teenager");
}else if(age <= 30 && age > 19){
    console.log("You are a young adult");
}else if (age <= 50 && age > 30){
    console.log("You are an adult");
}else if (age > 50 && age <= 150){
    console.log("You are a senior citizen");
}else{
    console.log("You are not in this world");
}

if (gender === "Female") {
    if(age >= 18){
        console.log("You are ready to merry");
    }else{
        console.log("You are not ready to merry");
    }
}else if(gender === "Male") {
    if(age >= 21){
        console.log("You are ready to merry");
    }else{
        console.log("You are not ready to merry");
    }
}

// switch case

var day = "Thursday";

switch (day) {
    case "Sunday":
        console.log("Today is Sunday");
        break;
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}

function shoeMsg (msg = "Amar Bangladesh", ending = ".") {
    return msg + ending;
    console.log("Hello Bangladesh");
}

console.log(shoeMsg("Hello World"));
console.log(shoeMsg("Hello Universe", "!"));
console.log(shoeMsg());
