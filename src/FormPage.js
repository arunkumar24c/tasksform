import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    image: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^[0-9]+$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number is invalid';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setIsSubmitting(true);

      window.location.href = `/display?name=${formData.name}&email=${formData.email}&phone=${formData.phoneNumber}&image=${formData.image}`;
    }
  };

  return (
    <div className='container mx-auto'>
      <h1 className='my-4 text-2xl font-bold'>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
          <label className='block'>Enter Your Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded px-4 py-2`}
          />
          {errors.name && (
            <p className='mt-1 text-sm text-red-500'>{errors.name}</p>
          )}
        </div>
        <div className='my-4'>
          <label className='block'>Enter Your Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={`border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded px-4 py-2`}
          />
          {errors.email && (
            <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
          )}
        </div>
        <div className='my-4'>
          <label className='block'>Enter Your Phone Number:</label>
          <input
            type='text'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`border ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            } rounded px-4 py-2`}
          />
          {errors.phoneNumber && (
            <p className='mt-1 text-sm text-red-500'>{errors.phoneNumber}</p>
          )}
        </div>
        <div className='my-4'>
          <label className='block'>Image:</label>
          <input
            type='file'
            name='image'
            onChange={handleChange}
            className='px-4 py-2 border border-gray-300 rounded'
          />
        </div>

        <button
          type='submit'
          className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormPage;
