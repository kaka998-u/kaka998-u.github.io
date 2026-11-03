// ─────────────────────────────────────────────────────────────
//  CV content shown on the CV page.
//  Ongoing work is written in the present tense, finished work in the past.
// ─────────────────────────────────────────────────────────────

export const education = [
  {
    school: 'University of Michigan',
    location: 'Ann Arbor, MI, USA',
    degree: 'Ph.D. Candidate, Mechanical Engineering',
    period: 'Aug 2024 – Present',
    note: 'GPA 4.0 / 4.0',
  },
  {
    school: 'Tsinghua University',
    location: 'Beijing, China',
    degree: 'M.S., Power Engineering and Engineering Thermophysics',
    period: 'Sep 2021 – Jul 2024',
    note: 'GPA 3.7 / 4.0',
    thesis:
      'Voltage Model, State Assessment and Inconsistent Control of Lithium Iron Phosphate Energy Storage Battery',
  },
  {
    school: 'Hefei University of Technology',
    location: 'Hefei, China',
    degree: 'B.Eng., Vehicle Engineering',
    period: 'Sep 2017 – Jul 2021',
    note: 'GPA 3.88 / 4.3 · Rank 1 / 255',
    thesis:
      'Research on Estimation Strategy of Available Energy State for Lithium Iron Phosphate Battery',
  },
];

export const experience = [
  {
    title: 'Rapid State-of-Health Diagnosis and Life Extension of Lithium-ion Batteries',
    org: 'University of Michigan · Funded by ARPA-E, U.S. Department of Energy · PI: Prof. Wei Lu',
    period: 'Aug 2024 – Present',
    bullets: [
      'Design current-pulse excitation via sensitivity analysis for rapid battery capacity and degradation-mode diagnosis within 10 minutes.',
      'Leverage historical charge/discharge segments from battery operational data for diagnostics and prognostics of remaining battery capacity.',
      'Use reinforcement learning and physics-based battery degradation models to design advanced charging protocols that extend lithium-ion battery life by over 30%.',
      'Validate the algorithms on microcontroller-based platforms for both single cells and battery packs.',
      'Work closely with a cross-functional team of 8 researchers, aligning testing, modeling and validation tasks under evolving project milestones.',
    ],
  },
  {
    title:
      'Physics-Constrained Learning for Onboard Battery Health Diagnostics from Partial Charging Segments with Millisecond-Level Microcontroller',
    org: 'University of Michigan',
    period: 'Jan 2026 – Present',
    bullets: [
      'Develop a physics-constrained neural network for battery SOH and electrode-level degradation diagnostics (LLI and LAM).',
      'Validate the model on 421 cells across 4 datasets and 76 charging protocols.',
      'Achieve RMSEs of 1.75% for SOH, 1.86% for LLI, and 1.80%/3.72% for electrode-specific LAM.',
      'Deploy a lightweight model (7,924 parameters) on an STM32 microcontroller, achieving 1.55 ms inference latency and 2.02% SOH RMSE.',
    ],
  },
  {
    title: 'Field-Data-Driven State Estimation for Grid-Scale Battery Storage Station',
    org: 'Tsinghua University',
    period: 'Aug 2023 – Jun 2024',
    bullets: [
      'Developed a field-data preprocessing pipeline for multi-channel synchronization, uniform temporal resampling and sensor anomaly rejection.',
      'Estimated cell capacity in the flat open-circuit voltage plateau with less than 3.36% error across 1,596 cells in a 1 MW / 2.45 MWh lithium iron phosphate battery station.',
      'Designed a hierarchical state-of-charge estimator combining hysteresis voltage reconstruction, an extended Kalman filter and inter-cluster bounds, reducing estimation error to 1.67%.',
    ],
  },
  {
    title: 'AI-Enhanced Low-Temperature SOC Estimation for LFP Batteries',
    org: 'Tsinghua University',
    period: 'Aug 2022 – Jun 2023',
    bullets: [
      'Trained a back-propagation neural network on voltage, current and temperature signals to capture the flat open-circuit voltage plateau nonlinearity that model-based observers miss.',
      "Coupled the neural network with an extended Kalman filter to correct the network's open-loop drift with closed-loop feedback.",
      'Validated robustness across long calculation intervals, capacity and initial-state errors, and current–voltage sampling noise, holding estimation error below 4% even at −20 °C.',
    ],
  },
];

