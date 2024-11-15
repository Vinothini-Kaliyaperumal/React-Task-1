import React, { useState } from 'react';
// import './form.css'

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedData = data.map((entry, index) =>
        index === editIndex ? formData : entry
      );
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, formData]);
    }
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          style={styles.input}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Write your message"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>
          {editIndex !== null ? 'Update' : 'Submit'}
        </button>
      </form>

      <h2 style={styles.tableTitle}>Data Table</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Message</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((entry, index) => (
              <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                <td style={styles.td}>{entry.name}</td>
                <td style={styles.td}>{entry.email}</td>
                <td style={styles.td}>{entry.message}</td>
                <td style={styles.td}>
                  <button onClick={() => handleEdit(index)} style={styles.editButton}>Edit</button>
                  <button onClick={() => handleDelete(index)} style={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={styles.emptyRow}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    height: '100px',
    resize: 'vertical',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
  tableTitle: {
    fontSize: '20px',
    color: '#333',
    marginTop: '30px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  headerRow: {
    backgroundColor: '#f2f2f2',
  },
  th: {
    padding: '12px',
    border: '1px solid #ddd',
    fontWeight: 'bold',
    color: '#333',
  },
  td: {
    padding: '12px',
    border: '1px solid #ddd',
    textAlign: 'center',
    color: '#333',
  },
  evenRow: {
    backgroundColor: '#fafafa',
  },
  oddRow: {
    backgroundColor: '#f9f9f9',
  },
  editButton: {
    padding: '8px 12px',
    marginRight: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '8px 12px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  emptyRow: {
    textAlign: 'center',
    color: '#666',
    padding: '20px',
  },
};





export default SimpleForm;





