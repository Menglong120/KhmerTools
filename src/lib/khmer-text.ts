// Khmer Text, ZWSP, and Unicode Utilities

export interface KhmerTextStats {
  totalChars: number;
  totalCharsNoSpaces: number;
  khmerChars: number;
  zwspCount: number;
  wordCount: number;
  lineCount: number;
  consonantsCount: number;
  dependentVowelsCount: number;
  independentVowelsCount: number;
  coengCount: number; // Subscripts (្)
  diacriticsCount: number;
  khmerDigitsCount: number;
  punctuationCount: number;
  latinCharsCount: number;
}

// Khmer Unicode Ranges: 0x1780 - 0x17FF, Khmer Symbols: 0x19E0 - 0x19FF
export const KHMER_CONSONANTS_REGEX = /[\u1780-\u17A2]/g;
export const KHMER_INDEPENDENT_VOWELS_REGEX = /[\u17A3-\u17B3]/g;
export const KHMER_DEPENDENT_VOWELS_REGEX = /[\u17B4-\u17C5]/g;
export const KHMER_COENG = '\u17D2'; // ្
export const KHMER_DIACRITICS_REGEX = /[\u17C6-\u17D1\u17D3]/g;
export const KHMER_DIGITS_REGEX = /[\u17E0-\u17E9]/g;
export const KHMER_PUNCTUATION_REGEX = /[\u17D4-\u17DA\u17DC\u17DD]/g;
export const ZWSP = '\u200B';

export function analyzeKhmerText(text: string): KhmerTextStats {
  if (!text) {
    return {
      totalChars: 0,
      totalCharsNoSpaces: 0,
      khmerChars: 0,
      zwspCount: 0,
      wordCount: 0,
      lineCount: 0,
      consonantsCount: 0,
      dependentVowelsCount: 0,
      independentVowelsCount: 0,
      coengCount: 0,
      diacriticsCount: 0,
      khmerDigitsCount: 0,
      punctuationCount: 0,
      latinCharsCount: 0,
    };
  }

  const totalChars = text.length;
  const totalCharsNoSpaces = text.replace(/[\s\u200B]/g, '').length;
  const zwspMatches = text.match(/\u200B/g);
  const zwspCount = zwspMatches ? zwspMatches.length : 0;

  const consonantsMatches = text.match(KHMER_CONSONANTS_REGEX);
  const consonantsCount = consonantsMatches ? consonantsMatches.length : 0;

  const depVowelsMatches = text.match(KHMER_DEPENDENT_VOWELS_REGEX);
  const dependentVowelsCount = depVowelsMatches ? depVowelsMatches.length : 0;

  const indVowelsMatches = text.match(KHMER_INDEPENDENT_VOWELS_REGEX);
  const independentVowelsCount = indVowelsMatches ? indVowelsMatches.length : 0;

  const coengMatches = text.match(new RegExp(KHMER_COENG, 'g'));
  const coengCount = coengMatches ? coengMatches.length : 0;

  const diacriticsMatches = text.match(KHMER_DIACRITICS_REGEX);
  const diacriticsCount = diacriticsMatches ? diacriticsMatches.length : 0;

  const digitsMatches = text.match(KHMER_DIGITS_REGEX);
  const khmerDigitsCount = digitsMatches ? digitsMatches.length : 0;

  const punctuationMatches = text.match(KHMER_PUNCTUATION_REGEX);
  const punctuationCount = punctuationMatches ? punctuationMatches.length : 0;

  const khmerCharMatches = text.match(/[\u1780-\u17FF\u19E0-\u19FF]/g);
  const khmerChars = khmerCharMatches ? khmerCharMatches.length : 0;

  const latinMatches = text.match(/[a-zA-Z]/g);
  const latinCharsCount = latinMatches ? latinMatches.length : 0;

  // Approximate words: splitting by space, ZWSP, or standard punctuation
  const words = text
    .split(/[\s\u200B\u17D4\u17D5.,!?]+/g)
    .filter((w) => w.trim().length > 0);
  const wordCount = words.length;

  const lines = text.split(/\r\n|\r|\n/);
  const lineCount = lines.length;

  return {
    totalChars,
    totalCharsNoSpaces,
    khmerChars,
    zwspCount,
    wordCount,
    lineCount,
    consonantsCount,
    dependentVowelsCount,
    independentVowelsCount,
    coengCount,
    diacriticsCount,
    khmerDigitsCount,
    punctuationCount,
    latinCharsCount,
  };
}

/**
 * Remove all Zero-Width Spaces (ZWSP \u200B) from a string
 */
export function removeZWSP(text: string): string {
  return text.replace(/\u200B/g, '');
}

/**
 * Replace ZWSP with a visible marker like "|" or [SPACE] for debugging
 */
export function highlightZWSP(text: string, marker: string = '|'): string {
  return text.replace(/\u200B/g, marker);
}

/**
 * Normalizes Khmer text Unicode sequence:
 * Unicode specification for Khmer defines:
 * Base Consonant -> [Coeng + Subscript Consonant/Independent Vowel]* -> [Dependent Vowel] -> [Diacritics]
 * Many old keyboards or copy-pasted texts produce:
 * Base Consonant + Dependent Vowel + Coeng (causing rendering breakages or ugly square boxes).
 */
export function normalizeKhmerUnicode(text: string): string {
  if (!text) return '';

  let normalized = text.normalize('NFC');

  // Fix inverted Vowel + Coeng order: Consonant + [Vowel] + Coeng + Consonant -> Consonant + Coeng + Consonant + [Vowel]
  // Vowels: \u17B6-\u17C5
  // Coeng: \u17D2
  // Consonants: \u1780-\u17A2
  normalized = normalized.replace(
    /([\u17B6-\u17C5]+)(\u17D2[\u1780-\u17A2])/g,
    '$2$1'
  );

  // Fix duplicate diacritics / zero-width spaces
  normalized = normalized.replace(/\u200B{2,}/g, '\u200B');

  // Fix spaces around Khmer punctuation: remove space before ៕, ៖, ៗ, ៘, ៚ and ensure space after if followed by text
  normalized = normalized.replace(/\s+([៕៖ៗ៘៚])/g, '$1');

  return normalized;
}
