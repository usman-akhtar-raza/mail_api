import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';

@Injectable()
export class mailerApiService {
  constructor(private readonly mailerService: NestMailerService) {}

  async sendEmail(to: string, message: string, senderName: string) {
    console.log('service ma hain', to, message, senderName);
    try {
      console.log('try block  ma hain', to, message, senderName ,process.env.password);

      await this.mailerService.sendMail({
        to,
        subject: 'mail send by Locamate',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f7f7f7; border-radius: 10px;">
            <div style="background-color: #4A90E2; padding: 20px; border-radius: 10px 10px 0 0; color: white;">
            <h1 style="margin: 0;">Welcome to Locamates!</h1>
            </div>

            <div style="background-color: #ffffff; padding: 20px; border-radius: 0 0 10px 10px;">
            <p>Sender Name <strong>${senderName}</strong>,</p>

            <p>We're excited to welcome you to <strong>Locamates</strong> — your smart assistant for managing and pre-planning meetups efficiently.</p>

            <h3 style="color: #4A90E2;">Here’s what you can do with locamates:</h3>
            <ul>
                <li>📅 <strong>Pre-plan your meetings</strong> and avoid last-minute confusion</li>
                <li>🔕 <strong>Auto-silence your mobile</strong> during scheduled meetings</li>
                <li>🚨 <strong>Send and receive alerts</strong> to stay on track</li>
            </ul>

            <p>We’re here to help you stay organized and focused during your meetings. Let’s make every meetup count!</p>
            <h3>${message}</h3>

            <p style="margin-top: 30x;">If you have any questions, feel free to reply to this email. We'd love to hear from you.</p>

            <p>Cheers,<br><strong>The Locamates Team</strong></p>
            </div>
            </div>
            `,
      });
      console.log('mail send ho gaoi');
      return { success: true };
    } catch (error) {
      return { message: error.message, success: false };
    }
  }

  // async sendOtpEmail(to: string, otp: string, userName?: string) {
  //   await this.mailerService.sendMail({
  //     to,
  //     subject: 'Your OTP Code',
  //     html: `
  //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  //       <h1 style="color:rgb(162, 199, 77);">Welcome to Fitlit!</h1>
  //       <p>Hi ${userName},</p>
  //       <p>Thank you for joining Fitlit! We're excited to have you as part of our  community.</p>
  //       <p>With Fitlit, you can:</p>
  //       <ul>
  //         <li>Track your daily workouts</li>
  //         <li>Set fitness goals</li>
  //         <li>Connect with other fitness enthusiasts</li>
  //         <li>heres your otp ${otp}</li>

  //       </ul>
  //       <p>If you have any questions, feel free to reply to this email.</p>
  //       <p>Happy fitness journey!</p>
  //       <p>The Fitlit Team</p>
  //     </div>
  //     `,
  //   });
  // }
}
