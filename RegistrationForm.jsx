import React, { useState } from 'react';

// Custom hook for form validation
const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return { handleChange, handleSubmit, values, errors, isSubmitting };
};

// Validation function
const validate = (values) => {
  let errors = {};

  // Email validation with regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Password validation
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  // Retype password validation
  if (!values.retypePassword) {
    errors.retypePassword = 'Please retype your password';
  } else if (values.password !== values.retypePassword) {
    errors.retypePassword = 'Passwords do not match';
  }

  // First name validation
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }

  // Last name validation
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }

  // Phone number validation
  const phoneRegex = /^[0-9]{10}$/;
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(values.phone)) {
    errors.phone = 'Invalid phone number';
  }

  // Address validation
  if (!values.address) {
    errors.address = 'Address is required';
  }

  // Town validation
  if (!values.town) {
    errors.town = 'Town is required';
  }

  // Region validation
  if (!values.region) {
    errors.region = 'Region is required';
  }

  // Postcode validation
  if (!values.postcode) {
    errors.postcode = 'Postcode/zip is required';
  }

  // Country validation
  if (!values.country) {
    errors.country = 'Country is required';
  }

  return errors;
};

const RegistrationForm = () => {
  const initialValues = {
    email: 'example@gmail.com',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    country: ''
  };

  const { handleChange, handleSubmit, values, errors } = useFormValidation(
    initialValues,
    validate
  );

  return (
    <div style={{ margin: 'auto', width: '50%', textAlign: 'left', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email* </label>
          <input type="email" name="email" value={values.email} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password* </label>
          <input type="password" name="password" value={values.password} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.password && <p style={{ color: 'red', fontSize: '14px' }}>{errors.password}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Retype Password* </label>
          <input type="password" name="retypePassword" value={values.retypePassword} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.retypePassword && <p style={{ color: 'red', fontSize: '14px' }}>{errors.retypePassword}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>First Name* </label>
          <input type="text" name="firstName" value={values.firstName} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.firstName && <p style={{ color: 'red', fontSize: '14px' }}>{errors.firstName}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Last Name* </label>
          <input type="text" name="lastName" value={values.lastName} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.lastName && <p style={{ color: 'red', fontSize: '14px' }}>{errors.lastName}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Phone* </label>
          <input type="text" name="phone" value={values.phone} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.phone && <p style={{ color: 'red', fontSize: '14px' }}>{errors.phone}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address* </label>
          <input type="text" name="address" value={values.address} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.address && <p style={{ color: 'red', fontSize: '14px' }}>{errors.address}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Town* </label>
          <input type="text" name="town" value={values.town} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.town && <p style={{ color: 'red', fontSize: '14px' }}>{errors.town}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Region* </label>
          <input type="text" name="region" value={values.region} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.region && <p style={{ color: 'red', fontSize: '14px' }}>{errors.region}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Postcode/zip* </label>
          <input type="text" name="postcode" value={values.postcode} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.postcode && <p style={{ color: 'red', fontSize: '14px' }}>{errors.postcode}</p>}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Country* </label>
          <input type="text" name="country" value={values.country} onChange={handleChange} style={{ width: '100%', padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }} />
          {errors.country && <p style={{ color: 'red', fontSize: '14px' }}>{errors.country}</p>}
        </div>
        <div>
          <button type="submit" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>Register</button>
        </div>
      </form>
      {/* Display form values for testing */}
      <div>
        <h3>Form Values</h3>
        <p>Email: {values.email}</p>
        <p>First Name: {values.firstName}</p>
        <p>Last Name: {values.lastName}</p>
        <p>Phone: {values.phone}</p>
        {/* Display other form values similarly */}
      </div>
    </div>
  );
};

export default RegistrationForm;
