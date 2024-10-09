import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SimpleForm from './Components/form';
import DataTable from './Components/table';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <div style={styles.nav}>
        <Link to="/" style={styles.navLink}>form</Link>
        <Link to="/table" style={styles.navLink}>table</Link>
      </div>
      <Routes>
        <Route path="/" element={<SimpleForm />} />
        <Route path="/table" element={<DataTable />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    gap: '15px',
  },
  navLink: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  }
};

export default App;
