import React, { useState } from 'react'
import './signup.css'

const Signup = () => {
  const [ name, setName ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
   
      // Process API CALL here

      // clear input fields
      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
  }

  return (
    <div className='login-container'>
      <form action="" className='login-form' onSubmit={handleSubmit}>
      <h1 className="header">Sign Up</h1>

        { error && <p className='error-message'>{error}</p> }

        <div className="input-group">
          <label htmlFor="name">Name: </label>
          <input 
            type="text" value={name} id='name' 
            onChange={(e) => setName(e.target.value)} 
            placeholder='Enter Full Name' />
        </div>

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
        {/* <span>reset password</span> */}

        <button className='login-btn'>Register</button>

        <p className="signup-link">
          Already have an account? <a href="/login">Login</a>
        </p>

      </form>
    </div>
  )
}

export default Signup