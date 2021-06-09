const age = 18;
const isFemale = true;
const driverStatus = "bob";
const studentAge = 17;
const name = "sarah || bram";
const totalAmount = 100


if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je mag autorijden");
} else {
  console.log("Je mag geen autorijden");
}

if (studentAge >= 18 && studentAge <= 30) {
    console.log("Je krijgt 50% korting!");
  } else {
    console.log("Je krijgt geen korting");
  }

if (name === "sarah" || "bram") {
    console.log("Je krijgt een gratis biertje");
  } else {
    console.log("Je krijgt geen gratis biertje");
  }

  
if (totalAmount >= 25 && totalAmount >= 50 && totalAmount >= 100) {
    console.log("Je krijgt vega bitterballen");
  } else {
    console.log("Je krijgt een portie nachos");
  } else {
    console.log("je krijgt een flesje champagne");
  }