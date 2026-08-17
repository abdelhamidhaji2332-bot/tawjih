import { SCHOOLS_DATA, BAC_FILIERES, APP_METADATA } from './tawjihSimpleData';

export interface Institution {
  id: string;
  acronym: string;
  nameFr: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  duration: string;
  accessType: string;
  accessTypeAr: string;
  eligibleBranches: string[];
  descriptionFr: string;
  descriptionAr: string;
  website: string;
  signupPortal: string;
  careerProspects: string[];
  cities: string[];
  historicalSeuils?: Record<string, { y2025: number; y2024: number; y2023: number }>;
}

export const BRANCHES = [
  { id: 'ALL', labelFr: 'Tous les Tronc / الكل', labelAr: 'جميع المسالك', icon: '🌟' },
  { id: 'sm', labelFr: 'Sciences Mathématiques (A & B)', labelAr: 'العلوم الرياضية (أ و ب)', icon: '📐' },
  { id: 'pc', labelFr: 'Sciences Physiques & Chimie', labelAr: 'العلوم الفيزيائية', icon: '⚡' },
  { id: 'svt', labelFr: 'Sciences de la Vie et de la Terre', labelAr: 'علوم الحياة والأرض', icon: '🧬' },
  { id: 'ste_stm', labelFr: 'Sciences et Technologies (STE/STM)', labelAr: 'العلوم والتكنولوجيات', icon: '⚙️' },
  { id: 'eco', labelFr: 'Sciences Économiques & Gestion', labelAr: 'العلوم الاقتصادية والتدبير', icon: '📊' },
  { id: 'lettres', labelFr: 'Lettres & Sciences Humaines', labelAr: 'آداب وعلوم إنسانية', icon: '📚' },
];

// Map SCHOOLS_DATA from tawjihSimpleData into Institution objects
export const INSTITUTIONS_DATA: Institution[] = SCHOOLS_DATA.map((s) => ({
  id: s.id,
  acronym: s.name,
  nameFr: s.fullName.fr,
  nameAr: s.fullName.ar,
  category: s.category === 'Engineering' ? 'Ingénierie & Technologie' : 
            s.category === 'Business' ? 'Commerce & Gestion' :
            s.category === 'Medical' ? 'Santé & Médecine' :
            s.category === 'Technical' ? 'Diplômes Techniques' :
            s.category === 'University' ? 'Classes Préparatoires & Universités' : 'Architecture & Spécialisé',
  categoryAr: s.category === 'Engineering' ? 'هندسة وتكنولوجيا' :
              s.category === 'Business' ? 'تجارة وتسيير' :
              s.category === 'Medical' ? 'صحة وطب' :
              s.category === 'Technical' ? 'دبلومات تقنية' : 'أقسام تحضيرية وعمومية',
  duration: s.duration,
  accessType: s.admissionType,
  accessTypeAr: s.admissionType,
  eligibleBranches: s.allowedFilieres,
  descriptionFr: s.description,
  descriptionAr: `${s.fullName.ar} - ${s.description}`,
  website: s.website,
  signupPortal: s.website,
  careerProspects: [
    `Villes: ${s.cities.slice(0, 4).join(', ')}${s.cities.length > 4 ? '...' : ''}`,
    `Diplôme: ${s.diploma}`,
    `Accès officiel via les plateformes nationales`,
    `Poursuite d'études et insertion professionnelle`
  ],
  cities: s.cities,
  historicalSeuils: s.historicalSeuils
}));
