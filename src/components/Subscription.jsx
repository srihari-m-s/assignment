import React from 'react';
import './Subscription.css'


function Subscription(props){

    let final = Math.round(props.price/props.months);

    const changeChecked = () => {
        const elem = document.getElementById(final);
        
            elem.checked = true;
        
    }
    

    return(
        <>
            <div className="sub-plan" onClick={() => { if(props.dis == false){props.handleClick(props.price); changeChecked()} else {props.handleClick(18500); changeChecked()}}}  style={props.style}>
                <div className='radio-input' >
                    <input type="radio" name="price" id={final} />
                    <p>{props.months} Months Subscription</p>
                </div>
                
                <div className='offer'>
                    <p>Total <span class="big-font">₹{props.price}</span></p>
                    <p>₹{final} <span class="grey">/mo</span></p>
                </div>
            </div>
        </>
    )
}

export default Subscription;