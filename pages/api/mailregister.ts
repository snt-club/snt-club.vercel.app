
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
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: `"SNT Club" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Codeformers Registration Confirmation',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f0f6ff; padding: 30px; color: #0A146E;">
          <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
            <h2 style="color: #0A146E;">Hello ${name},</h2>
    
            <p style="font-size: 16px; color: #333;">
              <strong>Thank you!</strong> You have successfully registered for <strong style="color: #0A146E;">Codeformers</strong>.
            </p>
    
            <p style="font-size: 16px; color: #333;">
              The event will be held at <strong>CL1, 3rd Floor</strong> at <strong>2:00 PM</strong>. Please make sure to reach the venue at least <strong>15 minutes early</strong> for check-in formalities.
            </p>
    
            <hr style="border: none; border-top: 1px solid #d0e3ff; margin: 20px 0;" />
    
            <p style="font-size: 16px; color: #0A146E;"><strong>Your Registration Details:</strong></p>
            <ul style="list-style: none; padding-left: 0; font-size: 16px; color: #333;">
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>College ID:</strong> ${id}</li>
              <li><strong>Year:</strong> ${year}</li>
              <li><strong>Branch:</strong> ${branch}</li>
            </ul>
    
            <p style="font-size: 16px; color: #333;">We look forward to seeing you there! 🎉</p>
    
            <br />
            <p style="font-size: 16px; color: #0A146E;"><strong>- SNT Club Team</strong></p>
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Email sending error:', error);
    return res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
}
