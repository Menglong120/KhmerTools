export type ToolCategory = 'khmer' | 'calculator' | 'developer';

export interface ToolFAQ {
  question: {
    en: string;
    km: string;
  };
  answer: {
    en: string;
    km: string;
  };
}

export interface ToolMeta {
  id: string;
  slug: string;
  category: ToolCategory;
  name: {
    en: string;
    km: string;
  };
  shortDescription: {
    en: string;
    km: string;
  };
  description: {
    en: string;
    km: string;
  };
  iconName: string;
  popular: boolean;
  tags: string[];
  instructions: {
    en: string[];
    km: string[];
  };
  faqs: ToolFAQ[];
}

export const CATEGORIES: Record<ToolCategory, { name: { en: string; km: string }; description: { en: string; km: string }; icon: string }> = {
  khmer: {
    name: { en: 'Khmer Tools', km: 'ឧបករណ៍ភាសាខ្មែរ' },
    description: { en: 'Khmer numbers, text processing, Buddhist calendar, and spelling tools', km: 'ឧបករណ៍បម្លែងលេខខ្មែរ អត្ថបទ កាលបរិច្ឆេទពុទ្ធសករាជ និងអក្ខរាវិរុទ្ធ' },
    icon: 'Languages',
  },
  calculator: {
    name: { en: 'Calculators', km: 'ម៉ាស៊ីនគិតលេខ' },
    description: { en: 'Age, percentage, BMI, loan amortization, and date calculators', km: 'ការគណនាអាយុ ភាគរយ សន្ទស្សន៍ម៉ាសរាងកាយ កម្ចី និងកាលបរិច្ឆេទ' },
    icon: 'Calculator',
  },
  developer: {
    name: { en: 'Developer Tools', km: 'ឧបករណ៍អ្នកអភិវឌ្ឍន៍' },
    description: { en: 'JSON, UUID, Base64, JWT, URL encoding, timestamps, and colors', km: 'ឧបករណ៍ JSON, UUID, Base64, JWT, Timestamp, QR Code និងកូដពណ៌' },
    icon: 'Code2',
  },
};

