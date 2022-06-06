import {API_KEY} from '../consts/API_KEY';
import {apiGeoLocation} from './apiGeoLocation';

export const getCoordenates = async (city: string) => {
  const {data} = await apiGeoLocation.get(`/direct?q=${city}&appid=${API_KEY}`);

  return data;
};
