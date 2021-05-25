/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-12 14:23:36
 * @LastEditors: zhangjing
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'screens/project-list';
import { LoginScreen } from 'screens/login';

function App() {
  return (
    <div className="App">
      <LoginScreen/>
      {/* <ProjectListScreen/> */}
    </div>
  );
}

export default App;
