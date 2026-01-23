import Otp from "@/models/otp";

export async function otpRateLimit(email: string) {
  const tenMinAgo = new Date(Date.now() - 10 * 60 * 1000);

  const count = await Otp.countDocuments({
    email,
    createdAt: { $gte: tenMinAgo },
  });

  return count < 3; // max 3 OTP / 10 min
}
