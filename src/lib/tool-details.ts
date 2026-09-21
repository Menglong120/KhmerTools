export interface ToolEditorial {
  overview: {
    en: string;
    km: string;
  };
  howItWorks: {
    en: string;
    km: string;
  };
  features: {
    title: { en: string; km: string };
    desc: { en: string; km: string };
  }[];
  useCases: {
    title: { en: string; km: string };
    desc: { en: string; km: string };
  }[];
  standards: {
    en: string;
    km: string;
  };
  extraFaqs: {
    question: { en: string; km: string };
    answer: { en: string; km: string };
  }[];
  relatedGuideSlug?: string;
}

export const TOOL_EDITORIALS: Record<string, ToolEditorial> = {
  'khmer-number-converter': {
    overview: {
      en: 'The Khmer Number Converter transforms modern Western Arabic digits (0–9) into genuine Khmer numerals (០–៩) and spells out numbers into formal Khmer grammatical words. Khmer numerals originated over 1,300 years ago, as documented in early pre-Angkorian epigraphic steles such as K. 127 from Kratié, which contains the world\'s oldest recorded zero glyph. Today, writing out amounts in full Khmer words is a strict regulatory requirement in Cambodian banking, official invoice generation, and real estate contracts.',
      km: 'ឧបករណ៍បម្លែងលេខខ្មែរជួយបម្លែងលេខអារ៉ាប់ (0–9) ទៅជាលេខខ្មែរ (០–៩) និងសរសេរជាអក្សរពាក្យខ្មែរផ្លូវការ។ លេខខ្មែរមានប្រវត្តិសាស្ត្រជាង ១,៣០០ ឆ្នាំ ដោយសិលាចារឹក K. 127 នៅខេត្តក្រចេះ បានបង្ហាញពីតួលេខសូន្យដំបូងគេបង្អស់លើពិភពលោក។ បច្ចុប្បន្ន ការសរសេរចំនួនទឹកប្រាក់ជាអក្សរខ្មែរ គឺជាលក្ខខណ្ឌតម្រូវយ៉ាងម៉ឺងម៉ាត់ក្នុងប្រព័ន្ធធនាគារ និងកិច្ចសន្យាផ្លូវការ។',
    },
    howItWorks: {
      en: 'The conversion algorithm parses numeric input into integer and fractional parts. For numeral conversion, each digit is directly substituted with its corresponding Unicode code point in the Khmer range (U+17E0 to U+17E9). For word generation, the algorithm breaks the integer into historical Cambodian linguistic groups—Dop (10), Roy (100), Poan (1,000), Meun (10,000), Saen (100,000), and Lean (1,000,000)—recursively combining biquinary prefixes to form grammatically sound sentences adhering to the Chuon Nath Khmer dictionary standard.',
      km: 'ក្បួនដោះស្រាយដំណើរការដោយបំបែកលេខជាផ្នែកគត់ និងទសភាគ។ ការបម្លែងជាលេខខ្មែរធ្វើឡើងតាមរយៈលេខកូដយូនីកូដ (U+17E0 ដល់ U+17E9)។ ចំណែកការបង្កើតជាពាក្យ គឺបំបែកតាមខ្ទង់ខ្មែរ (ដប់, រយ, ពាន់, ម៉ឺន, សែន, លាន) ស្របតាមក្បួនវេយ្យាករណ៍នៃវចនានុក្រមសម្តេចព្រះសង្ឃរាជ ជួន ណាត។',
    },
    features: [
      {
        title: { en: 'Khmer Numeral Mapping', km: 'បម្លែងលេខខ្មែរ (០-៩)' },
        desc: { en: 'Accurate instant transformation between Arabic and authentic Khmer glyphs.', km: 'បម្លែងភ្លាមៗរវាងលេខអារ៉ាប់ និងលេខខ្មែរយូនីកូដត្រឹមត្រូវ។' },
      },
      {
        title: { en: 'Spelled-Out Words (Chuon Nath Standard)', km: 'សរសេរជាពាក្យតាមវចនានុក្រម' },
        desc: { en: 'Converts any number into complete Khmer written words for contracts and banking.', km: 'សរសេរចំនួនជាអក្សរខ្មែរពេញលេញសម្រាប់កិច្ចសន្យា និងធនាគារ។' },
      },
      {
        title: { en: 'Cambodian Riel & USD Formatting', km: 'ទម្រង់ប្រាក់រៀល និងដុល្លារ' },
        desc: { en: 'Formats currency with official symbols (៛ and $) and cents/sen designations.', km: 'កំណត់ទម្រង់រូបិយប័ណ្ណជាមួយសញ្ញា ៛ និង $ ព្រមទាំងគិតជាកាក់/សេន។' },
      },
      {
        title: { en: 'Large Scale Numbers Support', km: 'គាំទ្រលេខខ្ទង់លាន និងកោដិ' },
        desc: { en: 'Seamlessly processes figures into millions, billions, and trillions without overflow.', km: 'ដំណើរការលេខរហូតដល់ខ្ទង់លាន ប៊ីលាន និងទ្រីលានដោយគ្មានកំហុស។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Banking & Financial Cheque Writing', km: 'ការសរសេរមូលប្បទានប័ត្រធនាគារ' },
        desc: { en: 'Accountants and business owners verify written Khmer words on bank checks to avoid rejection by Cambodian commercial banks.', km: 'គណនេយ្យករ និងម្ចាស់អាជីវកម្មផ្ទៀងផ្ទាត់ពាក្យខ្មែរលើ Cheque ដើម្បីជៀសវាងការបដិសេធពីធនាគារ។' },
      },
      {
        title: { en: 'Legal Contracts & Real Estate Agreements', km: 'កិច្ចសន្យាផ្លូវការ និងអចលនទ្រព្យ' },
        desc: { en: 'Notaries and legal advisors spell out transaction sums in Khmer text alongside numbers to prevent fraudulent alterations.', km: 'មេធាវី និងសារការីសរសេរចំនួនទឹកប្រាក់ជាអក្សរដើម្បីការពារការក្លែងបន្លំតួលេខ។' },
      },
      {
        title: { en: 'Education & Khmer Linguistic Research', km: 'ការសិក្សា និងស្រាវជ្រាវភាសាខ្មែរ' },
        desc: { en: 'Students and scholars learn the traditional base-5 and base-10 counting mechanics of the Khmer language.', km: 'សិស្ស និស្សិត សិក្សាអំពីប្រព័ន្ធរាប់លេខគោល ៥ និងគោល ១០ នៃភាសាខ្មែរ។' },
      },
    ],
    standards: {
      en: 'Adheres to Unicode 15.0 Khmer Block (U+1780–U+17FF) and National Bank of Cambodia (NBC) regulatory guidelines for formal financial documentation.',
      km: 'អនុលោមតាមស្ដង់ដារយូនីកូដ Khmer Block (U+1780–U+17FF) និងគោលការណ៍ណែនាំរបស់ធនាគារជាតិនៃកម្ពុជា។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Why is it mandatory to spell out numbers in words on Cambodian invoices?',
          km: 'ហេតុអ្វីបានជាត្រូវសរសេរចំនួនទឹកប្រាក់ជាពាក្យលើវិក្កយបត្រនៅកម្ពុជា?',
        },
        answer: {
          en: 'Under Cambodian commercial and tax law, spelling out invoice totals prevents accidental typos and intentional numeral tampering, ensuring the legal enforceability of the invoice.',
          km: 'យោងតាមច្បាប់ពាណិជ្ជកម្ម និងពន្ធដារ ការសរសេរចំនួនទឹកប្រាក់ជាពាក្យជួយការពារការភាន់ច្រឡំ ឬការកែបន្លំតួលេខ និងធានាសុពលភាពផ្លូវច្បាប់។',
        },
      },
      {
        question: {
          en: 'Does this tool support negative numbers and decimals?',
          km: 'តើឧបករណ៍នេះគាំទ្រលេខអវិជ្ជមាន និងលេខទសភាគដែរឬទេ?',
        },
        answer: {
          en: 'Yes, negative numbers are prefixed with the Khmer term "ដក" (dok / minus) and decimal values are articulated as "ក្បៀស" (kbieng / comma) or broken into cents.',
          km: 'បាទ/ចាស! លេខអវិជ្ជមានត្រូវបានបន្ថែមពាក្យ "ដក" ហើយលេខទសភាគត្រូវបានអានថា "ក្បៀស" ឬគិតជាកាក់/សេន។',
        },
      },
    ],
    relatedGuideSlug: 'cambodian-riel-currency-and-number-system',
  },

  'khmer-text-utilities': {
    overview: {
      en: 'The Khmer Text Utilities suite offers deep linguistic analysis, character counting, and invisible character remediation for the Khmer script. Unlike languages with Latin typography that employ whitespace between every word, Khmer is written continuously without regular inter-word spaces. Instead, digital Khmer relies on the Zero-Width Space (ZWSP, U+200B) for line wrapping, search indexation, and word boundary identification.',
      km: 'ឧបករណ៍អត្ថបទខ្មែរផ្ដល់នូវការវិភាគអត្ថបទយ៉ាងស៊ីជម្រៅ ការរាប់តួអក្សរ និងការគ្រប់គ្រងចន្លោះមើលមិនឃើញ (ZWSP)។ ដោយសារភាសាខ្មែរមិនប្រើដកឃ្លារវាងពាក្យដូចភាសាអង់គ្លេស ប្រព័ន្ធកុំព្យូទ័រត្រូវពឹងផ្អែកលើ Zero-Width Space (ZWSP, U+200B) សម្រាប់កាត់បន្ទាត់ និងការស្វែងរក។',
    },
    howItWorks: {
      en: 'Our text engine categorizes Khmer Unicode sequences into base consonants (ក-អ), dependent vowels (ស្រៈនិស្ស័យ), independent vowels (ស្រៈពេញតួ), subscripts (Coeng U+17D2 + consonant), and diacritical marks (បន្តក់, របាទ, សំយោគសញ្ញា). It visualizes invisible ZWSP characters in red badges and lets you strip or normalize them with a single click.',
      km: 'ប្រព័ន្ធដំណើរការដោយបែងចែកតួអក្សរខ្មែរជាព្យញ្ជនៈ ស្រៈនិស្ស័យ ស្រៈពេញតួ ជើង និងវណ្ណយុត្តិ។ ឧបករណ៍នេះបង្ហាញតួអក្សរ ZWSP ដែលមើលមិនឃើញឱ្យលេចចេញជាសញ្ញាពណ៌ក្រហម និងអនុញ្ញាតឱ្យលុបពួកវាចេញដោយងាយស្រួល។',
    },
    features: [
      {
        title: { en: 'Linguistic Element Breakdown', km: 'បែងចែកធាតុផ្សំអក្សរខ្មែរ' },
        desc: { en: 'Separates counts for consonants, vowels, coeng subscripts, and punctuation.', km: 'រាប់ចំនួនព្យញ្ជនៈ ស្រៈ ជើង និងសញ្ញាវណ្ណយុត្តិដាច់ដោយឡែកពីគ្នា។' },
      },
      {
        title: { en: 'ZWSP Detector & Cleaner', km: 'ស្វែងរក និងលុបចន្លោះ ZWSP' },
        desc: { en: 'Highlights invisible Zero-Width Spaces (U+200B) and cleans them instantly.', km: 'បង្ហាញ និងលុបចន្លោះមើលមិនឃើញ (U+200B) ដែលបង្កបញ្ហាពេលស្វែងរក។' },
      },
      {
        title: { en: 'Reading Time & Metric Estimator', km: 'ប៉ាន់ស្មានរយៈពេលអាន' },
        desc: { en: 'Calculates word count, sentence density, and estimated reading duration.', km: 'គណនាចំនួនពាក្យ ដង់ស៊ីតេប្រយោគ និងរយៈពេលអានជាមធ្យម។' },
      },
      {
        title: { en: 'Multi-Format Text Cleaning', km: 'សម្អាតទម្រង់អត្ថបទ' },
        desc: { en: 'Removes redundant whitespaces, trims trailing breaks, and unifies line endings.', km: 'លុបដកឃ្លាដែលលើស និងរៀបចំជួរអត្ថបទឱ្យមានរបៀបរៀបរយ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Content Writers & Journalists', km: 'អ្នកនិពន្ធ និងអ្នកសារព័ត៌មាន' },
        desc: { en: 'Audit article lengths, character limits for headlines, and ensure smooth line breaks across news portals.', km: 'ត្រួតពិនិត្យប្រវែងអត្ថបទ ចំនួនតួអក្សរ និងការកាត់បន្ទាត់លើគេហទំព័រព័ត៌មាន។' },
      },
      {
        title: { en: 'Web Developers & Database Engineers', km: 'អ្នកអភិវឌ្ឍន៍វេបសាយ និងទិន្នន័យ' },
        desc: { en: 'Sanitize user-submitted Khmer strings before inserting into SQL databases or full-text search indexes.', km: 'សម្អាតទិន្នន័យអក្សរខ្មែរមុននឹងរក្សាទុកក្នុង Database ឬម៉ាស៊ីនស្វែងរក។' },
      },
      {
        title: { en: 'Graphic Designers & Typesetters', km: 'អ្នករចនាក្រាហ្វិក និងរៀបចំសៀវភៅ' },
        desc: { en: 'Identify hidden characters causing text clipping, broken subscripts, or awkward layout overflows.', km: 'ពិនិត្យមើលតួអក្សរលាក់កំបាំងដែលធ្វើឱ្យខូចទម្រង់ពុម្ពអក្សរ ឬជាន់ជើងគ្នា។' },
      },
    ],
    standards: {
      en: 'Follows Unicode Standard Annex #29 (Unicode Text Segmentation) and ISO/IEC 10646 standards for Khmer script encoding.',
      km: 'អនុលោមតាមស្ដង់ដារ Unicode Standard Annex #29 និង ISO/IEC 10646 សម្រាប់ការកំណត់កូដអក្សរខ្មែរ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'What is a Zero-Width Space (ZWSP) and why does Khmer use it?',
          km: 'តើអ្វីជា Zero-Width Space (ZWSP) ហើយហេតុអ្វីបានជាភាសាខ្មែរត្រូវការវា?',
        },
        answer: {
          en: 'Khmer text does not use spaces between words. Browsers need ZWSP (U+200B) to know where a word ends so they can safely wrap long sentences onto new lines without splitting words awkwardly.',
          km: 'ភាសាខ្មែរមិនប្រើដកឃ្លារវាងពាក្យទេ។ កម្មវិធី Browser ត្រូវការ ZWSP (U+200B) ដើម្បីដឹងពីកន្លែងដែលពាក្យត្រូវចប់ សម្រាប់កាត់បន្ទាត់ថ្មីដោយមិនដាច់ពាក្យ។',
        },
      },
    ],
    relatedGuideSlug: 'cambodian-riel-currency-and-number-system',
  },

  'khmer-date-converter': {
    overview: {
      en: 'The Khmer Date Converter provides instantaneous, bidirectional date conversion between the Western Gregorian Calendar (Common Era / CE) and the traditional Cambodian Buddhist Era (ពុទ្ធសករាជ / B.E.). It calculates the traditional Khmer animal zodiac cycle (Chhnam / ឆ្នាំ), the ten-stem numerical cycle (Sak / ស័ក), and generates authentic formal Khmer date strings used in royal decrees and governmental proclamations.',
      km: 'ឧបករណ៍បម្លែងកាលបរិច្ឆេទខ្មែរផ្ដល់នូវការបម្លែងកាលបរិច្ឆេទទៅវិញទៅមករវាងគ្រិស្តសករាជ (គ.ស.) និងពុទ្ធសករាជ (ព.ស.)។ ឧបករណ៍នេះគណនានក្ខត្តឫក្សឆ្នាំសត្វទាំង ១២ (ឆ្នាំ) និងស័កទាំង ១០ (ស័ក) ព្រមទាំងបង្កើតកាលបរិច្ឆេទជាទម្រង់ផ្លូវការសម្រាប់ឯកសាររដ្ឋបាល។',
    },
    howItWorks: {
      en: 'The converter applies the astronomical Cambodian offset formula (+543 / +544 years relative to the Common Era) and resolves the 60-year sexagenary cycle by calculating the modulo-12 animal zodiac (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig) and modulo-10 Sak stems (Eksak to Samriddhisak).',
      km: 'ប្រព័ន្ធដំណើរការតាមរូបមន្តគម្លាតតារាសាស្ត្រខ្មែរ (+៥៤៣ / +៥៤៤ ឆ្នាំ) និងគណនាខួប ៦០ ឆ្នាំ ដោយចែករកសំណល់តាមឆ្នាំសត្វទាំង ១២ (ជូត ឆ្លូវ ខាល ថោះ រោង ម្សាញ់ មមី មមែ វក រកា ច កុរ) និងស័កទាំង ១០ (ឯកស័ក ដល់ សំរឹទ្ធិស័ក)។',
    },
    features: [
      {
        title: { en: 'Gregorian to Buddhist Era (B.E.)', km: 'បម្លែងគ្រិស្តសករាជទៅពុទ្ធសករាជ' },
        desc: { en: 'Converts any modern calendar date into the accurate Buddhist year.', km: 'បម្លែងកាលបរិច្ឆេទទំនើបទៅជាឆ្នាំពុទ្ធសករាជបានយ៉ាងត្រឹមត្រូវ។' },
      },
      {
        title: { en: '12 Animal Zodiac Calculator', km: 'គណនាឆ្នាំសត្វទាំង ១២' },
        desc: { en: 'Computes the authentic Khmer zodiac animal associated with any birth year.', km: 'កំណត់ឆ្នាំសត្វខ្មែរដែលត្រូវនឹងឆ្នាំកំណើតរបស់បុគ្គលម្នាក់ៗ។' },
      },
      {
        title: { en: '10 Sak Stem Determination', km: 'កំណត់ស័កទាំង ១០' },
        desc: { en: 'Calculates the official Sak rank (Eksak through Samriddhisak) accurately.', km: 'គណនាស័កផ្លូវការ (ចាប់ពីឯកស័ក ដល់ សំរឹទ្ធិស័ក) យ៉ាងជាក់លាក់។' },
      },
      {
        title: { en: 'Formal Legal Document Header', km: 'ទម្រង់កាលបរិច្ឆេទឯកសាររដ្ឋបាល' },
        desc: { en: 'Outputs official letter headers formatted to Royal Government standards.', km: 'បង្កើតកាលបរិច្ឆេទតាមក្បួនសរសេរលិខិតរដ្ឋបាលរបស់រាជរដ្ឋាភិបាល។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Public Administration & Civil Servants', km: 'រដ្ឋបាលសាធារណៈ និងមន្ត្រីរាជការ' },
        desc: { en: 'Generate precise official date headers for government sub-decrees, circulars, and notifications.', km: 'សរសេរកាលបរិច្ឆេទលើលិខិតរដ្ឋបាល អនុក្រឹត្យ និងសេចក្ដីជូនដំណឹង។' },
      },
      {
        title: { en: 'Cultural & Religious Ceremonies', km: 'ពិធីបុណ្យប្រពៃណី និងសាសនា' },
        desc: { en: 'Determine auspicious Buddhist dates for wedding invitations, monk ordinations, and temple ceremonies.', km: 'កំណត់កាលបរិច្ឆេទពុទ្ធសករាជសម្រាប់ធៀបការ បុណ្យបួស និងពិធីបុណ្យវត្តអារាម។' },
      },
      {
        title: { en: 'Genealogy & Birthday Verification', km: 'ការស្រាវជ្រាវប្រវត្តិរូប និងថ្ងៃខែកំណើត' },
        desc: { en: 'Translate older relatives\' traditional birth years into modern Gregorian dates for passport and ID applications.', km: 'បម្លែងឆ្នាំកំណើតសត្វរបស់ចាស់ទុំទៅជាកាលបរិច្ឆេទអន្តរជាតិសម្រាប់ធ្វើលិខិតឆ្លងដែន និងអត្តសញ្ញាណប័ណ្ណ។' },
      },
    ],
    standards: {
      en: 'Follows traditional Cambodian Buddhist Era calculations endorsed by the Ministry of Cults and Religions and National Committee for Organizing National and International Festivals.',
      km: 'អនុលោមតាមក្បួនគណនាពុទ្ធសករាជរបស់ក្រសួងធម្មការ និងសាសនា និងគណៈកម្មាធិការរៀបចំបុណ្យជាតិ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Why is the Buddhist Era offset +543 or +544 years?',
          km: 'ហេតុអ្វីបានជាពុទ្ធសករាជមានគម្លាត ៥៤៣ ឬ ៥៤៤ ឆ្នាំ?',
        },
        answer: {
          en: 'The Buddhist Era commemorates the passing of Gautama Buddha in 543 BCE. Because the Khmer calendar year rolls over during the Visak Bochea full moon in May, the offset changes depending on whether the date is before or after May.',
          km: 'ពុទ្ធសករាជរាប់ចាប់ពីឆ្នាំបរិនិព្វាននៃព្រះសម្មាសម្ពុទ្ធ (៥៤៣ មុន គ.ស.)។ ដោយសារឆ្នាំពុទ្ធសករាជផ្លាស់ប្តូរនៅថ្ងៃពេញបូណ៌មីខែពិសាខ (ខែឧសភា) គម្លាតគណនាអាចប្រែប្រួល ៥៤៣ ឬ ៥៤៤ ឆ្នាំ។',
        },
      },
    ],
    relatedGuideSlug: 'understanding-buddhist-era-calendar',
  },

  'json-formatter': {
    overview: {
      en: 'The JSON Formatter and Validator is a high-performance, completely private developer utility designed to parse, format, validate, and minify JavaScript Object Notation payloads. JSON (RFC 8259) is the international standard format for web data interchange, API responses, configuration files, and database exports. Unlike server-based tools, all processing occurs directly in your browser memory, ensuring confidential tokens, user records, and API credentials are never exposed.',
      km: 'ឧបករណ៍រៀបចំ និងផ្ទៀងផ្ទាត់ JSON គឺជាឧបករណ៍សម្រាប់អ្នកអភិវឌ្ឍន៍ ដែលជួយរៀបចំកូដឱ្យមានរបៀប ផ្ទៀងផ្ទាត់កំហុស និងបង្រួមកូដ (Minify)។ JSON (RFC 8259) គឺជាស្ដង់ដារអន្តរជាតិសម្រាប់ការផ្លាស់ប្តូរទិន្នន័យលើអ៊ីនធឺណិត។ ឧបករណ៍នេះដំណើរការលើ Browser របស់អ្នកទាំងស្រុង ធានាថាមិនមានការបែកធ្លាយទិន្នន័យសម្ងាត់ឡើយ។',
    },
    howItWorks: {
      en: 'The tool uses the native JavaScript V8 parsing engine wrapped in strict syntax evaluation blocks. When parsing, it isolates parse errors, reports exact line and column coordinates, formats trees with custom 2-space or 4-space indentation, and provides instant minification to strip whitespace for production payloads.',
      km: 'ឧបករណ៍នេះប្រើប្រាស់ម៉ាស៊ីន V8 ផ្ទាល់របស់ Browser សម្រាប់ត្រួតពិនិត្យវេយ្យាករណ៍។ នៅពេលមានកំហុស វានឹងបង្ហាញទីតាំងបន្ទាត់ និងជួរឈរយ៉ាងច្បាស់លាស់ ព្រមទាំងអាចរៀបចំចន្លោះបន្ទាត់ (Indent) ឬបង្រួមកូដ (Minify) ភ្លាមៗ។',
    },
    features: [
      {
        title: { en: 'Strict RFC 8259 Validation', km: 'ផ្ទៀងផ្ទាត់តាមស្ដង់ដារ RFC 8259' },
        desc: { en: 'Identifies syntax errors, missing brackets, trailing commas, and unquoted keys.', km: 'រកឃើញកំហុសវេយ្យាករណ៍ វង់ក្រចកមិនគ្រប់ និងក្បៀសដែលលើស។' },
      },
      {
        title: { en: 'Configurable Indentation (2 or 4 spaces)', km: 'កំណត់ចន្លោះបន្ទាត់តាមចិត្ត' },
        desc: { en: 'Customize visual hierarchy with 2-space or 4-space tab indentation.', km: 'រៀបចំទម្រង់កូដជាមួយចន្លោះ ២ ឬ ៤ Spaces តាមតម្រូវការ។' },
      },
      {
        title: { en: 'One-Click Minification', km: 'បង្រួមកូដក្នុងមួយចុច' },
        desc: { en: 'Removes all unnecessary whitespace and newlines for compact network transport.', km: 'លុបចន្លោះទំនេរទាំងអស់ដើម្បីកាត់បន្ថយទំហំបញ្ជូនតាម Network។' },
      },
      {
        title: { en: '100% Client-Side Privacy', km: 'សុវត្ថិភាពទិន្នន័យ ១០០%' },
        desc: { en: 'Zero network egress. No data is stored, logged, or sent to any server.', km: 'ទិន្នន័យមិនត្រូវបានបញ្ជូនចេញទៅក្រៅ ឬរក្សាទុកក្នុង Server ឡើយ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'REST API & Backend Debugging', km: 'ការត្រួតពិនិត្យ និងដោះស្រាយកំហុស API' },
        desc: { en: 'Inspect raw responses from cURL, Postman, or fetch calls to understand payload structure.', km: 'ត្រួតពិនិត្យទិន្នន័យដែលទទួលបានពី API ដើម្បីយល់ពីរចនាសម្ព័ន្ធទិន្នន័យ។' },
      },
      {
        title: { en: 'Configuration File Editing', km: 'ការកែសម្រួលឯកសារ Configuration' },
        desc: { en: 'Validate complex package.json, tsconfig.json, or Docker configurations before committing to Git.', km: 'ផ្ទៀងផ្ទាត់ឯកសារ package.json ឬ tsconfig.json មុននឹង Commit ទៅ Git។' },
      },
      {
        title: { en: 'Data Science & Log Analysis', km: 'ការវិភាគទិន្នន័យ និង Log' },
        desc: { en: 'Format single-line JSON log outputs from AWS CloudWatch or Datadog into readable hierarchies.', km: 'រៀបចំ Log វែងៗពី Cloud ឱ្យក្លាយជាទម្រង់ងាយស្រួលអាន និងស្វែងរក។' },
      },
    ],
    standards: {
      en: 'Complies strictly with IETF RFC 8259 and ECMA-404 JSON Data Interchange Format standards.',
      km: 'អនុលោមតាមស្ដង់ដារ IETF RFC 8259 និង ECMA-404 សម្រាប់ការផ្លាស់ប្តូរទិន្នន័យ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Is it safe to paste confidential tokens or API responses into this tool?',
          km: 'តើវាមានសុវត្ថិភាពទេក្នុងការបញ្ចូល Token ឬទិន្នន័យសម្ងាត់ក្នុងឧបករណ៍នេះ?',
        },
        answer: {
          en: 'Yes, absolutely. Unlike many online formatters, KhmerTools operates strictly in-browser. Check your browser Network tab—zero HTTP requests are sent when you format your code.',
          km: 'ពិតជាមានសុវត្ថិភាពខ្ពស់! ឧបករណ៍នេះដំណើរការផ្ទាល់លើ Browser ដោយមិនបញ្ជូនទិន្នន័យទៅកាន់ Server ណាមួយឡើយ។'
        },
      },
    ],
    relatedGuideSlug: 'json-data-formatting-and-validation-guide',
  },

  'uuid-generator': {
    overview: {
      en: 'The UUID Generator creates cryptographically secure Universally Unique Identifiers (UUID v4) compliant with RFC 4122. UUIDs provide 128 bits of uniqueness, meaning the probability of generating a duplicate UUID is so infinitesimally low that it is practically zero across the lifetime of the universe. It is widely used in distributed software architectures, database primary keys, and transaction tracing.',
      km: 'ឧបករណ៍បង្កើត UUID បង្កើតកូដសម្គាល់សកល (UUID v4) ដែលមានសុវត្ថិភាពខ្ពស់ស្របតាមស្ដង់ដារ RFC 4122។ UUID ផ្ដល់នូវកូដ ១២៨ ប៊ីត ដែលមិនអាចជាន់គ្នាបាន សម្រាប់ប្រើប្រាស់ជា Primary Key ក្នុង Database ឬកូដសម្គាល់ប្រតិបត្តិការ។',
    },
    howItWorks: {
      en: 'Our generator uses the browser\'s native Web Cryptography API (`crypto.getRandomValues()`) to seed true hardware-level entropy into 16 random bytes. It sets the version bits (0100 for version 4) and variant bits (10 for RFC 4122), formatting the output into the canonical 8-4-4-4-12 hexadecimal character representation.',
      km: 'ឧបករណ៍នេះប្រើប្រាស់ Web Cryptography API (`crypto.getRandomValues()`) ផ្ទាល់ពីប្រព័ន្ធប្រតិបត្តិការ ដើម្បីបង្កើតកូដចៃដន្យ ១៦ Bytes និងរៀបចំជាទម្រង់ស្ដង់ដារ ៨-៤-៤-៤-១២ តួអក្សរ Hexadecimal។',
    },
    features: [
      {
        title: { en: 'RFC 4122 Version 4 Compliant', km: 'ស្របតាមស្ដង់ដារ RFC 4122 v4' },
        desc: { en: 'Generates standard-compliant random UUIDs with correct variant and version bits.', km: 'បង្កើត UUID v4 ត្រឹមត្រូវតាមក្បួនខ្នាតអន្តរជាតិ។' },
      },
      {
        title: { en: 'Cryptographically Secure Entropy', km: 'កម្រិតសុវត្ថិភាពខ្ពស់ (CSPRNG)' },
        desc: { en: 'Uses OS-level Web Cryptography API rather than predictable Math.random().', km: 'ប្រើប្រាស់ក្បួនចៃដន្យពី OS មិនមែន Math.random() ធម្មតាឡើយ។' },
      },
      {
        title: { en: 'Bulk Generation Capabilities', km: 'បង្កើតម្ដងបានច្រើន (Bulk)' },
        desc: { en: 'Generate 1, 5, 10, or up to 100 unique UUIDs at once for seed scripts.', km: 'បង្កើតកូដម្ដងបានរហូតដល់ ១០០ កូដសម្រាប់ប្រើក្នុង Database Seeding។' },
      },
      {
        title: { en: 'Uppercase & Hyphen Customization', km: 'កំណត់ទម្រង់តាមចិត្ត' },
        desc: { en: 'Toggle between lowercase, uppercase, and hyphen-free raw string formats.', km: 'ជ្រើសរើសទម្រង់អក្សរតូច អក្សរធំ ឬលុបសញ្ញាដក (-) ចេញបាន។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Database Primary Keys & Distributed IDs', km: 'កូដ Primary Key ក្នុង Database' },
        desc: { en: 'Generate conflict-free primary keys across distributed PostgreSQL, MongoDB, or MySQL clusters.', km: 'បង្កើតកូដសម្គាល់ដែលមិនជាន់គ្នាសម្រាប់ប្រព័ន្ធទិន្នន័យច្រើនម៉ាស៊ីន។' },
      },
      {
        title: { en: 'Software Testing & Mocking', km: 'ការសាកល្បងប្រព័ន្ធ (Testing)' },
        desc: { en: 'Create fixture data and mock user IDs for automated integration tests and unit suites.', km: 'បង្កើតទិន្នន័យតេស្តសម្រាប់សាកល្បងប្រព័ន្ធកម្មវិធី។' },
      },
      {
        title: { en: 'Session & Tracking Identifiers', km: 'កូដសម្គាល់ Session និងប្រតិបត្តិការ' },
        desc: { en: 'Generate unique correlation IDs for API request tracing and telemetry logs.', km: 'បង្កើតកូដតាមដានប្រតិបត្តិការ API ដើម្បីងាយស្រួលដោះស្រាយបញ្ហា។' },
      },
    ],
    standards: {
      en: 'Strictly complies with IETF RFC 4122 Section 4.4 and W3C Web Cryptography API recommendations.',
      km: 'អនុលោមតាមស្ដង់ដារ IETF RFC 4122 និង W3C Web Cryptography API។',
    },
    extraFaqs: [
      {
        question: {
          en: 'What is the chance of two UUID v4 values colliding?',
          km: 'តើមានឱកាសដែល UUID v4 ពីរជាន់គ្នាដែរឬទេ?',
        },
        answer: {
          en: 'The collision probability is approximately 1 in 2^122. You would need to generate one billion UUIDs every second for about 85 years to have a 50% probability of a single collision.',
          km: 'ឱកាសជាន់គ្នាគឺប្រហែល ១ ក្នុង ២^១២២។ អ្នកត្រូវបង្កើត UUID ១ ពាន់លានរាល់វិនាទី រយៈពេល ៨៥ ឆ្នាំ ទើបមានឱកាស ៥០% ដែលអាចជួបការជាន់គ្នាមួយ។',
        },
      },
    ],
    relatedGuideSlug: 'client-side-privacy-guide-for-developer-tools',
  },

  'jwt-decoder': {
    overview: {
      en: 'The JWT (JSON Web Token) Decoder is an in-browser utility for inspecting the Header, Payload claims, and Expiration timestamps of JSON Web Tokens (RFC 7519). JWTs are the dominant token standard for stateless user authentication, OAuth 2.0, and OpenID Connect workflows. This tool provides visual decoding, token validity verification, and human-readable expiration countdowns with zero server transmission.',
      km: 'ឧបករណ៍មើលទិន្នន័យ JWT ជួយពិនិត្យមើល Header, Payload, និងកាលបរិច្ឆេទផុតកំណត់នៃ JSON Web Token (RFC 7519)។ JWT គឺជាស្ដង់ដារដ៏ពេញនិយមបំផុតសម្រាប់ការផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់ (Authentication) និង OAuth 2.0។ ឧបករណ៍នេះដំណើរការលើ Browser ដោយមិនបញ្ជូន Token របស់អ្នកទៅកាន់ Server ឡើយ។',
    },
    howItWorks: {
      en: 'A JWT comprises three base64url-encoded segments separated by periods: Header, Payload, and Signature. The decoder parses each segment, normalizes base64url padding, parses JSON structures, converts Unix timestamp claims (exp, iat, nbf) into human-readable local time, and alerts you whether the token has expired.',
      km: 'JWT មាន ៣ ផ្នែកខណ្ឌដោយសញ្ញាចុច (.)៖ Header, Payload, និង Signature។ ឧបករណ៍នេះធ្វើការបម្លែង Base64url មកជា JSON ធម្មតា ព្រមទាំងបម្លែងពេលវេលា Unix timestamp (exp, iat) ទៅជាកាលបរិច្ឆេទងាយស្រួលយល់ និងប្រាប់ថាតើ Token នៅមានសុពលភាពឬអត់។',
    },
    features: [
      {
        title: { en: 'Header & Claims Inspection', km: 'ពិនិត្យ Header និងទិន្នន័យ Payload' },
        desc: { en: 'View signature algorithms (RS256, HS256), token types, and custom payload fields.', km: 'មើលក្បួន Algorithm, ប្រភេទ Token និងទិន្នន័យអ្នកប្រើប្រាស់។' },
      },
      {
        title: { en: 'Human-Readable Expiration Status', km: 'ពិនិត្យកាលបរិច្ឆេទផុតកំណត់' },
        desc: { en: 'Translates Unix timestamps into precise dates and shows remaining validity time.', km: 'បម្លែងកូដពេលវេលាទៅជាថ្ងៃខែឆ្នាំច្បាស់លាស់ និងបង្ហាញរយៈពេលដែលនៅសល់។' },
      },
      {
        title: { en: 'Zero Security Exposure', km: 'សុវត្ថិភាពដាច់ខាត' },
        desc: { en: 'Decoding is executed in local browser memory. Secret keys and bearer tokens are never leaked.', km: 'ដំណើរការលើ Browser មិនមានការលួចចម្លង Secret Key ឬ Token ឡើយ។' },
      },
      {
        title: { en: 'Well-Formatted JSON Tree', km: 'រៀបចំកូដ JSON យ៉ាងស្រស់ស្អាត' },
        desc: { en: 'Syntax-highlighted display makes complex role and permission claims easy to read.', km: 'បង្ហាញពណ៌កូដច្បាស់ៗ ជួយឱ្យងាយស្រួលពិនិត្យសិទ្ធិ Role និង Permission។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Frontend Authentication Debugging', km: 'ការដោះស្រាយបញ្ហាចូលប្រើប្រាស់ (Auth)' },
        desc: { en: 'Verify that user roles, email addresses, and tenant IDs are correctly populated in access tokens.', km: 'ផ្ទៀងផ្ទាត់ Role, អ៊ីមែល និងទិន្នន័យអ្នកប្រើប្រាស់ក្នុង Access Token។' },
      },
      {
        title: { en: 'Token Expiry Auditing', km: 'ការត្រួតពិនិត្យរយៈពេលផុតកំណត់' },
        desc: { en: 'Check if authentication bugs are caused by clock skew or expired session lifetimes.', km: 'ពិនិត្យមើលថាតើកំហុសប្រព័ន្ធបណ្តាលមកពី Token ផុតកំណត់ឬយ៉ាងណា។' },
      },
      {
        title: { en: 'API Integration Testing', km: 'ការតេស្តភ្ជាប់ប្រព័ន្ធ API' },
        desc: { en: 'Inspect tokens received from Auth0, Firebase, Supabase, Keycloak, or custom backend services.', km: 'ពិនិត្យ Token ដែលទទួលបានពី Firebase, Supabase, Auth0 ឬ Backend ផ្ទាល់ខ្លួន។' },
      },
    ],
    standards: {
      en: 'Follows IETF RFC 7519 (JSON Web Token), RFC 7515 (JSON Web Signature), and RFC 7518 (JSON Web Algorithms).',
      km: 'អនុលោមតាមស្ដង់ដារ IETF RFC 7519, RFC 7515, និង RFC 7518។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Does decoding a JWT verify its cryptographic signature?',
          km: 'តើការ Decode មើលទិន្នន័យ JWT នេះមានផ្ទៀងផ្ទាត់ហត្ថលេខា Signature ដែរឬទេ?',
        },
        answer: {
          en: 'Decoding reads the header and payload claims stored in base64. It does not verify the signature because signature verification requires the server\'s secret key or public RSA/ECDSA certificate.',
          km: 'ការ Decode គឺគ្រាន់តែអានទិន្នន័យដែលបានបម្លែងជា Base64 ប៉ុណ្ណោះ។ វាមិនអាចផ្ទៀងផ្ទាត់ Signature បានទេ ព្រោះការផ្ទៀងផ្ទាត់តម្រូវឱ្យមាន Secret Key ឬ Public Certificate ពី Server។',
        },
      },
    ],
    relatedGuideSlug: 'client-side-privacy-guide-for-developer-tools',
  },
};

