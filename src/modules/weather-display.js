/* eslint-disable import/prefer-default-export */

export default class WeatherDisplay {
  constructor() {
    this.locationText = document.querySelector('#location');
    this.searchBtn = document.querySelector('#search-btn');
    this.searchText = document.querySelector('#search-text');
  }

  setLocation(location) {
    this.locationText.innerText = location;
  }

  getSearchBtn() {
    return this.searchBtn;
  }

  getSearchText() {
    return this.searchText;
  }
}
