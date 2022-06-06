import axios from 'axios';

export const apiGeoLocation = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0',
});
