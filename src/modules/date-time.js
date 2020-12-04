/* eslint-disable no-unneeded-ternary */

export function convertUTCToDate(seconds, offsetSeconds = 0) {
  return new Date(seconds + (offsetSeconds * 1000));
}

export function isDay(time, sunrise, sunset) {
  return (time > sunrise && time < sunset) ? true : false;
}
