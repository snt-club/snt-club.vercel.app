'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import RegisterBtn from '@/components/registerBtn';
import aarambh from '@/assets/images/aarambh.webp';

function AlumniSession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    id: '',
    year: '',
    branch: '',
  });
  // fje

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state

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
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href=""
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
 <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/V8qwSNwyckYUbYrcA" target="_blank">
              <RegisterBtn />
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">
          AARAMB 2025
          </p>
        </div>

        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={aarambh} alt="alumniSession" className="" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>
                  Join us at <strong>AARAMB 2025</strong> for an exciting session where we'll welcome freshers and introduce them to the Science and Technology Club, showcasing innovation, insights, and opportunities!

{' '}
                  
                  <br />
                  <br />
                  {/* 👉🏻 <strong>Saksham Sharma</strong> (SDE Intern at Juspay) <br />
                  👉🏻 <strong>Radhika Soni</strong> (Product Engineer Intern at NammaYatri) <br />
                  👉🏻 <strong>Aarushi Sharma</strong> (SDE at NammaYatri) */}
                </p>
                <br />
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
                    <span className="text-[18px] font-semibold">01 October 2025</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Time</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">02:00 PM Onwards</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Venue</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">JC Bose Auditorium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Form Section --- */}
        
      </div>
    </>
  );
}

export default AlumniSession;