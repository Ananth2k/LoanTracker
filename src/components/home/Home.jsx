import React from 'react'
import DetailsList from './DetailsList'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth'

function Home() {

const auth = getAuth();
const financier = auth.currentUser ? auth.currentUser.email : "Guest";

  return (
    <div className='home-container position-relative'>

        <div className='home-top container pt-5 pb-5'>
           <h2>Home</h2>
           <div className='d-flex align-items-center'>
            <img className="home-profile  me-3" src="/images/dummy-profile.png" alt="Dummy Profile" />
            <div className='ms-3'>
                <p>Hello</p>
                <h2>{financier}</h2>
            </div>
           </div>
        </div>
        <div className='home-bottom p-3'>
            <div className='p-2 container'>
                <ul className='ps-0 mb-0' >
 <Link to="/borrowers-list" className="text-decoration-none">
  <DetailsList/>
 </Link>
                   
                    <DetailsList/>
                    
                      <DetailsList/>
                    
                </ul>
            </div>
        </div>


    </div>
  )
}

export default Home