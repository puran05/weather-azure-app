const weatherForm = document.getElementById("weatherForm");
// const apiUrl = "https://jsonplaceholder.typicode.com/users";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "182621373de075820827e7812a896779";

async function fetchWeather(city, temperature) {
  try {
    const response = await fetch(
      `${apiUrl}?q=${city}&appid=${apiKey}&units=imperial`
    );

    if (!response.ok) {
      throw new Error(`Http error ! Status:${response.status}`);
    }

    const data = await response.json();
    const temperatureReturned = data.main.temp;
    console.log(temperature);
    if (temperatureReturned < temperature) {
      console.log("Alert! It is cold outside");
    } else {
      console.log("Worry not! You can handle the weather today");
    }

    console.log(`The temperature of ${city} is ${temperatureReturned}`);
    // console.log("Fetched Data with Headers:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const temperature = document.getElementById("temperature").value;

  if ((city, temperature)) {
    fetchWeather(city, temperature);
  } else {
    console.error("city not found");
  }

  console.log(fullname, city, email, temperature);
});
