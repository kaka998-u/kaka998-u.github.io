// ─────────────────────────────────────────────────────────────
//  Personal details in one place — this is the file you will
//  edit most often.
// ─────────────────────────────────────────────────────────────

export const site = {
  /** Full name. Shown in the header, the homepage heading and the page title. */
  name: 'Zhihang Zhang',

  /** One-line title shown under your name. */
  title: 'PhD Candidate, Battery Management Algorithm and Application',

  /** Your institution. */
  affiliation: 'University of Michigan',

  /** City, shown on its own line under the institution. */
  location: 'Ann Arbor, MI',

  /** Profile photo, placed in public/. Leave empty to hide the avatar. */
  avatar: '/avatar.jpg',

  /** Homepage bio. One string per paragraph. */
  bio: [
    'I am a PhD candidate in Mechanical Engineering at the University of Michigan. My research focuses on lithium-ion battery state estimation and remaining useful life prediction under time-varying operating conditions, with applications in real-time health monitoring and second-life battery screening. I also investigate fast-charging control strategies that balance charging speed and battery longevity. A central focus of my research is bridging the gap between algorithm development and real-world implementation by enabling efficient estimation, prognostics, and control on resource-constrained battery management hardware.',
  ],

  /** Research interests, rendered as tags on the homepage. */
  interests: [
    'Battery state estimation (SOC / SOE / SOH)',
    'LiFePO4 modeling and hysteresis',
    'Grid-scale energy storage',
    'Data-driven battery diagnostics',
    'Battery aging and lifetime',
  ],

  /** Contact and profile links. Delete any line you do not need. */
  links: {
    email: 'zhihang@umich.edu',
    scholar: 'https://scholar.google.com/citations?user=DQEsMm0AAAAJ',
    github: 'https://github.com/kaka998-u',
    linkedin: 'https://www.linkedin.com/in/zhihang-zhang-219836325',
    // orcid: 'https://orcid.org/0000-0000-0000-0000',
  },

} as const;

export type SiteConfig = typeof site;
