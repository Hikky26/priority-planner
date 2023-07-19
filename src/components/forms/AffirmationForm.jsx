import axios from 'axios';
import React, {useState, useEffect} from 'react'

const AffirmationForm = () => {
    const [affirmation, setAffirmation] = useState('');

    const randID = Math.floor(Math.random() * 1646)

    const url = 'http://localhost:4656'

    let data
      
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`${url}/affirmation/${randID}`)
            .then(res => {
                data = res.data
                setAffirmation(data)
                console.log(affirmation)
            })
            .catch(err => {
                console.log(err)})
    }

    return (
        <div>   
            <h1>
                Motivational Affirmations
            </h1>
            <button className='get-affirmation' onClick={handleSubmit}>
                Click to Get Motivated
            </button>
            <h1>
                {data.affirmation}
            </h1>
            <h2>
                {data.author}
            </h2>
        </div>
        // need to make the thing here
    )
    }

    export default AffirmationForm