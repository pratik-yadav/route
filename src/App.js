import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import Info from './Components/Info';

function App() {
  return (
    <>
      <Header/>
      {/* <Info/> */}
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
