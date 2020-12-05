import { convertUTCToDate, isDay } from './modules/date-time';
import WeatherDisplay from './modules/weather-display';
import { getWeatherData, getWeatherIconURL, getCountryName } from './modules/weather-api';

const weatherDisplay = new WeatherDisplay();

// Get open weather API
async function loadWeather(city) {
  try {
    const data = await getWeatherData(city);
    const sunrise = convertUTCToDate(data.sys.sunrise * 1000, data.timezone);
    const sunset = convertUTCToDate(data.sys.sunset * 1000, data.timezone);
    const localTime = convertUTCToDate(Date.now(), data.timezone);
    const isDaytime = isDay(localTime, sunrise, sunset);
    const country = getCountryName(data.sys.country);
    weatherDisplay.setTemperature(data.main.temp, 'cels');
    weatherDisplay.setLocation(`${data.name}, ${country}`);
    weatherDisplay.setWeather(data.weather[0].description);
    weatherDisplay.updateBackground(isDaytime);
    weatherDisplay.setIcon(getWeatherIconURL(data.weather[0].icon));
    console.log(data);
  } catch (err) {
    throw new Error(err);
  }
}

loadWeather('london');
weatherDisplay.getSearchBtn().addEventListener('click', () => {
  loadWeather(weatherDisplay.getSearchText());
});
