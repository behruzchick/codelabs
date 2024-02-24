import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import city from '../../../img/city.jpg'
import Header from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
const Dashboard = () => {
  const navigate = useNavigate();
  const number = "+998 99 812 01 58"
  const [text,setText] = useState("Call");
  const handleCopy = () => {
      navigator.clipboard.writeText(number)
      setText("Number copied to clipboard!")
  }
  return (
    <div style={{width:"100%",height:"100vh",zIndex:"-1",display:"flex",alignItems:'center',flexDirection:'column'}}>
        {/* <Header/> */}
        <img src={city} alt="city-img" style={{position:'absolute',zIndex:"-30",width:'100%',height:"100vh",objectFit:"cover"}} />
       <Container className='dashboard-container' style={{height:"100vh",display:"flex",alignItems:'start',justifyContent:"center",flexDirection:"column"}}>
            <h1 className='dashboard-title' style={{color:"white"}}>Build your dreams <br /> with us</h1>
            <div className="btns_group d-flex gap-3 mt-4">
                <Button variant='success'  style={{width:"200px",height:"60px",color:"white"}} onClick={() => navigate('/portfolio')}>
                    Portfolio
                </Button>
                <Button variant='secondary' style={{width:"180px",height:"60px",color:'white'}} onClick={handleCopy}>
                    {text}
                </Button>
            </div>
       </Container>
    </div>
  )
}

export default Dashboard