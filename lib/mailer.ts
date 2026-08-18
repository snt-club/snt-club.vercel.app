import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ---------- OTP MAIL (ONLY OTP) ---------- */
export async function sendOtpMail(to: string, otp: string) {
  await transporter.sendMail({
    from: `"SNT Club" <${process.env.EMAIL_USER}>`,
    to,
    subject: "OTP Verification | SNT Club",
    html: `
      <h2>Email Verification</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>Valid for 5 minutes.</p>
    `,
  });
}

/* ---------- REGISTRATION SUCCESS MAIL (ONE MAIL ONLY) ---------- */
export async function sendRegistrationMail(
  to: string,
  name: string,
  username: string,
  password: string
) {
  await transporter.sendMail({
    from: `"SNT Club" <${process.env.EMAIL_USER}>`,
    to,
    subject: "🎉 Registration Successful | CSS Battle Test",
    html: `
      <div style="font-family: Arial">
        <h2>Hello ${name}, 👋</h2>

        <p>Your registration has been
        <strong style="color:green">SUCCESSFUL</strong>.</p>

        <h3>🔐 Login Credentials</h3>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>

        <br/>
        <p>All the best! 🚀</p>
        <p><strong>SNT Club</strong></p>
      </div>
    `,
  });
}

/* ---------- EVENT CONFIRMATION MAIL ---------- */
export async function sendEventConfirmationMail(
  to: string,
  name: string,
  eventTitle: string
) {
  await transporter.sendMail({
    from: `"SNT Club" <${process.env.EMAIL_USER}>`,
    to,
    subject: `✅ Registration Confirmed | ${eventTitle}`,
    html: `
      <div style="font-family: Arial">
        <h2>Hello ${name}, 👋</h2>

        <p>Your registration for
        <strong>${eventTitle}</strong> has been
        <strong style="color:green">CONFIRMED</strong>.</p>

        <p>We're excited to have you join us. Keep an eye on your inbox
        for further details about the event.</p>

        <br/>
        <p>See you there! 🚀</p>
        <p><strong>SNT Club</strong></p>
      </div>
    `,
  });
}