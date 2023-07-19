import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from './authContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const {token, userID} = useContext(AuthContext)
  const authCtx = useContext(AuthContext)

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const body = {
      username, 
      password,
      first_name,
      last_name,
      email
    }

    const url = 'http://localhost:4656'

    // axios.get(`${url}/users`)

    axios.post(`${url}/users`, body
      // {headers: {
      //   authorization: token }
      // }
      )
      .then(res => {
        console.log('Sign up', res.data);
        console.log('User has signed up');
        console.log(username, password, first_name, last_name, email);

        // alert for successful signup
        window.alert('User has successfully signed up!');

        // navigate the user to the login page
        navigate('/login');
      })
      .catch(err => {
        console.log(err)
      })
      //reset variables
      setUsername('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setEmail('')
  };


  return (
    <div>
      <h1>
        New member? Sign up here:
      </h1>
      <form onSubmit={handleSubmit}>
      <input
          type="firstName"
          placeholder="FirstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="lastName"
          placeholder="LastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;