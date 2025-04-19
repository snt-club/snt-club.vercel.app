'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import RegisterBtn from '@/components/registerBtn';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        setError(null);
      } else {
        toast.error('Registration failed. Please try again.');
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred.');
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1ju4nfey5IKXGSQ6l7vdT_Ioh8FKkqMdS/view?usp=sharing"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/LMqgfwHomr181roZ8" target="_blank">
              <RegisterBtn />
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">
            Tech Talk With Alumni 3.0
          </p>
        </div>

        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={alumniSessionpng} alt="alumniSession" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>
                  After getting an excellent response in the previous session, the Science and Technology Club once
                  again conduct an expert talk 👨🏻‍🎓session. We are excited to organise the Tech Talk with Alumni 2.0
                  where you’ll get mentorship and complete guidance from our former club member, Er. Keshav Pareek, GATE
                  2024 qualified.
                </p>
                <br />
                <p className="text-left">
                  What's in store 🤔: <br />
                  👉🏻 Gain valuable career insights. <br />
                  👉🏻 Get cleared all your academic and tech related doubts. <br />
                  👉🏻 Guidance for career paths to pursue higher studies. <br />
                  👉🏻 Certificates will be provided to the participants. <br />
                  <br />
                  Get inspired by alumni success stories! 👍🏻
                </p>
                <br />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div>
                  <div className="text-[14px] text-gray-500">
                    <span>Date</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">9th October 2024</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Time</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">1:45 PM Onwards</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Venue</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">J.C. Bose</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Form Section --- */}
        <div className="mx-16 my-8">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-4xl py-2 text-center mb-6">
            Register Your Details
          </p>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-xl">
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
                  placeholder="Full Name"
                  className="p-3 border rounded-lg w-full"
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
                  placeholder="Email Address"
                  className="p-3 border rounded-lg w-full"
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
                  placeholder="Phone Number"
                  className="p-3 border rounded-lg w-full"
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
                  placeholder="College ID"
                  className="p-3 border rounded-lg w-full"
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
                  className="p-3 border rounded-lg w-full"
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
                  placeholder="Branch"
                  className="p-3 border rounded-lg w-full"
                  required
                />
              </div>
            </div>
            {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
            <button
              type="submit"
              className="mt-6 w-full bg-[#0A146E] hover:bg-[#0f1b95] text-white font-bold py-3 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AlumniSession;
