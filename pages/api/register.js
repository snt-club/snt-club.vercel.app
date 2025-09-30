import dbConnect from '@/lib/mongodb';
import Registration from '@/lib/models/Registration';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    // const newEntry = await Registration.create(req.body);

    const { name, email } = req.body;

    let user = await Registration.findOne({ email });

    if (user) {
      if (user.emailSent) {
        return res.status(400).json({ success:false, message: 'You have already registered and confirmation email was sent.' });
      } else {
        console.log('Retrying email for:', email);
      }
    }
    else {
      user = await Registration.create({ ...req.body, emailSent: false });
      await user.save();
    }

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
      subject: 'CODEFORMERS REGISTRATION CONFIRMATION',
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CodeFormers - Registration Confirmation</title>
  <style>
    body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f4f6f8; color: #333; }
    .container { max-width: 620px; background: #fff; margin: 30px auto; border-radius: 10px; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #00c6ff, #0072ff); color: #fff; text-align: center; padding: 30px 20px; }
    .header h1 { margin: 0; font-size: 32px; letter-spacing: 1px; }
    .header p { margin-top: 10px; font-size: 18px; opacity: 0.9; }
    .content { padding: 30px 25px; }
    .content h2 { margin-top: 0; font-size: 26px; color: #0072ff; }
    .info-box { background: #e8f0fe; border-left: 4px solid #0072ff; padding: 20px; margin: 20px 0; border-radius: 6px; }
    .info-item { margin: 10px 0; display: flex; align-items: center; }
    .info-item span { margin-right: 12px; font-size: 22px; }
    .notice { background: #fff7e6; border-left: 4px solid #ffc107; padding: 20px; margin: 20px 0; border-radius: 6px; color: #7a5800; }
    .cta-button { display: inline-block; margin-top: 25px; padding: 12px 28px; background: linear-gradient(135deg, #00c6ff, #0072ff); color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; transition: background 0.3s; }
    .cta-button:hover { background: linear-gradient(135deg, #0072ff, #00c6ff); }
    .footer { text-align: center; padding: 20px; font-size: 14px; color: #777; border-top: 1px solid #eee; background: #fafafa; }
  </style>
</head>
<body>

  <div class="container">
    <div class="header">
      <h1>CodeFormers</h1>
      <p>Registration Successful!</p>
    </div>

    <div class="content">
      <h2>Hello ${name},</h2>
      <p>Congratulations! Your registration for <strong>CodeFormers</strong> has been confirmed. Get ready to dive into a world of innovation, code, and creativity!</p>

      <div class="info-box">
        <h3>📋 Event Details:</h3>
        <div class="info-item">
          <span>📅</span> <strong>Date:</strong> 30 April 2025
        </div>
        <div class="info-item">
          <span>⏰</span> <strong>Time:</strong> 01:45 PM onwards
        </div>
        <div class="info-item">
          <span>📍</span> <strong>Venue:</strong> CL1
        </div>
      </div>

      <div class="notice">
        <h3>⚡ Important Reminder</h3>
        <p>Please make sure to arrive by <strong>1:45 PM</strong> to complete check-in and grab the best spot!</p>
      </div>

      <p>Expect hands-on sessions, exciting projects, and the chance to meet passionate coders like yourself. 🚀</p>

      <a 
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=CodeFormers+Event&dates=20250430T043000Z/20250430T063000Z&details=Be+part+of+CodeFormers!&location=CL1&sf=true&output=xml" 
        class="cta-button" 
        target="_blank" 
        rel="noopener noreferrer">
        Add to Calendar
      </a>

    </div>

    <div class="footer">
      <p>© 2025 Science and Technology Club | All rights reserved.</p>
    </div>
  </div>

</body>
</html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      user.emailSent = true;
      await user.save();

      return res.status(201).json({ success: true, message: 'Registration successful, confirmation email was sent.', data: user });
    } catch (mailError) {
      console.error('Email failed to send:', mailError.message);

      return res.status(201).json({ success: true, message: 'Registered, but email failed to send. Please retry later', data: user });
    }

    // res.status(201).json({ success: true, data: newEntry });

  } catch (error) {
    console.error('Error in registration:', error);
    res.status(400).json({ success: false, error: error.message });
  }
}
