/**
 * Tawjih Simple — Complete Application Content & Data Dictionary
 * Content, metadata, streams, establishments, thresholds, guides, and procedures
 * for Moroccan post-baccalaureate orientation (توجيه بسيط - دليل التوجيه ما بعد البكالوريا).
 */

export const APP_METADATA = {
  name: "TAWJIH.ma",
  arabicName: "توجيه بسيط",
  tagline: "Plateforme d'Orientation Post-Bac & Simulateur de Seuils",
  taglineAr: "منصة التوجيه بعد البكالوريا ومحاكي عتبات القبول بالمغرب",
  description:
    "Guide complet pour les bacheliers marocains : simulateur de seuils d'admissibilité (ENSA, ENCG, FMP, EST, CPGE…), annuaire des grandes écoles, calendrier des préinscriptions et dossiers requis.",
  targetAudience: "Bacheliers marocains (Sciences Maths, PC, SVT, Économie, STE/STM, Lettres)",
  formula: {
    name: "Formule ministérielle standard de calcul de la note d'accès",
    expression: "Score = (0.75 × Note National) + (0.25 × Note Régional)",
    arabic: "المعدل المحتسب = (0.75 × الامتحان الوطني) + (0.25 × الامتحان الجهوي)",
    weights: { national: 0.75, regional: 0.25 },
  },
  officialPortals: [
    {
      name: "Tawjihi.ma",
      url: "https://www.tawjihi.ma",
      purpose: "Plateforme d'accès FST, ENSA, ENSAM, EST",
    },
    {
      name: "CursusSup.gov.ma",
      url: "https://www.cursussup.gov.ma",
      purpose: "Concours Médecine, Pharmacie, Dentaire (FMP/FMD)",
    },
    {
      name: "CPGE.ac.ma",
      url: "https://www.cpge.ac.ma",
      purpose: "Classes Préparatoires aux Grandes Écoles",
    },
    {
      name: "TAFEM.ma",
      url: "https://tafem.ma",
      purpose: "Test d'Aptitude à la Formation en Management (ENCG)",
    },
    {
      name: "Ministère de l'Enseignement Supérieur",
      url: "https://www.enssup.gov.ma",
      purpose: "Portail officiel ministériel",
    },
  ],
};

export const BAC_FILIERES = [
  {
    id: "sm",
    nameFr: "Sciences Mathématiques (A & B)",
    nameAr: "العلوم الرياضية (أ و ب)",
    short: "SM",
    badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    description:
      "Accès universel à l'ensemble des concours et formations sélectives (CPGE, ENSA, ENSAM, FMP, ENCG, ENA...).",
  },
  {
    id: "pc",
    nameFr: "Sciences Physiques & Chimie",
    nameAr: "العلوم الفيزيائية",
    short: "PC",
    badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    description:
      "Large ouverture vers les filières médicales, ingénierie, sciences appliquées et technologies.",
  },
  {
    id: "svt",
    nameFr: "Sciences de la Vie et de la Terre",
    nameAr: "علوم الحياة والأرض",
    short: "SVT",
    badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    description: "Accès prioritaire en médecine, paramédical, agronomie, sciences et gestion.",
  },
  {
    id: "ste_stm",
    nameFr: "Sciences et Technologies (STE / STM)",
    nameAr: "العلوم والتكنولوجيات الكهربائية والميكانيكية",
    short: "STE/STM",
    badgeColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    description:
      "Spécialisation en ingénierie, CPGE TSI, FST génie électrique/mécanique, EST et BTS.",
  },
  {
    id: "eco",
    nameFr: "Sciences Économiques & Gestion (SGC)",
    nameAr: "العلوم الاقتصادية والتدبير",
    short: "ÉCO",
    badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    description: "Grandes écoles de commerce, management, droit, CPGE ECT, ISCAE et ENCG.",
  },
  {
    id: "lettres",
    nameFr: "Lettres & Sciences Humaines",
    nameAr: "الآداب والعلوم الإنسانية",
    short: "LSH",
    badgeColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    description: "Journalisme (ISIC), traduction, droit, langues, sciences humaines, ESEF et arts.",
  },
];

