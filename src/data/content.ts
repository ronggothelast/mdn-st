// Central content store — bilingual EN/ID
// Sourced verbatim from MaGies_Company_Profile_Draft_v1 + MaGies_Website_Copywriting_v1

export type Lang = 'en' | 'id';

export const brand = {
  name: 'Madani Strategies',
  tagline: {
    en: 'Connecting Growth to Community Impact',
    id: 'Menghubungkan Pertumbuhan ke Dampak Komunitas',
  },
  email: 'hello@madanistrategies.com',
  phone: '+62 813 143 44485',
  web: 'madanistrategies.com',
};

export const nav = {
  home:    { en: 'Home',            id: 'Beranda' },
  services:{ en: 'Services',        id: 'Layanan' },
  impact:  { en: 'Impact',          id: 'Dampak' },
  about:   { en: 'About',           id: 'Tentang' },
  profile: { en: 'Company Profile', id: 'Profil Perusahaan' },
  contact: { en: 'Get in Touch',    id: 'Hubungi Kami' },
};

export const hero = {
  eyebrow: { en: 'Strategic Impact Consultancy', id: 'Konsultan Dampak Strategis' },
  title: {
    en: 'Strategy that <em>holds</em> in the real world.',
    id: 'Strategi yang <em>bertahan</em> di dunia nyata.',
  },
  lead: {
    en: 'We help organizations navigate the intersection of social risk, regulatory complexity, and sustainable growth. We don\'t deliver reports. We design and test interventions that actually work in context.',
    id: 'Kami membantu organisasi menavigasi persimpangan risiko sosial, kompleksitas regulasi, dan pertumbuhan berkelanjutan. Kami tidak hanya menyerahkan laporan. Kami merancang dan menguji intervensi yang benar-benar bekerja sesuai konteks.',
  },
  ctaPrimary:   { en: 'Explore our services', id: 'Jelajahi layanan kami' },
  ctaSecondary: { en: 'Read company profile', id: 'Baca profil perusahaan' },
};

export const stats = [
  { num: '20+', en: 'Years combined experience',  id: 'Tahun pengalaman gabungan' },
  { num: '3',   en: 'Core service lines',          id: 'Layanan utama' },
  { num: '∞',   en: 'Communities served',          id: 'Komunitas yang dilayani' },
  { num: '1',   en: 'Mission: real impact',        id: 'Misi: dampak nyata' },
];

