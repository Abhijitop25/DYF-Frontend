// src/App.js
import React from 'react';
import { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import FlightResults from './components/FlightResults';
import LoginPage from './auth/signup';
import { useState } from 'react';

export const UserContext = createContext({});

function App() {

  const [userAuth, setUserAuth] = useState({});

  return (
    <UserContext.Provider value={{userAuth, setUserAuth}}>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path='/login'element={<LoginPage/>}/>
            <Route path="/" element={<Homepage />} />
            <Route path="/flights" element={<FlightResults />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
