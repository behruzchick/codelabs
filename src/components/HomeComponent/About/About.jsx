import React, { useState } from 'react'
import './About.css'
import { Carousel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify'

const About = () => {
    const number = "+998 99 812 01 58"
    const [text, setText] = useState("Call");
    const handleCopy = () => {
        navigator.clipboard.writeText(number)
        setText("Number copied to clipboard!")
    }
    const navivate = useNavigate();
    return (
        <div style={{ display: "flex", alignItems: 'center', padding: "50px", justifyContent: "space-evenly" }} className='bg-dark about-wrape'>

            <div className="about-info">
                <div className="about-info-text">
                    <h1 style={{ color: "white" }}>ABOUT US</h1>
                    <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis consequuntur, iste saepe provident illum libero dicta ducimus optio sit minus veniam, dolor, voluptate nobis possimus maiores porro sunt quae et?</p>
                </div>
                <div className="btns_group d-flex gap-3 mt-4">
                    <Button variant='outline-success' style={{ width: "200px", height: "60px", color: "white" }} onClick={() => navivate('/portfolio')}>
                        Portfolio
                    </Button>
                    <Button onClick={handleCopy} variant='outline-secondary' style={{ width: "180px", height: "60px", color: "white" }}>
                        {text}
                    </Button>
                </div>
            </div>

            <Carousel className='about-carousel' style={{borderRadius: "30px" }}>
                <Carousel.Item>
                    <img style={{ borderRadius: "30px", width: '100%' }} className='carousel-img' src="https://www.shutterstock.com/image-photo/software-developers-discussing-about-source-600nw-2104693190.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>Hello world</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ borderRadius: "30px", width: '100%' } } className='carousel-img' src="https://www.shutterstock.com/image-photo/software-developers-discussing-about-source-600nw-2104693190.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>Hello world</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ borderRadius: "30px", width: '100%' }} className='carousel-img' src="https://www.shutterstock.com/image-photo/software-developers-discussing-about-source-600nw-2104693190.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>Hello world</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default About