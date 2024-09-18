import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav } from 'react-bootstrap'



function Sidebar() {
  return (
    <>
    
   <div className='sidebar w-100' style={{backgroundColor:'#a4dded'}}>
         <Nav defaultActiveKey='superherodash' className="me-auto flex-column text-start fs-5 " >
        <Nav.Link href="/superherodash" style={{textDecoration:'none',color:'#000026'}}><FontAwesomeIcon icon={faTableCellsLarge } style={{color: "#000026",}} className='me-2 mt-5'/>Dashboard</Nav.Link>
        

          </Nav>
    </div>
    </>
  )
}

export default Sidebar