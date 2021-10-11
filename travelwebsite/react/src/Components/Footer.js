import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="foot">
           <p>Join the Adventure newsletter to recieve our best vacation deals.</p>
           <p>You can unsubscribe any time.</p>
           <label htmlFor="mail">
               <input type="text" name="mail" id="mail" placeholder="  Your Email"/><button>Subscribe</button>
           </label>
           <table>
               <thead>
                   <tr>
                        <th>About Us</th>
                        <th>Contact Us</th>
                        <th>Videos</th>
                        <th>Social Media</th>
                    </tr>
               </thead>
               <tbody>
                <tr>
                   <td>How it works</td>
                   <td>Contact</td>
                   <td>Submit Videos</td>
                   <td>Instagram</td>
                </tr>
               </tbody>
               <tbody>
                <tr>
                   <td>Testimonials</td>
                   <td>Support</td>
                   <td>Ambassadors</td>
                   <td>Facebook</td>
                </tr>
               </tbody>
               <tbody>
                <tr>
                   <td>Carrers</td>
                   <td>Destinations</td>
                   <td>Agency</td>
                   <td>Youtube</td>
                </tr>
               </tbody>
               <tbody>
                <tr>
                   <td>Investors</td>
                   <td>Sponshorships</td>
                   <td>Influencer</td>
                   <td>Twitter</td>
                </tr>
               </tbody>
           </table>
        </div>
    )
}