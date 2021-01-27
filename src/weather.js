/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
function render(location, image, feelsLike, temp, description, humidity) {
  const container = document.getElementById('js-container');
  container.innerHTML = '';
  const displayLocation = document.createElement('h2');
  const displayImage = document.createElement('img');
  const displayTemp = document.createElement('p');
  const displayDescription = document.createElement('h3');
  const displaySpan = document.createElement('span');
  container.appendChild(displayLocation);
  container.appendChild(displayImage);
  container.appendChild(displayTemp);
  container.appendChild(displayDescription);
  container.appendChild(displaySpan);
  displayLocation.innerHTML = `${location}`;
  displayImage.src = `http://openweathermap.org/img/wn/${image}@2x.png`;
  displayTemp.innerHTML = `${temp}°C`;
  displayDescription.innerHTML = description;
  displaySpan.innerHTML = `Feels Like ${feelsLike}°C | ${humidity}% humidity`;
}

export async function getData(location) {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7294f19a29b1cd65d88f2beb9df55f6c`, { mode: 'cors' });
  const data = await response.json();
  const image = data.weather[0].icon;
  const feelsLike = Math.round(data.main.feels_like);
  const temp = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  render(location, image, feelsLike, temp, description, humidity);
}
