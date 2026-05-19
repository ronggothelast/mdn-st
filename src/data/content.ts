// Central content store — bilingual EN/ID
// SOURCED VERBATIM from:
// - MaGies_Website_Copywriting_v1.docx (Bilingual Draft v1.0, May 2026)
// - MaGies_Company_Profile_Draft_v1.md.docx
// DO NOT paraphrase. Copy is approved by client.

export type Lang = 'en' | 'id';

// ────────────── BRAND ──────────────
export const brand = {
  name: 'Madani Strategies',
  shortName: 'MaGies',
  affiliation: {
    en: 'Affiliated with Yayasan Madani Berkelanjutan',
    id: 'Berafiliasi dengan Yayasan Madani Berkelanjutan',
  },
  tagline: {
    en: 'Connecting Growth to Community Impact',
    id: 'Menghubungkan Pertumbuhan ke Dampak Komunitas',
  },
  taglineLong: {
    en: 'Strategic impact consultancy connecting corporate growth to verifiable community outcomes.',
    id: 'Konsultansi dampak strategis yang menghubungkan pertumbuhan korporat dengan dampak komunitas yang terverifikasi.',
  },
  email: 'hello@madanistrategies.com',
  phone: '+62 813-1434-4485',
  web: 'www.madanistrategies.com',
  address: {
    en: 'Jl. Mesjid Al Hidayah No.14A, Pasar Minggu, South Jakarta 12520',
    id: 'Jl. Mesjid Al Hidayah No.14A, Pasar Minggu, Jakarta Selatan 12520',
  },
  legal: {
    en: '© 2026 Madani Strategies. Affiliated with Yayasan Madani Berkelanjutan. All rights reserved.',
    id: '© 2026 Madani Strategies. Berafiliasi dengan Yayasan Madani Berkelanjutan. Hak cipta dilindungi.',
  },
};

export const nav = [
  { href: '/',         label: { en: 'Home',            id: 'Beranda' } },
  { href: '/services', label: { en: 'Services',        id: 'Layanan' } },
  { href: '/impact',   label: { en: 'Impact',          id: 'Dampak' } },
  { href: '/about',    label: { en: 'About',           id: 'Tentang' } },
  { href: '/profile',  label: { en: 'Company Profile', id: 'Profil Perusahaan' } },
];

// ────────────── HOME · HERO ──────────────
export const hero = {
  eyebrow: { en: 'Strategic Impact Consultancy', id: 'Konsultansi Dampak Strategis' },
  headline: {
    en: 'Transforming Social Risk Into Strategic Advantage.',
    id: 'Transformasi Risiko Sosial untuk Menjadi Aset Strategis.',
  },
  subheadline: {
    en: 'Madani Strategies helps organizations that relate with natural resources navigate their social complexity, regulatory pressure, and community dynamics. So decisions are grounded in field reality, not assumptions.',
    id: 'Madani Strategies membantu organisasi yang bekerja dengan sumber daya alam untuk menavigasi kompleksitas sosial, tekanan regulasi, dan dinamika komunitas. Sehingga keputusan berpijak pada realitas lapangan, bukan asumsi.',
  },
  ctaPrimary:   { en: 'Discuss Your Challenge', id: 'Diskusikan Tantangan Anda' },
  ctaSecondary: { en: 'Our Approach',           id: 'Pendekatan Kami' },
};

export const stats = [
  { num: '20+',  label: { en: 'Years field experience',     id: 'Tahun pengalaman lapangan' } },
  { num: '400+', label: { en: 'Smallholder farmers engaged', id: 'Petani kecil yang terlibat' } },
  { num: '100K', label: { en: 'Community beneficiaries',     id: 'Penerima manfaat komunitas' } },
];

export const heroQuote = {
  en: 'Fifteen years working with farmers, in government offices, in communities that push back. We learn what actually moves people. We learn the difference between real pressure and noise. That matters more than knowing the latest regulation, because regulations change.',
  id: 'Lima belas tahun bekerja bersama petani, di kantor-kantor pemerintah, di komunitas yang menolak. Kami belajar apa yang sebenarnya menggerakkan orang. Kami belajar membedakan tekanan nyata dan keributan. Itu lebih penting daripada mengetahui regulasi terbaru, karena regulasi selalu berubah.',
};

// ────────────── HOME · WHY MAGIES ──────────────
export const valueProp = {
  tag:      { en: 'Why MaGies', id: 'Mengapa MaGies' },
  headline: {
    en: 'Consulting that starts in the field, not the boardroom.',
    id: 'Konsultansi yang dimulai dari lapangan, bukan ruang rapat.',
  },
  body: {
    en: 'Most sustainability consultancies build frameworks first and visit communities second. We do the opposite. Our analysis comes from years of direct engagement with smallholder farmers, local governments, and forest communities. That grounding is what makes our recommendations actionable.',
    id: 'Sebagian besar konsultansi keberlanjutan membangun kerangka kerja terlebih dahulu, baru mengunjungi komunitas. Kami melakukan sebaliknya. Analisis kami lahir dari keterlibatan langsung bertahun-tahun bersama petani kecil, pemerintah daerah, dan komunitas masyarakat di dalam dan sekitar hutan. Itulah yang membuat rekomendasi kami bisa dijalankan, bukan sekadar dokumen.',
  },
};

