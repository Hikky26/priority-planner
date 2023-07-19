import React, {useState, useEffect} from 'react';
import axios from 'axios';


const ToDo = () => {
    const [todo_id, setToDoID] = useState('')
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateDue, setDateDue] = useState('');
    const [details, setDetails] = useState('');
    const [user_id, setUserID] = useState('');
    const [top5ToDos, setTop5ToDos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const url = 'http://localhost:4656'

    let data 
    
    useEffect(() => {
      const storedUserID = localStorage.getItem('user_id');
      setUserID(+storedUserID)

      axios
      .get(`${url}/todo`)
      .then((res) => {
        data = res.data;
        console.log(data);
        const userTodos = data.filter((todo) => todo.user_id === user_id);
        userTodos.sort((a, b) => new Date(a.dateDue) - new Date(b.dateDue));
        const top5ToDos = userTodos.slice(0, 5);
        setTop5ToDos(top5ToDos);
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); 
      });
  }, []);
  console.log('')

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Top To-Dos</h1>
          <ul>
            {top5ToDos.map((todo) => (
              <li key={todo.todo_id}>
                <strong>Title:</strong> {todo.title}<br />
                <strong>Category:</strong> {todo.category}<br />
                <strong>Date Due:</strong> {todo.dateDue}<br />
                <strong>Details:</strong> {todo.details}<br />
                <strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}<br />
                <br />
                <br />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ToDo