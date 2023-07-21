import axios from 'axios';
import React, {useState, useEffect} from 'react'

const AffirmationForm = () => {
    const [affirmation, setAffirmation] = useState('');
    const [data, setData] = useState({})

    const randID = Math.floor(Math.random() * 1646)

    const url = 'http://localhost:4656'

   
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`${url}/affirmation/${randID}`)
            .then(res => {
                setData(res.data)
                setAffirmation(data)
                console.log(affirmation)
            })
            .catch(err => {
                console.log(err)})
    }

    return (
            <div className="A-container">
                <h1 className="title">Motivational Affirmations</h1>
            <div className="affirmation-container">
                <h1 className="affirmation">{data.affirmation}</h1>
                <h2 className="author">- {data.author}</h2>
            </div>
                <button className='get-affirmation' onClick={handleSubmit}>
                    Click to Get Motivated
                </button>
            </div>
        );
        };
    export default AffirmationForm