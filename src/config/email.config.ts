import { EmailConfig } from '../services/email/types';

export const emailConfig: EmailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cnf63v5',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kwgh4kp',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 's_OvNibJhRM9dbcrr',
};