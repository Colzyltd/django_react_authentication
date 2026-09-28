import React, { useState } from 'react'
import './login.css'

const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Invalid credentials, try again.');
      return;
    }
      // Process API CALL here

      // clear input fields
      setEmail('');
      setPassword('');
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

        <button className='login-btn'>Login</button>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>

      </form>
    </div>
  )
}

export default Login