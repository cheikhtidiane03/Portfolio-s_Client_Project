// ============================================================
//  PORTFOLIO DATA — Modifier ici pour personnaliser le site
// ============================================================

export const designer = {
  name: "Moussa Ba",
  title: "Designer Graphique & Créatif Visuel",
  tagline: "Transformer les idées en visuels puissants",
  location: "Richard-Toll / Khouma, Sénégal",
  phone: "+221 78 542 88 19",
  email: "mba72900@gmail.com",
  bio: "Créatif passionné, je développe des univers visuels qui marquent et captent l'attention. Mon approche combine sens artistique et maîtrise technique pour donner vie à des projets modernes, cohérents et impactants.",
  bio2: "Je m'investis dans la conception graphique à travers la création d'identités visuelles, de supports de communication et de contenus digitaux. Chaque réalisation est pensée avec précision, dans un équilibre entre esthétique, clarté et efficacité.",
  socials: {
    whatsapp: "221785428819",
  },
};

// ---- Statistiques ----
export const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "3+",  label: "Années d'expérience" },
  { value: "20+", label: "Clients satisfaits" },
  { value: "6",   label: "Logiciels maîtrisés" },
];

// ---- Compétences Adobe ----
export const skills = [
  { name: "Photoshop",   icon: "Ps", color: "#31A8FF", level: 95 },
  { name: "Illustrator", icon: "Ai", color: "#FF9A00", level: 88 },
  { name: "Premiere Pro",icon: "Pr", color: "#9999FF", level: 80 },
  { name: "InDesign",    icon: "Id", color: "#FF3366", level: 75 },
  { name: "Lightroom",   icon: "Lr", color: "#31A8FF", level: 85 },
  { name: "Audition",    icon: "Au", color: "#9999FF", level: 65 },
];

// ---- Catégories Portfolio ----
export const categories = [
  { id: "all",     label: "Tous les projets" },
  { id: "events",  label: "Événements" },
  { id: "sports",  label: "Affiches Sportives" },
  { id: "social",  label: "Réseaux Sociaux" },
  { id: "unique",  label: "Designs Uniques" },
];

