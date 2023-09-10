import Image from "next/image";
import React from "react";
import snt from "@/assets/images/snt-member-form.webp";

function BecomeMember() {
  return (
    <main className="h-fit py-28 flex justify-center content-center">
      <div className="my-auto">
        <div className="flex container m-auto shadow-2xl bg-gradient-to-r from-[#0a146eab] to-[#832A8Fab] rounded-xl">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-center pb-4 text-white">Member Registration</h1>
            <div>
              <form action="https://docs.google.com/forms/d/e/1FAIpQLScLFSzPXm18xyhOdENz21Ce0pyyPkDy2iuZv1EMgykluI6hyw/formResponse" className="w-3/4 mx-auto">
                <div className="flex flex-col">
                  <label htmlFor="name" className="pb-0.5 pt-2 text-white">Name</label>
                  <input
                    type="text"
                    name="entry.1881354852"
                    id="name"
                    placeholder="Full Name"
                    className="border outline-none text-[14px] border-black rounded-[5px] px-[10px] py-[8px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="pb-0.5 pt-2 text-white">Email</label>
                  <input
                    type="email"
                    name="entry.1930234057"
                    id="email"
                    placeholder="Email Address"
                    className="border outline-none text-[14px] border-black rounded-[5px] px-[10px] py-[8px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="pb-0.5 pt-2 text-white">Phone Number (WhatsApp)</label>
                  <input
                    type="tel"
                    name="entry.1613640667"
                    id="phone"
                    placeholder="Phone Number"
                    className="border outline-none text-[14px] border-black rounded-[5px] px-[10px] py-[8px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cid" className="pb-0.5 pt-2 text-white">College ID</label>
                  <input
                    type="text"
                    name="entry.1057253889"
                    id="cid"
                    placeholder="College ID"
                    className="border outline-none text-[14px] border-black rounded-[5px] px-[10px] py-[8px]"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="branch" className="pb-0.5 pt-2 text-white">Branch</label>
                  <select name="entry.654958202" id="branch" className="rounded-xl border-black">
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
                  <label htmlFor="year" className="pb-0.5 pt-2 text-white">Year</label>
                  <select name="entry.332826609" id="year">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <button className="pt-4 mx-auto ">
                  <input type="submit" value="Submit" className="align-middle flex rounded-lg px-2 bg-white text-lg font-bold hover:bg-none hover:border-white" />
                </button>
              </form>
            </div>
          </div>
          <div className="max-md:hidden">
            <Image
              src={snt}
              alt="SnT Logo"
              className="w-full h-full object-cover rounded-r-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BecomeMember;