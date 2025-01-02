const weatherForm = document.getElementById("weatherForm");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const temperature = document.getElementById("temperature").value;

  console.log(fullname, city, email, temperature);
});
