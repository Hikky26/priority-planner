import React, { useContext } from 'react'
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/pages/HomePage'
import AuthContext from './components/authContext';
import CalendarPage from './components/pages/CalendarPage'
import ToDoForm from './components/forms/ToDoForm';


import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import CalendarUI from './components/Calendar';
import PlannerPage from './components/pages/PlannerPage';

function App() {
  const authCtx = useContext(AuthContext)
  const location = useLocation();
  const showCalendarUI = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className='app'>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/form' element={authCtx.token ? <HomePage/> : <Navigate to='/login'/>}/>
          <Route path='/login'  element={authCtx.token ? <Navigate to='/homepage' /> : <Login />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/homepage' element={authCtx.token ? <HomePage/> : <Navigate to='/login'/>}/>
          <Route path='/calendar' element={authCtx.token ? <CalendarPage/> : <Navigate to='/login'/>}/>
          <Route path='/todo' element={authCtx.token ? <ToDoForm/> : <Navigate to='/login'/>}/>
          <Route path='/planner' element={authCtx.token ? <PlannerPage/> : <Navigate to='/login'/>}/>
        </Routes>
        {showCalendarUI && <div className='cal'><CalendarUI /></div>}
    </div>
  );
}

export default App;
