
import './App.css';

import { Navbar } from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import FlightsFilter from './component/Flights/FlightsFilter';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Sidebar from './component/Dashboard/Sidebar';
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      {/*<CssBaseline/>
      <Navbar/>
      
      <SignIn/>
      <SignUp/>
      <Home/>
      <FlightsFilter />
  */}
      <Sidebar/>
    </ThemeProvider>
  );
}

export default App;
