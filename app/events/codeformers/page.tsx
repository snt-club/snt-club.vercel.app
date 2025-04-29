'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast, Toaster } from 'react-hot-toast'; // import toast and Toaster
import Codeformers_glimpses from '@/components/codeformers_glimpses';
import sponsorLogo1 from 'assets/images/sponsor.svg';
import RegisterBtn from '@/components/registerBtn';
import codeformers from '@/assets/images/codeformer.jpg';

function CodeformerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    id: '',
    year: '',
    branch: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // New: disable button when submitting

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email: string) => {
    return email.endsWith('@skit.ac.in');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Only @skit.ac.in emails are allowed.');
      toast.error('Please use your @skit.ac.in email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Registration successful! 🎉');
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
        setError('Registration failed. Please try again.');
        toast.error('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Header Section */}
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1AF5rmFB_RQ0qer5p_LJcPHlYr1FoD4F3/view?usp=drive_link"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/uArdA94fbAUCgbsz6" target="_blank">
              <RegisterBtn />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">
            Codeformers
          </p>
        </div>

        <div className="block md:flex">
          <div className="mx-16 pb-15">
            <Image src={codeformers} alt="codeformers" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>Codeformers, our monthly coding competition! Showcase your skill and grab the top spot.</p>
                <br />
                <p className="text-left">
                  Join us for: <br />
                  • Skill Growth 🚀 <br />
                  • Network Opportunities 🤝 <br />
                  • Exciting Prizes 🎉 <br />
                  • Fun Competitions 🏆
                </p>
                <br />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div>
                  <div className="text-[14px] text-gray-500">Date</div>
                  <div className="text-[18px] font-semibold">April 30th, 2025</div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">Time</div>
                  <div className="text-[18px] font-semibold">01:45 PM - 02:45 PM</div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">Venue</div>
                  <div className="text-[18px] font-semibold">CL-1 & CL-3 (CS Block)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Register Form Section */}
        <div className="mx-16 my-8">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-4xl py-2 text-center mb-6">
            Register Your Details
          </p>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-xl">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@skit.ac.in"
                  className="p-3 border rounded-lg w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
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
                <label htmlFor="id" className="block text-sm font-medium text-gray-700">College ID</label>
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
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Select Year</label>
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
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700">Branch</label>
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
              disabled={isSubmitting}
              className={`mt-6 w-full ${isSubmitting ? 'bg-gray-400' : 'bg-[#0A146E] hover:bg-[#0f1b95]'} text-white font-bold py-3 rounded-lg`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        {/* Sponsored Section */}
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl py-2">Sponsored By</p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            <div className="m-4">
              <a href="https://linktr.ee/uniartskillsacademy">
                <Image src={sponsorLogo1} alt="Sponsor 1" width={500} height={200} />
              </a>
            </div>
          </div>
        </div>

        {/* Glimpses Section */}
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl py-2">Glimpses</p>
        </div>
        <Codeformers_glimpses />
      </div>
    </>
  );
}

export default CodeformerPage;
