import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import DemoApp from '../Calendar';

// serves as the overview page
// need to display the calender, todo list, and have a monthly, weekly, daily actions/toggle
// also have some affirmations to add and display
//if i have time add a spotify api at the bottom to set the mood for work and relaxation.

const HomePage = () => {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/homepage')
  }
  
  return (
    <div>This is the HomePage
      <div className='display-container'>
        <div className='box'>
          <img className='stock-img' src="https://img.freepik.com/premium-vector/3d-calendar-marked-date-time-reminder-day-pink-background-calendar-with-todo-list-schedule-appointment-event-day-holiday-planning-concept-3d-alarm-icon-vector-render-illustration_412828-1329.jpg?w=996" alt="3d-calendar" />
        </div>
        <div className='box'>
          <img className='stock-img' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSx_9QlHMPD4q9bYTnp8kaxRgmrB4XNJ1F6sTws24Or-lKDoIcw" alt="3d-todo" />
        </div>
        <div className='box'>
          <img className='stock-img' src="https://img.freepik.com/free-photo/golden-correct-tick-mark-sign-best-quality-assurance-with-golden-five-stars-guarantee-product-iso-service-concept-by-3d-render_616485-11.jpg?w=996&t=st=1689719772~exp=1689720372~hmac=c5190af435442b9730e3f2566ff9cafa4f1353ece071b5322e94fc1dbbc8f49d" alt="3d-goals" />
        </div>
        <div className='box'>
          <img className='stock-img' src="https://img.freepik.com/premium-photo/3d-speech-bubbles-text-replacement-chatting-message-box-social-media-chatting-concept-3d-render-illustration_73903-1119.jpg?w=740" alt="3d-aff" />
          <DemoApp/>
        </div>
      </div>
    </div>
  )
}

export default HomePage