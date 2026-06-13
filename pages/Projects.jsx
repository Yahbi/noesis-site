// Properties — the Noesis built portfolio. Real photography sourced from noesisusa.com,
// reframed as the delivery record behind the firm's owner's-rep practice.

// Single-family galleries (raw wix media ids, page order — cover first).
const GAL = {
  "one-oak": ["5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg","5c383b_338fba4cdcd845ccbfb911288478e8bc~mv2.jpg","5c383b_6d4172cf48524e228ed8a2794b2a76a9~mv2.jpg","5c383b_57dbe21d67d545458a9efcc900929f26~mv2.jpg","5c383b_a8ab5be38572479d819d7829987a8901~mv2.jpg","5c383b_413fa29f39a94acfb2d595791d1d777d~mv2.jpg","5c383b_e7fa96e7c95b46f2921e31af34a46801~mv2.jpg","5c383b_12fe95a979394c05baede9636975f3b2~mv2.jpg","5c383b_4a952c0d18834339a123362069e97e82~mv2.jpg","5c383b_3120130080e7438cacdfd14c39299b17~mv2.jpg"],
  "casa-mani": ["5c383b_a9f6aa50d3a44559aee6289afe36ebcf~mv2_d_6720_4480_s_4_2.jpg","5c383b_88e3828f1ca0459ea909e745c3b79196~mv2_d_6720_4480_s_4_2.jpg","5c383b_0e99a86ffe9847d5a712e0428605e4b0~mv2_d_6720_4480_s_4_2.jpg","5c383b_f0a8d5cb5ea2484eb0f1e204f4c3aba4~mv2_d_6231_4154_s_4_2.jpg","5c383b_0f02013ca50d40cea1580a1a7686f991~mv2_d_6365_4243_s_4_2.jpg","5c383b_2ea4055dc65b4a3184a2e891f9ab3fa3~mv2_d_6720_4480_s_4_2.jpg","5c383b_1bd88da82049431aa3e72fe8f597bbd1~mv2_d_6720_4480_s_4_2.jpg","5c383b_2b1b5d11c30f423980cd76d0731ef7f1~mv2_d_6720_4480_s_4_2.jpg","5c383b_d1c071eaa5c74ac69dbd755f2808c63c~mv2_d_5199_3466_s_4_2.jpg","5c383b_6361166f13c445e28e73c9d4337dbccc~mv2_d_6720_4480_s_4_2.jpg"],
  "aura-house": ["5c383b_8be95aceeb054c139923461a4b0fa067~mv2_d_2674_1896_s_2.jpg","5c383b_233b24a92a964f4f828b493dd4345cdb~mv2_d_2832_4256_s_4_2.jpg","5c383b_23c2d9ef2cfb46768b1a436bc5c8dc7a~mv2_d_4256_2832_s_4_2.jpg","5c383b_2f9f270caa1b44108f0ad800002c0656~mv2_d_4256_2832_s_4_2.jpg","5c383b_2517ac00087f41ba96107d95afb62f1b~mv2_d_4300_4184_s_4_2.jpg","5c383b_f994f94836154b328e49770f7eaf27b8~mv2_d_4256_2568_s_4_2.jpg","5c383b_c7b31e8cfbbf4a9493ba56f42a7e4d51~mv2_d_2832_4256_s_4_2.jpg","5c383b_a9894c3e37ed444c8f098fc8a8ca8ea0~mv2_d_4256_2832_s_4_2.jpg","5c383b_32ae9e58eb064bfc9ab594c02b017184~mv2_d_4256_2832_s_4_2.jpg","5c383b_b3baecffd6684ad0a6fb631ec04ef977~mv2_d_2832_4256_s_4_2.jpg"],
  "c-thru": ["5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg","5c383b_700ac76a8a7e4af88e42d48603f7c613~mv2.jpg","5c383b_a74db35204cf4b14811acd06773e6c70~mv2_d_1788_1899_s_2.jpg","5c383b_6a252e3b4d02449f8613778e14197209~mv2.jpg","5c383b_c0b64552bc3b4599b053c6213af0c9aa~mv2.jpg","5c383b_8b949f6a44fb4cdbb261f1da70825edd~mv2.jpg","5c383b_e512c085d2864e718285d3f0bbca6c46~mv2_d_1800_1200_s_2.jpg","5c383b_17a065f4eb4d479b863408b00b915311~mv2_d_1800_1200_s_2.jpg","5c383b_2ad9da5386244e4ea246f1d14533f7c2~mv2_d_1800_1200_s_2.jpg","5c383b_a2770133ea6e41cca23226810616cc45~mv2_d_1800_1200_s_2.jpg"],
  "lolivier": ["5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg","5c383b_257cefb780784aa0b63061a9ea2aa29b~mv2.jpg","5c383b_939f492be96147f39b37b6b1d1530e65~mv2.jpg","5c383b_46c560a6d94b4418bed1e9cf64c646ef~mv2.jpg","5c383b_e8b518eee52f4d8a8c837e66e331af6e~mv2.jpg","5c383b_3d31be3b7521442d871fce2ca5d5855e~mv2.jpg","5c383b_0d870af7326f4875976ceb413368be2f~mv2.jpg","5c383b_af281a68c16e4c3fb94b3620d3a07f4f~mv2.jpg","5c383b_9e34a5d7774045339d373605ba356a0a~mv2.jpg","5c383b_680d109689f24392bd1a4231d81cbde1~mv2.jpg"],
  "quiet-storm": ["5c383b_37553457927949b9b353ffd1e3210bb7~mv2_d_2560_1440_s_2.jpg","5c383b_9418a6ed29454c48851aee4739a55be2~mv2_d_2560_1440_s_2.jpg","5c383b_3ae9a87b8b524876875c807198fa21b8~mv2_d_2560_1440_s_2.jpg","5c383b_0cc02cedcedb4dd6aa6066b64e8e4df0~mv2_d_2560_1440_s_2.jpg","5c383b_be67b6b3cbf342d693e29ca18c1f75a2~mv2_d_2560_1440_s_2.jpg","5c383b_c51caa97fd75492583fe21aaddac4227~mv2_d_2560_1440_s_2.jpg","5c383b_865132670bcb422081f2de983b249617~mv2_d_2560_1440_s_2.jpg","5c383b_d232464d64c140b9acd3747f147f6e2e~mv2_d_2560_1440_s_2.jpg"],
  "le-bijou": ["5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg","5c383b_7d56173da62a4c48b18feeadf3b26627~mv2_d_3300_2419_s_4_2.jpg","5c383b_349ad261601f411282845fac17e4eae4~mv2.jpg","5c383b_28d75206da854c4c8a20817a431a2f10~mv2.jpg","5c383b_89aa2cae41af4a0088addcde739a8ee3~mv2.jpg","5c383b_e3595dd2bd3146838fa75e4ac252ef64~mv2.jpg","5c383b_1e3d7195fb844e22b60bc51bb63d37b6~mv2.jpg","5c383b_399dfa72d94b49a49da788a0464b7fb2~mv2.jpg","5c383b_2d3c5141a92d4ed5928e91b271511890~mv2.jpg","5c383b_634f6b29507640c7ba1d65da1e1ea960~mv2.jpg"],
  "house-g": ["5c383b_d8b5e33dc63c4cd9af9019f54523ea3f~mv2_d_5730_5687_s_4_2.jpg","5c383b_a01053afaaa447d08fc46a06820b54d3~mv2_d_5760_3840_s_4_2.jpg","5c383b_f20bd004d85a4feaa6ad9de515346150~mv2_d_5760_3840_s_4_2.jpg","5c383b_e1eb014ee84541d5a2840e03301b7c93~mv2_d_5702_3801_s_4_2.jpg","5c383b_ee4c9dd7678b413199aec31fbe2ad1e5~mv2_d_5760_3840_s_4_2.jpg","5c383b_3f60c4d3df6e4e20bf9d5c975be8186a~mv2_d_5760_3840_s_4_2.jpg","5c383b_e58ecce85f154188919fee1be21a3af8~mv2_d_5760_3840_s_4_2.jpg","5c383b_7d7133f381b945a7a28636247f8f20cb~mv2_d_5760_3840_s_4_2.jpg","5c383b_6035f7a90846474aba0e922bf9c14ddb~mv2_d_5760_3840_s_4_2.jpg","5c383b_89e20dfa5e3347caa173a8f72fa22ec4~mv2_d_5759_3837_s_4_2.jpg"],
  "casa-h": ["5c383b_6e48b6f978af4a6c852306e82defb5a2~mv2.jpg","5c383b_79f27591c68641f5abacef5c5c9dc729~mv2.jpg","5c383b_30e83f23d3044ced8c692784faf50290~mv2.jpg","5c383b_82e37681f84745d8be140f15cac1a89c~mv2.jpg","5c383b_a1245b0acc0945e1a3e431016253a778~mv2.jpg","5c383b_7842f8bcba194ce0b2b8157e07b6cdbb~mv2.jpg","5c383b_d343c06a29ba4689804f74eebcd8c122~mv2.jpg","5c383b_288e8aff1dda4604b66c51f16efe6574~mv2.jpg","5c383b_71fdd520a1814c11bdfbc9270b43911e~mv2.jpg"],
  "neo-soul": ["5c383b_0c990cf327cd4e00a23ea997cc8df0ef~mv2_d_2560_1440_s_2.jpg","5c383b_0be22247dc024cbe9b736c08b85f597b~mv2_d_2560_1440_s_2.jpg","5c383b_b074f44ae27c4ead96ac5fefeaf1f870~mv2_d_2560_1440_s_2.jpg","5c383b_3e63015f82f24cc38079e19c9c142568~mv2_d_2560_1440_s_2.jpg","5c383b_39c681a391904ba5bcb73ccb9aa4cfb7~mv2_d_2560_1440_s_2.jpg","5c383b_b8f362fd5896441ea62dd7508420c932~mv2_d_2560_1441_s_2.jpg","5c383b_64ef3275421d48cca6feb348d84a8274~mv2_d_2560_1441_s_2.jpg","5c383b_8b5d8fc108104f899d80cc3dcd29262b~mv2_d_2560_1441_s_2.jpg","5c383b_da67860cae17475c8f96fd39b6df4739~mv2_d_2560_1441_s_2.jpg"],
  "29degrees": ["5c383b_ee09bf9ac7d344dda676920c3bd36462~mv2_d_1800_1200_s_2.jpg","5c383b_43422a7abb5d4d6496bff31ea257f79b~mv2.jpg","5c383b_a1aa346c4601494082bbd3ac99be5707~mv2_d_1800_1200_s_2.jpg","5c383b_1c44f1b7f6d14ceb8a181dc9b1583776~mv2_d_1800_1200_s_2.jpg","5c383b_436ec028ad4c4bf8a0120a0b7928d91c~mv2.jpg","5c383b_e6f1d2fd73ab4b0aaf7d26c067444274~mv2.jpg","5c383b_d1c01ed73bf3495d91bcbbc66426e3e7~mv2_d_1800_1200_s_2.jpg","5c383b_0685f94a8360485b8734c509d3fe9f49~mv2_d_1800_1200_s_2.jpg","5c383b_383959ccae0c42a38ea2c942add8df1c~mv2_d_1800_1200_s_2.jpg","5c383b_caa183bb58e5444286728d6388a1d8f0~mv2_d_1800_1200_s_2.jpg"],
  "en-suite": ["5c383b_e660755345994c8abf6b93a1bc2b6df9~mv2.jpg","5c383b_e8c04611cec1445993842a289356a0a2~mv2.jpg","5c383b_181567c37df5419baf12968bf36be13f~mv2.jpg","5c383b_913ed2417e8d485f9f3bf54686e72f26~mv2.jpg","5c383b_bfd14a73de9d40f28e829577d074296b~mv2.jpg","5c383b_72f49837e80241dd8976007ae333b94c~mv2.jpg","5c383b_9efd199eadcd4208af7acd6893c46792~mv2.jpg","5c383b_ed7d76ee11804f7ba93fe72c331e9d6d~mv2.jpg","5c383b_2d52734942534cc1b3d3619a6dca77f9~mv2.jpg","5c383b_a031f0138d6045ca89b2bace6e383341~mv2.jpg"],
};

