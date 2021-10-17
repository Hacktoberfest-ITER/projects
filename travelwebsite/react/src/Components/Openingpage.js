import React from 'react'
import './Openingpage.css'
import vid from '../video/video.mp4'
export default function Openingpage() {
    return (
        <>
        <video autoPlay muted loop id="myVideo">
            <source src={vid} type="video/mp4"/>
        </video>
        <div className="bg">
            <h1>ADVENTURE AWAITS</h1>
            <h2>What are you waiting for?</h2>
            <div className="buts">
                <button className="get">GET STARTED</button>
                <button className="trailer">WATCH TRAILER &#8227;</button>
            </div>
        </div>
        </>
    )
}