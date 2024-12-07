import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import EmailService from '../../services/email/emailService';
import { emailConfig } from '../../config/email.config';
import { QuizResponse } from '../../services/email/types';

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
      setError(err instanceof Error ? err.message : 'Failed to send email');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your email address"
            disabled={isSending}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-green-50 text-green-700 rounded-md text-sm">
            Results sent successfully! Check your email.
          </div>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSending ? (
            <>
              <Loader2 className="animate-spin h-4 w-4" />
              Sending...
            </>
          ) : (
            'Send Results to Email'
          )}
        </button>
      </form>
    </div>
  );
};