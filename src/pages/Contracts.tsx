import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';

export const Contracts = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6">
            Windrush Compensation Scheme
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Understanding your rights and the compensation process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6 flex items-center">
              <FileText className="mr-2 h-6 w-6" />
              Key Information
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 mt-1" />
                <span>
                  The scheme compensates individuals who have suffered losses due to being unable to prove their right to live in the UK.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 mt-1" />
                <span>
                  Claims can be made for various losses including employment, housing, health, education, and general compensation for impact on life.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-2 mt-1" />
                <span>
                  There is no deadline for applications to the Windrush Compensation Scheme.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6">
              Liverpool Support Services
            </h2>
            <div className="space-y-6">
              <p>
                The Liverpool City Region has dedicated support services for Windrush generation residents and their families:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free legal advice clinics</li>
                <li>Document verification service</li>
                <li>Application support workshops</li>
                <li>Community outreach programs</li>
                <li>Mental health and wellbeing support</li>
              </ul>
              <p className="mt-4">
                Contact the Liverpool Windrush Support Center for more information and assistance with your compensation claim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};