export const valueCards = [
  {
    title: { en: 'Translator in the Middle', id: 'Memahami Risiko Strategis' },
    body: {
      en: 'We turn community dynamics and power relations into the language of business risk and strategic implication so your management can understand and act on it.',
      id: 'Kami mengubah dinamika komunitas dan relasi kuasa menjadi bahasa risiko bisnis dan implikasi strategis agar manajemen Anda bisa memahami lalu kemudian bertindak.',
    },
  },
  {
    title: { en: 'Analysis Paired with Intervention', id: 'Analisis yang Disertai Intervensi' },
    body: {
      en: 'Our recommendations are designed to be tested through real, small-scale interventions before wide implementation. You validate before you commit.',
      id: 'Rekomendasi kami dirancang untuk diuji melalui intervensi nyata berskala kecil sebelum diterapkan secara luas. Anda validasi sebelum berkomitmen.',
    },
  },
  {
    title: { en: 'Grounded in Real Work', id: 'Berakar pada Kerja Nyata' },
    body: {
      en: "We don't arrive with new theories, instead our team bring 20+ years of on-ground work in advocacy, policy, and community programs across Indonesia.",
      id: 'Kami tidak datang dengan teori baru, namun tim kami membawa 20+ tahun kerja lapangan dalam advokasi, kebijakan, dan program komunitas di seluruh Indonesia.',
    },
  },
];

// ────────────── SERVICES PAGE ──────────────
export const servicesIntro = {
  tag: { en: 'What We Do', id: 'Layanan Kami' },
  headline: {
    en: 'Three integrated services. One coherent strategy.',
    id: 'Tiga layanan terintegrasi. Satu strategi yang koheren.',
  },
  body: {
    en: 'Each service builds on the others. Our work is not about isolated reports, we deliver connected interventions designed to move from insight to impact.',
    id: 'Setiap layanan saling menguatkan. Kerja kami bukan soal menyusun laporan, kami menghadirkan intervensi yang terhubung, dari wawasan hingga dampak nyata.',
  },
};

