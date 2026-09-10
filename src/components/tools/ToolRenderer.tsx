'use client';

import React from 'react';
import { KhmerNumberConverter } from './khmer/KhmerNumberConverter';
import { KhmerTextUtilities } from './khmer/KhmerTextUtilities';
import { KhmerDateConverter } from './khmer/KhmerDateConverter';
import { KhmerUnicodeSorter } from './khmer/KhmerUnicodeSorter';
import { AgeCalculator } from './calculator/AgeCalculator';
import { PercentageCalculator } from './calculator/PercentageCalculator';
import { BmiCalculator } from './calculator/BmiCalculator';
import { LoanCalculator } from './calculator/LoanCalculator';
import { DateCalculator } from './calculator/DateCalculator';
import { JsonFormatter } from './developer/JsonFormatter';
import { UuidGenerator } from './developer/UuidGenerator';
import { Base64Tool } from './developer/Base64Tool';
import { JwtDecoder } from './developer/JwtDecoder';
import { UrlEncoder } from './developer/UrlEncoder';
import { TimestampConverter } from './developer/TimestampConverter';
import { ColorConverter } from './developer/ColorConverter';
import { QrGenerator } from './developer/QrGenerator';
import { PasswordGenerator } from './developer/PasswordGenerator';

interface ToolRendererProps {
  slug: string;
}

export function ToolRenderer({ slug }: ToolRendererProps) {
  switch (slug) {
    // Khmer Tools
    case 'khmer-number-converter':
      return <KhmerNumberConverter />;
    case 'khmer-text-utilities':
      return <KhmerTextUtilities />;
    case 'khmer-date-converter':
      return <KhmerDateConverter />;
    case 'khmer-unicode-sorter':
      return <KhmerUnicodeSorter />;

    // Calculators
    case 'age-calculator':
      return <AgeCalculator />;
    case 'percentage-calculator':
      return <PercentageCalculator />;
    case 'bmi-calculator':
      return <BmiCalculator />;
    case 'loan-calculator':
      return <LoanCalculator />;
    case 'date-calculator':
      return <DateCalculator />;

    // Developer Tools
    case 'json-formatter':
      return <JsonFormatter />;
    case 'uuid-generator':
      return <UuidGenerator />;
    case 'base64-encoder-decoder':
      return <Base64Tool />;
    case 'jwt-decoder':
      return <JwtDecoder />;
    case 'url-encoder-decoder':
      return <UrlEncoder />;
    case 'timestamp-converter':
      return <TimestampConverter />;
    case 'color-converter':
      return <ColorConverter />;
    case 'qr-code-generator':
      return <QrGenerator />;
    case 'password-generator':
      return <PasswordGenerator />;

    default:
      return (
        <div className="p-8 text-center text-slate-500">
          Tool implementation coming soon.
        </div>
      );
  }
}
