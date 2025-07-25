import { Routes, Route } from 'react-router-dom';
import AddBorrower from './components/AddBorrower';
import BorrowerList from './components/BorrowerList';
import BorrowerProfile from './components/BorrowerProfile';
import Footer from './common/Footer';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borrowers-list" element={<BorrowerList />} />
        <Route path="/add-borrower" element={<AddBorrower />} />
        <Route path="/borrower/:id" element={<BorrowerProfile />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
