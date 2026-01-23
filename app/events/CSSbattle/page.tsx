'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import alumniSessionpng from '@/assets/images/alumniSession.jpg';

export default function CSSBattle() {
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

  /* 🔥 SEND OTP (INSTANT UI, NO WAIT) */
  const sendOtp = () => {
    if (!formData.email.endsWith('@skit.ac.in')) {
      toast.error('Only @skit.ac.in email allowed');
      return;
    }

    // ✅ INSTANT UX
    setOtpSent(true);
    toast.success('OTP is being sent to your email');

    // fire & forget
    fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formData.email }),
    }).catch(() => {
      toast.error('Failed to send OTP');
    });
  };

  /* VERIFY OTP */
  const verifyOtp = async () => {
    const res = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: formData.email, otp }),
    });

    if (res.ok) {
      toast.success('Email verified');
      setEmailVerified(true);
    } else {
      toast.error('Invalid or expired OTP');
    }
  };

  /* REGISTER */
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
        toast.success('Registered! Credentials sent to email');
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
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="bg-[#0A146E] py-4 text-white">
        <div className="mx-auto flex max-w-6xl justify-between px-4 font-bold">
          <Link href="#">Notice</Link>
          <span>SNT Club</span>
        </div>
      </header>

      <div className="container mx-auto my-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Image src={alumniSessionpng} alt="CSS Battle" />

          <div className="space-y-4">
            <p><strong>CSS Battle Test</strong></p>
            <p>Date: 23 April 2025</p>
            <p>Venue: Gyan Mandir Auditorium</p>
          </div>
        </div>

        <div className="mx-auto my-12 max-w-xl rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Register for CSS Battle
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Full Name" className="w-full border p-2"
              value={formData.name} onChange={handleChange} required />

            <input name="rollNo" placeholder="University Roll No" className="w-full border p-2"
              value={formData.rollNo} onChange={handleChange} required />

            <select name="branch" className="w-full border p-2"
              value={formData.branch} onChange={handleChange} required>
              <option value="">Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="DS">DS</option>
              <option value="AI">AI</option>
              <option value="IT">IT</option>
              <option value="IOT">IOT</option>
            </select>

            <select name="year" className="w-full border p-2"
              value={formData.year} onChange={handleChange} required>
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>

            <div className="flex gap-2">
              <input name="email" placeholder="Email (@skit.ac.in)"
                className="w-full border p-2"
                value={formData.email} onChange={handleChange}
                disabled={emailVerified} required />

              <button type="button" onClick={sendOtp}
                className="bg-blue-600 px-4 text-white">
                Verify
              </button>
            </div>

            {otpSent && !emailVerified && (
              <div className="flex gap-2">
                <input placeholder="Enter OTP"
                  className="w-full border p-2"
                  value={otp} onChange={(e) => setOtp(e.target.value)} />

                <button type="button" onClick={verifyOtp}
                  className="bg-green-600 px-4 text-white">
                  Verify OTP
                </button>
              </div>
            )}

            <button type="submit"
              disabled={!emailVerified || isLoading}
              className="w-full rounded bg-[#0A146E] p-2 text-white">
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
