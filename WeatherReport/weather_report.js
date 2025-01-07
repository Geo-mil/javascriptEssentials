function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'bd4832fa30bc3835166ceea314221216'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Wheather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);