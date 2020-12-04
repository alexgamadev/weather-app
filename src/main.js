import { convertUTCToDate, isDay } from './modules/date-time';
import WeatherDisplay from './modules/weather-display';

const body = document.querySelector('body');
const weatherDisplay = new WeatherDisplay();

// Get open weather API
async function getWeather(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5dbd617e8b48907cb3780b57ff5f1ffa`, { mode: 'cors' });
    const data = await response.json();
    weatherDisplay.setLocation(data.name);
    const sunrise = convertUTCToDate(data.sys.sunrise * 1000, data.timezone);
    const sunset = convertUTCToDate(data.sys.sunset * 1000, data.timezone);
    const localTime = convertUTCToDate(Date.now(), data.timezone);
    const isDaytime = isDay(localTime, sunrise, sunset);
    if(isDaytime) {
      body.classList.add('bg-day');
      body.classList.remove('bg-night');
    } else {
      body.classList.add('bg-night');
      body.classList.remove('bg-day');
    }
    console.log(data.weather[0].description);
  } catch (err) {
    throw new Error(err);
  }
}

getWeather('london');

//Change background colour based on time of day
