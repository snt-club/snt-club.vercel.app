'use client';

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import LoginModal from './login';

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

  // 🔥 PERSISTENT STATE
  const [registered, setRegistered] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  /* 🔄 RESTORE REGISTRATION STATE ON PAGE LOAD */
  useEffect(() => {
    const alreadyRegistered = localStorage.getItem('cssbattle_registered');
    if (alreadyRegistered === 'true') {
      setRegistered(true);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* SEND OTP */
  const sendOtp = () => {
    if (!formData.email.endsWith('@skit.ac.in')) {
      toast.error('Only @skit.ac.in email allowed');
      return;
    }

    setOtpSent(true);
    toast.success('OTP is being sent to your email');

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
        toast.success('Registration successful! You can now start the test.');

        // 🔥 SAVE STATE PERSISTENTLY
        localStorage.setItem('cssbattle_registered', 'true');
        localStorage.setItem('cssbattle_email', formData.email);

        setRegistered(true);
      } else {
        toast.error('Registration failed');
      }
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  /* START TEST */
  const handleStartTest = () => {
    if (!registered) {
      toast.error('Please register first to start the test');
      return;
    }
    setOpenLogin(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">

        {/* LEFT: REGISTRATION */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Register for CSS Battle
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Full Name"
              className="w-full border p-2"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="rollNo"
              placeholder="University Roll No"
              className="w-full border p-2"
              value={formData.rollNo}
              onChange={handleChange}
              required
            />

            <select
              name="branch"
              className="w-full border p-2"
              value={formData.branch}
              onChange={handleChange}
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
              className="w-full border p-2"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>

            <div className="flex gap-2">
              <input
                name="email"
                placeholder="Email (@skit.ac.in)"
                className="w-full border p-2"
                value={formData.email}
                onChange={handleChange}
                disabled={emailVerified}
                required
              />
              <button
                type="button"
                onClick={sendOtp}
                className="bg-blue-600 px-4 text-white"
              >
                Verify
              </button>
            </div>

            {otpSent && !emailVerified && (
              <div className="flex gap-2">
                <input
                  placeholder="Enter OTP"
                  className="w-full border p-2"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
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
              className="w-full rounded bg-[#0A146E] p-2 text-white"
            >
              {isLoading ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>
        </div>

        {/* RIGHT: START TEST */}
        <div className="flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold">Ready to Begin?</h2>

          <button
            onClick={handleStartTest}
            className="rounded bg-[#0A146E] px-10 py-4 text-2xl text-white"
          >
            Start Test
          </button>

          {!registered && (
            <p className="mt-4 text-sm text-gray-500">
              * You must register before starting the test
            </p>
          )}
        </div>
      </div>

      {openLogin && <LoginModal onClose={() => setOpenLogin(false)} />}
    </div>
  );
}