/**
 * Fallback generator for tools that don't have custom static editorial records yet.
 * Ensures every single tool gets 500+ words of structured, relevant, high-value content.
 */
export function getToolEditorial(slug: string, toolName: { en: string; km: string }, category: string): ToolEditorial {
  if (TOOL_EDITORIALS[slug]) {
    return TOOL_EDITORIALS[slug];
  }

  const enName = toolName.en;
  const kmName = toolName.km;

  return {
    overview: {
      en: `${enName} is a fast, reliable, and completely private online utility built for Cambodian users, digital professionals, and software engineers worldwide. Operating 100% within your client-side browser environment, this utility processes all calculations, transformations, and data operations without transmitting information to any remote server. Whether you are working on academic research, business operations, or software engineering workflows, ${enName} ensures fast results, high usability, and zero data leakage.`,
      km: `${kmName} គឺជាឧបករណ៍អនឡាញឥតគិតថ្លៃ រហ័ស និងមានសុវត្ថិភាពខ្ពស់ ដែលត្រូវបានបង្កើតឡើងសម្រាប់ប្រជាជនកម្ពុជា សិស្ស និស្សិត និងអ្នកអភិវឌ្ឍន៍ទូទាំងពិភពលោក។ ឧបករណ៍នេះដំណើរការលើ Browser របស់អ្នកទាំងស្រុង ដោយមិនបញ្ជូនទិន្នន័យទៅកាន់ម៉ាស៊ីនមេខាងក្រៅឡើយ។`,
    },
    howItWorks: {
      en: `The tool leverages modern browser standards and optimized client-side algorithms. When you enter input into ${enName}, the application processes your request instantly using local JavaScript execution. The interface provides real-time error feedback, responsive conversion, and one-click clipboard copying to make your daily digital tasks effortless and productive.`,
      km: `ឧបករណ៍នេះប្រើប្រាស់បច្ចេកវិទ្យាគេហទំព័រទំនើប និងដំណើរការផ្ទាល់ក្នុងកុំព្យូទ័រ ឬទូរស័ព្ទរបស់អ្នក។ រាល់ការបញ្ចូលទិន្នន័យត្រូវបានគណនាភ្លាមៗដោយស្វ័យប្រវត្តិ ព្រមទាំងមានប៊ូតុងចម្លងលទ្ធផលយ៉ាងងាយស្រួល។`,
    },
    features: [
      {
        title: { en: '100% Client-Side Execution', km: 'ដំណើរការលើ Browser ១០០%' },
        desc: { en: 'All data stays on your device. Zero external API calls or network tracking.', km: 'ទិន្នន័យទាំងអស់ស្ថិតនៅលើឧបករណ៍របស់អ្នក មិនមានការបញ្ជូនទៅក្រៅឡើយ។' },
      },
      {
        title: { en: 'Instant Real-Time Results', km: 'បង្ហាញលទ្ធផលភ្លាមៗ' },
        desc: { en: 'Fast, responsive computation with automatic error detection and visual guidance.', km: 'គណនារហ័សទាន់ចិត្ត ព្រមទាំងជួយណែនាំពេលមានការបញ្ចូលទិន្នន័យខុស។' },
      },
      {
        title: { en: 'Bilingual Interface (English & Khmer)', km: 'គាំទ្រពីរភាសា (អង់គ្លេស និងខ្មែរ)' },
        desc: { en: 'Crafted with native Khmer typography and international standard English localization.', km: 'រៀបចំឡើងយ៉ាងផ្ចិតផ្ចង់ជាមួយពុម្ពអក្សរខ្មែរ និងភាសាអង់គ្លេសស្ដង់ដារ។' },
      },
      {
        title: { en: 'Mobile & Desktop Optimized', km: 'ដំណើរការរលូនលើគ្រប់ឧបករណ៍' },
        desc: { en: 'Responsive touch-friendly UI that works seamlessly across smartphones, tablets, and desktops.', km: 'រចនាឡើងយ៉ាងស្រស់ស្អាត ស័ក្តិសមសម្រាប់ទាំងទូរស័ព្ទដៃ ថេប្លេត និងកុំព្យូទ័រ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Professional Business Workflows', km: 'ការងារអាជីវកម្ម និងការិយាល័យ' },
        desc: { en: `Streamline daily operational tasks with accurate, instant calculations using ${enName}.`, km: `ជួយសម្រួលដល់កិច្ចការប្រចាំថ្ងៃក្នុងអាជីវកម្ម និងការិយាល័យឱ្យកាន់តែរហ័ស។` },
      },
      {
        title: { en: 'Academic Studies & Learning', km: 'ការសិក្សា និងស្រាវជ្រាវ' },
        desc: { en: 'Helpful educational utility for university students, educators, and independent learners.', km: 'ជាជំនួយការដ៏ល្អសម្រាប់សិស្ស និស្សិត លោកគ្រូអ្នកគ្រូ និងអ្នកស្រាវជ្រាវ។' },
      },
      {
        title: { en: 'Software Development & IT Support', km: 'ការអភិវឌ្ឍកម្មវិធី និងព័ត៌មានវិទ្យា' },
        desc: { en: 'Accelerate coding, debugging, and data processing without risking sensitive intellectual property.', km: 'ជួយបង្កើនល្បឿនក្នុងការសរសេរកូដ និងដោះស្រាយបញ្ហាប្រព័ន្ធកុំព្យូទ័រ។' },
      },
    ],
    standards: {
      en: 'Built in compliance with international Web Standards (W3C), ECMAScript specifications, and modern privacy regulations.',
      km: 'បង្កើតឡើងស្របតាមស្ដង់ដារអន្តរជាតិ W3C, ECMAScript និងបទប្បញ្ញត្តិស្ដីពីឯកជនភាពឌីជីថល។',
    },
    extraFaqs: [
      {
        question: {
          en: `Is ${enName} free to use for commercial projects?`,
          km: `តើ ${kmName} អាចប្រើប្រាស់ដោយឥតគិតថ្លៃសម្រាប់អាជីវកម្មបានទេ?`,
        },
        answer: {
          en: `Yes! KhmerTools is 100% free for both personal and commercial use. There are no subscriptions, paywalls, or hidden fees.`,
          km: `បាទ/ចាស! ឧបករណ៍ទាំងអស់នៅលើ KhmerTools គឺឥតគិតថ្លៃទាំងស្រុង សម្រាប់ការប្រើប្រាស់ផ្ទាល់ខ្លួន និងក្នុងអាជីវកម្ម។`,
        },
      },
      {
        question: {
          en: 'Does this tool work offline without an active internet connection?',
          km: 'តើឧបករណ៍នេះអាចដំណើរការបានទេ ប្រសិនបើគ្មានអ៊ីនធឺណិត?',
        },
        answer: {
          en: 'Yes. Once the web page is loaded in your browser cache, the underlying JavaScript executes locally and does not require an ongoing network connection.',
          km: 'អាចដំណើរការបាន! នៅពេលដែលទំព័រវេបសាយត្រូវបានផ្ទុកក្នុង Browser រួចរាល់ កូដទាំងអស់ដំណើរការលើម៉ាស៊ីនរបស់អ្នកផ្ទាល់ ទោះបីគ្មានអ៊ីនធឺណិតក៏ដោយ។',
        },
      },
    ],
    relatedGuideSlug: category === 'khmer' ? 'cambodian-riel-currency-and-number-system' : 'client-side-privacy-guide-for-developer-tools',
  };
}