export const SCHOOLS_DATA = [
  {
    id: "ensa",
    name: "ENSA",
    fullName: {
      fr: "Écoles Nationales des Sciences Appliquées",
      ar: "المدارس الوطنية للعلوم التطبيقية",
    },
    category: "Engineering",
    duration: "5 ans (Bac+5)",
    diploma: "Diplôme d'Ingénieur d'État",
    allowedFilieres: ["sm", "pc", "svt", "ste_stm"],
    cities: [
      "Tanger", "Agadir", "Oujda", "Marrakech", "Safi", "Fès",
      "Khouribga", "Kénitra", "Tétouan", "El Jadida", "Al Hoceïma", "Berrechid", "Béni Mellal"
    ],
    description: "Réseau national d'écoles d'ingénieurs publiques formant des ingénieurs d'État dans le génie informatique, civil, industriel, télécoms, etc.",
    admissionType: "Présélection nationale (Plateforme Tawjihi) + Concours écrit commun",
    website: "https://www.tawjihi.ma",
    historicalSeuils: {
      sm: { y2025: 12.0, y2024: 12.0, y2023: 12.5 },
      pc: { y2025: 14.5, y2024: 14.25, y2023: 14.75 },
      svt: { y2025: 15.0, y2024: 14.8, y2023: 15.25 },
      ste_stm: { y2025: 12.5, y2024: 12.5, y2023: 13.0 },
    },
  },
  {
    id: "encg",
    name: "ENCG",
    fullName: {
      fr: "Écoles Nationales de Commerce et de Gestion",
      ar: "المدارس الوطنية للتجارة والتسيير",
    },
    category: "Business",
    duration: "5 ans (Bac+5)",
    diploma: "Diplôme des ENCG (Grade Master)",
    allowedFilieres: ["sm", "pc", "svt", "eco", "ste_stm"],
    cities: [
      "Settat", "Casablanca", "Tanger", "Marrakech", "Agadir", "Kénitra",
      "Oujda", "El Jadida", "Fès", "Dakhla", "Béni Mellal", "Meknès"
    ],
    description: "Grandes écoles de management publiques formant aux métiers de la finance, audit, marketing, commerce international et supply chain.",
    admissionType: "Présélection nationale + Test TAFEM (Test d'Aptitude à la Formation en Management)",
    website: "https://tafem.ma",
    historicalSeuils: {
      sm: { y2025: 11.5, y2024: 11.75, y2023: 12.0 },
      pc: { y2025: 13.5, y2024: 13.25, y2023: 13.8 },
      svt: { y2025: 14.0, y2024: 13.75, y2023: 14.2 },
      eco: { y2025: 12.0, y2024: 12.25, y2023: 12.5 },
      ste_stm: { y2025: 13.0, y2024: 13.0, y2023: 13.5 },
    },
  },
  {
    id: "fmp",
    name: "FMP / FMD",
    fullName: {
      fr: "Facultés de Médecine, Pharmacie et Médecine Dentaire",
      ar: "كليات الطب والصيدلة وطب الأسنان",
    },
    category: "Medical",
    duration: "6 ans (Docteur)",
    diploma: "Doctorat en Médecine / Pharmacie / Dentaire",
    allowedFilieres: ["sm", "pc", "svt"],
    cities: [
      "Rabat", "Casablanca", "Fès", "Marrakech", "Oujda", "Tanger",
      "Agadir", "Laâyoune", "Guelmim", "Errachidia", "Béni Mellal"
    ],
    description: "Formation médicale et pharmaceutique d'excellence avec concours commun unifié national.",
    admissionType: "Présélection unique (seuil unifié national) + Concours écrit commun (CursusSup)",
    website: "https://www.cursussup.gov.ma",
    historicalSeuils: {
      sm: { y2025: 12.0, y2024: 12.0, y2023: 12.0 },
      pc: { y2025: 12.0, y2024: 12.0, y2023: 12.0 },
      svt: { y2025: 12.0, y2024: 12.0, y2023: 12.0 },
    },
  },
  {
    id: "est",
    name: "EST",
    fullName: {
      fr: "Écoles Supérieures de Technologie",
      ar: "المدارس العليا للتكنولوجيا",
    },
    category: "Technical",
    duration: "2 ans (Bac+2)",
    diploma: "DUT (Diplôme Universitaire de Technologie)",
    allowedFilieres: ["sm", "pc", "svt", "ste_stm", "eco"],
    cities: [
      "Salé", "Kénitra", "Casablanca", "Berrechid", "Safi", "Agadir", "Fès",
      "Meknès", "Oujda", "Laâyoune", "Guelmim", "Dakhla", "Béni Mellal", "Khouribga", "Essaouira", "Khénifra"
    ],
    description: "Formations technologiques courtes et professionnalisantes avec poursuite d'études possible en licence pro ou écoles d'ingénieurs/commerce.",
    admissionType: "Sélection sur dossier basée sur le score (75% National + 25% Régional) via Tawjihi.ma",
    website: "https://www.tawjihi.ma",
    historicalSeuils: {
      sm: { y2025: 11.0, y2024: 11.2, y2023: 11.5 },
      pc: { y2025: 13.0, y2024: 12.8, y2023: 13.2 },
      svt: { y2025: 13.5, y2024: 13.2, y2023: 13.7 },
      ste_stm: { y2025: 11.5, y2024: 11.8, y2023: 12.0 },
      eco: { y2025: 12.5, y2024: 12.2, y2023: 12.8 },
    },
  },
  {
    id: "fst",
    name: "FST",
    fullName: {
      fr: "Facultés des Sciences et Techniques",
      ar: "كليات العلوم والتقنيات",
    },
    category: "Engineering",
    duration: "3 à 5 ans",
    diploma: "LST (Bac+3) / Master & Ingénieur d'État (Bac+5)",
    allowedFilieres: ["sm", "pc", "svt", "ste_stm"],
    cities: ["Mohammedia", "Settat", "Fès", "Marrakech", "Tanger", "Errachidia", "Al Hoceïma", "Béni Mellal"],
    description: "Établissements à accès régulé combinant cursus universitaire scientifique et filières d'ingénieurs appliquées.",
    admissionType: "Sélection sur dossier avec calcul de moyenne pondérée selon les matières du Bac via Tawjihi.ma",
    website: "https://www.tawjihi.ma",
    historicalSeuils: {
      sm: { y2025: 11.0, y2024: 11.0, y2023: 11.5 },
      pc: { y2025: 13.2, y2024: 13.0, y2023: 13.5 },
      svt: { y2025: 13.8, y2024: 13.5, y2023: 14.0 },
      ste_stm: { y2025: 12.0, y2024: 12.0, y2023: 12.5 },
    },
  },
  {
    id: "cpge",
    name: "CPGE",
    fullName: {
      fr: "Classes Préparatoires aux Grandes Écoles",
      ar: "الأقسام التحضيرية للمدارس العليا",
    },
    category: "University",
    duration: "2 ans (Bac+2)",
    diploma: "Attestation d'admissibilité / Accès CNC & concours français",
    allowedFilieres: ["sm", "pc", "ste_stm", "eco"],
    cities: ["Rabat", "Casablanca", "Fès", "Marrakech", "Tanger", "Agadir", "Meknès", "Oujda", "Kénitra", "Béni Mellal"],
    description: "Filières d'élite préparant en 2 ans au Concours National Commun (CNC) vers les écoles d'ingénieurs prestigieuses.",
    admissionType: "Sélection rigoureuse sur dossier scolaire de 1ère et 2ème année Bac (Formule CPGE ministérielle)",
    website: "https://www.cpge.ac.ma",
    historicalSeuils: {
      sm: { y2025: 13.5, y2024: 13.5, y2023: 14.0 },
      pc: { y2025: 16.0, y2024: 15.8, y2023: 16.2 },
      ste_stm: { y2025: 13.8, y2024: 13.5, y2023: 14.0 },
      eco: { y2025: 14.5, y2024: 14.2, y2023: 14.8 },
    },
  },
];

