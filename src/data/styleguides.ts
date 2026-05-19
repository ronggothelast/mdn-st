// Design tokens for each Company Profile style.
// Used to render per-style design system pages at /styleguide/[id].
// Visual language differs per style; brand stays Madani (navy/teal/tan/cream family).

export interface StyleTokens {
  num: number;
  name: string;
  description: string;
  vibe: string;
  // Light mode colors
  bg: string;          // page background
  surface: string;     // card / surface bg
  ink: string;         // primary text
  muted: string;       // secondary text
  primary: string;     // primary brand
  accent: string;      // secondary accent
  highlight: string;   // tertiary / decorative
  border: string;      // dividers / borders
  // Dark mode colors (paired)
  darkBg: string;
  darkSurface: string;
  darkInk: string;
  darkMuted: string;
  darkPrimary: string;
  darkAccent: string;
  darkHighlight: string;
  darkBorder: string;
  // Typography
  fontHeading: string; // CSS font-family
  fontBody: string;
  fontMono: string;
  headingWeight: number;
  headingTransform: 'none' | 'uppercase';
  headingTracking: string; // letter-spacing
  // Components
  radius: string;      // border-radius for cards/buttons (e.g. '0px', '4px', '999px')
  buttonRadius: string;
  buttonStyle: 'solid' | 'outline' | 'ghost' | 'sharp' | 'pill';
  shadow: string;      // box-shadow for cards
  borderWidth: string; // '1px' | '2px' | '0'
  // Section meta
  sectionPadding: string;
  containerMax: string;
}

