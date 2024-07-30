import { useState } from "react";

function Summary(){
     const [summary,setSummary] = useState('');

     return(
        <div className="summaryContary contact">
            <div className="summaryHeader contactHeader">
                <h1 className="Title contactTitle">Professional Summary</h1>
                <p className="subtitle contactSubtitle">This section tells, “Here's who I am, and here's what I can do for your company”.</p>
            </div>
        </div>
     )
}