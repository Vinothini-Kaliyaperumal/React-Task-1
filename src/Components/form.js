import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form fields
  const validate = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    } else if (formData.name.length < 3) {
      formErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Email is not valid';
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      formErrors.message = 'Message must be at least 10 characters';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // If no errors, submit form data
      const existingData = JSON.parse(localStorage.getItem('formData')) || [];
      const newData = [...existingData, formData];
      localStorage.setItem('formData', JSON.stringify(newData));

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      navigate('/table');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Simple Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Name Field */}
        <div style={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div style={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        {/* Message Field */}
        <div style={styles.formGroup}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={styles.textarea}
          />
          {errors.message && <span style={styles.error}>{errors.message}</span>}
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    height: '100px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  }
};

export default SimpleForm;
