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
  website?: string;
  careerProspects: string[];
}

export const BRANCHES = [
  { id: 'ALL', labelFr: 'Tous les Tronc / الكل', labelAr: 'جميع المسالك', icon: '🌟' },
  { id: 'SMA', labelFr: 'Sciences Mathématiques A', labelAr: 'علوم رياضية أ', icon: '📐' },
  { id: 'SMB', labelFr: 'Sciences Mathématiques B', labelAr: 'علوم رياضية ب', icon: '📈' },
  { id: 'SPC', labelFr: 'Sciences Physiques & Chimiques', labelAr: 'علوم فيزيائية', icon: '⚡' },
  { id: 'SVT', labelFr: 'Sciences de la Vie & Terre', labelAr: 'علوم الحياة والأرض', icon: '🧬' },
  { id: 'STE/STM', labelFr: 'Sciences & Technologies (STE/STM)', labelAr: 'علوم وتكنولوجيات', icon: '⚙️' },
  { id: 'SE', labelFr: 'Sciences Économiques', labelAr: 'علوم اقتصادية', icon: '📊' },
  { id: 'LSH', labelFr: 'Lettres & Sciences Humaines', labelAr: 'آداب وعلوم إنسانية', icon: '📚' },
];

export const INSTITUTIONS_DATA: Institution[] = [
  // 1. Open Access University Faculties
  {
    id: 'fs',
    acronym: 'FS',
    nameFr: 'Facultés des Sciences',
    nameAr: 'كلية العلوم',
    category: 'Accès Ouvert',
    categoryAr: 'ولوق مفتوح',
    duration: '3 Ans (Licence)',
    accessType: 'Baccalauréat requis (Sans concours)',
    accessTypeAr: 'شهادة البكالوريا (بدون مباراة)',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE', 'STM', 'STE/STM'],
    descriptionFr: 'Formations universitaires en mathématiques, physique, chimie, biologie, géologie et informatique.',
    descriptionAr: 'تكوينات جامعية في الرياضيات، الفيزياء، الكيمياء، علم الحياة، الجيولوجيا والإعلاميات.',
    careerProspects: ['Recherche scientifique', 'Enseignement', 'Analyste de données', 'Master universitaire']
  },
  {
    id: 'flsh',
    acronym: 'FLSH',
    nameFr: 'Facultés des Lettres et Sciences Humaines',
    nameAr: 'كلية الآداب والعلوم الإنسانية',
    category: 'Accès Ouvert',
    categoryAr: 'ولوق مفتوح',
    duration: '3 Ans (Licence)',
    accessType: 'Baccalauréat requis (Sans concours)',
    accessTypeAr: 'شهادة البكالوريا (بدون مباراة)',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Études littéraires, langues (arabe, français, anglais, espagnol, allemand), géographie, histoire et philosophie.',
    descriptionAr: 'دراسات أدبية، لغات (عربية، فرنسية، إنجليزية، إسبانية، ألمانية)، جغرافيا، تاريخ وفلسفة.',
    careerProspects: ['Enseignement', 'Traduction', 'Journalisme', 'Communication', 'Gestion culturelle']
  },
  {
    id: 'fsjes',
    acronym: 'FSJES',
    nameFr: 'Facultés des Sciences Juridiques, Économiques et Sociales',
    nameAr: 'كلية العلوم القانونية والاقتصادية والاجتماعية',
    category: 'Accès Ouvert',
    categoryAr: 'ولوق مفتوح',
    duration: '3 Ans (Licence)',
    accessType: 'Baccalauréat requis (Sans concours)',
    accessTypeAr: 'شهادة البكالوريا (بدون مباراة)',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Formations en droit public, droit privé, économie, gestion d\'entreprises et administration publique.',
    descriptionAr: 'تكوينات في القانون العام، القانون الخاص، الاقتصاد، تسيير المقاولات والإدارة العمومية.',
    careerProspects: ['Expertise comptable', 'Juriste d\'entreprise', 'Banque & Finance', 'Fonction publique', 'Administration']
  },
  {
    id: 'fp',
    acronym: 'FP',
    nameFr: 'Facultés Polydisciplinaires',
    nameAr: 'الكليات المتعددة التخصصات',
    category: 'Accès Ouvert',
    categoryAr: 'ولوق مفتوح',
    duration: '3 Ans (Licence)',
    accessType: 'Baccalauréat requis (Sans concours)',
    accessTypeAr: 'شهادة البكالوريا (بدون مباراة)',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Formations pluridisciplinaires de proximité offrant des licences professionnelles et fondamentales.',
    descriptionAr: 'تكوينات متعددة التخصصات للقرب تقدم إجازات مهنية وأساسية.',
    careerProspects: ['Cadre polyvalent', 'Gestion locale', 'PME/PMI', 'Poursuite d\'études Master']
  },

  // 2. Engineering, Technology & Architecture
  {
    id: 'fst',
    acronym: 'FST',
    nameFr: 'Facultés des Sciences et Techniques',
    nameAr: 'كليات العلوم والتقنيات',
    category: 'Ingénierie & Technologie',
    categoryAr: 'هندسة وتكنولوجيا',
    duration: '3 ans (LST) ou 5 ans (Ingénieur)',
    accessType: 'Présélection (Note Bac) + Concours / Entretien',
    accessTypeAr: 'انتقاء قبلي (نقطة البكالوريا) + مباراة / مقابلة',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM'],
    descriptionFr: 'Enseignement supérieur scientifique et technique, formant des techniciens supérieurs et ingénieurs d\'État.',
    descriptionAr: 'تعليم عالي علمي وتقني، يكوّن تقنيين عاليين ومهندسي دولة.',
    careerProspects: ['Génie Civil', 'Génie Informatique', 'Génie Électrique', 'Génie Industriel', 'Industrie Pharmaceutique']
  },
  {
    id: 'ensa',
    acronym: 'ENSA',
    nameFr: 'Écoles Nationales des Sciences Appliquées',
    nameAr: 'المدارس الوطنية للعلوم التطبيقية',
    category: 'Ingénierie & Technologie',
    categoryAr: 'هندسة وتكنولوجيا',
    duration: '5 Ans (Cycle Ingénieur d\'État)',
    accessType: 'Concours National Commun / Concours commun ENSA',
    accessTypeAr: 'المباراة الوطنية المشتركة / مباراة ENSA المشتركة',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM'],
    descriptionFr: 'Formation d\'ingénieurs d\'État hautement qualifiés dans les technologies de pointe et le numérique.',
    descriptionAr: 'تكوين مهندسي دولة أصحاب كفاءة عالية في التكنولوجيا المتقدمة والرقمية.',
    careerProspects: ['Cybersécurité', 'Intelligence Artificielle', 'Génie Logiciel', 'Big Data', 'Automatisme & Robotique']
  },
  {
    id: 'ensam',
    acronym: 'ENSAM',
    nameFr: 'Écoles Nationales Supérieures des Arts et Métiers',
    nameAr: 'المدرسة الوطنية العليا للفنون والمهن',
    category: 'Ingénierie & Technologie',
    categoryAr: 'هندسة وتكنولوجيا',
    duration: '5 Ans (Cycle Ingénieur)',
    accessType: 'Présélection (75% National + 25% Régional) + Concours',
    accessTypeAr: 'انتقاء قبلي (75% الوطني + 25% الجهوي) + مباراة',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'STE/STM'],
    descriptionFr: 'Grande école d\'ingénieurs spécialisée en génie mécanique, industriel, électromécanique et énergétique.',
    descriptionAr: 'مدرسة كبرى للمهندسين متخصصة في الهندسة الميكانيكية، الصناعية، الكهروميكانيكية والطاقية.',
    careerProspects: ['Industrie Automobile', 'Aéronautique', 'Énergies Renouvelables', 'Maintenance Industrielle']
  },
  {
    id: 'ena',
    acronym: 'ENA',
    nameFr: 'École Nationale d\'Architecture',
    nameAr: 'المدرسة الوطنية للهندسة المعمارية',
    category: 'Ingénierie & Architecture',
    categoryAr: 'هندسة وعمارة',
    duration: '6 Ans (Architecte)',
    accessType: 'Présélection (Note Bac) + Concours écrit et oral',
    accessTypeAr: 'انتقاء قبلي (نقطة البكالوريا) + مباراة كتابية وشفوية',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'SE'],
    descriptionFr: 'Formation d\'architectes concepteurs capables de piloter des projets urbains et architecturaux complexes.',
    descriptionAr: 'تكوين مهندسين معماريين قادرين على قيادة مشاريع عمرانية ومعمارية معقدة.',
    careerProspects: ['Architecture d\'intérieur', 'Urbanisme', 'Design Urbain', 'Maîtrise d\'œuvre', 'Immobilier']
  },

  // 3. Commerce, Management & Business
  {
    id: 'encg',
    acronym: 'ENCG',
    nameFr: 'Écoles Nationales de Commerce et Gestion',
    nameAr: 'المدارس الوطنية للتجارة والتسيير',
    category: 'Commerce & Gestion',
    categoryAr: 'تجارة وتسيير',
    duration: '5 Ans (Diplôme ENCg)',
    accessType: 'Présélection (75/25) + Concours TAFEM',
    accessTypeAr: 'انتقاء قبلي (75/25) + مباراة TAFEM',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'SE'],
    descriptionFr: 'Formation des cadres de haut niveau dans les métiers du commerce, de la finance, du marketing et de la gestion.',
    descriptionAr: 'تكوين أطر رفيعة المستوى في مهن التجارة، المالية، التسويق والتسيير.',
    careerProspects: ['Marketing Digital', 'Audit & Conseil', 'Finance d\'entreprise', 'Supply Chain Management', 'Entrepreneuriat']
  },
  {
    id: 'iscae',
    acronym: 'ISCAE',
    nameFr: 'Institut Supérieur de Commerce et d\'Administration des Entreprises',
    nameAr: 'المعهد العالي للتجارة وإدارة المقاولات',
    category: 'Commerce & Gestion',
    categoryAr: 'تجارة وتسيير',
    duration: '3 Ans (Bac+2 requis / Prépa ou CPGE)',
    accessType: 'Concours d\'accès après classes prépas ou Bac+2',
    accessTypeAr: 'مباراة الولوج بعد الأقسام التحضيرية أو Bac+2',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SE'],
    descriptionFr: 'L\'établissement de référence au Maroc pour la formation en management, finance et stratégie d\'entreprise.',
    descriptionAr: 'المؤسسة المرجعية في المغرب للتكوين في التدبير، المالية وإستراتيجية المقاولات.',
    careerProspects: ['Direction Générale', 'Investment Banking', 'Consulting Stratégique', 'Directeur Financier']
  },

  // 4. Medicine, Pharmacy & Health Sciences
  {
    id: 'fmp',
    acronym: 'FMP',
    nameFr: 'Faculté de Médecine et de Pharmacie',
    nameAr: 'كلية الطب والصيدلة',
    category: 'Santé & Médecine',
    categoryAr: 'صحة وطب',
    duration: 'Médecine (7 Ans) / Pharmacie (6 Ans)',
    accessType: 'Présélection stricte sur la moyenne du Bac + Concours Commun',
    accessTypeAr: 'انتقاء قبلي صارم على معدل البكالوريا + مباراة مشتركة',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT'],
    descriptionFr: 'Formation des médecins généralistes, spécialistes et pharmaciens au service de la santé publique et privée.',
    descriptionAr: 'تكوين أطباء عامين، اختصاصيين الصيادلة لخدمة الصحة العامة والخاصة.',
    careerProspects: ['Médecine Générale', 'Chirurgie', 'Pharmacie d\'officine / Industrie', 'Recherche Médicale', 'Pédiatrie']
  },
  {
    id: 'fmd',
    acronym: 'FMD',
    nameFr: 'Faculté de Médecine Dentaire',
    nameAr: 'كلية طب الأسنان',
    category: 'Santé & Médecine',
    categoryAr: 'صحة وطب',
    duration: '6 Ans (Doctorat en Médecine Dentaire)',
    accessType: 'Présélection (75/25) + Concours d\'accès',
    accessTypeAr: 'انتقاء قبلي (75/25) + مباراة الولوج',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT'],
    descriptionFr: 'Formation spécialisée en chirurgie dentaire, orthodontie et santé bucco-dentaire.',
    descriptionAr: 'تكوين متخصص في جراحة الأسنان، تقويم الأسنان والصحة الفموية.',
    careerProspects: ['Chirurgien Dentiste libéral', 'Orthodontiste', 'Chirurgie maxillo-faciale']
  },
  {
    id: 'ispits',
    acronym: 'ISPITS',
    nameFr: 'Instituts Supérieurs des Professions Infirmières et Techniques de Santé',
    nameAr: 'المعاهد العليا للمهن التمريضية وتقنيات الصحة',
    category: 'Santé & Paramédical',
    categoryAr: 'صحة وشبه طب',
    duration: '3 Ans (Licence Professionnelle)',
    accessType: 'Présélection (Note Bac) + Concours écrit + Entretien',
    accessTypeAr: 'انتقاء قبلي (نقطة البكالوريا) + مباراة كتابية + مقابلة',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'LSH'],
    descriptionFr: 'Formation infirmière polyvalente, sage-femme, kinésithérapie, laboratoire, radiologie et urgences.',
    descriptionAr: 'تكوين ممرض متعدد التخصصات، قابلة، ترويض طبي، مختبر، أشعة ومستعجلات.',
    careerProspects: ['Infirmier Major', 'Sage-femme', 'Kinésithérapeute', 'Technicien de Laboratoire']
  },

  // 5. Agriculture, Veterinary & Forestry
  {
    id: 'iav',
    acronym: 'IAV Hassan II',
    nameFr: 'Institut Agronomique et Vétérinaire Hassan II',
    nameAr: 'معهد الحسن الثاني للزراعة والبيطرة',
    category: 'Agriculture & Vétérinaire',
    categoryAr: 'فلاحة وبيطرة',
    duration: '5 Ans (Ingénieur) / 6 Ans (Vétérinaire)',
    accessType: 'Présélection (75/25) + APESA (Classe Prépa intégrée) + Concours',
    accessTypeAr: 'انتقاء قبلي (75/25) + سنة تحضيرية APESA + مباراة',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT'],
    descriptionFr: 'Formation d\'ingénieurs agronomes, topographes et de docteurs vétérinaires reconnus internationalement.',
    descriptionAr: 'تكوين مهندسين زراعيين، طبوغرافيين ودكاترة بيطريين معترف بهم دوليا.',
    careerProspects: ['Médecine Vétérinaire', 'Agro-alimentaire', 'Génie Rural', 'Topographie', 'Aménagement du territoire']
  },
  {
    id: 'enam',
    acronym: 'ENAM',
    nameFr: 'École Nationale d\'Agriculture de Meknès',
    nameAr: 'المدرسة الوطنية للفلاحة بمكناس',
    category: 'Agriculture & Vétérinaire',
    categoryAr: 'فلاحة وبيطرة',
    duration: '5 Ans (Ingénieur d\'État Agronome)',
    accessType: 'Présélection + Concours écrit',
    accessTypeAr: 'انتقاء قبلي + مباراة كتابية',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT'],
    descriptionFr: 'Formation d\'ingénieurs agronomes spécialisés dans la production agricole, l\'économie rurale et le développement durable.',
    descriptionAr: 'تكوين مهندسين زراعيين متخصصين في الإنتاج الزراعي، الاقتصاد القروي والتنمية المستدامة.',
    careerProspects: ['Management agricole', 'Agro-industrie', 'Conseil agricole', 'Gestion des ressources en eau']
  },

  // 6. Short Cycle Technical Diplomas
  {
    id: 'est',
    acronym: 'EST',
    nameFr: 'Écoles Supérieures de Technologie',
    nameAr: 'المدارس العليا للتكنولوجيا',
    category: 'Diplômes Techniques',
    categoryAr: 'دبلومات تقنية',
    duration: '2 Ans (DUT - Diplôme Universitaire de Technologie)',
    accessType: 'Présélection sur la base de la moyenne du Baccalauréat',
    accessTypeAr: 'انتقاء قبلي على أساس معدل امتحان البكالوريا',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Formation technique supérieure courte axée sur l\'employabilité directe dans le secteur industriel, informatique et tertiaire.',
    descriptionAr: 'تكوين تقني عالي قصير المدى يركز على التشغيل المباشر في القطاع الصناعي، الإعلاميات والخدمات.',
    careerProspects: ['Technicien Supérieur', 'Chef de projet junior', 'Administration réseaux', 'Comptabilité avancée']
  },
  {
    id: 'bts',
    acronym: 'BTS',
    nameFr: 'Brevet de Technicien Supérieur',
    nameAr: 'شهادة التقني العالي',
    category: 'Diplômes Techniques',
    categoryAr: 'دبلومات تقنية',
    duration: '2 Ans',
    accessType: 'Étude de dossier (Notes de 1ère année Bac et Examen régional)',
    accessTypeAr: 'دراسة الملف (نقط الأولى باك والامتحان الجهوي)',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE'],
    descriptionFr: 'Classes hébergées dans les lycées techniques qualifiant des techniciens supérieurs spécialisés.',
    descriptionAr: 'أقسام حاضنة في الثانويات التقنية تؤهل تقنيين عالين متخصصين.',
    careerProspects: ['Maintenance industrielle', 'Assistant de gestion', 'Électrotechnique', 'Développement web']
  },
  {
    id: 'cpge',
    acronym: 'CPGE',
    nameFr: 'Classes Préparatoires aux Grandes Écoles',
    nameAr: 'الأقسام التحضيرية للمبرزين والمهندسين',
    category: 'Classes Préparatoires',
    categoryAr: 'أقسام تحضيرية',
    duration: '2 Ans (MPSI, PCSI, TSI, ECT)',
    accessType: 'Présélection stricte (Notes de première et terminale + Âge limite)',
    accessTypeAr: 'انتقاء قبلي صارم (نقط الأولى والثانية باك + شرط السن)',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'STE/STM', 'SE'],
    descriptionFr: 'Formation d\'élite préparant au Concours National Commun (CNC) pour intégrer les plus grandes écoles d\'ingénieurs et de commerce.',
    descriptionAr: 'تكوين نخبوي يحضر للمباراة الوطنية المشتركة (CNC) لولوج كبار مدارس المهندسين والتجارة.',
    careerProspects: ['Intégration Mines-Ponts / Centrale / X / ENSIAS / EHTP', 'Chercheur', 'Ingénieur de haut vol']
  },

  // 7. Arts, Media, Sports & Specialized Institutes
  {
    id: 'isic',
    acronym: 'ISIC',
    nameFr: 'Institut Supérieur de l\'Information et de la Communication',
    nameAr: 'المعهد العالي للإعلام والاتصال',
    category: 'Médias & Communication',
    categoryAr: 'إعلام وتواصل',
    duration: '3 Ans (Licence en Information et Communication)',
    accessType: 'Présélection + Concours écrit et oral',
    accessTypeAr: 'انتقاء قبلي + مباراة كتابية وشفوية',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Formation aux métiers du journalisme, de la communication institutionnelle, des médias audiovisuels et du web.',
    descriptionAr: 'تكوين في مهن الصحافة، الاتصال المؤسساتي، وسائل الإعلام السمعية البصرية والويب.',
    careerProspects: ['Journaliste TV/Radio/Web', 'Attaché de presse', 'Community Manager', 'Rédacteur en chef']
  },
  {
    id: 'ismac',
    acronym: 'ISMAC',
    nameFr: 'Institut Supérieur des Métiers de l\'Audiovisuel et du Cinéma',
    nameAr: 'المعهد العالي للمهن السمعية البصرية والسينما',
    category: 'Arts & Cinéma',
    categoryAr: 'فنون وسينما',
    duration: '3 Ans (Licence)',
    accessType: 'Présélection + Concours (Écrit + Entretien artistique)',
    accessTypeAr: 'انتقاء قبلي + مباراة (كتابي + مقابلة فنية)',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Formation aux métiers de la réalisation, de l\'image, du son, du montage et de la production cinématographique et télévisuelle.',
    descriptionAr: 'تكوين في مهن الإخراج، الصورة، الصوت، المونتاج والإنتاج السينمائي والتلفزيوني.',
    careerProspects: ['Réalisateur', 'Chef opérateur', 'Monteur vidéo', 'Ingénieur du son', 'Producteur']
  },
  {
    id: 'inba',
    acronym: 'INBA / ESBA',
    nameFr: 'Institut National des Beaux-Arts',
    nameAr: 'المعهد الوطني للفنون الجميلة',
    category: 'Arts & Design',
    categoryAr: 'فنون وتصميم',
    duration: '4 Ans',
    accessType: 'Concours d\'aptitude artistique + Entretien',
    accessTypeAr: 'مباراة الكفاءة الفنية + مقابلة',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Création artistique, design graphique, peinture, sculpture, bande dessinée et arts multimédias.',
    descriptionAr: 'إبداع فني، تصميم غرافيك، رسم، نحت، شريط رسوم متحركة وفنون متعددة الوسائط.',
    careerProspects: ['Designer graphique', 'Artiste peintre', 'Directeur artistique', 'Illustrateur']
  },
  {
    id: 'isit',
    acronym: 'ISIT',
    nameFr: 'Institut Supérieur International du Tourisme de Tanger',
    nameAr: 'المعهد العالي الدولي للسياحة بطنجة',
    category: 'Tourisme & Hôtellerie',
    categoryAr: 'سياحة وفندقة',
    duration: '3 Ans (Licence)',
    accessType: 'Présélection + Concours écrit et oral (Maîtrise des langues)',
    accessTypeAr: 'انتقاء قبلي + مباراة كتابية وشفوية (إتقان اللغات)',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Management touristique, hôtellerie internationale, animation et gestion des agences de voyages.',
    descriptionAr: 'تدبير سياحي، فندقة دولية، تنشيط وتسيير وكالات الأسفار.',
    careerProspects: ['Directeur d\'hôtel', 'Manager de tourisme', 'Chef de projet événementiel', 'Consultant touristique']
  },
  {
    id: 'iss',
    acronym: 'ISS',
    nameFr: 'Institut des Sciences du Sport',
    nameAr: 'معهد علوم الرياضة',
    category: 'Sports & Santé',
    categoryAr: 'علوم الرياضة',
    duration: '3 Ans (Licence)',
    accessType: 'Présélection + Tests physiques et sportifs + Entretien',
    accessTypeAr: 'انتقاء قبلي + اختبارات بدنية ورياضية + مقابلة',
    eligibleBranches: ['SMA', 'SMB', 'SPC', 'SVT', 'STE/STM', 'SE', 'LSH'],
    descriptionFr: 'Management du sport, éducation physique, entraînement sportif et kinésithérapie sportive.',
    descriptionAr: 'تدبير الرياضة، التربية البدنية، التدريب الرياضي والترويض الرياضي.',
    careerProspects: ['Entraîneur professionnel', 'Manager sportif', 'Préparateur physique', 'Professeur EPS']
  }
];
