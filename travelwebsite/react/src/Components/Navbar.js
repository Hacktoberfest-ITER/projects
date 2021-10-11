import React from 'react'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav>
                <ul className="flex">
                    <a className="travel" href="/">TRVL</a>
                    <div className="menu1">
                        <a href="/" className="menu">HOME</a>
                        <a href="/" className="menu">SERVICE</a>
                        <a href="/" className="menu">CONTACT</a>
                    </div>
                    <button className="signup">SIGN UP</button>
                </ul>
            </nav>
        </div>
    )
}
