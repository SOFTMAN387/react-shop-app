import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (<>
        <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <h2 className='text-primary fw-bold mt-5'>
            About Us
        </h2>
        <p lorem>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam dolorem voluptatibus, velit hic distinctio iste repellendus eligendi recusandae cumque. Sint delectus odit harum quos earum cum expedita numquam deleniti.
            Sint delectus odit harum quos earum cum expedita numquam deleniti.
            Sint delectus odit harum quos earum cum expedita numquam deleniti.
            Sint delectus odit harum quos earum cum expedita numquam deleniti.
        </p>
        <Link to="/contact" className="btn btn-outline-primary">Contact Us</Link>

        </div>
        <div className='col-md-6 d-flex justify-content-center'>
        <img src="/images/i-phone/about.png" style={{height:'400px;',width:'500px'}} alt="about_us" />
            
        </div>

        </div>

        </div>
    </>
    )
}

export default AboutUs;