
import './App.css';

import { Navbar } from './component/Navbar/Navbar';
import { Home } from './component/Home/Home';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
