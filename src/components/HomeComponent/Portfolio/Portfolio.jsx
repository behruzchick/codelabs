import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import projects from '../../../Projects'
import './Portfolio.css'
const Portfolio = () => {
    const navigate = useNavigate();
    const [projec,setProjec] = useState(projects);
    // const [type,setType] = useState("");

    const handleChange = (type) => {
        console.log(type);
        const filter = projects.filter((proj) => proj.type === type)
        console.log(filter);
        setProjec(filter)
    }

    return (
        <div className='bg-black portfolio_wrape' style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "10px",paddingTop:"150px"}}>
            <header className="porfolio-header d-flex" style={{ alignItems: "center", justifyContent: "space-between", width: "87%", height: "100px" }}>
                <h1 style={{ color: "white" }}>Portfolio</h1>
                <nav className='d-flex gap-3 portfolio-header-nav'>
                <Button variant='outline-secondary' onClick={()=> setProjec(projects)}>
                        All
                </Button>
                    <Button variant='outline-secondary' onClick={()=> handleChange("Web site")}>
                        Web sites
                    </Button>
                    <Button variant='outline-secondary' onClick={()=> handleChange("Telegram bot")}>
                        Telegram bots
                    </Button>
                    <Button variant='outline-secondary' onClick={()=> handleChange("Mobile app")}>
                        Mobile apps
                    </Button>
                </nav>
            </header>
            <div className="projects_wrape" style={{ display: "flex", flexWrap: "wrap", width: '87%', justifyContent: "center", alignItems: "start",paddingTop:"20px",paddingBottom:"50px" }}>
                {
                        
                    projec.map((item) => {
                        return (
                            <>
                                <Link to={item.link} target='_blank' className="project">
                                    <img width={'100%'} height={"200px"} src={item.img} alt="" style={{ borderRadius: "10px" }} />
                                    <div className="project_info" style={{ position: "absolute", top: "10px ", left: "30px" }}>
                                        <h4 style={{ color: "white" }}>{item.title}</h4>
                                        <b style={{ color: "gray" }}>{item.type}</b>
                                    </div>
                                </Link>

                            </>
                        )
                    })
                }
            </div>
            <div className="wiew_all_project_btn" style={{margin:"50px"}}>
                <Button variant='outline-success' style={{ marginTop: "30px" }} onClick={() => navigate('/portfolio')}>View all projects</Button>
            </div>
        </div>
    )
}

export default Portfolio