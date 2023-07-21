import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Goals = () => {
    const [goal, setGoal] = useState('');
    const [goalsList, setGoalsList] = useState([]); 
    const [user_id, setUserID] = useState('');

    const url = 'http://localhost:4656'

    let data 
    
    const updateGoals = () => {
        axios
        .get(`${url}/goal`)
        .then((res) => {
            data = res.data;
            const userGoals = data.filter((goalsList) => goalsList.user_id === user_id);
            setGoalsList(userGoals)
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    useEffect(() => {
        const storedUserID = localStorage.getItem('user_id');
        setUserID(+storedUserID)
        
        updateGoals();
    },[]);


  //input changes
    const handleInputChange = (e) => {
        setGoal(e.target.value);
    }

  // Function for form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!goal.trim()) {
            alert('Please enter a valid goal.');
            return;
        }

        setGoalsList([...goalsList, goal]);
        setGoal('');

        // const body = {
        //     goal,
        //     user_id
        // }

        // axios
        // .post(`${url}/goal`, body)
        // .then(() => {
        //     updateGoals();
        //     console.log(goalsList)
        // })
        // .catch(err => {
        //   console.log(err);
        // })
        // setGoal('')
    };

    const handleDeleteGoal = (goal) => {
        // axios.delete(`${url}/goals/${goalId}`)
        //   .then(() => {
        //     updateGoals();
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        setGoalsList( (goalsList) => goalsList.filter( (currentGoal) => currentGoal != goal ))
      };
    
    return (
        <div className="goals-container">
        <h2>Goals</h2>
        <form onSubmit={handleSubmit} className="add-goal-form">
            <div className="form-group">
            <input
                type="text"
                value={goal}
                onChange={handleInputChange}
                placeholder="Enter your goal"
            />
            <button type="submit" className="add-button">Add Goal</button>
            </div>
        </form>
        <ul className="goals-list">
            {goalsList.map((goalItem, index) => (
            <li key={index} className="goal-item">
                <span>{goalItem}</span>
                <button onClick={() => handleDeleteGoal(goalItem)} className="delete-button">Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
    };

export default Goals;