import { Routes, Route } from 'react-router-dom';
import AddBorrower from './components/AddBorrower';
import BorrowerList from './components/BorrowerList';
import BorrowerProfile from './components/BorrowerProfile';
import Footer from './common/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BorrowerList />} />
        <Route path="/add-borrower" element={<AddBorrower />} />
        <Route path="/borrower/:id" element={<BorrowerProfile />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
