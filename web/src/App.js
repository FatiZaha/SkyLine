import './App.css';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './component/User/Navbar/Navbar';
import Home from './component/User/Home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import FlightsFilter from './component/User/Flights/FlightsFilter';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Sidebar from './component/Admin/Dashboard/Sidebar';
import Resevation from './component/User/Reservations/Reservation'
import ReservationProcess from './component/User/ReservationProcess/ReservationProcess';
import AllReservations from './component/User/Reservations/AllReservations';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

function AppRouter() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/signin' || location.pathname === '/' || location.pathname === '/reservationprocess' ;

  return (
    <>
      {!hideNavbar && <Navbar />} {/* Afficher la Navbar sauf dans la page "SignIn" */}
      <Outlet />
      <Routes>
        <Route exact path="/" element={<SignUp />} /> 
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/flightsfilter" element={<FlightsFilter />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
        <Route exact path="/allreservations" element={<AllReservations />} />
        <Route exact path="/reservationprocess" element={<ReservationProcess />} />
      </Routes>
    </>
  );
}

export default App;