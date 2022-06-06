import React, {useState} from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {CardWeather} from '../components/CardWeather';
import {ErrorToast} from '../components/ErrorToast';
import {ImageInfo} from '../components/ImageInfo';
import {SearchBar} from '../components/SearchBar';
import themes from '../themes';
import {IWeatherData} from '../types/weatherData';

interface IContainer {
  theme: {
    second: string;
  };
}

interface IProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
}

export const Home = ({setTheme, theme}: IProps) => {
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const [infos, setInfos] = useState({
    description: 'Aflição climática',
    icon: 'weather-fog',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  return (
    <SafeAreaView>
      <StatusBar backgroundColor={themes[theme].second} />
      <Container>
        <SearchBar
          setWeatherData={setWeatherData}
          setInfos={setInfos}
          setTheme={setTheme}
          setLoading={setLoading}
          setError={setError}
        />
        <CardWeather weatherData={weatherData} loading={loading} />
        {!!weatherData && <ImageInfo {...infos} />}
      </Container>
      <ErrorToast error={error} />
    </SafeAreaView>
  );
};

export const Container = styled.View<IContainer>`
  padding: 25px;
  background-color: ${props => props.theme.second};
  min-height: 100%;
`;
