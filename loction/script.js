const button = document.getElementById("location");

async function getData(lat, long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=aed57dc6d16a45e49ab142301240505&q=${lat},${long}&aqi=yes`
  );
  return await promise.json();
}

async function gotlocation(postion) {
  const result = await getData(
    postion.coords.latitude,
    postion.coords.longitude
  );
  console.log(result);
}
function fail() {
  console.log("fail to get location");
}

button.addEventListener("click", async () => {
  const result = navigator.geolocation.getCurrentPosition(gotlocation, fail);
});