// Apartment galleries (existing curated PHOTO keys).
const APT = {
  ying:    ["ying_ext_tall", "ying_wide", "ying_int_1", "ying_int_2", "ying_int_3", "ying_int_4", "ying_int_5", "ying_int_6", "ying_int_7"],
  stanley: ["stanley_ext_1", "stanley_ext_2", "stanley_wide", "stanley_wide_2", "stanley_int_1", "stanley_int_2", "stanley_int_3", "stanley_int_4", "stanley_int_5"],
  genesee: ["genesee_ext_tall", "genesee_wide", "genesee_int_1", "genesee_int_2", "genesee_int_3", "genesee_int_4", "genesee_int_5", "genesee_int_6", "genesee_int_7"],
};

const CATEGORIES = [
  {
    key: "sfr", label: "Single Family Residences",
    items: [
      { id: "one-oak", name: "One Oak", loc: "Sunset Strip, Los Angeles", year: "2015", gallery: GAL["one-oak"],
        text: "Perched on a private street above the Sunset Strip, One Oak is a two-story glass pavilion engineered for 180-degree views of downtown Los Angeles and the Pacific. Encased in glass, the open plan flows freely from room to room, framing the city at every turn.\n\nInside: the signature Noesis floating staircase, 12-foot ceilings, a 500-bottle wine cellar and a gourmet kitchen with top-of-the-line appliances. The expansive terrace opens to a true infinity-edge pool and spa. Four bedrooms, five baths, fully smart-home integrated.",
        facts: [["Bedrooms", "4"], ["Baths", "5"], ["Ceilings", "12 ft"], ["Built", "2015"]] },
      { id: "casa-mani", name: "Casa Mani", loc: "Beverly Hills", year: "2018", gallery: GAL["casa-mani"],
        text: "A contemporary retreat in the heart of Beverly Hills, minutes from the area's acclaimed schools, shopping and dining — a study in style and restraint from the outside in.\n\nSix bedrooms and eight baths, a fully glass-enclosed gym, a spa-grade bath with steam shower and private massage room, and a backyard built around a zero-edge saltwater pool screened by mature hedging. Control4 smart-home throughout, with designer fixtures and energy-efficient landscape design completing the estate.",
        facts: [["Bedrooms", "6"], ["Baths", "8"], ["Pool", "Zero-edge saltwater"], ["Built", "2018"]] },
      { id: "aura-house", name: "Aura House", loc: "Tel Aviv", year: "2017", gallery: GAL["aura-house"],
        text: "Set in one of Tel Aviv's most coveted neighborhoods, Aura House is an open, light-filled modern design that maximizes a tri-level, 4,500-square-foot footprint.\n\nA private elevator, soaring ceilings, six bedrooms and seven baths — designed, delivered and sold above asking in one of the world's fastest-rising cities. A demonstration of the Noesis standard, abroad.",
        facts: [["Bedrooms", "6"], ["Baths", "7"], ["Size", "4,500 sf"], ["Built", "2017"]] },
      { id: "c-thru", name: "C Thru", loc: "Beverly Grove, Los Angeles", year: "2016", gallery: GAL["c-thru"],
        text: "In the heart of Beverly Grove, minutes from Melrose and West 3rd, C Thru reads as a floating box of wood and ceramic, wrapped in glass and LED light. Behind a custom pivot door: soaring ceilings, wide-plank white oak floors and a suspended steel-and-glass staircase.\n\nFleetwood walls of glass dissolve into an expansive courtyard, while sliding corner doors open the living spaces to a backyard built around a zero-edge saltwater pool. Control4 smart-home and designer finishes throughout.",
        facts: [["Neighborhood", "Beverly Grove"], ["Floors", "White oak"], ["Pool", "Zero-edge saltwater"], ["Built", "2016"]] },
      { id: "lolivier", name: "L'Olivier House", loc: "Los Angeles", year: "2015", gallery: GAL["lolivier"],
        text: "A 120-year-old olive tree, framed behind two stories of glass, was the sole inspiration for L'Olivier — every decision made to preserve and celebrate it. The living heirloom anchors the home, in view from the gourmet kitchen and the light-filled living room.\n\nThe master suite is expansive and private, overlooking the pool, with a sitting area and oversized bath. Its painstaking tilework — a nod to Moroccan craft — is a statement of the Noesis commitment to design and detail.",
        facts: [["Inspiration", "120-yr olive tree"], ["Outdoor", "Pool"], ["City", "Los Angeles"], ["Built", "2015"]] },
      { id: "quiet-storm", name: "Quiet Storm", loc: "Outpost Estates, Beverly Hills", year: "2018", gallery: GAL["quiet-storm"],
        text: "Once the estate of a music legend, this near-acre-and-a-half in coveted Outpost Estates was reimagined by Noesis as a two-parcel development — 2745 Outpost (33,567 sf) and 2755 Outpost (29,301 sf).\n\nTwo distinct contemporary residences, fully designed, with plans approved by the Mulholland Scenic Parkway Design Review Board and every building department — ready-to-issue permits in hand. Entitlement and delivery, de-risked.",
        facts: [["Area", "Outpost Estates"], ["Parcels", "Two · 33,567 + 29,301 sf"], ["Status", "RTIs in hand"], ["Year", "2018"]] },
      { id: "le-bijou", name: "Le Bijou", loc: "Beverly Hills", year: "2015", gallery: GAL["le-bijou"],
        text: "Le Bijou — 'the jewel' — opens with a striking composition of wood, color and dimension that rewards a closer look. The sleek gourmet kitchen sits between the formal dining and family rooms, all overlooking a lush garden, terrace, pool and Jacuzzi.\n\nReceding pocket doors make seamless indoor-outdoor living real. The master suite adds a fireplace and a private balcony spanning the width of the home, with a floating dual vanity, freestanding tub and oversized shower — luxurious, elegant and entirely livable.",
        facts: [["Meaning", "“The Jewel”"], ["Outdoor", "Pool + Jacuzzi"], ["City", "Beverly Hills"], ["Built", "2015"]] },
      { id: "house-g", name: "House G", loc: "Melrose, Los Angeles", year: "2016", gallery: GAL["house-g"],
        text: "Centrally located in the Melrose district, House G draws the outdoors in through towering windows and glass pocket doors that open to a private pool and spa. High ceilings give the nearly 3,900-square-foot plan real depth and scale.\n\nFive bedrooms and five full baths, minutes from West Hollywood's finest dining, nightlife and shops.",
        facts: [["Size", "~3,900 sf"], ["Bedrooms", "5"], ["Baths", "5"], ["City", "Los Angeles"]] },
      { id: "casa-h", name: "Casa H", loc: "West Hollywood", year: "2013", gallery: GAL["casa-h"],
        text: "On the market just three days, Casa H broke neighborhood records — sold above asking on a homesite overlooking the Hollywood Hills.\n\nDesigned to maximize space and bring the outdoors in, the home uses sculptural cut-outs for light, privacy and serenity. The exterior centers on a pool and cabana; inside, five bedrooms and 5.5 baths, high-end finishes, and the floating staircase that has become a Noesis hallmark.",
        facts: [["Sold", "In 3 days, over ask"], ["Bedrooms", "5"], ["Baths", "5.5"], ["Built", "2013"]] },
      { id: "neo-soul", name: "Neo Soul Home", loc: "Outpost Estates, Beverly Hills", year: "2018", gallery: GAL["neo-soul"],
        text: "A shovel-ready opportunity in celebrity-studded Outpost Estates: issued permits for a new two-story, nearly 6,000-square-foot architectural residence conceived by Noesis.\n\nThe existing single-story ranch — four bedrooms across roughly 3,400 square feet — has been remodeled to immaculate condition, leaving a rare, build-ready canvas in one of Los Angeles' most coveted enclaves.",
        facts: [["Area", "Outpost Estates"], ["Planned", "~6,000 sf"], ["Status", "Permits issued"], ["Year", "2018"]] },
      { id: "29-degrees", name: "29 Degrees", loc: "Los Angeles", year: "2016", gallery: GAL["29degrees"],
        text: "A modern architectural retreat on a serene, tree-lined street, 29 Degrees is a newly constructed open-concept home by Noesis. Floor-to-ceiling Fleetwood vanishing doors erase the line between inside and out.\n\nThe oversized, spa-like master suite adds a fireplace, custom closet and private balcony; the gourmet kitchen offers dual islands and professional-grade appliances. Control4 smart-home throughout — minutes from Beverly Hills, The Grove and the Sunset Strip.",
        facts: [["Doors", "Fleetwood vanishing"], ["Tech", "Control4"], ["City", "Los Angeles"], ["Built", "2016"]] },
      { id: "en-suite", name: "En-Suite", loc: "Los Angeles", year: "2014", gallery: GAL["en-suite"],
        text: "En-Suite is defined by flow — nearly 4,000 square feet in which every room and terrace was planned for both privacy and connection. The entrance sets the tone with a sculpted waterfall and fire feature.\n\nTwo full master suites anchor the four-bedroom, six-bath plan. Clean lines, modern texture and impeccably crafted built-ins run throughout, with a formal dining room, gourmet kitchen and indoor-outdoor living that opens onto pool-side patios and terraces.",
        facts: [["Size", "~4,000 sf"], ["Bedrooms", "4"], ["Baths", "6"], ["Built", "2014"]] },
    ],
  },
  {
    key: "apt", label: "Apartment Buildings",
    items: [
      { id: "ying-yang-lofts", name: "Ying Yang Lofts", loc: "Los Angeles", year: "2019", gallery: APT.ying, cover: "ying_ext_tall",
        text: "Brand-new townhouse apartments designed and built by Noesis for the trendsetters, tastemakers and families who want to live and play in the heart of Los Angeles — culture, dining, entertainment and nightlife all within walking distance.\n\nEach two-bedroom, 2.5-bath unit with flex space carries Porcelanosa fixtures, Caesarstone counters and custom Miton Italian kitchens. Indoor-outdoor California living runs throughout — private grassed yards and rooftop decks with unobstructed city views — fully equipped with LG stainless appliances, full-size laundry and a two-car garage.",
        facts: [["Layout", "2 BD · 2.5 BA + flex"], ["Outdoor", "Yards + roof decks"], ["Parking", "2-car garage"], ["Built", "2019"]] },
      { id: "stanley-lofts", name: "Stanley Lofts", loc: "West Hollywood, Los Angeles", year: "2018", gallery: APT.stanley, cover: "stanley_ext_1",
        text: "Built and designed by Noesis, these boutique townhouse apartments offer a glamorous lifestyle within walking distance of all West Hollywood has to offer — dining, entertainment and nightlife.\n\nFour luxurious townhomes, each three bedrooms and 2.5 baths, finished with Porcelanosa and Graff tile and fixtures, Caesarstone countertops and custom Miton Italian kitchens. Every unit comes fully equipped with LG stainless appliances, full-size laundry and two covered parking spaces.",
        facts: [["Units", "4 townhomes"], ["Layout", "3 BD · 2.5 BA"], ["Kitchens", "Miton Italian"], ["Parking", "2 covered"]] },
      { id: "my-genesee", name: "My Genesee", loc: "Beverly Grove, Los Angeles", year: "2017", gallery: APT.genesee, cover: "genesee_ext_tall",
        text: "Luxury living in one of Los Angeles's most sought-after neighborhoods, Beverly Grove. Designed and built by Noesis, these one-of-a-kind three-bedroom, 2.5-bath condo-style apartments feature state-of-the-art Italian kitchens with Caesarstone countertops, new LG appliances, in-unit laundry and large custom walk-in closets.\n\nA four-unit, fully secured building with reserved parking in a fully equipped garage.",
        facts: [["Units", "4-unit building"], ["Layout", "3 BD · 2.5 BA"], ["Counters", "Caesarstone"], ["Parking", "Reserved garage"]] },
    ],
  },
  {
    key: "sls", label: "Small-Lot Subdivisions",
    items: [
      { id: "casablanca-homes", name: "Casablanca Homes", loc: "Los Angeles", gallery: ["casablanca"], cover: "casablanca",
        text: "A small-lot subdivision delivering detached, fee-simple homes with the design language and finish level of the firm's luxury portfolio — letting buyers own new construction in dense, high-demand Los Angeles neighborhoods.",
        facts: [["Type", "Small-lot subdivision"], ["City", "Los Angeles"]] },
      { id: "alexandria-homes", name: "Alexandria Homes", loc: "Los Angeles", gallery: ["alexandria"], cover: "alexandria",
        text: "Detached small-lot homes developed and built by Noesis, combining the privacy of single-family living with the efficiency and density of an infill subdivision.",
        facts: [["Type", "Small-lot subdivision"], ["City", "Los Angeles"]] },
    ],
  },
];