/** Hands-on testing and tools, shown as two short groups. */
export const testing = [
  {
    title: 'Battery Degradation Testing',
    bullets: [
      'Perform battery cycling and electrochemical impedance spectroscopy (EIS) testing on Arbin, Neware, Maccor and BioLogic platforms, as well as the NHR 9300 high-voltage battery test system.',
      'Conduct constant-current, dynamic-profile and cycle-aging tests at various temperatures on individual cells and coin cells across NMC, NCA, LFP and sodium-ion chemistries.',
      'Analyze experimental data in Python to parameterize and validate full-order and reduced-order electrochemical models, as well as coupled electro-thermal-aging models.',
      'Perform charge–discharge testing on a 108S LFP battery pack with the NHR system and analyze CAN bus data with CANalyzer.',
    ],
  },
  {
    title: 'AI Coding Assistants for Research',
    bullets: [
      'Use Claude Code daily as a core research tool, configuring workflows, goals and code review tailored to different tasks.',
      'Apply it to battery data analysis and visualization.',
      'Build battery aging models with it, either developing them from scratch or directing it to explore the PyBaMM library for human-in-the-loop model development.',
    ],
  },
];

export const presentations = [
  {
    kind: 'Poster',
    year: 2026,
    title: 'Rapid State of Health Diagnosis by Model-Enabled Pulse Form Sequence',
    venue: '2026 ARPA-E Energy Innovation Summit, San Diego, CA, USA',
  },
  {
    kind: 'Poster',
    year: 2025,
    title:
      'Reinforcement Learning for Ultra-Fast Lithium-ion Battery Charging: Balancing Speed and Cycle Life',
    venue: 'EECS 545 Poster Session, University of Michigan',
  },
  {
    kind: 'Oral',
    year: 2023,
    title:
      'Experimental Study on High-Temperature Cycling Aging of Large-Capacity Lithium Iron Phosphate Batteries',
    venue: '5th International Conference on Energy Systems and Electrical Power, China',
  },
  {
    kind: 'Oral',
    year: 2022,
    title:
      'Hysteresis Characteristics Analysis and SOC Estimation of Lithium Iron Phosphate Batteries under Energy Storage Frequency Regulation Conditions and Automotive Dynamic Conditions',
    venue: '5th International Conference on Energy Storage and Intelligent Vehicles, China',
  },
];

export const honors = [
  {
    period: 'Fall 2024',
    title: 'Mechanical Engineering Block Grant Fellowship',
    note: 'Department of Mechanical Engineering, University of Michigan · $44,394, covering stipend and full tuition',
  },
];

export const funding = [
  {
    period: 'Aug 2024 – Present',
    title: 'Rapid State of Health Diagnosis by Model-Enabled Pulse Form Sequence',
    note: 'ARPA-E, U.S. Department of Energy · $2,680,000 · PI: Prof. Wei Lu',
    role: 'Student Lead: drive quarterly technical development, lead milestone and Tech-to-Market (T2M) reporting, and present progress reviews to the program team.',
  },
  {
    period: 'Aug 2024 – Present',
    title: 'NSF Future Manufacturing, Award No. 2328010',
    note: 'National Science Foundation · $3,000,000 · PI: Prof. Neil Dasgupta; Co-PI: Prof. Wei Lu',
    role: 'Thermal modeling for the ultrafast lamination task: develop and validate the heat transfer model used for process design.',
  },
];

export const skills = [
  { label: 'Programming', items: 'Python, MATLAB' },
  { label: 'Libraries & tools', items: 'PyTorch, Pandas, NumPy, PyBaMM, Stable Baselines3' },
  { label: 'Software', items: 'COMSOL, Simulink' },
  { label: 'Test equipment', items: 'Arbin, Neware, Maccor, BioLogic, NHR 9300, CANalyzer' },
];

export const teaching = [
  {
    course: 'Introduction to Automotive Energy and Roadmap of New Energy Vehicle Technologies',
    org: 'Tsinghua University',
    period: 'Fall 2023',
    note: 'Instructor: Prof. Hewu Wang · 2 credits · 32 hours · 63 graduate students',
  },
  {
    course: 'Introduction to Automotive Energy and Roadmap of New Energy Vehicle Technologies',
    org: 'Tsinghua University',
    period: 'Fall 2022',
    note: 'Instructor: Prof. Hewu Wang · 2 credits · 32 hours · 79 graduate students',
  },
];
