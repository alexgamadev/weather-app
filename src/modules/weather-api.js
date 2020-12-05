import lookup from "country-code-lookup";

export async function getWeatherData(city) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5dbd617e8b48907cb3780b57ff5f1ffa&units=metric`, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export function getWeatherIconURL(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

export function getCountryName(countryCode) {
  const data = lookup.byIso(countryCode);
  console.log(data);
  return data.country;
}
