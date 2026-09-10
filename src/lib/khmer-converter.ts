// Khmer Numeral and Word Conversion Utilities

export const KHMER_DIGITS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
export const ARABIC_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const KHMER_DIGIT_MAP: Record<string, string> = {
  '0': '០', '1': '១', '2': '២', '3': '៣', '4': '៤',
  '5': '៥', '6': '៦', '7': '៧', '8': '៨', '9': '៩'
};

export const ARABIC_DIGIT_MAP: Record<string, string> = {
  '០': '0', '១': '1', '២': '2', '៣': '3', '៤': '4',
  '៥': '5', '៦': '6', '៧': '7', '៨': '8', '៩': '9'
};

const KHMER_ONES = ['', 'មួយ', 'ពីរ', 'បី', 'បួន', 'ប្រាំ', 'ប្រាំមួយ', 'ប្រាំពីរ', 'ប្រាំបី', 'ប្រាំបួន'];
const KHMER_TENS = ['', 'ដប់', 'ម្ភៃ', 'សាមសិប', 'សែសិប', 'ហាសិប', 'ហុកសិប', 'ចិតសិប', 'ប៉ែតសិប', 'កៅសិប'];

/**
 * Converts Arabic digits in a string to Khmer digits
 */
export function toKhmerDigits(input: string | number): string {
  if (input === null || input === undefined) return '';
  const str = String(input);
  return str.replace(/[0-9]/g, (digit) => KHMER_DIGIT_MAP[digit] || digit);
}

/**
 * Converts Khmer digits in a string to Arabic digits
 */
export function toArabicDigits(input: string): string {
  if (!input) return '';
  return input.replace(/[០-៩]/g, (digit) => ARABIC_DIGIT_MAP[digit] || digit);
}

/**
 * Converts a 2-digit integer (0-99) into Khmer words
 */
function convertUnderHundred(num: number): string {
  if (num === 0) return '';
  if (num < 10) return KHMER_ONES[num];
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return KHMER_TENS[tens] + (ones > 0 ? KHMER_ONES[ones] : '');
}

/**
 * Converts a 3-digit integer (0-999) into Khmer words
 */
function convertUnderThousand(num: number): string {
  if (num === 0) return '';
  const hundreds = Math.floor(num / 100);
  const remainder = num % 100;
  let result = '';
  if (hundreds > 0) {
    result += KHMER_ONES[hundreds] + 'រយ';
  }
  if (remainder > 0) {
    result += convertUnderHundred(remainder);
  }
  return result;
}

/**
 * Converts an integer into spelled-out Khmer words
 */
export function numberToKhmerWords(input: string | number): string {
  const cleanInput = toArabicDigits(String(input).trim().replace(/,/g, ''));
  if (!cleanInput || isNaN(Number(cleanInput))) return '';

  let numStr = cleanInput;
  let isNegative = false;
  if (numStr.startsWith('-')) {
    isNegative = true;
    numStr = numStr.substring(1);
  }

  // Handle decimals
  const parts = numStr.split('.');
  const intPartStr = parts[0] || '0';
  const decimalPartStr = parts[1];

  if (intPartStr === '0' && (!decimalPartStr || Number(decimalPartStr) === 0)) {
    return 'សូន្យ';
  }

  const intNum = BigInt(intPartStr);
  let words = '';

  if (intNum === BigInt(0)) {
    words = 'សូន្យ';
  } else {
    // Scales in Khmer counting system
    const scales = [
      { value: BigInt('1000000000000'), name: 'ទ្រីលាន' }, // Trillion
      { value: BigInt('1000000000'), name: 'ប៊ីលាន' },     // Billion
      { value: BigInt('1000000'), name: 'លាន' },          // Million
      { value: BigInt('100000'), name: 'សែន' },           // Hundred Thousand
      { value: BigInt('10000'), name: 'ម៉ឺន' },           // Ten Thousand
      { value: BigInt('1000'), name: 'ពាន់' },            // Thousand
    ];

    let remaining = intNum;
    for (const scale of scales) {
      if (remaining >= scale.value) {
        const count = remaining / scale.value;
        words += numberToKhmerWords(count.toString()) + scale.name;
        remaining %= scale.value;
      }
    }

    if (remaining > BigInt(0)) {
      words += convertUnderThousand(Number(remaining));
    }
  }

  // Append decimals
  if (decimalPartStr && decimalPartStr.length > 0) {
    words += ' ចុច ';
    for (const char of decimalPartStr) {
      const d = parseInt(char, 10);
      if (!isNaN(d)) {
        words += (d === 0 ? 'សូន្យ' : KHMER_ONES[d]) + ' ';
      }
    }
    words = words.trim();
  }

  return (isNegative ? 'ដក ' : '') + words.trim();
}

/**
 * Converts a number to Khmer Currency text format (Riel or USD)
 */
export function numberToKhmerCurrency(input: string | number, currency: 'KHR' | 'USD' = 'KHR'): string {
  const cleanInput = toArabicDigits(String(input).trim().replace(/,/g, ''));
  if (!cleanInput || isNaN(Number(cleanInput))) return '';

  const num = Number(cleanInput);
  if (currency === 'KHR') {
    const whole = Math.round(num);
    const words = numberToKhmerWords(whole);
    return `${words} រៀល (${toKhmerDigits(whole.toLocaleString())} ៛)`;
  } else {
    const parts = cleanInput.split('.');
    const dollars = parseInt(parts[0], 10) || 0;
    const cents = parts[1] ? parseInt(parts[1].substring(0, 2).padEnd(2, '0'), 10) : 0;

    let res = `${numberToKhmerWords(dollars)} ដុល្លារអាមេរិក`;
    if (cents > 0) {
      res += ` និង ${numberToKhmerWords(cents)} សេន`;
    }
    return `${res} ($${num.toLocaleString(undefined, { minimumFractionDigits: cents > 0 ? 2 : 0 })})`;
  }
}
