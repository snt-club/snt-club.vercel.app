import dbConnect from '@/lib/mongodb';
import Registration from '@/lib/models/Registration';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const newEntry = await Registration.create(req.body);

    const { name, email } = req.body;

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
      subject: 'Tech Talk With Alumni 3.0 - Registration Confirmation',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Tech Talk With Alumni 3.0 - Registration Confirmation</title>
          <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f3f8;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
                color: white;
                padding: 20px;
                border-radius: 6px 6px 0 0;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            .header:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('/api/placeholder/600/150') no-repeat center center;
                opacity: 0.1;
                z-index: 0;
            }
            .header h1 {
                position: relative;
                z-index: 1;
                margin: 0;
                font-size: 28px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .header p {
                position: relative;
                z-index: 1;
                margin: 10px 0 0;
                font-size: 16px;
            }
            .content {
                padding: 25px;
            }
            .event-details {
                background-color: #f5f8ff;
                border-left: 4px solid #4b6cb7;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
            }
            .important-notice {
                background-color: #fffbf0;
                border-left: 4px solid #ffc107;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
            }
            .detail-item {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }
            .detail-icon {
                margin-right: 12px;
                color: #4b6cb7;
                font-weight: bold;
                font-size: 18px;
                min-width: 24px;
                text-align: center;
            }
            .footer {
                text-align: center;
                padding: 15px;
                color: #666;
                font-size: 14px;
                border-top: 1px solid #eee;
            }
            .social-icons {
                margin-top: 15px;
            }
            .social-icons span {
                display: inline-block;
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                background-color: #4b6cb7;
                color: white;
                border-radius: 50%;
                margin: 0 5px;
            }
            .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
                color: white;
                padding: 12px 25px;
                text-decoration: none;
                border-radius: 4px;
                font-weight: bold;
                margin: 20px 0;
                text-align: center;
            }
            .tech-decoration {
                height: 5px;
                background: linear-gradient(90deg, #4b6cb7, #182848, #4b6cb7);
                margin: 20px 0;
                border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Tech Talk With Alumni 3.0</h1>
              <p>Registration Confirmed!</p>
            </div>
            <div class="content">
              <h2>Hello ${name},</h2>
              <p>Your registration for <strong>Tech Talk With Alumni 3.0</strong> has been successfully confirmed! We're excited to have you join us for this inspiring event featuring accomplished alumni from the tech industry.</p>
              <div class="tech-decoration"></div>
              <div class="event-details">
                <h3>Event Details:</h3>
                <div class="detail-item">
                  <div class="detail-icon">📅</div>
                  <div><strong>Date:</strong> 9th October 2024</div>
                </div>
                <div class="detail-item">
                  <div class="detail-icon">⏰</div>
                  <div><strong>Time:</strong> 1:45 PM onwards</div>
                </div>
                <div class="detail-item">
                  <div class="detail-icon">📍</div>
                  <div><strong>Venue:</strong> Gyan Mandir Auditorium</div>
                </div>
              </div>
              <div class="important-notice">
                <h3>⚠️ Important Notice</h3>
                <p>Please arrive at least <strong>15 minutes early</strong> (by 1:30 PM) to complete check-in formalities and secure your seat.</p>
              </div>
              <p>During this exclusive session, our distinguished alumni will share insights on emerging tech trends, career opportunities, and their personal journeys in the industry.</p>
              <a
  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Alumni+Session+Event&dates=20250425T100000Z/20250425T113000Z&details=Join+us+for+an+insightful+alumni+session.&location=Online&sf=true&output=xml"
  class="cta-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Add to Calendar
</a>
              <div class="tech-decoration"></div>
              <p>If you have any questions or need to update your registration details, please reply to this email or contact our event coordinator at <strong>techtalks@stclub.edu</strong>.</p>
              <p>We look forward to seeing you there!</p>
              <p>Regards,<br>Science and Technology Club</p>
            </div>
            <div class="footer">
              <p>© 2024 Science and Technology Club. All rights reserved.</p>
              <div class="social-icons">
                <span>f</span>
                <span>in</span>
                <span>ig</span>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    // 4. Send success response
    res.status(201).json({ success: true, data: newEntry });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(400).json({ success: false, error: error.message });
  }
}