// ---- Projets ----
export const projects = [
  {
    id: 1,
    category: "events",
    title: "Journée d'Excellence 2026",
    subtitle: "AEMYS – Flyer événementiel",
    description:
      "Conception d'un flyer double-face pour la Journée d'Excellence organisée par l'Amicale des Élèves et Étudiants de Mbodjene Yakh Sabar. Recto avec le programme complet et le parrain, verso avec visuel « J'y Serai ».",
    tags: ["Flyer", "Événement", "Print"],
    color: "#C9A84C",
  },
  {
    id: 2,
    category: "events",
    title: "Journée Culturelle Yontabè Laobé",
    subtitle: "Affiche culturelle & concert",
    description:
      "Affiche dynamique pour une journée culturelle avec concert, défilé de mode et gala de mariés. Animé par Boulo Toksel avec de nombreux artistes invités.",
    tags: ["Culture", "Concert", "Affiche"],
    color: "#E65C00",
  },
  {
    id: 3,
    category: "social",
    title: "Kaay Henné by Mariama",
    subtitle: "Communication commerciale",
    description:
      "Visuel commercial pour un service de henné traditionnel et moderne. Présentation claire des prestations, tarifs et contact avec une esthétique luxuriante et dorée.",
    tags: ["Commerce", "Social Media", "Beauté"],
    color: "#D4A017",
  },
  {
    id: 4,
    category: "events",
    title: "Journée Set-Sétal",
    subtitle: "Mobilisation communautaire scolaire",
    description:
      "Affiche illustrée pour une journée de nettoyage communautaire organisée par l'AEMYS en collaboration avec les ASC Tound-Wi et Bokk Jom à l'École Khouma Mbodjene.",
    tags: ["École", "Communauté", "Illustration"],
    color: "#4CAF50",
  },
  {
    id: 5,
    category: "events",
    title: "Match de Génie en Herbe",
    subtitle: "Compétition scolaire inter-lycées",
    description:
      "Visuel pour un quiz académique inter-lycées : CEM Ndombo vs CEM N°1. Organisé par le Club des Amis de la Bibliothèque (CAB) en collaboration avec l'AEDE.",
    tags: ["Éducation", "Compétition", "Scolaire"],
    color: "#00897B",
  },
  {
    id: 6,
    category: "sports",
    title: "Real Madrid vs Atlético",
    subtitle: "LaLiga 2025/2026 – Journée 29",
    description:
      "Affiche dynamique pour le derby madrilène. Composition photo-montage avec les joueurs en blanc sur fond sépia de Madrid. Date : Dimanche 22.03.2026 à 20h00.",
    tags: ["Football", "LaLiga", "Derby"],
    color: "#FFD700",
  },
  {
    id: 7,
    category: "sports",
    title: "FC Barcelona – Game Day",
    subtitle: "Champions League – Barça vs Newcastle",
    description:
      "Affiche Game Day style premium pour le match de Ligue des Champions entre le FC Barcelone et Newcastle United. Ambiance stade + portraits joueurs.",
    tags: ["Football", "Champions League", "Barça"],
    color: "#A50044",
  },
  {
    id: 8,
    category: "sports",
    title: "Sénégal – CAN Morocco 2025",
    subtitle: "Africa Cup of Nations",
    description:
      "Deux affiches officielles pour les matchs du Sénégal lors de la Coupe d'Afrique des Nations Morocco 2025. Matchs vs Égypte au Tangier Grand Stadium.",
    tags: ["CAN", "Sénégal", "Football"],
    color: "#009A44",
  },
  {
    id: 9,
    category: "events",
    title: "Journées de Reboisement",
    subtitle: "Communication environnementale",
    description:
      "Affiche pour une campagne de plantation d'arbres à l'École Primaire Khouma Mbodjene. Programme sur deux dates avec préparation et plantation.",
    tags: ["Environnement", "École", "Communauté"],
    color: "#388E3C",
  },
  {
    id: 10,
    category: "events",
    title: "Cérémonie de Clôture des Cours",
    subtitle: "AEMYS – Édition 2025",
    description:
      "Visuel élégant pour la cérémonie de clôture des cours de vacances. Invitation aux parents et enseignants pour honorer les meilleurs élèves.",
    tags: ["Cérémonie", "Éducation", "AEMYS"],
    color: "#C9A84C",
  },
];

// ---- Services ----
export const services = [
  {
    icon: "🎨",
    title: "Design d'Affiches",
    desc: "Création de visuels percutants pour événements, concerts et compétitions sportives.",
  },
  {
    icon: "📱",
    title: "Contenu Social Media",
    desc: "Visuels optimisés pour Facebook, Instagram et WhatsApp avec un impact maximal.",
  },
  {
    icon: "🏆",
    title: "Communication Sportive",
    desc: "Affiches de matchs professionnelles pour équipes locales et clubs internationaux.",
  },
  {
    icon: "🎭",
    title: "Identité Visuelle",
    desc: "Conception d'univers graphiques cohérents pour associations et organisations.",
  },
];

// ---- Étapes du processus ----
export const processSteps = [
  {
    number: "01",
    title: "Écoute & Brief",
    desc: "Je prends le temps de comprendre vos besoins, votre identité et vos objectifs. Un bon design commence par une écoute attentive.",
    icon: "🎯",
    color: "#FFD700",
  },
  {
    number: "02",
    title: "Recherche & Concept",
    desc: "J'explore les références visuelles, analyse la concurrence et développe un concept créatif adapté à votre projet.",
    icon: "🔍",
    color: "#FF8C00",
  },
  {
    number: "03",
    title: "Création & Exécution",
    desc: "Je donne vie au concept avec les outils Adobe. Chaque élément est soigneusement pensé pour créer une harmonie visuelle.",
    icon: "🎨",
    color: "#FF6B00",
  },
  {
    number: "04",
    title: "Révision & Livraison",
    desc: "Je vous présente le résultat, intègre vos retours et livre les fichiers finaux dans les formats adaptés à votre usage.",
    icon: "✅",
    color: "#FFD700",
  },
];
