import axios from 'axios';
import React, {useState, useEffect} from 'react'


const ToDoPage = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateDue, setDateDue] = useState('');
  const [details, setDetails] = useState('');
  const [user_id, setUserID] = useState('')

  const url = 'http://localhost:4656'
  
  useEffect(() => {
    const storedUserID = localStorage.getItem('user_id');
    setUserID(storedUserID)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate mandatory fields before submitting
    if (!title|| !category || !dateStart) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    const body = {
      title,
      category,
      dateStart,
      dateDue,
      details,
      user_id
    }

    console.log('To do Form Submitted')

    axios.post(`${url}/todo`, body)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
      setTitle('');
      setCategory('');
      setDateStart('');
      setDateDue(null);
      setDetails('');
    }
      
  return (
    <div>
      <h2>Add a To Do or a Task:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={dateStart}
            onChange={(e) => setDateStart(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={dateDue}
            onChange={(e) => setDateDue(e.target.value)}
          />
        </div>
        <div>
          <label>Details:</label>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default ToDoPage