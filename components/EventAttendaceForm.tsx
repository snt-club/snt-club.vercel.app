'use client';

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const RATINGS = [
  { value: 5, label: '⭐⭐⭐⭐⭐ Excellent' },
  { value: 4, label: '⭐⭐⭐⭐ Very Good' },
  { value: 3, label: '⭐⭐⭐ Good' },
  { value: 2, label: '⭐⭐ Fair' },
  { value: 1, label: '⭐ Poor' },
];

const ALLOWED_EMAIL = /^[a-zA-Z0-9._%+-]+@(gmail\.com|skit\.ac\.in)$/;

type FormState = {
  name: string;
  email: string;
  rollNo: string;
  rating: string;
  feedback: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  rollNo: '',
  rating: '5',
  feedback: '',
};

type Props = {
  /** Event slug e.g. "aarambh2026" */
  event: string;
  /** Display title for heading e.g. "Aarambh 2026" */
  title: string;
};

export default function EventAttendanceForm({ event, title }: Props) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [deviceId, setDeviceId] = useState<string>('');
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationStatus, setLocationStatus] = useState<'prompt' | 'granted' | 'denied'>('prompt');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 1. Initialize Device Fingerprint and Geolocation on mount
  useEffect(() => {
    // Generate browser/device fingerprint
    FingerprintJS.load()
      .then((fp) => fp.get())
      .then((result) => setDeviceId(result.visitorId))
      .catch(() => {
        // Fallback random ID if FingerprintJS is blocked by extreme browser shields
        const fallbackId = 'dev_' + Math.random().toString(36).substring(2, 15);
        setDeviceId(fallbackId);
      });

    requestLocation();
  }, []);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by your browser');
      setLocationStatus('denied');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationStatus('granted');
      },
      (error) => {
        setLocationStatus('denied');
        if (error.code === error.PERMISSION_DENIED) {
          toast.error('Location permission is required to mark attendance.');
        } else {
          toast.error('Unable to fetch precise location. Please enable GPS.');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your full name';
    if (!ALLOWED_EMAIL.test(form.email.trim()))
      return 'Please use your registered @gmail.com or @skit.ac.in email';
    if (!form.rollNo.trim()) return 'Please enter your roll number';
    if (!form.rating) return 'Please select a session rating';
    if (!form.feedback) return 'Please give us some feedback';
    if (!deviceId) return 'Initializing device security check... please wait 2 seconds';
    if (!coords) return 'GPS Location is required. Please grant location access.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);
    const t = toast.loading('Verifying location & marking attendance...');

    try {
      const res = await fetch('/api/z9x4p7/r3mk8nt6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event,
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          rollNo: form.rollNo.trim().toUpperCase(),
          rating: Number(form.rating),
          feedback: form.feedback.trim(),
          lat: coords?.lat,
          lng: coords?.lng,
          deviceId,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Attendance & feedback recorded!', { id: t });
        setSubmitted(true);
        setForm(initialForm);
      } else {
        toast.error(data.error || 'Failed to submit attendance', { id: t });
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
        <p className="text-2xl font-bold md:text-4xl">Attendance &amp; Feedback</p>
        <p className="mt-2 text-sm text-[#0A146E]/70 font-medium">{title}</p>
        <p className="mt-2 text-sm text-[#0A146E]/70 font-medium"><span className="text-red-500 font-bold">&#42;</span> denotes field is required</p>
      </div>

      {submitted ? (
        <div className="mt-8 rounded-[20px] border-2 border-[#4bee6e] bg-[#4bee6e]/10 p-8 text-center">
          <p className="text-2xl font-bold text-[#0A146E]">🎉 Attendance Marked!</p>
          <p className="mt-2 text-sm text-[#0A146E]/80">
            Thank you for attending <strong>{title}</strong> and providing your feedback.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-8 grid grid-cols-1 gap-4 rounded-[20px] border-2 border-[#0A146E]/10 p-6 md:grid-cols-2 md:p-8"
        >
          {/* Location Verification Status Indicator */}
          <div className="md:col-span-2">
            {locationStatus === 'granted' ? (
              <div className="flex items-center gap-2 rounded-lg bg-[#4bee6e]/15 border border-[#4bee6e]/40 px-3 py-2 text-xs font-semibold text-[#0A146E]">
                <span>📍</span> Venue Location Verified (GPS Active)
              </div>
            ) : locationStatus === 'denied' ? (
              <div className="flex items-center justify-between rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs font-semibold text-red-600">
                <span>⚠️ Location permission denied. Required for 50m check.</span>
                <button
                  type="button"
                  onClick={requestLocation}
                  className="underline font-bold"
                >
                  Retry
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-200 px-3 py-2 text-xs font-semibold text-[#0A146E]">
                <span>⏳</span> Detecting physical presence...
              </div>
            )}
          </div>

          {/* Full Name */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold">Full Name <span className="text-red-500 font-bold">&#42;</span></label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          {/* Registered Email */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold">
              Email Address <span className="text-red-500 font-bold">&#42;</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email ID"
              className={inputClass}
            />
          </div>

          {/* Roll Number */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold">
              Enrollment No. (B26XXXX / TMPXXXX) <span className="text-red-500 font-bold">&#42;</span>
            </label>
            <input
              name="rollNo"
              value={form.rollNo}
              onChange={handleChange}
              placeholder="Your Enrollment Number"
              className={inputClass}
            />
          </div>

          {/* Rating */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold">
              How would you rate today&apos;s session? <span className="text-red-500 font-bold">&#42;</span>
            </label>
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className={inputClass}
            >
              {RATINGS.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Feedback */}
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-semibold">
              Feedback / Key Learnings <span className="text-red-500 font-bold">&#42;</span>
            </label>
            <textarea
              name="feedback"
              rows={3}
              value={form.feedback}
              onChange={handleChange}
              placeholder="Share what you liked or how we can improve..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-2 md:col-span-2">
            <button
              type="submit"
              disabled={loading || locationStatus === 'denied'}
              className="w-full rounded-lg border-2 border-[#EE4B76] bg-[#EE4B76] px-4 py-3 font-semibold text-white transition duration-200 hover:bg-transparent hover:text-[#EE4B76] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Mark Present & Submit Feedback'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}