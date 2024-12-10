import { jsPDF } from 'jspdf';
import { QuizResponse } from '../services/email/types';

export const generateAndDownloadPDF = (result: string, responses: QuizResponse[]): void => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.text('Windrush Eligibility Assessment Results', 20, 20);
  
  // Add result
  doc.setFontSize(16);
  doc.text('Result:', 20, 40);
  doc.setFontSize(14);
  doc.text(result, 20, 50);
  
  // Add responses
  doc.setFontSize(16);
  doc.text('Your Responses:', 20, 70);
  
  let yPosition = 80;
  responses.forEach((response, index) => {
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFontSize(12);
    doc.text(`Q${index + 1}: ${response.question}`, 20, yPosition);
    yPosition += 10;
    doc.text(`A: ${response.answer}`, 30, yPosition);
    yPosition += 20;
  });
  
  // Save the PDF
  doc.save('windrush-assessment-results.pdf');
};