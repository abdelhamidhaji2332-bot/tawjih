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
  dossierRequis?: string[];
  calendrier?: string;
}

export const BRANCHES = [
  { id: 'ALL', labelFr: 'Tous les Tronc / الكل', labelAr: 'جميع المسالك', icon: '🌟' },
  { id: 'sm', labelFr: 'Sciences Mathématiques (A & B)', labelAr: 'العلوم الرياضية (أ و ب)', icon: '📐' },
  { id: 'pc', labelFr: 'Sciences Physiques & Chimie', labelAr: 'علوم فيزيائية', icon: '⚡' },
  { id: 'svt', labelFr: 'Sciences de la Vie et de la Terre', labelAr: 'علوم الحياة والأرض', icon: '🧬' },
  { id: 'ste_stm', labelFr: 'Sciences et Technologies (STE/STM)', labelAr: 'علوم وتكنولوجيات', icon: '⚙️' },
  { id: 'eco', labelFr: 'Sciences Économiques & Gestion', labelAr: 'علوم اقتصادية وتدبير', icon: '📊' },
  { id: 'lettres', labelFr: 'Lettres & Sciences Humaines', labelAr: 'آداب وعلوم إنسانية', icon: '📚' },
];

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
    `Réseau: ${s.cities.join(', ')}`,
    `Diplôme délivré: ${s.diploma}`,
    `Modalité: ${s.admissionType}`,
    `Site officiel: ${s.website}`
  ],
  cities: s.cities,
  historicalSeuils: s.historicalSeuils,
  dossierRequis: [
    "Attestation originale du Baccalauréat",
    "Relevé de notes officiel du Bac (National & Régional)",
    "Copie légalisée de la CIN",
    "Photos d'identité récentes"
  ],
  calendrier: "Préinscription en ligne: Juin – Juillet | Concours: Fin Juillet"
}));
