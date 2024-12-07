export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface QuizResponse {
  question: string;
  answer: string;
}