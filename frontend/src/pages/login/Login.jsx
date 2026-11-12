import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './login.css'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const { login } = useAuth()


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true)
    
    if (!email || !password) {
      setError('Invalid credentials, try again.');
      return;
    }
      // Process API CALL here
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        email,
        password,
      });
      login(response.data.token)
      navigate('/')

      // clear input fields
      setEmail('');
      setPassword('');

    } catch (error) {
        console.log('full error:', error);
        console.log('status:', error.response?.status, 'data:', error.response?.data);
    } finally {
    setIsLoading(false)
  }
      
  }

  return (
    <div className='login-container'>
      <form action="" className='login-form' onSubmit={handleSubmit}>
      <h1 className="header">Login</h1>

        { error && <p className='error-message'>{error}</p> }

        <div className="input-group">
          <label htmlFor="email">E-mail: </label>
          <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your E-mail' />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* <span>reset password</span> */}

        <button className='login-btn' disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</button>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>

      </form>
    </div>
  )
}

export default Login