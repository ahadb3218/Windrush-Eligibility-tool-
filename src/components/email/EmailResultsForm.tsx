import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Download, Mail } from 'lucide-react';
import EmailService from '../../services/email/emailService';
import { emailConfig } from '../../config/email.config';
import { QuizResponse } from '../../services/email/types';
import { generateAndDownloadPDF } from '../../utils/pdfGenerator';

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type EmailFormData = z.infer<typeof emailSchema>;

interface EmailResultsFormProps {
  result: string;
  responses: QuizResponse[];
}

export const EmailResultsForm: React.FC<EmailResultsFormProps> = ({
  result,
  responses,
}) => {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const emailService = new EmailService(emailConfig);

  const onSubmit = async (data: EmailFormData) => {
    try {
      setIsSending(true);
      setError(null);
      setSuccess(false);

      console.log('Sending results to:', data.email); // Debug log

      const formattedResponses = responses
        .map(r => `${r.question}: ${r.answer}`)
        .join('\n');

      await emailService.sendQuizResults(
        data.email,
        result,
        formattedResponses
      );

      setSuccess(true);
      reset();
    } catch (err) {
      console.error('Form submission error:', err); // Debug log
      setError(err instanceof Error ? err.message : 'Failed to send email');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => generateAndDownloadPDF(result, responses)}
        className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
      >
        <Download className="h-5 w-5" />
        Download Results as PDF
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-900 text-gray-400">Or send via email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
            placeholder="Enter your email address"
            disabled={isSending}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {error && (
          <div className="p-3 bg-red-900/50 text-red-300 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-green-900/50 text-green-300 rounded-md text-sm">
            Results sent successfully! Please check your email inbox (and spam folder if not received).
          </div>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSending ? (
            <>
              <Loader2 className="animate-spin h-4 w-4" />
              Sending...
            </>
          ) : (
            <>
              <Mail className="h-5 w-5" />
              Send Results to Email
            </>
          )}
        </button>
      </form>
    </div>
  );
};