export const services = [
  {
    num: '01',
    image: '/assets/images/service-consulting.webp',
    title: {
      en: 'Strategic Impact Consulting',
      id: 'Konsultansi Dampak Strategis',
    },
    tagline: {
      en: 'Identify social risk before it becomes operational cost.',
      id: 'Identifikasi risiko sosial sebelum menjadi biaya operasional.',
    },
    body: {
      en: 'From sustainable supply-chain readiness to conservation compliance strategy, we map what regulators and communities will demand and help you get there. Our analysis translates field complexity into decisions your management team can act on.',
      id: 'Dari kesiapan keberlanjutan rantai pasok hingga strategi konservasi ekosistem, kami memetakan apa yang dibutuhkan pasar, regulator maupun komunitas. Kami membantu Anda untuk mencapainya. Analisis kami mengubah kompleksitas lapangan menjadi keputusan yang bisa dijalankan tim manajemen Anda.',
    },
    short: {
      en: 'Manage social and environmental risks that affect your license to operate. Navigate regulatory complexity and align profit with social responsibility.',
      id: 'Mengelola risiko sosial dan lingkungan yang memengaruhi izin operasi Anda. Menavigasi kompleksitas regulasi dan menyelaraskan profit dengan tanggung jawab sosial.',
    },
    expertise: [
      { en: 'Sustainable supply-chain system',                       id: 'Sistem rantai pasok yang berkelanjutan' },
      { en: 'Biodiversity & conservation strategy',                  id: 'Strategi konservasi dan keanekaragaman hayati' },
      { en: 'Social risk mapping & community conflict assessment',   id: 'Pemetaan risiko sosial & asesmen konflik komunitas' },
      { en: 'ESG framework development grounded in local context',   id: 'Pengembangan kerangka ESG berbasis konteks lokal' },
    ],
    tags: {
      en: ['Sustainability', 'Biodiversity', 'Social Risk', 'ESG', 'Supply Chain'],
      id: ['Keberlanjutan', 'Konservasi', 'Risiko Sosial', 'ESG', 'Rantai Pasok'],
    },
    detail: {
      en: [
        'We help organizations manage social and environmental risks that affect their license to operate. This includes navigating regulatory complexity (changing environmental laws, trade requirements, governance standards), understanding community concerns and their business implications, and designing strategies that align profit with social responsibility.',
        'We have worked with businesses facing major regulatory shifts, helping them understand the implications for their supply chains and operations. We have supported organizations managing community relationships in sensitive contexts, translating community concerns into business language and designing interventions that address legitimate grievances while protecting operational continuity.',
      ],
      id: [
        'Kami membantu organisasi mengelola risiko sosial dan lingkungan yang memengaruhi izin operasinya. Ini meliputi menavigasi kompleksitas regulasi (perubahan hukum lingkungan, persyaratan perdagangan, standar tata kelola), memahami kekhawatiran komunitas dan implikasi bisnisnya, serta merancang strategi yang menyelaraskan profit dengan tanggung jawab sosial.',
        'Kami telah bekerja dengan perusahaan yang menghadapi perubahan regulasi besar, membantu mereka memahami implikasi pada rantai pasok dan operasi. Kami juga mendampingi organisasi mengelola hubungan komunitas dalam konteks sensitif, menerjemahkan kekhawatiran komunitas ke dalam bahasa bisnis dan merancang intervensi yang menjawab keluhan sah sekaligus menjaga kelangsungan operasi.',
      ],
    },
  },
  {
    num: '02',
    image: '/assets/images/service-trade.webp',
    title: {
      en: 'Enabling Trade & Market Access',
      id: 'Penguatan Perniagaan & Akses Pasar',
    },
    tagline: {
      en: 'Unlocking Broader Market Access for Community-Based Commodities.',
      id: 'Membuka pintu akses pasar yang lebih besar bagi komoditas berbasis komunitas.',
    },
    body: {
      en: 'We build the market linkages that create real economic independence for local producers. From scoping to deal structure to ongoing relationship management, we handle the bridge between local production and broader market.',
      id: 'Kami membangun koneksi pasar yang menciptakan kemandirian ekonomi nyata bagi produsen lokal. Dari pemetaan peluang hingga struktur kesepakatan dan manajemen hubungan berkelanjutan. Kami membangun keterhubungan antara produksi lokal dan pasar yang lebih luas.',
    },
    short: {
      en: 'Connect community producers to broader markets. Build supply chain partnerships that reward both buyers and producers fairly.',
      id: 'Menghubungkan produsen komunitas ke pasar yang lebih luas. Membangun kemitraan rantai pasok yang adil bagi pembeli dan produsen.',
    },
    expertise: [
      { en: 'Market linkage design for community-managed commodities', id: 'Desain koneksi pasar untuk komoditas kelola masyarakat' },
      { en: 'Fair and sustainable trade model development',            id: 'Pengembangan model perdagangan yang adil dan berkelanjutan' },
      { en: 'CSR-to-impact platform (Platform PADI: padisolutions.com)', id: 'Platform CSR-ke-dampak (Platform PADI: padisolutions.com)' },
      { en: 'Local commodity value chain development',                  id: 'Pengembangan rantai nilai komoditas lokal' },
    ],
    tags: {
      en: ['Market Linkage', 'Local Commodities', 'PADI', 'Fair Trade'],
      id: ['Koneksi Pasar', 'Komoditas Lokal', 'PADI', 'Fair Trade'],
    },
    detail: {
      en: [
        'We help communities and social enterprises access broader markets and build sustainable livelihoods. This means connecting producers to buyers, strengthening quality and reliability, and designing trade relationships that reward both parties fairly.',
        'We have built market systems for community-led enterprises, working with smallholder producers and traders to move from subsistence production to market engagement. We have designed supply chain partnerships that benefit both corporate buyers and local producers, creating shared value where both parties gain.',
      ],
      id: [
        'Kami membantu komunitas dan kewirausahaan sosial mengakses pasar yang lebih luas serta membangun penghidupan berkelanjutan. Ini berarti menghubungkan produsen dengan pembeli, memperkuat kualitas dan keandalan, serta merancang relasi perdagangan yang adil bagi kedua pihak.',
        'Kami telah membangun sistem pasar untuk usaha berbasis komunitas, bekerja dengan petani kecil dan pedagang untuk berpindah dari produksi subsisten ke keterlibatan pasar. Kami merancang kemitraan rantai pasok yang menguntungkan baik pembeli korporat maupun produsen lokal, menciptakan nilai bersama di mana kedua pihak diuntungkan.',
      ],
    },
  },
  {
    num: '03',
    image: '/assets/images/service-capacity.webp',
    title: {
      en: 'Capacity Building & Literacy',
      id: 'Penguatan Kapasitas & Literasi',
    },
    tagline: {
      en: 'Education programs designed for independence, not dependency.',
      id: 'Program edukasi yang dirancang untuk kemandirian, bukan ketergantungan.',
    },
    body: {
      en: 'We design and run education and community strengthening programs that carry real environmental content. Our programs are built to run without us. As an example, our MaGies Literacy Unit program has operated independently for two consecutive years, demonstrating our commitment to long-term community self-sufficiency.',
      id: 'Kami merancang dan menjalankan program edukasi dan penguatan komunitas bermuatan lingkungan nyata. Program kami dibangun untuk berjalan tanpa kami. Sebagai bukti, program Unit Literasi MaGies kami telah berjalan mandiri selama dua tahun berturut-turut, membuktikan komitmen kami pada kemandirian jangka panjang komunitas.',
    },
    short: {
      en: 'Sustained education programs that measurably improve knowledge, capabilities, and economic outcomes for communities.',
      id: 'Program edukasi berkelanjutan yang meningkatkan pengetahuan, kapabilitas, dan hasil ekonomi komunitas secara terukur.',
    },
    expertise: [
      { en: 'Literacy module design with environmental content integration', id: 'Desain modul literasi dengan konten lingkungan terintegrasi' },
      { en: 'Community capacity strengthening programs',                     id: 'Program penguatan kapasitas komunitas' },
      { en: 'Social impact component design for corporate CSR',              id: 'Desain komponen dampak sosial untuk CSR korporat' },
      { en: 'Facilitator training and program handover',                     id: 'Pelatihan fasilitator dan serah terima program' },
    ],
    tags: {
      en: ['Education Design', 'Community Programs', 'CSR', 'Literacy'],
      id: ['Desain Edukasi', 'Program Komunitas', 'CSR', 'Literasi'],
    },
    detail: {
      en: [
        'We design and deliver education and capacity-building programs that strengthen communities and build skills for sustainable livelihoods. These are not one-off training events. They are sustained interventions that measurably improve knowledge, capabilities, and economic outcomes.',
        'We have designed literacy and vocational training programs that integrate environmental stewardship with economic opportunity. We have worked with communities to build local institutions that deliver training, manage resources, and sustain impact long after external support ends.',
      ],
      id: [
        'Kami merancang dan menyampaikan program edukasi dan pengembangan kapasitas yang memperkuat komunitas serta membangun keterampilan untuk penghidupan berkelanjutan. Ini bukan pelatihan satu kali. Ini adalah intervensi berkelanjutan yang meningkatkan pengetahuan, kapabilitas, dan hasil ekonomi secara terukur.',
        'Kami telah merancang program literasi dan pelatihan vokasi yang mengintegrasikan kepedulian lingkungan dengan peluang ekonomi. Kami bekerja dengan komunitas untuk membangun lembaga lokal yang menyelenggarakan pelatihan, mengelola sumber daya, dan menjaga dampak setelah dukungan eksternal berakhir.',
      ],
    },
  },
];

