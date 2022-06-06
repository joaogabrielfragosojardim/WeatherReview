import React from 'react';
import {ActivityIndicator} from 'react-native';

import styled from 'styled-components/native';
import {IWeatherData} from '../types/weatherData';

interface ICardWeatherProps {
  weatherData: IWeatherData | undefined;
  loading: boolean;
}

interface ICard {
  theme: {
    main: string;
  };
}

export const CardWeather = ({weatherData, loading}: ICardWeatherProps) => {
  if (!!weatherData) {
    const temperature = (weatherData?.main?.temp - 273.15).toFixed(0) + '°';
    const local = weatherData?.name.toUpperCase();
    const week = [
      'Domingo',
      'Segunda-Feira',
      'Terça-Feira',
      'Quarta-Feira',
      'Quinta-Feira',
      'Sexta-Feira',
      'Sábado',
    ];

    const addZero = (n: number) => {
      if (n < 9) {
        return '0' + n;
      }
      return n;
    };

    const today = new Date().getDay();
    const hours = addZero(new Date().getHours());
    const minutes = addZero(new Date().getMinutes());
    const date = week[today] + ' ' + hours + ':' + minutes;
    return (
      <Card>
        <CityText>{local}</CityText>
        <TemperatureText>{temperature}</TemperatureText>
        <DateText>{date}</DateText>
      </Card>
    );
  }

  if (loading) {
    return (
      <Card>
        <ActivityIndicator size="large" color="white" />
      </Card>
    );
  }

  return (
    <Card>
      <DefaultText>Pesquise uma cidade...</DefaultText>
    </Card>
  );
};

export const Card = styled.View<ICard>`
  margin-top: 20px;
  border-radius: 10px;
  padding: 25px;
  background-color: ${props => props.theme.main};
  align-items: center;
`;

export const CityText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const TemperatureText = styled.Text`
  color: white;
  font-size: 60px;
  margin-top: 15px;
`;

export const DateText = styled.Text`
  color: white;
  font-size: 15px;
  margin-top: 15px;
`;

export const DefaultText = styled.Text`
  color: white;
  font-size: 15px;
`;
