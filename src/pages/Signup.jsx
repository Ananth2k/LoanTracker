import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

function Signup() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try{
        await createUserWithEmailAndPassword(auth,email, password);
        alert("signup successfull");
        navigate('/login'); // Redirect to login page after successful signup
        setLoading(false);
    }
    catch(error){
        console.log("Error from signup",error)
        alert("Error signing up, please try again later");  
    }
    setLoading(false);
}




return (
    <div className="container mt-5">
        <h1 className="mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="mx-auto" style={{maxWidth: '400px'}}>
            <div className="mb-3">
                <label className="form-label text-white">Email:</label>
                <input 
                    type="email" 
                    className="form-control"
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label className="form-label text-white">Password:</label>
                <input 
                    type="password" 
                    className="form-control"
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
             <button onClick={()=>navigate('/login')} type="submit" className="btn mt-2 btn-warning w-100" >
               Login
            </button>
           
        </form>
    </div>
)
}

export default Signup