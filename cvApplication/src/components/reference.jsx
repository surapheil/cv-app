import Button from '../assets/Button';
import '../styles/contact.css';
import '../styles/Experiance.css'
function Reference({toFinalizeClick,addReferenceClick}){
    return(
        <div className="reference contact">
            <div className="contactHeaders">
                <h1 className="contactTitle referenceHeader">Any references?</h1>
                <p className="contactSubtitle refereceSubtitle">We recommend NOT including references, unless they were specifically requested in the job ad.</p>
            </div>
            <form className="referenceForm contactForm">
                <div className="refBtn experianceButton">
                    <Button className="backButton" type="button" onClick={addReferenceClick} value="Yes"/>
                    <Button className="backButton" type="button" onClick={toFinalizeClick} value="Upon Request" />
                    <Button className="backButton" type="button" onClick={toFinalizeClick} value="No"/>
                </div>
            </form>   
            <div className="skipBtn">
                <a href="#" className="skipAnchor" onClick={toFinalizeClick}>Skip adding Reference</a>
            </div>         
       </div>   
)
}

export default Reference;