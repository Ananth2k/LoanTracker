import { Routes, Route } from 'react-router-dom';
import AddBorrower from './components/AddBorrower';
import BorrowerList from './components/BorrowerList';
import BorrowerProfile from './components/BorrowerProfile';
import Footer from './common/Footer';
import Home from './components/home/Home';
import Signup from './pages/signUp';
import Login from './pages/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

function App() {
  const auth = getAuth();
  const [financier, setFinancier] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFinancier(user);
    });

    return () => unsubscribe(); // Cleanup
  }, [auth]);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        {financier && (
          <>
            <Route path="/borrowers-list" element={<BorrowerList />} />
            <Route path="/add-borrower" element={<AddBorrower />} />
            <Route path="/borrower/:id" element={<BorrowerProfile />} />
          </>
        )}

        {/* Optional: redirect unauthenticated users */}
        {!financier && (
          <>
            <Route path="/borrowers-list" element={<Login />} />
            <Route path="/add-borrower" element={<Login />} />
            <Route path="/borrower/:id" element={<Login />} />
          </>
        )}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
