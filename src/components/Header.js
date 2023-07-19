import React, { useContext } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup';

import AuthContext from './authContext';


export const Header = () => {
  const authCtx = useContext(AuthContext);
  const location = useLocation();

  const getImageURL = () => {
    const images ={
      '/': 'https://img.freepik.com/premium-psd/document-note-with-pen-notification-bell-sign-3d-illustration-concept-remember-writing_492780-5166.jpg?w=996',
      '/form': 'https://img.freepik.com/free-photo/checklist-icon-3d-clipboard-with-survey-pen_107791-17349.jpg?w=996&t=st=1689724586~exp=1689725186~hmac=2726178a87f9f513c6f6ea9c079f7f331cd44712f56ffe63eef61938396b18ff',
      '/login': 'https://img.freepik.com/free-photo/website-account-access-registration-form_107791-16450.jpg?w=996&t=st=1689724625~exp=1689725225~hmac=7bb67c731934f6ab8ddd561fd226d977a09acf109917068576a56cfac3211812',
      '/signup': 'https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=996&t=st=1689724684~exp=1689725284~hmac=1b05c3de2e58fed56a3ef2021f615f89c776c64ea08eca8d707821fee244da80',
      '/homepage': 'https://img.freepik.com/premium-photo/3d-deadline-multitask-concept-productive-master-productivity-project-management-skill_554821-1476.jpg?size=626&ext=jpg&ga=GA1.1.2067713077.1689667706&semt=ais',
      '/calendar': 'https://img.freepik.com/premium-vector/3d-calendar-marked-date-time-reminder-day-pink-background-calendar-with-todo-list-schedule-appointment-event-day-holiday-planning-concept-3d-alarm-icon-vector-render-illustration_412828-1329.jpg?w=996',
      '/planner': 'https://img.freepik.com/free-photo/calendar-with-date-schedule-alarm-clock_107791-15677.jpg?w=996&t=st=1689724888~exp=1689725488~hmac=62a3a797b5f0fc27841175b90d2af459e23521a09be8d45bf6ad19b860db98a3',
      '/todo': 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSx_9QlHMPD4q9bYTnp8kaxRgmrB4XNJ1F6sTws24Or-lKDoIcw',
    }
    if (images.hasOwnProperty(location.pathname)){
      return images[location.pathname]
    }
    return "https://img.freepik.com/premium-psd/document-note-with-pen-notification-bell-sign-3d-illustration-concept-remember-writing_492780-5166.jpg?w=996"
  }




  return (
    <header  style={{ backgroundImage: `url(${getImageURL()})` }}>
      <div>Priority planner
      {/* <img src={getImageURL()} alt='priority-planner-logo' className='img' /> */}
          {/* add logic here for when user is logged it in it will display add a goal or a new planner and the logout button */}
          <div className='block'></div>
          <nav>{ 
            authCtx.token ? (
              <ul>
                <li>
                  <NavLink to='/homepage'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/todo'>To Do's</NavLink>
                </li>
                <li>
                  <NavLink to='/calendar'>Calendar</NavLink>
                </li>
                <li>
                  <NavLink to='/planner'>View Planner</NavLink>
                </li>
                <li>
                <button style={{ fontFamily: 'Philosopher',  fontSize: '14px' }} onClick={() => authCtx.logout()}>Logout</button>
                </li>
              </ul>
            ):(
              <ul>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                  <NavLink to='/signup'>Sign Up</NavLink>
                </li>
              </ul>
            )}
            </nav>
      </div>
      
    </header>
  )
}

export default Header;