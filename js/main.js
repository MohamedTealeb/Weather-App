let city = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let search = document.querySelector('.search input');
let button = document.querySelector('.search button');
let allpost = [];

async function demo(name) {
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=14c219667b05fe49b0a590c73f9c4e2d`);
        let res = await data.json();
        allpost = res;
        console.log(res);
        
        let box2 = `
        <div class="weather">
            <img src="images/rain.png" alt="" class="weather-icon">
            <h1 class="temp">${Math.round(allpost.main.temp - 273.15)}°C</h1>
            <h2 class="city">${allpost.name}</h2>
            <div class="details">
                <div class="col">
                    <img src="images/humidity.png" alt="">
                    <div>
                        <p class="humidity">${allpost.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="images/wind.png" alt="">
                    <div>
                        <p class="wind">${allpost.wind.speed} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.getElementById('Weather1').innerHTML = box2;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

button.addEventListener("click", () => {
    demo(search.value);
});

search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { 
        demo(search.value); 
    }
});