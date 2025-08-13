import {
  Dot,
  Brain,
  Egg,
  Sparkle,
  WholeWord,
  MessageCircleWarning,
  BookHeart,
  Bug,
  Lightbulb,
  Book,
  Tally1,
  User,
  HandHeart,
  TreePalm,
  Leaf,
  ChartNoAxesCombined,
  ShieldCheck,
  MessageCircle,
  Feather,
  Scale,
  Globe,
  AlignLeft,
  Cloud,
} from "lucide-react";
export const philosophies = [
  {
    title: "Utilitarianism",
    url: "/philosophies/utilitarianism",
    icon: Scale,
    description:
      "A form of consequentialism which asserts that the best action is the one that maximizes overall happiness or utility and minimizes suffering.",
    keyPoints: [
      "Morality depends on maximizing collective well-being",
      "Each person's happiness is equally weighted",
      "Act vs Rule Utilitarianism distinctions",
    ],
    proponents: ["Jeremy Bentham", "John Stuart Mill"],
  },
  {
    title: "Consequentialism",
    url: "/philosophies/consequentialism",
    icon: ChartNoAxesCombined,
    description:
      "A broad class of ethical theories which hold that the morality of an action depends solely on its outcomes or consequences.",
    keyPoints: [
      "Actions judged by their results",
      "The ends justify the means",
      "Utilitarianism is the most notable example",
    ],
    proponents: ["Jeremy Bentham", "John Stuart Mill", "Peter Singer"],
  },
  {
    title: "Existentialism",
    url: "/philosophies/existentialism",
    icon: Dot,
    description:
      "A philosophical movement emphasizing individual existence, freedom, and choice, asserting that humans define their own meaning in life.",
    keyPoints: [
      "Existence precedes essence",
      "Individual freedom and responsibility",
      "Anxiety and authenticity",
    ],
    proponents: ["Jean-Paul Sartre", "Simone de Beauvoir", "Albert Camus"],
  },
  {
    title: "Stoicism",
    url: "/philosophies/stoicism",
    icon: ShieldCheck,
    description:
      "An ancient philosophy teaching the development of self-control and fortitude as a means of overcoming destructive emotions.",
    keyPoints: [
      "Virtue as the highest good",
      "Focus on what you can control",
      "Emotional resilience through reason",
    ],
    proponents: ["Marcus Aurelius", "Epictetus", "Seneca"],
  },
  {
    title: "Nihilism",
    url: "/philosophies/nihilism",
    icon: Bug,
    description:
      "The philosophical belief that life is without objective meaning, purpose, or intrinsic value.",
    keyPoints: [
      "Rejection of moral principles",
      "Life lacks inherent meaning",
      "Often leads to existential crisis",
    ],
    proponents: ["Friedrich Nietzsche", "Max Stirner"],
  },
  {
    title: "Rationalism",
    url: "/philosophies/rationalism",
    icon: Brain,
    description:
      "The epistemological view that regards reason as the chief source and test of knowledge.",
    keyPoints: [
      "Reason over empirical evidence",
      "Innate ideas and deductive reasoning",
      "A priori knowledge",
    ],
    proponents: ["René Descartes", "Baruch Spinoza", "Gottfried Leibniz"],
  },
  {
    title: "Empiricism",
    url: "/philosophies/empiricism",
    icon: Sparkle,
    description:
      "The theory that all knowledge is derived from sense-experience and empirical evidence.",
    keyPoints: [
      "Experience as source of knowledge",
      "A posteriori knowledge",
      "Tabula rasa (blank slate)",
    ],
    proponents: ["John Locke", "David Hume", "George Berkeley"],
  },
  {
    title: "Logical Positivism",
    url: "/philosophies/logical-positivism",
    icon: MessageCircleWarning,
    description:
      "A philosophical movement emphasizing empirical evidence and logical analysis, rejecting metaphysical speculation.",
    keyPoints: [
      "Verification principle",
      "Unity of science",
      "Rejection of metaphysics",
    ],
    proponents: ["Rudolf Carnap", "Otto Neurath", "Moritz Schlick"],
  },
  {
    title: "Epistemology",
    url: "/philosophies/epistemology",
    icon: Lightbulb,
    description:
      "The branch of philosophy concerned with the theory of knowledge, including its sources, limitations, and validity.",
    keyPoints: [
      "What is knowledge?",
      "How is knowledge acquired?",
      "Justified true belief problem",
    ],
    proponents: ["Plato", "Aristotle", "Immanuel Kant"],
  },
  {
    title: "Metaphysics",
    url: "/philosophies/metaphysics",
    icon: Brain,
    description:
      "The branch of philosophy that examines the fundamental nature of reality, including the relationship between mind and matter.",
    keyPoints: [
      "Nature of existence",
      "Mind-body problem",
      "Free will vs determinism",
    ],
    proponents: ["Aristotle", "Immanuel Kant", "Georg Wilhelm Friedrich Hegel"],
  },
  {
    title: "Ethics",
    url: "/philosophies/ethics",
    icon: BookHeart,
    description:
      "The branch of philosophy dealing with what is morally right and wrong, and what our moral duties and obligations are.",
    keyPoints: [
      "Moral theories and principles",
      "Virtue, deontological, and consequentialist ethics",
      "Applied ethical dilemmas",
    ],
    proponents: ["Aristotle", "Immanuel Kant", "John Stuart Mill"],
  },
  {
    title: "Aesthetics",
    url: "/philosophies/aesthetics",
    icon: Sparkle,
    description:
      "The branch of philosophy concerned with the nature of beauty, art, taste, and the creation and appreciation of beauty.",
    keyPoints: [
      "Nature of beauty and art",
      "Aesthetic experience",
      "Art criticism and interpretation",
    ],
    proponents: [
      "Immanuel Kant",
      "Georg Wilhelm Friedrich Hegel",
      "Arthur Schopenhauer",
    ],
  },
  {
    title: "Political Philosophy",
    url: "/philosophies/political-philosophy",
    icon: Tally1,
    description:
      "The study of fundamental questions about government, politics, liberty, justice, and the enforcement of laws.",
    keyPoints: [
      "Nature of government and authority",
      "Rights and freedoms",
      "Social contract theory",
    ],
    proponents: ["Plato", "John Locke", "John Rawls"],
  },
  {
    title: "Absurdism",
    url: "/philosophies/absurdism",
    icon: Bug,
    description:
      "The philosophical theory that existence is fundamentally absurd and that humans must find their own meaning despite this absurdity.",
    keyPoints: [
      "Life is inherently meaningless",
      "Revolt against absurdity",
      "Create meaning through action",
    ],
    proponents: ["Albert Camus", "Søren Kierkegaard"],
  },
  {
    title: "Determinism",
    url: "/philosophies/determinism",
    icon: WholeWord,
    description:
      "The philosophical idea that every event is the result of prior causes, and that free will is an illusion.",
    keyPoints: [
      "Causal determinism",
      "Implications for moral responsibility",
      "Hard vs soft determinism",
    ],
    proponents: ["Pierre-Simon Laplace", "Paul Holbach"],
  },
  {
    title: "Idealism",
    url: "/philosophies/idealism",
    icon: Feather,
    description:
      "The philosophical view that reality is fundamentally mental in nature, or that the material world is secondary to consciousness.",
    keyPoints: [
      "Mind over matter",
      "Subjective vs objective idealism",
      "Reality as mental construct",
    ],
    proponents: [
      "George Berkeley",
      "Georg Wilhelm Friedrich Hegel",
      "Immanuel Kant",
    ],
  },
  {
    title: "Dualism",
    url: "/philosophies/dualism",
    icon: Dot,
    description:
      "The view that the mental and the physical are fundamentally different kinds of substances or properties.",
    keyPoints: [
      "Mind-body distinction",
      "Substance vs property dualism",
      "Interaction problem",
    ],
    proponents: ["René Descartes", "David Chalmers"],
  },
  {
    title: "Relativism",
    url: "/philosophies/relativism",
    icon: MessageCircle,
    description:
      "The idea that points of view have no absolute truth or validity, having only relative, subjective value according to differences in perception.",
    keyPoints: [
      "Cultural relativism",
      "Moral relativism",
      "No universal truths",
    ],
    proponents: ["Protagoras", "Paul Feyerabend"],
  },
  {
    title: "Objectivism",
    url: "/philosophies/objectivism",
    icon: ShieldCheck,
    description:
      "The philosophy that reality exists independent of consciousness, and that individuals should pursue rational self-interest.",
    keyPoints: [
      "Objective reality",
      "Rational egoism",
      "Laissez-faire capitalism",
    ],
    proponents: ["Ayn Rand"],
  },
  {
    title: "Marxism",
    url: "/philosophies/marxism",
    icon: Book,
    description:
      "A socioeconomic and political theory based on the critique of capitalism and advocacy for a classless society.",
    keyPoints: [
      "Historical materialism",
      "Class struggle",
      "Critique of capitalism",
    ],
    proponents: ["Karl Marx", "Friedrich Engels"],
  },
  {
    title: "Confucianism",
    url: "/philosophies/confucianism",
    icon: Tally1,
    description:
      "An ethical and philosophical system based on the teachings of Confucius, emphasizing morality, social relationships, and justice.",
    keyPoints: [
      "Virtue ethics and character",
      "Social harmony and hierarchy",
      "Education and self-cultivation",
    ],
    proponents: ["Confucius", "Mencius", "Xunzi"],
  },
  {
    title: "Taoism",
    url: "/philosophies/taoism",
    icon: Leaf,
    description:
      "A philosophical and religious tradition emphasizing living in harmony with the Tao (the Way), the fundamental principle of existence.",
    keyPoints: ["Wu wei (non-action)", "Balance and harmony", "Natural order"],
    proponents: ["Laozi", "Zhuangzi"],
  },
  {
    title: "Continental Philosophy",
    url: "/philosophies/continental-philosophy",
    icon: Egg,
    description:
      "A tradition of 19th and 20th-century philosophy from mainland Europe, emphasizing historical context and human experience.",
    keyPoints: [
      "Phenomenology and hermeneutics",
      "Critical theory",
      "Post-structuralism",
    ],
    proponents: ["Edmund Husserl", "Martin Heidegger", "Jacques Derrida"],
  },
  {
    title: "Philosophy of Language",
    url: "/philosophies/philosophy-of-language",
    icon: WholeWord,
    description:
      "The philosophical study of the nature, origins, and usage of language, including meaning, reference, and truth.",
    keyPoints: ["Meaning and reference", "Speech acts", "Language games"],
    proponents: ["Ludwig Wittgenstein", "J.L. Austin", "John Searle"],
  },
  {
    title: "Philosophy of Science",
    url: "/philosophies/philosophy-of-science",
    icon: ChartNoAxesCombined,
    description:
      "The study of the foundations, methods, and implications of science, including the nature of scientific knowledge and progress.",
    keyPoints: [
      "Scientific method",
      "Theory confirmation and falsification",
      "Scientific realism vs anti-realism",
    ],
    proponents: ["Karl Popper", "Thomas Kuhn", "Paul Feyerabend"],
  },
  {
    title: "Philosophy of Law",
    url: "/philosophies/philosophy-of-law",
    icon: ShieldCheck,
    description:
      "The philosophical examination of law, legal systems, and the concepts of legal validity, justice, and rights.",
    keyPoints: [
      "Natural law vs legal positivism",
      "Justice and rights",
      "Legal interpretation",
    ],
    proponents: ["H.L.A. Hart", "Ronald Dworkin", "John Finnis"],
  },
  {
    title: "Pragmatism",
    url: "/philosophies/pragmatism",
    icon: Lightbulb,
    description:
      "A philosophical approach that evaluates theories or beliefs in terms of the success of their practical application.",
    keyPoints: [
      "Truth is what works in practice",
      "Knowledge through experience and experimentation",
      "Focus on consequences and utility",
    ],
    proponents: ["William James", "John Dewey", "Charles Sanders Peirce"],
  },
  {
    title: "Phenomenology",
    url: "/philosophies/phenomenology",
    icon: Dot,
    description:
      "The philosophical study of the structures of experience and consciousness, focusing on how things appear to us.",
    keyPoints: [
      "Study of consciousness and experience",
      "Intentionality of consciousness",
      "Bracketing of the natural attitude",
    ],
    proponents: ["Edmund Husserl", "Martin Heidegger", "Maurice Merleau-Ponty"],
  },
  {
    title: "Logical Atomism",
    url: "/philosophies/logical-atomism",
    icon: WholeWord,
    description:
      "The philosophical belief that the world consists of ultimate logical facts (or atoms) that cannot be broken down further.",
    keyPoints: [
      "Reality composed of atomic facts",
      "Language mirrors logical structure",
      "Analysis through formal logic",
    ],
    proponents: ["Bertrand Russell", "Ludwig Wittgenstein"],
  },
  {
    title: "Postmodernism",
    url: "/philosophies/postmodernism",
    icon: MessageCircle,
    description:
      "A broad movement that developed in the late 20th century across philosophy, arts, and criticism, characterized by skepticism toward grand narratives.",
    keyPoints: [
      "Skepticism of universal truths",
      "Deconstruction of traditional concepts",
      "Emphasis on relativity and subjectivity",
    ],
    proponents: ["Jacques Derrida", "Michel Foucault", "Jean Baudrillard"],
  },
  {
    title: "Analytic Philosophy",
    url: "/philosophies/analytic-philosophy",
    icon: Brain,
    description:
      "A style of philosophy that emphasizes clarity and argumentative rigor, often using formal logic and analysis of language.",
    keyPoints: [
      "Logical analysis and clarity",
      "Language and meaning focus",
      "Scientific methodology in philosophy",
    ],
    proponents: ["Gottlob Frege", "Bertrand Russell", "W.V.O. Quine"],
  },
  {
    title: "Virtue Ethics",
    url: "/philosophies/virtue-ethics",
    icon: BookHeart,
    description:
      "An approach to ethics that emphasizes the character of the moral agent rather than rules or consequences.",
    keyPoints: [
      "Character over actions or consequences",
      "Cultivation of virtues",
      "Practical wisdom (phronesis)",
    ],
    proponents: ["Aristotle", "Philippa Foot", "Alasdair MacIntyre"],
  },
  {
    title: "Deontological Ethics",
    url: "/philosophies/deontological-ethics",
    icon: ShieldCheck,
    description:
      "The normative ethical theory that judges the morality of actions based on adherence to rules or duties.",
    keyPoints: [
      "Duty-based ethics",
      "Categorical imperatives",
      "Universal moral laws",
    ],
    proponents: ["Immanuel Kant", "W.D. Ross"],
  },
  {
    title: "Feminist Philosophy",
    url: "/philosophies/feminist-philosophy",
    icon: HandHeart,
    description:
      "Philosophy that seeks to understand and critique the ways gender influences knowledge, society, and politics.",
    keyPoints: [
      "Gender and power analysis",
      "Critique of traditional philosophy",
      "Intersectionality and inclusion",
    ],
    proponents: ["Simone de Beauvoir", "Judith Butler", "bell hooks"],
  },
  {
    title: "Scientology",
    url: "/philosophies/scientology",
    icon: Brain,
    description:
      "A controversial religious movement and set of beliefs created by L. Ron Hubbard, focusing on spiritual rehabilitation.",
    keyPoints: [
      "Dianetics and auditing",
      "Thetans and past lives",
      "Bridge to Total Freedom",
    ],
    proponents: ["L. Ron Hubbard"],
  },
];

