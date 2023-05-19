import './Navigation.css'


function Navigation(){



    return (
        <>
            <nav className="navbar" id="navbar">
                <div className='left'>
                    <img src="assets/EDYODA.svg" alt="EdYoda Logo" />
                    <a href="#courses" className="nav-item">
                        <select name="courses" id="courses" style={{border:"none", fontSize:"1rem"}}>
                            <option value="courses">Courses</option>
                        </select>
                    </a>

                    <a href="#programs" className="nav-item">
                        <select name="programs" id="programs" style={{border:"none", fontSize:"1rem"}}>
                            <option value="programs">Programs</option>
                        </select>
                    </a>
                </div>
                
                <div className='right'>
                    <div className="search">
                        <input type="text" placeholder="Search..."/>
                        <button className="search-button"></button>
                    </div>
                    <a href="#log-in" className="nav-item">Log in</a>
                    <button id="join">JOIN NOW</button>
                </div>
            </nav>
        </>
    )
}

export default Navigation;