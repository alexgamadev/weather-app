/* eslint-disable import/prefer-default-export */

export default class WeatherDisplay {
  constructor() {
    this.weatherIcon = document.querySelector('#weather-icon');
    this.weatherText = document.querySelector('#weather-text');
    this.locationText = document.querySelector('#location');
    this.searchBtn = document.querySelector('#search-btn');
    this.searchText = document.querySelector('#search-text');
    this.body = document.querySelector('body');
  }

  setLocation(location) {
    this.locationText.innerText = location;
  }

  setWeather(weather) {
    this.weatherText.innerText = weather;
  }

  setIcon(url) {
    this.weatherIcon.src = url;
  }

  getSearchBtn() {
    return this.searchBtn;
  }

  getSearchText() {
    return this.searchText.value;
  }

  updateBackground(isDay) {
    if (isDay) {
      this.body.classList.add('bg-day');
      this.body.classList.remove('bg-night');
    } else {
      this.body.classList.add('bg-night');
      this.body.classList.remove('bg-day');
    }
  }
}
