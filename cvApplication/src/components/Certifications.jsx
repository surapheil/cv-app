import { useState } from "react";
import Input from "../assets/Input";
import Button from "../assets/Button";  
import '../styles/contact.css';

function Certifications(){

    return(
        <div className="certefication contact">
            <div className="certrificateHeader contactHeader">
                <h1 className="contactTitle">Certifications and licenses</h1>
                <p className="contactSubtitle">If you have certain certifications or licenses, this is where you should list them.</p>
            </div>
            <div className="certificationName fullName">
                <Input name="Licence or Certification #1" value={certificate} type="text"/>
                <Input name= "licence orCertification #2" value = {certificate} type="text"/>
            </div>


        </div>
    )
}


export default Certifications;