export const TOOLS: ToolMeta[] = [
  // KHMER TOOLS
  {
    id: 'khmer-number-converter',
    slug: 'khmer-number-converter',
    category: 'khmer',
    name: {
      en: 'Khmer Number Converter',
      km: 'ឧបករណ៍បម្លែងលេខខ្មែរ'
    },
    shortDescription: {
      en: 'Convert Arabic numbers to Khmer numerals and spelled-out words in Riel & USD.',
      km: 'បម្លែងលេខអារ៉ាប់ទៅជាលេខខ្មែរ (០-៩) និងអក្សរអានជាពាក្យខ្មែរ (រៀល និងដុល្លារ)។'
    },
    description: {
      en: 'Instantly convert Arabic numbers (0-9) to Khmer numerals (០-៩), read numbers out loud in Khmer words, and format invoice currencies in Cambodian Riel (៛) or USD.',
      km: 'បម្លែងលេខពីអារ៉ាប់មកជាលេខខ្មែរ (០-៩) សរសេរជាអក្សរពាក្យខ្មែរសម្រាប់ប្រើប្រាស់ក្នុងវិក្កយបត្រ ឯកសាររដ្ឋបាល និងកិច្ចសន្យា ព្រមទាំងគណនាជារូបិយប័ណ្ណរៀល និងដុល្លារ។'
    },
    iconName: 'Binary',
    popular: true,
    tags: ['khmer', 'number', 'riel', 'currency', 'words', 'numerals'],
    instructions: {
      en: [
        'Type or paste any number (e.g. 1250 or 500000).',
        'Choose whether to convert to Khmer numerals, spelled-out words, or currency format.',
        'Click the Copy button to copy the result to your clipboard.'
      ],
      km: [
        'វាយបញ្ចូល ឬចម្លងលេខណាមួយ (ឧទាហរណ៍៖ 1250 ឬ 500000)។',
        'ជ្រើសរើសទម្រង់ដែលចង់បាន៖ លេខខ្មែរ (០-៩) អក្សរខ្មែរ ឬទម្រង់រូបិយប័ណ្ណរៀល/ដុល្លារ។',
        'ចុចប៊ូតុង "ចម្លង" ដើម្បីចម្លងលទ្ធផលទៅប្រើប្រាស់។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Does this tool support large numbers and decimals?',
          km: 'តើឧបករណ៍នេះគាំទ្រលេខធំៗ និងលេខក្បៀស (ទសភាគ) ដែរឬទេ?'
        },
        answer: {
          en: 'Yes! It accurately spells out numbers into thousands, millions, billions, and trillions, including decimal cents.',
          km: 'បាទ/ចាស! ឧបករណ៍នេះគាំទ្រការអានលេខរហូតដល់ខ្ទង់លាន ប៊ីលាន ទ្រីលាន ព្រមទាំងលេខទសភាគផងដែរ។'
        }
      },
      {
        question: {
          en: 'Can I use this for official receipts and contracts?',
          km: 'តើខ្ញុំអាចប្រើប្រាស់វាសម្រាប់វិក្កយបត្រ និងកិច្ចសន្យាផ្លូវការបានទេ?'
        },
        answer: {
          en: 'Yes, the spelling adheres to official Cambodian orthography conventions used in banks and ministries.',
          km: 'អាចបាន! ទម្រង់អក្សរខ្មែរគឺត្រឹមត្រូវតាមក្បួនវេយ្យាករណ៍ និងវចនានុក្រមខ្មែរដែលធនាគារ និងស្ថាប័ននានាប្រើប្រាស់។'
        }
      }
    ]
  },
  {
    id: 'khmer-text-utilities',
    slug: 'khmer-text-utilities',
    category: 'khmer',
    name: {
      en: 'Khmer Text Utilities & ZWSP',
      km: 'ឧបករណ៍អត្ថបទខ្មែរ និង ZWSP'
    },
    shortDescription: {
      en: 'Count Khmer words, characters, remove or inspect Zero-Width Spaces (ZWSP).',
      km: 'រាប់ពាក្យ អក្សរខ្មែរ ស្រៈ ព្យញ្ជនៈ និងពិនិត្យ/លុបចន្លោះមើលមិនឃើញ (Zero-Width Space)។'
    },
    description: {
      en: 'Analyze Khmer text with in-depth counters for consonants, vowels, sub-scripts (Coeng), and easily detect or clean invisible Zero-Width Space (ZWSP) characters.',
      km: 'វិភាគអត្ថបទខ្មែរយ៉ាងលម្អិត រាប់ចំនួនព្យញ្ជនៈ ស្រៈនិស្ស័យ ស្រៈពេញតួ ជើង ព្រមទាំងលុប ឬបង្ហាញចន្លោះមើលមិនឃើញ (ZWSP) ដែលតែងតែបង្កបញ្ហាក្នុងការស្វែងរក និងរចនា។'
    },
    iconName: 'FileText',
    popular: true,
    tags: ['text', 'counter', 'zwsp', 'zero-width', 'khmer words', 'consonants'],
    instructions: {
      en: [
        'Paste your Khmer text in the text area.',
        'View live statistics including character count, word count, consonants, and ZWSP count.',
        'Use the Clean ZWSP button to strip invisible breaks or Highlight ZWSP to inspect their positions.'
      ],
      km: [
        'ចម្លងអត្ថបទខ្មែររបស់អ្នកដាក់ក្នុងប្រអប់អត្ថបទ។',
        'ពិនិត្យមើលស្ថិតិភ្លាមៗដូចជា ចំនួនអក្សរ ចំនួនពាក្យ ព្យញ្ជនៈ ស្រៈ និង ZWSP។',
        'ចុចប៊ូតុង "លុប ZWSP" ឬ "បង្ហាញ ZWSP" ដើម្បីសម្អាត ឬត្រួតពិនិត្យ។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'What is a Zero-Width Space (ZWSP)?',
          km: 'តើអ្វីទៅជា Zero-Width Space (ZWSP)?'
        },
        answer: {
          en: 'ZWSP (\\u200B) is an invisible character used in Khmer digital typography to allow browsers to wrap lines between words without showing a visible space.',
          km: 'ZWSP (\\u200B) គឺជាតួអក្សរគ្មានទទឹងមើលមិនឃើញ ដែលប្រើក្នុងភាសាខ្មែរដើម្បីឱ្យប្រព័ន្ធកុំព្យូទ័រអាចចុះបន្ទាត់ត្រង់ពាក្យនីមួយៗបានត្រឹមត្រូវ។'
        }
      }
    ]
  },
  {
    id: 'khmer-date-converter',
    slug: 'khmer-date-converter',
    category: 'khmer',
    name: {
      en: 'Khmer Date & Buddhist Era (B.E.)',
      km: 'កាលបរិច្ឆេទខ្មែរ និងពុទ្ធសករាជ'
    },
    shortDescription: {
      en: 'Convert Gregorian dates to Khmer Buddhist Era (ព.ស.), 12 animal zodiac, and Sak.',
      km: 'បម្លែងកាលបរិច្ឆេទសកល (គ.ស.) ទៅជាពុទ្ធសករាជ (ព.ស.) ឆ្នាំទាំង១២ និងស័ក។'
    },
    description: {
      en: 'Accurately convert any Christian Calendar (AD) date to Cambodian Buddhist Era (BE / ព.ស.), discover your Khmer birth animal zodiac (ឆ្នាំទាំង ១២ ជូត-កុរ) and lunar era (ស័ក) with complete Khmer date formatting.',
      km: 'បម្លែងថ្ងៃខែឆ្នាំសកល (គ.ស.) ទៅជាកាលបរិច្ឆេទខ្មែរពុទ្ធសករាជ (ព.ស.) រកមើលឆ្នាំកំណើតទាំង១២ (ជូត ឆ្លូវ ខាល...) ស័ក និងថ្ងៃនៃសប្តាហ៍ជាភាសាខ្មែរ។'
    },
    iconName: 'CalendarDays',
    popular: true,
    tags: ['date', 'calendar', 'buddhist era', 'zodiac', 'sak', 'khmer new year'],
    instructions: {
      en: [
        'Select or enter a date.',
        'View the generated Buddhist Era year (ព.ស.), animal zodiac, Sak, and formatted Khmer date string.',
        'Copy the formatted date directly for official letterheaders and documents.'
      ],
      km: [
        'ជ្រើសរើសថ្ងៃខែឆ្នាំដែលចង់បាន។',
        'មើលលទ្ធផលពុទ្ធសករាជ (ព.ស.) រាសីចក្រសត្វទាំង១២ ស័ក និងកាលបរិច្ឆេទពេញលេញ។',
        'ចម្លងកាលបរិច្ឆេទសម្រាប់ប្រើប្រាស់ក្នុងលិខិតរដ្ឋបាល ឬឯកសារផ្សេងៗ។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'How is the Buddhist Era (B.E.) calculated in Cambodia?',
          km: 'តើការគណនាពុទ្ធសករាជ (ព.ស.) នៅក្នុងប្រទេសកម្ពុជាធ្វើឡើងដូចម្តេច?'
        },
        answer: {
          en: 'In Cambodia, Buddhist Era is calculated by adding 544 years to the Gregorian year after the Khmer New Year (mid-April), or 543 years prior to it.',
          km: 'នៅប្រទេសកម្ពុជា ពុទ្ធសករាជត្រូវបានគិតដោយបូកបន្ថែម ៥៤៤ ឆ្នាំលើឆ្នាំសកល (ក្រោយចូលឆ្នាំខ្មែរ) ឬ ៥៤៣ ឆ្នាំ (មុនចូលឆ្នាំខ្មែរ)។'
        }
      }
    ]
  },
  {
    id: 'khmer-unicode-sorter',
    slug: 'khmer-unicode-sorter',
    category: 'khmer',
    name: {
      en: 'Khmer Unicode Sorter & Fixer',
      km: 'ឧបករណ៍តម្រៀប និងជួសជុលយូនីកូដខ្មែរ'
    },
    shortDescription: {
      en: 'Repair broken Khmer subscript fonts, vowels, and diacritic rendering order.',
      km: 'ជួសជុលអក្សរខ្មែរដែលខូចទម្រង់ ជើងស្រេច ឬលំដាប់ស្រៈ និងសញ្ញាខុសតាមស្តង់ដារ។'
    },
    description: {
      en: 'Fixes corrupted or misordered Khmer Unicode text sequences caused by old keyboard layouts or PDF extractions. Ensures perfect rendering across all browsers and devices.',
      km: 'ជួយកែសម្រួលលំដាប់តួអក្សរខ្មែរដែលវាយខុសលំដាប់ (ដូចជា ស្រៈមុនជើង) ឱ្យត្រឹមត្រូវតាមស្តង់ដារ Unicode 3.0+ ដើម្បីកុំឱ្យចេញប្រអប់ការ៉េ ឬស្រៈរត់ខុសកន្លែង។'
    },
    iconName: 'Wrench',
    popular: false,
    tags: ['unicode', 'fixer', 'khmer font', 'coeng', 'subscript'],
    instructions: {
      en: [
        'Paste the text with broken rendering or misplaced Khmer letters.',
        'Click "Normalize & Fix".',
        'Copy the corrected Unicode text.'
      ],
      km: [
        'ចម្លងអត្ថបទដែលមានបញ្ហាអក្សរខូច ឬលោតខុសទម្រង់ដាក់ក្នុងប្រអប់។',
        'ចុច "ជួសជុល និងតម្រៀប"។',
        'ចម្លងអត្ថបទដែលបានកែសម្រួលរួច។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Why do some Khmer words look broken or show dotted circles?',
          km: 'ហេតុអ្វីបានជាពាក្យខ្មែរមួយចំនួនបង្ហាញរង្វង់មូលចុចៗ (◌)?'
        },
        answer: {
          en: 'Dotted circles (◌) occur when vowels or subscript signs (Coeng) are typed out of the official Unicode sequence. This tool fixes the order automatically.',
          km: 'រង្វង់មូលចុចៗ (◌) កើតឡើងនៅពេលដែលស្រៈ ឬជើងត្រូវបានវាយខុសលំដាប់ក្បួនយូនីកូដ។ ឧបករណ៍នេះនឹងតម្រៀបវាឱ្យត្រូវតាមលំដាប់ដើមឡើងវិញ។'
        }
      }
    ]
  },

  // CALCULATORS
  {
    id: 'age-calculator',
    slug: 'age-calculator',
    category: 'calculator',
    name: {
      en: 'Age Calculator',
      km: 'ម៉ាស៊ីនគិតអាយុ'
    },
    shortDescription: {
      en: 'Calculate exact age in years, months, days, hours, and next birthday countdown.',
      km: 'គណនាអាយុជាក់លាក់ជា ឆ្នាំ ខែ ថ្ងៃ ម៉ោង និងរាប់ថយក្រោយដល់ថ្ងៃខួបកំណើតបន្ទាប់។'
    },
    description: {
      en: 'Discover your exact age down to the day and minute, see total days lived, day of the week you were born, and how many days remain until your next birthday.',
      km: 'គណនាអាយុរបស់អ្នកយ៉ាងជាក់លាក់បំផុត គិតជាឆ្នាំ ខែ ថ្ងៃ ម៉ោង និងនាទី ព្រមទាំងដឹងពីចំនួនថ្ងៃសរុបដែលអ្នកបានរស់នៅ និងរាប់ថយក្រោយដល់ថ្ងៃខួបកំណើត។'
    },
    iconName: 'Hourglass',
    popular: true,
    tags: ['age', 'birthday', 'calculator', 'days lived', 'countdown'],
    instructions: {
      en: [
        'Select your date of birth.',
        'Optionally select a target date (defaults to today).',
        'Instantly view your age breakdown and next birthday timer.'
      ],
      km: [
        'ជ្រើសរើសថ្ងៃខែឆ្នាំកំណើតរបស់អ្នក។',
        'អាចជ្រើសរើសថ្ងៃគោលដៅ (កំណត់លំនាំដើមជាថ្ងៃនេះ)។',
        'មើលលទ្ធផលអាយុពេញលេញ និងការរាប់ថយក្រោយថ្ងៃខួបកំណើត។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Does this handle leap years correctly?',
          km: 'តើការគណនានេះរាប់បញ្ចូលឆ្នាំបង្គ្រប់ (Leap Year) ត្រឹមត្រូវដែរឬទេ?'
        },
        answer: {
          en: 'Yes, leap years and varying month lengths (28, 29, 30, 31 days) are calculated with calendar precision.',
          km: 'បាទ/ចាស! ការគណនារាប់បញ្ចូលទាំងឆ្នាំបង្គ្រប់ និងចំនួនថ្ងៃក្នុងខែនីមួយៗយ៉ាងត្រឹមត្រូវ។'
        }
      }
    ]
  },
  {
    id: 'percentage-calculator',
    slug: 'percentage-calculator',
    category: 'calculator',
    name: {
      en: 'Percentage Calculator',
      km: 'ម៉ាស៊ីនគិតភាគរយ'
    },
    shortDescription: {
      en: 'Calculate percentages, percent change, increases, and discounts effortlessly.',
      km: 'គណនាភាគរយ (%) ការកើនឡើង ថយចុះ និងការបញ្ចុះតម្លៃយ៉ាងរហ័ស។'
    },
    description: {
      en: 'A multi-mode percentage calculator: find what X% of Y is, what percentage X is of Y, and percentage increase or decrease between two numbers.',
      km: 'ឧបករណ៍គិតភាគរយគ្រប់បែបយ៉ាង៖ រកមើលថាតើ X% នៃ Y ស្មើប៉ុន្មាន, X ជាប៉ុន្មានភាគរយនៃ Y, និងគណនាការកើនឡើង ឬថយចុះជាភាគរយ។'
    },
    iconName: 'Percent',
    popular: true,
    tags: ['percent', 'percentage', 'discount', 'increase', 'math'],
    instructions: {
      en: [
        'Select the calculation mode you need.',
        'Enter the values in the input fields.',
        'Get immediate step-by-step results.'
      ],
      km: [
        'ជ្រើសរើសរបៀបគណនាដែលអ្នកចង់បាន។',
        'បញ្ចូលតួលេខក្នុងប្រអប់។',
        'ទទួលបានលទ្ធផលភ្លាមៗរួមជាមួយរូបមន្តគណនា។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'How to calculate a discount percentage?',
          km: 'តើត្រូវគណនាភាគរយបញ្ចុះតម្លៃយ៉ាងដូចម្តេច?'
        },
        answer: {
          en: 'Use Mode 3: Percentage Change. Enter the original price as Value 1 and the sale price as Value 2.',
          km: 'ប្រើប្រាស់មុខងារទី ៣ (ការប្រែប្រួលភាគរយ) ដោយបញ្ចូលតម្លៃដើមក្នុងប្រអប់ទី១ និងតម្លៃបញ្ចុះក្នុងប្រអប់ទី២។'
        }
      }
    ]
  },
  {
    id: 'bmi-calculator',
    slug: 'bmi-calculator',
    category: 'calculator',
    name: {
      en: 'BMI Calculator',
      km: 'ម៉ាស៊ីនគិតសន្ទស្សន៍ម៉ាសរាងកាយ (BMI)'
    },
    shortDescription: {
      en: 'Calculate your Body Mass Index (BMI) with Asian & WHO health benchmarks.',
      km: 'គណនាសន្ទស្សន៍ម៉ាសរាងកាយ (BMI) តាមស្តង់ដារសុខភាពពិភពលោក និងអាស៊ី។'
    },
    description: {
      en: 'Check your Body Mass Index (BMI) with support for both Metric (cm/kg) and Imperial (ft/lbs) units. Features an interactive visual gauge and personalized healthy weight target.',
      km: 'ត្រួតពិនិត្យសុខភាពរាងកាយតាមរយៈ BMI គាំទ្រទាំងប្រព័ន្ធម៉ែត្រ (ស.ម/គ.ក) និងអង់គ្លេស (ហ្វីត/ផោន) ព្រមទាំងបង្ហាញគំនូសតាង និងទម្ងន់សមស្របសម្រាប់អ្នក។'
    },
    iconName: 'HeartPulse',
    popular: true,
    tags: ['bmi', 'health', 'weight', 'fitness', 'diet'],
    instructions: {
      en: [
        'Choose metric (kg/cm) or imperial (lbs/inches) units.',
        'Enter your height and weight.',
        'Review your BMI score, category, and healthy weight range.'
      ],
      km: [
        'ជ្រើសរើសឯកតាម៉ែត្រ (kg/cm) ឬអង់គ្លេស (lbs/ft)។',
        'បញ្ចូលកម្ពស់ និងទម្ងន់របស់អ្នក។',
        'ពិនិត្យពិន្ទុ BMI ចំណាត់ថ្នាក់សុខភាព និងទម្ងន់ដែលសមស្រប។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'What is considered a normal BMI for Asians?',
          km: 'តើពិន្ទុ BMI ប៉ុន្មានដែលចាត់ទុកថាធម្មតាសម្រាប់ជនជាតិអាស៊ី?'
        },
        answer: {
          en: 'For Asian populations, WHO guidelines suggest a healthy BMI range is between 18.5 and 22.9, with 23.0 to 24.9 considered overweight.',
          km: 'សម្រាប់ប្រជាជនអាស៊ី អង្គការសុខភាពពិភពលោក (WHO) បានកំណត់ថា BMI ចន្លោះ 18.5 ដល់ 22.9 គឺស្ថិតក្នុងកម្រិតធម្មតា ហើយចាប់ពី 23.0 ឡើងទៅចាត់ទុកថាលើសទម្ងន់។'
        }
      }
    ]
  },
  {
    id: 'loan-calculator',
    slug: 'loan-calculator',
    category: 'calculator',
    name: {
      en: 'Loan & Mortgage Calculator',
      km: 'ម៉ាស៊ីនគិតប្រាក់កម្ចី និងការប្រាក់'
    },
    shortDescription: {
      en: 'Estimate monthly loan repayments, total interest, and amortization schedule in USD & KHR.',
      km: 'គណនាប្រាក់ត្រូវបង់ប្រចាំខែ ការប្រាក់សរុប និងតារាងរំលស់ជាប្រាក់ដុល្លារ និងរៀល។'
    },
    description: {
      en: 'Calculate monthly payments for personal loans, car loans, or home mortgages. Shows total interest payable, total cost, and a full monthly amortization schedule in USD ($) and Khmer Riel (៛).',
      km: 'គណនាប្រាក់បង់ប្រចាំខែសម្រាប់កម្ចីទិញផ្ទះ រថយន្ត ឬកម្ចីផ្ទាល់ខ្លួន បង្ហាញការប្រាក់សរុប និងតារាងរំលស់ប្រាក់ដើមនិងការប្រាក់យ៉ាងលម្អិត។'
    },
    iconName: 'Landmark',
    popular: true,
    tags: ['loan', 'mortgage', 'interest', 'finance', 'riel', 'bank'],
    instructions: {
      en: [
        'Enter the loan amount (principal).',
        'Enter the annual interest rate (e.g. 8.5%).',
        'Specify the loan term in months or years.',
        'View the monthly installment, total interest, and breakdown schedule.'
      ],
      km: [
        'បញ្ចូលចំនួនទឹកប្រាក់កម្ចី (ប្រាក់ដើម)។',
        'បញ្ចូលអត្រាការប្រាក់ប្រចាំឆ្នាំ (ឧទាហរណ៍៖ 8.5%)។',
        'កំណត់រយៈពេលកម្ចីជាខែ ឬជាឆ្នាំ។',
        'ពិនិត្យមើលប្រាក់ត្រូវបង់ប្រចាំខែ ការប្រាក់សរុប និងតារាងរំលស់។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Does this use standard fixed-rate amortization?',
          km: 'តើការគណនានេះប្រើរូបមន្តរំលស់ស្មើថេរ (Equal Installment) មែនទេ?'
        },
        answer: {
          en: 'Yes, it uses the standard banking amortization formula for fixed-rate installment loans.',
          km: 'បាទ/ចាស! ឧបករណ៍នេះប្រើរូបមន្តស្តង់ដារធនាគារសម្រាប់ការបង់រំលស់ប្រចាំខែថេរ។'
        }
      }
    ]
  },
  {
    id: 'date-calculator',
    slug: 'date-calculator',
    category: 'calculator',
    name: {
      en: 'Date Difference & Calculation',
      km: 'ម៉ាស៊ីនគិតគម្លាតកាលបរិច្ឆេទ'
    },
    shortDescription: {
      en: 'Find days between two dates, or add/subtract days, weeks, and years.',
      km: 'គណនាចំនួនថ្ងៃចន្លោះកាលបរិច្ឆេទពីរ ឬបូក/ដកថ្ងៃ សប្តាហ៍ ខែ និងឆ្នាំ។'
    },
    description: {
      en: 'Calculate the duration between two dates in days, weeks, and months, or compute a future/past date by adding or subtracting specific intervals.',
      km: 'គណនាគម្លាតរវាងកាលបរិច្ឆេទពីរ គិតជាថ្ងៃ សប្តាហ៍ ខែ ឬគណនារកកាលបរិច្ឆេទទៅអនាគត/អតីតកាលដោយបូកឬដកចំនួនថ្ងៃ។'
    },
    iconName: 'CalendarRange',
    popular: false,
    tags: ['date', 'days between', 'calendar', 'duration'],
    instructions: {
      en: [
        'Choose "Difference Between Dates" or "Add/Subtract Date".',
        'Select the dates and duration.',
        'Instantly view the result.'
      ],
      km: [
        'ជ្រើសរើស "គម្លាតរវាងកាលបរិច្ឆេទ" ឬ "បូក/ដកកាលបរិច្ឆេទ"។',
        'ជ្រើសរើសកាលបរិច្ឆេទ និងចំនួនថ្ងៃ។',
        'ទទួលបានលទ្ធផលភ្លាមៗ។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Can this calculate business working days?',
          km: 'តើឧបករណ៍នេះអាចរាប់តែថ្ងៃធ្វើការបានទេ?'
        },
        answer: {
          en: 'Yes, it provides both total calendar days and estimates for weekdays excluding Saturdays and Sundays.',
          km: 'បាទ/ចាស! វាបង្ហាញទាំងថ្ងៃប្រតិទិនសរុប និងចំនួនថ្ងៃធ្វើការ (មិនរាប់បញ្ចូលថ្ងៃសៅរ៍ និងអាទិត្យ)។'
        }
      }
    ]
  },

  // DEVELOPER TOOLS
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    category: 'developer',
    name: {
      en: 'JSON Formatter & Validator',
      km: 'ឧបករណ៍តម្រៀប និងផ្ទៀងផ្ទាត់ JSON'
    },
    shortDescription: {
      en: 'Prettify, minify, validate, and format JSON code with syntax diagnostics.',
      km: 'តម្រៀបឱ្យស្អាត បង្រួមតូច ពិនិត្យកំហុស និងផ្ទៀងផ្ទាត់កូដ JSON ដោយឥតគិតថ្លៃ។'
    },
    description: {
      en: 'Beautify messy JSON, compress/minify payloads, and find syntax errors with pinpoint line and column numbers. Features one-click copy and file download.',
      km: 'តម្រៀបកូដ JSON ឱ្យមានរបៀបរៀបរយ បង្រួមទំហំកូដ និងបង្ហាញចំណុចខុសឆ្គងយ៉ាងច្បាស់លាស់ ព្រមទាំងអាចចម្លង ឬទាញយកជាឯកសារបាន។'
    },
    iconName: 'Code',
    popular: true,
    tags: ['json', 'formatter', 'beautifier', 'validator', 'minify'],
    instructions: {
      en: [
        'Paste your raw JSON into the editor.',
        'Click "Prettify" (2 or 4 spaces) or "Minify".',
        'Copy the result or download as a .json file.'
      ],
      km: [
        'ចម្លងកូដ JSON របស់អ្នកដាក់ក្នុងប្រអប់។',
        'ចុច "តម្រៀបកូដ" (២ ឬ ៤ ដកឃ្លា) ឬ "បង្រួមកូដ"។',
        'ចម្លងលទ្ធផល ឬទាញយកជាឯកសារ .json។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Is my JSON data sent to any server?',
          km: 'តើទិន្នន័យ JSON របស់ខ្ញុំត្រូវបានផ្ញើទៅកាន់ម៉ាស៊ីនមេ (Server) ដែរឬទេ?'
        },
        answer: {
          en: 'No! Everything is parsed and formatted 100% locally inside your browser. No sensitive API payloads leave your computer.',
          km: 'ទេ! ការដំណើរការទាំងអស់ធ្វើឡើងក្នុងកម្មវិធីរុករក (Browser) របស់អ្នក ១០០% ដោយគ្មានទិន្នន័យណាមួយត្រូវបានផ្ញើចេញក្រៅឡើយ។'
        }
      }
    ]
  },
  {
    id: 'uuid-generator',
    slug: 'uuid-generator',
    category: 'developer',
    name: {
      en: 'UUID / GUID Generator',
      km: 'ឧបករណ៍បង្កើត UUID / GUID'
    },
    shortDescription: {
      en: 'Generate cryptographically random UUID v4 strings in bulk with custom casing.',
      km: 'បង្កើតលេខសម្គាល់ចៃដន្យ UUID v4 ច្រើនក្នុងពេលតែមួយ ជាមួយជម្រើសទម្រង់ផ្សេងៗ។'
    },
    description: {
      en: 'Generate version 4 UUIDs (Universally Unique Identifiers) individually or in batches up to 500. Customize uppercase/lowercase and include or remove hyphens.',
      km: 'បង្កើត UUID v4 ដែលមានសុវត្ថិភាពខ្ពស់ អាចបង្កើតម្តងរហូតដល់ ៥០០ លេខ ជ្រើសរើសជាអក្សរតូច/ធំ ឬដកសញ្ញាដក (-) ចេញបានយ៉ាងងាយស្រួល។'
    },
    iconName: 'Fingerprint',
    popular: true,
    tags: ['uuid', 'guid', 'generator', 'v4', 'random id'],
    instructions: {
      en: [
        'Select the quantity of UUIDs to generate (1 to 500).',
        'Choose options (uppercase, no hyphens).',
        'Click Generate and copy all or individual UUIDs.'
      ],
      km: [
        'ជ្រើសរើសចំនួន UUID ដែលចង់បង្កើត (១ ដល់ ៥០០)។',
        'ជ្រើសរើសទម្រង់ (អក្សរធំ ឬគ្មានសញ្ញាដក)។',
        'ចុច "បង្កើត" ហើយចម្លងយកទៅប្រើ។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Are these UUIDs cryptographically random?',
          km: 'តើ UUID ទាំងនេះមានភាពចៃដន្យ និងសុវត្ថិភាពកម្រិតណា?'
        },
        answer: {
          en: 'Yes, they are generated using the browser\'s secure crypto.randomUUID() API conforming to RFC 4122.',
          km: 'បាទ/ចាស! វាត្រូវបានបង្កើតឡើងដោយប្រើប្រាស់ crypto.randomUUID() របស់ browser តាមស្តង់ដារ RFC 4122 ដែលធានាថាមិនជាន់គ្នា។'
        }
      }
    ]
  },
  {
    id: 'base64-encoder-decoder',
    slug: 'base64-encoder-decoder',
    category: 'developer',
    name: {
      en: 'Base64 Encoder & Decoder',
      km: 'ឧបករណ៍បម្លែងកូដ Base64'
    },
    shortDescription: {
      en: 'Encode and decode UTF-8 text and files/images to Base64 format.',
      km: 'បម្លែងអត្ថបទ (UTF-8) និងរូបភាព/ឯកសារទៅជាទម្រង់ Base64 និងច្រាសមកវិញ។'
    },
    description: {
      en: 'Convert text, strings, or image files to Base64 and decode Base64 back to plain text or preview images with full UTF-8 and Khmer script support.',
      km: 'បម្លែងអត្ថបទ ឬរូបភាពទៅជាទម្រង់ Base64 data URI និងបម្លែងពី Base64 ត្រឡប់មកវិញ ដោយគាំទ្រតួអក្សរខ្មែរ និងនិមិត្តសញ្ញាគ្រប់ប្រភេទ។'
    },
    iconName: 'Binary',
    popular: true,
    tags: ['base64', 'encoder', 'decoder', 'image to base64', 'utf-8'],
    instructions: {
      en: [
        'Select "Text" or "File/Image" mode.',
        'Choose Encode or Decode.',
        'Input text or drop an image to get instant output.'
      ],
      km: [
        'ជ្រើសរើសមុខងារ "អត្ថបទ" ឬ "រូបភាព/ឯកសារ"។',
        'ជ្រើសរើស Encode (បម្លែងកូដ) ឬ Decode (ស្រាយកូដ)។',
        'បញ្ចូលអត្ថបទ ឬទម្លាក់រូបភាពដើម្បីទទួលបានលទ្ធផលភ្លាមៗ។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Does this handle Khmer and special Unicode characters properly?',
          km: 'តើវាគាំទ្រអក្សរខ្មែរ និងតួអក្សរពិសេសបានត្រឹមត្រូវទេ?'
        },
        answer: {
          en: 'Yes, UTF-8 byte encoding is fully implemented so Khmer vowels and sub-scripts are never garbled.',
          km: 'បាទ/ចាស! ប្រព័ន្ធប្រើប្រាស់ UTF-8 Encoding ពេញលេញ ធានាថាអក្សរខ្មែរ និងស្រៈមិនខូចទ្រង់ទ្រាយឡើយ។'
        }
      }
    ]
  },
  {
    id: 'jwt-decoder',
    slug: 'jwt-decoder',
    category: 'developer',
    name: {
      en: 'JWT (JSON Web Token) Decoder',
      km: 'ឧបករណ៍ស្រាយកូដ JWT'
    },
    shortDescription: {
      en: 'Decode JSON Web Tokens instantly to inspect header, payload, and expiry.',
      km: 'ស្រាយកូដ JWT ដោយសុវត្ថិភាព ដើម្បីពិនិត្យមើល Header, Payload និងកាលបរិច្ឆេទផុតកំណត់។'
    },
    description: {
      en: 'Inspect any JWT token safely in your browser. View claims, user roles, issued-at (iat) and expiration (exp) dates with a live countdown timer without exposing your secrets.',
      km: 'ត្រួតពិនិត្យ Header និង Payload នៃកូដ JWT ដោយសុវត្ថិភាព មើលព័ត៌មានលម្អិត និងកាលបរិច្ឆេទផុតកំណត់ ដោយមិនបញ្ជូន token ទៅកាន់ម៉ាស៊ីនមេឡើយ។'
    },
    iconName: 'ShieldCheck',
    popular: true,
    tags: ['jwt', 'token', 'auth', 'decoder', 'claims', 'security'],
    instructions: {
      en: [
        'Paste your JWT token string into the input box.',
        'View the decoded header and payload formatted in clean JSON.',
        'Check token validity and expiration status.'
      ],
      km: [
        'ចម្លងកូដ JWT របស់អ្នកដាក់ក្នុងប្រអប់បញ្ចូល។',
        'ពិនិត្យមើល Header និង Payload ដែលត្រូវបានតម្រៀបជា JSON យ៉ាងច្បាស់។',
        'មើលស្ថានភាពសុពលភាព និងពេលផុតកំណត់នៃ Token។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Is it safe to paste production JWT tokens here?',
          km: 'តើវាមានសុវត្ថិភាពទេក្នុងការដាក់ Token នៅទីនេះ?'
        },
        answer: {
          en: 'Yes, the token is decoded entirely in your local browser JavaScript engine. It is never logged or transmitted over the internet.',
          km: 'មានសុវត្ថិភាព ១០០%! ការស្រាយកូដធ្វើឡើងក្នុង Browser របស់អ្នកផ្ទាល់ គ្មានការរក្សាទុក ឬផ្ញើទិន្នន័យទៅកាន់អ៊ីនធឺណិតឡើយ។'
        }
      }
    ]
  },
  {
    id: 'url-encoder-decoder',
    slug: 'url-encoder-decoder',
    category: 'developer',
    name: {
      en: 'URL Encoder & Decoder',
      km: 'ឧបករណ៍បម្លែង និងស្រាយកូដ URL'
    },
    shortDescription: {
      en: 'Safely encode or decode URLs and query parameters.',
      km: 'បម្លែងតំណភ្ជាប់ URL និង Query Parameters ឱ្យមានសុវត្ថិភាពក្នុងការប្រើប្រាស់។'
    },
    description: {
      en: 'Encode special characters into percent-encoded (%20) URI format or decode them back into human-readable URLs with parameter inspector.',
      km: 'បម្លែងតួអក្សរពិសេសក្នុង URL ទៅជាទម្រង់ Percent-encoded ឬស្រាយកូដត្រឡប់មកជាតំណភ្ជាប់ធម្មតាវិញយ៉ាងរហ័ស។'
    },
    iconName: 'Link2',
    popular: false,
    tags: ['url', 'uri', 'encode', 'decode', 'query params'],
    instructions: {
      en: [
        'Paste the URL or text.',
        'Choose Encode or Decode.',
        'Copy the processed URL or inspect its query parameters.'
      ],
      km: [
        'ចម្លង URL ឬអត្ថបទដាក់ក្នុងប្រអប់។',
        'ជ្រើសរើស Encode ឬ Decode។',
        'ចម្លងលទ្ធផល ឬពិនិត្យមើល Query Parameters។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'What is the difference between encodeURI and encodeURIComponent?',
          km: 'តើ encodeURI និង encodeURIComponent ខុសគ្នាយ៉ាងណា?'
        },
        answer: {
          en: 'encodeURI preserves URL structures like :// and /, while encodeURIComponent encodes everything, which is ideal for query parameter values.',
          km: 'encodeURI រក្សាទម្រង់តំណភ្ជាប់ដូចជា :// និង / ចំណែកឯ encodeURIComponent បម្លែងគ្រប់តួអក្សរទាំងអស់ ដែលស័ក្តិសមសម្រាប់តម្លៃក្នុង parameter។'
        }
      }
    ]
  },
  {
    id: 'timestamp-converter',
    slug: 'timestamp-converter',
    category: 'developer',
    name: {
      en: 'Unix Timestamp Converter',
      km: 'ឧបករណ៍បម្លែង Unix Timestamp'
    },
    shortDescription: {
      en: 'Convert Unix epoch timestamps to human dates in UTC and Cambodia ICT (UTC+7).',
      km: 'បម្លែង Unix Timestamp ទៅជាកាលបរិច្ឆេទធម្មតា (UTC និងម៉ោងកម្ពុជា UTC+7)។'
    },
    description: {
      en: 'Convert Unix epoch timestamps (in seconds or milliseconds) to readable dates in UTC, Indochina Time (ICT / Phnom Penh UTC+7), and your local timezone, or convert any date back to a timestamp.',
      km: 'បម្លែងពេលវេលា Unix Epoch ទៅជាថ្ងៃខែឆ្នាំធម្មតា គាំទ្រម៉ោងសកល UTC ម៉ោងនៅកម្ពុជា (UTC+7) និងម៉ោងក្នុងម៉ាស៊ីនរបស់អ្នក ព្រមទាំងបម្លែងពីថ្ងៃខែមកជា Timestamp វិញ។'
    },
    iconName: 'Clock',
    popular: true,
    tags: ['timestamp', 'epoch', 'unix', 'time', 'cambodia time', 'timezone'],
    instructions: {
      en: [
        'Enter a Unix timestamp in seconds or milliseconds, or pick a date.',
        'View conversions across multiple timezones including Phnom Penh (UTC+7).',
        'Copy current timestamp or formatted dates.'
      ],
      km: [
        'បញ្ចូល Timestamp (វិនាទី ឬមីលីវិនាទី) ឬជ្រើសរើសថ្ងៃខែ។',
        'មើលលទ្ធផលតាមតំបន់ម៉ោងផ្សេងៗរួមទាំងម៉ោងនៅភ្នំពេញ (UTC+7)។',
        'ចម្លង Timestamp បច្ចុប្បន្ន ឬកាលបរិច្ឆេទដែលចង់បាន។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'What timezone does Cambodia use?',
          km: 'តើប្រទេសកម្ពុជាប្រើប្រាស់តំបន់ម៉ោងអ្វី?'
        },
        answer: {
          en: 'Cambodia operates in Indochina Time (ICT), which is UTC+7 all year round with no daylight saving time.',
          km: 'ប្រទេសកម្ពុជាប្រើប្រាស់ម៉ោងឥណ្ឌូចិន (ICT) គឺ UTC+7 ពេញមួយឆ្នាំ ដោយគ្មានការប្តូរម៉ោងតាមរដូវកាលឡើយ។'
        }
      }
    ]
  },
  {
    id: 'color-converter',
    slug: 'color-converter',
    category: 'developer',
    name: {
      en: 'Color Converter & Generator',
      km: 'ឧបករណ៍បម្លែងកូដពណ៌ (HEX, RGB, HSL)'
    },
    shortDescription: {
      en: 'Convert HEX, RGB, HSL, CMYK, inspect contrast ratios, and copy CSS values.',
      km: 'បម្លែងកូដពណ៌ HEX, RGB, HSL, CMYK ពិនិត្យកម្រិតកម្រិតពណ៌ និងចម្លងកូដ CSS។'
    },
    description: {
      en: 'An all-in-one color converter and picker. Switch seamlessly between HEX, RGB, HSL, and CMYK formats, inspect WCAG contrast ratios, and generate monochromatic color shades.',
      km: 'ឧបករណ៍បម្លែងកូដពណ៌យ៉ាងរហ័ស គាំទ្រទម្រង់ HEX, RGB, HSL, CMYK ព្រមទាំងពិនិត្យមើលកម្រិត Contrast សម្រាប់រចនាគេហទំព័រ និងបង្កើតស្រមោលពណ៌ស្អាតៗ។'
    },
    iconName: 'Palette',
    popular: true,
    tags: ['color', 'hex', 'rgb', 'hsl', 'cmyk', 'css', 'picker', 'palette'],
    instructions: {
      en: [
        'Use the color picker or enter any HEX/RGB/HSL string.',
        'See immediate conversions across all color models.',
        'Click to copy CSS snippets or palette shades.'
      ],
      km: [
        'ជ្រើសរើសពណ៌ ឬវាយកូដពណ៌ HEX/RGB/HSL។',
        'មើលលទ្ធផលបម្លែងទៅគ្រប់ទម្រង់ភ្លាមៗ។',
        'ចុចដើម្បីចម្លងកូដ CSS យកទៅប្រើក្នុងការរចនា។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Can I copy ready-to-use CSS syntax?',
          km: 'តើខ្ញុំអាចចម្លងកូដ CSS ទៅប្រើភ្លាមៗបានទេ?'
        },
        answer: {
          en: 'Yes, one-click copy buttons are provided for standard hex (#xxxxxx), rgb(), and hsl() CSS properties.',
          km: 'បាទ/ចាស! អ្នកអាចចុចចម្លងទម្រង់ #HEX, rgb(), និង hsl() ទៅដាក់ក្នុង file CSS បានភ្លាមៗ។'
        }
      }
    ]
  },
  {
    id: 'qr-code-generator',
    slug: 'qr-code-generator',
    category: 'developer',
    name: {
      en: 'QR Code Generator',
      km: 'ឧបករណ៍បង្កើត QR Code'
    },
    shortDescription: {
      en: 'Create custom QR codes for URLs, text, Wi-Fi, and phone numbers with PNG download.',
      km: 'បង្កើត QR Code សម្រាប់គេហទំព័រ អត្ថបទ Wi-Fi និងលេខទូរស័ព្ទ រួមទាំងទាញយកជារូបភាព PNG។'
    },
    description: {
      en: 'Generate clean, high-resolution QR codes directly in your browser. Supports website links, Wi-Fi network credentials, plain text, and phone numbers with instant PNG download.',
      km: 'បង្កើតរូបភាព QR Code កម្រិតច្បាស់ខ្ពស់ សម្រាប់ភ្ជាប់ទៅគេហទំព័រ ចែករំលែកលេខសម្ងាត់ Wi-Fi អត្ថបទ ឬលេខទូរស័ព្ទ ដោយឥតគិតថ្លៃ និងទាញយកជារូបភាពបានភ្លាមៗ។'
    },
    iconName: 'QrCode',
    popular: true,
    tags: ['qr code', 'generator', 'wifi', 'download', 'png', 'link'],
    instructions: {
      en: [
        'Choose data type (URL, Plain Text, Wi-Fi, Phone).',
        'Fill in the content.',
        'Adjust size or error correction level if needed.',
        'Download the QR code image as PNG.'
      ],
      km: [
        'ជ្រើសរើសប្រភេទ (តំណភ្ជាប់, អត្ថបទ, Wi-Fi, ទូរស័ព្ទ)។',
        'បញ្ចូលទិន្នន័យ។',
        'ទាញយករូបភាព QR Code ជាប្រភេទ PNG ទៅប្រើប្រាស់។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Do generated QR codes expire?',
          km: 'តើ QR Code ដែលបង្កើតហើយមានថ្ងៃផុតកំណត់ដែរឬទេ?'
        },
        answer: {
          en: 'No! These are static QR codes containing your raw data directly; they never expire and do not depend on any third-party redirect service.',
          km: 'ទេ! QR Code ទាំងនេះគឺជា Static QR ដែលបង្កប់ទិន្នន័យរបស់អ្នកផ្ទាល់ គ្មានថ្ងៃផុតកំណត់ឡើយ។'
        }
      }
    ]
  },
  {
    id: 'password-generator',
    slug: 'password-generator',
    category: 'developer',
    name: {
      en: 'Strong Password Generator',
      km: 'ឧបករណ៍បង្កើតពាក្យសម្ងាត់សុវត្ថិភាព'
    },
    shortDescription: {
      en: 'Generate secure, unbreakable passwords with customizable characters and strength meter.',
      km: 'បង្កើតពាក្យសម្ងាត់ដែលមានសុវត្ថិភាពខ្ពស់ ពិបាកទាយ ជាមួយជម្រើសប្រវែង និងនិមិត្តសញ្ញា។'
    },
    description: {
      en: 'Generate cryptographically random passwords to protect your online accounts. Customize length, uppercase letters, lowercase letters, numbers, and symbols with an instant entropy strength meter.',
      km: 'បង្កើតពាក្យសម្ងាត់ (Password) ដ៏រឹងមាំសម្រាប់ការពារគណនីរបស់អ្នក អាចកំណត់ប្រវែង ចំនួនលេខ អក្សរធំ-តូច និងនិមិត្តសញ្ញាពិសេសបានតាមតម្រូវការ។'
    },
    iconName: 'KeyRound',
    popular: true,
    tags: ['password', 'generator', 'security', 'crypto', 'random'],
    instructions: {
      en: [
        'Adjust the password length slider (e.g. 16 to 32 characters).',
        'Check or uncheck character sets (uppercase, lowercase, numbers, symbols).',
        'Click "Generate Password" and copy to clipboard.'
      ],
      km: [
        'កំណត់ប្រវែងពាក្យសម្ងាត់ (ឧទាហរណ៍៖ ១៦ ដល់ ៣២ តួអក្សរ)។',
        'ជ្រើសរើសប្រភេទតួអក្សរ (អក្សរធំ តូច លេខ ឬសញ្ញា)។',
        'ចុច "បង្កើតពាក្យសម្ងាត់" ហើយចម្លងយកទៅប្រើ។'
      ]
    },
    faqs: [
      {
        question: {
          en: 'Is the generated password stored anywhere?',
          km: 'តើពាក្យសម្ងាត់ដែលបង្កើតត្រូវបានរក្សាទុកនៅកន្លែងណាដែរឬទេ?'
        },
        answer: {
          en: 'Never. Passwords are generated directly via window.crypto in your browser memory and disappear immediately upon page refresh.',
          km: 'មិនដែលមានឡើយ! ពាក្យសម្ងាត់ត្រូវបានបង្កើតឡើងតាមរយៈ window.crypto ក្នុងកុំព្យូទ័ររបស់អ្នកផ្ទាល់ និងមិនត្រូវបានរក្សាទុកក្នុង server ឡើយ។'
        }
      }
    ]
  }
];

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolMeta[] {
  return TOOLS.filter((t) => t.category === category);
}

export function getPopularTools(): ToolMeta[] {
  return TOOLS.filter((t) => t.popular);
}
