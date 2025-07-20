import React, { useState } from 'react';
import { db } from '../firebase'; // adjust the path if needed
import { addDoc, collection } from "firebase/firestore";
import { Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


function AddBorrower() {
  const [borrowerName, setBorrowerName] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
const navigate = useNavigate();
  const borrowerHandler = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "borrowers"), {
        name: borrowerName,
        amount: parseInt(borrowAmount),
        createdAt: Timestamp.now()
      });
      alert("Borrower added successfully");

      setBorrowerName('');
      setBorrowAmount('');
       navigate('/');
    }
    catch (error) {
      console.log("error adding Borrower", error);
      alert("Error storing data");
    }
  };

 

  return (
    <div className="container mt-4" style={{ maxWidth: 500 }}>
      <div className="card">
        <div className="card-header">
          <h4>Add Borrower</h4>
        </div>
        <div className="card-body">
          <form onSubmit={borrowerHandler}>
            <div className="mb-3">
              <label className="form-label">Borrower Name</label>
              <input
                className="form-control"
                placeholder="Enter Borrower"
                type="text"
                value={borrowerName}
                onChange={(e) => setBorrowerName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Borrower Amount</label>
              <input
                className="form-control"
                placeholder="Enter Amount"
                type="number"
                value={borrowAmount}
                onChange={(e) => setBorrowAmount(e.target.value)}
                required
                min="0"
              />
            </div>
            <button className="btn btn-secondary w-100" onClick={() => navigate('/')}>Back to List</button>

            <button type="submit" className="btn btn-primary w-100">Create</button>
          </form>
        </div>
      </div>


    </div>
  );
}

export default AddBorrower;