export const services = [
  {
    num: '01',
    image: '/mdn-st/assets/images/service-consulting.png',
    title: { en: 'Strategic Impact Consulting', id: 'Konsultasi Dampak Strategis' },
    short: {
      en: 'Manage social and environmental risks that affect your license to operate. Navigate regulatory complexity and align profit with social responsibility.',
      id: 'Kelola risiko sosial dan lingkungan yang memengaruhi izin operasi Anda. Navigasi kompleksitas regulasi dan selaraskan profit dengan tanggung jawab sosial.',
    },
    detail: {
      en: [
        'We help organizations manage social and environmental risks. This includes navigating regulatory complexity (changing environmental laws, trade requirements, governance standards), understanding community concerns and their business implications, and designing strategies that align profit with social responsibility.',
        'We have worked with businesses facing major regulatory shifts, helping them understand the implications for their supply chains and operations. We have supported organizations managing community relationships in sensitive contexts, translating community concerns into business language and designing interventions that address legitimate grievances while protecting operational continuity.',
      ],
      id: [
        'Kami membantu organisasi mengelola risiko sosial dan lingkungan. Ini meliputi navigasi kompleksitas regulasi (perubahan hukum lingkungan, persyaratan perdagangan, standar tata kelola), memahami keprihatinan komunitas dan implikasinya pada bisnis, dan merancang strategi yang menyelaraskan profit dengan tanggung jawab sosial.',
        'Kami telah bekerja dengan bisnis yang menghadapi pergeseran regulasi besar, membantu mereka memahami implikasinya pada rantai pasok dan operasi. Kami telah mendampingi organisasi mengelola hubungan komunitas dalam konteks sensitif, menerjemahkan keprihatinan komunitas ke dalam bahasa bisnis, dan merancang intervensi yang menjawab keluhan sah sembari menjaga keberlanjutan operasi.',
      ],
    },
  },
  {
    num: '02',
    image: '/mdn-st/assets/images/service-trade.png',
    title: { en: 'Enabling Trade & Market Access', id: 'Memungkinkan Perdagangan & Akses Pasar' },
    short: {
      en: 'Connect community producers to broader markets. Build supply chain partnerships that reward both buyers and producers fairly.',
      id: 'Hubungkan produsen komunitas ke pasar yang lebih luas. Bangun kemitraan rantai pasok yang adil bagi pembeli maupun produsen.',
    },
    detail: {
      en: [
        'We help communities and social enterprises access broader markets and build sustainable livelihoods. This means connecting producers to buyers, strengthening quality and reliability, and designing trade relationships that reward both parties fairly.',
        'We have built market systems for community-led enterprises, working with smallholder producers and traders to move from subsistence production to market engagement. We have designed supply chain partnerships that benefit both corporate buyers and local producers, creating shared value where both parties gain.',
      ],
      id: [
        'Kami membantu komunitas dan wirausaha sosial mengakses pasar yang lebih luas dan membangun penghidupan berkelanjutan. Ini berarti menghubungkan produsen ke pembeli, memperkuat kualitas dan keandalan, serta merancang hubungan perdagangan yang adil bagi kedua pihak.',
        'Kami telah membangun sistem pasar untuk wirausaha berbasis komunitas, bekerja dengan produsen dan pedagang petani kecil untuk beralih dari produksi subsistensi ke keterlibatan pasar. Kami telah merancang kemitraan rantai pasok yang menguntungkan pembeli korporat maupun produsen lokal, menciptakan nilai bersama di mana kedua pihak diuntungkan.',
      ],
    },
  },
  {
    num: '03',
    image: '/mdn-st/assets/images/service-capacity.png',
    title: { en: 'Capacity Building & Literacy', id: 'Pengembangan Kapasitas & Literasi' },
    short: {
      en: 'Sustained education programs that measurably improve knowledge, capabilities, and economic outcomes for communities.',
      id: 'Program pendidikan berkelanjutan yang secara terukur meningkatkan pengetahuan, kapabilitas, dan hasil ekonomi komunitas.',
    },
    detail: {
      en: [
        'We design and deliver education and capacity-building programs that strengthen communities and build skills for sustainable livelihoods. These are not one-off training events. They are sustained interventions that measurably improve knowledge, capabilities, and economic outcomes.',
        'We have designed literacy and vocational training programs that integrate environmental stewardship with economic opportunity. We have worked with communities to build local institutions that deliver training, manage resources, and sustain impact long after external support ends.',
      ],
      id: [
        'Kami merancang dan menyelenggarakan program pendidikan dan pengembangan kapasitas yang memperkuat komunitas dan membangun keterampilan untuk penghidupan berkelanjutan. Ini bukan pelatihan sekali jalan. Ini intervensi berkelanjutan yang secara terukur meningkatkan pengetahuan, kapabilitas, dan hasil ekonomi.',
        'Kami telah merancang program literasi dan pelatihan vokasi yang mengintegrasikan kepedulian lingkungan dengan peluang ekonomi. Kami telah bekerja dengan komunitas untuk membangun institusi lokal yang menyelenggarakan pelatihan, mengelola sumber daya, dan mempertahankan dampak lama setelah dukungan eksternal berakhir.',
      ],
    },
  },
];

export const stages = [
  {
    num: 1,
    title: { en: 'Assessment', id: 'Asesmen' },
    body: {
      en: 'We map stakeholder interests, regulatory landscapes, community dynamics, and supply chain vulnerabilities. We do not start with frameworks. We start with questions that matter to your business.',
      id: 'Kami memetakan kepentingan pemangku kepentingan, lanskap regulasi, dinamika komunitas, dan kerentanan rantai pasok. Kami tidak mulai dari kerangka kerja. Kami mulai dari pertanyaan yang penting bagi bisnis Anda.',
    },
  },
  {
    num: 2,
    title: { en: 'Design & Testing', id: 'Desain & Pengujian' },
    body: {
      en: 'We develop recommendations based on evidence. But we do not stop at recommendations. We design pilots. We test assumptions at small scale before full rollout. This reduces risk and ensures interventions actually work in your operating context.',
      id: 'Kami mengembangkan rekomendasi berbasis bukti. Tapi kami tidak berhenti di rekomendasi. Kami merancang pilot. Kami menguji asumsi dalam skala kecil sebelum peluncuran penuh. Ini mengurangi risiko dan memastikan intervensi benar-benar bekerja dalam konteks operasi Anda.',
    },
  },
  {
    num: 3,
    title: { en: 'Implementation & Learning', id: 'Implementasi & Pembelajaran' },
    body: {
      en: 'We help you implement at scale, measure impact, and adjust based on real results. We measure what matters. We stay grounded in outcomes, not outputs.',
      id: 'Kami membantu Anda mengimplementasikan dalam skala besar, mengukur dampak, dan menyesuaikan berdasarkan hasil nyata. Kami mengukur yang penting. Kami tetap berpijak pada hasil, bukan keluaran.',
    },
  },
];