// ────────────── APPROACH (3 stages) ──────────────
export const stages = [
  {
    num: 1,
    title: { en: 'Assessment', id: 'Asesmen' },
    body: {
      en: 'We analyze your specific situation. We map stakeholder interests, regulatory landscapes, community dynamics, and supply chain vulnerabilities. We do not start with frameworks. We start with questions that matter to your business.',
      id: 'Kami menganalisis situasi spesifik Anda. Kami memetakan kepentingan pemangku kepentingan, lanskap regulasi, dinamika komunitas, dan kerentanan rantai pasok. Kami tidak mulai dari kerangka kerja. Kami mulai dari pertanyaan yang penting bagi bisnis Anda.',
    },
  },
  {
    num: 2,
    title: { en: 'Design & Testing', id: 'Desain & Pengujian' },
    body: {
      en: 'We develop recommendations based on evidence. But we do not stop at recommendations. We design pilots. We test assumptions at small scale before full rollout. This reduces risk and ensures interventions actually work in your operating context.',
      id: 'Kami menyusun rekomendasi berbasis bukti. Tapi kami tidak berhenti di rekomendasi. Kami merancang uji coba. Kami menguji asumsi pada skala kecil sebelum penerapan penuh. Ini mengurangi risiko dan memastikan intervensi benar-benar berfungsi dalam konteks operasi Anda.',
    },
  },
  {
    num: 3,
    title: { en: 'Implementation & Learning', id: 'Implementasi & Pembelajaran' },
    body: {
      en: 'We help you implement at scale, measure impact, and adjust based on real results. We measure what matters. We stay grounded in outcomes, not outputs.',
      id: 'Kami membantu Anda menerapkan dalam skala besar, mengukur dampak, dan menyesuaikan berdasarkan hasil nyata. Kami mengukur apa yang penting. Kami tetap berpijak pada hasil, bukan output.',
    },
  },
];

// ────────────── IMPACT — 4 REAL CASE STUDIES ──────────────
export const impactIntro = {
  tag: { en: 'Proof of Impact', id: 'Bukti Dampak' },
  headline: {
    en: 'We prove credibility through action, not reports.',
    id: 'Kredibilitas kami terbukti melalui aksi, bukan laporan.',
  },
  body: {
    en: 'Every project listed here reflects a real intervention with real stakeholders, constraints, and measurable outcomes. These are proof of execution.',
    id: 'Setiap proyek di sini mencerminkan intervensi nyata dengan pemangku kepentingan nyata, termasuk tantanganya, dan hasil yang terukur. Ini menjadi bukti eksekusi dan cara kerja kami.',
  },
};

