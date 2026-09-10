// Khmer Buddhist Era and Zodiac Utilities

export interface KhmerZodiacInfo {
  adYear: number;
  beYear: number;
  beYearKhmer: string;
  animal: {
    khmer: string;
    english: string;
    transcription: string;
    emoji: string;
  };
  sak: {
    khmer: string;
    english: string;
    number: number;
  };
  dayOfWeekKhmer: string;
  monthKhmer: string;
  formattedKhmer: string;
}

export const KHMER_ANIMALS = [
  { khmer: 'ជូត', transcription: 'Chhor', english: 'Rat', emoji: '🐀' },
  { khmer: 'ឆ្លូវ', transcription: 'Chhlov', english: 'Ox', emoji: '🐂' },
  { khmer: 'ខាល', transcription: 'Khor', english: 'Tiger', emoji: '🐅' },
  { khmer: 'ថោះ', transcription: 'Thoh', english: 'Rabbit', emoji: '🐇' },
  { khmer: 'រោង', transcription: 'Rong', english: 'Dragon', emoji: '🐉' },
  { khmer: 'ម្សាញ់', transcription: 'Mhasanh', english: 'Snake', emoji: '🐍' },
  { khmer: 'មមី', transcription: 'Momee', english: 'Horse', emoji: '🐎' },
  { khmer: 'មមែ', transcription: 'Momea', english: 'Goat', emoji: '🐐' },
  { khmer: 'វក', transcription: 'Vork', english: 'Monkey', emoji: '🐒' },
  { khmer: 'រកា', transcription: 'Roka', english: 'Rooster', emoji: '🐓' },
  { khmer: 'ច', transcription: 'Chaw', english: 'Dog', emoji: '🐕' },
  { khmer: 'កុរ', transcription: 'Kor', english: 'Pig', emoji: '🐖' },
];

export const KHMER_SAK = [
  { khmer: 'សំរឹទ្ធិស័ក', english: 'Samriddhisak', number: 10 }, // remainder 0
  { khmer: 'ឯកស័ក', english: 'Ekasak', number: 1 },           // remainder 1
  { khmer: 'ទោស័ក', english: 'Dosak', number: 2 },            // remainder 2
  { khmer: 'ត្រីស័ក', english: 'Treisak', number: 3 },          // remainder 3
  { khmer: 'ចត្វាស័ក', english: 'Chatvasak', number: 4 },       // remainder 4
  { khmer: 'បញ្ចស័ក', english: 'Panjasak', number: 5 },        // remainder 5
  { khmer: 'ឆស័ក', english: 'Chhasak', number: 6 },           // remainder 6
  { khmer: 'សប្តស័ក', english: 'Saptasak', number: 7 },         // remainder 7
  { khmer: 'អដ្ឋស័ក', english: 'Atthasak', number: 8 },         // remainder 8
  { khmer: 'នព្វស័ក', english: 'Noppasak', number: 9 },         // remainder 9
];

export const KHMER_DAYS = [
  'ថ្ងៃអាទិត្យ', // Sunday
  'ថ្ងៃច័ន្ទ',    // Monday
  'ថ្ងៃអង្គារ',   // Tuesday
  'ថ្ងៃពុធ',     // Wednesday
  'ថ្ងៃព្រហស្បតិ៍', // Thursday
  'ថ្ងៃសុក្រ',    // Friday
  'ថ្ងៃសៅរ៍',    // Saturday
];

export const KHMER_MONTHS = [
  'មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា',
  'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'
];

import { toKhmerDigits } from './khmer-converter';

/**
 * Calculates Buddhist Era (ព.ស.), Khmer Animal Zodiac and Sak for a given date
 */
export function getKhmerZodiacInfo(dateInput: Date | string): KhmerZodiacInfo {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
  const adYear = date.getFullYear();
  const month = date.getMonth(); // 0-indexed (3 is April)
  const day = date.getDate();

  // In Cambodian tradition, Buddhist Era (ព.ស.) turns over after Vesak / Khmer New Year (mid-April, ~April 14).
  // Standard AD to BE offset is +543 (prior to Vesak) or +544 (after Vesak) in Khmer civil tradition;
  // Official Buddhist Era calendar year is AD + 544 after Khmer New Year.
  const isAfterKhmerNewYear = month > 3 || (month === 3 && day >= 14);
  const beYear = adYear + (isAfterKhmerNewYear ? 544 : 543);

  // Zodiac animal: In 2024 (after April), it's Dragon (រោង).
  // Formula based on reference: 4 AD was Rat (ជូត)
  // Check index relative to 4 AD
  const animalYear = isAfterKhmerNewYear ? adYear : adYear - 1;
  const animalIndex = ((animalYear - 4) % 12 + 12) % 12;
  const animal = KHMER_ANIMALS[animalIndex];

  // Sak (era cycle 1-10):
  // Buddhist Era year determines the Sak. (beYear % 10)
  const sakIndex = beYear % 10;
  const sak = KHMER_SAK[sakIndex];

  const dayOfWeekKhmer = KHMER_DAYS[date.getDay()];
  const monthKhmer = KHMER_MONTHS[month];

  const beYearKhmer = toKhmerDigits(beYear);
  const formattedKhmer = `${dayOfWeekKhmer} ទី${toKhmerDigits(day)} ខែ${monthKhmer} ឆ្នាំ${toKhmerDigits(adYear)} (ព.ស. ${beYearKhmer}) ឆ្នាំ${animal.khmer} ${sak.khmer}`;

  return {
    adYear,
    beYear,
    beYearKhmer,
    animal,
    sak,
    dayOfWeekKhmer,
    monthKhmer,
    formattedKhmer,
  };
}