export const PREINSCRIPTION_STEPS = [
  {
    step: 1,
    titleFr: "Création de compte & Massar",
    titleAr: "إنشاء الحساب وربط مسار",
    date: "Mai – Juin",
    desc: "Activeز votre compte sur Massar / Taalim.ma et récupérez votre Code National de l'Étudiant (CNE).",
  },
  {
    step: 2,
    titleFr: "Candidature sur les plateformes",
    titleAr: "الترشيح عبر المنصات الوطنية",
    date: "Juin – Début Juillet",
    desc: "Inscription sur Tawjihi.ma (ENSA, EST, FST), CursusSup (Médecine), et TAFEM (ENCG).",
  },
  {
    step: 3,
    titleFr: "Affichage des résultats de présélection",
    titleAr: "إعلان نتائج الانتقاء الأولي",
    date: "Mi-Juillet",
    desc: "Consultation des listes des convoqués aux épreuves écrites selon les seuils nationaux.",
  },
  {
    step: 4,
    titleFr: "Passage des concours écrits",
    titleAr: "اجتياز المباريات الكتابية",
    date: "Fin Juillet",
    desc: "Épreuves écrites sous forme de QCM pour Médecine, ENSA, ENCG, etc.",
  },
  {
    step: 5,
    titleFr: "Affectation & Inscription",
    titleAr: "تثبيت المقترح والتسجيل النهائي",
    date: "Fin Juillet – Août",
    desc: "Validation définitive et dépôt du dossier papier à l'établissement d'accueil.",
  },
];

export const DOSSIER_ITEMS = [
  { titleFr: "Attestation originale du Baccalauréat", titleAr: "شهادة البكالوريا الأصلية", desc: "Indispensable pour valider l'inscription." },
  { titleFr: "Relevé de notes officiel du Bac", titleAr: "بيان النقط الرسمي", desc: "Certifié par l'académie." },
  { titleFr: "Copies CIN légalisées", titleAr: "نسخ بطاقة التعريف الوطنية مصادق عليها", desc: "2 à 4 copies." },
  { titleFr: "Photos d'identité", titleAr: "صور شمسية", desc: "Format passeport récent." },
  { titleFr: "Extrait d'acte de naissance", titleAr: "عقد الازدياد", desc: "En français et arabe." },
];
