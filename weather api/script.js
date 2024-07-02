const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const cityTime = document.getElementById("city-time");

async function getData(city) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=aed57dc6d16a45e49ab142301240505&q=${city}&aqi=yes`
  );
  return await promise.json();
}
button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
});

// http://api.weatherapi.com/v1/current.json?key=aed57dc6d16a45e49ab142301240505&q=London&aqi=yes
