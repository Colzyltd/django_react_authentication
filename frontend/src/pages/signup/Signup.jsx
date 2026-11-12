import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const Signup = () => {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  const [ error, setError ] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

      // Process API CALL here
    setIsLoading(true)
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        username,
        email,
        password,
        confirm_password: confirmPassword
      });

      
      // clear input fields
      setUsername('');
      setEmail('');
      setPassword('');

      navigate('/')
      console.log(response.data)
    }
    catch (error) {
      // console.log(error.response?.data)
      setError('Registration failed. Check your details and try again.');
    } finally {
      setIsLoading(false)
    }
    
  }

  return (
    <div className='login-container'>
      <form action="" className='login-form' onSubmit={handleSubmit}>
      <h1 className="header">Sign Up</h1>

        { error && <p className='error-message'>{error}</p> }

        <div className="input-group">
          <label htmlFor="username">Username: </label>
          <input type="text" value={username} id='username' 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Enter your Username' />
        </div>

        <div className="input-group">
          <label htmlFor="email">E-mail: </label>
          <input type="email" value={email} id='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your E-mail' />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {/* <span>reset password</span> */}

        <button className='login-btn' disabled={isLoading}>
          {isLoading ? 'Creating account...' : 'Register'}
        </button>

        <p className="signup-link">
          Already have an account? <a href="/login">Login</a>
        </p>

      </form>
    </div>
  )
}

export default Signup