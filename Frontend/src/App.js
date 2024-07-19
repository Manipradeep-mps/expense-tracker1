import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import ExpenseTracker from './layer/expense_tracker/ExpenseTracker';
import Home from './layer/home/Home';
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';
import Auth from './components/user/Auth';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='expense-tracker' element={<ExpenseTracker/>}></Route>
    </Routes>
  );
}

export default App;
