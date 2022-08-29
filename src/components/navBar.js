import React from 'react'
import '../style/nav.css'
import Scroll from 'react-scroll'
const NavBar = () => {
    let Link = Scroll.Link;
    return (
        <nav className="navbar bgn-color navbar-expand-lg " >
            <div className="container-fluid">
                {/* <img className='total' src={require('../image/nav-logo1.png')} alt='ss' id='logo-pic' /> */}
                <span className='text-light font-weight-bold pointer'>North Coin</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link active text-light pointer" to='/' aria-current="page" >خانه</span>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light pointer pointer" to="list"
                                spy={true}
                                smooth={true}
                                duration={500}  >لیست خرید</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-light pointer" to="box"
                                spy={true}
                                smooth={true}
                                duration={500}  >باکس تبدیل</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar