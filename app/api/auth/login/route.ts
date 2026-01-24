import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import Student from "@/models/Student";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { username, password } = await req.json();

    const user = await Student.findOne({ username });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Authenticated",
      userId: user._id.toString(),
    });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
