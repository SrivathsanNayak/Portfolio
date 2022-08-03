const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const greetingTypes = ["Good morning!", "Good afternoon!", "Good evening!"];
let greetingText = "";

if (hour < 12) greetingText = greetingTypes[0];
else if (hour < 18) greetingText = greetingTypes[1];
else greetingText = greetingTypes[2];

greeting.textContent = greetingText;