export const impactCards = [
  {
    title: { en: 'EUDR & IBSAP Research', id: 'Riset EUDR & IBSAP' },
    tag:   { en: 'Policy Research',       id: 'Riset Kebijakan' },
    body: {
      en: 'We produced the first practical guidance for Indonesian businesses facing EU Deforestation Regulation. Covering supply-chain traceability, legal exposure, and compliance sequencing.',
      id: 'Kami menyusun panduan praktis pertama bagi pelaku usaha Indonesia dalam menghadapi Regulasi Deforestasi UE. Mencakup keterlacakan rantai pasok, eksposur hukum, dan urutan kepatuhan.',
    },
  },
  {
    title: { en: 'Platform PADI', id: 'Platform PADI' },
    tag:   { en: 'CSR-to-Impact Platform', id: 'Platform CSR-ke-Dampak' },
    body: {
      en: 'Built and deployed a platform that connects corporate CSR spending directly to verified community needs. Moving CSR from compliance exercise to strategic investment.',
      id: 'Membangun dan meluncurkan platform yang menghubungkan pengeluaran CSR perusahaan ke kebutuhan komunitas terverifikasi. Mengubah CSR dari kewajiban menjadi investasi strategis.',
    },
  },
  {
    title: { en: 'Jamur Kuping (Wood-Ear Mushroom)', id: 'Jamur Kuping' },
    tag:   { en: 'Trade Enablement', id: 'Penguatan Perniagaan' },
    body: {
      en: 'Took a local commodity from production to professional market access. Demonstrating end-to-end trade enablement with smallholder farmers as direct economic beneficiaries.',
      id: 'Membawa komoditas lokal dari produksi ke akses pasar profesional. Membuktikan model penguatan perniagaan dari hulu ke hilir, dengan petani kecil sebagai penerima manfaat ekonomi langsung.',
    },
  },
  {
    title: { en: 'MaGies Literacy Unit', id: 'Unit Literasi MaGies' },
    tag:   { en: 'Capacity Building', id: 'Penguatan Kapasitas' },
    body: {
      en: 'A community literacy program integrating essential ecosystem content, now self-sustaining for two consecutive years. Proof that our capacity-building is designed for independence, not dependency.',
      id: 'Program literasi komunitas yang mengintegrasikan konten ekosistem esensial, kini mandiri dua tahun berturut-turut. Bukti bahwa penguatan kapasitas kami dirancang untuk kemandirian, bukan ketergantungan.',
    },
  },
];

// ────────────── ABOUT PAGE ──────────────
export const about = {
  tag: { en: 'About Us', id: 'Tentang Kami' },
  headline: {
    en: 'Experience that runs deep before it runs wide.',
    id: 'Pengalaman yang mengakar sebelum meluas.',
  },
  body: {
    en: [
      "Madani Strategies is built on the legacy of field work from Yayasan Madani Berkelanjutan, Indonesia's leading sustainability NGO. We carry 20+ years of policy, community, and field program experience into every client engagement.",
      'We are a team of specialists focused on contextual solutions, not generalists. We are policy specialists, community organizers, ESG practitioners, and educators who have actually done the work in the forest, with the farmers, at the regulatory table.',
    ],
    id: [
      'Madani Strategies lahir dari warisan kerja lapangan Yayasan Madani Berkelanjutan, organisasi NGO keberlanjutan terkemuka di Indonesia. Kami membawa 20+ tahun pengalaman kebijakan, komunitas, dan program lapangan ke setiap keterlibatan klien.',
      'Kami adalah tim spesialis yang fokus pada solusi kontekstual, bukan generalis. Kami adalah spesialis kebijakan, penggerak komunitas, praktisi ESG, dan pendidik yang telah benar-benar bekerja di hutan, bersama petani, di meja regulasi.',
    ],
  },
};

