   const apiKey = "a47c465cff916aa7ad081df5ebda8127";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            let data = await response.json();

            console.log(data);

            if(response.status == 404){
                
                return alert("try again")
            }

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            const weatherCon = data.weather[0].main
            if(weatherCon == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            }else if(weatherCon == "Clear") {
                weatherIcon.src = "images/clear.png";
            }else if(weatherCon == "Rain") {
                weatherIcon.src = "images/rain.png";
            }else if(weatherCon == "Mist"){
                weatherIcon.src = "images/mist.png";
            }else if(weatherIcon == "Drizzle") {
                weatherIcon.src = "images/drizzle.png"
            }
            
        }

        checkWeather("katowice")

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value)
        });