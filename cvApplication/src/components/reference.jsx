import Button from '../assets/Button';
import '../styles/contact.css';
import '../styles/Experiance.css'
import { useState } from 'react';
function Reference({addReferenceClick,toFinilizeClick}){
    return(
        <div className="reference contact">
            <div className="contactHeaders">
                <h1 className="contactTitle referenceHeader">Any references?</h1>
                <p className="contactSubtitle refereceSubtitle">We recommend NOT including references, unless they were specifically requested in the job ad.</p>
            </div>
            <form className="referenceForm contactForm">
                <div className="refBtn experianceButton">
                    <Button className="backButton" type="button" onClick={addReferenceClick} value="Yes"/>
                    <Button className="backButton" type="button" value="Upon Request" onClick={toFinilizeClick}/>
                    <Button className="backButton" type="button" value="No" onClick={toFinilizeClick}/>
                </div>
            </form>            
        </div>   
)
}

export default Reference;