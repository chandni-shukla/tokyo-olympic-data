import logo from './logo.svg';
import './App.css';
import React from 'react';

import Employee from './components/Employee';
import EmployeeClass from './components/EmployeeClass';
import MainNavbar from './layouts/MainNavbar';



let App = function () {

  return (
    <>
        <MainNavbar/> {/* It is a reusable  */}

        <Employee name="chandni" age={25} designation="Software Engineer"/>
        <Employee name="archana" age={23} designation="Data Engineer"/>
        <Employee name="ramai" age={24} designation="junior Data Engineer"/>


        <EmployeeClass name="chandni" age={25} designation="Software Engineer"/>
        <EmployeeClass name="archana" age={23} designation="Data Engineer"/>
        <EmployeeClass name="ramai" age={24} designation="junior Data Engineer"/>

    </>
  );
}  // this is a functional component

export default App;
