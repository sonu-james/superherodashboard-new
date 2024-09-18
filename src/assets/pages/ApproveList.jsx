import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApproveComplaintApi } from '../services/allApi'


function ApproveList({props}) {
    const {id}=useParams()
    console.log(id);
    
    // const [approve,setApprove]=useState([])

    // const getApprove=async(e)=>{
    //     console.log(id);
    //      const result=await ApproveComplaintApi(id)
    //      console.log(result.data);
    //      setApprove(result.data)
    //     }
 
    //     useEffect(()=>{
    //      getApprove()
    //     },[])

    //     console.log(approve);
        
  return (
   <>
   <div>Approve</div>
   </>
  )
}

export default ApproveList