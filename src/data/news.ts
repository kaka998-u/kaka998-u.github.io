// ─────────────────────────────────────────────────────────────
//  News / announcements shown on the homepage.
//  Add a new entry at the TOP of the array.
// ─────────────────────────────────────────────────────────────

export interface NewsItem {
  /** Shown on the left. Any short format: "Sep 2026", "Jan 15, 2026". */
  date: string;
  /** One line. Plain text, or HTML if you need a link. */
  text: string;
  /** true = render `text` as HTML (use for links). */
  html?: boolean;
}

// Style: simple past — "our paper was published", "I presented a poster".
// Keep that consistent across entries.
export const news: NewsItem[] = [
  {
    date: 'Nov 2026',
    text: 'I passed my Dissertation Proposal Meeting (DPM). Many thanks to my committee members: Prof. Wei Lu (Chair, ME), Prof. Anna Stefanopoulou (ME), Prof. Xun Huan (ME), and Prof. Ziyou Song (EECS).',
  },
  {
    date: 'Apr 2026',
    text: 'I presented our rapid battery capacity diagnosis work at the 2026 ARPA-E Energy Innovation Summit, San Diego, April 7–9.',
  },
  {
    date: 'Oct 2025',
    text: 'I advanced to PhD candidacy in Mechanical Engineering at the University of Michigan.',
  },
  {
    date: 'Sep 2025',
    text: 'Our paper on SOC and capacity estimation for MWh-scale LiFePO4 peak-shaving storage stations was published in <em>Energy</em>.',
    html: true,
  },
  {
    date: 'Jun 2025',
    text: 'I presented a poster on reinforcement learning for ultra-fast battery charging at the EECS 545 poster session, University of Michigan.',
  },
  {
    date: 'Aug 2024',
    text: 'I started my PhD in Mechanical Engineering at the University of Michigan.',
  },
  {
    date: 'Jul 2024',
    text: 'I earned my M.S. from the School of Vehicle and Mobility, Tsinghua University.',
  },
];
