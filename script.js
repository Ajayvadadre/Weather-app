const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "62c56011fbmsh1bec576fbe361f0p1306efjsn9b80bc5c7a07",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getwheather = (inputValue) => {
  const url ="https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + inputValue;
  cityname.innerHTML = inputValue;

  async function fetchData() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      cloud_pct.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      temp1.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      humidity1.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
};
const button = document.getElementById('button');

button.addEventListener("click", (e) => {
  e.preventDefault;
  let inputValue = document.getElementById("search").value;
  const capitalizedValue = capitalizeFirstLetter(inputValue);
  cityname.innerHTML = capitalizedValue;
  getwheather(inputValue);
});
  
function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
// getwheather("Mumbai");
