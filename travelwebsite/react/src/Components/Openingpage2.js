import React from 'react'
import './Openingpage2.css'
import island from '../Images/island.png'
import waterfall from '../Images/waterfall.png'
import sail from '../Images/sail.png'
import football from '../Images/football.png'
import desert from '../Images/desert.png'
export default function Openingpage2() {
    return (
        <div className="Openingpage2">
            <h3>Check out those EPIC destinations!</h3>
            <div className="flex1">
                <div className="box1">
                    <img src={waterfall} alt="" />
                    <p>Explore the hidden waterfall deep inside Amazon Jungle.</p>
                </div>
                <div className="box1">
                    <img src={island} alt="" />
                    <p>Travel through the islands of Bali in Private Cruise.</p>
                </div>
            </div>
            <div className="flex2">
                <div className="box2">
                    <img src={sail} alt="" />
                    <p>Set Sail in the Antalantic Ocean visiting Unchatred Waters.</p>
                </div>
                <div className="box2">
                    <img src={football} alt="" />
                    <p>Experience Football on Top of the Himiliyan Mountain.</p>
                </div>
                <div className="box2">
                    <img src={desert} alt="" />
                    <p>Ride through the Sahara Desert with guided camel tour.</p>
                </div> 
            </div>
        </div>
    )
}
