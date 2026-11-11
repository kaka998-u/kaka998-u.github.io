// ─────────────────────────────────────────────────────────────
//  Research matrix: method rows × two application domains,
//  plus a full-width row (BMS application).
//  Each intersection holds one or more topics; every topic is
//  clickable and has its own detail panel.
// ─────────────────────────────────────────────────────────────

export interface Axis {
  id: string;
  label: string;
  /** Short form, used for the eyebrow line on narrow screens. */
  short?: string;
  /** Icon key rendered beside an application column header. */
  icon?: 'ev' | 'bess';
  /**
   * true = this row is one cell spanning every application column,
   * because it cuts across all of them. Its cell key is "<id>:all".
   */
  fullWidth?: boolean;
}

export interface Topic {
  /** Unique within its cell. Used in the selection key "<cell>#<id>". */
  id: string;
  /** Two or three words, shown inside the matrix square. */
  short: string;
  /** Heading of the detail panel. */
  headline: string;
  /** Optional supporting line under the heading. */
  teaser?: string;
  /** Body paragraphs. */
  body: string[];
  /** Figures shown under the text, served from public/. */
  figures?: { src: string; alt: string; caption: string }[];
  links?: { label: string; href: string }[];
}

export const methods: Axis[] = [
  { id: 'state', label: 'State Estimation' },
  { id: 'soh', label: 'State of Health Diagnosis' },
  { id: 'rul', label: 'Remaining Useful Life Prognosis' },
  { id: 'charging', label: 'Battery Control' },
  {
    id: 'bms',
    label: 'Battery Management System (BMS) Application',
    fullWidth: true,
  },
];

export const applications: Axis[] = [
  { id: 'ev', label: 'Electric Vehicles', short: 'EV', icon: 'ev' },
  {
    id: 'grid',
    label: 'Battery Energy Storage Systems',
    short: 'BESS',
    icon: 'bess',
  },
];

