import Otp from "@/models/otp";

// Allow max 3 OTP requests per email+event per 10 minutes.
export async function otpRateLimit(email: string, event: string) {
  const tenMinAgo = new Date(Date.now() - 10 * 60 * 1000);

  const count = await Otp.countDocuments({
    email,
    event,
    createdAt: { $gte: tenMinAgo },
  });

  return count < 3;
}