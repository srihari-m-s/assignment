import './Form.css'
import Subscription from './Subscription';
import { useState } from 'react';


function Form(){

    const [finalPrice, setFinalPrice] = useState(18500);

    const styles = {backgroundColor:"#999", color:"#666"};
    
    const handleClick = (final) => {
        setFinalPrice(final);
    }

    const numberFormat = new Intl.NumberFormat('en-US');

    return (
        <div className='form-cont'>
            <form className='price-form' id='price-form'>

                <div className='progress-bar'>
                    <div className="select-button">
                        <button className="option" id="sign-in">1</button>
                        <label htmlFor="sign-in">Sign in</label>
                    </div>
                    <div className="select-button">
                        <button className="option" id="subscribe">2</button>
                        <label htmlFor="subscribe">Subscribe</label>
                    </div>
                </div>

                <h2 className="message">Select your subscription plan</h2>

                <Subscription months={12} price={99} dis={true} handleClick={handleClick} style={styles} />
                <Subscription months={12} price={179} dis={false} handleClick={handleClick} style={{borderColor: "#47ba68"}} />
                <Subscription months={6} price={149} dis={false} handleClick={handleClick}/>
                <Subscription months={3} price={99} dis={false} handleClick={handleClick}/>
                <hr />

                <div className='fee'>
                    <h3>Subscription Fee</h3>
                    <h3>₹ 18,500</h3>
                </div>

                <div className='discount red'>
                    <div className='disc-amount'>
                        <h3 className='red'>Limited time offer</h3>
                        <h3 className='black'>- ₹ {numberFormat.format(18500 - finalPrice)}</h3>
                    </div>

                    <div className='expire'>
                        <img src="assets/clock2.svg" alt="clock icon" className='clock2'/>
                        <h3 className='red'>Offer valid till 25th March 2023</h3>
                    </div>
                </div>

                <div className='total'>
                    <h3><b>Total</b> (Incl. of 18% GST)</h3>
                    <h2>₹ {numberFormat.format(finalPrice)}</h2>
                </div>

                <div className='sub-buttons-div'>
                    <button className="cancel" id="cancel">CANCEL</button>
                    <button type="submit" className="pay" id="pay">PROCEED TO PAY</button>
                </div>

                <div className='razor'>
                    <img src="src/assets/razorpay-icon.svg" alt="RazorPay logo"/>   
                </div>
                  

            </form>
        </div>
    )
}

export default Form;