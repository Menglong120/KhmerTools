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

  'khmer-unicode-sorter': {
    overview: {
      en: 'The Khmer Unicode Sorter & Fixer is a specialized text normalization tool that resolves one of the most persistent issues in Khmer digital publishing: incorrect Unicode codepoint ordering within syllable clusters. Khmer script is an Abugida — each consonant carries an inherent vowel, and diacritics, subscript consonants (Coeng, U+17D2), and vowel signs must appear in a precise Unicode sequence. When text is typed on legacy NiDA or Limon keyboard layouts, exported from PDF documents, or copied from poorly encoded websites, the codepoint order frequently deviates from the Unicode 3.0 specification for Khmer (U+1780–U+17FF). This produces visible symptoms: floating dotted circles (◌, U+25CC), displaced vowel glyphs, subscripts appearing above baseline, or outright character substitution errors in font rendering engines.',
      km: 'ឧបករណ៍ជួសជុល Unicode ខ្មែរ ដោះស្រាយបញ្ហាលំដាប់ Codepoint ខ្មែរដែលកើតចេញពីក្តារចុចចាស់ ឬការស្រង់ចេញពី PDF ឱ្យស្ថិតក្នុងស្ដង់ដារ Unicode 3.0 Khmer Block (U+1780–U+17FF)។',
    },
    howItWorks: {
      en: 'The normalizer applies a rule-based Unicode reordering algorithm modeled on the ICU (International Components for Unicode) Khmer break iterator logic. It identifies syllable boundaries by detecting base consonants (U+1780–U+17A2), then reorders any misplaced dependent vowels (U+17B6–U+17C5), subscript markers (Coeng U+17D2), diacritical marks (U+17C6–U+17D1), and independent vowels (U+17A3–U+17B3) into their canonical positions. The result is a clean NFC-normalized Unicode string that renders identically across Chrome, Firefox, Safari, and all major Khmer-aware font engines including Noto Khmer and Khmer OS.',
      km: 'ក្បួនដោះស្រាយប្រើច្បាប់តម្រៀបតាមលំដាប់ Unicode ICU Khmer ដើម្បីរកព្យញ្ជនៈដើម (U+1780–U+17A2) ហើយតម្រៀបស្រៈ (U+17B6–U+17C5) ជើង (U+17D2) និងសញ្ញាវណ្ណយុត្តិ (U+17C6–U+17D1) ត្រឡប់ទៅតាមទីតាំងស្ដង់ដាររបស់ពួកវា។',
    },
    features: [
      {
        title: { en: 'Dotted Circle (◌) Eliminator', km: 'លុបរង្វង់ចុចៗ (◌) ចេញ' },
        desc: { en: 'Automatically detects and corrects syllable clusters that trigger the ◌ placeholder glyph in Unicode-compliant renderers.', km: 'ត្រួតពិនិត្យ និងកែតម្រូវលំដាប់ Unicode ដែលបង្ហាញ ◌ ដោយស្វ័យប្រវត្តិ។' },
      },
      {
        title: { en: 'PDF & Legacy Keyboard Fix', km: 'ជួសជុលអក្សរពី PDF និងក្តារចុចចាស់' },
        desc: { en: 'Repairs text exported from Khmer PDF documents or typed on NiDA/Limon legacy keyboard layouts.', km: 'ជួយឱ្យអក្សរពី PDF ឬក្តារចុច NiDA/Limon ត្រូវបានតម្រៀបឡើងវិញឱ្យត្រឹមត្រូវ។' },
      },
      {
        title: { en: 'Cross-Browser Font Compatibility', km: 'ប្រើបានគ្រប់ Browser និងពុម្ពអក្សរ' },
        desc: { en: 'Output renders consistently on Chrome, Firefox, Safari, and Khmer OS/Noto fonts without substitution errors.', km: 'លទ្ធផលបង្ហាញបានត្រឹមត្រូវក្នុង Browser និងពុម្ពអក្សរខ្មែរគ្រប់ប្រភេទ។' },
      },
      {
        title: { en: 'NFC Unicode Normalization', km: 'ធ្វើ Normalization ទម្រង់ NFC' },
        desc: { en: 'Outputs NFC-normalized Khmer text conforming to Unicode Normalization Form C for maximum interoperability.', km: 'ផលិតអក្សរខ្មែរជាទម្រង់ NFC ស្ដង់ដារ Unicode សម្រាប់ការប្រើប្រាស់ប្រកបដោយប្រសិទ្ធភាព។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Digital Publishing & Journalism', km: 'ការចេញផ្សាយ និងសារព័ត៌មាន' },
        desc: { en: 'Editors paste PDF-extracted Khmer article text and normalize it before uploading to CMS platforms like WordPress or Kiripost.', km: 'អ្នកកែសម្រួលប្រើប្រាស់ដើម្បីសម្អាតអត្ថបទ PDF ខ្មែរមុននឹងផ្ទុកឡើង CMS ដូចជា WordPress ឬ Kiripost។' },
      },
      {
        title: { en: 'Database & Search Engine Indexing', km: 'ការស្វែងរក និងទិន្នន័យ' },
        desc: { en: 'Sanitize Khmer strings before inserting into Elasticsearch, PostgreSQL, or SQL databases to prevent duplicate entries caused by encoding variants.', km: 'សម្អាតទិន្នន័យអក្សរខ្មែរមុនចូល Elasticsearch ឬ Database ដើម្បីការពារការជាន់គ្នានៃ Encoding ខុស។' },
      },
      {
        title: { en: 'Font Testing & Typography QA', km: 'ការសាកល្បងពុម្ពអក្សរ' },
        desc: { en: 'Type designers test how their Khmer OpenType lookups (pref, blwf, pstf) respond to canonical Unicode sequences after normalization.', km: 'អ្នករចនាពុម្ពអក្សរប្រើប្រាស់ដើម្បីសាកល្បង OpenType Lookup ខ្មែរ (pref, blwf, pstf) ក្រោយតម្រៀប Unicode។' },
      },
    ],
    standards: {
      en: 'Follows Unicode Standard 15.0 Khmer Block specification (U+1780–U+17FF), ICU Khmer break iterator rules, and Unicode Normalization Form C (NFC) as defined by Unicode Technical Report #15.',
      km: 'អនុលោមតាមស្ដង់ដារ Unicode 15.0 Khmer Block (U+1780–U+17FF) ច្បាប់ ICU Khmer Break Iterator និង Unicode Normalization Form C (NFC)។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Will this tool alter the visual meaning of my Khmer text?',
          km: 'តើឧបករណ៍នេះនឹងផ្លាស់ប្ដូរអត្ថន័យអក្សរខ្មែររបស់ខ្ញុំដែរឬទេ?',
        },
        answer: {
          en: 'No. The tool only reorders the underlying Unicode codepoints into their canonical sequence. The visible glyphs and meaning remain identical — only the broken rendering artifacts (◌) are eliminated.',
          km: 'ទេ! ឧបករណ៍នេះគ្រាន់តែតម្រៀប Codepoint Unicode ឡើងវិញតាមលំដាប់ស្ដង់ដារ។ គ្មានការប្រែប្រួលអត្ថន័យ ឬខ្លឹមសាររបស់អក្សរឡើយ។',
        },
      },
      {
        question: {
          en: 'What causes Khmer text to show dotted circles on some devices?',
          km: 'ហេតុអ្វីបានជាអក្សរខ្មែរបង្ហាញរង្វង់ចុចៗ (◌) នៅលើឧបករណ៍ខ្លះ?',
        },
        answer: {
          en: 'Dotted circles are inserted by the font shaping engine (e.g. HarfBuzz) as a placeholder when it encounters a diacritic or subscript codepoint that has no valid base character preceding it in the correct Unicode order.',
          km: 'រង្វង់ចុចៗ (◌) ត្រូវបានបន្ថែមដោយម៉ាស៊ីន HarfBuzz នៅពេលដែលស្រៈ ឬជើងត្រូវបានស្ថិតនៅមុនព្យញ្ជនៈដើម ដែលខុសពីលំដាប់ Unicode ស្ដង់ដារ។',
        },
      },
    ],
    relatedGuideSlug: 'cambodian-riel-currency-and-number-system',
  },

  'age-calculator': {
    overview: {
      en: 'The Age Calculator computes precise biological age from a date of birth to any target date, displaying results across six time dimensions: years, months, weeks, days, hours, and minutes. Unlike simple subtraction calculators, this tool accounts for the full complexity of Gregorian calendar arithmetic — variable month lengths (28, 29, 30, or 31 days), leap year corrections for February 29th birthdays, and the exact day-of-week offset using the Zeller congruence formula. It also provides a countdown timer to the next upcoming birthday, total days lived since birth, and a quick-read age summary suitable for both casual and official use.',
      km: 'ម៉ាស៊ីនគិតអាយុគណនាអាយុជីវសាស្ត្រពិតប្រាកដ ចាប់ពីថ្ងៃកំណើតដល់ថ្ងៃគោលដៅ ដោយបង្ហាញជា ឆ្នាំ ខែ សប្តាហ៍ ថ្ងៃ ម៉ោង និងនាទី ព្រមទាំងរាប់ថយក្រោយដល់ថ្ងៃខួបបន្ទាប់។',
    },
    howItWorks: {
      en: 'The engine implements the ISO 8601 chronological interval standard. It subtracts the birth date from the target date using calendar-aware month and year decomposition, borrowing from higher-order units when the day component underflows. Leap years are detected using the standard rule: divisible by 4, except century years (divisible by 400 rule applies). The birthday countdown uses the JavaScript Date object anchored to UTC midnight to prevent timezone drift artifacts.',
      km: 'ម៉ាស៊ីននេះអនុវត្តតាមស្ដង់ដារ ISO 8601 ដោយដកថ្ងៃកំណើតចេញពីថ្ងៃគោលដៅ ដោយគិតឡើងនូវការប្រែប្រួលប្រវែងខែ ឆ្នាំបង្គ្រប់ (Leap Year) និងប្រើ UTC Midnight ដើម្បីការពារកំហុសម៉ោង Timezone។',
    },
    features: [
      {
        title: { en: 'Six-Dimension Age Breakdown', km: 'បែងចែកអាយុ ៦ វិមាត្រ' },
        desc: { en: 'Shows age in years, months, weeks, total days, total hours, and total minutes lived.', km: 'បង្ហាញអាយុជា ឆ្នាំ ខែ សប្តាហ៍ ថ្ងៃ ម៉ោង និងនាទីសរុប។' },
      },
      {
        title: { en: 'Leap Year & Variable Month Precision', km: 'ត្រឹមត្រូវជាមួយឆ្នាំបង្គ្រប់' },
        desc: { en: 'Handles February 29th birthdays and all calendar irregularities without rounding errors.', km: 'ដំណើរការលេខកំណើតថ្ងៃទី ២៩ ខែកុម្ភៈ និងភាពមិនទៀងទាត់ប្រតិទិនដោយគ្មានកំហុស។' },
      },
      {
        title: { en: 'Next Birthday Countdown Timer', km: 'រាប់ថយក្រោយថ្ងៃខួបកំណើត' },
        desc: { en: 'Displays exact days, hours, and minutes until your next birthday anniversary.', km: 'បង្ហាញថ្ងៃ ម៉ោង និងនាទីនៅសល់ដល់ថ្ងៃខួបកំណើតបន្ទាប់។' },
      },
      {
        title: { en: 'Day of Birth Identification', km: 'ថ្ងៃកំណើតក្នុងសប្តាហ៍' },
        desc: { en: 'Calculates and displays the weekday name (Monday, Tuesday...) of your birth date.', km: 'គណនា និងបង្ហាញថ្ងៃនៃសប្តាហ៍នៃថ្ងៃខែកំណើតរបស់អ្នក (ចន្ទ អង្គារ...)។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Official Document Age Verification', km: 'ផ្ទៀងផ្ទាត់អាយុសម្រាប់ឯកសារ' },
        desc: { en: 'HR departments and civil servants verify exact age eligibility for pension, passport renewal, and retirement thresholds in Cambodia.', km: 'ផ្នែក HR និងមន្ត្រីរាជការប្រើដើម្បីផ្ទៀងផ្ទាត់អាយុលក្ខណៈ សម្រាប់សោធននិវត្តន៍ ឬការបន្តលិខិតឆ្លងដែន។' },
      },
      {
        title: { en: 'Medical Age-Based Dosage Calculation', km: 'ការគណនាថ្នាំតាមអាយុ' },
        desc: { en: 'Pharmacists and paediatric nurses calculate precise pediatric age in weeks and months for weight-based drug dosing protocols.', km: 'ពេទ្យ និងគិលានុបដ្ឋាយិការប្រើដើម្បីកំណត់អាយុកុមារជាខែ/សប្តាហ៍ស្ថិតក្នុងការគណនាកម្រិតថ្នាំ។' },
      },
      {
        title: { en: 'Educational & School Enrollment', km: 'ការចូលរៀន និងការសិក្សា' },
        desc: { en: 'Parents and school administrators verify if a child meets the minimum age requirement for Grade 1 enrollment in Cambodia (6 years old by October 1st).', km: 'ឪពុកម្ដាយ និងសាលារៀនផ្ទៀងផ្ទាត់ថាតើកូនមានអាយុគ្រប់ ៦ ឆ្នាំ (ត្រឹម ០១ តុលា) ដើម្បីចុះឈ្មោះចូលរៀន ថ្នាក់ទី ១ ។' },
      },
    ],
    standards: {
      en: 'Implements ISO 8601 date and duration notation. Age calculations follow the Gregorian proleptic calendar as specified by ISO 8601:2019 and RFC 3339.',
      km: 'អនុវត្តតាមស្ដង់ដារ ISO 8601 ការចារ Date Duration និងប្រតិទិន Gregorian Proleptic តាម RFC 3339។',
    },
    extraFaqs: [
      {
        question: {
          en: 'How is the age calculated if I was born on February 29th in a leap year?',
          km: 'តើអាយុត្រូវបានគណនាយ៉ាងដូចម្ដេច ប្រសិនបើខ្ញុំកើតនៅថ្ងៃទី ២៩ ខែកុម្ភៈ?',
        },
        answer: {
          en: 'In non-leap years, the birthday is treated as March 1st for age-completion purposes. The calculator accurately handles this edge case with ISO 8601 duration rules.',
          km: 'ក្នុងឆ្នាំដែលមិនមែនជាឆ្នាំបង្គ្រប់ ថ្ងៃខួបបន្ទាប់នឹងត្រូវបានចាត់ទុកថាជាថ្ងៃទី ០១ ខែមីនា ស្របតាមច្បាប់ ISO 8601 Duration។',
        },
      },
      {
        question: {
          en: 'Can I calculate the age of a company, property, or historical event?',
          km: 'តើខ្ញុំអាចប្រើដើម្បីគណនាអាយុក្រុមហ៊ុន អចលនទ្រព្យ ឬព្រឹត្តិការណ៍ប្រវត្តិសាស្ត្របានទេ?',
        },
        answer: {
          en: 'Yes. Any historical or future date can be used as the start date, making this tool suitable for calculating the age of buildings, institutions, marriages, and more.',
          km: 'អាចប្រើបាន! ថ្ងៃខែឆ្នាំប្រវត្តិសាស្ត្រ ឬអនាគតណាមួយអាចជ្រើសរើសបាន ដូច្នេះឧបករណ៍នេះស័ក្តិសមសម្រាប់ការគណនាអាយុអគារ ស្ថាប័ន ឬការរៀបការ។',
        },
      },
    ],
    relatedGuideSlug: 'understanding-buddhist-era-calendar',
  },

  'percentage-calculator': {
    overview: {
      en: 'The Percentage Calculator provides three distinct mathematical operation modes covering the full spectrum of practical percentage computations. Mode 1 computes what a specified percentage of a given number equals (e.g., "What is 15% of 250?"). Mode 2 determines what percentage one number represents of another (e.g., "45 is what percent of 180?"). Mode 3 calculates the relative percentage increase or decrease between two values — the core formula used in financial reporting, discount pricing, population growth analysis, and academic score comparisons. All three modes display the formula applied alongside the result, enabling transparent mathematical verification.',
      km: 'ម៉ាស៊ីនគិតភាគរយផ្ដល់ ៣ របៀបគណនា: ភាគរយនៃចំនួន ចំនួនជាភាគរយ និងការប្រែប្រួលជាភាគរយ ដែលមានប្រយោជន៍ក្នុងអាជីវកម្ម ហិរញ្ញវត្ថុ និងការរាយការណ៍ទិន្នន័យ។',
    },
    howItWorks: {
      en: 'Each calculation mode applies its own algebraic formula. Mode 1: Result = (Percentage / 100) × Number. Mode 2: Percentage = (Part / Whole) × 100. Mode 3: Change % = ((New Value − Old Value) / |Old Value|) × 100. The engine validates inputs for division-by-zero and negative denominators, presenting error messages with mathematical context. Results are rounded to two decimal places consistent with standard financial rounding conventions.',
      km: 'របៀបទី ១: Result = (%) ÷ 100 × Number. របៀបទី ២: % = (Part ÷ Whole) × 100. របៀបទី ៣: % ប្រែប្រួល = ((ថ្មី − ចាស់) ÷ |ចាស់|) × 100 ។ ប្រព័ន្ធត្រួតពិនិត្យការបែងចែកដោយ 0 ហើយបង្ហាញទម្រង់ 2 ខ្ទង់ទសភាគ ស្របតាមស្ដង់ដារហិរញ្ញវត្ថុ។',
    },
    features: [
      {
        title: { en: 'Three Calculation Modes', km: 'របៀបគណនា ៣ ប្រភេទ' },
        desc: { en: 'What is X% of Y? / X is what % of Y? / Percentage change between two values.', km: 'X% នៃ Y ស្មើប៉ុន្មាន? / X ជាប៉ុន្មាន% នៃ Y? / ការប្រែប្រួលជា%។' },
      },
      {
        title: { en: 'Formula Transparency', km: 'បង្ហាញរូបមន្តគណនា' },
        desc: { en: 'Every result shows the exact formula used so you can verify and learn the calculation process.', km: 'លទ្ធផលគ្រប់ប្រភេទបង្ហាញរូបមន្តដែលបានប្រើ ជួយឱ្យអ្នកយល់ដំណើរការគណនា។' },
      },
      {
        title: { en: 'Negative & Decrease Detection', km: 'ស្គាល់ការថយចុះ (ធ្លាក់%)' },
        desc: { en: 'Clearly labels negative percentage changes as decreases with red visual indicators.', km: 'ការប្រែប្រួលអវិជ្ជមានត្រូវបានលាបពណ៌ក្រហម ដោយបង្ហាញថ្លែងការណ៍ "ថយចុះ" ច្បាស់លាស់។' },
      },
      {
        title: { en: 'Zero & Edge-Case Validation', km: 'ការពារការចែកដោយ ០' },
        desc: { en: 'Detects division-by-zero scenarios and invalid inputs before calculation.', km: 'ប្រព័ន្ធត្រួតពិនិត្យការបញ្ចូលលេខ ០ ជាហារ ឬការបញ្ចូលខុស មុននឹងគណនា។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Retail Discount & Sale Price', km: 'គណនាបញ្ចុះតម្លៃ' },
        desc: { en: 'Shoppers and merchants calculate final prices after applying 10%, 20%, or 30% discounts during Cambodian sales events.', km: 'អ្នកទិញ និងអ្នកលក់គណនាតម្លៃបន្ទាប់ពីបញ្ចុះ ១០% ២០% ៣០% ក្នុងរដូវបុណ្យ។' },
      },
      {
        title: { en: 'Academic Grade & Score Analysis', km: 'វិភាគពិន្ទុ និងថ្នាក់ '  },
        desc: { en: 'Students convert raw exam marks (e.g., 78/100) to percentage scores and determine grade thresholds.', km: 'សិស្ស/និស្សិតបម្លែងពិន្ទុ (ឧ. ៧៨/១០០) ទៅជាភាគរយ ហើយតម្រង់ជំហានកំណត់ថ្នាក់ A, B, C។' },
      },
      {
        title: { en: 'Business Revenue Growth Reporting', km: 'ការរាយការណ៍ប្រាក់ចំណូលអាជីវកម្ម' },
        desc: { en: 'Accountants compute quarterly revenue percentage growth or decline for investor reports and tax filings.', km: 'គណនេយ្យករគណនាការកើន/ថយចុះប្រាក់ចំណូលប្រចាំត្រីមាស សម្រាប់ការរាយការណ៍ទៅអ្នកវិនិយោគ ឬភ្នាក់ងារពន្ធ។' },
      },
    ],
    standards: {
      en: 'Percentage calculations follow standard algebraic conventions. Rounding complies with ASTM E29 and common financial rounding to 2 decimal places.',
      km: 'ការគណនាភាគរយអនុលោមតាមស្ដង់ដារពីជគណិត។ ការបូករំជ្រៅស្ថិតក្នុងស្ដង់ដារ ASTM E29 ២ ខ្ទង់ទសភាគ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'How do I calculate VAT (Value Added Tax) in Cambodia?',
          km: 'តើខ្ញុំអាចប្រើដើម្បីគណនាពន្ធ VAT នៅប្រទេសកម្ពុជាយ៉ាងដូចម្ដេច?',
        },
        answer: {
          en: 'Cambodia\'s standard VAT rate is 10%. Use Mode 1: enter 10 as the percentage and the pre-tax price as the number. The result is the VAT amount; add it to the original price for the total.',
          km: 'ពន្ធ VAT នៅកម្ពុជាគឺ ១០%។ ប្រើមុខងារទី ១: ដាក់ ១០ ជាភាគរយ និងតម្លៃដើមមុនពន្ធ ហើយលំ VAT ត្រូវយកបូករួមជាតម្លៃសរុប។',
        },
      },
      {
        question: {
          en: 'What is the formula for percentage increase?',
          km: 'តើរូបមន្តគណនាការកើនឡើងជាភាគរយ (%) ជាអ្វី?',
        },
        answer: {
          en: 'Percentage Increase = ((New Value − Old Value) / Old Value) × 100. For example, if revenue grew from $800 to $1,000, the increase is ((1000-800)/800) × 100 = 25%.',
          km: '% ការកើន = ((តម្លៃថ្មី − តម្លៃចាស់) ÷ តម្លៃចាស់) × 100 ។ ឧទាហរណ៍ ប្រាក់ចំណូលពី $800 ទៅ $1,000 ការកើនគឺ 25%។',
        },
      },
    ],
    relatedGuideSlug: 'cambodian-riel-currency-and-number-system',
  },

  'bmi-calculator': {
    overview: {
      en: 'The BMI (Body Mass Index) Calculator measures the ratio of body weight to height squared, producing an internationally recognized screening metric for underweight, normal weight, overweight, and obesity classifications. The tool supports both Metric (kilograms and centimetres) and Imperial (pounds and inches) unit systems and applies two separate classification tables: the standard WHO global thresholds and the WHO Asia-Pacific refined thresholds, which account for the statistically higher cardiometabolic risk observed in East and Southeast Asian populations at lower BMI values than their Western counterparts. The calculator also computes your ideal healthy weight range for your given height.',
      km: 'ម៉ាស៊ីនគិត BMI (Body Mass Index) វាស់ស្មើទម្ងន់ ÷ កម្ពស់² ស្របតាមស្ដង់ដារ WHO ពិភពលោក និង WHO អាស៊ីប៉ាស៊ីហ្វិក ដើម្បីចាត់ថ្នាក់ Underweight, Normal, Overweight, Obesity ព្រមទាំងបង្ហាញទម្ងន់ល្អសម្រាប់កម្ពស់របស់អ្នក។',
    },
    howItWorks: {
      en: 'The BMI formula is: BMI = weight(kg) / (height(m))². For imperial inputs, the tool converts pounds to kilograms (÷ 2.20462) and inches to metres (÷ 39.3701) before applying the formula. The result is then compared against two threshold tables: WHO global (Underweight <18.5, Normal 18.5–24.9, Overweight 25.0–29.9, Obese ≥30.0) and WHO Asia-Pacific (Underweight <18.5, Normal 18.5–22.9, Overweight 23.0–24.9, Obese ≥25.0). Healthy weight range is back-calculated from normal BMI bounds for the entered height.',
      km: 'រូបមន្ត BMI = ទម្ងន់(kg) ÷ (កម្ពស់(m))²។ ប្រព័ន្ធប្តូរ lbs/inches ទៅ kg/m មុននឹងប្រើរូបមន្ត ហើយប្រៀបធៀបលទ្ធផលជាមួយតារាង WHO ពិភពលោក និង WHO អាស៊ីប៉ាស៊ីហ្វិក។',
    },
    features: [
      {
        title: { en: 'Metric & Imperial Unit Support', km: 'គាំទ្រ kg/cm និង lbs/inches' },
        desc: { en: 'Toggle between kilogram/centimetre and pound/inch input with automatic unit conversion.', km: 'ប្ដូររវាង kg/cm និង lbs/inch ដោយប្រព័ន្ធបម្លែងឯកតាស្វ័យប្រវត្តិ។' },
      },
      {
        title: { en: 'WHO Global & Asia-Pacific Thresholds', km: 'ស្ដង់ដារ WHO ពិភពលោក និងអាស៊ី' },
        desc: { en: 'Compares your BMI against both universal WHO and Southeast Asian-specific reference ranges.', km: 'ប្រៀបធៀប BMI ជាមួយស្ដង់ដារ WHO ទូទៅ និងស្ដង់ដារ WHO សម្រាប់ប្រជាជនអាស៊ីអាគ្នេយ៍ជាក់ស្ដែង។' },
      },
      {
        title: { en: 'Visual BMI Gauge Meter', km: 'ក្រាហ្វ BMI មើលឃើញ' },
        desc: { en: 'Interactive colour-coded gauge displays your BMI position across all health zones.', km: 'ក្រាហ្វលាបពណ៌ interactive បង្ហាញទីតាំង BMI របស់អ្នកក្នុងស្រទាប់សុខភាពគ្រប់ប្រភេទ។' },
      },
      {
        title: { en: 'Healthy Weight Range Calculator', km: ' គណនាទម្ងន់ល្អ (Healthy Range)' },
        desc: { en: 'Calculates the ideal weight window for your specific height based on normal BMI boundaries.', km: 'គណនាទម្ងន់ដ៏ល្អបំផុតសម្រាប់កម្ពស់ជាក់ស្ដែងរបស់អ្នក ស្របតាមព្រំដែន BMI ធម្មតា។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Annual Health Screening', km: 'ពិនិត្យសុខភាពប្រចាំឆ្នាំ' },
        desc: { en: 'Workers and employees use BMI as a pre-screening self-assessment tool before their annual physical health check at Cambodian hospitals.', km: 'បុគ្គលិក និងអ្នកធ្វើការប្រើ BMI ជាការពិនិត្យស្ម័គ្រចិត្តមុនពេលចូលធ្វើការពិនិត្យសុខភាពប្រចាំឆ្នាំ។' },
      },
      {
        title: { en: 'Personal Fitness & Weight Management', km: 'គ្រប់គ្រងទម្ងន់ និងហាត់ប្រាណ' },
        desc: { en: 'Gym members and personal trainers track BMI progress over weeks and months as a fitness metric alongside body fat percentage.', km: 'សមាជិកកន្លែងហាត់ប្រាណ និង Trainer ប្រើ BMI ជាស្ដង់ដារតាមដានដំណើរការកីឡា ហាត់ប្រាណ។' },
      },
      {
        title: { en: 'Nutritional Counselling', km: 'ការណែនាំអំពីអាហារូបត្ថម្ភ' },
        desc: { en: 'Dietitians and community health workers in rural Cambodia use BMI to identify malnourished patients and recommend supplementary feeding programs.', km: 'អ្នកឯកទេសអាហារូបត្ថម្ភ និងអ្នកសុខភាពសហគមន៍ប្រើ BMI ដើម្បីស្គាល់អ្នកជំងឺទំនំ ហើយណែនាំអាហារបន្ថែម។' },
      },
    ],
    standards: {
      en: 'BMI classifications follow the World Health Organization (WHO) Global Database on Body Mass Index standards and the WHO Asia-Pacific Perspective (2000) recommendations for Asian populations.',
      km: 'ការចាត់ថ្នាក់ BMI អនុលោមតាមស្ដង់ដារ WHO Global Database on BMI និង WHO Asia-Pacific Perspective (2000) សម្រាប់ប្រជាជនអាស៊ី។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Is BMI an accurate health indicator for everyone?',
          km: 'តើ BMI គឺជាសូចនាករសុខភាពត្រឹមត្រូវសម្រាប់មនុស្សគ្រប់គ្នាដែរឬទេ?',
        },
        answer: {
          en: 'BMI is a useful population-level screening tool but has limitations for individuals. It does not distinguish between muscle and fat mass, so athletes may register as overweight despite low body fat. Clinicians recommend combining BMI with waist circumference and body composition analysis.',
          km: 'BMI មានប្រយោជន៍ជាឧបករណ៍ Screening ប៉ុន្តែមានដែនកំណត់ — វាមិនអាចបែងចែករវាងម៉ាសសាច់ដុំ និងខ្លាញ់។ គ្លីនិចណែនាំឱ្យប្រើ BMI រួមជាមួយការវាស់ចង្កេះ។',
        },
      },
      {
        question: {
          en: 'Why are the Asian BMI thresholds lower than the global ones?',
          km: 'ហេតុអ្វីបានជាដែនកំណត់ BMI អាស៊ីទាបជាងស្ដង់ដារពិភពលោក?',
        },
        answer: {
          en: 'Research shows that East and Southeast Asian individuals develop type 2 diabetes, hypertension, and cardiovascular disease at lower BMI values (around 23) compared to European populations. WHO Asia-Pacific adjusted thresholds reflect this population-specific cardiometabolic risk profile.',
          km: 'ការស្រាវជ្រាវវិទ្យាសាស្ត្របង្ហាញថា ប្រជាជនអាស៊ីអាគ្នេយ៍ ប្រឈមមុខទឹកនោមផ្អែម រោគ Hypertension និងជំងឺបេះដូង នៅ BMI ទាបជាង (ប្រហែល ២៣) ។ WHO Asia-Pacific ប្រើដែនកំណត់ទាបជាងដើម្បីស្ដែងចំបញ្ហានេះ។',
        },
      },
    ],
    relatedGuideSlug: 'client-side-privacy-guide-for-developer-tools',
  },

  'loan-calculator': {
    overview: {
      en: 'The Loan & Mortgage Calculator is a full-featured amortization tool for computing monthly installment payments, total interest cost, and the complete payment schedule for any fixed-rate loan — personal loans, vehicle financing, commercial property mortgages, and microfinance products offered by Cambodian institutions such as ACLEDA Bank, Canadia Bank, Hattha Bank, and licensed MFI operators. It displays results in both US Dollar (USD) and Cambodian Riel (KHR) using a real-time exchange rate toggle, making it practical for Cambodia\'s dual-currency economy. The full amortization table breaks down every monthly payment into its principal reduction and interest charge components across the entire loan lifespan.',
      km: 'ម៉ាស៊ីនគិតប្រាក់កម្ចីគណនាប្រាក់ត្រូវបង់ប្រចាំខែ ការប្រាក់សរុប និងតារាងរំលស់ពេញលេញ ដោយបង្ហាញជា USD និង KHR ស្ថិតក្នុងសេដ្ឋកិច្ចពីររូបិយប័ណ្ណរបស់ប្រទេសកម្ពុជា ដើម្បីជំនួយក្នុងការសម្រេចចិត្តខ្ចីប្រាក់ ។',
    },
    howItWorks: {
      en: 'The calculator uses the standard annuity amortization formula: Monthly Payment (M) = P × [r(1+r)ⁿ] / [(1+r)ⁿ−1], where P is the principal loan amount, r is the monthly interest rate (annual rate ÷ 12 ÷ 100), and n is the total number of monthly payments. Each row in the amortization table computes interest as the outstanding balance multiplied by the monthly rate, with the remainder of the fixed payment applied to principal reduction until the balance reaches zero at the final payment.',
      km: 'រូបមន្ត: M = P × [r(1+r)ⁿ] ÷ [(1+r)ⁿ−1] ដែល P=ប្រាក់ដើម, r=ការប្រាក់ប្រចាំខែ, n=ចំនួនខែ។ តារាងរំលស់គណនាការប្រាក់ = សមតុល្យ × r ហើយប្រាក់ដើម = M − ការប្រាក់ ក្នុងរាល់ខែ រហូតដល់ balance = 0។',
    },
    features: [
      {
        title: { en: 'Standard Annuity Amortization Formula', km: 'រូបមន្ត Amortization ស្ដង់ដារធនាគារ' },
        desc: { en: 'Uses the industry-standard fixed-rate annuity formula identical to those used by Cambodian commercial banks.', km: 'ប្រើរូបមន្ត Annuity ដូចធនាគារពាណិជ្ជកម្មខ្មែរ (ACLEDA, Canadia, ABA) ប្រើ។' },
      },
      {
        title: { en: 'Full Monthly Amortization Table', km: 'តារាងរំលស់ប្រចាំខែពេញលេញ' },
        desc: { en: 'Shows every month\'s payment split into interest charge and principal reduction across the loan lifespan.', km: 'បង្ហាញការប្រែប្រួលប្រចាំខែ ចែកជាការប្រាក់ និងប្រាក់ដើម ពេញរយៈពេលកម្ចី។' },
      },
      {
        title: { en: 'USD & Khmer Riel Dual Currency', km: 'ព្រួតទ្ទើលប្រាក់ USD និងរៀល' },
        desc: { en: 'Displays all amounts in both USD and KHR using a configurable exchange rate.', km: 'បំប្លែងចំនួនទឹកប្រាក់ URI ទាំង USD និងរៀល ដោយប្រើអត្រាប្ដូររូបិយប័ណ្ណដែលអ្នកកំណត់ ។' },
      },
      {
        title: { en: 'Total Interest & Cost Summary', km: 'ការប្រាក់ និងថ្លៃដើមសរុប' },
        desc: { en: 'Instantly shows total interest paid over the loan term and the total cost of borrowing.', km: 'បង្ហាញការប្រាក់សរុប និងថ្លៃដើមសរុបនៃការខ្ចីប្រាក់ ភ្លាម ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Home Mortgage Planning in Cambodia', km: 'ការរៀបចំផែនការកម្ចីទិញផ្ទះ' },
        desc: { en: 'First-time homebuyers compare monthly repayments across different loan tenors (10, 15, 20 years) and interest rates before signing with HATTHA Bank or LOLC.', km: 'អ្នកទិញផ្ទះលើកដំបូងប្រៀបធៀបប្រាក់ត្រូវបង់ប្រចាំខែ ក្នុងរយៈពេល ១០ ១៥ ២០ ឆ្នាំ មុននឹងចុះហត្ថលេខាជាមួយ HATTHA ឬ LOLC។' },
      },
      {
        title: { en: 'Vehicle & Motorbike Financing', km: 'ការប្រៀបធៀបតម្លៃកម្ចីទិញម៉ូតូ/រថយន្ត' },
        desc: { en: 'Car and motorbike buyers calculate the true cost of financing versus paying cash, comparing 12, 24, and 36-month loan terms from Toyota, Honda, and dealer financing.', km: 'អ្នកទិញម៉ូតូ ឬរថយន្ត គណនាថ្លៃសរុបនៃកម្ចី ១២, ២៤, ៣៦ ខែ ធៀបជាមួយការបង់ពេញភ្លាមៗ។' },
      },
      {
        title: { en: 'SME Business Loan Assessment', km: 'ការប្រៀបធៀបកម្ចីអាជីវកម្ម SME' },
        desc: { en: 'Small business owners in Phnom Penh assess microfinance loan affordability before borrowing working capital from MFI operators.', km: 'ម្ចាស់អាជីវកម្មខ្នាតតូចក្នុងភ្នំពេញ វិភាគការប្រៀបធៀបកម្ចី MFI មុននឹងខ្ចីទុននៃអាជីវកម្ម។' },
      },
    ],
    standards: {
      en: 'Amortization formula follows standard banking practice (equal payment method) consistent with National Bank of Cambodia (NBC) consumer credit disclosure guidelines.',
      km: 'រូបមន្តរំលស់ស្ដង់ដារ Equal Payment Method ស្ថិតក្នុងគោលការណ៍ការលាតត្រដាង Consumer Credit របស់ធនាគារជាតិនៃកម្ពុជា (NBC)។',
    },
    extraFaqs: [
      {
        question: {
          en: 'What is the difference between reducing balance and flat rate interest in Cambodia?',
          km: 'តើការប្រាក់ Reducing Balance និង Flat Rate ខុសគ្នាយ៉ាងណានៅក្នុងប្រទេសកម្ពុជា?',
        },
        answer: {
          en: 'Reducing balance interest (used by most Cambodian banks) charges interest only on the outstanding principal, so interest costs decrease over time. Flat rate interest (common in MFIs) charges the same interest amount each month on the original loan amount, making the effective APR roughly 1.8× higher than the quoted flat rate.',
          km: 'ការប្រាក់ Reducing Balance (ប្រើដោយធនាគារភាគច្រើន) គិតការប្រាក់លើប្រាក់ដើមដែលនៅសល់ — ការប្រាក់ថយចុះក្នុងរាល់ខែ។ ការប្រាក់ Flat Rate (ប្រើដោយ MFI ខ្លះ) គិតលើប្រាក់ដើមដើម — APR ពិតប្រហែល ១.៨ ដង ជាងអ្វីដែលបោះពុម្ភ។',
        },
      },
      {
        question: {
          en: 'How can I lower my total loan interest in Cambodia?',
          km: 'តើខ្ញុំអាចកាត់បន្ថយការប្រាក់សរុបនៃកម្ចីបានយ៉ាងដូចម្ដេច?',
        },
        answer: {
          en: 'The three primary strategies are: (1) Choose a shorter loan term — a 10-year mortgage pays far less interest than a 20-year one at the same rate. (2) Make additional principal payments whenever possible. (3) Refinance at a lower interest rate when the NBC prime rate decreases.',
          km: 'យុទ្ធសាស្ត្រ ៣: (១) ជ្រើសរើសរយៈពេលកម្ចីខ្លី — ១០ ឆ្នាំ ចំណាយការប្រាក់តិចជាងច្រើន ធៀបនឹង ២០ ឆ្នាំ។ (២) បង់ប្រាក់ដើមបន្ថែមពេលណាអាចធ្វើបាន។ (៣) Refinance នៅពេលអត្រា NBC ថយចុះ។',
        },
      },
    ],
    relatedGuideSlug: 'cambodian-riel-currency-and-number-system',
  },

  'date-calculator': {
    overview: {
      en: 'The Date Difference & Calculation tool is a dual-mode calendar arithmetic utility. In Difference Mode, it computes the exact number of calendar days, business weekdays (excluding Saturday and Sunday), weeks, months, and years between any two selected dates. In Add/Subtract Mode, it calculates a future or past date by adding or subtracting a specified number of days, weeks, months, or years from a starting date. Both modes consider the full complexity of the Gregorian calendar, including varying month lengths and leap year corrections. The tool is essential for contract deadline management, probation period calculation, visa expiry tracking, and project timeline planning.',
      km: 'ម៉ាស៊ីនគិតគម្លាតកាលបរិច្ឆេទ ផ្ដល់ ២ របៀប: (១) គណនាគម្លាតរវាងកាលបរិច្ឆេទពីរ ជាថ្ងៃ/ថ្ងៃធ្វើការ/ខែ/ឆ្នាំ (២) គណនាកាលបរិច្ឆេទអនាគត/អតីតដោយបូក/ដកពេលវេលា ។',
    },
    howItWorks: {
      en: 'Date difference uses JavaScript\'s built-in Date arithmetic, subtracting the smaller timestamp from the larger and converting the millisecond result into days (÷ 86,400,000). Business day count iterates through each calendar day, excluding those with getDay() values of 0 (Sunday) or 6 (Saturday). For month and year differences, the engine applies the ISO 8601 duration decomposition algorithm, borrowing days from months when the end day is less than the start day. The Add/Subtract mode uses locale-aware Date mutation to correctly handle month-end boundary cases (e.g., adding 1 month to January 31st gives February 28th/29th, not March 3rd).',
      km: 'ការគណនាប្រើ JavaScript Date arithmetic ស្ករ Millisecond ÷ 86,400,000 = ថ្ងៃ។ ថ្ងៃធ្វើការ loop ពិនិត្យ getDay() ≠ 0,6 ។ ការបូក/ដករបៀប Add/Subtract ដោះស្រាយ boundary ចុងខែ (ឧ. Jan 31 + 1ខែ = Feb 28)។',
    },
    features: [
      {
        title: { en: 'Calendar & Business Day Counting', km: 'ថ្ងៃប្រតិទិន និងថ្ងៃធ្វើការ' },
        desc: { en: 'Computes both total calendar days and working weekdays between any two dates.', km: 'គណនាថ្ងៃប្រតិទិន និងថ្ងៃធ្វើការ (មិនរាប់ទស/អាទិត្យ) ចន្លោះកាលបរិច្ឆេទ។' },
      },
      {
        title: { en: 'Add or Subtract Date Intervals', km: 'បូក/ដកថ្ងៃ ខែ ឆ្នាំ' },
        desc: { en: 'Computes a target date by adding or subtracting days, weeks, months, or years from any starting date.', km: 'គណនាថ្ងៃគោលដៅដោយបូក ឬដកថ្ងៃ/ខែ/ឆ្នាំ ចេញពីថ្ងៃចាប់ផ្ដើម។' },
      },
      {
        title: { en: 'Month-End Boundary Handling', km: 'ដោះស្រាយ Boundary ចុងខែ' },
        desc: { en: 'Correctly handles edge cases like adding months to January 31st or skipping February 29th in non-leap years.', km: 'ដំណើរការករណី Jan 31 + ១ ខែ = Feb 28 ឬ Feb 29 ដោយឥតកំហុស ។' },
      },
      {
        title: { en: 'Multi-Unit Result Display', km: 'បង្ហាញលទ្ធផលច្រើន Unit' },
        desc: { en: 'Shows result simultaneously as total days, weeks, months, and years for flexible reporting.', km: 'បង្ហាញលទ្ធផលជា ថ្ងៃ សប្តាហ៍ ខែ ឆ្នាំ ដោយស្រប ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Contract & Visa Deadline Tracking', km: 'តាមដានកាលបរិច្ឆេទ Visa និងកិច្ចសន្យា' },
        desc: { en: 'Expatriates in Cambodia track how many days remain on their business or tourist visa before renewal is required.', km: 'ជនបរទេសនៅប្រទេសកម្ពុជាប្រើដើម្បីគណនាថ្ងៃ Visa នៅសល់ ឬដើម្បីជ្រើសរើសថ្ងៃ Renewal ត្រឹមត្រូវ ។' },
      },
      {
        title: { en: 'Employee Probation Period Calculation', km: 'ការគណនារយៈពេលសាកល្បងការងារ' },
        desc: { en: 'HR managers calculate the end date of a 3-month or 6-month employment probation period to schedule confirmation reviews.', km: 'ផ្នែកធនធានមនុស្សគណនាថ្ងៃបញ្ចប់ដំណាក់កាលសាកល្បង ៣ ខែ ឬ ៦ ខែ ដើម្បីណាត់ប្រជុំ Confirmation ។' },
      },
      {
        title: { en: 'Project & Construction Deadline Planning', km: 'រៀបចំផែនការគម្រោង និងសំណង់' },
        desc: { en: 'Project managers and construction supervisors add working days to a start date to calculate the delivery milestone.', km: 'អ្នកគ្រប់គ្រងគម្រោង និងប្រធានសំណង់ប្រើដើម្បីបូកថ្ងៃធ្វើការ និងគណនាថ្ងៃផ្ញើផ្លូវ Milestone ។' },
      },
    ],
    standards: {
      en: 'Date arithmetic follows ISO 8601:2019 date and duration standard. Gregorian calendar rules are applied including leap year detection per RFC 3339.',
      km: 'ប្រតិទិន Gregorian ដំណើរការតាម ISO 8601:2019 Duration Standard និង RFC 3339 ការស្គាល់ Leap Year ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Does the business day count exclude Cambodian public holidays?',
          km: 'តើការគណនាថ្ងៃធ្វើការ ដករាល់ថ្ងៃឈប់សម្រាកជាតិនៃប្រទេសកម្ពុជាដែរឬទេ?',
        },
        answer: {
          en: 'Currently, the business day counter excludes only Saturdays and Sundays. Cambodian national holidays (e.g., Khmer New Year, Pchum Ben) are not automatically excluded since holiday schedules vary by year. We recommend cross-checking critical deadlines against the official Royal Government holiday calendar.',
          km: 'ពេលបច្ចុប្បន្ន ការគណនាថ្ងៃធ្វើការ ដកតែថ្ងៃសៅរ៍ និងថ្ងៃអាទិត្យ។ ថ្ងៃឈប់សម្រាកជាតិខ្មែរ (ចូលឆ្នាំ ភ្ជុំបិណ្ឌ...) មិនទាន់ត្រូវបានដកនៅឡើយ ទេ — ណែនាំឱ្យពិនិត្យជាមួយប្រតិទិនផ្លូវការ RGC ។',
        },
      },
      {
        question: {
          en: 'What is the maximum date range this tool can calculate?',
          km: 'តើឧបករណ៍នេះអាចគណនាគម្លាតកាលបរិច្ឆេទរហូតដល់ប៉ុន្មានឆ្នាំ?',
        },
        answer: {
          en: 'The JavaScript Date object handles dates from approximately 275,760 CE down to 271,821 BCE, so the practical range covers all modern and historical dates from 0001 CE onward without limitation.',
          km: 'JavaScript Date Object ដំណើរការថ្ងៃខែ ចាប់ពី 271,821 BCE ដល់ 275,760 CE — ដែលគ្របដណ្ដប់គ្រប់ប្រវត្តិសាស្ត្រ និងអនាគតដែលទំនងជាត្រូវការ។',
        },
      },
    ],
    relatedGuideSlug: 'understanding-buddhist-era-calendar',
  },

  'base64-encoder-decoder': {
    overview: {
      en: 'The Base64 Encoder & Decoder is a privacy-first, client-side tool for converting plain text, UTF-8 strings (including full Unicode and Khmer script), and binary file content (images, PDFs) into their Base64 ASCII representation and back. Base64 encoding (defined in RFC 4648) is a binary-to-text encoding scheme that represents binary data using 64 printable ASCII characters (A–Z, a–z, 0–9, +, /), making it safe to embed binary payloads inside text-only channels such as JSON request bodies, XML documents, CSS data URIs, and email MIME attachments. This tool handles the full UTF-8 byte encoding pipeline required for non-ASCII characters, a step that many competing online encoders incorrectly omit, producing garbled output for Khmer, Chinese, or Arabic input.',
      km: 'ឧបករណ៍ Base64 Encoder & Decoder បម្លែងអត្ថបទ UTF-8 (រួមទាំងអក្សរខ្មែរ) ឯកសារ និងរូបភាព ទៅជាទម្រង់ Base64 ASCII ស្ដង់ដារ RFC 4648 ។',
    },
    howItWorks: {
      en: 'For text encoding, the tool first encodes the input string as a UTF-8 byte array using TextEncoder, then converts each byte to a binary string with String.fromCharCode(), and finally applies btoa() to generate the Base64 output. This three-stage pipeline ensures Khmer characters (multi-byte in UTF-8) are correctly represented. For decoding, atob() reverses the Base64 to a binary string, Uint8Array captures each byte code, and TextDecoder reconstructs the original UTF-8 string. For image/file encoding, the FileReader API reads the file as a DataURL, which is natively Base64-encoded.',
      km: 'ការ Encode អត្ថបទ: TextEncoder → byte array → String.fromCharCode() → btoa() ។ Decode: atob() → Uint8Array → TextDecoder() ។ ឯកសារ/រូបភាព: FileReader API DataURL (Base64 ដោយដើម)。',
    },
    features: [
      {
        title: { en: 'Full UTF-8 & Khmer Script Support', km: 'គាំទ្រ UTF-8 ពេញលេញ រួមទាំងអក្សរខ្មែរ' },
        desc: { en: 'Correctly handles multi-byte Khmer, Chinese, Arabic, and emoji characters using TextEncoder/TextDecoder pipeline.', km: 'ដំណើរការអក្សរខ្មែរ ចិន អារ៉ាប់ Emoji ដែលជា multi-byte UTF-8 ដោយឥតកំហុស ។' },
      },
      {
        title: { en: 'Image & File to Base64 Data URI', km: 'បម្លែងរូបភាព/ឯកសារទៅ Base64 Data URI' },
        desc: { en: 'Drag-and-drop or browse to encode any image (PNG, JPG, GIF, SVG) into a CSS/HTML-ready Base64 data URL.', km: 'Drag-and-drop ឬ Browse ដើម្បីបម្លែងរូបភាព PNG/JPG/SVG ទៅ Base64 Data URI សម្រាប់ CSS/HTML ។' },
      },
      {
        title: { en: 'URL-Safe Base64 Variant', km: 'ទម្រង់ URL-Safe Base64' },
        desc: { en: 'Optionally outputs URL-safe Base64 (RFC 4648 §5), replacing + with - and / with _ for safe embedding in URLs.', km: 'ជម្រើស URL-Safe Base64 (RFC 4648 §5) ប្ដូរ + → - និង / → _ ។' },
      },
      {
        title: { en: 'Decoded Image Preview', km: 'Preview រូបភាព Decoded' },
        desc: { en: 'When decoding a Base64 image string, the tool renders a live visual preview of the decoded image inline.', km: 'ពេល Decode Base64 ដែលជារូបភាព ឧបករណ៍នេះ Preview រូបភាពឡើងវិញភ្លាម ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Embedding Images in CSS & HTML', km: 'ភ្ជាប់រូបភាពក្នុង CSS/HTML' },
        desc: { en: 'Frontend developers embed small icon SVGs or loading spinners as Base64 data URIs to eliminate HTTP image requests.', km: 'Front-end developer ប្រើ Base64 Data URI ស្ថានភាព CSS/HTML ដើម្បីបោសសម្អាត HTTP Request ។' },
      },
      {
        title: { en: 'API Payload & JSON Encoding', km: 'Encode ទិន្នន័យ JSON/API' },
        desc: { en: 'Backend engineers encode binary file attachments as Base64 before including them in JSON API request bodies or webhook payloads.', km: 'Backend Engineer Encode ឯកសារ Binary ជា Base64 មុននឹងបញ្ចូលក្នុង JSON API body ។' },
      },
      {
        title: { en: 'Email MIME Attachment Debugging', km: 'Debug MIME Attachment Email' },
        desc: { en: 'Email developers decode Base64-encoded MIME attachment blocks from raw .eml files to inspect attached documents.', km: 'Developer Decode Base64 MIME Attachment ពី raw .eml ដើម្បីពិនិត្យ ឬ Debug ឯកសារភ្ជាប់ Email ។' },
      },
    ],
    standards: {
      en: 'Implements RFC 4648 (The Base16, Base32, and Base64 Data Encodings) standard encoding and URL-safe variant (§5). UTF-8 encoding follows Unicode Standard 15.0.',
      km: 'ដំណើរការតាមស្ដង់ដារ RFC 4648 Base64 Encoding និង URL-safe variant (§5) ។ UTF-8 ដំណើរការតាម Unicode Standard 15.0 ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Does Base64 encoding encrypt my data?',
          km: 'តើ Base64 Encoding ធ្វើការ Encrypt ទិន្នន័យដែរឬទេ?',
        },
        answer: {
          en: 'No. Base64 is an encoding scheme, not encryption. It is trivially reversible by anyone with a decoder. Never use Base64 to protect sensitive data — use AES-256 or RSA encryption instead.',
          km: 'ទេ! Base64 គឺជា Encoding ដែលអ្នកណាក៏ Decode បាន — វាមិនមែន Encryption ទេ ។ មិត្តណែនាំឱ្យប្រើ AES-256 ឬ RSA សម្រាប់ការការពារទិន្នន័យ ។',
        },
      },
      {
        question: {
          en: 'Why is Base64 output approximately 33% larger than the original input?',
          km: 'ហេតុអ្វីបានជា Base64 Output ធំជាង Input ដើមប្រហែល ៣៣%?',
        },
        answer: {
          en: 'Base64 encodes every 3 bytes of binary data into 4 ASCII characters, resulting in a 4/3 size ratio (≈33% overhead). This size increase is the trade-off for making binary content safe to transmit in text-only channels.',
          km: 'Base64 Encode ៣ Bytes → ៤ Characters ASCII ដូច្នេះ size ratio = 4/3 ≈ ១.៣៣ ។ ការ overhead ១/៣ នេះ ជាថ្លៃដើមដែលត្រូវបង់ ដើម្បីធ្វើឱ្យ binary ផ្ញើបានក្នុង text channel ។',
        },
      },
    ],
    relatedGuideSlug: 'client-side-privacy-guide-for-developer-tools',
  },

  'url-encoder-decoder': {
    overview: {
      en: 'The URL Encoder & Decoder converts special characters in URLs and query string parameters into their percent-encoded equivalents (e.g., space → %20, & → %26, = → %3D) and reverses the process for decoding. Percent-encoding, defined in RFC 3986, is mandatory for URIs because only a limited subset of ASCII characters (the "unreserved" characters: A–Z, a–z, 0–9, -, _, ., ~) are safe to use in URLs without transformation. All other characters — including Khmer Unicode, spaces, punctuation, and special symbols — must be encoded to ensure correct parsing by web servers, browsers, and HTTP intermediaries. The tool additionally offers a query string parameter inspector that parses and displays individual key-value pairs from a complete URL.',
      km: 'ឧបករណ៍ URL Encoder & Decoder បម្លែងតួអក្សរពិសេសក្នុង URL (ដូចជា ដកឃ្លា → %20) ទៅជា Percent-encoded ស្ដង់ដារ RFC 3986 ហើយ Decode ត្រឡប់ ។',
    },
    howItWorks: {
      en: 'The tool exposes two JavaScript encoding functions with distinct scopes. encodeURIComponent() encodes everything except unreserved characters (RFC 3986 §2.3), making it ideal for encoding query parameter values and path segments. encodeURI() preserves characters that have structural meaning in a full URI (: / ? # [ ] @ ! $ & \' ( ) * + , ; =), making it suitable for encoding a complete URL while preserving its structure. decodeURIComponent() and decodeURI() perform the respective reversals. The parameter inspector splits the query string on & delimiters and decodes each key=value pair independently.',
      km: 'ឧបករណ៍ប្រើ encodeURIComponent() ដើម្បី Encode parameter value ហើយ encodeURI() ដើម្បី Encode URL ពេញ ។ ការ Decode ប្រើ decodeURIComponent() / decodeURI() ។',
    },
    features: [
      {
        title: { en: 'Full & Component Encoding Modes', km: 'Encode URL ពេញ / Component' },
        desc: { en: 'Choose between full URL encoding (encodeURI) and component encoding (encodeURIComponent) for different use cases.', km: 'ជ្រើសរើស encodeURI (URL ពេញ) ឬ encodeURIComponent (parameter value) ។' },
      },
      {
        title: { en: 'Query Parameter Inspector', km: 'ពិនិត្យ Query Parameter' },
        desc: { en: 'Parses any URL and displays decoded key-value query parameters in a clean table.', km: 'Parse URL ហើយបង្ហាញ Key-Value Query Parameter ក្នុង Table ច្បាស់លាស់ ។' },
      },
      {
        title: { en: 'Khmer & Unicode Character Support', km: 'គាំទ្រ Unicode/អក្សរខ្មែរ' },
        desc: { en: 'Properly percent-encodes Khmer Unicode characters (U+1780–U+17FF) into their UTF-8 byte-sequence percent form.', km: 'Percent-encode អក្សរខ្មែរ Unicode (U+1780–U+17FF) ទៅ UTF-8 Percent-encoded form ត្រឹមត្រូវ ។' },
      },
      {
        title: { en: 'Bidirectional One-Click Conversion', km: 'Encode/Decode ក្នុងការចុចតែមួយ' },
        desc: { en: 'Toggle instantly between encoded and decoded output without re-entering input.', km: 'ប្ដូររវាង Encoded/Decoded ភ្លាម ដោយចុចតែ ១ ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'API Query String Construction', km: 'សាងសង់ Query String API' },
        desc: { en: 'Backend developers encode search terms, filter values, and Khmer text before appending them as query parameters to REST API request URLs.', km: 'Backend Developer Encode ពាក្យស្វែងរក Khmer និង Filter ក្នុង Query String REST API ។' },
      },
      {
        title: { en: 'Web Scraping & URL Debugging', km: 'Debug URL / Web Scraping' },
        desc: { en: 'Developers decode encoded URLs from browser address bars or server logs to inspect raw parameter values.', km: 'Developer Decode URL ពី browser address bar ឬ server log ដើម្បីពិនិត្យ parameter value ។' },
      },
      {
        title: { en: 'Email & SMS Deep Link Generation', km: 'បង្កើត Deep Link Email/SMS' },
        desc: { en: 'Marketers encode promotional content into safe mailto: or SMS deep links with pre-filled subject and body text.', km: 'ក្រុម Marketing Encode ខ្លឹមសារ Promotion ទៅជា mailto: ឬ SMS deep link ដែលមាន subject/body បំពេញ ។' },
      },
    ],
    standards: {
      en: 'Implements RFC 3986 (Uniform Resource Identifier: Generic Syntax) percent-encoding rules. UTF-8 encoding of non-ASCII characters follows RFC 3987 (Internationalized Resource Identifiers).',
      km: 'ដំណើរការតាមស្ដង់ដារ RFC 3986 Percent-encoding Rule និង RFC 3987 IRI ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'When should I use encodeURIComponent versus encodeURI?',
          km: 'តើត្រូវប្រើ encodeURIComponent ឬ encodeURI ពេលណា?',
        },
        answer: {
          en: 'Use encodeURIComponent() for individual query parameter values and URL path segments (it encodes &, =, ?, /, +, etc.). Use encodeURI() only when encoding a complete URL that already has proper structure — it preserves :, /, ?, #, and & so they retain their URL syntax roles.',
          km: 'ប្រើ encodeURIComponent() សម្រាប់ parameter value (Encode &, =, ?, /...) ។ ប្រើ encodeURI() សម្រាប់ URL ពេញ ដោយ preserve :, /, ?, # ។',
        },
      },
      {
        question: {
          en: 'Why does a space appear as %20 in some URLs and + in others?',
          km: 'ហេតុអ្វីបានជាដកឃ្លានៅក្នុង URL ប្រែជា %20 ក្នុងករណីខ្លះ ហើយ + ក្នុងករណីខ្លះ?',
        },
        answer: {
          en: 'RFC 3986 mandates %20 for space in URIs. The + notation for space originated in HTML form encoding (application/x-www-form-urlencoded, WHATWG URL spec), where + is shorthand for a space in query strings only. Both forms are valid in query strings but %20 is preferred in modern REST APIs.',
          km: '%20 គឺ URI Standard (RFC 3986) ។ + ជា space បានមកពី HTML form application/x-www-form-urlencoded ។ ទាំង ២ ត្រូវ query string ប៉ុន្តែ %20 ត្រូវបានណែនាំក្នុង REST API ទំនើប ។',
        },
      },
    ],
    relatedGuideSlug: 'client-side-privacy-guide-for-developer-tools',
  },

  'timestamp-converter': {
    overview: {
      en: 'The Unix Timestamp Converter translates Unix epoch timestamps — the number of seconds (or milliseconds) elapsed since January 1, 1970 00:00:00 UTC — into human-readable date and time representations across multiple time zones, with dedicated support for Indochina Time (ICT, UTC+7), the official timezone of Cambodia, Laos, Thailand, and Vietnam. Unix timestamps are the universal time representation in backend engineering: all major databases (PostgreSQL, MySQL, MongoDB), cloud platforms (AWS, GCP, Firebase), logging systems (CloudWatch, Datadog, Splunk), and programming language standard libraries use epoch integers as their internal time currency. The reverse conversion — date picker to timestamp — enables developers to construct time-based database queries and API filters.',
      km: 'ឧបករណ៍ Unix Timestamp Converter បម្លែង Epoch (seconds/milliseconds ចាប់ពី Jan 1 1970 UTC) ទៅជាថ្ងៃខែ ហើយ Timezone ច្រើន ជាពិសេស ICT UTC+7 (ប្រទេសកម្ពុជា) ។',
    },
    howItWorks: {
      en: 'The tool detects whether the input is seconds-length (10 digits, <2,000,000,000) or milliseconds-length (13 digits) and normalizes to milliseconds before constructing a JavaScript Date object. It then formats the date string in multiple timezones using Intl.DateTimeFormat with explicit timeZone options: \'UTC\', \'Asia/Phnom_Penh\', and the browser\'s local timezone. The current timestamp button polls Date.now() in real-time with a 1-second refresh interval. For the reverse direction (date-to-timestamp), the tool parses the selected date at midnight UTC and returns both second and millisecond epoch values.',
      km: 'ប្រព័ន្ធ Detect ស្វ័យប្រវត្តិ ១០ digits (seconds) ឬ ១៣ digits (milliseconds) ហើយ normalize ជា milliseconds ○ new Date() ○ Intl.DateTimeFormat ជាមួយ timeZone: \'Asia/Phnom_Penh\' ។',
    },
    features: [
      {
        title: { en: 'Auto-Detect Seconds vs Milliseconds', km: 'Detect ស្វ័យប្រវត្តិ Seconds/Milliseconds' },
        desc: { en: 'Automatically identifies 10-digit second timestamps and 13-digit millisecond timestamps without manual selection.', km: 'ស្គាល់ ១០ digits (seconds) ឬ ១៣ digits (ms) ដោយស្វ័យ ។' },
      },
      {
        title: { en: 'Indochina Time (ICT UTC+7) Display', km: 'ម៉ោងឥណ្ឌូចិន (UTC+7) – ម៉ោងកម្ពុជា' },
        desc: { en: 'Shows the exact date and time in Cambodia/Phnom Penh timezone (Asia/Phnom_Penh) alongside UTC.', km: 'បង្ហាញ Timezone Asia/Phnom_Penh (UTC+7) ស្របជាមួយ UTC ។' },
      },
      {
        title: { en: 'Current Timestamp with Live Refresh', km: 'Timestamp បច្ចុប្បន្ន Live' },
        desc: { en: 'Displays the current Unix timestamp in real-time, refreshing every second.', km: 'បង្ហាញ Unix Timestamp ខ្ញុំពេលនេះ Refresh រាល់ ១ វិនាទី ។' },
      },
      {
        title: { en: 'Date → Timestamp Reverse Conversion', km: 'ថ្ងៃខែ → Timestamp Reverse' },
        desc: { en: 'Convert any human-readable date back to its Unix timestamp in both seconds and milliseconds.', km: 'បម្លែង ថ្ងៃខែ ត្រឡប់ជា Unix Timestamp ជា seconds និង milliseconds ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'API Debugging & Log Analysis', km: 'Debug API / Log Analysis' },
        desc: { en: 'Developers decode epoch timestamps from REST API responses or server log files to identify when specific events occurred in Phnom Penh local time.', km: 'Developer Decode timestamp ពី API response ឬ server log ដើម្បីរកឃើញ Event កើតឡើងម៉ោងប៉ុន្មានម៉ោង ICT ។' },
      },
      {
        title: { en: 'Database Query Time Filtering', km: 'Filter ពេលវេលា Database' },
        desc: { en: 'Backend engineers convert specific calendar dates into epoch ranges to construct WHERE created_at BETWEEN ? AND ? SQL queries.', km: 'Backend Engineer បម្លែងថ្ងៃខែជា Epoch Range ដើម្បី WHERE created_at BETWEEN ? AND ? SQL Query ។' },
      },
      {
        title: { en: 'JWT & Token Expiry Inspection', km: 'ពិនិត្យ JWT Token Expiry' },
        desc: { en: 'Security engineers decode the exp and iat Unix timestamps inside decoded JWT payloads to verify token validity windows.', km: 'Security Engineer Decode exp/iat Timestamp ពី JWT Payload ដើម្បីផ្ទៀងផ្ទាត់ Token Validity ។' },
      },
    ],
    standards: {
      en: 'Unix epoch time follows POSIX.1-2017 standard (IEEE Std 1003.1). Timezone display uses IANA Time Zone Database identifiers (e.g., Asia/Phnom_Penh). Formatting follows RFC 3339 / ISO 8601.',
      km: 'Unix epoch ដំណើរការ POSIX.1-2017 ។ Timezone: IANA TZ Database (Asia/Phnom_Penh) ។ Format: RFC 3339/ISO 8601 ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Why does Cambodia not observe Daylight Saving Time (DST)?',
          km: 'ហេតុអ្វីបានជាប្រទេសកម្ពុជាមិនប្ដូរ Daylight Saving Time (DST)?',
        },
        answer: {
          en: 'Cambodia, like most Southeast Asian countries, is located near the equator where daylight hours vary minimally across seasons, making DST unnecessary. Cambodia operates on a fixed UTC+7 offset year-round, simplifying timestamp arithmetic for systems operating in the region.',
          km: 'ប្រទេសកម្ពុជានៅជិតខ្សែអេក្វាទ័រ ដូច្នេះម៉ោងថ្ងៃ/យប់ ស្ទើរតែមិនប្រែប្រួល — DST ក៏មិនចាំបាច់ ។ UTC+7 ប្ដូរចេញ ។',
        },
      },
      {
        question: {
          en: 'What will happen to Unix timestamps in the year 2038?',
          km: 'តើ Unix Timestamp នឹងជួបបញ្ហាអ្វីនៅឆ្នាំ ២០៣៨?',
        },
        answer: {
          en: 'The "Year 2038 Problem" (Y2K38) affects 32-bit signed integer timestamp storage: the maximum representable value (2,147,483,647) corresponds to January 19, 2038 03:14:07 UTC. Modern 64-bit systems and JavaScript\'s 53-bit number precision are not affected, but legacy embedded systems using 32-bit integers remain vulnerable.',
          km: 'Y2K38 ប៉ះពាល់ 32-bit signed integer timestamp (max = Jan 19 2038) ប៉ុន្តែ JavaScript 64-bit/53-bit number precision មិនជួបបញ្ហានេះ ។ System embedded 32-bit ចាស់ (ដូច Linux kernel ចាស់) ប៉ះពាល់ ។',
        },
      },
    ],
    relatedGuideSlug: 'client-side-privacy-guide-for-developer-tools',
  },

  'color-converter': {
    overview: {
      en: 'The Color Converter & Generator is a comprehensive color science tool that converts color values between the four most widely used digital color models — HEX (hexadecimal RGB), RGB (Red, Green, Blue), HSL (Hue, Saturation, Lightness), and CMYK (Cyan, Magenta, Yellow, Key/Black) — in real time. It additionally evaluates the WCAG 2.1 contrast ratio between the selected color and standard white/black backgrounds, enabling designers to verify accessibility compliance for text legibility at Normal (AA: 4.5:1) and Large Text (AA: 3:1) thresholds. The tool generates a set of monochromatic tints and shades by varying the HSL lightness parameter, providing a design-ready color palette.',
      km: 'ឧបករណ៍ Color Converter & Generator បម្លែងពណ៌ HEX ↔ RGB ↔ HSL ↔ CMYK ភ្លាម ហើយពិនិត្យ WCAG 2.1 Contrast Ratio ព្រមទាំងបង្កើតស្ទូចពណ៌ (Shades/Tints) ។',
    },
    howItWorks: {
      en: 'All conversions pass through an internal RGB [0–255] representation as the canonical interchange format. HEX is parsed by extracting 2-character hex substrings (parseInt(hex, 16)). RGB-to-HSL uses the chroma-based normalization algorithm: H is computed from the dominant channel, S from chroma/lightness, L from (max+min)/2. HSL-to-RGB reverses via the hue sextant method. RGB-to-CMYK normalizes to [0–1] scale, computes K = 1 − max(R,G,B), then derives C, M, Y. WCAG contrast ratio is (L1 + 0.05) / (L2 + 0.05) where L is relative luminance from the IEC 61966-2-1 sRGB gamma function.',
      km: 'ការបម្លែងគ្រប់ប្រភេទ ជ្រើសសញ្ញា RGB [0–255] ជា Format ចំណុចប្ដូរ ។ WCAG Contrast Ratio = (L1+0.05)/(L2+0.05) ដោយ L គឺ Relative Luminance ពី sRGB Gamma IEC 61966-2-1 ។',
    },
    features: [
      {
        title: { en: 'HEX ↔ RGB ↔ HSL ↔ CMYK Live Conversion', km: 'HEX ↔ RGB ↔ HSL ↔ CMYK ភ្លាម' },
        desc: { en: 'Enter any color model value and see all other representations update in real time.', km: 'ចូលពណ៌ Format ណាមួយ ហើយ Format ផ្សេងទាំងអស់ Update ភ្លាម ។' },
      },
      {
        title: { en: 'WCAG 2.1 Contrast Ratio Checker', km: 'ពិនិត្យ WCAG 2.1 Contrast Ratio' },
        desc: { en: 'Evaluates AA and AAA contrast levels against white and black backgrounds for accessibility compliance.', km: 'ពិនិត្យ AA/AAA Level ជាមួយ White/Black ដើម្បីតម្រូវ Accessibility ។' },
      },
      {
        title: { en: 'Monochromatic Shade & Tint Generator', km: 'បង្កើត Shade/Tint ស្ទូចពណ៌' },
        desc: { en: 'Generates a palette of 10 tints (lighter) and 10 shades (darker) from any base color.', km: 'បង្កើត ១០ Tint (ស្រាង) និង ១០ Shade (ងងុត) ពីពណ៌ Base ។' },
      },
      {
        title: { en: 'One-Click CSS Copy', km: 'ចម្លងកូដ CSS ក្នុងការចុចមួយ' },
        desc: { en: 'Copy color as hex(#), rgb(), hsl(), or rgba() CSS notation with a single click.', km: 'ចម្លង #HEX, rgb(), hsl(), rgba() CSS Property ដោយចុចតែ ១ ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'UI/UX Design & Brand Guidelines', km: 'Design UI/UX និងណែនាំ Brand' },
        desc: { en: 'Designers convert brand primary colors from CMYK (print) to HEX/RGB (digital screen) for consistent cross-media color reproduction.', km: 'Designer បម្លែងពណ៌ Brand CMYK (ព្រីន) → HEX/RGB (ស្គ្រីន) សម្រាប់ Consistency ។' },
      },
      {
        title: { en: 'Web Accessibility WCAG Compliance', km: 'Accessibility WCAG Compliance' },
        desc: { en: 'Front-end developers verify that text color combinations meet WCAG 2.1 Level AA minimum contrast ratios before launching websites.', km: 'Front-end Developer ពិនិត្យ Contrast Ratio WCAG 2.1 AA ធ្វើការ Launch Website ។' },
      },
      {
        title: { en: 'Khmer Typography Color Pairing', km: 'ការជ្រើសពណ៌អក្សរខ្មែរ' },
        desc: { en: 'Publishers and news editors select contrasting text and background colors that maintain Khmer script readability at small sizes.', km: 'Editor ព័ត៌មានខ្មែរ ជ្រើសពណ៌ Text/Background ដែល Contrast ល្អ ស្ថិតក្នុង Khmer small size ។' },
      },
    ],
    standards: {
      en: 'Color model conversions follow IEC 61966-2-1 (sRGB) standard. WCAG contrast ratios comply with Web Content Accessibility Guidelines (WCAG) 2.1 Success Criterion 1.4.3. CMYK approximation uses standard device-independent RGB-to-CMYK transform.',
      km: 'ការបម្លែងពណ៌ IEC 61966-2-1 (sRGB) ។ WCAG Contrast Ratio ដំណើរការ WCAG 2.1 SC 1.4.3 ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'Why do HEX colors look different on print versus on screen?',
          km: 'ហេតុអ្វីបានជាពណ៌ HEX ហាក់ដូចជាខុសគ្នានៅក្នុង print ធៀបនឹង screen?',
        },
        answer: {
          en: 'Screens use additive RGB color (mixing light), while printing uses subtractive CMYK color (mixing pigments). The RGB and CMYK color gamuts overlap but are not identical — certain bright RGB colors (especially neon greens, electric blues) cannot be reproduced accurately in CMYK printing and must be converted to the nearest printable equivalent.',
          km: 'Screen ប្រើ Additive RGB (ពន្លឺ) ។ Print ប្រើ Subtractive CMYK (រូបសំណ) ។ Gamut RGB/CMYK មិន identical — ពណ៌ neon RGB ខ្លះ មិនអាច reproduce ក្នុង CMYK ត្រឹមត្រូវ ។',
        },
      },
      {
        question: {
          en: 'What is the WCAG AA contrast ratio requirement?',
          km: 'តើ Contrast Ratio ដែល WCAG AA តម្រូវគឺប៉ុន្មាន?',
        },
        answer: {
          en: 'WCAG 2.1 Level AA requires a minimum contrast ratio of 4.5:1 for normal text (under 18pt) and 3:1 for large text (18pt+ or 14pt bold). Level AAA requires 7:1 and 4.5:1 respectively, providing maximum readability for users with low vision.',
          km: 'WCAG 2.1 AA: text ធម្មតា (< 18pt) = 4.5:1 ។ Large text (>= 18pt) = 3:1 ។ AAA: 7:1 / 4.5:1 ។',
        },
      },
    ],
    relatedGuideSlug: 'client-side-privacy-guide-for-developer-tools',
  },

  'qr-code-generator': {
    overview: {
      en: 'The QR Code Generator creates high-resolution, static Quick Response codes entirely within your browser using the qrcode.js library, supporting four content types optimized for the most common QR use cases: URL/website links, plain text, Wi-Fi network credentials (SSID + password + security type), and phone numbers (tel: URI scheme). QR codes were invented by Denso Wave in Japan in 1994 and are defined by ISO/IEC 18004:2015. They encode data in a 2D matrix of black and white modules across versions 1–40 (21×21 to 177×177 modules), with four error correction levels (L 7%, M 15%, Q 25%, H 30%) allowing partial damage recovery. Cambodian businesses widely use QR codes for contactless payment (KHQR standard via NBC), restaurant menus, social media links, and event check-in systems.',
      km: 'ឧបករណ៍ QR Code Generator បង្កើត QR Code ច្បាស់ខ្ពស់ (Static) ក្នុង Browser ដោយ qrcode.js ។ គាំទ្រ URL, Text, Wi-Fi, និង Tel ។ QR Code គឺ ISO/IEC 18004:2015 ។ ប្រើ KHQR NBC នៅកម្ពុជា ។',
    },
    howItWorks: {
      en: 'The generator encodes the input data into the QR matrix using Reed-Solomon error correction coding. The error correction level (L, M, Q, H) determines redundancy: Level H allows up to 30% of the QR module pattern to be damaged while remaining scannable. The module size controls the pixel density of the rendered canvas. For Wi-Fi QR codes, the tool constructs the MECARD-format string: WIFI:S:<SSID>;T:<WPA/WEP/nopass>;P:<password>;H:<hidden>;;. The rendered QR code is exported as a PNG image using canvas.toDataURL(\'image/png\').',
      km: 'Generator Encode data ទៅ QR matrix ដោយ Reed-Solomon Error Correction ។ Level H = 30% damage recovery ។ Wi-Fi: MECARD format WIFI:S:<SSID>;T:<WPA>;P:<pass>;; ។ Export PNG ដោយ canvas.toDataURL() ។',
    },
    features: [
      {
        title: { en: 'Four QR Content Types', km: 'ប្រភេទ Content QR ៤ ប្រភេទ' },
        desc: { en: 'Generate QR codes for URLs, plain text, Wi-Fi credentials, and phone numbers.', km: 'បង្កើត QR Code សម្រាប់ URL, Text, Wi-Fi, និងទូរស័ព្ទ ។' },
      },
      {
        title: { en: 'Configurable Error Correction Level', km: 'កំណត់ Error Correction Level' },
        desc: { en: 'Select L (7%), M (15%), Q (25%), or H (30%) redundancy for damaged or partially covered QR codes.', km: 'ជ្រើស L M Q H Error Correction ដើម្បីដំណើរការ ទោះ QR ខូចខ្លះ ។' },
      },
      {
        title: { en: 'High-Resolution PNG Download', km: 'Download PNG ច្បាស់ខ្ពស់' },
        desc: { en: 'Download the generated QR code as a high-resolution PNG image ready for print and digital use.', km: 'Download QR Code PNG ច្បាស់ខ្ពស់ សម្រាប់ Print ឬ Digital ។' },
      },
      {
        title: { en: 'Static QR — No Expiry, No Tracking', km: 'QR Static — គ្មានផុតកំណត់/Tracking' },
        desc: { en: 'All QR codes are static with data embedded directly — they never expire and do not route through any redirect service.', km: 'QR Code Static — Data បង្កប់ផ្ទាល់ គ្មានផុតកំណត់ គ្មាន Redirect Service ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Restaurant & Café Digital Menus', km: 'Menu ភោជនីយដ្ឋាន Café' },
        desc: { en: 'Phnom Penh restaurants place QR codes on tables linking to Google Drive PDF menus, allowing contactless ordering during and after COVID-19.', km: 'ភោជនីយដ្ឋាននៅភ្នំពេញដាក់ QR Code លើតុ ភ្ជាប់ Menu PDF Google Drive ។' },
      },
      {
        title: { en: 'Event & Conference Check-In', km: 'Check-in ព្រឹត្តិការណ៍' },
        desc: { en: 'Event organizers generate unique URL QR codes for attendee registration links, enabling fast mobile check-in scanning at venue entry points.', km: 'អ្នករៀបចំព្រឹត្តិការណ៍ Generate QR Code URL ចុះឈ្មោះ ដែល Scan ចូលបាន Mobile ។' },
      },
      {
        title: { en: 'Wi-Fi Sharing in Offices & Guesthouses', km: 'ចែករំលែក Wi-Fi ការិយាល័យ/Guesthouse' },
        desc: { en: 'Hotels, guesthouses, and coworking spaces in Cambodia create Wi-Fi QR codes so guests can connect without typing passwords.', km: 'Hotel, Guesthouse, Coworking Space នៅកម្ពុជា Generate Wi-Fi QR Code ឱ្យភ្ញៀវ Scan ចូល Wi-Fi ដោយមិនវាយ Password ។' },
      },
    ],
    standards: {
      en: 'QR Code generation complies with ISO/IEC 18004:2015 (QR Code bar code symbology specification). Wi-Fi QR format follows the MECARD Wi-Fi Network Configuration specification. Error correction uses Reed-Solomon coding.',
      km: 'QR Code: ISO/IEC 18004:2015 ។ Wi-Fi QR: MECARD Specification ។ Error Correction: Reed-Solomon Coding ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'What is the KHQR standard used in Cambodia?',
          km: 'តើស្ដង់ដារ KHQR ដែលប្រើនៅប្រទេសកម្ពុជាគឺជាអ្វី?',
        },
        answer: {
          en: 'KHQR is the National Bank of Cambodia\'s interoperable QR payment standard, launched in 2021. It follows the EMVCo QR Code Specification for Merchant-Presented QR, allowing customers to pay via any participating bank app (ABA, ACLEDA, Wing, etc.) by scanning a single merchant KHQR code.',
          km: 'KHQR ជាស្ដង់ដារ QR Payment Interoperable រប​ស់ NBC បើកឆ្នាំ ២០២១ ។ ដំណើរការ EMVCo QR Spec អ្នកប្រើ Scan ជាមួយ App ធនាគារណាក៏បាន (ABA, ACLEDA, Wing...) ។',
        },
      },
      {
        question: {
          en: 'What is the maximum amount of data a QR code can store?',
          km: 'QR Code អាចរក្សាទុកទិន្នន័យបានច្រើនបំផុតប៉ុន្មាន?',
        },
        answer: {
          en: 'A QR Version 40 code (177×177 modules) at Error Correction Level L can store up to 7,089 numeric characters, 4,296 alphanumeric characters, or 2,953 bytes of binary data. For URLs, practical QR scanability degrades above 500 characters, so shorter URLs or URL shorteners are recommended.',
          km: 'QR Version 40 (177×177) Level L: ចំនួន ៧,០៨៩ digits, ៤,២៩៦ alphanumeric, ២,៩៥៣ bytes binary ។ ក្នុងការអនុវត្ត URL > ៥០០ chars ត្រូវ URL Shortener ។',
        },
      },
    ],
    relatedGuideSlug: 'client-side-privacy-guide-for-developer-tools',
  },

  'password-generator': {
    overview: {
      en: 'The Strong Password Generator creates cryptographically random passwords using the browser\'s native Web Cryptography API (window.crypto.getRandomValues()), the same entropy source used by operating systems for TLS key generation and full-disk encryption. Unlike passwords produced by Math.random() — which is a deterministic pseudo-random number generator (PRNG) seeded from predictable values — window.crypto.getRandomValues() draws from the OS-level hardware random number generator (HRNG), producing passwords with maximum unpredictability. The tool supports configurable character sets (uppercase A–Z, lowercase a–z, digits 0–9, and 32 printable symbols), variable length (8–128 characters), and displays a real-time password entropy strength meter measured in bits.',
      km: 'ឧបករណ៍ Password Generator បង្កើតពាក្យសម្ងាត់ចៃដន្យ Cryptographic ដោយ window.crypto.getRandomValues() (HRNG ពី OS) ។ គ្រប់គ្រងប្រវែង ៨-១២៨ chars ហើយបង្ហាញ Entropy meter ជា bits ។',
    },
    howItWorks: {
      en: 'The generator builds a character pool from the selected character sets (uppercase: 26, lowercase: 26, digits: 10, symbols: 32). It calls crypto.getRandomValues() to fill a Uint32Array with n cryptographically secure random 32-bit integers, where n equals the desired password length. Each integer is then reduced modulo the pool size (random_int % pool.length) to select a character, eliminating modulo bias by using rejection sampling when the pool size does not divide evenly into 2^32. Password entropy (in bits) = log₂(pool_size^length) = length × log₂(pool_size), displayed on a color-coded strength gauge.',
      km: 'Pool character ចេញពី charset ដែលជ្រើស ។ crypto.getRandomValues() Uint32Array ។ Select character = random_int % pool.length (Rejection Sampling ដើម្បីលុប modulo bias) ។ Entropy = length × log₂(pool_size) ។',
    },
    features: [
      {
        title: { en: 'CSPRNG via Web Crypto API', km: 'CSPRNG តាម Web Crypto API' },
        desc: { en: 'Uses window.crypto.getRandomValues() — the same cryptographic entropy source as TLS and disk encryption.', km: 'ប្រើ window.crypto.getRandomValues() — HRNG ចំណែក OS ដូច TLS ។' },
      },
      {
        title: { en: 'Configurable Character Sets', km: 'ជ្រើសប្រភេទ Character ។' },
        desc: { en: 'Toggle uppercase, lowercase, digits, and symbols independently to match any password policy.', km: 'ជ្រើស Uppercase, Lowercase, Digits, Symbols ឯករាជ្យ ស្ថិតក្នុង Password Policy ។' },
      },
      {
        title: { en: 'Entropy Strength Meter (bits)', km: 'Meter Entropy ជា bits' },
        desc: { en: 'Calculates and displays password entropy in bits — the scientifically correct measure of password strength.', km: 'គណនា Entropy ជា bits = length × log₂(pool_size) — ស្ដង់ដារ Scientific password strength ។' },
      },
      {
        title: { en: 'Adjustable Length Slider (8–128)', km: 'Slider ប្រវែង ៨–១២៨' },
        desc: { en: 'Drag a slider to set password length from 8 to 128 characters with live preview update.', km: 'Drag Slider ០–១២៨ chars ហើយ Preview Update ភ្លាម ។' },
      },
    ],
    useCases: [
      {
        title: { en: 'Secure Account Registration', km: 'ការ Register Account ។' },
        desc: { en: 'Users generate strong, unique passwords for banking portals, email accounts, and social media profiles without reusing predictable patterns.', km: 'User Generate Password ខ្លាំងមួយ ប្លែក ព្រាងសម្រាប់ Bank Portal, Email, Social Media ។' },
      },
      {
        title: { en: 'IT Admin & System Credentials', km: 'IT Admin System Credentials ។' },
        desc: { en: 'System administrators generate high-entropy service account passwords, API secrets, and database root credentials for production environments.', km: 'System Admin Generate password Entropy ខ្ពស់ Service Account, API Secret, DB root ។' },
      },
      {
        title: { en: 'Password Manager Seeding', km: 'Seed Password Manager' },
        desc: { en: 'Users generate random master passwords or site-specific credentials to store in KeePass, Bitwarden, or 1Password vaults.', km: 'User Generate master password ឬ Site credential រក្សាទុក KeePass, Bitwarden, 1Password vault ។' },
      },
    ],
    standards: {
      en: 'Password generation uses NIST SP 800-90A/B/C cryptographic random bit generator standards via Web Cryptography API (W3C Recommendation). Password strength assessment follows NIST SP 800-63B Digital Identity Guidelines.',
      km: 'Password generation: NIST SP 800-90A/B/C CSPRNG ។ Strength: NIST SP 800-63B Digital Identity Guidelines ។ API: W3C Web Cryptography Recommendation ។',
    },
    extraFaqs: [
      {
        question: {
          en: 'How many bits of entropy does a secure password need?',
          km: 'Password មានសុវត្ថិភាពត្រូវការ Entropy ប៉ុន្មាន bits?',
        },
        answer: {
          en: 'NIST SP 800-63B recommends a minimum of 112 bits of entropy for high-security systems. A random 16-character password using 94 printable ASCII characters yields approximately 105 bits. A 20-character password from the same set reaches 131 bits — beyond brute-force reach for current computing hardware, including quantum computers.',
          km: 'NIST SP 800-63B ណែនាំ ≥ 112 bits entropy ។ 16 chars 94 printable ASCII ≈ 105 bits ។ 20 chars ≈ 131 bits — នៅពីលើ brute-force quantum ។',
        },
      },
      {
        question: {
          en: 'Is it safe to use this password generator on a shared or public computer?',
          km: 'តើមានសុវត្ថិភាពទេ ប្រើ Password Generator នៅ Computer សាធារណៈ?',
        },
        answer: {
          en: 'We recommend against generating passwords on public or shared computers where keyloggers or screen capture malware may be installed. On personal devices, the generated password never leaves your browser memory and is not transmitted anywhere. Close the tab immediately after copying your password.',
          km: 'យើងណែនាំ មិនឱ្យប្រើ Computer Public ព្រោះ Keylogger ឬ Malware ។ Computer ខ្លួនឯង: Password នៅ Browser Memory ។ ប្រញ​ាប់បិទ Tab ក្រោយ Copy ។',
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
