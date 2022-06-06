export interface IWeatherData {
  main: {
    temp: number;
  };
  name: string;
  weather: [
    {
      main:
        | 'Clear'
        | 'Clouds'
        | 'Drizzle'
        | 'Rain'
        | 'Snow'
        | 'Mist'
        | 'Smoke'
        | 'Haze'
        | 'Dust'
        | 'Fog'
        | 'Ash'
        | 'Tornado';
    },
  ];
}
