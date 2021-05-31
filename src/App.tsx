/*
 * @Description: 
 * @Author: zhangjing
 * @Date: 2021-05-12 14:23:36
 * @LastEditors: zhangjing
 */
import React from 'react';
import './App.css';
import { useAuth } from './context/auth-context';
import { AuthenticatedApp } from './authenticated-app';
import { UnauthenticatedApp } from './unauthenticated-app';

function App() {
  const {user}=useAuth()
  return (
    <div className="App">
      {user?<AuthenticatedApp/>:<UnauthenticatedApp/>}
    </div>
  );
}

export default App;
