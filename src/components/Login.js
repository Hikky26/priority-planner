import React, {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from './authContext'


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const authCtx = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('user has logged in')
        console.log(username, password)

        const body = {
            username, 
            password
        }

        const url = 'http://localhost:4656'

        // console.log(authCtx)

        axios.post(`${url}/login`, body)
            .then((res) => {
                console.log('AFTER AUTH', res.data)
                authCtx.login(res.data.token, res.data.exp, res.data.userId)
                localStorage.setItem('user_id', res.data.userId)
            })
            .catch(err => {
                console.log(err)
                setPassword('')
                setUsername('')
            })

        navigate('/homepage')


        setUsername('')
        setPassword('')
    }


    return (
        <div>
            <h1>
                Login in here:
            </h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='username' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='form-input'
                />
                <input 
                    type='password' 
                    placeholder='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='form-input'
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;