export const impactCards = [
  {
    tag: { en: 'Policy Research', id: 'Riset Kebijakan' },
    title: { en: 'Translating policy into business strategy', id: 'Menerjemahkan kebijakan menjadi strategi bisnis' },
    body: {
      en: 'We have conducted deep research on emerging policy landscapes, helping organizations understand what regulatory change means for their business model and supply chains. This work required translating complex policy into business implications and identifying strategic response options.',
      id: 'Kami telah melakukan riset mendalam tentang lanskap kebijakan yang berkembang, membantu organisasi memahami arti perubahan regulasi bagi model bisnis dan rantai pasok mereka. Pekerjaan ini menuntut penerjemahan kebijakan kompleks menjadi implikasi bisnis dan identifikasi opsi respons strategis.',
    },
  },
  {
    tag: { en: 'Stakeholder Engagement', id: 'Pelibatan Pemangku Kepentingan' },
    title: { en: 'Building trust in high-stakes contexts', id: 'Membangun kepercayaan dalam konteks bertaruh tinggi' },
    body: {
      en: 'We have worked with partners to manage social and environmental risks in high-stakes contexts. We have designed community engagement strategies, facilitated stakeholder dialogue, and built trust through transparent communication and genuine commitment to address legitimate concerns.',
      id: 'Kami telah bekerja dengan mitra untuk mengelola risiko sosial dan lingkungan dalam konteks bertaruh tinggi. Kami telah merancang strategi pelibatan komunitas, memfasilitasi dialog pemangku kepentingan, dan membangun kepercayaan melalui komunikasi transparan dan komitmen sejati untuk menjawab keprihatinan yang sah.',
    },
  },
  {
    tag: { en: 'Market Linkages', id: 'Penghubungan Pasar' },
    title: { en: 'From transaction to relationship', id: 'Dari transaksi ke relasi' },
    body: {
      en: 'We have built market linkages between local producers and larger buyers, moving from transaction to relationship. This required understanding both producer constraints and buyer requirements, then designing systems that work for both.',
      id: 'Kami telah membangun jalur pasar antara produsen lokal dan pembeli yang lebih besar, beralih dari transaksi ke relasi. Ini menuntut pemahaman batasan produsen maupun kebutuhan pembeli, lalu merancang sistem yang berhasil bagi keduanya.',
    },
  },
  {
    tag: { en: 'Community Education', id: 'Pendidikan Komunitas' },
    title: { en: 'Programs that sustain themselves', id: 'Program yang menopang dirinya sendiri' },
    body: {
      en: 'We have designed and implemented education and capacity-building programs that serve both individual learning and broader community development goals. These programs operate independently, sustaining themselves through community commitment and local partnerships.',
      id: 'Kami telah merancang dan mengimplementasikan program pendidikan dan pengembangan kapasitas yang melayani pembelajaran individu maupun tujuan pembangunan komunitas yang lebih luas. Program-program ini beroperasi secara mandiri, terus berlanjut melalui komitmen komunitas dan kemitraan lokal.',
    },
  },
];