export const styleguides: StyleTokens[] = [
  {
    num: 1,
    name: 'Editorial Report',
    description: 'Annual report style. Formal, structured, hierarchical.',
    vibe: 'Like a corporate annual report. Roman numeral sections, dropcap paragraphs, dotted contents.',
    bg: '#FAF6EC', surface: '#FFFFFF', ink: '#1A2E4A', muted: '#5C6B7E',
    primary: '#1A2E4A', accent: '#3D8F8A', highlight: '#C9A876', border: '#C9A876',
    darkBg: '#0F1B2D', darkSurface: '#1A2E4A', darkInk: '#FAF6EC', darkMuted: '#9CB0CC',
    darkPrimary: '#FAF6EC', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#3D5A85',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Fraunces', Georgia, serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 500, headingTransform: 'none', headingTracking: '-0.02em',
    radius: '0px', buttonRadius: '0px', buttonStyle: 'sharp',
    shadow: 'none', borderWidth: '1px', sectionPadding: '8rem', containerMax: '64rem',
  },
  {
    num: 2,
    name: 'Boutique Consulting',
    description: 'Bain/McKinsey vibe. Crisp, structured, executive.',
    vibe: 'Strategy firm aesthetic. Heavy structure, charts feel, navy and white.',
    bg: '#FFFFFF', surface: '#FAF6EC', ink: '#1A2E4A', muted: '#5C6B7E',
    primary: '#1A2E4A', accent: '#3D8F8A', highlight: '#C9A876', border: '#E2E6EC',
    darkBg: '#0E1726', darkSurface: '#172238', darkInk: '#F5F7FA', darkMuted: '#9CB0CC',
    darkPrimary: '#F5F7FA', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#2C3F5F',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 600, headingTransform: 'none', headingTracking: '-0.025em',
    radius: '4px', buttonRadius: '4px', buttonStyle: 'solid',
    shadow: '0 1px 3px rgba(26,46,74,0.06)', borderWidth: '1px', sectionPadding: '6rem', containerMax: '72rem',
  },
  {
    num: 3,
    name: 'White Paper',
    description: 'Research document. Print-friendly, serif, navy on cream.',
    vibe: 'Academic research paper. Long form serif, footnotes feel, sober palette.',
    bg: '#F5EFDF', surface: '#FAF6EC', ink: '#1A2E4A', muted: '#5C6B7E',
    primary: '#1A2E4A', accent: '#3D8F8A', highlight: '#C9A876', border: '#1A2E4A',
    darkBg: '#1B1610', darkSurface: '#26201A', darkInk: '#F5EFDF', darkMuted: '#A89A82',
    darkPrimary: '#F5EFDF', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#3A2F22',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Fraunces', Georgia, serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 500, headingTransform: 'none', headingTracking: '-0.01em',
    radius: '0px', buttonRadius: '2px', buttonStyle: 'outline',
    shadow: 'none', borderWidth: '1px', sectionPadding: '7rem', containerMax: '56rem',
  },
  {
    num: 4,
    name: 'Magazine Feature',
    description: 'Editorial magazine. Big imagery, drop caps, long-form.',
    vibe: 'NatGeo / Monocle. Bold serif headers, generous photo treatment.',
    bg: '#FDFCF8', surface: '#FAF6EC', ink: '#1A2E4A', muted: '#5C6B7E',
    primary: '#1A2E4A', accent: '#A04545', highlight: '#C9A876', border: '#1A2E4A',
    darkBg: '#0E1726', darkSurface: '#1A2E4A', darkInk: '#FDFCF8', darkMuted: '#9CB0CC',
    darkPrimary: '#FDFCF8', darkAccent: '#D87878', darkHighlight: '#C9A876', darkBorder: '#FDFCF8',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 700, headingTransform: 'none', headingTracking: '-0.03em',
    radius: '0px', buttonRadius: '0px', buttonStyle: 'sharp',
    shadow: 'none', borderWidth: '2px', sectionPadding: '8rem', containerMax: '76rem',
  },
  {
    num: 5,
    name: 'Sustainability Brief',
    description: 'Foundation/NGO impact report. Teal-led, infographic.',
    vibe: 'Gates Foundation report. Stat blocks, teal accents, hopeful.',
    bg: '#FDFCF8', surface: '#FFFFFF', ink: '#1A2E4A', muted: '#5C6B7E',
    primary: '#3D8F8A', accent: '#1A2E4A', highlight: '#5BAFA9', border: '#3D8F8A',
    darkBg: '#0A1F1E', darkSurface: '#143432', darkInk: '#E8F5F4', darkMuted: '#8FB5B2',
    darkPrimary: '#5BAFA9', darkAccent: '#E8F5F4', darkHighlight: '#7DCFC9', darkBorder: '#2A5854',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 700, headingTransform: 'none', headingTracking: '-0.02em',
    radius: '12px', buttonRadius: '999px', buttonStyle: 'pill',
    shadow: '0 4px 24px rgba(61,143,138,0.12)', borderWidth: '0', sectionPadding: '6rem', containerMax: '72rem',
  },
  {
    num: 6,
    name: 'Heritage Document',
    description: 'Indonesian classical elegance. Borobudur monograph.',
    vibe: 'Warm cream paper, gold-tan ornaments, serif-led, slow.',
    bg: '#F5EBD5', surface: '#FAF6EC', ink: '#1A2E4A', muted: '#7A6B4F',
    primary: '#1A2E4A', accent: '#C9A876', highlight: '#A88456', border: '#C9A876',
    darkBg: '#1F1810', darkSurface: '#2D2419', darkInk: '#F5EBD5', darkMuted: '#A89A82',
    darkPrimary: '#C9A876', darkAccent: '#E8C896', darkHighlight: '#A88456', darkBorder: '#5C4A2E',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Fraunces', Georgia, serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 500, headingTransform: 'none', headingTracking: '-0.01em',
    radius: '0px', buttonRadius: '0px', buttonStyle: 'sharp',
    shadow: 'none', borderWidth: '1px', sectionPadding: '8rem', containerMax: '60rem',
  },
  {
    num: 7,
    name: 'Modern Foundation',
    description: 'Crisp philanthropic. Open Society / Ford Foundation feel.',
    vibe: 'Modern, photo-led, minimal chrome, navy + cream.',
    bg: '#FDFCF8', surface: '#FFFFFF', ink: '#1A2E4A', muted: '#5C6B7E',
    primary: '#1A2E4A', accent: '#3D8F8A', highlight: '#C9A876', border: '#E2E6EC',
    darkBg: '#0F1B2D', darkSurface: '#1A2E4A', darkInk: '#FDFCF8', darkMuted: '#9CB0CC',
    darkPrimary: '#FDFCF8', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#2C3F5F',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 600, headingTransform: 'none', headingTracking: '-0.025em',
    radius: '8px', buttonRadius: '8px', buttonStyle: 'solid',
    shadow: '0 1px 2px rgba(26,46,74,0.05)', borderWidth: '1px', sectionPadding: '7rem', containerMax: '72rem',
  },
  {
    num: 8,
    name: 'Community Story',
    description: 'Photo-led narrative. Warm earthy palette.',
    vibe: 'Storytelling, earthy, intimate. Image-first, captions matter.',
    bg: '#F5EBD5', surface: '#FAF6EC', ink: '#3A2E1F', muted: '#7A6B4F',
    primary: '#1A2E4A', accent: '#A04545', highlight: '#C9A876', border: '#C9A876',
    darkBg: '#1A140C', darkSurface: '#2A2118', darkInk: '#F5EBD5', darkMuted: '#A89A82',
    darkPrimary: '#5BAFA9', darkAccent: '#D87878', darkHighlight: '#C9A876', darkBorder: '#5C4A2E',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 500, headingTransform: 'none', headingTracking: '-0.02em',
    radius: '4px', buttonRadius: '4px', buttonStyle: 'outline',
    shadow: '0 2px 12px rgba(58,46,31,0.08)', borderWidth: '1px', sectionPadding: '7rem', containerMax: '68rem',
  },
  {
    num: 9,
    name: 'Strategic Brief',
    description: 'Pitch-deck inspired. Dense, executive, deep navy.',
    vibe: 'Investor deck. Numbered sections, big stats, navy dominance.',
    bg: '#1A2E4A', surface: '#22395C', ink: '#FAF6EC', muted: '#9CB0CC',
    primary: '#C9A876', accent: '#3D8F8A', highlight: '#5BAFA9', border: '#3D5A85',
    darkBg: '#080F1A', darkSurface: '#0F1B2D', darkInk: '#FAF6EC', darkMuted: '#7A8FA8',
    darkPrimary: '#E8C896', darkAccent: '#5BAFA9', darkHighlight: '#7DCFC9', darkBorder: '#1F3358',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 700, headingTransform: 'none', headingTracking: '-0.03em',
    radius: '6px', buttonRadius: '6px', buttonStyle: 'solid',
    shadow: '0 8px 32px rgba(0,0,0,0.3)', borderWidth: '1px', sectionPadding: '7rem', containerMax: '76rem',
  },
  {
    num: 10,
    name: 'Premium Folio',
    description: 'Coffee-table book. Large imagery, gold-tan accents.',
    vibe: 'Luxury monograph. Generous space, cinematic photo, restrained type.',
    bg: '#FAF6EC', surface: '#FFFFFF', ink: '#1A2E4A', muted: '#7A6B4F',
    primary: '#C9A876', accent: '#1A2E4A', highlight: '#A88456', border: '#C9A876',
    darkBg: '#0F0B05', darkSurface: '#1F180D', darkInk: '#FAF6EC', darkMuted: '#A89A82',
    darkPrimary: '#E8C896', darkAccent: '#FAF6EC', darkHighlight: '#C9A876', darkBorder: '#3D2F18',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 400, headingTransform: 'none', headingTracking: '-0.02em',
    radius: '0px', buttonRadius: '0px', buttonStyle: 'sharp',
    shadow: 'none', borderWidth: '1px', sectionPadding: '9rem', containerMax: '76rem',
  },
  // ========================================================================
  // V2 — White-dominant collection (id 11-20)
  // Brief: client wants 10 more variants with dominant white backgrounds.
  // All keep Madani brand DNA (navy/teal/tan) but applied as accents only.
  // Each one explores a distinct elegant white-canvas direction.
  // ========================================================================
  {
    num: 11,
    name: 'Swiss Minimal',
    description: 'Pure white canvas. Helvetica grids, sharp typography.',
    vibe: 'Vignelli / Müller-Brockmann. Asymmetric grid, hairline rules, navy on white.',
    bg: '#FFFFFF', surface: '#FFFFFF', ink: '#0E1726', muted: '#6B7280',
    primary: '#0E1726', accent: '#3D8F8A', highlight: '#C9A876', border: '#0E1726',
    darkBg: '#0E1726', darkSurface: '#FFFFFF', darkInk: '#FFFFFF', darkMuted: '#9CA3AF',
    darkPrimary: '#FFFFFF', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#FFFFFF',
    fontHeading: "'Inter', Helvetica, sans-serif",
    fontBody: "'Inter', Helvetica, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 700, headingTransform: 'none', headingTracking: '-0.04em',
    radius: '0px', buttonRadius: '0px', buttonStyle: 'sharp',
    shadow: 'none', borderWidth: '1px', sectionPadding: '7rem', containerMax: '76rem',
  },
  {
    num: 12,
    name: 'Linear Mono',
    description: 'Mono-typographic. White, single-color editorial restraint.',
    vibe: 'Linear app / Vercel docs. Single accent, dense info, monospace numbers.',
    bg: '#FFFFFF', surface: '#FAFAFA', ink: '#1A2E4A', muted: '#71717A',
    primary: '#1A2E4A', accent: '#3D8F8A', highlight: '#1A2E4A', border: '#E4E4E7',
    darkBg: '#0A0A0A', darkSurface: '#171717', darkInk: '#FAFAFA', darkMuted: '#A1A1AA',
    darkPrimary: '#FAFAFA', darkAccent: '#5BAFA9', darkHighlight: '#FAFAFA', darkBorder: '#262626',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 500, headingTransform: 'none', headingTracking: '-0.025em',
    radius: '6px', buttonRadius: '6px', buttonStyle: 'solid',
    shadow: '0 0 0 1px rgba(0,0,0,0.04)', borderWidth: '1px', sectionPadding: '6rem', containerMax: '70rem',
  },
  {
    num: 13,
    name: 'Glass Atelier',
    description: 'Soft glass cards on white. Subtle gradients, ultra-light.',
    vibe: 'Apple / Stripe landing. Soft shadows, frosted feel, navy headlines.',
    bg: '#FFFFFF', surface: '#F8FAFC', ink: '#1A2E4A', muted: '#64748B',
    primary: '#1A2E4A', accent: '#3D8F8A', highlight: '#C9A876', border: '#E2E8F0',
    darkBg: '#0F172A', darkSurface: '#1E293B', darkInk: '#F1F5F9', darkMuted: '#94A3B8',
    darkPrimary: '#F1F5F9', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#334155',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 600, headingTransform: 'none', headingTracking: '-0.03em',
    radius: '16px', buttonRadius: '999px', buttonStyle: 'pill',
    shadow: '0 8px 32px rgba(15,23,42,0.06)', borderWidth: '1px', sectionPadding: '7rem', containerMax: '74rem',
  },
  {
    num: 14,
    name: 'Quiet Serif',
    description: 'White paper, large serif headlines, soft text.',
    vibe: 'Aesop / NYT Magazine. Whisper quiet, generous space, italic flourishes.',
    bg: '#FFFFFF', surface: '#FCFCFA', ink: '#2A3340', muted: '#8B95A1',
    primary: '#2A3340', accent: '#A04545', highlight: '#C9A876', border: '#EAEAE5',
    darkBg: '#1A1A1A', darkSurface: '#252525', darkInk: '#F5F1EB', darkMuted: '#9CA3AF',
    darkPrimary: '#F5F1EB', darkAccent: '#D87878', darkHighlight: '#C9A876', darkBorder: '#3A3A3A',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Fraunces', Georgia, serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 400, headingTransform: 'none', headingTracking: '-0.02em',
    radius: '0px', buttonRadius: '2px', buttonStyle: 'outline',
    shadow: 'none', borderWidth: '1px', sectionPadding: '8rem', containerMax: '64rem',
  },
  {
    num: 15,
    name: 'Architect Brief',
    description: 'Technical white. Drafting blueprint feel, mono labels.',
    vibe: 'OMA / Vitra brochure. Hairline rules, drafting marks, navy ink.',
    bg: '#FFFFFF', surface: '#FFFFFF', ink: '#0F1B2D', muted: '#475569',
    primary: '#0F1B2D', accent: '#3D8F8A', highlight: '#C9A876', border: '#0F1B2D',
    darkBg: '#0F1B2D', darkSurface: '#FFFFFF', darkInk: '#FFFFFF', darkMuted: '#94A3B8',
    darkPrimary: '#FFFFFF', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#FFFFFF',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 500, headingTransform: 'none', headingTracking: '-0.02em',
    radius: '0px', buttonRadius: '0px', buttonStyle: 'sharp',
    shadow: 'none', borderWidth: '1px', sectionPadding: '7rem', containerMax: '72rem',
  },
  {
    num: 16,
    name: 'Pearl Boutique',
    description: 'Soft pearl whites with rose-gold accents. Refined femininity.',
    vibe: 'Hermès / Loewe brochure. Quiet warmth, restraint, gold lines.',
    bg: '#FFFFFF', surface: '#FAF8F5', ink: '#2D2520', muted: '#8C7A6B',
    primary: '#2D2520', accent: '#C9A876', highlight: '#A88456', border: '#E8DECF',
    darkBg: '#1F1A15', darkSurface: '#2A241E', darkInk: '#F5EBD5', darkMuted: '#A89A82',
    darkPrimary: '#F5EBD5', darkAccent: '#E8C896', darkHighlight: '#C9A876', darkBorder: '#4A3F32',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 400, headingTransform: 'none', headingTracking: '-0.015em',
    radius: '2px', buttonRadius: '0px', buttonStyle: 'outline',
    shadow: '0 1px 0 rgba(201,168,118,0.15)', borderWidth: '1px', sectionPadding: '8rem', containerMax: '68rem',
  },
  {
    num: 17,
    name: 'Notion Clean',
    description: 'Doc-style white. Reading-first, tight rules, scan-friendly.',
    vibe: 'Notion / Substack post. Calm, readable, hierarchy via whitespace.',
    bg: '#FFFFFF', surface: '#FBFBFA', ink: '#37352F', muted: '#787774',
    primary: '#1A2E4A', accent: '#3D8F8A', highlight: '#C9A876', border: '#E9E9E7',
    darkBg: '#191919', darkSurface: '#252525', darkInk: '#E9E9E7', darkMuted: '#9B9A97',
    darkPrimary: '#E9E9E7', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#373737',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 700, headingTransform: 'none', headingTracking: '-0.02em',
    radius: '4px', buttonRadius: '4px', buttonStyle: 'outline',
    shadow: 'none', borderWidth: '1px', sectionPadding: '5rem', containerMax: '52rem',
  },
  {
    num: 18,
    name: 'Gallery White',
    description: 'Museum white walls. Tiny captions, big breathing room.',
    vibe: 'MoMA / V&A exhibition catalog. Clinical white, label cards, restraint.',
    bg: '#FFFFFF', surface: '#FFFFFF', ink: '#1A2E4A', muted: '#9CA3AF',
    primary: '#1A2E4A', accent: '#A04545', highlight: '#C9A876', border: '#F3F4F6',
    darkBg: '#0F1B2D', darkSurface: '#1A2E4A', darkInk: '#FFFFFF', darkMuted: '#9CA3AF',
    darkPrimary: '#FFFFFF', darkAccent: '#D87878', darkHighlight: '#C9A876', darkBorder: '#1F2937',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 300, headingTransform: 'none', headingTracking: '-0.025em',
    radius: '0px', buttonRadius: '0px', buttonStyle: 'sharp',
    shadow: 'none', borderWidth: '1px', sectionPadding: '10rem', containerMax: '70rem',
  },
  {
    num: 19,
    name: 'Linen Sage',
    description: 'Cotton white with sage-teal accents. Calm, grounded.',
    vibe: 'Boutique hotel collateral. Soft warmth, breathing layouts, gentle teal.',
    bg: '#FFFFFF', surface: '#F7F8F6', ink: '#2A3F3D', muted: '#6B7B7A',
    primary: '#2A3F3D', accent: '#3D8F8A', highlight: '#C9A876', border: '#E1E5E1',
    darkBg: '#0E1716', darkSurface: '#1A2625', darkInk: '#E8F5F4', darkMuted: '#8FB5B2',
    darkPrimary: '#E8F5F4', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#2A3D3C',
    fontHeading: "'Fraunces', Georgia, serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 500, headingTransform: 'none', headingTracking: '-0.018em',
    radius: '8px', buttonRadius: '999px', buttonStyle: 'pill',
    shadow: '0 2px 8px rgba(42,63,61,0.04)', borderWidth: '1px', sectionPadding: '7rem', containerMax: '70rem',
  },
  {
    num: 20,
    name: 'Executive White',
    description: 'Bright corporate white. Crisp navy headers, sharp tables.',
    vibe: 'KPMG / Big-4 white-cover deck. Sharp, confident, data-led.',
    bg: '#FFFFFF', surface: '#FFFFFF', ink: '#1A2E4A', muted: '#4A5568',
    primary: '#1A2E4A', accent: '#3D8F8A', highlight: '#C9A876', border: '#CBD5E1',
    darkBg: '#0E1726', darkSurface: '#172238', darkInk: '#F8FAFC', darkMuted: '#9CB0CC',
    darkPrimary: '#F8FAFC', darkAccent: '#5BAFA9', darkHighlight: '#C9A876', darkBorder: '#2C3F5F',
    fontHeading: "'Inter', system-ui, sans-serif",
    fontBody: "'Inter', system-ui, sans-serif",
    fontMono: "'JetBrains Mono', monospace",
    headingWeight: 700, headingTransform: 'uppercase', headingTracking: '-0.01em',
    radius: '2px', buttonRadius: '2px', buttonStyle: 'solid',
    shadow: '0 1px 2px rgba(26,46,74,0.08)', borderWidth: '1px', sectionPadding: '6rem', containerMax: '76rem',
  },
];

export const getStyleById = (id: number): StyleTokens | undefined =>
  styleguides.find((s) => s.num === id);
