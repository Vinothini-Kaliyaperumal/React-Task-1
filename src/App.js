import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SimpleForm from './Components/form';
import DataTable from './Components/table';
// import SimpleForm from './Components/SimpleForm';
// import DataTable from './Components/DataTable';

function App() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Form</Link>
        <Link to="/table">Data Table</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SimpleForm  />} />
        <Route path="/table" element={<DataTable />} />
      </Routes>
    </Router>
  );
}

export default App;
