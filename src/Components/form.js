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
      <div style={styles.card}>
        <h1 style={styles.header}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={errors.name ? { ...styles.input, ...styles.inputError } : styles.input}
              placeholder="Enter your name"
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={errors.email ? { ...styles.input, ...styles.inputError } : styles.input}
              placeholder="Enter your email"
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              style={errors.message ? { ...styles.textarea, ...styles.inputError } : styles.textarea}
              placeholder="Write your message"
            />
            {errors.message && <span style={styles.error}>{errors.message}</span>}
          </div>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff',  // AliceBlue background color for the form container
    // padding: '-10px',
  },
  card: {
    backgroundColor: '#e6e6fa',  // Lavender background for the form
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '20px',
    borderBottom: '2px solid #7b68ee',  // Medium Slate Blue color for header underline
    paddingBottom: '10px',
    fontFamily: 'Dancing Script, cursive', // Header font
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    color: '#2c3e50',
    marginBottom: '8px',
    fontWeight: '500',
    fontFamily: 'Dancing Script, cursive',  // Label font
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'Dancing Script, cursive',  // Input font
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    height: '120px',
    resize: 'vertical',
    fontFamily: 'Dancing Script, cursive',  // Textarea font
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  button: {
    padding: '12px',
    background: 'linear-gradient(to right, #7b68ee, #6a5acd)',  // Dual-color gradient for the button (MediumSlateBlue to SlateBlue)
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontFamily: 'Dancing Script, cursive',  // Button font
  },
  error: {
    color: '#e74c3c',
    fontSize: '12px',
    marginTop: '5px',
    fontFamily: 'Dancing Script, cursive',  // Error message font
  },
};

export default SimpleForm;
