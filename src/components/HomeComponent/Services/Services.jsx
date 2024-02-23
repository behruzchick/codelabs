import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import LanguageIcon from '@mui/icons-material/Language';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Services = () => {

    const navigate = useNavigate();
    const systems = {tg:"Telegram Bot",wb:"Web site", app:"Mobile app", ui:"UI&UX"};

  return (
    <div className='services bg-dark' style={{width:"100%",display:'flex',alignItems:'center',flexDirection:"column",padding:"30px"}}>
        <header className="services-header p-0 m-5" style={{width:"87%",display:"flex",alignItems:'start',justifyContent:"start"}}>
            <h1 style={{color:"white"}}>Services</h1>
        </header>
        <div className="services_wrape gap-3" style={{display:"flex",flexWrap:"wrap",alignItems:'center',justifyContent:'center',width:"87%"}}>
            <div className="service shadow-sm rounded" style={{width:"600px",background:'#282E32',padding:"30px",cursor:"pointer"}} onClick={() => navigate(`/service/systems/${systems.tg}`)}>
                <TelegramIcon className='mb-3' style={{color:"#20ADFF", cursor:"pointer"}}/>
                <h5 style={{color:"white"}}>Telegram bots</h5>
            </div>
            <div className="service shadow-sm rounded" style={{width:"600px",background:'#282E32',padding:"30px",cursor:"pointer"}} onClick={() => navigate(`/service/systems/${systems.wb}`)}>
                <LanguageIcon className='mb-3' style={{color:"#20ADFF",cursor:"pointer"}}/>
                <h5 style={{color:"white"}}>Web sites</h5>
            </div>
            <div className="service shadow-sm rounded" style={{width:"600px",background:'#282E32',padding:"30px",cursor:"pointer"}} onClick={() => navigate(`/service/systems/${systems.app}`)}>
                <AppShortcutIcon className='mb-3' style={{color:"#20ADFF",cursor:"pointer"}}/>
                <h5 style={{color:"white"}}>Mobile apps</h5>
            </div>
            <div className="service shadow-sm rounded" style={{width:"600px",background:'#282E32',padding:"30px",cursor:"pointer"}}onClick={() => navigate(`/service/systems/${systems.ui}`)}>
                <DesignServicesIcon className='mb-3' style={{color:"#20ADFF",cursor:"pointer"}}/>
                <h5 style={{color:"white"}}>UI&UX</h5>
            </div>
        </div>
    </div>
  )
}

export default Services