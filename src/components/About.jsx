import './About.css'


function About() {


    
    return (
        <div className='about-cont'>
            <div className='head1'>
                <h1>Access curated courses worth</h1>
                <h1>₹ <s>18,500</s> at just <span>₹ 99</span> per year!</h1>
            </div>
            <h2><img src="src/assets/book.svg" alt="icon-img" /> <span>100+</span> Job relevant courses</h2>
            <h2><img src="src/assets/clock1.svg" alt="icon-img" /> <span>20,000+</span> Hours of content</h2>
            <h2><img src="src/assets/live.svg" alt="icon-img" /> <span>Exclusive</span> webinar classes</h2>
            <h2><img src="src/assets/scholor.svg" alt="icon-img" /> Scholorship worth <span>₹ 94,500</span></h2>
            <h2><img src="src/assets/ads.svg" alt="icon-img" /> <span>Ad Free</span> learning experience</h2>
        </div>
    )
}

export default About;