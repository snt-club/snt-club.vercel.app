'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import alumniSessionpng from '@/assets/images/alumniSession.jpg';

export default function AlumniSession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    year: '',
    branch: '',
  });

  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ---------------- SEND OTP ---------------- */
  const sendOtp = async () => {
    if (!formData.email.endsWith('@skit.ac.in')) {
      toast.error('Only @skit.ac.in email allowed');
      return;
    }

    const res = await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formData.email }),
    });

    if (res.ok) {
      toast.success('OTP sent to email');
      setOtpSent(true);
    } else {
      toast.error('Failed to send OTP');
    }
  };

  /* ---------------- VERIFY OTP ---------------- */
  const verifyOtp = async () => {
    const res = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formData.email, otp }),
    });

    if (res.ok) {
      toast.success('Email verified successfully');
      setEmailVerified(true);
    } else {
      toast.error('Invalid or expired OTP');
    }
  };

  /* ---------------- SUBMIT FORM ---------------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Registration successful! Credentials sent to email');
        setFormData({
          name: '',
          email: '',
          rollNo: '',
          year: '',
          branch: '',
        });
        setOtp('');
        setOtpSent(false);
        setEmailVerified(false);
      } else {
        toast.error('Registration failed');
      }
    } catch (err) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      {/* <header className="bg-[#0A146E] py-4 text-white">
        <div className="mx-auto flex max-w-6xl justify-between px-4 font-bold">
          <Link href="#">Notice</Link>
          <span>Science & Technology Club</span>
        </div>
      </header> */}

      {/* ---------------- EVENT INFO ---------------- */}
      <div className="container mx-auto my-6">
        <div className="mx-auto mb-6 w-fit rounded-xl bg-[#0A146E] px-6 py-2 text-3xl font-bold text-yellow-400 lg:text-5xl">
         CSS Battle 
        </div>

        {/* <div className="grid gap-6 md:grid-cols-2">
          <Image
            src={alumniSessionpng}
            alt="Tech Talk"
            className="rounded-lg"
          />

          <div className="space-y-4 text-lg">
            <p>
              The Science and Technology Club is organising a{' '}
              <strong>Tech Talk & Guidance Session</strong> 📊✨
            </p>

            <p>
              👉 <strong>Saksham Sharma</strong> (SDE Intern at Juspay) <br />
              👉 <strong>Radhika Soni</strong> (Product Engineer Intern at NammaYatri) <br />
              👉 <strong>Aarushi Sharma</strong> (SDE at NammaYatri)
            </p>

            <div className="pt-4">
              <p><strong>Date:</strong> 23 April 2025</p>
              <p><strong>Time:</strong> 1:45 PM onwards</p>
              <p><strong>Venue:</strong> Gyan Mandir Auditorium</p>
            </div>
          </div>
        </div> */}

        {/* ---------------- REGISTRATION FORM ---------------- */}
        <div className="mx-auto my-12 max-w-xl rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Register for CSS Battle Test
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />

            <input
              name="rollNo"
              placeholder="University Roll No"
              value={formData.rollNo}
              onChange={handleChange}
              className="w-full border p-2"
              required
            />

            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full border p-2"
              required
            >
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="DS">DS</option>
              <option value="AI">AI</option>
              <option value="IT">IT</option>
              <option value="IOT">IOT</option>
            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full border p-2"
              required
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>

            {/* EMAIL + VERIFY */}
            <div className="flex gap-2">
              <input
                name="email"
                placeholder="Email (@skit.ac.in)"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2"
                required
                disabled={emailVerified}
              />
              <button
                type="button"
                onClick={sendOtp}
                disabled={otpSent}
                className="bg-blue-600 px-4 text-white"
              >
                Verify
              </button>
            </div>

            {/* OTP */}
            {otpSent && !emailVerified && (
              <div className="flex gap-2">
                <input
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full border p-2"
                />
                <button
                  type="button"
                  onClick={verifyOtp}
                  className="bg-green-600 px-4 text-white"
                >
                  Verify OTP
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={!emailVerified || isLoading}
              className={`w-full rounded p-2 text-white ${
                emailVerified ? 'bg-[#0A146E]' : 'bg-gray-400'
              }`}
            >
              {isLoading ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