export const foundationalConcepts = [
  {
    title: "Religion",
    url: "/foundational-concepts/religion",
    icon: Book,
  },
  {
    title: "Philosophical Terms",
    url: "/foundational-concepts/philosophical-terms",
    icon: Lightbulb,
  },
  {
    title: "Philosophies",
    url: "/foundational-concepts/philosophies",
    icon: Cloud,
  },
];

export const majorReligions = [
  {
    title: "Islam",
    url: "/major-religions/islam",
    icon: TreePalm,
  },
  {
    title: "Christianity",
    url: "/major-religions/christianity",
    icon: HandHeart, // Changed from HandHeart, might want a more specific icon
  },
  {
    title: "Hinduism",
    url: "/major-religions/hinduism",
    icon: Leaf, // Changed from Leaf, might want a more specific icon
  },
  {
    title: "Buddhism",
    url: "/major-religions/buddhism",
    icon: Feather, // Changed from Feather, might want a more specific icon
  },
  {
    title: "Judaism",
    url: "/major-religions/judaism",
    icon: ShieldCheck, // Changed from ShieldCheck, might want a more specific icon
  },
];

// Religion timeline data for academic study
export const religionTimeline = [
  {
    period: "Prehistoric Era",
    timeRange: "100,000+ BCE",
    description: "Proto-religious practices, animism, ritual burials",
    events: [
      "Middle Paleolithic ritual burials with grave offerings",
      "Venus figurines and cave art suggesting fertility cults",
      "Early shamanic and animistic practices",
    ],
  },
  {
    period: "Ancient Polytheism",
    timeRange: "3500-500 BCE",
    description: "Complex polytheistic systems across civilizations",
    events: [
      "3500 BCE: Mesopotamian religion (Sumerian pantheon)",
      "3000 BCE: Ancient Egyptian religion",
      "2600 BCE: Indus Valley religious practices",
      "1500 BCE: Vedic religion in India",
      "800 BCE: Greek polytheism codified",
    ],
  },
  {
    period: "Axial Age",
    timeRange: "800-200 BCE",
    description: "Emergence of major philosophical and religious traditions",
    events: [
      "800-500 BCE: Hebrew monotheism develops",
      "700-500 BCE: Upanishads composed in India",
      "6th century BCE: Buddhism founded by Siddhartha Gautama",
      "6th century BCE: Jainism founded by Mahavira",
      "6th century BCE: Confucianism in China",
    ],
  },
  {
    period: "Classical Period",
    timeRange: "1st-7th Century CE",
    description: "Rise of Christianity and consolidation of major faiths",
    events: [
      "30 CE: Christianity begins with Jesus of Nazareth",
      "70 CE: Second Temple destruction, Judaism transforms",
      "4th century CE: Christianity becomes Roman state religion",
      "610 CE: Islam founded by Prophet Muhammad",
    ],
  },
  {
    period: "Medieval Period",
    timeRange: "7th-15th Century CE",
    description: "Global spread and systematization of world religions",
    events: [
      "7th-8th centuries: Rapid Islamic expansion",
      "Medieval period: Christian theological development",
      "Buddhist spread to East and Southeast Asia",
      "Hindu philosophical schools mature",
    ],
  },
  {
    period: "Modern Era",
    timeRange: "18th Century-Present",
    description:
      "Secularization, new religious movements, and interfaith dialogue",
    events: [
      "18th century: Enlightenment and rise of agnosticism/atheism",
      "19th century: Religious reform movements",
      "20th century: Interfaith dialogue begins",
      "21st century: Global religious demographics shift",
    ],
  },
];

