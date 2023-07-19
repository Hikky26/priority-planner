import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import DemoApp from '../Calendar';
import ToDo from './ToDo'
import Goals from '../forms/Goals';
import AffirmationForm from '../forms/AffirmationForm';

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
    <div className='container'>
      <div className='display-container'>

        <div className='box box1'>
          <div className='insideBox'>
            <DemoApp/>
          </div>
        </div>
          
        <div className='box box2'>
          <div className='insideBox'>
            <ToDo/>
          </div>
        </div>

        <div className='box box3'>
          <div className='insideBox'>
            <Goals />
          </div>
        </div>

        <div className='box box4'>
          <div className='insideBox'>
            <AffirmationForm/>
          </div>
        </div>

        <div class="welcome">Welcome, This is the HomePage</div>
      </div>
    </div>
  )
}

export default HomePage