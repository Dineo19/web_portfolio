const form = document.querySelector("form[action*='script.google.com']");
const success = document.getElementById("success");
const btn = form.querySelector("button");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const data = new FormData(form);
  
  // Disable button while sending
  btn.textContent = "Sending...";
  btn.disabled = true;

  fetch(form.action, {
    method: "POST",
    body: data
  })
  .then(response => {
    success.style.color = "#22c55e";
    success.textContent = "✔ Message sent successfully!";
    form.reset();
    btn.textContent = "Send Message";
    btn.disabled = false;
    setTimeout(() => { success.textContent = ""; }, 3000);
  })
  .catch(error => {
    success.style.color = "#ef4444";
    success.textContent = "❌ Error sending message. Please try again.";
    btn.textContent = "Send Message";
    btn.disabled = false;
  });
});