// Detailed philosophical terms with comprehensive explanations
export const detailedPhilosophicalTerms = [
  {
    term: "Monotheistic",
    definition:
      "Monotheism is the belief in the existence of only one God. This God is typically considered all-powerful, all-knowing, and morally perfect.",
    context:
      "Major monotheistic religions include Judaism, Christianity, Islam, and Sikhism. These faiths differ in their conceptions of God but share the foundational belief in a single divine entity.",
    category: "Religious Philosophy",
  },
  {
    term: "Polytheistic",
    definition:
      "Polytheism is the belief in or worship of multiple gods, each often responsible for different aspects of the cosmos or human experience.",
    context:
      "Ancient Greek, Roman, Hindu, and many indigenous religions are polytheistic, with complex pantheons and mythologies.",
    category: "Religious Philosophy",
  },
  {
    term: "Henotheist",
    definition:
      "Henotheism is the worship of one god without denying the existence or possible worship of other deities.",
    context:
      "This approach appears in some forms of Hindu worship, where particular gods are venerated as supreme for practical or devotional purposes while recognizing others exist.",
    category: "Religious Philosophy",
  },
  {
    term: "Pantheist",
    definition:
      "Pantheism is the belief that everything that exists (the universe and nature) is identical with divinity or that everything composes an all-encompassing, immanent God.",
    context:
      "Pantheism is prominent in some expressions of Hindu philosophy (e.g., Advaita Vedanta) and has philosophical proponents in the West, such as Baruch Spinoza.",
    category: "Religious Philosophy",
  },
  {
    term: "Monolatristic",
    definition:
      "Monolatry is the belief in the existence of many gods but with the consistent worship of only one deity.",
    context:
      "It differs from henotheism, as monolatry involves exclusive worship (but not the denial of others' existence), visible in certain periods of ancient Hebrew religion and other traditions.",
    category: "Religious Philosophy",
  },
  {
    term: "Consequentialist",
    definition:
      "Consequentialism is a broad class of ethical theories which hold that the morality of an action depends solely on its outcomes or consequences. The most notable example is utilitarianism.",
    context:
      "A consequentialist evaluates actions by comparing their results, holding that the ends justify the means.",
    category: "Ethics",
  },
  {
    term: "Utilitarians",
    definition:
      "Utilitarianism is a form of consequentialism which asserts that the best action is the one that maximizes overall happiness or utility and minimizes suffering.",
    context:
      "Types include Act Utilitarianism (evaluates actions case by case) and Rule Utilitarianism (favors rules that, when generally followed, maximize happiness). Major proponents include Jeremy Bentham and John Stuart Mill.",
    category: "Ethics",
    keyPrinciples: [
      "Morality depends on maximizing collective well-being",
      "Each person's happiness is equally weighted",
    ],
    criticisms: [
      "May neglect individual rights",
      "Hard to compare and measure happiness",
    ],
  },
  {
    term: "Tautology",
    definition:
      "In philosophy and logic, a tautology is a statement that is true by necessity or by virtue of its logical form, not because of any factual content.",
    context: "Example: 'All bachelors are unmarried men' is tautological.",
    category: "Logic",
  },
  {
    term: "A priori",
    definition:
      "Knowledge, justification, or argument that is independent of experience; it can be known through reason alone.",
    context:
      "Example: 'All triangles have three sides' - this can be known without empirical observation.",
    category: "Epistemology",
  },
  {
    term: "A posteriori",
    definition:
      "Knowledge, justification, or argument that depends on empirical evidence or experience.",
    context:
      "Example: 'The sky is blue' - this requires empirical observation to confirm.",
    category: "Epistemology",
  },
  {
    term: "Scientific Racism",
    definition:
      "Scientific racism, sometimes called biological racism, refers to the discredited claim that empirical evidence exists to support or justify racism, racial inferiority, or superiority, often using pseudoscientific methods.",
    context:
      "Practiced from the 18th to 20th centuries, this ideology underpinned colonialism, eugenics, and discrimination, but it has been thoroughly refuted by contemporary genetics and anthropology.",
    category: "Social Philosophy",
  },
  {
    term: "Verificationism",
    definition:
      "Verificationism is a philosophical theory about meaning. It asserts that a statement is meaningful only if it can be empirically verified or is analytically true (i.e., true by definition).",
    context:
      "Associated with logical positivism and the Vienna Circle, it challenged metaphysical and religious claims for being untestable and therefore meaningless.",
    category: "Philosophy of Language",
  },
  {
    term: "Subjective Morality",
    definition:
      "Holds that moral judgments are statements of personal or cultural attitudes, emotions, or conventions; right and wrong depend on individual or societal perspectives.",
    context:
      "Contrasts with objective morality in debates about the nature of ethical truth.",
    category: "Ethics",
  },
  {
    term: "Objective Morality",
    definition:
      "Claims that certain acts are right or wrong independently of human opinions; moral facts exist much like mathematical or physical facts.",
    context:
      "Contrasts with subjective morality in debates about the nature of ethical truth.",
    category: "Ethics",
  },
];

