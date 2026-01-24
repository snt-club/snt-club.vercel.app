'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      toast.success("Login successful");
      router.push("/events/CSSbattle/exam");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-96 rounded bg-white p-6">
        <h2 className="mb-4 text-xl font-bold">Login to Start Test</h2>

        <input
          placeholder="Username"
          className="mb-3 w-full border p-2"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-[#0A146E] p-2 text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
