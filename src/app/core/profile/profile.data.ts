import type { Profile } from './profile.model';

/**
 * The single copy deck for the site. Transcribed from the original design
 * sources in `legacy/`; edit here and both pages follow.
 */
export const PROFILE: Profile = {
  name: 'Nikhil Hukkerikar',
  discipline: 'Engineering Leader · Frontend Platforms & Design Systems · Advanced Angular',

  heroHeadline: ['I build the platform', '300 developers build on.'],

  heroSummary:
    "Engineering leader at Bank of America. I own Phoenix — the bank's internal Angular design system, CLI and form platform — backing 50 applications, with a 24-person team and a $3–4M budget I negotiate at the executive table. Sixteen years of frontend depth, from payment screens to the framework itself.",

  resumeSummary:
    "Engineering leader with 16 years in a large regulated enterprise. I lead a 24-person onshore/offshore team and own Phoenix — the bank's internal Angular design system, CLI and form-building platform — backing 50 applications and 300+ developers, with a $3–4M annual budget I negotiate directly with peer executives. Recent work: consolidating legacy applications onto one supported platform, cutting open-source vulnerability findings from 100K to 40K, and building the context layer that makes Copilot accurate against our internal framework. Started in 2010 as a developer on CashPro Online, Phoenix's largest consuming application.",

  contact: {
    location: 'Minneapolis, MN',
    email: 'nhukkerikar@gmail.com',
    phone: '+1 (312) 888-0053',
    linkedInLabel: 'linkedin.com/in/nikhil-hukkerikar',
    linkedInUrl: 'https://linkedin.com/in/nikhil-hukkerikar',
  },

  headlineMetrics: [
    { value: '16 yrs', label: 'In frontend engineering' },
    { value: '300+', label: 'Developers on my platform' },
    { value: '$3–4M', label: 'Annual budget owned' },
    { value: '100K→40K', label: 'Vulnerability findings cut' },
  ],

  work: [
    {
      id: 'phoenix',
      title: 'Phoenix',
      summary:
        "The bank's internal Angular 22 component library, CLI and platform — 50 applications, 300+ developers, including CashPro Online's 30+ sub-applications. Moved 30 delivery teams off legacy stacks onto it; upgrades that took three months now land as a one-week version bump.",
      detail: {
        routerLink: '/phoenix',
        label: 'How work moves through it',
      },
    },
    {
      id: 'phoenix-loom',
      title: 'Phoenix-Loom',
      summary:
        'A form engine covering 200+ payment types, shipped to production in place of a legacy system. Business analysts build and publish forms themselves under maker-checker approval — nobody releases their own work.',
    },
    {
      id: 'copilot-context',
      title: 'Copilot context layer',
      summary:
        "A framework-specific instruction layer for GitHub Copilot: per-entry-point API docs, usage constraints and canonical patterns, indexed so completions resolve against Phoenix's real APIs rather than generic Angular. Plus prompt-based CLI commands for code scanning and codebase mapping.",
    },
    {
      id: 'griffin',
      title: 'Griffin',
      summary:
        'A React-based alternative to Phoenix, launched so teams already fluent in React could onboard to the platform without retraining — same enterprise UX standards, security posture and delivery pipeline, a second framework door into the ecosystem.',
    },
  ],

  roles: [
    {
      id: 'boa-senior-technology-manager',
      title: 'Senior Technology Manager',
      org: 'Bank of America',
      period: 'Dec 2024 – Present',
      era: 'current',
      summary:
        'Own Phoenix end to end: 24-person onshore/offshore team, $3–4M budget, security posture, roadmap and releases across all three platform products. Hired 4 engineers, promoted 3, zero attrition.',
      highlights: [
        'Lead a 24-person onshore/offshore team of UX designers, engineers and QA analysts; 10 direct reports.',
        'Own the $3–4M annual Phoenix budget (since 2025), negotiated directly with peer executives.',
        'Accountable for security posture, compliance, roadmap and releases across all three platform products.',
        'Moved 30 delivery teams off legacy technology onto Phoenix v8 and Angular 22 (~3 months per team); upgrades now land as a single version bump, so a team moves to a new version in a week.',
        "Authored a framework-specific instruction layer for GitHub Copilot: per-entry-point API docs, usage constraints and canonical patterns, indexed so completions resolve against Phoenix's real APIs rather than generic Angular.",
        'Cut open-source vulnerability findings from 100K to 40K by consolidating the portfolio onto one supported version.',
        'Shipped Phoenix Loom to production, replacing a legacy form engine: 200+ payment types, with business analysts building and publishing forms under maker-checker approval.',
        'Built AI into daily workflow: prompt-based CLI commands for code scanning and codebase mapping, plus indexed per-component docs for Copilot accuracy on internal code.',
        'Run the central intake pipeline for 300+ developers, prioritizing UX/UI requests, enhancements and defects on a two-week bug SLA.',
        'Hired 4 full-time engineers and promoted 3, with zero attrition.',
      ],
    },
    {
      id: 'boa-technology-manager',
      title: 'Technology Manager, VP',
      org: 'Bank of America',
      period: 'Mar 2022 – Dec 2024',
      era: 'recent',
      summary:
        'Set Phoenix strategy for its next major release. Launched Griffin, a React-based alternative, and extended the framework for accessibility and mobile.',
      highlights: [
        'Moved from engineer to manager; set Phoenix strategy for its next major release — planning, new engagements, support, roadmap and hiring.',
        'Launched Griffin, a React-based alternative to Phoenix, so React-fluent teams could onboard without retraining.',
        "Held the framework to the bank's Global Information Security standards and shipped the changes that closed risks across the application portfolio.",
        'Extended the framework for accessibility and mobile; introduced tech-feasibility sessions during design, catching non-standard component usage early.',
      ],
    },
    {
      id: 'boa-software-engineer-iii',
      title: 'Software Engineer III, VP',
      org: 'Bank of America',
      period: 'Dec 2019 – Feb 2022',
      era: 'recent',
      summary:
        'Led the Phoenix framework team; set the upgrade and migration path for every application built on it. Built Docsmot.',
      highlights: [
        'Led the Phoenix framework team; set the upgrade and migration path for applications built on it.',
        'Built Docsmot, a virtual canvas editor for banking applications — drag-and-drop assembly that generates Angular markup and TypeScript.',
      ],
    },
    {
      id: 'phoenix-ui-contract',
      title: 'Phoenix UI',
      org: 'Infosys & Randstad (client: Bank of America)',
      period: 'Jun 2016 – Nov 2019',
      era: 'earlier',
      summary:
        'Built the reusable Angular component library that became Phoenix; published it to a private internal npm registry for delivery teams.',
      highlights: [
        'Built the reusable Angular component library that became Phoenix; themed it to enterprise UX standards and published it to a private internal npm registry.',
        'Added project scaffolding and git pre-commit hooks so teams started faster and kept a consistent code style.',
      ],
    },
    {
      id: 'cashpro-payments',
      title: 'CashPro Payments',
      org: 'Infosys Ltd (client: Bank of America)',
      period: 'Jun 2010 – May 2016',
      era: 'earlier',
      summary:
        'Built payment types for a global payments hub — Financial-i Innovation of the Year, 2011. Core contributor to the Dynamic Payment Generator; Infosys Dynamo Award.',
      highlights: [
        'Designed and built payment types for a global payments hub — Financial-i Innovation of the Year, 2011.',
        'Core contributor to the Dynamic Payment Generator, building payment layouts for corporate clients on the fly; won the Infosys Dynamo Award.',
      ],
    },
  ],

  skills: [
    {
      id: 'angular',
      title: 'Angular — expert, 14 yrs',
      detail:
        'Angular 22, Signal store, framework authorship, migration strategy, code generation, LLM support',
      resumeDetail:
        'Angular 22, Signal store, framework authorship, migration strategy, code generation',
      emphasis: true,
    },
    {
      id: 'frontend',
      title: 'Frontend engineering',
      detail: 'TypeScript, JavaScript, Angular 22+, React 18+, HTML5, CSS3, SASS, Bootstrap',
      resumeDetail: 'TypeScript, JavaScript, React 18+, HTML5, CSS3, SASS, Bootstrap',
      emphasis: true,
    },
    {
      id: 'ai',
      title: 'AI-assisted development',
      detail:
        'Copilot custom instruction sets, workspace indexing, LLM context design for proprietary codebases, prompt-based CLI tooling',
      resumeDetail:
        'Copilot custom instruction sets & workspace indexing, LLM context design for proprietary codebases, prompt-based CLI tooling, AI code scanning',
      emphasis: false,
    },
    {
      id: 'quality',
      title: 'Quality & accessibility',
      detail: 'Vitest, Playwright, WCAG 2.2 AA, Section 508, CI/CD automation',
      emphasis: false,
    },
    {
      id: 'platform',
      title: 'Platform & tooling',
      detail: 'Node.js, npm, Webpack, Git, GitHub, Figma',
      emphasis: false,
    },
    {
      id: 'backend',
      title: 'Backend & infrastructure',
      detail: 'Java, Spring MVC, REST, Oracle, OpenShift, Splunk, SDLC governance',
      resumeDetail: 'Java, Spring MVC, REST, Oracle, OpenShift, Splunk, Agile, SDLC governance',
      emphasis: false,
    },
  ],

  leadership: [
    'Org design',
    'People management',
    'Budget ownership',
    'Executive stakeholder negotiation',
    'Platform & design-system strategy',
    'Onshore & offshore delivery',
    'Security & regulatory compliance',
    'Hiring & coaching',
    'Legacy modernization',
    'AI integration',
  ],

  platform: {
    name: 'Phoenix',
    products: [
      { name: 'Design system', detail: 'Angular 22 component library' },
      { name: 'Phoenix CLI', detail: 'scaffolding, scanning, AI tooling' },
      { name: 'Loom', detail: 'form engine, 200+ payment types' },
    ],
    servingLines: [
      '50 applications · 300+ developers',
      'incl. CashPro Online with 30+ sub-apps',
      '(login, payments, payroll, dashboards)',
    ],
    metrics: [
      { value: '$3–4M', label: 'annual budget' },
      { value: '100K → 40K', label: 'OSS vulnerabilities' },
      { value: '30', label: 'teams migrated' },
      { value: '24', label: 'person team' },
    ],
  },

  education: {
    degree: 'Bachelor of Engineering, Electronics & Telecommunications',
    institution: 'Mumbai University, India',
    year: '2010',
  },
};
