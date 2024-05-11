import './App.css';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './component/User/Navbar/Navbar';
import Home from './component/User/Home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import FlightsFilter from './component/User/Flights/FlightsFilter';
import SignInUser from './component/User/SignIn/SignIn';
import SignInAdmin from './component/Admin/SignIn/SignIn';
import SignUp from './component/User/SignUp/SignUp';
import Sidebar from './component/Admin/Dashboard/Sidebar';
import Resevation from './component/User/Reservations/Reservation';
import ReservationProcess from './component/User/ReservationProcess/ReservationProcess';
import AllReservations from './component/User/Reservations/AllReservations';
import React from 'react';


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
  const [client, setClient] = React.useState(null);
  const [flight, setFlight] = React.useState(null);
  const location = useLocation();
  const hideNavbar = location.pathname === '/signin' ||location.pathname === '/admin' || location.pathname === '/' || location.pathname === '/reservationprocess' || location.pathname === '/sidebar' ;

  return (
    <>
      {!hideNavbar && <Navbar client={client} />} {/* Afficher la Navbar sauf dans la page "SignIn" */}
      <Outlet />
      <Routes>
        <Route exact path="/" element={<SignUp />} /> 
        <Route exact path="/signin" element={<SignInUser setClientData={setClient} />} />
        <Route exact path="/admin" element={<SignInAdmin />} />
        <Route exact path="/home" element={<Home client={client} />} />
        <Route exact path="/flightsfilter" element={<FlightsFilter setFlight={setFlight} client={client}/>} />
        <Route exact path="/sidebar" element={<Sidebar />} />
        <Route exact path="/allreservations" element={<AllReservations client={client}/>} />
        <Route exact path="/reservationprocess" element={<ReservationProcess flight={flight} client={client} />} />
      </Routes>
    </>
  );
}

export default App;