import React, {useState} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {getCoordenates} from '../services/getCoordenates';
import {getWeather} from '../services/getWeather';
import {IWeatherData} from '../types/weatherData';

interface IProps {
  setWeatherData: React.Dispatch<
    React.SetStateAction<IWeatherData | undefined>
  >;
  setInfos: React.Dispatch<
    React.SetStateAction<{
      description: string;
      icon: string;
    }>
  >;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IInput {
  theme: {
    main: string;
  };
}

export const SearchBar = ({
  setWeatherData,
  setInfos,
  setTheme,
  setLoading,
  setError,
}: IProps) => {
  const [text, setText] = useState('');

  const searchCoordinates = async () => {
    try {
      setLoading(true);
      const data = await getCoordenates(text);
      const {lat, lon} = data[0];
      searchWeather(lat, lon);
      setError(false);
    } catch {
      setError(true);
    }
  };

  const searchWeather = async (lat: Number, lon: Number) => {
    try {
      const data = await getWeather(lat, lon);
      setWeatherData(data);
      changeInfos(data?.weather[0]?.main);
      setLoading(false);
      setError(false);
    } catch {
      setError(true);
    }
  };

  const changeInfos = (mainWeather: string) => {
    switch (mainWeather) {
      case 'Clear':
        setInfos({description: 'sol', icon: 'weather-sunny'});
        setTheme('hot');
        break;
      case 'Clouds':
        setInfos({description: 'algumas nuvens', icon: 'weather-cloudy'});
        setTheme('cold');
        break;
      case 'Drizzle':
        setInfos({description: 'chuva fraca', icon: 'weather-rainy'});
        setTheme('cold');
        break;
      case 'Rain':
        setInfos({description: 'chovendo', icon: 'weather-pouring'});
        setTheme('cold');
        break;
      case 'Snow':
        setInfos({description: 'nevando', icon: 'weather-hail'});
        setTheme('cold');
        break;
      case 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog' || 'Ash' || 'Tornado':
        setInfos({description: 'Aflição climática', icon: 'weather-fog'});
        setTheme('neutral');
        break;

      default:
        setInfos({description: 'Aflição climática', icon: 'weather-fog'});
        setTheme('neutral');
        break;
    }
  };

  return (
    <View>
      <Input
        placeholder="Pesquisar cidade..."
        placeholderTextColor="#d6d6d6"
        onSubmitEditing={searchCoordinates}
        onChangeText={value => setText(value)}
      />
    </View>
  );
};

const Input = styled.TextInput<IInput>`
  border-radius: 10px;
  background-color: ${props => props.theme.main};
  padding: 10px;
  color: white;
`;
