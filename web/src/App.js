import './App.css';
import { BrowserRouter, Routes, Route, Redirect, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './component/User/Navbar/Navbar';
import Home from './component/User/Home/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import FlightsFilter from './component/User/Flights/FlightsFilter';
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';
import Sidebar from './component/Admin/Dashboard/Sidebar';
import { useState } from 'react';

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
  const hideNavbar = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />} {/* Afficher la Navbar sauf dans les pages "SignIn" et "SignUp" */}
      <Outlet />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/filter" element={<FlightsFilter />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;