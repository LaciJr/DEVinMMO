import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { NavBar } from './components/header';
import { Router } from './routes/Router';
import { GlobalStyle } from './themes/globalStyles';
import { myTheme } from './themes/themes';

function App() {
  return (
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
