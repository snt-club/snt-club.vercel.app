'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BRANCHES = ['CSE', 'DS', 'AI', 'IT', 'IOT', 'ECE', 'EE', 'ME', 'CE'];
const YEARS = [1, 2, 3, 4];

type FormState = {
  name: string;
  email: string;
  rollNo: string;
  phone: string;
  branch: string;
  year: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  rollNo: '',
  phone: '',
  branch: '',
  year: '',
};

type Props = {
  /** Event slug, must match a key in lib/eventRegistrations.ts (e.g. "aarambh") */
  event: string;
  /** Display title, used in headings and success copy */
  title: string;
};

export default function EventRegistrationForm({ event, title }: Props) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name';
    if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|skit\.ac\.in)$/.test(form.email.trim()))
      return 'Please use your @skit.ac.in email';
    if (!form.rollNo.trim()) return 'Please enter your roll number';
    if (!/^[6-9]\d{9}$/.test(form.phone.trim()))
      return 'Please enter a valid 10-digit phone number';
    if (!BRANCHES.includes(form.branch)) return 'Please select your branch';
    if (!YEARS.includes(Number(form.year))) return 'Please select your year';
    return null;
  };

  const handleSubmit = async () => {
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);
    const t = toast.loading('Submitting registration...');
    try {
      const res = await fetch(`/api/event/${event}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, year: Number(form.year) }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success('Registered! Check your email for confirmation.', {
          id: t,
        });
        setDone(true);
        setForm(initialForm);
      } else {
        toast.error(data.message || 'Something went wrong', { id: t });
      }
    } catch {
      toast.error('Network error. Please try again.', { id: t });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-lg border-2 border-[#0A146E]/20 bg-white px-4 py-3 text-[#0A146E] outline-none transition focus:border-[#0A146E] placeholder:text-[#0A146E]/40';

  return (
    <div className="mx-auto max-w-[640px] text-[#0A146E]">
      <div className="text-center">
        <p className="text-2xl font-bold md:text-4xl">Register for {title}</p>
      </div>

      {done ? (
        <div className="mt-8 rounded-[20px] border-2 border-[#4bee6e] bg-[#4bee6e]/10 p-8 text-center">
          <p className="text-xl font-bold text-[#0A146E]">
            🎉 You&apos;re registered!
          </p>
          <p className="mt-2 text-sm text-[#0A146E]/70">
            We&apos;ve sent a confirmation to your email. See you at {title}!
          </p>
          <button
            onClick={() => setDone(false)}
            className="mt-4 rounded-lg border-2 border-[#0A146E] px-4 py-2 text-sm font-semibold text-[#0A146E] transition hover:bg-[#0A146E] hover:text-white"
          >
            Register another
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-[20px] border-2 border-[#0A146E]/10 p-6 md:grid-cols-2 md:p-8">
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold">
              College Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@skit.ac.in or you@gmail.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">
              Roll Number or Enrollment Number (B26XXXX)
            </label>
            <input
              name="rollNo"
              value={form.rollNo}
              onChange={handleChange}
              placeholder="Roll no."
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Branch</label>
            <select
              name="branch"
              value={form.branch}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select branch</option>
              {BRANCHES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Year</label>
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select year</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-2 md:col-span-2">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full rounded-lg border-2 border-[#EE4B76] bg-[#EE4B76] px-4 py-3 font-semibold text-white transition duration-200 hover:bg-transparent hover:text-[#EE4B76] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Register Now'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}