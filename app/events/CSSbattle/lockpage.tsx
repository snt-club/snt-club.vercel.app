'use client';
import { useState } from "react";
import LoginModal from "./login";

export default function StartPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center">
      <button
        onClick={() => setOpen(true)}
        className="rounded bg-[#0A146E] px-8 py-4 text-xl text-white"
      >
        Start Test
      </button>

      {open && <LoginModal onClose={() => setOpen(false)} />}
    </div>
  );
}