// ────────────── TEAM (CORE) ──────────────
export const team = [
  {
    name: 'Giorgio Budi Indrarto',
    initials: 'GI',
    role: { en: 'Chief Executive Officer', id: 'Chief Executive Officer' },
    bioShort: {
      en: "20+ years in environmental law, forestry, and climate policy. Architect of Indonesia's REDD+ National Strategy.",
      id: '20+ tahun di hukum lingkungan, kehutanan, dan kebijakan iklim. Arsitek Strategi Nasional REDD+ Indonesia.',
    },
    bioFull: {
      en: "20+ years in environmental law, forestry, and climate policy. Architect of Indonesia's REDD+ National Strategy. He brings two decades of experience in environmental law, forestry policy, and climate change. His work has shaped policy reforms in Indonesia, including national strategies for forest protection and climate action. He excels at translating complex environmental challenges into actionable solutions and at building collaboration across government, civil society, and private sector stakeholders.",
      id: 'Lebih dari 20 tahun di hukum lingkungan, kehutanan, dan kebijakan iklim. Arsitek Strategi Nasional REDD+ Indonesia. Ia membawa dua dekade pengalaman dalam hukum lingkungan, kebijakan kehutanan, dan perubahan iklim. Karyanya membentuk reformasi kebijakan di Indonesia, termasuk strategi nasional perlindungan hutan dan aksi iklim. Ia ahli menerjemahkan tantangan lingkungan kompleks menjadi solusi yang bisa dijalankan, serta membangun kolaborasi lintas pemerintah, masyarakat sipil, dan sektor swasta.',
    },
  },
  {
    name: 'Riyadh Assegaf',
    initials: 'RA',
    role: { en: 'Strategic Impact Lead', id: 'Strategic Impact Lead' },
    bioShort: {
      en: 'Translates field-level insights into measurable corporate strategy and impact pathways.',
      id: 'Menerjemahkan wawasan lapangan menjadi strategi korporat terukur dan jalur dampak.',
    },
    bioFull: {
      en: 'Riyadh translates field-level insights into measurable corporate strategy and impact pathways. He specializes in designing ESG frameworks and driving market access for sustainable community-based commodities.',
      id: 'Riyadh menerjemahkan wawasan di tingkat lapangan menjadi strategi korporat yang terukur dan jalur dampak. Dia berspesialisasi dalam merancang kerangka ESG dan mendorong akses pasar untuk komoditas berbasis komunitas yang berkelanjutan.',
    },
  },
  {
    name: 'Firly Savitri',
    initials: 'FS',
    role: { en: 'Literacy Advisor', id: 'Literacy Advisor' },
    bioShort: {
      en: 'MBA ITB. Co-founder of Ilmuwan Muda Indonesia. Expert in experiential learning design and community empowerment.',
      id: 'MBA ITB. Co-founder Ilmuwan Muda Indonesia. Ahli desain experiential learning dan pemberdayaan komunitas.',
    },
    bioFull: {
      en: 'MBA ITB. Co-founder of Ilmuwan Muda Indonesia. Expert in experiential learning design and community empowerment. She has designed learning experiences for thousands of people and built educational institutions that serve communities sustainably. Her background spans STEM education, social entrepreneurship, and talent development. She excels at making complex ideas accessible and at designing programs that actually stick.',
      id: 'MBA ITB. Co-founder Ilmuwan Muda Indonesia. Ahli desain experiential learning dan pemberdayaan komunitas. Ia telah merancang pengalaman belajar untuk ribuan orang dan membangun lembaga pendidikan yang melayani komunitas secara berkelanjutan. Latar belakangnya mencakup pendidikan STEM, kewirausahaan sosial, dan pengembangan talenta. Ia ahli membuat ide kompleks mudah diakses dan merancang program yang benar-benar membekas.',
    },
  },
  {
    name: 'Zulkifli Tegar',
    initials: 'ZT',
    role: { en: 'Community Specialist', id: 'Community Specialist' },
    bioShort: {
      en: 'CSR specialist with programs reaching 100,000 beneficiaries. Raised 1B+ IDR for community and social initiatives.',
      id: 'Spesialis CSR dengan program menjangkau 100.000 penerima manfaat. Menggalang 1M+ IDR untuk inisiatif komunitas dan sosial.',
    },
    bioFull: {
      en: 'CSR specialist with programs reaching 100,000 beneficiaries. Raised 1B+ IDR for community and social initiatives. He brings deep experience managing social enterprises, community programs, and partnerships with government and corporate stakeholders. His track record includes designing programs that reach thousands, mobilizing resources, and ensuring outcomes align with both community needs and partner goals.',
      id: 'Spesialis CSR dengan program menjangkau 100.000 penerima manfaat. Menggalang 1M+ IDR untuk inisiatif komunitas dan sosial. Ia membawa pengalaman mendalam dalam mengelola usaha sosial, program komunitas, dan kemitraan dengan pemangku kepentingan pemerintah dan korporat. Rekam jejaknya mencakup merancang program yang menjangkau ribuan orang, memobilisasi sumber daya, dan memastikan hasil selaras dengan kebutuhan komunitas dan tujuan mitra.',
    },
  },
];

// ────────────── AFFILIATED EXPERTS ──────────────
export const expertsIntro = {
  en: 'Selected Experts from the MaGies Network. Full list available upon request.',
  id: 'Pakar Terpilih dari Jaringan MaGies. Daftar lengkap tersedia berdasarkan permintaan.',
};

