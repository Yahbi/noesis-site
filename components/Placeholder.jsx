// Image helpers + Placeholder
// Wix CDN helper: build a sized image URL from a base ID.

// Higgsfield-enhanced originals (bytedance pure upscaler — fidelity-gated).
// Large renditions (w >= 1200) serve these local 2200w files; small crops stay on the Wix CDN.
const ENHANCED = {
  "5c383b_0685f94a8360485b8734c509d3fe9f49~mv2_d_1800_1200_s_2.jpg": "assets/img/e-0685f94a8360.jpg",
  "5c383b_0d870af7326f4875976ceb413368be2f~mv2.jpg": "assets/img/e-0d870af7326f.jpg",
  "5c383b_12fe95a979394c05baede9636975f3b2~mv2.jpg": "assets/img/e-12fe95a97939.jpg",
  "5c383b_17a065f4eb4d479b863408b00b915311~mv2_d_1800_1200_s_2.jpg": "assets/img/e-17a065f4eb4d.jpg",
  "5c383b_181567c37df5419baf12968bf36be13f~mv2.jpg": "assets/img/e-181567c37df5.jpg",
  "5c383b_1c44f1b7f6d14ceb8a181dc9b1583776~mv2_d_1800_1200_s_2.jpg": "assets/img/e-1c44f1b7f6d1.jpg",
  "5c383b_1e3d7195fb844e22b60bc51bb63d37b6~mv2.jpg": "assets/img/e-1e3d7195fb84.jpg",
  "5c383b_257cefb780784aa0b63061a9ea2aa29b~mv2.jpg": "assets/img/e-257cefb78078.jpg",
  "5c383b_288e8aff1dda4604b66c51f16efe6574~mv2.jpg": "assets/img/e-288e8aff1dda.jpg",
  "5c383b_28d75206da854c4c8a20817a431a2f10~mv2.jpg": "assets/img/e-28d75206da85.jpg",
  "5c383b_2ad9da5386244e4ea246f1d14533f7c2~mv2_d_1800_1200_s_2.jpg": "assets/img/e-2ad9da538624.jpg",
  "5c383b_2d3c5141a92d4ed5928e91b271511890~mv2.jpg": "assets/img/e-2d3c5141a92d.jpg",
  "5c383b_2d52734942534cc1b3d3619a6dca77f9~mv2.jpg": "assets/img/e-2d5273494253.jpg",
  "5c383b_30e83f23d3044ced8c692784faf50290~mv2.jpg": "assets/img/e-30e83f23d304.jpg",
  "5c383b_3120130080e7438cacdfd14c39299b17~mv2.jpg": "assets/img/e-3120130080e7.jpg",
  "5c383b_338fba4cdcd845ccbfb911288478e8bc~mv2.jpg": "assets/img/e-338fba4cdcd8.jpg",
  "5c383b_349ad261601f411282845fac17e4eae4~mv2.jpg": "assets/img/e-349ad261601f.jpg",
  "5c383b_383959ccae0c42a38ea2c942add8df1c~mv2_d_1800_1200_s_2.jpg": "assets/img/e-383959ccae0c.jpg",
  "5c383b_38f5ef1da26e4204b8e465e79f378f2e~mv2.jpg": "assets/img/e-38f5ef1da26e.jpg",
  "5c383b_399dfa72d94b49a49da788a0464b7fb2~mv2.jpg": "assets/img/e-399dfa72d94b.jpg",
  "5c383b_3d31be3b7521442d871fce2ca5d5855e~mv2.jpg": "assets/img/e-3d31be3b7521.jpg",
  "5c383b_4069deb335d44a7bbfaf2abaacbc25fd~mv2_d_2100_1290_s_2.png": "assets/img/e-4069deb335d4.jpg",
  "5c383b_413fa29f39a94acfb2d595791d1d777d~mv2.jpg": "assets/img/e-413fa29f39a9.jpg",
  "5c383b_43422a7abb5d4d6496bff31ea257f79b~mv2.jpg": "assets/img/e-43422a7abb5d.jpg",
  "5c383b_436ec028ad4c4bf8a0120a0b7928d91c~mv2.jpg": "assets/img/e-436ec028ad4c.jpg",
  "5c383b_46c560a6d94b4418bed1e9cf64c646ef~mv2.jpg": "assets/img/e-46c560a6d94b.jpg",
  "5c383b_4a952c0d18834339a123362069e97e82~mv2.jpg": "assets/img/e-4a952c0d1883.jpg",
  "5c383b_57dbe21d67d545458a9efcc900929f26~mv2.jpg": "assets/img/e-57dbe21d67d5.jpg",
  "5c383b_597ed5a457654c23a1f2afb1a72b8bb8~mv2.jpg": "assets/img/lebijou-cover.jpg",
  "5c383b_618462c222ab415dbf9002ddbcf2d4ba~mv2_d_1932_1302_s_2.png": "assets/img/e-618462c222ab.jpg",
  "5c383b_634f6b29507640c7ba1d65da1e1ea960~mv2.jpg": "assets/img/e-634f6b29507.jpg",
  "5c383b_680d109689f24392bd1a4231d81cbde1~mv2.jpg": "assets/img/e-680d109689f2.jpg",
  "5c383b_6a252e3b4d02449f8613778e14197209~mv2.jpg": "assets/img/e-6a252e3b4d02.jpg",
  "5c383b_6d4172cf48524e228ed8a2794b2a76a9~mv2.jpg": "assets/img/e-6d4172cf4852.jpg",
  "5c383b_6e48b6f978af4a6c852306e82defb5a2~mv2.jpg": "assets/img/casah-cover.jpg",
  "5c383b_700ac76a8a7e4af88e42d48603f7c613~mv2.jpg": "assets/img/e-700ac76a8a7e.jpg",
  "5c383b_71fdd520a1814c11bdfbc9270b43911e~mv2.jpg": "assets/img/e-71fdd520a181.jpg",
  "5c383b_72f49837e80241dd8976007ae333b94c~mv2.jpg": "assets/img/e-72f49837e802.jpg",
  "5c383b_7842f8bcba194ce0b2b8157e07b6cdbb~mv2.jpg": "assets/img/e-7842f8bcba19.jpg",
  "5c383b_79f27591c68641f5abacef5c5c9dc729~mv2.jpg": "assets/img/e-79f27591c686.jpg",
  "5c383b_82e37681f84745d8be140f15cac1a89c~mv2.jpg": "assets/img/e-82e37681f847.jpg",
  "5c383b_89aa2cae41af4a0088addcde739a8ee3~mv2.jpg": "assets/img/e-89aa2cae41af.jpg",
  "5c383b_8b949f6a44fb4cdbb261f1da70825edd~mv2.jpg": "assets/img/e-8b949f6a44fb.jpg",
  "5c383b_913ed2417e8d485f9f3bf54686e72f26~mv2.jpg": "assets/img/e-913ed2417e8d.jpg",
  "5c383b_939f492be96147f39b37b6b1d1530e65~mv2.jpg": "assets/img/e-939f492be961.jpg",
  "5c383b_9e34a5d7774045339d373605ba356a0a~mv2.jpg": "assets/img/e-9e34a5d77740.jpg",
  "5c383b_9efd199eadcd4208af7acd6893c46792~mv2.jpg": "assets/img/e-9efd199eadcd.jpg",
  "5c383b_a031f0138d6045ca89b2bace6e383341~mv2.jpg": "assets/img/e-a031f0138d60.jpg",
  "5c383b_a1245b0acc0945e1a3e431016253a778~mv2.jpg": "assets/img/e-a1245b0acc09.jpg",
  "5c383b_a1aa346c4601494082bbd3ac99be5707~mv2_d_1800_1200_s_2.jpg": "assets/img/e-a1aa346c4601.jpg",
  "5c383b_a2770133ea6e41cca23226810616cc45~mv2_d_1800_1200_s_2.jpg": "assets/img/e-a2770133ea6e.jpg",
  "5c383b_a74db35204cf4b14811acd06773e6c70~mv2_d_1788_1899_s_2.jpg": "assets/img/e-a74db35204cf.jpg",
  "5c383b_a8ab5be38572479d819d7829987a8901~mv2.jpg": "assets/img/e-a8ab5be38572.jpg",
  "5c383b_af281a68c16e4c3fb94b3620d3a07f4f~mv2.jpg": "assets/img/e-af281a68c16e.jpg",
  "5c383b_b3d670a8b83a486498fae278402120af~mv2.jpg": "assets/img/cthru-cover.jpg",
  "5c383b_bfd14a73de9d40f28e829577d074296b~mv2.jpg": "assets/img/e-bfd14a73de9d.jpg",
  "5c383b_c0b64552bc3b4599b053c6213af0c9aa~mv2.jpg": "assets/img/e-c0b64552bc3b.jpg",
  "5c383b_caa183bb58e5444286728d6388a1d8f0~mv2_d_1800_1200_s_2.jpg": "assets/img/e-caa183bb58e5.jpg",
  "5c383b_d1c01ed73bf3495d91bcbbc66426e3e7~mv2_d_1800_1200_s_2.jpg": "assets/img/e-d1c01ed73bf3.jpg",
  "5c383b_d343c06a29ba4689804f74eebcd8c122~mv2.jpg": "assets/img/e-d343c06a29ba.jpg",
  "5c383b_e3595dd2bd3146838fa75e4ac252ef64~mv2.jpg": "assets/img/e-e3595dd2bd31.jpg",
  "5c383b_e512c085d2864e718285d3f0bbca6c46~mv2_d_1800_1200_s_2.jpg": "assets/img/e-e512c085d286.jpg",
  "5c383b_e660755345994c8abf6b93a1bc2b6df9~mv2.jpg": "assets/img/e-e66075534599.jpg",
  "5c383b_e6f1d2fd73ab4b0aaf7d26c067444274~mv2.jpg": "assets/img/e-e6f1d2fd73ab.jpg",
  "5c383b_e7fa96e7c95b46f2921e31af34a46801~mv2.jpg": "assets/img/e-e7fa96e7c95b.jpg",
  "5c383b_e8b518eee52f4d8a8c837e66e331af6e~mv2.jpg": "assets/img/e-e8b518eee52f.jpg",
  "5c383b_e8c04611cec1445993842a289356a0a2~mv2.jpg": "assets/img/e-e8c04611cec1.jpg",
  "5c383b_ed7d76ee11804f7ba93fe72c331e9d6d~mv2.jpg": "assets/img/e-ed7d76ee1180.jpg",
  "5c383b_ee09bf9ac7d344dda676920c3bd36462~mv2_d_1800_1200_s_2.jpg": "assets/img/e-ee09bf9ac7d3.jpg",
  "5c383b_fcb4f7079a5e443589c23a058a3a3b1b~mv2.jpg": "assets/img/e-fcb4f7079a5e.jpg"
};