// Philosophical terms for linking (simplified version)
export const philosophicalTerms = [
  { term: "monotheism", definition: "Belief in one God" },
  { term: "polytheism", definition: "Belief in multiple gods" },
  { term: "henotheism", definition: "One god supreme among many" },
  { term: "pantheism", definition: "God as world or immanent in world" },
  { term: "animism", definition: "Souls or spirits in natural phenomena" },
  { term: "transtheism", definition: "Gods may exist but are irrelevant" },
  { term: "atheism", definition: "Denial of any god" },
  { term: "agnosticism", definition: "Uncertainty about gods" },
  { term: "dharma", definition: "Moral duty/cosmic law in Hinduism" },
  { term: "karma", definition: "Action and its consequences" },
  { term: "samsara", definition: "Cycle of rebirth" },
  { term: "moksha", definition: "Liberation from rebirth cycle" },
  { term: "nirvana", definition: "Buddhist liberation from suffering" },
  { term: "brahman", definition: "Ultimate reality in Hinduism" },
  { term: "atman", definition: "Individual soul" },
  { term: "tawḥīd", definition: "Islamic doctrine of God's oneness" },
  { term: "trinity", definition: "Christian doctrine of three-in-one God" },
];

export const comparativeStudies = [
  {
    title: "Religion Comparison Tool",
    url: "/comparative-studies/comparative-religion-study",
    icon: Scale,
  },

  {
    title: "Categories of Religion",
    url: "/comparative-studies/categories",
    icon: AlignLeft,
  },
];

