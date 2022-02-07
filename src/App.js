import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes/Router';
import { GlobalStyle } from './themes/globalStyles';
import { myTheme } from './themes/themes';

function App() {
  return (
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
