const dateInput = document.querySelector('.date');
const monthNames = ["Jan", 
"Feb", 
"Mar", 
"Apr", 
"May", 
"Jun",
"Jul", 
"Aug", 
"Sept", 
"Oct", 
"Nov", 
"Dec"
];

let date = new Date();

dateInput.textContent = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`