export const experts = [
  {
    name: 'Bernadinus Steny',
    initials: 'BS',
    role: { en: 'Senior Policy Advisor', id: 'Senior Policy Advisor' },
    bio: {
      en: 'Expert in land-use governance and political economy analysis across Indonesia. Provides strategic counsel on regulatory compliance and conflict resolution.',
      id: 'Pakar tata kelola lahan dan analisis ekonomi politik di Indonesia. Memberikan nasihat strategis mengenai kepatuhan regulasi dan resolusi konflik.',
    },
  },
  {
    name: 'Teguh Surya',
    initials: 'TS',
    role: { en: 'Climate & Energy Specialist', id: 'Climate & Energy Specialist' },
    bio: {
      en: 'Leading voice in climate change mitigation and energy policy advocacy. Focuses on bridging global climate commitments with local implementation challenges.',
      id: 'Tokoh terkemuka dalam mitigasi perubahan iklim dan advokasi kebijakan energi. Berfokus pada menjembatani komitmen iklim global dengan tantangan implementasi lokal.',
    },
  },
  {
    name: 'Tejo Wahyu Jatmiko',
    initials: 'TJ',
    role: { en: 'Social Forestry Expert', id: 'Social Forestry Expert' },
    bio: {
      en: 'Deep experience in developing sustainable livelihood models for forest-dependent communities. Specializes in capacity building for social forestry programs.',
      id: 'Pengalaman mendalam dalam pengembangan model penghidupan berkelanjutan bagi komunitas yang bergantung pada hutan. Berspesialisasi dalam penguatan kapasitas untuk program perhutanan sosial.',
    },
  },
  {
    name: 'Josi Khatarina',
    initials: 'JK',
    role: { en: 'Legal & Human Rights Counsel', id: 'Legal & Human Rights Counsel' },
    bio: {
      en: 'Specialized in environmental and human rights law within the natural resource sector. Advises on legal risk assessment and corporate accountability.',
      id: 'Berspesialisasi dalam hukum lingkungan dan hak asasi manusia di sektor sumber daya alam. Memberikan saran tentang asesmen risiko hukum dan akuntabilitas korporat.',
    },
  },
  {
    name: 'Yuyun Indradi',
    initials: 'YI',
    role: { en: 'Indigenous Rights Advocate', id: 'Indigenous Rights Advocate' },
    bio: {
      en: 'Leading expert on indigenous rights and community land tenure issues. Provides counsel on culturally sensitive and rights-based engagement strategies.',
      id: 'Pakar terkemuka dalam isu hak-hak masyarakat adat dan tenurial lahan. Memberikan saran mengenai strategi keterlibatan yang sensitif budaya dan berbasis hak.',
    },
  },
];

