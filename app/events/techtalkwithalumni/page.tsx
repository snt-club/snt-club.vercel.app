'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

import alumniSessionpng from '@/assets/images/alumniSession.jpg';

function AlumniSession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    id: '',
    year: '',
    branch: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@skit\.ac\.in$/;

    if (!nameRegex.test(formData.name)) {
      setError('Name must only contain letters and spaces.');
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      setError('Only @skit.ac.in email addresses are allowed.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Registration successful!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          id: '',
          year: '',
          branch: '',
        });
      } else {
        toast.error('Registration failed. Please try again.');
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred.');
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Header, Event Details ... keep same */}

      <div className="mx-16 my-8">
        <p className="mb-6 rounded-xl bg-[#0A146E] py-2 text-center text-2xl font-bold text-yellow-400 lg:text-4xl">
          Register Your Details
        </p>
        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-lg border p-3"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@skit.ac.in"
                className="w-full rounded-lg border p-3"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 0000000000"
                className="w-full rounded-lg border p-3"
                required
              />
            </div>

            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                College ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="B123456"
                className="w-full rounded-lg border p-3"
                required
              />
            </div>

            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                Select Year
              </label>
              <select
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full rounded-lg border p-3"
                required
              >
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                Branch
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Computer Science"
                className="w-full rounded-lg border p-3"
                required
              />
            </div>
          </div>

          {error && <div className="mt-4 text-center text-red-500">{error}</div>}

          <button
            type="submit"
            disabled={isLoading}
            className={`mt-6 w-full rounded-lg py-3 font-bold transition-all ${
              isLoading ? 'cursor-not-allowed bg-gray-400' : 'bg-[#0A146E] text-white hover:bg-[#0f1b95]'
            }`}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
}

export default AlumniSession;
