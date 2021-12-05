const API_KEY = "16f32d8dce0e5be7d7ee33c1d65f420a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:last-child");
            const weather = document.querySelector("#weather span:first-child");
            
            
            city.innerHTML = data.name;
            weather.innerHTML= `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
        });
}

function onGeoError() {
    alert("Can't fund you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);