import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    // const navigate = useNavigate();
  return (
    <footer className='bg-black' style={{width:"100%",padding:"15px",display:"flex", alignItems:"center",justifyContent:"center"}}>
        <div className="contact-block d-flex gap-5" style={{width:"87%",display:"flex", alignItems:"center",justifyContent:"space-evenly"}}>
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}>codelabs.uz</Link>
        <div className="links d-flex gap-3">
            <Link to={'https://www.instagram.com/bkhdrvch_/'} target='_blank'>      
              <InstagramIcon style={{color:"gray",cursor:"pointer"}}/>
            </Link>
            <Link to={'https://t.me/zuhriddinov_a'} target='_blank'>
                <TelegramIcon style={{color:"gray",cursor:"pointer"}} />
            </Link>
            <div className="tel">
                <PhoneIcon style={{color:"gray",cursor:"pointer"}}/>
                 <span className='footer-text' style={{color:"white"}}>  +998 99 812 01 58</span>
            </div>
            <div className="email">
                <AlternateEmailIcon style={{color:"gray",cursor:"pointer"}}/>
                <span className='footer-text' style={{color:"white"}}>  abdulaziz@gmail.com</span>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer