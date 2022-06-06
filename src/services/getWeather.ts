import {API_KEY} from '../consts/API_KEY';
import {apiWeather} from './apiWeather';

export const getWeather = async (lat: Number, lon: Number) => {
  const {data} = await apiWeather.get(
    `/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  );

  return data;
};