function Projects({ setPage }) {
  const [tab, setTab] = React.useState("sfr");
  const [lb, setLb] = React.useState(null);     // { project, index }
  const cat = CATEGORIES.find(c => c.key === tab);
  const feat = cat.items[0];
  const rest = cat.items.slice(1);
  const openLb = (p, i) => setLb({ project: p, index: i || 0 });

  return (
    <main className="page-enter">
      {/* HERO */}
      <section style={{ paddingTop: "clamp(56px, 7vw, 96px)", paddingBottom: "clamp(28px, 4vw, 48px)" }}>
        <div className="wrap grid-12" style={{ alignItems: "end" }}>
          <div className="col-8">
            <div className="eyebrow"><span className="dot" /> Properties · 2009 — Present</div>
            <h1 className="h-display lx-h u-mt-24"><span className="ln"><span>Properties</span></span></h1>
          </div>
          <div className="col-4">
            <p className="lede">
              Luxury residences and buildings designed, developed and delivered by the Noesis
              team — the operating record behind the way we manage projects for clients today.
            </p>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="section--tight" style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", position: "sticky", top: 64, zIndex: 20, background: "color-mix(in oklab, var(--bone) 88%, transparent)", backdropFilter: "blur(12px)", paddingTop: 22, paddingBottom: 22 }}>
        <div className="wrap u-flex u-between u-center" style={{ flexWrap: "wrap", gap: 16 }}>
          <div className="u-flex u-gap-12" style={{ flexWrap: "wrap" }}>
            {CATEGORIES.map(c => (
              <button key={c.key} onClick={() => setTab(c.key)} className={`chip ${tab === c.key ? "chip--active" : ""}`} style={{ border: 0 }}>
                {c.label} <span style={{ opacity: 0.6 }}>· {c.items.length}</span>
              </button>
            ))}
          </div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)" }}>{cat.items.length} projects</div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section" style={{ paddingBottom: "clamp(36px, 4.5vw, 64px)" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 28 }}><span className="dot" /> Featured · {cat.label}</div>
          <div className="pfeat">
            <div className="pfeat__media" onClick={() => openLb(feat, 0)}>
              <img src={wix(feat.cover || feat.gallery[0], { w: 1900 })} alt={feat.name} />
              {feat.gallery.length > 1 && <div className="pfeat__badge">{feat.gallery.length} Photos</div>}
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)" }}>
                {feat.loc}{feat.year ? ` · ${feat.year}` : ""}
              </div>
              <h2 className="h-2 u-mt-8" style={{ textTransform: "none" }}>{feat.name}</h2>
              <div className="pfeat__facts">
                {feat.facts.slice(0, 4).map(([k, v]) => (
                  <div className="pfeat__fact" key={k}><div className="k">{k}</div><div className="v">{v}</div></div>
                ))}
              </div>
              <p className="body-lg" style={{ maxWidth: "54ch" }}>{feat.text.split("\n\n")[0]}</p>
              <button className="btn u-mt-40" onClick={() => openLb(feat, 0)}>Browse the Gallery <span className="arr" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className={`pgrid ${cat.key === "sfr" ? "pgrid--3" : "pgrid--2"}`}>
            {rest.map((p) => {
              const cover = p.cover || p.gallery[0];
              const count = p.gallery.length;
              return (
                <article key={p.id} className="pcard" onClick={() => openLb(p, 0)}>
                  <div className="pcard__media">
                    <img className="pcard__img" src={wix(cover, { w: 1100 })} alt={p.name} loading="lazy" />
                    <div className="pcard__over">
                      {count > 1 && <span className="pcard__count">{count} Photos</span>}
                      <span className="pcard__cta">View Gallery <span className="arr" /></span>
                    </div>
                  </div>
                  <div className="pcard__cap">
                    <div>
                      <div className="pcard__name">{p.name}</div>
                      <div className="pcard__loc">{p.loc}</div>
                    </div>
                    {p.year && <div className="pcard__yr">{p.year}</div>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap grid-12 u-end">
          <div className="col-8"><h2 className="h-1 caps" style={{ color: "var(--ink)" }}>Want this standard on <em className="accent">your project?</em></h2></div>
          <div className="col-4 u-tr"><button className="btn" onClick={() => setPage("services")}>Explore Services <span className="arr" /></button></div>
        </div>
      </section>

      {lb && <Lightbox project={lb.project} start={lb.index} onClose={() => setLb(null)} />}
    </main>
  );
}

// Immersive full-screen gallery — keeps the photography on the Properties tab.
function Lightbox({ project, start, onClose }) {
  const imgs = project.gallery;
  const [i, setI] = React.useState(start || 0);
  const [open, setOpen] = React.useState(false);
  const go = React.useCallback((d) => setI(p => (p + d + imgs.length) % imgs.length), [imgs.length]);
  const multi = imgs.length > 1;

  React.useEffect(() => {
    setOpen(true);
    document.body.style.overflow = "hidden";
    const lenis = window.__motion && window.__motion.lenis;
    if (lenis && lenis.stop) lenis.stop();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      if (lenis && lenis.start) lenis.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  // Preload the neighboring photos so the arrows feel instant.
  React.useEffect(() => {
    if (imgs.length < 2) return;
    [1, -1].forEach((d) => {
      const k = (i + d + imgs.length) % imgs.length;
      const pre = new Image();
      pre.src = wix(imgs[k], { w: 2000 });
    });
  }, [i, imgs]);

  const pad = (n) => (n < 10 ? "0" + n : "" + n);
  const lede = project.text.split("\n\n")[0];
  const onBackdrop = (e) => { if (e.target.classList.contains("lb__stage") || e.target.classList.contains("lb")) onClose(); };

  return (
    <div className={`lb ${open ? "is-open" : ""}`} onClick={onBackdrop} role="dialog" aria-label={`${project.name} gallery`}>
      <div className="lb__head">
        <div>
          <div className="lb__title">{project.name}</div>
          <div className="lb__sub">{project.loc}{project.year ? ` · ${project.year}` : ""}</div>
        </div>
        <div className="lb__headR">
          {multi && <div className="lb__count"><b>{pad(i + 1)}</b> &nbsp;/&nbsp; {pad(imgs.length)}</div>}
          <button className="lb__close" onClick={onClose} aria-label="Close gallery">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 2l12 12M14 2L2 14" /></svg>
          </button>
        </div>
      </div>

      <div className="lb__stage">
        {multi && (
          <button className="lb__arrow lb__arrow--prev" onClick={() => go(-1)} aria-label="Previous photo">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M14 3 L6 11 l8 8" /></svg>
          </button>
        )}
        <img className="lb__img" key={i} src={wix(imgs[i], { w: 2000 })} alt={`${project.name} — photograph ${i + 1}`} />
        {multi && (
          <button className="lb__arrow lb__arrow--next" onClick={() => go(1)} aria-label="Next photo">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M8 3 l8 8 l-8 8" /></svg>
          </button>
        )}
      </div>

      {lede && <div className="lb__caption">{lede}</div>}

      {multi && (
        <div className="lb__rail">
          {imgs.map((im, k) => (
            <img key={im} className={`lb__thumb ${k === i ? "is-active" : ""}`} src={wix(im, { w: 220 })}
              alt={`Thumbnail ${k + 1}`} onClick={() => setI(k)} />
          ))}
        </div>
      )}
    </div>
  );
}

window.Projects = Projects;
