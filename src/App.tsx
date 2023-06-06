import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider, RequireAuth } from 'react-auth-kit';
import AppRoutes from './AppRouter';


function App() {
  return (
    <AuthProvider authName={"_auth"} authType={"cookie"}>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