export const correlationAndCaseStudies = [
  {
    title: "Religion & Personalities",
    url: "/comparative-studies/religion-personalities",
    icon: User,
  },
  {
    title: "Religion & Age groups",
    url: "/comparative-studies/religion-age-groups",
    icon: Tally1,
  },
  {
    title: "Religion & Literacy",
    url: "/comparative-studies/religion-literacy",
    icon: Book,
  },
  {
    title: "Religion & God",
    url: "/comparative-studies/religion-god",
    icon: TreePalm,
  },
  {
    title: "Religion & Nationalism",
    url: "/comparative-studies/religion-nationalism",
    icon: Globe,
  },
];

// Religion comparison data for comprehensive analysis
export interface ReligionComparisonData {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  parameters: {
    beliefInGod: string;
    majorDeities: string;
    founder: string;
    timeOfOrigin: string;
    sacredTexts: string;
    scriptureAuthenticity: string;
    numberOfFollowers: string;
    majorBranches: string;
    coreDoctrines: string;
    myths: string;
    ethicalTeachings: string;
    rituals: string;
    socialInstitutions: string;
    innerExperience: string;
    growthDynamics: string;
  };
}

export const religionComparisonData: ReligionComparisonData[] = [
  {
    id: "islam",
    name: "Islam",
    icon: TreePalm,
    parameters: {
      beliefInGod: "Monotheistic (Allah only)",
      majorDeities: "Allah (one God)",
      founder: "Muḥammad (7th c. CE)",
      timeOfOrigin: "7th century CE",
      sacredTexts: "Qur'an; collections of Hadith (Prophet's sayings)",
      scriptureAuthenticity:
        "Highly preserved; earliest manuscripts from 7th-8th c. CE (general scholarly consensus on text)",
      numberOfFollowers: "≈2.0 billion (25.6% of world)",
      majorBranches: "Sunni (85%), Shia (15%); Ibadi, Sufi orders",
      coreDoctrines:
        "Oneness of God (Allah); Five Pillars of Islam (faith, prayer, fasting, alms, hajj); Qur'an is final revelation",
      myths:
        "Stories of Prophets (Adam, Noah, Abraham, Moses, Jesus, Muhammad); Al-Isrā' and Miʿrāj (Muhammad's night journey)",
      ethicalTeachings:
        "Charity (zakat); justice; family values; prohibitions on theft, murder, usury",
      rituals:
        "Five daily prayers; fasting Ramadan; Eid festivals; Ramadan pilgrimage to Mecca; ritual washing (wudu) before prayer",
      socialInstitutions:
        "Mosque and madrasah (religious school); ulama (scholars); historical caliphate or sultanate; Islamic charities",
      innerExperience: "Prayer, recitation of Qur'an",
      growthDynamics:
        "High birthrates (fertility ≈2.9, higher than global 2.5); conversions (e.g. in Africa/Asia); fastest-growing major religion",
    },
  },
  {
    id: "christianity",
    name: "Christianity",
    icon: HandHeart,
    parameters: {
      beliefInGod: "Monotheistic (Trinity of one God)",
      majorDeities: "God (Father, Son, Holy Spirit)",
      founder: "Jesus of Nazareth (1st c. CE)",
      timeOfOrigin: "1st century CE",
      sacredTexts: "Bible (Old Testament + New Testament)",
      scriptureAuthenticity:
        "Multiple manuscript traditions; textual criticism finds minor variants but basic consistency",
      numberOfFollowers: "≈2.3 billion (28.8% of world)",
      majorBranches:
        "Catholic, Eastern Orthodox, Oriental Orthodox, Protestant (Lutheran, Anglican, Baptist, Pentecostal, etc.)",
      coreDoctrines:
        "Trinity (God as Father, Son, Holy Spirit); Jesus' atonement for sin; salvation by faith and grace",
      myths:
        "Biblical narratives (Creation, Exodus, life of Jesus, Resurrection); Acts of the Apostles",
      ethicalTeachings:
        "Love God & neighbor; Ten Commandments; forgiveness; charity; sanctity of life",
      rituals:
        "Baptism; Communion (Eucharist); Sunday worship; Christmas/Easter; prayer; liturgies (e.g. Mass)",
      socialInstitutions:
        "Church (as institution and community); clergy (priests, bishops); schools, hospitals run by churches; monastic orders",
      innerExperience:
        "Personal prayer, contemplation; mystical traditions (e.g. Christian mysticism)",
      growthDynamics:
        "Large base (2.3B); moderate growth (fertility ≈2.7 in Christian-majority regions vs global); conversions (active missionary traditions, but also secular switching away)",
    },
  },
  {
    id: "hinduism",
    name: "Hinduism",
    icon: Leaf,
    parameters: {
      beliefInGod:
        "Polytheistic/henotheistic (many gods; one ultimate Brahman)",
      majorDeities: "Brahmā, Viṣṇu, Śiva, etc. (and their consorts)",
      founder: "No single founder (evolved from Vedic tradition)",
      timeOfOrigin: "Vedic roots ca. 1500–500 BCE",
      sacredTexts: "Vedas, Upanishads, Bhagavad Gita, Purāṇas, etc.",
      scriptureAuthenticity:
        "Vedas orally transmitted (considered śruti); many recensions of other texts",
      numberOfFollowers: "≈1.2 billion (14.9%)",
      majorBranches:
        "Vaishnavism, Shaivism, Shaktism, Smartism (loosely defined); caste-based sects",
      coreDoctrines:
        "Dharma (duty), karma (action), samsara (rebirth), moksha (liberation); law of karma; realization of Brahman",
      myths:
        "Vedic cosmogony; epics Ramayana (Rama) and Mahabharata (Krishna, Bhagavad Gita); Puranic myths of gods",
      ethicalTeachings:
        "Non-violence (ahiṃsā); truth; duty by caste/life stage; hospitality; respect for elders",
      rituals:
        "Daily puja (worship rituals); temple ceremonies; yajña (fire rituals); major festivals (Diwali, Holi, Navaratri); rites of passage (samskaras)",
      socialInstitutions:
        "Temple complexes; Brahmin priesthood; guru-śishya (teacher-disciple) lineages; caste councils (traditionally)",
      innerExperience:
        "Yoga, meditation, darśana (philosophical insight), bhakti (devotion as inner love)",
      growthDynamics:
        "High birthrates in South Asia (fertility ≈2.3–2.5); very low conversion (ethnicity-based faith)",
    },
  },
  {
    id: "buddhism",
    name: "Buddhism",
    icon: Feather,
    parameters: {
      beliefInGod: "Non-theistic (no creator God)",
      majorDeities: "–",
      founder: "Siddhartha Gautama (c. 6th c. BCE)",
      timeOfOrigin: "ca. 6th century BCE",
      sacredTexts: "Pāli Canon (Tipiṭaka), Mahāyāna sūtras",
      scriptureAuthenticity:
        "Ancient texts preserved in Pāli/Tibetan/Chinese versions; historical authenticity debated in places",
      numberOfFollowers: "≈500–520 million (6%)",
      majorBranches:
        "Theravāda, Mahāyāna (Zen, Pure Land, etc.), Vajrayāna (Tibetan)",
      coreDoctrines:
        "Four Noble Truths (suffering & cessation); Eightfold Path; no-self (anatta); karma and rebirth",
      myths:
        "Life of the Buddha (birth, enlightenment, parables); Jātaka tales; various Buddhas and bodhisattvas in Mahāyāna",
      ethicalTeachings:
        "Compassion; non-harm; mindfulness; ethical precepts (e.g. five precepts)",
      rituals:
        "Meditation and chant; temple worship; offerings; festivals like Vesak (Buddha's birth); monastic ordination ceremonies",
      socialInstitutions:
        "Monasteries and sangha; meditation centers; bodhisattva orders (e.g. Dalai Lama as figurehead)",
      innerExperience:
        "Mindfulness/meditation (vipassanā, zazen); koans (Zen); mystical insight (Sunyata in Mahāyāna)",
      growthDynamics:
        "Low birthrates (≈1.6 globally); little net growth (some decline); few converts outside Asia (some Western interest but offset by aging populations)",
    },
  },
  {
    id: "judaism",
    name: "Judaism",
    icon: ShieldCheck,
    parameters: {
      beliefInGod: "Monotheistic (Yahweh only)",
      majorDeities: "Yahweh",
      founder: "Abraham / Moses (ancient)",
      timeOfOrigin:
        "ca. 2nd millennium BCE (patriarchs); codified by 1st millennium BCE",
      sacredTexts: "Hebrew Bible (Tanakh), Talmud",
      scriptureAuthenticity:
        "Tanakh has textual layers (e.g. Dead Sea Scrolls match Masoretic); Talmud compiled c. 5th c. CE",
      numberOfFollowers: "≈14–15 million (0.2%)",
      majorBranches: "Orthodox, Conservative, Reform, Reconstructionist, etc.",
      coreDoctrines:
        "One God, covenantal law (Torah); justice and righteousness; messianism; following commandments (mitzvot)",
      myths:
        "Creation and Flood myths; Exodus from Egypt; stories of patriarchs (Abraham, Jacob, etc.); Prophetic visions",
      ethicalTeachings:
        "Justice and charity (tzedakah); mitzvot governing life; community responsibility",
      rituals:
        "Sabbath observance; synagogue prayers; kosher dietary laws; Passover Seder; Hanukkah lighting; pilgrimage to Jerusalem (historically)",
      socialInstitutions:
        "Synagogues and yeshivot (schools); rabbinic courts; community councils; historical Sanhedrin (ancient)",
      innerExperience:
        "Study of Torah as spiritual practice; personal prayer; mysticism (Kabbalah)",
      growthDynamics:
        "Low overall fertility (≈2.0) and assimilation; modest growth; some returns to religion in Israel vs assimilation/secular trends in diaspora",
    },
  },
  {
    id: "atheism",
    name: "Atheism/Agnosticism",
    icon: MessageCircle,
    parameters: {
      beliefInGod: "None (no belief)",
      majorDeities: "–",
      founder: "–",
      timeOfOrigin: "Modern (term 18th-19th c.)",
      sacredTexts: "None",
      scriptureAuthenticity: "n/a",
      numberOfFollowers:
        "~1.9 billion unaffiliated (24.2%) (atheists are a subset)",
      majorBranches: "n/a (no formal sects)",
      coreDoctrines:
        "No deity; reliance on reason/science; morality often humanistic (e.g. utilitarian ethics)",
      myths:
        "– (some secular origin stories or progress narratives, but no unified mythos)",
      ethicalTeachings:
        "Values vary; often empathy, fairness, secular human rights; social ethics derived from empathy and reason",
      rituals:
        "None by definition; some hold secular ceremonies for life events",
      socialInstitutions:
        "Civil society institutions (state schools, secular charities, scientific bodies)",
      innerExperience:
        "Personal reason, science and aesthetics (no spiritual practice per se)",
      growthDynamics:
        "Growth tied to secularization; significant in East Asia/Europe; birthrate disadvantage; rising especially among youth (Nones)",
    },
  },
];

