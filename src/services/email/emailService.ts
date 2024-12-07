import emailjs from '@emailjs/browser';
import { EmailConfig } from './types';

class EmailService {
  private config: EmailConfig;

  constructor(config: EmailConfig) {
    this.config = config;
  }

  async sendEmail(to: string, subject: string, content: string): Promise<void> {
    const templateParams = {
      to_email: to,
      subject,
      content,
    };

    try {
      await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams,
        this.config.publicKey
      );
    } catch (error) {
      throw new Error('Failed to send email. Please try again later.');
    }
  }

  async sendQuizResults(to: string, result: string, responses: string): Promise<void> {
    const templateParams = {
      to_email: to,
      result,
      responses,
    };

    try {
      await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams,
        this.config.publicKey
      );
    } catch (error) {
      throw new Error('Failed to send quiz results. Please try again later.');
    }
  }
}

export default EmailService;