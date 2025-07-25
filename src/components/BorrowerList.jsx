import React, { useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the path as needed
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function BorrowerList() {

const [borrowers, setBorrowers] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    const fetchBorrowers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'borrowers'));
        const borrowerData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBorrowers(borrowerData);
      } catch (error) {
        console.error("Error fetching borrowers:", error);
      }
    };

    fetchBorrowers();
  }, []); 

   const handleCrate = () => {
    return navigate('/add-borrower');
  }


  return (
   <>
   <div className="container mt-4">
    <div className='d-flex justify-content-between align-items-center mb-4'>
      <h1 className="text-center mb-4">Borrower List</h1>
      <button className="btn btn-primary mb-3" onClick={handleCrate}>
        Add Borrower  
        </button>
    </div>
      {borrowers.length === 0 ? (
        <div className="alert alert-info">No Borrowers. Please add new.</div>
      ) : (
        <ul className="list-group">
          {borrowers.map(borrower => (
             <Link to={`/borrower/${borrower.id}`} className="text-decoration-none my-1 borrower-card">
            <li key={borrower.id} className=" d-flex justify-content-between align-items-center">
             <div>
              {borrower.name}
             </div>
             {borrower.createdAt &&(
                <span className='date d-none'>
                  Date: {new Date(borrower.createdAt.seconds * 1000).toLocaleString()}
                </span>
             )}
             
                
              
              <span className="amount fw-bold rounded-pill">{borrower.amount} Rs</span>
            </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
    {/* <button onClick={handleCrate} className="add-button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M12.208 5.29297V19.293"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.20801 12.293H19.208"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button> */}

   </> 
  )
}

export default BorrowerList