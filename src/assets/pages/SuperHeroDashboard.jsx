import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTrash } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../components/Sidebar'
import { Col, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { deleteComplaintApi, getAllComplaintApi } from '../services/allApi'
import { Link } from 'react-router-dom'


function SuperHeroDashboard() {
  const [deleteComplaintStatus,setDeleteComplaintStatus]=useState(false)
  const [searchKey, setSearchKey] = useState("")
  const [viewComplaints, setViewComplaints] = useState([])

  const getallComplaintsDetails = async () => {
    const result = await getAllComplaintApi(searchKey)
    setViewComplaints(result.data);
  }

  // console.log(viewComplaints);
  const handleDelete = async (id) => {
   
    const result = await deleteComplaintApi(id)
    setDeleteComplaintStatus(result);
    getallComplaintsDetails()

  }


  useEffect(() => {
    getallComplaintsDetails()
  }, [searchKey,deleteComplaintStatus])






  return (
    <>
      {localStorage.getItem('emailData' && 'passwordData') ?
        <div className='w-100 ' style={{  backgroundColor: '#a4dded ' }} >
          <Header />
          <hr className='w-75 m-auto mt-5' />
          <Row className='w-100 '>
            <Col sm={12} md={2}>
              <Sidebar />
            </Col>
            <Col sm={12} md={8} >
              <Row className='w-100'>
                <div className="row mt-3 w-100">
                  <div className="col-md-4"></div>
                  <div className="col-md-4 d-flex">
                    <input type="text" placeholder='TimeStamp' className='form-control mt-5 fs-5 ms-3 w-100' onChange={(e) => setSearchKey(e.target.value)} />
                    <FontAwesomeIcon icon={faMagnifyingGlass} flip='horizontal' style={{ marginTop: '60px', marginLeft: '-33px' }} className='text-secondary' />
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </Row>

              <Row className='w-100'>
                <div className=' container-fluid d-flex align-items-center jusify-content-center my-5 flex-column'>
                  <h3 className='text-danger'>Complaint List</h3>
                  {viewComplaints?.length > 0 ?
                    <Table striped bordered hover className=' shadow rounded text-center  mt-3 p-4 '>
                      <thead >
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact Number</th>
                          <th>Date</th>
                          <th>Issue</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {viewComplaints.map((item) => (<tr>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.timeStamp}</td>
                          <td>{item.issue}</td>
                          <td><div className='d-flex align-items-center jusify-content-center '>
                            {/* <button className='btn btn-success me-4'> <Link to={`/approvelist/${item?._id}`} style={{ textDecoration: 'none', color: 'white' }}>  Approve</Link>
                            </button> */}
                            <button className='btn btn-danger' onClick={() => handleDelete(item?._id)} >Reject</button>
                          </div>
                          </td>
                        </tr>))
                        }
                      </tbody>
                    </Table>
                    : <p className='text-info fs-3 mt-4 ms-5'>No Complaints  Registred</p>}
                </div>
              </Row>


            </Col>
            <Col sm={12} md={2}></Col>
          </Row>

        </div> : null}

    </>
  )
}

export default SuperHeroDashboard