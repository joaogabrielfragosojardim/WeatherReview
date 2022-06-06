import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {Home} from './src/pages/Home';
import themes from './src/themes';

const App = () => {
  const [theme, setTheme] = useState('neutral');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Home setTheme={setTheme} theme={theme} />
    </ThemeProvider>
  );
};

export default App;
