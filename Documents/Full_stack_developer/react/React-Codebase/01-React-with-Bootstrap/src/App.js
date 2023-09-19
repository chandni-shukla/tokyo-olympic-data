import logo from './logo.svg';
import './App.css';
import React from 'react';
import Welcome from './components/Welcome';
import MainNavbar from './layouts/MainNavbar';
// import WelcomeClass from './components/WelcomeClass';


let App = function () {

  return (
    <>
        <MainNavbar/> {/* It is a reusable  */}

        <Welcome/>
        {/* <WelcomeClass/> */}
    </>
  );
}  // this is a functional component

export default App;
