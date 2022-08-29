import React from 'react'
import '../style/baner.css'
const Banner = () => {
    return (
        <div className="container-fluid b-color text-center  ">
            <div className="row h-100 align-items-center ">
                <div className="col-6">
                    <img className='size' src={require('../image/nav-logo1.png')} alt="ss" />
                </div>
                <div className="col-6 ">
                    <h3 className='text-light'>تجربه بهترین خرید</h3>
                    <p className='text-light'>خرید تمامی ارز های دیجیتال موجود در بازار </p>
                </div>
            </div>
        </div>

    )
}
export default Banner