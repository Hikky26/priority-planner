import axios from 'axios';
import React from 'react'

const AffirmationForm = () => {
    const [affirmation, setAffirmation] = useState('');
    const [user_id, setUserID] = useState('')
  
    const url = 'http://localhost:4656'
    
    useEffect(() => {
      const storedUserID = localStorage.getItem('user_id');
      setUserID(storedUserID)
    }, [])  
  
    const handleSubmit = (e) => {
        e.preventDefault();

        const body = { 
            affirmation,
            user_id
        }

        axios.post(`${url}/affirmation`, body)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)})
            setAffirmation('')

    }

    return (
        <div>Affirmation Form</div>
        // need to make the thing here
    )
    }

    export default AffirmationForm