/** Keyed "<methodId>:<applicationId>", or "<methodId>:all" for a full-width row. */
export const cells: Record<string, Topic[]> = {
  'state:ev': [
    {
      id: 'joint',
      short: 'SOC / SOP / SOE estimation',
      headline: 'Joint state estimation for EV batteries',
      body: [
        'I develop equivalent-circuit-model-based algorithms in MATLAB/Simulink for SOC, SOP, and SOE estimation, including a joint estimation framework that accounts for SOH-dependent aging.',
      ],
      figures: [
        {
          src: '/images/research/joint-estimation-simulink.png',
          alt: 'Simulink model with linked blocks for SOC, SOH, capacity and resistance update, parameter interpolation, SOP and SOE estimation.',
          caption: 'Simulink implementation of the joint estimator: SOC, SOH, SOP and SOE blocks share capacity and resistance updates.',
        },
      ],
    },
  ],

  'state:grid': [
    {
      id: 'mwhsoc',
      short: 'MWh-scale SOC estimation',
      headline: 'SOC estimation for MWh-scale storage stations',
      body: [
        'Using real-world operating data from MWh-scale LFP energy storage stations, I develop methods for accurate SOC estimation under practical operating conditions.',
      ],
      figures: [
        {
          src: '/images/research/bess-station-structure.png',
          alt: 'Hierarchy from battery cells (2P) to battery units, modules (12S), clusters (19S) and the energy storage system (7P).',
          caption: 'Structure of the storage station: 2P battery units, 12S modules, 19S clusters, and 7 clusters in parallel.',
        },
        {
          src: '/images/research/bess-cluster-soc.png',
          alt: 'Seven plots of SOC over a charge-discharge cycle, comparing the reference, the proposed algorithm and the system algorithm for each cluster.',
          caption: 'SOC of the seven clusters over a full charge–discharge cycle: proposed algorithm against the reference and the station’s built-in algorithm.',
        },
      ],
    },
  ],

  'soh:ev': [
    {
      id: 'pulse',
      short: 'Short-period pulse',
      headline: 'Rapid capacity diagnosis with short current pulses',
      body: [
        'I design superposed current pulses lasting no more than 15 minutes to excite capacity-sensitive battery model parameters, enabling rapid estimation of C/20 capacity.',
      ],
    },
    {
      id: 'fieldev',
      short: 'Operating field data',
      headline: 'Online capacity estimation from EV field data',
      body: [
        'I estimate capacity online from charging and discharging segments collected in real-world EV operation, using a physics-based voltage model.',
      ],
    },
    {
      id: 'segments',
      short: 'Random charging segment',
      headline: 'SOH from random charging segments',
      body: [
        'Leveraging the relatively consistent charging patterns of EVs, I combine randomly selected charging segments with a neural network to estimate SOH and degradation modes within milliseconds on a microcontroller.',
      ],
    },
    {
      id: 'pinn',
      short: 'Physics-constrained learning on MCU',
      headline: 'Physics-constrained onboard health diagnostics from partial charging segments',
      body: [
        'I develop a physics-constrained neural network that diagnoses SOH and electrode-level degradation modes, loss of lithium inventory (LLI) and loss of active material (LAM), from partial charging segments. Validated on 421 cells across 4 datasets and 76 charging protocols, it achieves RMSEs of 1.75% for SOH, 1.86% for LLI, and 1.80%/3.72% for electrode-specific LAM. A lightweight version with 7,924 parameters runs on an STM32 microcontroller with 1.55 ms inference latency and 2.02% SOH RMSE.',
      ],
    },
  ],

  'soh:grid': [
    {
      id: 'fielddata',
      short: 'SOH diagnosis covering 1,596 LFP battery units',
      headline: 'SOH diagnosis covering 1,596 LFP battery units in service',
      body: [
        'Using a voltage-curve transformation method, I accurately estimate the capacity of 1,596 LFP cells in operating energy storage systems, overcoming the challenge posed by the flat open-circuit voltage (OCV) plateau.',
      ],
      figures: [
        {
          src: '/images/research/bess-cluster-capacity.png',
          alt: 'Seven scatter plots of remaining capacity against capacity for the battery units in each cluster, with the limiting units marked.',
          caption: 'Estimated capacity and remaining capacity of every battery unit in the seven clusters, with the limiting units marked.',
        },
      ],
    },
  ],

  'rul:ev': [
    {
      id: 'fullorder',
      short: 'Full-order degradation model',
      headline: 'Full-order degradation model of the LG M50LT cell',
      body: [
        'Using PyBaMM, I build a full-order degradation model of the LG M50LT cell that couples SEI growth (including SEI formation on cracks), particle cracking, stress- and rate-dependent loss of active material, irreversible lithium plating, and dead-lithium accumulation. The model is validated against experimental aging data at C-rates from 0.25C to 1.5C.',
      ],
      figures: [
        {
          src: '/images/research/degradation-model.png',
          alt: 'Diagram of the coupled degradation mechanisms in the negative electrode and how they reduce simulated C/20 capacity.',
          caption: 'Degradation mechanisms incorporated into the model and their contributions to SOH loss.',
        },
        {
          src: '/images/research/degradation-fit.png',
          alt: 'SOH versus cycle number at 0.25C to 1.5C, model lines against experimental points.',
          caption: 'Model predictions (lines) compared with experimental SOH measurements (points) at five C-rates.',
        },
      ],
    },
    {
      id: 'reduced',
      short: 'Reduced degradation model',
      headline: 'Reduced-order degradation model for MCU deployment',
      body: [
        'I develop a reduced-order degradation model incorporating SEI growth, loss of active material, and lithium plating, balancing predictive accuracy and computational efficiency for real-time deployment on resource-constrained microcontrollers.',
      ],
    },
  ],

  'rul:grid': [
    {
      id: 'aging',
      short: 'Semi-empirical aging model',
      headline: 'Semi-empirical aging model for storage cells',
      body: [
        'I build and validate a semi-empirical aging model for energy storage cells using manufacturer-provided aging data.',
      ],
    },
  ],

  'charging:ev': [
    {
      id: 'rllife',
      short: 'Reinforcement learning control for charging life extension',
      headline: 'Reinforcement learning charging for longer battery life',
      body: [
        'Using an experimentally calibrated pseudo-two-dimensional (P2D) electrochemical–thermal–aging model, I design reinforcement-learning-based charging strategies with the DSAC algorithm. With constraints on anode potential, temperature rise, and degradation, the resulting charging protocols extend battery life by over 30%.',
      ],
    },
  ],

  'charging:grid': [
    {
      id: 'inconsistency',
      short: 'Parallel-cluster inconsistency',
      headline: 'Suppressing circulating current across parallel clusters',
      body: [
        'I design a circulating-current suppression strategy for parallel battery clusters that regulates cluster temperatures to reduce internal resistance mismatch, suppressing circulating currents near the end of charging and discharging.',
      ],
    },
  ],

  'bms:all': [
    {
      id: 'mbd',
      short: 'Model-based development and embedded deployment',
      headline: 'From algorithm to microcontroller',
      body: [
        'I translate algorithms developed in MATLAB and Python into Simulink models, generate embedded C code, and deploy it on microcontrollers, validating functionality and real-time performance through model-in-the-loop (MIL), processor-in-the-loop (PIL), and hardware-in-the-loop (HIL) testing.',
      ],
    },
  ],
};

export function allTopics() {
  const out: {
    key: string;
    topic: Topic;
    method: Axis;
    app: Axis | null;
  }[] = [];
  for (const m of methods) {
    if (m.fullWidth) {
      for (const t of cells[`${m.id}:all`] ?? []) {
        out.push({ key: `${m.id}:all#${t.id}`, topic: t, method: m, app: null });
      }
    } else {
      for (const app of applications) {
        for (const t of cells[`${m.id}:${app.id}`] ?? []) {
          out.push({
            key: `${m.id}:${app.id}#${t.id}`,
            topic: t,
            method: m,
            app,
          });
        }
      }
    }
  }
  return out;
}
