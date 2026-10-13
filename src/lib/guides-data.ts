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
  {
    slug: 'loan-amortization-and-interest-calculation-guide',
    title: {
      en: 'The Complete Guide to Loan Amortization & Interest Calculations',
      km: 'មគ្គុទ្ទេសក៍ពេញលេញអំពីការគណនាកម្ចី និងការរំលស់ប្រាក់ដើម-ការប្រាក់',
    },
    summary: {
      en: 'Master the mathematical foundations behind reducing balance amortization, flat interest rates, Cambodian banking regulations, and effective APR comparison.',
      km: 'ស្វែងយល់លម្អិតអំពីរូបមន្តគណនាកម្ចី ការប្រាក់ថយចុះ ការប្រាក់ថេរ និងច្បាប់កំណត់របស់ធនាគារជាតិនៃកម្ពុជា។',
    },
    readTime: '8 min read',
    publishedAt: '2026-09-15',
    updatedAt: '2026-10-10',
    author: 'KhmerTools Financial Engineering',
    category: 'general',
    tags: ['Loan Calculator', 'Amortization', 'Banking', 'Interest Rates', 'Finance', 'Cambodia'],
    relatedToolSlugs: ['loan-calculator', 'percentage-calculator'],
    sections: [
      {
        id: 'amortization-basics',
        title: {
          en: 'Understanding Loan Amortization: Principal vs. Interest Breakdown',
          km: 'ស្វែងយល់អំពីការរំលស់ប្រាក់កម្ចី៖ ការបែងចែកប្រាក់ដើម និងការប្រាក់',
        },
        content: {
          en: 'Amortization represents the scheduled repayment of a loan through regular installments over time. In a standard amortized loan, every periodic installment is split into two components: interest charges and principal reduction.\n\nDuring the early phase of a loan term, the remaining balance is at its highest, meaning the overwhelming portion of your monthly payment goes toward satisfying accrued interest. As the principal is progressively paid down, interest charges diminish, and an increasingly larger share of each subsequent payment is applied directly against the outstanding debt balance.',
          km: 'ការរំលស់ប្រាក់កម្ចី (Amortization) គឺជាដំណើរការនៃការសងបំណុលតាមដំណាក់កាលទៀងទាត់។ ការទូទាត់នីមួយៗរួមបញ្ចូលទាំងការប្រាក់ និងប្រាក់ដើម។',
        },
      },
      {
        id: 'flat-vs-reducing',
        title: {
          en: 'Reducing Balance vs. Flat Rate: The Crucial Difference in Cambodian Borrowing',
          km: 'ភាពខុសគ្នារវាងការប្រាក់ថយចុះ (Reducing) និងការប្រាក់ថេរ (Flat Rate)',
        },
        content: {
          en: 'Borrowers in Southeast Asia and Cambodia frequently encounter two fundamentally different methods of calculating interest:\n\n1. Reducing Balance Method (Declining Balance): Interest is calculated solely on the remaining unpaid principal at each compounding cycle. As you repay principal, your monthly interest cost drops correspondingly. This is the mandatory standard enforced by the National Bank of Cambodia (NBC) for commercial banks and microfinance institutions (MFIs).\n\n2. Flat Rate Method: Interest is calculated against the original borrowed principal across the entire tenure, regardless of how much principal has already been repaid. A nominal 10% flat rate loan actually translates to an effective annual percentage rate (APR) of roughly 18% to 19% on a reducing basis—nearly double the advertised number.',
          km: 'ការប្រាក់ថយចុះ (Reducing Balance) គិតការប្រាក់តែលើប្រាក់ដើមដែលនៅសល់ប៉ុណ្ណោះ ដែលជាស្តង់ដារតម្រូវដោយធនាគារជាតិនៃកម្ពុជា។ ចំណែកការប្រាក់ថេរ (Flat Rate) គិតការប្រាក់លើប្រាក់ដើមដំបូងរហូតដល់ចប់កិច្ចសន្យា។',
        },
      },
      {
        id: 'monthly-payment-formula',
        title: {
          en: 'The Standard Amortization Formula Explained Step-by-Step',
          km: 'រូបមន្តគណនាការទូទាត់ប្រចាំខែជាស្តង់ដារ',
        },
        content: {
          en: 'The universal mathematical formula for calculating a fixed monthly payment (PMT) on a fully amortized loan is:\n\nPMT = P * [r(1 + r)^n] / [(1 + r)^n - 1]\n\nWhere:\n• P = Initial Principal loan amount (e.g., $10,000 USD or 40,000,000 KHR)\n• r = Periodic interest rate (annual interest rate divided by 12 months)\n• n = Total number of monthly payment periods (e.g., a 5-year loan = 60 periods)\n\nKhmerTools\' Loan Calculator implements this exact formula with double-precision IEEE 754 arithmetic, generating accurate full monthly amortization schedules with principal/interest breakdowns down to the cent.',
          km: 'រូបមន្តគណនា PMT = P * [r(1 + r)^n] / [(1 + r)^n - 1] ត្រូវបានប្រើប្រាស់ជាសកលក្នុងវិស័យធនាគារ ដើម្បីគណនាការទូទាត់ប្រចាំខែឱ្យស្មើគ្នា។',
        },
      },
      {
        id: 'prepayment-and-early-payoff',
        title: {
          en: 'How Extra Principal Payments Reduce Total Lifetime Interest',
          km: 'ផលប្រយោជន៍នៃការសងប្រាក់ដើមបន្ថែមមុនកាលកំណត់',
        },
        content: {
          en: 'Because interest on reducing balance loans accrues daily or monthly against the active balance, paying even a small extra lump sum directly toward principal delivers massive cumulative savings. By immediately shrinking the balance upon which future interest is calculated, you both shorten the effective loan duration and avoid thousands of dollars in lifetime financing fees.',
          km: 'ការសងប្រាក់ដើមបន្ថែមជួយកាត់បន្ថយទំហំបំណុលដែលត្រូវគិតការប្រាក់ ធ្វើឱ្យអ្នករួចបំណុលលឿនជាងមុន និងសន្សំប្រាក់បានយ៉ាងច្រើន។',
        },
      },
    ],
  },
  {
    slug: 'digital-color-spaces-hex-rgb-hsl-guide',
    title: {
      en: "A Developer's Comprehensive Guide to Digital Color Models: HEX, RGB, HSL & OKLCH",
      km: 'មគ្គុទ្ទេសក៍អ្នកអភិវឌ្ឍន៍អំពីប្រព័ន្ធកូដពណ៌ឌីជីថល៖ HEX, RGB, HSL និង OKLCH',
    },
    summary: {
      en: 'Learn how modern screens render light through sRGB gamuts, understand 24-bit hexadecimal math, master HSL cylinder projections, and design accessible WCAG color palettes.',
      km: 'ស្វែងយល់អំពីទ្រឹស្ដីពណ៌ឌីជីថល កូដ HEX 24-bit ប្រព័ន្ធ HSL និងស្តង់ដារភាពងាយស្រួលមើល WCAG សម្រាប់គេហទំព័រ។',
    },
    readTime: '7 min read',
    publishedAt: '2026-09-18',
    updatedAt: '2026-10-11',
    author: 'KhmerTools Web Architecture',
    category: 'developer',
    tags: ['Color Theory', 'HEX', 'RGB', 'HSL', 'OKLCH', 'CSS', 'Web Development'],
    relatedToolSlugs: ['color-converter', 'json-formatter'],
    sections: [
      {
        id: 'additive-color-theory',
        title: {
          en: 'Additive Color Theory: How RGB Pixels Form Digital Color',
          km: 'ទ្រឹស្ដីពន្លឺបូក (Additive Color)៖ របៀបដែលអេក្រង់បង្ហាញពណ៌',
        },
        content: {
          en: 'Unlike physical paints which use subtractive color mixing (CMYK), computer displays emit photon wavelengths using the additive RGB model. Each physical pixel on an OLED or LCD monitor consists of three tiny subpixels: Red, Green, and Blue.\n\nWhen all three subpixels emit at zero intensity (0, 0, 0), the screen appears pitch black. When all three emit at peak intensity (255, 255, 255 in 8-bit depth), our eyes perceive pure white light. By varying the electrical excitation across 256 gradations per channel (2^8 = 256), a monitor produces 256 * 256 * 256 = 16,777,216 distinct color combinations—known as 24-bit TrueColor.',
          km: 'អេក្រង់កុំព្យូទ័រ និងទូរស័ព្ទប្រើប្រាស់ប្រព័ន្ធពន្លឺបូក RGB (ក្រហម បៃតង ខៀវ) ដោយកម្រិតនីមួយៗមានពី ០ ដល់ ២៥៥ បង្កើតបានជា ១៦.៧ លានពណ៌ផ្សេងគ្នា។',
        },
      },
      {
        id: 'hex-arithmetic',
        title: {
          en: 'Decoding Hexadecimal Color Notation: From 8-Bit Channels to Alpha Transparency',
          km: 'របៀបគណនាកូដពណ៌ Hexadecimal (HEX)',
        },
        content: {
          en: 'Hexadecimal color strings (#RRGGBB) are simply base-16 representations of three 8-bit integers:\n\n• Digits range from 0 to 9 followed by A (10) through F (15).\n• One byte (0–255 in decimal) corresponds to exactly two hex characters: 00 = 0, 7F = 127, FF = 255.\n• For example, #4F46E5 represents Red: 0x4F (79), Green: 0x46 (70), Blue: 0xE5 (229)—the signature indigo hue of KhmerTools.\n• Modern CSS also supports an optional 8-character hex format (#RRGGBBAA), where the final two digits encode opacity (alpha channel from 00 for 0% to FF for 100%).',
          km: 'កូដពណ៌ HEX (#RRGGBB) គឺជាទម្រង់គោល ១៦ ដែលតំណាងឱ្យកម្រិតពណ៌ក្រហម បៃតង និងខៀវ។ កូដ ៨ ខ្ទង់ (#RRGGBBAA) បន្ថែមនូវកម្រិតថ្លា (Opacity)។',
        },
      },
      {
        id: 'hsl-intuitive-space',
        title: {
          en: 'Why HSL & HSLuv Are Superior for Human-Centric UI Design',
          km: 'អត្ថប្រយោជន៍នៃប្រព័ន្ធពណ៌ HSL ក្នុងការរចនា UI',
        },
        content: {
          en: 'While RGB and HEX match hardware reality, they are unintuitive for designers. If you need a darker shade of #3B82F6, which channel do you modify? HSL solves this by projecting the RGB cube into a cylindrical coordinate space:\n\n1. Hue (0° to 360°): The pure pigment position on the color wheel (0° = Red, 120° = Green, 240° = Blue).\n2. Saturation (0% to 100%): The vibrancy of the color, ranging from grayscale to vivid saturation.\n3. Lightness (0% to 100%): The illumination, from pure black (0%) to pure white (100%).\n\nAdjusting brightness in HSL merely requires tweaking the Lightness percentage, making theme generation and hover states effortless in modern CSS.',
          km: 'HSL (Hue, Saturation, Lightness) ជួយឱ្យអ្នករចនាគេហទំព័រងាយស្រួលកំណត់ពណ៌ ស្រមោល និងពន្លឺបានរហ័សជាងការប្រើ RGB ឬ HEX។',
        },
      },
      {
        id: 'wcag-accessibility',
        title: {
          en: 'Contrast Ratios & WCAG 2.2 AA/AAA Accessibility Guidelines',
          km: 'ស្តង់ដារកម្រិតកម្រិតពណ៌ច្បាស់ WCAG សម្រាប់អ្នកប្រើប្រាស់ទូទៅ',
        },
        content: {
          en: 'Digital accessibility mandates that text must have sufficient contrast against background surfaces to remain readable for visually impaired users. Under the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG 2.2):\n\n• Level AA requires a contrast ratio of at least 4.5:1 for normal body text and 3:1 for large text (18pt+ or 14pt bold).\n• Level AAA requires an enhanced contrast ratio of at least 7:1 for normal text.\n\nAlways test color pairings with our Color Converter to verify compliance before deploying production design tokens.',
          km: 'ស្តង់ដារ WCAG តម្រូវឱ្យអក្សរ និងផ្ទៃខាងក្រោយមានកម្រិត Contrast យ៉ាងតិច 4.5:1 ដើម្បីធានាថាអ្នកប្រើប្រាស់គ្រប់រូបអាចអានបានយ៉ាងច្បាស់។',
        },
      },
    ],
  },
  {
    slug: 'qr-code-technology-and-emv-standards-guide',
    title: {
      en: 'Deep Dive into QR Code Technology, Reed-Solomon Error Correction & KHQR Standards',
      km: 'ស្វែងយល់ស៊ីជម្រៅអំពីបច្ចេកវិទ្យា QR Code ក្បួនកែតម្រូវកំហុស Reed-Solomon និងស្ដង់ដារ KHQR',
    },
    summary: {
      en: 'Understand the mathematical matrix geometry of 2D barcodes, Reed-Solomon burst error correction algorithms, and how EMVCo and KHQR power national payment networks.',
      km: 'ស្វែងយល់អំពីរចនាសម្ព័ន្ធ QR Code ក្បួនកែសម្រួលទិន្នន័យពេលខូចខាត (Error Correction) និងស្ដង់ដារទូទាត់ប្រាក់ជាតិ KHQR របស់ធនាគារជាតិនៃកម្ពុជា។',
    },
    readTime: '8 min read',
    publishedAt: '2026-09-22',
    updatedAt: '2026-10-12',
    author: 'KhmerTools Technical Architecture',
    category: 'developer',
    tags: ['QR Code', 'Reed-Solomon', 'KHQR', 'EMVCo', 'Digital Payments', 'Cambodia', 'Data Encoding'],
    relatedToolSlugs: ['qr-code-generator', 'url-encoder-decoder', 'base64-encoder-decoder'],
    sections: [
      {
        id: 'matrix-architecture',
        title: {
          en: 'Anatomy of a QR Code: Finder Patterns, Timing Patterns & Alignment Grids',
          km: 'កាយវិភាគនៃ QR Code៖ ចំណុចសម្គាល់ទិសដៅ និងក្រឡាទិន្នន័យ',
        },
        content: {
          en: 'Invented in 1994 by Masahiro Hara at Denso Wave, the Quick Response (QR) code is a 2-dimensional optical matrix designed for high-speed scanning from any angle. Every QR symbol comprises specialized structural elements:\n\n1. Position Detection Patterns (Finder Patterns): The three distinctive concentric square targets in the corners allow scanners to establish 360° orientation and tilt angle.\n2. Timing Patterns: Alternating black and white modules connecting the finder squares that identify coordinate grid scales.\n3. Alignment Patterns: Smaller internal squares placed across larger versions to compensate for curved surfaces or perspective distortion.\n4. Format and Version Information: Encodes the active error correction level and mask pattern applied to prevent optical dead zones.',
          km: 'QR Code ត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ ១៩៩៤ ដោយក្រុមហ៊ុន Denso Wave។ វាមានចំណុចសម្គាល់ធំៗ ៣ នៅជ្រុងដើម្បីកំណត់ទិសដៅស្កេនបាន ៣៦០ ដឺក្រេយ៉ាងរហ័ស។',
        },
      },
      {
        id: 'reed-solomon-math',
        title: {
          en: 'Fault-Tolerant Error Correction: The Reed-Solomon Polynomial Algorithm',
          km: 'ក្បួនដោះស្រាយ Reed-Solomon៖ សមត្ថភាពស្កេនបានទោះបី QR Code ដាច់រហែក',
        },
        content: {
          en: 'One of the defining triumphs of QR technology is its ability to be scanned even when up to 30% of the symbol is obscured, dirty, or torn. This resilience is powered by Reed-Solomon cyclic error correction coding operating over Galois Fields (GF(2^8)):\n\n• Level L (Low): Restores up to 7% of lost data.\n• Level M (Medium - Default): Restores up to 15% of damaged bytes; standard for URLs.\n• Level Q (Quartile): Restores up to 25% of damaged bytes.\n• Level H (High): Restores up to 30% of lost payload; mandatory when embedding corporate logos into the center of the QR matrix.\n\nKhmerTools\' QR Code Generator allows users to configure error correction levels dynamically depending on whether the graphic will be displayed on pristine screens or printed on outdoor merchandise.',
          km: 'បច្ចេកវិទ្យា Reed-Solomon អនុញ្ញាតឱ្យ QR Code អាចស្កេនបាន ទោះបីខូចខាតរហូតដល់ ៣០% (កម្រិត Level H)។ នេះជាមូលហេតុដែលយើងអាចដាក់ Logo នៅចំកណ្តាលបានដោយមិនប៉ះពាល់ដល់ការស្កេន។',
        },
      },
      {
        id: 'encoding-modes',
        title: {
          en: 'Data Optimization: Numeric, Alphanumeric, Byte, and Kanji Modes',
          km: 'របៀបបម្លែងទិន្នន័យ (Encoding Modes) ដើម្បីសន្សំទំហំក្រឡា',
        },
        content: {
          en: 'To minimize symbol density and maximize scan distance, QR encoders inspect input payloads and choose the most compact bit packing mode:\n\n• Numeric Mode: Encodes digits (0–9) efficiently by packing 3 digits into 10 bits.\n• Alphanumeric Mode: Packs 45 characters (uppercase letters, numbers, symbols) by encoding 2 characters into 11 bits.\n• Byte Mode (8-bit): Handles arbitrary binary data, UTF-8 strings, and URLs with 8 bits per character.\n• Kanji Mode: Compresses Shift JIS double-byte characters into 13 bits each.',
          km: 'ក្បួន Encoding ជ្រើសរើសទម្រង់ដែលសន្សំសំចៃបំផុត (Numeric, Alphanumeric, Byte) ដើម្បីឱ្យក្រឡា QR Code មានទំហំធំល្មម ងាយស្រួលស្កេនពីចម្ងាយ។',
        },
      },
      {
        id: 'emvco-khqr-integration',
        title: {
          en: 'Standardized Financial Payloads: The Architecture Behind EMVCo and KHQR',
          km: 'ស្ដង់ដារទូទាត់ប្រាក់ EMVCo និងប្រព័ន្ធ KHQR របស់កម្ពុជា',
        },
        content: {
          en: 'In Cambodia, the National Bank of Cambodia spearheaded the KHQR standard under the Bakong interbank settlement network. KHQR strictly adheres to international EMVCo QR Code Specifications for Payment Systems:\n\n• EMV payloads use Tag-Length-Value (TLV) syntax (e.g., Tag 00 "Format Indicator", Tag 54 "Transaction Amount", Tag 53 "Currency Code 116 for KHR / 840 for USD").\n• Every financial QR string ends with Tag 63 containing a 16-bit Cyclic Redundancy Check (CRC-16/CCITT-FALSE) checksum. If even a single character in the account number or amount is corrupted during scan, the banking app rejects the payment before funds can be transferred.\n\nUnderstanding these underlying data structures ensures fintech developers build interoperable, secure payment experiences across Southeast Asia.',
          km: 'ប្រព័ន្ធ KHQR របស់កម្ពុជា ក្រោមប្រព័ន្ធបាគង គោរពតាមស្តង់ដារអន្តរជាតិ EMVCo ដោយប្រើប្រព័ន្ធ Tag-Length-Value (TLV) និងមានកូដផ្ទៀងផ្ទាត់ CRC-16 ការពារការច្រឡំគណនី ឬចំនួនទឹកប្រាក់។',
        },
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
