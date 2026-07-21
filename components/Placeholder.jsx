// Image helpers + Placeholder
// Wix CDN helper: build a sized image URL from a base ID.

function wix(id, opts = {}) {
  // Accept either a PHOTO key (e.g. "ying_ext_tall") or a raw wix media id.
  if (typeof PHOTO !== "undefined" && PHOTO[id]) id = PHOTO[id];
  // Local/absolute assets (e.g. Higgsfield-enhanced covers in assets/img/) pass through untouched.
  if (/^(https?:)?\//.test(id) || id.indexOf("assets/") === 0) return id;
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

window.wix = wix;
window.PHOTO = PHOTO;
// Reverse map (media id -> resource key) so wix() can resolve inlined blobs offline.
window.__MEDIA2KEY = Object.fromEntries(Object.entries(PHOTO).map(([k, v]) => [v, k]));

// (SVG architectural Placeholder component removed — it was unused; wix() + PHOTO remain.)
