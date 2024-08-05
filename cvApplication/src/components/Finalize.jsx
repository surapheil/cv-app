import '../styles/contact.css';
import '../styles/Education.css';
import '../styles/Experiance.css';
import Button from "../assets/Button";
import '../styles/yearAndMonthSelection.css';

function Finalize(){
    return(
        <div className="finalize contact">
            <div className='contactHeaders'>
                <h1 className='contactTitle'> Want to add any additional sections? </h1>
            </div>
            <form className="contactForm">
                <div className='experianceCheckBox'>
                    <input  type="checkbox"/>
                    <label >Languages</label>
                </div>
                <div className='experianceCheckBox'>
                    <input  type="checkbox"/>
                    <label >Volunteer Experience</label>
                </div>
                <div className='experianceCheckBox'>
                    <input  type="checkbox"/>
                    <label >Awards</label>
                </div>
                <div className='experianceCheckBox'>
                    <input  type="checkbox"/>
                    <label >Publications</label>
                </div>
                <div className='experianceButton'>
                    <Button name ="Back" value = "Back" className="backButton" type="submit"/>
                    <Button name="Continue" value="Continue" className="button" type="Submit"/>
                </div>
                
            </form>           
        </div>
    )
}
export default Finalize;