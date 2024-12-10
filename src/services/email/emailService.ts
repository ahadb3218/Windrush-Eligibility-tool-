import emailjs from '@emailjs/browser';
import { EmailConfig } from './types';

class EmailService {
  private config: EmailConfig;

  constructor(config: EmailConfig) {
    this.config = config;
    emailjs.init(this.config.publicKey);
  }

  async sendQuizResults(to: string, result: string, responses: string): Promise<void> {
    const templateParams = {
      to_email: to,
      result: result,
      responses: responses,
      from_name: 'Liverpool Windrush Support',
      reply_to: 'liverpoolwindrush@gmail.com',
      subject: 'Your Windrush Eligibility Assessment Results',
      message: `
Dear User,

Thank you for completing the Windrush Eligibility Assessment.

Your Result:
${result}

Your Responses:
${responses}

If you have any questions or need further assistance, please don't hesitate to contact us at liverpoolwindrush@gmail.com.

Best regards,
Liverpool Windrush Support Team
      `.trim()
    };

    try {
      console.log('Sending email to:', to); // Debug log
      const response = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      );
      
      console.log('Email sent successfully:', response); // Debug log
      
      if (response.status !== 200) {
        throw new Error(`Failed to send email. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Email sending error:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}

export default EmailService;