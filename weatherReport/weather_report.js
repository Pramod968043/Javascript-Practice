function showweatherDetails(event) {
    event.preventDefault(); // Prevent form submission

    const city = document.getElementById('city').value.trim(); // Get city input
    const apiKey = '91156940a887ab11d1977820549aad23'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found. Please try again.');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
}

// Attach event listener to the form
document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
