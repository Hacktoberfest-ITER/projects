import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <nav>
                <ul className="flex">
                    <Link className="travel" to="/">TRVL</Link>
                    <div className="menu1">
                        <Link to="/" className="menu">HOME</Link>
                        <Link to="Service.js" className="menu">SERVICE</Link>
                        <Link to="Contact.js" className="menu">CONTACT</Link>
                    </div>
                    <button className="signup">SIGN UP</button>
                </ul>
            </nav>
        </div>
    )
}
