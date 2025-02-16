'use client'

// components/MyForm.tsx
import React, { useState, FormEvent } from 'react';
import Button from '../ui/Buttons/Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to an API
    console.log('Form Data:', formData);

    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <input type="hidden" name="contact-form" value="contact_form" />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default MyForm;
