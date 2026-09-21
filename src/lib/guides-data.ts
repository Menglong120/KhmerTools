export interface GuideArticle {
  slug: string;
  title: {
    en: string;
    km: string;
  };
  summary: {
    en: string;
    km: string;
  };
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  category: 'khmer' | 'developer' | 'general';
  tags: string[];
  relatedToolSlugs: string[];
  sections: {
    id: string;
    title: {
      en: string;
      km: string;
    };
    content: {
      en: string;
      km: string;
    };
  }[];
}

export const GUIDES: GuideArticle[] = [
  {
    slug: 'cambodian-riel-currency-and-number-system',
    title: {
      en: 'Complete Guide to Cambodian Riel (KHR) & Khmer Numerals',
      km: 'មគ្គុទ្ទេសក៍ពេញលេញអំពីប្រាក់រៀលខ្មែរ (KHR) និងប្រព័ន្ធលេខខ្មែរ',
    },
    summary: {
      en: 'An in-depth guide exploring the historical origins of Khmer numerals (០-៩), linguistic counting structures, official National Bank of Cambodia formatting rules, and invoice word spelling.',
      km: 'ស្វែងយល់លម្អិតអំពីប្រភពដើមនៃលេខខ្មែរ រចនាសម្ព័ន្ធរាប់លេខ ក្បួនសរសេរជាពាក្យលើវិក្កយបត្រ និងការកំណត់ទម្រង់ប្រាក់រៀលតាមស្ដង់ដារធនាគារជាតិនៃកម្ពុជា។',
    },
    readTime: '6 min read',
    publishedAt: '2026-09-01',
    updatedAt: '2026-09-18',
    author: 'KhmerTools Editorial Team',
    category: 'khmer',
    tags: ['Khmer Numerals', 'Cambodian Riel', 'Currency', 'Invoice Writing', 'Cambodia'],
    relatedToolSlugs: ['khmer-number-converter', 'khmer-text-utilities'],
    sections: [
      {
        id: 'historical-roots',
        title: {
          en: 'Historical Origins: The Oldest Inscriptional Zero',
          km: 'ប្រភពដើមប្រវត្តិសាស្ត្រ៖ លេខសូន្យដំបូងគេក្នុងសិលាចារឹក',
        },
        content: {
          en: 'Khmer numerals hold a revered position in the history of mathematics worldwide. Archaeological inscriptions, notably Stele K. 127 discovered at Trapang Prei in Kratié Province dating back to 683 CE, contain what mathematicians and epigraphers recognize as the earliest recorded epigraphic zero in human civilization. The numerals from ០ to ៩ represent centuries of linguistic continuity that form the backbone of modern Cambodian commerce, administration, and cultural identity.',
          km: 'លេខខ្មែរមានប្រវត្តិសាស្ត្រយ៉ាងយូរអង្វែង និងជាទីកត់សម្គាល់ក្នុងប្រវត្តិគណិតវិទ្យាពិភពលោក។ យោងតាមសិលាចារឹក K. 127 រកឃើញនៅត្រពាំងព្រៃ ខេត្តក្រចេះ ចុះកាលបរិច្ឆេទឆ្នាំ ៦៨៣ នៃគ្រិស្តសករាជ បានបង្ហាញពីតួលេខសូន្យដំបូងគេបង្អស់លើពិភពលោក។ តួលេខពី ០ ដល់ ៩ តំណាងឱ្យអត្តសញ្ញាណជាតិ និងត្រូវបានប្រើប្រាស់យ៉ាងខ្ជាប់ខ្ជួនរហូតមកដល់បច្ចុប្បន្ន។',
        },
      },
      {
        id: 'numeral-mapping',
        title: {
          en: 'Arabic to Khmer Numeral Mapping & Phonetics',
          km: 'ការផ្គូផ្គងលេខអារ៉ាប់ទៅជាលេខខ្មែរ និងការបញ្ចេញសំឡេង',
        },
        content: {
          en: 'Every Western Arabic digit directly maps to an authentic Khmer Unicode glyph in the range U+17E0 through U+17E9:\n\n• 0 -> ០ (soun / សូន្យ)\n• 1 -> ១ (mouy / មួយ)\n• 2 -> ២ (pi / ពីរ)\n• 3 -> ៣ (bei / បី)\n• 4 -> ៤ (buon / បួន)\n• 5 -> ៥ (pram / ប្រាំ)\n• 6 -> ៦ (pram mouy / ប្រាំមួយ)\n• 7 -> ៧ (pram pi / ប្រាំពីរ)\n• 8 -> ៨ (pram bei / ប្រាំបី)\n• 9 -> ៩ (pram buon / ប្រាំបួន)\n\nNotice that Khmer counting operates on a biquinary (base-5 / base-10 hybrid) linguistic architecture, where numbers from 6 through 9 are literally formed by combining "5" with digits 1 through 4.',
          km: 'លេខអារ៉ាប់នីមួយៗត្រូវនឹងតួអក្សរយូនីកូដខ្មែរចាប់ពី U+17E0 ដល់ U+17E9៖ ០ (សូន្យ), ១ (មួយ), ២ (ពីរ), ៣ (បី), ៤ (បួន), ៥ (ប្រាំ), ៦ (ប្រាំមួយ), ៧ (ប្រាំពីរ), ៨ (ប្រាំបី), ៩ (ប្រាំបួន)។ ការរាប់លេខខ្មែរមានលក្ខណៈពិសេសដោយប្រើប្រព័ន្ធគោល ៥ បូកបន្ថែម (៥+១=៦, ៥+២=៧, ៥+៣=៨, ៥+៤=៩)។',
        },
      },
      {
        id: 'large-numbers',
        title: {
          en: 'Large Scales and Linguistic Grouping',
          km: 'ការរាប់លេខខ្ទង់ធំៗក្នុងភាសាខ្មែរ',
        },
        content: {
          en: 'In contrast to English which groups digits strictly in powers of thousands (thousand, million, billion), Cambodian utilizes unique historical unit markers for distinct multiples:\n\n• ដប់ (Dop) = 10\n• រយ (Roy) = 100\n• ពាន់ (Poan) = 1,000\n• ម៉ឺន (Meun) = 10,000\n• សែន (Saen) = 100,000\n• លាន (Lean) = 1,000,000\n• កោដិ (Kaot) = 10,000,000\n\nUnderstanding these scales is fundamental when generating legal contracts, accounting ledgers, and banking documentation across Cambodia.',
          km: 'ភាសាខ្មែរមានពាក្យសម្គាល់ខ្ទង់ច្បាស់លាស់៖ ដប់ (10), រយ (100), ពាន់ (1,000), ម៉ឺន (10,000), សែន (100,000), លាន (1,000,000), និងកោដិ (10,000,000)។ ការយល់ដឹងអំពីខ្ទង់ទាំងនេះមានសារៈសំខាន់ណាស់ក្នុងការធ្វើកិច្ចសន្យា ឯកសារគណនេយ្យ និងធនាគារ។',
        },
      },
      {
        id: 'riel-currency-rules',
        title: {
          en: 'Official Currency Formatting: The Cambodian Riel (KHR / ៛)',
          km: 'ក្បួនកំណត់ទម្រង់រូបិយវត្ថុជាតិ៖ ប្រាក់រៀលខ្មែរ (៛)',
        },
        content: {
          en: 'The National Bank of Cambodia (NBC) administers the Cambodian Riel, denoted by the Unicode currency symbol ៛ (U+17DB). Official bank checks, formal invoices, and tax declarations issued in Cambodia mandate written amounts spelled out in full Khmer words alongside numeric values. This eliminates fraud and prevents typographic ambiguity in legal dispute resolutions.',
          km: 'ធនាគារជាតិនៃកម្ពុជា (NBC) គ្រប់គ្រងរូបិយប័ណ្ណជាតិប្រាក់រៀល ដែលមានសញ្ញាសម្គាល់ ៛ (U+17DB)។ ក្នុងការចេញមូលប្បទានប័ត្រ (Cheque) វិក្កយបត្រផ្លូវការ និងលិខិតប្រកាសពន្ធ ច្បាប់តម្រូវឱ្យសរសេរចំនួនទឹកប្រាក់ជាពាក្យអក្សរខ្មែរឱ្យបានពេញលេញ ដើម្បីធានាសុពលភាពផ្លូវច្បាប់ និងការពារការក្លែងបន្លំ។',
        },
      },
    ],
  },
  {
    slug: 'understanding-buddhist-era-calendar',
    title: {
      en: 'Understanding the Buddhist Era (B.E.) Calendar in Cambodia',
      km: 'ស្វែងយល់អំពីកាលបរិច្ឆេទពុទ្ធសករាជ (ព.ស.) នៅប្រទេសកម្ពុជា',
    },
    summary: {
      en: 'Explore the computational logic behind the Buddhist Era calendar, the 543/544-year Gregorian offset, Cambodian lunar-solar astronomical adjustments, and traditional religious holidays.',
      km: 'ស្វែងយល់ពីរបៀបគណនាឆ្នាំពុទ្ធសករាជ ការគណនាគម្លាត ៥៤៣ ឬ ៥៤៤ ឆ្នាំជាមួយគ្រិស្តសករាជ និងកាលបរិច្ឆេទបុណ្យប្រពៃណីជាតិសំខាន់ៗ។',
    },
    readTime: '5 min read',
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-19',
    author: 'KhmerTools Editorial Team',
    category: 'khmer',
    tags: ['Buddhist Era', 'Calendar', 'B.E.', 'Khmer New Year', 'Astronomy', 'Cambodia'],
    relatedToolSlugs: ['khmer-date-converter', 'date-calculator'],
    sections: [
      {
        id: 'what-is-be',
        title: {
          en: 'What is the Buddhist Era (B.E.)?',
          km: 'តើអ្វីជាពុទ្ធសករាជ (ព.ស.)?',
        },
        content: {
          en: 'The Buddhist Era (B.E., or ពុទ្ធសករាជ "Putheak Sakaraj" in Khmer) is a traditional calendar epoch used extensively across Theravada Buddhist nations of Southeast Asia, including Cambodia, Thailand, Laos, and Myanmar. The era marks the year Gautama Buddha attained Parinirvana (passing away) at Kusinara.',
          km: 'ពុទ្ធសករាជ (ព.ស.) គឺជាប្រព័ន្ធកាលបរិច្ឆេទប្រពៃណីដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយក្នុងបណ្តាប្រទេសកាន់ព្រះពុទ្ធសាសនាថេរវាទ រួមមានកម្ពុជា ថៃ ឡាវ និងភូមា។ ការរាប់ពុទ្ធសករាជចាប់ផ្តើមគិតតាំងពីឆ្នាំដែលព្រះសម្មាសម្ពុទ្ធទ្រង់យាងចូលបរិនិព្វាន។',
        },
      },
      {
        id: 'conversion-logic',
        title: {
          en: 'The Conversion Formula: 543 vs. 544 Years Offset',
          km: 'រូបមន្តគណនា៖ គម្លាត ៥៤៣ ឆ្នាំ និង ៥៤៤ ឆ្នាំ',
        },
        content: {
          en: 'In standard civil usage, the basic conversion between the Common Era (CE / AD) and Buddhist Era is straightforward:\n\n• Buddhist Era (B.E.) = Common Era (CE) + 543 or 544\n\nIn Cambodia, the Buddhist Era year advances not on January 1st, but rather on the Full Moon day of the lunar month of Visak (ពិសាខ - typically falling in May). Therefore:\n1. From January 1st until Visak Bochea: B.E. = CE + 543.\n2. After Visak Bochea until December 31st: B.E. = CE + 544.\nIn everyday civil and legal documents where solar dates are harmonized with civil calendars, a fixed standard of +543 or +544 is referenced based on official Royal Government circulars.',
          km: 'ជាទូទៅ គម្លាតរវាងគ្រិស្តសករាជ (គ.ស.) និងពុទ្ធសករាជ (ព.ស.) គឺ ៥៤៣ ឬ ៥៤៤ ឆ្នាំ។ នៅកម្ពុជា ឆ្នាំពុទ្ធសករាជផ្លាស់ប្តូរនៅថ្ងៃពេញបូណ៌មីខែពិសាខ (បុណ្យវិសាខបូជា) មិនមែនថ្ងៃទី ១ មករា នោះទេ។ ដូច្នេះ មុនថ្ងៃពិសាខបូជា ព.ស. = គ.ស. + ៥៤៣ ហើយក្រោយថ្ងៃពិសាខបូជា ព.ស. = គ.ស. + ៥៤៤។',
        },
      },
      {
        id: 'cultural-importance',
        title: {
          en: 'Traditional Lunar Festivals & Public Observances',
          km: 'ពិធីបុណ្យប្រពៃណី និងថ្ងៃឈប់សម្រាកសាធារណៈ',
        },
        content: {
          en: 'Cambodia celebrates essential cultural holidays according to the traditional lunar calendar:\n\n• Choul Chnam Thmey (Khmer New Year): Celebrated in mid-April (Maha Sangkran), transitioning to a new animal zodiac year (ជូត, ឆ្លូវ, ខាល...).\n• Pchum Ben (Ancestors Day): A 15-day commemoration culminating on the 15th day of the waning moon of Photrobot (ភទ្របទ).\n• Meak Bochea and Visak Bochea: Holy observances honoring landmark sermons and the Buddha\'s life milestones.\n• Water Festival (Bon Om Touk): Coinciding with the full moon of Kadeuk (កត្តិក), marking the reverse flow of the Tonle Sap river.',
          km: 'ពិធីបុណ្យសំខាន់ៗត្រូវបានប្រារព្ធឡើងតាមចន្ទគតិ រួមមាន ពិធីបុណ្យចូលឆ្នាំថ្មីប្រពៃណីជាតិ (ខែមេសា), បុណ្យភ្ជុំបិណ្ឌ (ខែភទ្របទ), វិសាខបូជា និងមាឃបូជា, និងព្រះរាជពិធីបុណ្យអុំទូក បណ្តែតប្រទីប និងសំពះព្រះខែ (ពេញបូណ៌មីខែកត្តិក)។',
        },
      },
    ],
  },
  {
    slug: 'client-side-privacy-guide-for-developer-tools',
    title: {
      en: 'Client-Side Security Guide: Why In-Browser Tools Protect Your Sensitive Data',
      km: 'សុវត្ថិភាពទិន្នន័យលើ Browser៖ មូលហេតុដែលឧបករណ៍ដំណើរការលើម៉ាស៊ីនអ្នកប្រើប្រាស់មានសុវត្ថិភាពខ្ពស់',
    },
    summary: {
      en: 'Learn how modern WebAssembly and JavaScript enable private, 100% in-browser utilities that guarantee zero data leakage, ideal for API keys, JSON payloads, and sensitive tokens.',
      km: 'ស្វែងយល់ពីរបៀបដែលបច្ចេកវិទ្យាទំនើបជួយការពារទិន្នន័យសម្ងាត់របស់អ្នក ដូចជា API Key, JSON payload, និង Token ដោយមិនចាំបាច់ផ្ញើទៅកាន់ម៉ាស៊ីនមេខាងក្រៅ។',
    },
    readTime: '7 min read',
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-20',
    author: 'KhmerTools Technical Architecture',
    category: 'developer',
    tags: ['Security', 'Privacy', 'Client-Side', 'Developer Tools', 'Web Security'],
    relatedToolSlugs: ['json-formatter', 'jwt-decoder', 'uuid-generator', 'password-generator'],
    sections: [
      {
        id: 'server-risks',
        title: {
          en: 'The Unseen Vulnerabilities of Server-Side Converters',
          km: 'ហានិភ័យនៃគេហទំព័រដែលដំណើរការទិន្នន័យលើ Server',
        },
        content: {
          en: 'When developers paste JSON objects containing authentication headers, user records, or customer identifiers into online tools, many legacy websites transmit that raw text across HTTP request payloads to remote backend servers. If those servers log incoming requests, retain telemetry caches, or experience database breaches, proprietary credentials and sensitive company data become compromised without the user\'s awareness.',
          km: 'នៅពេលអ្នកអភិវឌ្ឍន៍ចម្លងកូដ JSON ដែលមាន Header សម្ងាត់ ឬទិន្នន័យអតិថិជនទៅកាន់គេហទំព័រដែលដំណើរការលើ Server ទិន្នន័យទាំងនោះអាចត្រូវបានរក្សាទុកក្នុង Server Log ឬប្រឈមនឹងការលួចទិន្នន័យ (Data Breach) ដោយមិនដឹងខ្លួន។',
        },
      },
      {
        id: 'browser-execution',
        title: {
          en: 'The In-Browser Zero-Knowledge Architecture',
          km: 'ស្ថាបត្យកម្មកុំព្យូទ័រលើ Browser ដោយមិនបញ្ជូនទិន្នន័យ (Zero-Knowledge)',
        },
        content: {
          en: 'KhmerTools is intentionally architected around an uncompromising client-side model:\n\n1. Zero Network Egress: Text transformations, JSON syntax parsers, base64 transformations, and cryptographic calculations execute entirely within the sandbox of your browser using local V8/JavaScript engines.\n2. Offline Capability: Once static assets are cached, you can disconnect your internet connection entirely and the tools continue operating without disruption.\n3. Cryptographic Randomness: Tools like the Password Generator and UUID Generator leverage Web Cryptography API (`crypto.getRandomValues()`), guaranteeing cryptographically secure entropy directly from your operating system kernel.',
          km: 'KhmerTools ត្រូវបានបង្កើតឡើងដោយឈរលើគោលការណ៍សុវត្ថិភាពដាច់ខាត៖ មិនបញ្ជូនទិន្នន័យទៅក្រៅ (Zero Network Egress), អាចប្រើប្រាស់បានទោះបីគ្មានអ៊ីនធឺណិត (Offline), និងប្រើប្រាស់ Web Cryptography API ផ្ទាល់ពីប្រព័ន្ធប្រតិបត្តិការសម្រាប់បង្កើតលេខកូដសម្ងាត់ និង UUID។',
        },
      },
      {
        id: 'audit-tips',
        title: {
          en: 'How to Verify Client-Side Privacy in Your Browser',
          km: 'របៀបត្រួតពិនិត្យសុវត្ថិភាពដោយខ្លួនឯងក្នុង Browser DevTools',
        },
        content: {
          en: 'You should never blindly trust any utility website. You can verify KhmerTools\' claims in less than thirty seconds:\n\n1. Open your browser Developer Tools (F12 or Ctrl+Shift+I).\n2. Navigate to the "Network" tab.\n3. Type or paste sensitive data into the JSON Formatter or Base64 tool and click format.\n4. Observe that zero XHR/Fetch network requests are emitted. All execution is instantaneous, local, and private.',
          km: 'អ្នកអាចផ្ទៀងផ្ទាត់សុវត្ថិភាពដោយខ្លួនឯងបានយ៉ាងងាយស្រួល៖ ចុច F12 បើក DevTools -> ចូលផ្ទាំង Network -> សាកល្បងបញ្ចូលទិន្នន័យក្នុងឧបករណ៍ណាមួយ។ អ្នកនឹងឃើញថាគ្មាន Network Request ណាមួយត្រូវបានបញ្ជូនចេញទៅក្រៅឡើយ។',
        },
      },
    ],
  },
  {
    slug: 'json-data-formatting-and-validation-guide',
    title: {
      en: "Developer's Guide to JSON Formatting, Validation, and Standards",
      km: 'មគ្គុទ្ទេសក៍អ្នកអភិវឌ្ឍន៍អំពីការកំណត់ទម្រង់ និងផ្ទៀងផ្ទាត់កូដ JSON តាមស្ដង់ដារ',
    },
    summary: {
      en: 'A deep exploration of RFC 8259 specifications, syntax rules, formatting techniques, common parsing traps (trailing commas, single quotes), and robust debugging patterns.',
      km: 'ស្វែងយល់អំពីស្ដង់ដារ RFC 8259 ក្បួនវេយ្យាករណ៍ JSON កំហុសញឹកញាប់ដែលតែងតែកើតឡើង និងវិធីសាស្ត្រដោះស្រាយកូដឱ្យមានរបៀបរៀបរយ។',
    },
    readTime: '6 min read',
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-21',
    author: 'KhmerTools Engineering',
    category: 'developer',
    tags: ['JSON', 'Web Development', 'RFC 8259', 'APIs', 'Data Formats'],
    relatedToolSlugs: ['json-formatter', 'base64-encoder-decoder', 'url-encoder-decoder'],
    sections: [
      {
        id: 'json-standards',
        title: {
          en: 'Understanding RFC 8259: The Universal Interchange Standard',
          km: 'ស្វែងយល់អំពីស្ដង់ដារអន្តរជាតិ RFC 8259',
        },
        content: {
          en: 'JavaScript Object Notation (JSON) was originally standardized under ECMA-404 and formally codified by the IETF as RFC 8259. Despite its name and roots in JavaScript literal syntax, JSON is completely language-independent. It serves as the ubiquitous backbone for modern RESTful APIs, GraphQL payloads, microservices communication, configuration files (package.json, tsconfig.json), and NoSQL document datastores (MongoDB, CouchDB).',
          km: 'JSON គឺជាទម្រង់ទិន្នន័យស្តង់ដារអន្តរជាតិ (RFC 8259) ដែលត្រូវប្រើប្រាស់យ៉ាងទូលំទូលាយបំផុតក្នុងការផ្លាស់ប្តូរទិន្នន័យរវាងប្រព័ន្ធផ្សេងៗ ដូចជា REST API, Microservices និងឯកសារកំណត់រចនាសម្ព័ន្ធកម្មវិធី។',
        },
      },
      {
        id: 'common-errors',
        title: {
          en: 'The Top 4 Syntax Traps that Break JSON Parsers',
          km: 'កំហុសធំៗ ៤ យ៉ាងដែលតែងតែធ្វើឱ្យ JSON គាំង Error',
        },
        content: {
          en: 'Unlike JavaScript code where syntactical leniency is permitted, strict JSON parsers will fail immediately if these four rules are violated:\n\n1. Trailing Commas: Adding a comma after the final key-value pair or array element (e.g. `{"id": 1,}`) is illegal in RFC 8259.\n2. Single Quotes: Keys and string values MUST be wrapped in double quotes (`"key": "value"`). Single quotes (`\'key\': \'value\'`) are invalid.\n3. Unquoted Keys: Every property identifier in an object must be surrounded by double quotes.\n4. Circular References: Objects referencing themselves cannot be serialized to JSON without custom replacer functions.',
          km: 'កំហុសទូទៅរួមមាន៖ ១. មានសញ្ញាក្បៀសនៅចុងក្រោយបង្អស់ (Trailing comma), ២. ប្រើសញ្ញាសម្រង់ទោល (Single quote) ជំនួសឱ្យសញ្ញាសម្រង់ភ្លោះ (Double quote), ៣. ភ្លេចដាក់សញ្ញាសម្រង់លើឈ្មោះ Key, និង ៤. Circular references ក្នុង Object។',
        },
      },
      {
        id: 'optimization',
        title: {
          en: 'Pretty-Printing vs. Minification in Production',
          km: 'ភាពខុសគ្នារវាងការរៀបចំកូដឱ្យស្អាត (Format) និងការបង្រួម (Minify)',
        },
        content: {
          en: 'During development, pretty-printed JSON with 2-space or 4-space indentation provides immense cognitive relief, allowing software engineers to quickly inspect nested hierarchies, detect missing arrays, and audit responses. In production network transport, however, minifying JSON strips all whitespace, newlines, and unnecessary indentation, reducing payload bytes by up to 30-40% across high-throughput endpoints.',
          km: 'ពេលកំពុងសរសេរកូដ ការរៀបចំចន្លោះបន្ទាត់ (Indent 2 ឬ 4 spaces) ជួយឱ្យងាយស្រួលអាន និងត្រួតពិនិត្យ។ ប៉ុន្តែពេលបញ្ជូនទិន្នន័យលើប្រព័ន្ធជាក់ស្តែង ការបង្រួមកូដ (Minify) ដោយលុបចន្លោះទំនេរ ជួយកាត់បន្ថយទំហំទិន្នន័យបានពី ៣០% ទៅ ៤០% ធ្វើឱ្យកម្មវិធីដំណើរការកាន់តែលឿន។',
        },
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
