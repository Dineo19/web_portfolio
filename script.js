const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", function(e){

e.preventDefault();

success.innerHTML="✔ Message Sent";

setTimeout(()=>{
success.innerHTML="";
form.reset();
},3000)

})