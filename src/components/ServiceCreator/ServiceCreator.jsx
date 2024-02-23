import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import useCreateService from '../../hooks/useCreateService'
import './ServiceCreator.css'
const ServiceCreator = () => {
    const {systemName} = useParams();
    const {createService} = useCreateService();
    const [name,setName] = useState("")
    const [projectName,setProjectName] = useState("")
    const [projectType,setProjectType] = useState(systemName);
    const [description,setDescription] = useState("");
    const [number,setNumber] = useState("")
    const [success,setSuccess] = useState(false);
    const [error,setError] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        createService({name,projectName,projectType,description,number,setSuccess,setError})
    }

  return (
    <div className='bg-dark d-flex justify-content-center align-items-center creator-service-wrape' style={{width:"100%",paddingTop:"200px",height:'100vh'}}>
        <div className="col-2 creator-service-title">
            <h3 className='text-white'>Create your service</h3>
            <b className='text-secondary'>After sumbit this basic information , our responsive staff will contact you.</b>
        </div>
        <div className="col-6 bg-secondary p-5 rounded mx-5 form-creator-service" >
            <Form onSubmit={handleSumbit} className='form-creator'>
                <div className="d-flex bg-red gap-3" style={{flexWrap:"wrap",width:"100%"}}>
                    <Form.Control className='bg-secondary text-white' placeholder='Enter your company name' style={{width:"300px",height:"50px"}} onChange={(e) => setProjectName(e.target.value)}/>
                    <Form.Control className='bg-secondary text-white' placeholder='Enter your name' style={{width:"300px",height:"50px"}} onChange={(e) => setName(e.target.value)}/>
                    <Form.Control className='bg-secondary text-white' placeholder='Enter your phone number' type='text' style={{width:"300px",height:"50px"}} onChange={(e) => setNumber(e.target.value)}/>
                    <Form.Control className='bg-secondary text-white' disabled value={systemName} style={{width:"300px",height:"50px"}} />
                </div>
                <Form.Control className='bg-secondary my-4' placeholder='Project description' as={"textarea"}  onChange={(e) => setDescription(e.target.value)}/>
            </Form>
            <Button onClick={handleSumbit}>
                Sumbit
            </Button>
            {
                success ? (
                    <b className='text-success mx-5'>The form was sent successfully, our administrators will call you within 24 hours </b>
                ):
                null
            }
                        {
                error ? (
                    <b className='text-danger mx-5'>Error in sumbit</b>
                ):
                null
            }
        </div>
    </div>
  )
}

export default ServiceCreator