export const comparisonParameters = [
  { id: "beliefInGod", label: "Belief in God", category: "Core Beliefs" },
  { id: "majorDeities", label: "Major Deities", category: "Core Beliefs" },
  {
    id: "founder",
    label: "Founder / Key Figure",
    category: "Historical Origins",
  },
  {
    id: "timeOfOrigin",
    label: "Time of Origin",
    category: "Historical Origins",
  },
  {
    id: "sacredTexts",
    label: "Sacred Texts",
    category: "Scripture & Authority",
  },
  {
    id: "scriptureAuthenticity",
    label: "Scripture Authenticity",
    category: "Scripture & Authority",
  },
  {
    id: "numberOfFollowers",
    label: "Number of Followers",
    category: "Demographics",
  },
  {
    id: "majorBranches",
    label: "Major Branches/Denominations",
    category: "Organization",
  },
  { id: "coreDoctrines", label: "Core Doctrines", category: "Core Beliefs" },
  { id: "myths", label: "Myths/Narratives", category: "Culture & Stories" },
  {
    id: "ethicalTeachings",
    label: "Ethical Teachings",
    category: "Ethics & Morality",
  },
  { id: "rituals", label: "Rituals", category: "Practice & Worship" },
  {
    id: "socialInstitutions",
    label: "Social Institutions",
    category: "Organization",
  },
  {
    id: "innerExperience",
    label: "Inner Experience Emphasis",
    category: "Practice & Worship",
  },
  { id: "growthDynamics", label: "Growth Dynamics", category: "Demographics" },
];