// Hi tier — gallery photos whose 2560-2832px natives were pure-upscaled (ByteDance,
// no repaint) to 3400px masters for the lightbox stage and full-bleed story scenes.
// Only served for requests above 2200px; everything smaller stays on the CDN.
// The three 2832x4256 portraits are deliberately absent: the upscaler's 4K cap
// returned 2737x4096 — BELOW their natives — so the CDN original remains best.
const ENHANCED_HI = {
  "5c383b_0be22247dc024cbe9b736c08b85f597b~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-0be22247.jpg",
  "5c383b_0c990cf327cd4e00a23ea997cc8df0ef~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-0c990cf3.jpg",
  "5c383b_0cc02cedcedb4dd6aa6066b64e8e4df0~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-0cc02ced.jpg",
  "5c383b_37553457927949b9b353ffd1e3210bb7~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-37553457.jpg",
  "5c383b_39c681a391904ba5bcb73ccb9aa4cfb7~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-39c681a3.jpg",
  "5c383b_3ae9a87b8b524876875c807198fa21b8~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-3ae9a87b.jpg",
  "5c383b_3e63015f82f24cc38079e19c9c142568~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-3e63015f.jpg",
  "5c383b_64ef3275421d48cca6feb348d84a8274~mv2_d_2560_1441_s_2.jpg": "assets/img/hi-64ef3275.jpg",
  "5c383b_865132670bcb422081f2de983b249617~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-86513267.jpg",
  "5c383b_8b5d8fc108104f899d80cc3dcd29262b~mv2_d_2560_1441_s_2.jpg": "assets/img/hi-8b5d8fc1.jpg",
  "5c383b_8be95aceeb054c139923461a4b0fa067~mv2_d_2674_1896_s_2.jpg": "assets/img/hi-8be95ace.jpg",
  "5c383b_9418a6ed29454c48851aee4739a55be2~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-9418a6ed.jpg",
  "5c383b_b074f44ae27c4ead96ac5fefeaf1f870~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-b074f44a.jpg",
  "5c383b_b8f362fd5896441ea62dd7508420c932~mv2_d_2560_1441_s_2.jpg": "assets/img/hi-b8f362fd.jpg",
  "5c383b_be67b6b3cbf342d693e29ca18c1f75a2~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-be67b6b3.jpg",
  "5c383b_c51caa97fd75492583fe21aaddac4227~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-c51caa97.jpg",
  "5c383b_d232464d64c140b9acd3747f147f6e2e~mv2_d_2560_1440_s_2.jpg": "assets/img/hi-d232464d.jpg",
  "5c383b_da67860cae17475c8f96fd39b6df4739~mv2_d_2560_1441_s_2.jpg": "assets/img/hi-da67860c.jpg"
};

