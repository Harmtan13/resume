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
                    "Dec" ];

let date = new Date();
dateInput.textContent = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

const formInput = document.querySelectorAll('.form-input');
const formOutput = document.querySelectorAll('.output');

formInput.forEach(input => {
  input.addEventListener('input', function(e) {
    formOutput.forEach(output => {
     if (output.classList.value.includes(input.id)) {
       output.textContent = input.value
     }
    })
  });
});