import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';


function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setData(storedData);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Data Table</h1>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((entry, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.td}>{entry.name}</td>
                <td style={styles.td}>{entry.email}</td>
                <td style={styles.td}>{entry.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={styles.emptyRow}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
    fontWeight: '600',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  headerRow: {
    background: 'linear-gradient(to right, #4a4a4a, #7d7d7d)', // Dark gray to light gray gradient for header
    color: '#ffffff',
  },
  th: {
    padding: '15px',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '16px',
  },
  td: {
    padding: '15px',
    border: '1px solid #dee2e6',
    fontSize: '14px',
    color: '#555',
  },
  evenRow: {
    backgroundColor: '#f5f5f5', // Light gray for even rows
  },
  oddRow: {
    backgroundColor: '#ffffff', // White for odd rows
  },
  emptyRow: {
    textAlign: 'center',
    padding: '20px',
    color: '#999',
    fontStyle: 'italic',
  },
};

export default DataTable;





