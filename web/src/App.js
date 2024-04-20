
import './App.css';

import { Navbar } from './component/User/Navbar/Navbar';
import Home from './component/User/Home/Home';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import FlightsFilter from './component/User/Flights/FlightsFilter';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Sidebar from './component/Admin/Dashboard/Sidebar';
 
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    {/* 
     <SignIn/>
      <SignUp/>
      <Home/><CssBaseline/>
     <Navbar/>
      
       <FlightsFilter />
    */}
    <Sidebar/> 
      
      
  
    </ThemeProvider>
  );
}

export default App;
