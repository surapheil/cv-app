import { useEffect, useState } from "react";

function MonthInput({name}){
        let [isValid,setIsValid] = useState(false);
        let [isFocused,setIsFocused] = useState(false);

        const handleFocus = ()=>{setIsFocused(true)};
        const handleBlur = () => {
            setIsFocused(false);
            const select = document.getElementById('monthSelect');
            if(select.value !== ''){
                setIsValid(true);
            }
            else{
                setIsValid(false);
            }

        }

        useEffect(()=>{
            setIsValid(false);
            setIsFocused(false);
        },[]);

    return(
        <div className="monthSelection">
            <select 
                className="months selection" 
                id="monthSelect"
                onFocus={handleFocus}
                onBlur={handleBlur} 
                required
            >
                <option value=""></option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>
            <span className={`monthsPlaceholder ${ isFocused || isValid ? 'transformed': '' }`}>{name}</span>
        </div>
    )
}

export default MonthInput;