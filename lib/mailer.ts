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

/* ---------- OTP MAIL ---------- */
export async function sendOtpMail(to: string, otp: string) {
  await transporter.sendMail({
    from: `"SNT Club" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Your OTP Verification Code | SNT Club",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light">
      </head>
      <body style="margin:0;padding:0;background-color:#eef0f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#eef0f8;padding:48px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:480px;">

                <!-- Logo bar -->
                <tr>
                  <td style="padding-bottom:20px;text-align:center;">
                    <div style="display:inline-block;background-color:#0A146E;border-radius:12px;padding:8px 20px;">
                      <span style="font-size:13px;font-weight:800;color:#ffffff;letter-spacing:2px;text-transform:uppercase;">S&amp;T CLUB</span>
                      <span style="font-size:13px;font-weight:400;color:rgba(255,255,255,0.6);margin-left:6px;letter-spacing:1px;">SKIT</span>
                    </div>
                  </td>
                </tr>

                <!-- Card -->
                <tr>
                  <td style="background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(10,20,110,0.10);">

                    <!-- Header stripe -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="background:linear-gradient(135deg,#0A146E 0%,#1a27b0 100%);padding:36px 40px 32px;">
                          <div style="font-size:11px;font-weight:700;color:#EE4B76;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">Verification</div>
                          <div style="font-size:26px;font-weight:800;color:#ffffff;line-height:1.2;">One-Time Password</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Body -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding:36px 40px;">
                          <p style="font-size:15px;color:#475569;margin:0 0 28px 0;line-height:1.7;">
                            Use the code below to verify your identity with <strong style="color:#0A146E;">SNT Club</strong>. Do not share it with anyone.
                          </p>

                          <!-- OTP box -->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                              <td align="center" style="padding-bottom:28px;">
                                <div style="background:linear-gradient(135deg,#f0f3ff 0%,#e8ecff 100%);border:2px solid #c7d0f8;border-radius:14px;padding:24px 40px;display:inline-block;">
                                  <div style="font-family:'Courier New',Courier,monospace;font-size:44px;font-weight:900;letter-spacing:12px;color:#0A146E;line-height:1;">${otp}</div>
                                </div>
                              </td>
                            </tr>
                          </table>

                          <!-- Expiry notice -->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                              <td align="center" style="background-color:#fff8ed;border:1px solid #fed7aa;border-radius:10px;padding:12px 20px;">
                                <p style="font-size:13px;color:#92400e;margin:0;">⏱ This code expires in <strong>5 minutes</strong></p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:24px 0 0 0;text-align:center;">
                    <p style="font-size:12px;color:#94a3b8;margin:0;">
                      <strong style="color:#0A146E;">Science &amp; Technology Club</strong> · SKIT Jaipur
                    </p>
                    <p style="font-size:11px;color:#cbd5e1;margin:4px 0 0 0;">
                      If you didn't request this, you can safely ignore this email.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });
}

/* ---------- REGISTRATION SUCCESS MAIL ---------- */
export async function sendRegistrationMail(
  to: string,
  name: string,
  username: string,
  password: string
) {
  await transporter.sendMail({
    from: `"SNT Club" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Welcome to SNT Club — Registration Successful",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light">
      </head>
      <body style="margin:0;padding:0;background-color:#eef0f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#eef0f8;padding:48px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:520px;">

                <!-- Logo bar -->
                <tr>
                  <td style="padding-bottom:20px;text-align:center;">
                    <div style="display:inline-block;background-color:#0A146E;border-radius:12px;padding:8px 20px;">
                      <span style="font-size:13px;font-weight:800;color:#ffffff;letter-spacing:2px;text-transform:uppercase;">S&amp;T CLUB</span>
                      <span style="font-size:13px;font-weight:400;color:rgba(255,255,255,0.6);margin-left:6px;letter-spacing:1px;">SKIT</span>
                    </div>
                  </td>
                </tr>

                <!-- Card -->
                <tr>
                  <td style="background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(10,20,110,0.10);">

                    <!-- Header -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="background:linear-gradient(135deg,#0A146E 0%,#1a27b0 100%);padding:36px 40px 32px;">
                          <div style="font-size:11px;font-weight:700;color:#EE4B76;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;">Account Created</div>
                          <div style="font-size:26px;font-weight:800;color:#ffffff;line-height:1.2;">Welcome aboard! 🎉</div>
                        </td>
                      </tr>
                    </table>

                    <!-- Body -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding:36px 40px 28px;">

                          <p style="font-size:17px;font-weight:700;color:#0A146E;margin:0 0 8px 0;">Hi ${name},</p>
                          <p style="font-size:15px;color:#475569;margin:0 0 28px 0;line-height:1.7;">
                            Your registration with <strong style="color:#0A146E;">Science &amp; Technology Club (SNT Club)</strong> is confirmed. Here are your login credentials for the portal.
                          </p>

                          <!-- Credentials card -->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:linear-gradient(135deg,#f0f3ff 0%,#e8ecff 100%);border:1px solid #c7d0f8;border-radius:14px;margin-bottom:28px;">
                            <tr>
                              <td style="padding:24px 28px;">
                                <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#64748b;margin-bottom:16px;">🔐 Login Credentials</div>
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td style="padding-bottom:12px;">
                                      <div style="font-size:12px;color:#64748b;margin-bottom:4px;font-weight:600;">USERNAME</div>
                                      <div style="font-family:'Courier New',Courier,monospace;font-size:16px;font-weight:700;color:#0A146E;background-color:#ffffff;border:1px solid #c7d0f8;border-radius:8px;padding:10px 14px;">${username}</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div style="font-size:12px;color:#64748b;margin-bottom:4px;font-weight:600;">PASSWORD</div>
                                      <div style="font-family:'Courier New',Courier,monospace;font-size:16px;font-weight:700;color:#0A146E;background-color:#ffffff;border:1px solid #c7d0f8;border-radius:8px;padding:10px 14px;">${password}</div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                          <!-- Divider -->
                          <div style="border-top:1px solid #f1f5f9;padding-top:24px;">
                            <p style="font-size:14px;font-weight:700;color:#0A146E;margin:0 0 4px 0;">All the best! 🚀</p>
                            <p style="font-size:13px;color:#64748b;margin:0;"><strong style="color:#0A146E;">SNT Club Team</strong> · Science &amp; Technology Club</p>
                          </div>

                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:24px 0 0 0;text-align:center;">
                    <p style="font-size:12px;color:#94a3b8;margin:0;">
                      <strong style="color:#0A146E;">Science &amp; Technology Club</strong> · SKIT Jaipur
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });
}

/* ---------- EVENT CONFIRMATION MAIL ---------- */
export async function sendEventConfirmationMail(
  to: string,
  name: string,
  eventTitle: string
) {
  const text =
    `Hi ${name},\n\n` +
    `Your registration for ${eventTitle} is confirmed.\n\n` +
    `Event: ${eventTitle}\n` +
    `Date: August 26, 2026\n` +
    `Time: 10:00 AM - 1:00 PM IST\n` +
    `Venue: SKIT Campus, Jaipur\n\n` +
    `No further action is required. Please keep this email for your reference.\n\n` +
    `Regards,\n` +
    `Science & Technology Club, SKIT Jaipur\n` +
    `https://snt-club.vercel.app`;

  await transporter.sendMail({
    from: `"Science & Technology Club, SKIT" <${process.env.EMAIL_USER}>`,
    to,
    replyTo: process.env.EMAIL_USER,
    subject: `Registration Confirmed: ${eventTitle}`,
    text,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
      </head>
      <body style="margin:0;padding:0;background-color:#f2f3f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f2f3f5;padding:40px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background-color:#ffffff;border:1px solid #e4e7eb;border-radius:8px;overflow:hidden;">

                <!-- Header -->
                <tr>
                  <td style="background-color:#0A146E;padding:24px 32px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="vertical-align:middle;">
                          <span style="font-size:16px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">Science &amp; Technology Club</span>
                          <span style="font-size:13px;color:rgba(255,255,255,0.65);margin-left:8px;">SKIT Jaipur</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Confirmation strip -->
                <tr>
                  <td style="padding:28px 32px 8px;">
                    <div style="font-size:13px;font-weight:600;color:#0f7b3f;text-transform:uppercase;letter-spacing:0.6px;margin-bottom:6px;">Registration Confirmed</div>
                    <div style="font-size:22px;font-weight:700;color:#0A146E;line-height:1.3;">${eventTitle}</div>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:16px 32px 8px;">
                    <p style="font-size:15px;color:#333333;margin:0 0 16px 0;line-height:1.6;">
                      Hi ${name},
                    </p>
                    <p style="font-size:15px;color:#333333;margin:0 0 24px 0;line-height:1.6;">
                      Your registration for <strong style="color:#0A146E;">${eventTitle}</strong>, organized by the Science &amp; Technology Club, SKIT, has been received and confirmed. The event details are below.
                    </p>
                  </td>
                </tr>

                <!-- Details table -->
                <tr>
                  <td style="padding:0 32px 8px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e4e7eb;border-radius:6px;">
                      <tr>
                        <td style="padding:14px 20px;border-bottom:1px solid #eef0f2;width:110px;font-size:13px;color:#6b7280;font-weight:600;">Event</td>
                        <td style="padding:14px 20px;border-bottom:1px solid #eef0f2;font-size:14px;color:#1a1a1a;font-weight:600;">${eventTitle}</td>
                      </tr>
                      <tr>
                        <td style="padding:14px 20px;border-bottom:1px solid #eef0f2;font-size:13px;color:#6b7280;font-weight:600;">Date</td>
                        <td style="padding:14px 20px;border-bottom:1px solid #eef0f2;font-size:14px;color:#1a1a1a;">August 26, 2026</td>
                      </tr>
                      <tr>
                        <td style="padding:14px 20px;border-bottom:1px solid #eef0f2;font-size:13px;color:#6b7280;font-weight:600;">Time</td>
                        <td style="padding:14px 20px;border-bottom:1px solid #eef0f2;font-size:14px;color:#1a1a1a;">10:00 AM &ndash; 1:00 PM IST</td>
                      </tr>
                      <tr>
                        <td style="padding:14px 20px;font-size:13px;color:#6b7280;font-weight:600;">Venue</td>
                        <td style="padding:14px 20px;font-size:14px;color:#1a1a1a;">SKIT Campus, Jaipur</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Note -->
                <tr>
                  <td style="padding:20px 32px 28px;">
                    <p style="font-size:14px;color:#333333;margin:0 0 16px 0;line-height:1.6;">
                      No further action is required. Please keep this email for your reference and arrive a few minutes early.
                    </p>
                    <p style="font-size:14px;color:#333333;margin:0;line-height:1.6;">
                      Regards,<br>
                      <strong style="color:#0A146E;">Science &amp; Technology Club</strong>, SKIT Jaipur
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color:#f7f8fa;border-top:1px solid #e4e7eb;padding:18px 32px;">
                    <p style="font-size:12px;color:#8a919e;margin:0;line-height:1.5;">
                      This is an automated confirmation from the Science &amp; Technology Club, SKIT Jaipur.
                      Visit <a href="https://snt-club.vercel.app" style="color:#0A146E;text-decoration:none;">snt-club.vercel.app</a>.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });
}