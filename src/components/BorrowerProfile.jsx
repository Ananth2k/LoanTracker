import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

function BorrowerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [borrower, setBorrower] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedAmount, setEditedAmount] = useState('');

  useEffect(() => {
    const fetchBorrower = async () => {
      const docRef = doc(db, 'borrowers', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBorrower({ id: docSnap.id, ...docSnap.data() });
        setEditedName(docSnap.data().name);
        setEditedAmount(docSnap.data().amount);
      } else {
        alert('Borrower not found');
        navigate('/');
      }
    };
    fetchBorrower();
  }, [id, navigate]);

  const handleSave = async () => {
    await updateDoc(doc(db, 'borrowers', id), {
      name: editedName,
      amount: parseInt(editedAmount),
    });
    setBorrower({ ...borrower, name: editedName, amount: parseInt(editedAmount) });
    setEditMode(false);
    alert('Borrower updated!');
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this borrower?');
    if (confirmDelete) {
      await deleteDoc(doc(db, 'borrowers', id));
      alert('Borrower deleted!');
      navigate('/');
    }
  };

  if (!borrower) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Borrower Profile</h2>

          {!editMode ? (
            <>
              <p className="card-text"><strong>Name:</strong> {borrower.name}</p>
              <p className="card-text"><strong>Amount:</strong> {borrower.amount} Rs</p>
              <button className="btn btn-warning me-2" onClick={() => setEditMode(true)}>Edit</button>
              <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </>
          ) : (
            <>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Amount (Rs):</label>
                <input type="number" className="form-control" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
              </div>
              <button className="btn btn-success me-2" onClick={handleSave}>Save</button>
              <button className="btn btn-secondary" onClick={() => setEditMode(false)}>Cancel</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BorrowerProfile;
