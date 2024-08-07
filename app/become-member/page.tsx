import Image from 'next/image';
import React from 'react';
import snt from '@/assets/images/snt-member-form.webp';

function BecomeMember() {
  return (
    <main className="flex h-fit content-center justify-center py-28">
      <div className="my-auto px-6">
        <div className="container m-auto grid grid-cols-1 rounded-xl bg-gradient-to-r from-[#0a146eab] to-[#832A8Fab] shadow-2xl md:grid-cols-2">
          <div className="p-4 md:p-8">
            <h1 className="pb-4 text-center text-4xl font-bold text-white">Member Registration</h1>
            <div>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScLFSzPXm18xyhOdENz21Ce0pyyPkDy2iuZv1EMgykluI6hyw/formResponse"
                className="mx-auto w-full md:w-3/4"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="pb-0.5 pt-2 text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="entry.1881354852"
                    id="name"
                    placeholder="Full Name"
                    required
                    className="rounded-[5px] border border-black px-[10px] py-[8px] text-[14px] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="pb-0.5 pt-2 text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="entry.1930234057"
                    id="email"
                    placeholder="Email Address"
                    required
                    className="rounded-[5px] border border-black px-[10px] py-[8px] text-[14px] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="pb-0.5 pt-2 text-white">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    name="entry.1613640667"
                    id="phone"
                    placeholder="Phone Number"
                    required
                    className="rounded-[5px] border border-black px-[10px] py-[8px] text-[14px] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cid" className="pb-0.5 pt-2 text-white">
                    College ID
                  </label>
                  <input
                    type="text"
                    name="entry.1057253889"
                    id="cid"
                    placeholder="College ID"
                    required
                    className="rounded-[5px] border border-black px-[10px] py-[8px] text-[14px] outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="branch" className="pb-0.5 pt-2 text-white">
                    Branch
                  </label>
                  <select name="entry.654958202" id="branch" className="required rounded-xl border-black">
                    <option value="CS">CS</option>
                    <option value="CS-AI">CS-AI</option>
                    <option value="CS-DS">CS-DS</option>
                    <option value="CS-IoT">CS-IoT</option>
                    <option value="IT">IT</option>
                    <option value="ECE">ECE</option>
                    <option value="CE">CE</option>
                    <option value="EE">EE</option>
                    <option value="ME">ME</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="year" className="pb-0.5 pt-2 text-white">
                    Year
                  </label>
                  <select name="entry.332826609" id="year" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <button className="mx-auto cursor-pointer pt-4">
                  <input
                    type="submit"
                    value="Submit"
                    className="flex cursor-pointer rounded-lg bg-white px-2 text-center align-middle text-lg font-bold hover:border-white hover:bg-none"
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={snt} alt="SnT Logo" className="h-full w-full rounded-r-xl object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BecomeMember;