// ────────────── COMPANY PROFILE — long-form sections ──────────────
export const profile = {
  whoWeAre: {
    title: { en: 'Who We Are', id: 'Siapa Kami' },
    body: {
      en: [
        'Madani Strategies is a strategic impact consultancy. We help businesses navigate the intersection of social risk, regulatory complexity, and sustainable growth. We work with organizations that depend on natural resources and community relationships, helping them make decisions that strengthen both their operations and their legitimacy.',
        'We do not offer generic sustainability frameworks or checkbox compliance. We start with the specific decisions your business needs to make. We analyze the social, environmental, and regulatory landscape that shapes those decisions. Then we design and test interventions that work in context.',
      ],
      id: [
        'Madani Strategies adalah konsultansi dampak strategis. Kami membantu bisnis menavigasi titik temu risiko sosial, kompleksitas regulasi, dan pertumbuhan berkelanjutan. Kami bekerja dengan organisasi yang bergantung pada sumber daya alam dan hubungan komunitas, membantu mereka membuat keputusan yang memperkuat baik operasi maupun legitimasi mereka.',
        'Kami tidak menawarkan kerangka keberlanjutan generik atau kepatuhan checkbox. Kami mulai dari keputusan spesifik yang perlu diambil bisnis Anda. Kami menganalisis lanskap sosial, lingkungan, dan regulasi yang membentuk keputusan tersebut. Lalu kami merancang dan menguji intervensi yang berfungsi dalam konteks Anda.',
      ],
    },
  },
  whoWeServe: {
    title: { en: 'Who We Serve', id: 'Siapa yang Kami Layani' },
    body: {
      en: 'We work with corporate organizations and social enterprises that operate in contexts where community relationships, regulatory change, and resource management directly affect business viability. This includes companies in extractive industries, agriculture, forestry, and trade. We also partner with organizations seeking to build sustainable market systems and community-led enterprises.',
      id: 'Kami bekerja dengan organisasi korporat dan kewirausahaan sosial yang beroperasi dalam konteks di mana hubungan komunitas, perubahan regulasi, dan pengelolaan sumber daya secara langsung memengaruhi viabilitas bisnis. Ini meliputi perusahaan di industri ekstraktif, agrikultur, kehutanan, dan perdagangan. Kami juga bermitra dengan organisasi yang ingin membangun sistem pasar berkelanjutan dan usaha berbasis komunitas.',
    },
  },
  theGap: {
    title: { en: 'The Gap', id: 'Celah yang Kami Tangani' },
    body: {
      en: [
        'Conventional sustainability consulting often fails in practice for one reason. It separates analysis from execution. Consultants deliver reports. Executives read them. Implementation stalls because the recommendations were never tested against ground reality.',
        'We have worked with partners to navigating complex policy environments, regulatory shifts, community expectations, and supply chain vulnerabilities. Only to find their sustainability strategies disconnected from how decisions actually get made. Recommendations arrived as finished documents, not as actionable insights grounded in the constraints and opportunities of the specific context.',
        'The gap is in relevance. Most sustainability work treats social and environmental issues as compliance problems. It misses what they actually are. They are business decisions. And business decisions must be made with evidence.',
      ],
      id: [
        'Konsultansi keberlanjutan konvensional sering gagal dalam praktik karena satu alasan. Mereka memisahkan analisis dari eksekusi. Konsultan menyampaikan laporan. Eksekutif membacanya. Implementasi mandek karena rekomendasi tidak pernah diuji terhadap realitas lapangan.',
        'Kami telah bekerja dengan mitra untuk menavigasi lingkungan kebijakan kompleks, perubahan regulasi, ekspektasi komunitas, dan kerentanan rantai pasok. Hanya untuk menemukan strategi keberlanjutan mereka terputus dari bagaimana keputusan sebenarnya dibuat. Rekomendasi datang sebagai dokumen jadi, bukan wawasan yang bisa dijalankan dan berakar pada kendala dan peluang konteks spesifik.',
        'Celahnya ada di relevansi. Sebagian besar pekerjaan keberlanjutan memperlakukan isu sosial dan lingkungan sebagai masalah kepatuhan. Itu meleset dari apa yang sebenarnya. Itu adalah keputusan bisnis. Dan keputusan bisnis harus diambil berdasarkan bukti.',
      ],
    },
  },
  approachKicker: {
    en: 'Strategy without execution is theory.<br />Execution without measurement is guesswork.',
    id: 'Strategi tanpa eksekusi hanya teori.<br />Eksekusi tanpa pengukuran hanya tebakan.',
  },
  whatComesNext: {
    title: { en: 'What Comes Next', id: 'Apa yang Akan Datang' },
    body: {
      en: [
        'If your organization faces decisions at the intersection of social risk, regulatory change, and sustainable growth, let us help you think through them.',
        'We start with conversation. We listen to your specific challenges. We ask questions that clarify what actually matters. We do not sell solutions. We diagnose situations.',
        'If we are the right partner, we will say so. If we are not, we will tell you that too.',
        "Reach out. Let's talk.",
      ],
      id: [
        'Jika organisasi Anda menghadapi keputusan di titik temu risiko sosial, perubahan regulasi, dan pertumbuhan berkelanjutan, izinkan kami membantu Anda memikirkannya.',
        'Kami mulai dengan percakapan. Kami mendengarkan tantangan spesifik Anda. Kami mengajukan pertanyaan yang memperjelas apa yang sebenarnya penting. Kami tidak menjual solusi. Kami mendiagnosis situasi.',
        'Jika kami mitra yang tepat, kami akan mengatakan demikian. Jika tidak, kami juga akan mengatakan itu.',
        'Hubungi kami. Mari bicara.',
      ],
    },
  },
};

// Backward-compat alias used by some style files
export const kicker = { approachTitle: profile.approachKicker };

// ────────────── FINAL CTA (global, every page) ──────────────
export const finalCta = {
  tag: { en: 'Work With Us', id: 'Bekerja Sama' },
  headline: {
    en: 'Ready to make sustainability a strategic decision?',
    id: 'Siap menjadikan keberlanjutan sebagai keputusan strategis?',
  },
  body: {
    en: "Don't let unidentified social risk slow your business down. Let's start with a direct conversation. No templates, no generic pitch decks. Just an honest assessment of your context.",
    id: 'Jangan biarkan risiko sosial yang belum teridentifikasi menghambat bisnis Anda. Mari mulai dengan percakapan langsung. Bukan template, juga bukan pitch deck generik. Cukup penilaian jujur atas konteks Anda.',
  },
  ctaPrimary:   { en: 'Talk to Our Team',         id: 'Hubungi Tim Kami' },
  ctaSecondary: { en: 'Download Company Profile', id: 'Unduh Company Profile' },
};

// ────────────── CONTACT PAGE ──────────────
export const contact = {
  headline: {
    en: "Let's talk about your challenge.",
    id: 'Mari bicara tentang tantangan Anda.',
  },
  body: {
    en: "We don't start with a service package. We start with your situation. Tell us what you're facing and we'll tell you honestly whether we can help.",
    id: 'Kami tidak memulai dari paket layanan. Kami mulai dari situasi Anda. Ceritakan apa yang Anda hadapi dan kami akan jujur menyampaikan apakah kami bisa membantu.',
  },
};