export const team = [
  {
    initials: 'GBI',
    name: 'Giorgio Budi Indrarto',
    role: { en: 'Strategic Director', id: 'Direktur Strategis' },
    bioShort: {
      en: '20+ years in environmental law, forestry, and climate policy. Architect of Indonesia\'s REDD+ National Strategy.',
      id: '20+ tahun di bidang hukum lingkungan, kehutanan, dan kebijakan iklim. Arsitek Strategi Nasional REDD+ Indonesia.',
    },
    bioFull: {
      en: 'Giorgio leads our strategic direction. He brings two decades of experience in environmental law, forestry policy, and climate change. His work has shaped policy reforms in Indonesia, including national strategies for forest protection and climate action. He excels at translating complex environmental challenges into actionable solutions and at building collaboration across government, civil society, and private sector stakeholders.',
      id: 'Giorgio memimpin arah strategis kami. Ia membawa dua dekade pengalaman dalam hukum lingkungan, kebijakan kehutanan, dan perubahan iklim. Karyanya telah membentuk reformasi kebijakan di Indonesia, termasuk strategi nasional perlindungan hutan dan aksi iklim. Ia unggul dalam menerjemahkan tantangan lingkungan yang kompleks menjadi solusi yang dapat dilaksanakan dan dalam membangun kolaborasi antara pemerintah, masyarakat sipil, dan pemangku kepentingan sektor swasta.',
    },
  },
  {
    initials: 'RA',
    name: 'Riyadh Assegaf',
    role: { en: 'Strategic Impact Lead', id: 'Pemimpin Dampak Strategis' },
    bioShort: {
      en: 'Translates field-level insights into measurable corporate strategy. Specializes in ESG frameworks and market access for sustainable commodities.',
      id: 'Menerjemahkan wawasan lapangan menjadi strategi korporat terukur. Spesialisasi dalam kerangka ESG dan akses pasar komoditas berkelanjutan.',
    },
    bioFull: {
      en: 'Riyadh translates field-level insights into measurable corporate strategy and impact pathways. He specializes in designing ESG frameworks and driving market access for sustainable community-based commodities.',
      id: 'Riyadh menerjemahkan wawasan tingkat lapangan menjadi strategi korporat dan jalur dampak yang terukur. Ia mengkhususkan diri dalam merancang kerangka ESG dan mendorong akses pasar bagi komoditas berkelanjutan berbasis komunitas.',
    },
  },
  {
    initials: 'FS',
    name: 'Firly Savitri',
    role: { en: 'Capacity Building Lead', id: 'Pemimpin Pengembangan Kapasitas' },
    bioShort: {
      en: 'Designs learning experiences for thousands. Background in STEM education, social entrepreneurship, and talent development.',
      id: 'Merancang pengalaman pembelajaran bagi ribuan orang. Berlatar belakang pendidikan STEM, kewirausahaan sosial, dan pengembangan talenta.',
    },
    bioFull: {
      en: 'Firly leads our capacity-building and literacy work. She has designed learning experiences for thousands of people and built educational institutions that serve communities sustainably. Her background spans STEM education, social entrepreneurship, and talent development. She excels at making complex ideas accessible and at designing programs that actually stick.',
      id: 'Firly memimpin kerja pengembangan kapasitas dan literasi kami. Ia telah merancang pengalaman pembelajaran bagi ribuan orang dan membangun institusi pendidikan yang melayani komunitas secara berkelanjutan. Latar belakangnya mencakup pendidikan STEM, kewirausahaan sosial, dan pengembangan talenta. Ia unggul dalam membuat ide kompleks menjadi mudah dipahami dan dalam merancang program yang benar-benar bertahan.',
    },
  },
  {
    initials: 'ZT',
    name: 'Zulkifli Tegar',
    role: { en: 'Implementation Lead', id: 'Pemimpin Implementasi' },
    bioShort: {
      en: 'Manages social enterprises and community programs. Track record of designing programs that reach thousands and mobilize resources.',
      id: 'Mengelola wirausaha sosial dan program komunitas. Rekam jejak merancang program yang menjangkau ribuan dan memobilisasi sumber daya.',
    },
    bioFull: {
      en: 'Zulkifli leads our implementation and community partnerships. He brings deep experience managing social enterprises, community programs, and partnerships with government and corporate stakeholders. His track record includes designing programs that reach thousands, mobilizing resources, and ensuring outcomes align with both community needs and partner goals.',
      id: 'Zulkifli memimpin implementasi dan kemitraan komunitas kami. Ia membawa pengalaman mendalam dalam mengelola wirausaha sosial, program komunitas, dan kemitraan dengan pemangku kepentingan pemerintah dan korporat. Rekam jejaknya meliputi merancang program yang menjangkau ribuan orang, memobilisasi sumber daya, dan memastikan hasil selaras dengan kebutuhan komunitas dan tujuan mitra.',
    },
  },
];

