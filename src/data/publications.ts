// ─────────────────────────────────────────────────────────────
//  Publication list — to add a paper, add one object to the top
//  of the array. Wrap your own name in **asterisks** and it will
//  be bolded automatically.
//
//  Last synced with Google Scholar: September 2026.
// ─────────────────────────────────────────────────────────────

export interface Publication {
  title: string;
  authors: string;
  /** Journal or conference name on its own — rendered in bold. */
  journal: string;
  /** Volume, issue, article number or page range. */
  details?: string;
  year: number;
  /** true = also featured under "Selected Publications" on the homepage */
  selected?: boolean;
  links?: {
    pdf?: string;
    doi?: string;
    code?: string;
    arxiv?: string;
    slides?: string;
    /** Fallback for work with no registered DOI. */
    scholar?: string;
  };
}

export const publications: Publication[] = [
  {
    title:
      'Thermal Consistency-Based Early Warning Research for Overcurrent Faults in Battery Energy Storage Systems',
    authors: 'D. S. Li, Y. Li, Y. Cheng, **Z. Zhang**, Y. Chen, M. Ouyang',
    journal: 'Energy',
    details: '141303',
    year: 2026,
    links: { doi: 'https://doi.org/10.1016/j.energy.2026.141303' },
  },
  {
    title:
      'Ultrafast (1–5 sec) Lamination of Perovskite Solar Cells With Self-Encapsulation Using Rapid Joule Heating',
    authors:
      'O. Okia, M. A. Uddin, T. Gao, **Z. Zhang**, V. M. Das, C. L. Lanaghan, A. C. Hurd, W. Lu, D. P. Fenning, N. P. Dasgupta',
    journal: 'Advanced Materials Technologies',
    details: 'e02474',
    year: 2026,
    links: { doi: 'https://doi.org/10.1002/admt.202502474' },
  },
  {
    title:
      'State-of-Charge and Capacity Estimation for MWh-Scale LiFePO4 Peak-Shaving Battery Energy Storage Stations Based on Real-World Operating Data',
    authors:
      '**Z. Zhang**, H. Wang, L. Lu, Y. Li, W. Xu, H. Liu, D. Li, M. Ouyang',
    journal: 'Energy',
    details: '139086',
    year: 2025,
    selected: true,
    links: { doi: 'https://doi.org/10.1016/j.energy.2025.139086' },
  },
  {
    title: 'Ultrafast (1 sec) Lamination of Perovskite PVs with In Situ Metrology',
    authors:
      'O. Okia, T. Gao, M. A. Uddin, J. Palmer, V. M. Das, C. Qian, **Z. Zhang**, Y.-P. Wang, C. Okwudire, D. P. Fenning, W. Lu, N. P. Dasgupta',
    journal: '2025 IEEE 53rd Photovoltaic Specialists Conference (PVSC)',
    details: '0503',
    year: 2025,
    links: { doi: 'https://doi.org/10.1109/PVSC59419.2025.11133332' },
  },
  {
    title:
      'A Comparative Study of the LiFePO4 Battery Voltage Models Under Grid Energy Storage Operation',
    authors: '**Z. Zhang**, Y. Li, H. Wang, L. Lu, X. Han, D. Li, M. Ouyang',
    journal: 'Journal of Energy Storage',
    details: '75, 109696',
    year: 2024,
    selected: true,
    links: { doi: 'https://doi.org/10.1016/j.est.2023.109696' },
  },
  {
    title:
      'High-Precision and Robust SOC Estimation of LiFePO4 Blade Batteries Based on the BPNN-EKF Algorithm',
    authors:
      '**Z. Zhang**, S. Chen, L. Lu, X. Han, Y. Li, S. Chen, H. Wang, Y. Lian, M. Ouyang',
    journal: 'Batteries',
    details: '9(6), 333',
    year: 2023,
    selected: true,
    links: { doi: 'https://doi.org/10.3390/batteries9060333' },
  },
  {
    title:
      'Accurate Remaining Available Energy Estimation of LiFePO4 Battery in Dynamic Frequency Regulation for EVs with Thermal-Electric-Hysteresis Model',
    authors: '**Z. Zhang**, L. Lu, Y. Li, H. Wang, M. Ouyang',
    journal: 'Energies',
    details: '16(13), 5239',
    year: 2023,
    links: { doi: 'https://doi.org/10.3390/en16135239' },
  },
  {
    title:
      'Experimental Study on High-Temperature Cycling Aging of Large-Capacity Lithium Iron Phosphate Batteries',
    authors: '**Z. Zhang**, L. Lu, Y. Li, H. Wang, M. Ouyang',
    journal: 'Journal of Physics: Conference Series',
    details: '2584(1), 012046',
    year: 2023,
    links: { doi: 'https://doi.org/10.1088/1742-6596/2584/1/012046' },
  },
  {
    title:
      'Hysteresis Characteristics Analysis and SOC Estimation of Lithium Iron Phosphate Batteries Under Energy Storage Frequency Regulation Conditions and Automotive Dynamic Conditions',
    authors: '**Z. Zhang**, Y. Li, S. Chen, X. Han, L. Lu, H. Wang, M. Ouyang',
    journal:
      'International Conference on Energy Storage and Intelligent Vehicles',
    details: '1266–1275',
    year: 2022,
    links: { doi: 'https://doi.org/10.1007/978-981-99-1027-4_132' },
  },
];

/** Turns **name** into <strong>name</strong>. */
export function renderAuthors(authors: string): string {
  return authors.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

/** Groups publications by year, newest first. */
export function groupByYear(pubs: Publication[]) {
  const map = new Map<number, Publication[]>();
  for (const pub of pubs) {
    const list = map.get(pub.year) ?? [];
    list.push(pub);
    map.set(pub.year, list);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
}