function wix(id, opts = {}) {
  // Accept either a PHOTO key (e.g. "ying_ext_tall") or a raw wix media id.
  if (typeof PHOTO !== "undefined" && PHOTO[id]) id = PHOTO[id];
  // Local/absolute assets (e.g. Higgsfield-enhanced covers in assets/img/) pass through untouched.
  if (/^(https?:)?\//.test(id) || id.indexOf("assets/") === 0) return id;
  // Enhanced original available -> serve the nearest DERIVED width, not always the
  // 2200px master. Previously this was a boolean gate, so a 440px thumbnail slot
  // downloaded the full 2200px file and every srcSet descriptor was fiction.
  if (ENHANCED[id]) {
    const want = opts.w || 1600;
    const base = ENHANCED[id].replace(/\.jpg$/, "");
    if (want <= 900) return base + "-w800.jpg";
    if (want <= 1500) return base + "-w1400.jpg";
    return ENHANCED[id];                      // 2200px master — their true optical ceiling
  }
  // High tier: gallery photos whose 2560-2832px natives were upscaled to a 3400px
  // master. Served ONLY when the request outruns the CDN native (lightbox stage,
  // full-bleed story scenes) — smaller sizes still come from the CDN, so nothing
  // downgrades and no derivative set is shipped.
  if (typeof ENHANCED_HI !== "undefined" && ENHANCED_HI[id]) {
    const want = opts.w || 1600;
    if (want > 2200) return ENHANCED_HI[id];  // 3400px upscaled master
    // fall through to the CDN for everything the native already covers
  }
  // Offline/standalone: if the bundler inlined this media, return its blob URL.
  if (typeof window !== "undefined" && window.__resources && window.__MEDIA2KEY) {
    const key = window.__MEDIA2KEY[id];
    if (key && window.__resources[key]) return window.__resources[key];
  }
  // Wix CDN requires both w + h. `fit` preserves aspect (no crop); CSS object-fit handles cropping.
  const { w = 1600, h = w, q = 88, mode = "fit" } = opts;
  return `https://static.wixstatic.com/media/${id}/v1/${mode}/w_${w},h_${h},al_c,q_${q},enc_avif,quality_auto/${id}`;
}

// Curated photo set sourced from noesisusa.com (Stanley Lofts, Ying Yang Lofts, My Genesee).
// Mapped to the new institutional positioning.
const PHOTO = {
  // Hero exteriors
  stanley_ext_1:  "5c383b_4526984e710449c982db5b10fd6a008d~mv2_d_4928_3280_s_4_2.jpg",
  stanley_ext_2:  "5c383b_2ebb5989e45c4ef9964ce2c9f4e84e65~mv2_d_4928_3280_s_4_2.jpg",
  stanley_wide:   "5c383b_4584eb61a34148e7a662f9e636c16302~mv2_d_3992_2242_s_2.jpg",
  stanley_wide_2: "5c383b_8c58344d19774f59888c34595ae64132~mv2_d_3992_2242_s_2.jpg",
  stanley_int_1:  "5c383b_469fa67d063943bda7935b741804a24c~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_2:  "5c383b_6b036622986c43698ccd06c019a3a4f9~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_3:  "5c383b_89aab583806e4b2abf58690bf8fbf257~mv2_d_4913_3270_s_4_2.jpg",
  stanley_int_4:  "5c383b_7572778e768540a28916bf010e7799b7~mv2_d_4928_3280_s_4_2.jpg",
  stanley_int_5:  "5c383b_97261aa2dccc40d2968992bca21932f1~mv2_d_4925_3278_s_4_2.jpg",

  ying_ext_tall:  "5c383b_410f4aecfa8c4af3884ef4a170843a94~mv2_d_3280_4928_s_4_2.jpg",
  ying_wide:      "5c383b_a649ee414b654cbd96febb7b5459a67d~mv2_d_3992_2242_s_2.jpg",
  ying_int_1:     "5c383b_eed13ee3036b4392849efb36f4db9088~mv2_d_4916_3272_s_4_2.jpg",
  ying_int_2:     "5c383b_57c8faa24c5844e481cfbfc6e52eb6c3~mv2_d_4928_3280_s_4_2.jpg",
  ying_int_3:     "5c383b_88848ac850024e3186a1bea3935877d3~mv2_d_3236_4862_s_4_2.jpg",
  ying_int_4:     "5c383b_d9ad3e70450849269379cdf4d63f425d~mv2_d_3280_4928_s_4_2.jpg",
  ying_int_5:     "5c383b_18b43395cbf84f56b006a3e3bf7df051~mv2_d_3268_4910_s_4_2.jpg",
  ying_int_6:     "5c383b_ce70a1456bf5467f8019665865d50bab~mv2_d_4928_3280_s_4_2.jpg",
  ying_int_7:     "5c383b_f3b44fa483e54cdeba4aaee274b09a17~mv2_d_4928_3280_s_4_2.jpg",

  genesee_ext_tall: "5c383b_c7af355fa0124a47a6e6b7e14a9e4f6a~mv2_d_3280_4928_s_4_2.jpg",
  genesee_wide:     "5c383b_f58da50c87764b58b3ebabac82e8ded5~mv2_d_3992_2242_s_2.jpg",
  genesee_int_1:    "5c383b_305f1ebcf586400ea6e4afa1d7f5cf41~mv2_d_4747_3160_s_4_2.jpg",
  genesee_int_2:    "5c383b_fc489c6dee6649558bcd06960907dff7~mv2_d_4712_3146_s_4_2.jpg",
  genesee_int_3:    "5c383b_6b842c985e55480ca4ac1a4ed918d4cb~mv2_d_4928_3280_s_4_2.jpg",
  genesee_int_4:    "5c383b_e3ed6cee61c14125b1dab214025b282e~mv2_d_4850_3229_s_4_2.jpg",
  genesee_int_5:    "5c383b_ec10eb75197849b9a30b976ea4618e92~mv2_d_4784_3184_s_4_2.jpg",
  genesee_int_6:    "5c383b_e746200c864643859a1c1124c549e3e3~mv2_d_4809_3205_s_4_2.jpg",
  genesee_int_7:    "5c383b_543f4187371441c086ffb9c4bde4ef31~mv2_d_4812_3203_s_4_2.jpg",

  // Small-lot subdivisions (cover plates)
  casablanca:     "5c383b_4069deb335d44a7bbfaf2abaacbc25fd~mv2_d_2100_1290_s_2.png",
  alexandria:     "5c383b_618462c222ab415dbf9002ddbcf2d4ba~mv2_d_1932_1302_s_2.png",

  // Team
  igal:  "5c383b_48986226684e48b5a46a001483773972~mv2_d_3000_3000_s_4_2.jpg",
  erin:  "5c383b_bc8e36dd79ab45ca88cab6d1e439a126~mv2_d_3024_3024_s_4_2.jpg",
  eli:   "5c383b_62bdceb0b5884dbc983435194c9332dc~mv2_d_3024_3024_s_4_2.jpg",
  sara:  "5c383b_72a8ba6fa96c4e2585359a14107b2d65~mv2_d_3024_3024_s_4_2.jpg",
  jim:   "5c383b_fc570d696b644e9d9a9147495f114cfb~mv2_d_3024_3024_s_4_2.jpg",
};

// A failed image must never leave a blank well on a linen page — fade it out and
// let the container's tone carry, the same behaviour ProjectStory already used.
function imgFallback(e) { e.currentTarget.style.opacity = "0"; }

// Films ship in three tiers cut from the same 4K master. Pick by the device pixels
// the full-bleed surface actually has, so a phone is never handed a 4K autoplay
// loop for a panel that cannot resolve it.
//
// `<source media>` is deliberately not used: browsers evaluate it once at load and
// never re-check, and the player's error/retry path reassigns el.src directly.
// Which tiers actually ship, per film. 2160p is reserved for the surface where a
// visitor deliberately watches a building; the home hero and reel are ambient loops
// that autoplay behind a gradient scrim with headline text over them, where a 4K cut
// costs 69MB and a sustained 13 Mbps to buy detail nobody can see. The 4K masters for
// those two are archived, so raising the cap later is a one-line change.
const FILM_TIERS = {
  "noesis-film":   [1080, 1440],
  "noesis-reel":   [1080, 1440],
  "oneoak-film":   [1080, 1440, 2160],
  "noesis-launch": [1080, 1440],          // 137s — a 4K cut cannot fit the 100MB file ceiling
};
const FILM_V = 6;

// opts.ambient marks a decorative autoplaying loop (hero, reel, story plate) as
// opposed to a film the visitor deliberately starts. Ambient loops are suppressed
// entirely for anyone who asked for reduced motion or is saving data — they get
// the still that already sits beneath, and none of the megabytes.
function film(base, opts) {
  const o = opts || {};
  const tiers = FILM_TIERS[base] || [1080];
  const conn = navigator.connection || {};
  const thrifty = !!conn.saveData || /^(slow-)?2g$/.test(conn.effectiveType || "");
  const reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  if (o.ambient && (reduced || thrifty)) return null;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const px = (window.innerWidth || 1280) * dpr;
  let want;
  if (thrifty) want = 1080;
  else if (px < 2000) want = 1080;
  else if (px < 3000) want = 1440;
  else want = 2160;
  const pick = tiers.indexOf(want) !== -1 ? want : tiers[tiers.length - 1];
  return `assets/${base}-${pick}.mp4?v=${FILM_V}`;
}

window.wix = wix;
window.film = film;
window.imgFallback = imgFallback;
window.PHOTO = PHOTO;
// Reverse map (media id -> resource key) so wix() can resolve inlined blobs offline.
window.__MEDIA2KEY = Object.fromEntries(Object.entries(PHOTO).map(([k, v]) => [v, k]));

// (SVG architectural Placeholder component removed — it was unused; wix() + PHOTO remain.)
