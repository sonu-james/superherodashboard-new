import { faMask } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
  const navigate=useNavigate()
  const [loginDetails,setLoginDetails]=useState({
    email:"",
    password:""

  })
  // console.log(loginDetails);

  const handleLogin =async()=>{
    const {email,password}=loginDetails
    if(!email ||!password){
      toast.info('Plz fill the form completely')
    }
    else if(email==='hero@gmail.com' && password==='hero123'){
      toast.success('login Successfully')
      localStorage.setItem("emailData","hero@gmail.com")
      localStorage.setItem("passwordData","hero123")

setTimeout(()=>{
  navigate('/superherodash')
},3000)
      
     
    }
    else{
      toast.error('Invalid Username and Password')
     
    }
  }
  
  return (
   <>

<div className=' container-fluid d-flex align-items-center justify-content-center login ' style={{ height: '100vh'}}>
      <div className='container  p-3  rounded shadow loginmain' >
        <Row>
          <Col sm={12} md={6} className='d-flex align-items-center justify-content-center '>
            <img src="http://clipart-library.com/img/1713299.png" alt="no image" className='w-100' />

          </Col>
          <Col sm={12} md={6} className='d-flex align-items-center justify-content-center text-center flex-column text-light'>
            <h2>
            <FontAwesomeIcon icon={faMask} beat style={{color: "#ff0019",}} className='me-3 mt-5' />Super Hero</h2>
            
              <h5 style={{color: "#ff0019"}}>Sign in to your Account</h5>
            <form className=' w-75 align-items-center justify-content-center rounded p-4'  >
             
              <div className='mb-3'>
                <input type="email" placeholder='Email' className='form-control w-100' style={{ height: "40px" }} onChange={(e)=>setLoginDetails({...loginDetails,email:e.target.value})} />
              </div>
              <div className='mb-3'>
                <input type="password" placeholder='Password' className='form-control w-100' style={{ height: "40px" }} onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})}  />
              </div>

              <div className='mt-4'>
                  <div>
                    <button type="button" className='btn btn-danger fs-5  w-100 mb-2 ' onClick={handleLogin}>Login</button>
                    
                  </div>
              </div>
            </form>

          </Col>
        </Row>
      </div>
     
    </div>
    <ToastContainer position='top-center' theme='colored' />
   </>
  )
}

export default Login