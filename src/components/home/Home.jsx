import React from 'react'
import DetailsList from './DetailsList'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

function Home() {

const auth = getAuth();
const financierName = auth.currentUser ? auth.currentUser.email : "Guest";
const finacierProfile =  "/images/dummy-profile.png";

  return (
    <div className='home-container position-relative'>
        <div className='home-top container pt-5 pb-5'>
           <h2 className='fs-12 text-white'>Home</h2>
           <div className='d-flex align-items-center py-3'>
            
            <img className="home-profile  me-3" src={finacierProfile} alt="Dummy Profile" />
            <div className='ms-3'>
                <p className='fs-10 text-white'>Hello</p>
                <h2  className="text-truncate text-white" style={{ width: '200px' }}>{financierName}</h2>
            </div>
           </div>
        </div>
        <div className='home-bottom px-2'>
            <div className='px-1 container'>
                <ul className='ps-0 mb-0' >
                  <DetailsList/>                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home