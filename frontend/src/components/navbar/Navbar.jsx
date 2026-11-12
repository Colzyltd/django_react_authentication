import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navigate = useNavigate()
    const { isAuthenticated, token, logout } = useAuth()

    const handleLogout = async () => {
        try {
            // only needed if your backend has a logout endpoint (e.g. token blacklist)
            await axios.post('http://127.0.0.1:8000/api/logout/', {}, {
            headers: { Authorization: `Token ${token}` }, // use `Bearer` for JWT
            })
        } catch (err) {
            console.log(err.response?.data)
        } finally {
            logout()          // always clear local state, even if the request fails
            navigate('/login')
        }
    }


    return (
        <nav className="navbar">
            {/* Nav brand */}
            <a href="/" className="nav-brand">brand</a>
            
            {/* Nav menu */}
            <ul className={`nav-links ${open ? 'open' : ''}`}>
                <li>
                    <a href="#home" onClick={() => setOpen(false)}>home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => setOpen(false)}>about</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setOpen(false)}>contact</a>
                </li>
                <li>
                    <a href="#services" onClick={() => setOpen(false)}>services</a>
                </li>
            </ul>
            <div className="account">
                {isAuthenticated ? (
                <button className="logout" onClick={handleLogout}>LOGOUT</button>
                ) : (
                <Link to="/login" className="account-link">LOGIN</Link>
            )}
            </div>
            

            {/* Hamburger Menu */}
            <button 
                className={`nav-toggle ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label='Toggle navigation menu'>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </button>
        </nav>
  )
}

export default Navbar