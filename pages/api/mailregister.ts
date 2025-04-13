// /pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, id, year, branch } = req.body;

  if (!name || !email || !phone || !id || !year || !branch) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: `"SNT Club" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Codeformers Registration Confirmation',
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for registering for <strong>Codeformers</strong>!</p>
        <p><strong>Your Details:</strong></p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>College ID:</strong> ${id}</li>
          <li><strong>Year:</strong> ${year}</li>
          <li><strong>Branch:</strong> ${branch}</li>
        </ul>
        <p>We look forward to seeing you at the event! 🎉</p>
        <br/>
        <p>- SNT Club Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}