export const profile = {
  whoWeAre: {
    title: { en: 'Who We Are', id: 'Siapa Kami' },
    body: {
      en: [
        'Madani Strategies is a strategic impact consultancy. We help businesses navigate the intersection of social risk, regulatory complexity, and sustainable growth. We work with organizations that depend on natural resources and community relationships, helping them make decisions that strengthen both their operations and their legitimacy.',
        'We do not offer generic sustainability frameworks or checkbox compliance. We start with the specific decisions your business needs to make. We analyze the social, environmental, and regulatory landscape that shapes those decisions. Then we design and test interventions that work in context.',
      ],
      id: [
        'Madani Strategies adalah konsultan dampak strategis. Kami membantu bisnis menavigasi persimpangan risiko sosial, kompleksitas regulasi, dan pertumbuhan berkelanjutan. Kami bekerja dengan organisasi yang bergantung pada sumber daya alam dan hubungan komunitas, membantu mereka mengambil keputusan yang memperkuat operasi sekaligus legitimasi mereka.',
        'Kami tidak menawarkan kerangka kerja keberlanjutan generik atau kepatuhan checkbox. Kami mulai dari keputusan spesifik yang perlu diambil bisnis Anda. Kami menganalisis lanskap sosial, lingkungan, dan regulasi yang membentuk keputusan tersebut. Lalu kami merancang dan menguji intervensi yang bekerja sesuai konteks.',
      ],
    },
  },
  whoWeServe: {
    title: { en: 'Who We Serve', id: 'Siapa yang Kami Layani' },
    body: {
      en: 'We work with corporate organizations and social enterprises that operate in contexts where community relationships, regulatory change, and resource management directly affect business viability. This includes companies in extractive industries, agriculture, forestry, and trade. We also partner with organizations seeking to build sustainable market systems and community-led enterprises.',
      id: 'Kami bekerja dengan organisasi korporat dan wirausaha sosial yang beroperasi dalam konteks di mana hubungan komunitas, perubahan regulasi, dan pengelolaan sumber daya secara langsung memengaruhi viabilitas bisnis. Ini termasuk perusahaan di industri ekstraktif, pertanian, kehutanan, dan perdagangan. Kami juga bermitra dengan organisasi yang ingin membangun sistem pasar berkelanjutan dan wirausaha berbasis komunitas.',
    },
  },
  theGap: {
    title: { en: 'The Gap', id: 'Celahnya' },
    body: {
      en: [
        'Conventional sustainability consulting often fails in practice for one reason. It separates analysis from execution. Consultants deliver reports. Executives read them. Implementation stalls because the recommendations were never tested against ground reality.',
        'We have worked with partners to navigating complex policy environments, regulatory shifts, community expectations, and supply chain vulnerabilities. Only to find their sustainability strategies disconnected from how decisions actually get made. Recommendations arrived as finished documents, not as actionable insights grounded in the constraints and opportunities of the specific context.',
        'The gap is in relevance. Most sustainability work treats social and environmental issues as compliance problems. It misses what they actually are. They are business decisions. And business decisions must be made with evidence.',
      ],
      id: [
        'Konsultasi keberlanjutan konvensional sering gagal di praktik karena satu alasan. Ia memisahkan analisis dari eksekusi. Konsultan menyerahkan laporan. Eksekutif membacanya. Implementasi tersendat karena rekomendasinya tidak pernah diuji terhadap realitas lapangan.',
        'Kami telah bekerja dengan mitra menavigasi lingkungan kebijakan kompleks, pergeseran regulasi, ekspektasi komunitas, dan kerentanan rantai pasok. Hanya untuk menemukan strategi keberlanjutan mereka terputus dari cara keputusan benar-benar dibuat. Rekomendasi datang sebagai dokumen jadi, bukan sebagai wawasan yang dapat dilaksanakan dan berakar pada kendala dan peluang dari konteks spesifik.',
        'Celahnya ada di relevansi. Sebagian besar pekerjaan keberlanjutan memperlakukan isu sosial dan lingkungan sebagai masalah kepatuhan. Ia melewatkan apa sebenarnya isu itu. Itu adalah keputusan bisnis. Dan keputusan bisnis harus dibuat dengan bukti.',
      ],
    },
  },
  whatComesNext: {
    title: { en: 'What Comes Next', id: 'Apa Selanjutnya' },
    body: {
      en: [
        'If your organization faces decisions at the intersection of social risk, regulatory change, and sustainable growth, let us help you think through them.',
        'We start with conversation. We listen to your specific challenges. We ask questions that clarify what actually matters. We do not sell solutions. We diagnose situations.',
        'If we are the right partner, we will say so. If we are not, we will tell you that too.',
        'Reach out. Let\'s talk.',
      ],
      id: [
        'Jika organisasi Anda menghadapi keputusan di persimpangan risiko sosial, perubahan regulasi, dan pertumbuhan berkelanjutan, biarkan kami membantu memikirkannya.',
        'Kami mulai dengan percakapan. Kami mendengarkan tantangan spesifik Anda. Kami bertanya untuk memperjelas apa yang sebenarnya penting. Kami tidak menjual solusi. Kami mendiagnosis situasi.',
        'Jika kami adalah mitra yang tepat, kami akan mengatakannya. Jika bukan, kami juga akan mengatakannya.',
        'Hubungi kami. Mari bicara.',
      ],
    },
  },
};

export const kicker = {
  approachTitle: {
    en: 'Strategy without execution is theory.<br>Execution without measurement is guesswork.',
    id: 'Strategi tanpa eksekusi hanya teori.<br>Eksekusi tanpa pengukuran hanya tebakan.',
  },
};
