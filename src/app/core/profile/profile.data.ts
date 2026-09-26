import type { Metric, Profile, SkillGroup, WorkItem } from './profile.model';

/**
 * The single copy deck for the site. Transcribed from the original design
 * sources in `legacy/` and the two résumés in `resume/`; edit here and both
 * pages follow.
 *
 * Content that reads the same under both lenses is written once below and
 * composed into each lens's list, so a fact still lives in one place.
 */

// ── Shared pieces ─────────────────────────────────────────────────────────

const METRIC_BUDGET: Metric = { value: '$3–4M', label: 'Annual budget owned' };
const METRIC_VULNS: Metric = { value: '100K→40K', label: 'Vulnerability findings cut' };

const WORK_COPILOT: WorkItem = {
  id: 'copilot-context',
  title: 'Copilot context layer',
  summary:
    "A framework-specific instruction layer for GitHub Copilot: per-entry-point API docs, usage constraints and canonical patterns, indexed so completions resolve against Phoenix's real APIs rather than generic Angular. Plus prompt-based CLI commands for code scanning and codebase mapping.",
};

const PHOENIX_DETAIL = {
  routerLink: '/phoenix',
  label: 'How work moves through it',
} as const;

const SKILL_AI: SkillGroup = {
  id: 'ai',
  title: 'AI-assisted development',
  detail:
    'Copilot custom instruction sets, workspace indexing, LLM context design for proprietary codebases, prompt-based CLI tooling',
  resumeDetail:
    'Copilot custom instruction sets & workspace indexing, LLM context design for proprietary codebases, prompt-based CLI tooling, AI code scanning',
  emphasis: false,
};

const SKILL_BACKEND: SkillGroup = {
  id: 'backend',
  title: 'Backend & infrastructure',
  detail: 'Java, Spring MVC, REST, Oracle, OpenShift, Splunk, SDLC governance',
  resumeDetail: 'Java, Spring MVC, REST, Oracle, OpenShift, Splunk, Agile, SDLC governance',
  emphasis: false,
};

export const PROFILE: Profile = {
  name: 'Nikhil Hukkerikar',

  discipline: {
    lead: 'Engineering Leader · Frontend Platforms & Design Systems · Advanced Angular',
    arch: 'Principal Frontend Engineer · Angular Platform & Design-System Architecture',
  },

  heroHeadline: {
    lead: ['I lead the team behind', 'the platform 300+ developers build on.'],
    arch: ['I design the platform', '300+ developers build on.'],
  },

  heroSummary: {
    lead: "Engineering leader at Bank of America. I own Phoenix — the bank's internal Angular design system, CLI and form platform — backing 50 applications, with a 24-person team and a $3–4M budget I negotiate at the executive table. Sixteen years of frontend depth, from payment screens to the framework itself.",
    arch: "Frontend platform architect at Bank of America. I designed Phoenix — the bank's internal Angular component library, CLI, Loom form engine and design system — from its first reusable components in 2016 to a platform behind 50 applications and 300+ developers. Still hands-on: I built Loom's prototype and the context layer that makes Copilot accurate against Phoenix's APIs.",
  },

  resumeSummary: {
    lead: "Engineering leader with 16 years in a large regulated enterprise. I lead a 24-person onshore/offshore team and own Phoenix — the bank's internal Angular design system, CLI and form-building platform — backing 50 applications and 300+ developers, with a $3–4M annual budget I negotiate directly with peer executives. Recent work: consolidating legacy applications onto one supported platform, cutting open-source vulnerability findings from 100K to 40K, and building the context layer that makes Copilot accurate against our internal framework. Started in 2010 as a developer on CashPro Online, Phoenix's largest consuming application.",
    arch: "Frontend platform architect with 16 years building Angular at scale inside a large regulated bank. Designed and built Phoenix — the bank's internal Angular platform: component library, CLI, form-building engine and companion design system — from its first reusable components in 2016 to a platform that backs 50 applications and 300+ developers. Strongest in library architecture and upgrade strategy: per-component entry points that cut bundle sizes by 80%, and an upgrade path built on automated Angular migration schematics, so a consuming team moves to a new version in about a week instead of three months. Still hands-on: personally built Phoenix Loom, a JSON-driven form platform used for 200+ payment types, and the context layer that makes GitHub Copilot accurate against Phoenix's APIs.",
  },

  contact: {
    location: 'Minneapolis, MN',
    email: 'nhukkerikar@gmail.com',
    phone: '+1 (312) 888-0053',
    linkedInLabel: 'linkedin.com/in/nikhil-hukkerikar',
    linkedInUrl: 'https://linkedin.com/in/nikhil-hukkerikar',
  },

  headlineMetrics: {
    lead: [
      { value: '24', label: 'Person team, 10 direct reports' },
      METRIC_BUDGET,
      { value: '30', label: 'Delivery teams migrated' },
      METRIC_VULNS,
    ],
    arch: [
      { value: '80%', label: 'Smaller bundles, per-component entry points' },
      { value: '1 wk', label: 'Per upgrade, down from 3 months' },
      { value: '300+', label: 'Developers building on Phoenix' },
      { value: '200+', label: 'Payment types on Loom' },
    ],
  },

  work: {
    lead: [
      {
        id: 'phoenix',
        title: 'Phoenix',
        summary:
          "The bank's internal Angular 22 component library, CLI and platform — 50 applications, 300+ developers, including CashPro Online's 30+ sub-applications. Moved 30 delivery teams off legacy stacks onto it; upgrades that took three months now land as a one-week version bump.",
        detail: PHOENIX_DETAIL,
      },
      {
        id: 'phoenix-loom',
        title: 'Phoenix-Loom',
        summary:
          'A form engine covering 200+ payment types, shipped to production in place of a legacy system. Business analysts build and publish forms themselves under maker-checker approval — nobody releases their own work.',
      },
      WORK_COPILOT,
      {
        id: 'griffin',
        title: 'Griffin',
        summary:
          'A React-based alternative to Phoenix, launched so teams already fluent in React could onboard to the platform without retraining — same enterprise UX standards, security posture and delivery pipeline, a second framework door into the ecosystem.',
      },
    ],
    arch: [
      {
        id: 'phoenix-loom',
        title: 'Phoenix-Loom',
        summary:
          'A JSON-driven form authoring and rendering platform. I built the original prototype and carried it to production, replacing a legacy engine across 200+ payment types. Business analysts build forms in four stages — Layout, Config, Weave (rules between fields) and Preview — and the Loom renderer turns the saved JSON into the live form.',
      },
      {
        id: 'phoenix-architecture',
        title: 'Phoenix architecture',
        summary:
          'Per-component secondary entry points that cut bundle sizes by 80%. Micro-frontends on @angular/elements, so teams ship features as self-contained custom elements. Core logic split from presentation, with UI and mobile wrappers sharing one API, so apps get native mobile components without a rewrite.',
        detail: PHOENIX_DETAIL,
      },
      {
        id: 'upgrades',
        title: 'Schematic-driven upgrades',
        summary:
          "Each major Phoenix release ships 4–5 version-specific Angular schematics that apply its breaking changes, and Angular's, through ng update. 30 teams reached Angular 22 this way, including the move to the esbuild application builder with Vite as the dev server. Upgrades that took three months now take about a week.",
      },
      WORK_COPILOT,
    ],
  },

  approach: {
    lead: {
      id: 'leadership',
      navLabel: 'How I lead',
      heading: 'How I run the platform',
      intro: 'What owning a platform that 300+ developers depend on involves, day to day.',
      items: [
        {
          id: 'team',
          title: 'The team',
          body: '24 people across onshore and offshore: 15 engineers, 3 QA and 6 UX designers, with 10 reporting directly to me. I moved from engineer to manager in 2022.',
          outcome: 'Hired 4, promoted 3, nobody has left.',
        },
        {
          id: 'budget',
          title: 'The budget',
          body: "Took over Phoenix's $3–4M annual budget in 2025 and negotiate it directly with peer executives, alongside the roadmap and release plan for all three platform products.",
        },
        {
          id: 'intake',
          title: 'One front door',
          body: 'A central intake pipeline for 300+ developers. UX and UI requests, enhancements and defects all come in one way and are prioritized in one place.',
          outcome: 'Bugs carry a two-week SLA.',
        },
        {
          id: 'risk',
          title: 'Risk and compliance',
          body: "Accountable for security posture and compliance across the platform, held to the bank's Global Information Security standards. Consolidating the portfolio onto one supported version did most of the work.",
          outcome: 'Open-source vulnerability findings down from 100K to 40K.',
        },
        {
          id: 'adoption',
          title: 'Getting teams to move',
          body: 'Hesitant app teams moved once upgrades stopped being projects. Tech-feasibility sessions during design catch non-standard component usage before it gets built.',
          outcome: '30 delivery teams migrated onto Phoenix v8 and Angular 22.',
        },
        {
          id: 'ai',
          title: 'AI in the daily workflow',
          body: 'Copilot instructions tuned to Phoenix, plus prompt-based CLI commands for code scanning and codebase mapping, available to every developer on the platform.',
        },
      ],
      link: {
        routerLink: '/phoenix',
        label: 'How work moves through Phoenix',
      },
    },
    arch: {
      id: 'decisions',
      navLabel: 'Decisions',
      heading: 'Architecture decisions',
      intro:
        'The calls that shaped Phoenix, and what each one changed for the teams building on it.',
      items: [
        {
          id: 'entry-points',
          title: 'Every component is its own entry point',
          body: 'Restructured Phoenix 6 with ng-packagr so each component ships as a secondary entry point. Applications import and bundle only the components they use.',
          outcome: '80% smaller bundles.',
        },
        {
          id: 'schematics',
          title: 'Upgrades ship as code',
          body: "Every major release carries 4–5 version-specific Angular schematics that apply Phoenix's breaking changes, and those of the underlying Angular version, through ng update.",
          outcome: 'Three-month migrations became one-week version bumps.',
        },
        {
          id: 'elements',
          title: 'Micro-frontends on @angular/elements',
          body: 'Features ship as self-contained custom elements, so teams build and release them independently and compose them into host applications.',
        },
        {
          id: 'mobile',
          title: 'Core logic split from presentation',
          body: 'Component logic sits in a core layer, with separate UI and mobile wrappers on top; the mobile variants publish as a tertiary entry point. I built the foundation and guided the team extending it across the library.',
          outcome: 'One API, so apps get native mobile components without a rewrite.',
        },
        {
          id: 'loom',
          title: 'Forms as JSON',
          body: "Loom's authoring stages — Layout, Config, Weave and Preview — produce a plain JSON definition, and one renderer turns it into the live form. Publishing goes through maker-checker approval.",
          outcome: '200+ payment types, built by business analysts without code.',
        },
        {
          id: 'context',
          title: 'Context for the AI, not only the people',
          body: "Per-entry-point API docs, usage constraints and canonical patterns, indexed so Copilot resolves completions against Phoenix's real APIs instead of generic Angular.",
        },
      ],
      link: {
        routerLink: '/phoenix',
        label: 'How work moves through Phoenix',
      },
    },
  },

  roles: [
    {
      id: 'boa-senior-technology-manager',
      title: 'Senior Technology Manager',
      org: 'Bank of America',
      period: 'Dec 2024 – Present',
      era: 'current',
      summary: {
        lead: 'Own Phoenix end to end: 24-person onshore/offshore team, $3–4M budget, security posture, roadmap and releases across all three platform products. Hired 4 engineers, promoted 3, zero attrition.',
        arch: 'Own architecture and technical direction for Phoenix: component library, CLI, the Loom form engine and design system. Built Loom from prototype to production, designed the micro-frontend and mobile-native layers, and rebuilt the CLI on oclif.',
      },
      highlights: [
        {
          only: 'lead',
          text: 'Lead a 24-person onshore/offshore team of UX designers, engineers and QA analysts; 10 direct reports.',
        },
        {
          only: 'lead',
          text: 'Own the $3–4M annual Phoenix budget (since 2025), negotiated directly with peer executives.',
        },
        {
          only: 'lead',
          text: 'Accountable for security posture, compliance, roadmap and releases across all three platform products.',
        },
        {
          only: 'arch',
          text: "Own architecture and technical direction for Phoenix — component library, CLI, the Phoenix Loom form engine and a companion design system — backing 50 applications and 300+ developers, including CashPro Online's 30+ sub-applications.",
        },
        {
          only: 'arch',
          text: 'Designed and built the original prototype of Phoenix Loom and carried it to production: a form authoring and rendering platform covering 200+ payment types. Business analysts build forms in four stages (Layout, Config, Weave, Preview) and publish them under maker-checker approval.',
        },
        {
          only: 'lead',
          text: 'Moved 30 delivery teams off legacy technology onto Phoenix v8 and Angular 22 (~3 months per team); upgrades now land as a single version bump, so a team moves to a new version in a week.',
        },
        {
          only: 'arch',
          text: "Built the migration strategy that moved 30 delivery teams onto Phoenix v8, then to Angular 22 through schematic-driven version bumps, including the move from the Webpack builder to Angular's esbuild application builder with Vite as the dev server. Upgrades went from ~3 months to about a week.",
        },
        'Cut open-source vulnerability findings from 100K to 40K by consolidating the portfolio onto one supported version.',
        {
          only: 'arch',
          text: 'Designed the micro-frontend architecture on @angular/elements: features ship as self-contained custom elements that teams build and release independently.',
        },
        {
          only: 'arch',
          text: 'Built the foundation for mobile-native components: core logic split from presentation, separate UI and mobile wrappers sharing one API, mobile variants published as a tertiary entry point. Guided the team extending it across the library.',
        },
        {
          only: 'arch',
          text: 'Rewrote @phoenix/cli on oclif, so developers get consistent, self-documenting commands.',
        },
        "Authored a framework-specific instruction layer for GitHub Copilot: per-entry-point API docs, usage constraints and canonical patterns, indexed so completions resolve against Phoenix's real APIs rather than generic Angular.",
        'Built AI into daily workflow: prompt-based CLI commands for code scanning and codebase mapping, plus indexed per-component docs for Copilot accuracy on internal code.',
        {
          only: 'lead',
          text: 'Shipped Phoenix Loom to production, replacing a legacy form engine: 200+ payment types, with business analysts building and publishing forms under maker-checker approval.',
        },
        {
          only: 'lead',
          text: 'Run the central intake pipeline for 300+ developers, prioritizing UX/UI requests, enhancements and defects on a two-week bug SLA.',
        },
        {
          only: 'lead',
          text: 'Hired 4 full-time engineers and promoted 3, with zero attrition.',
        },
        {
          only: 'arch',
          text: 'Mentor engineers and set technical direction across a 24-person team (15 engineers, 3 QA, 6 UX); hired 4 and promoted 3 with no attrition.',
        },
      ],
    },
    {
      id: 'boa-technology-manager',
      title: 'Technology Manager, VP',
      org: 'Bank of America',
      period: 'Mar 2022 – Dec 2024',
      era: 'recent',
      summary: {
        lead: 'Set Phoenix strategy for its next major release. Launched Griffin, a React-based alternative, and extended the framework for accessibility and mobile.',
        arch: 'Set the technical strategy for Phoenix v7. Re-architected upgrades around version-specific Angular schematics, launched Griffin as a React counterpart, and extended the library for accessibility.',
      },
      highlights: [
        {
          only: 'lead',
          text: 'Moved from engineer to manager; set Phoenix strategy for its next major release — planning, new engagements, support, roadmap and hiring.',
        },
        {
          only: 'arch',
          text: 'Set the technical strategy for Phoenix v7: architecture, roadmap, support model and onboarding of new consuming applications.',
        },
        {
          only: 'arch',
          text: 'Re-architected how consuming applications take upgrades: each major release ships 4–5 version-specific Angular schematics that apply its breaking changes, and those of the underlying Angular version, through ng update.',
        },
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
      summary: {
        lead: 'Led the Phoenix framework team; set the upgrade and migration path for every application built on it. Built Docsmot.',
        arch: 'Technical lead for Phoenix. Cut bundle sizes by 80% by giving every component its own entry point, and built Docsmot, a canvas editor that generates Angular code.',
      },
      highlights: [
        'Led the Phoenix framework team; set the upgrade and migration path for applications built on it.',
        {
          only: 'arch',
          text: "Cut Phoenix 6's bundle sizes by 80% by restructuring the library with ng-packagr so every component ships as its own secondary entry point.",
        },
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

  skills: {
    lead: [
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
      SKILL_AI,
      {
        id: 'quality',
        title: 'Quality & accessibility',
        detail: 'Vitest, Playwright, WCAG 2.2 AA, Section 508, CI/CD automation',
        emphasis: false,
      },
      {
        id: 'platform',
        title: 'Platform & tooling',
        detail: 'Node.js, npm, Webpack, Git, GitHub, GitHub Copilot, Figma',
        emphasis: false,
      },
      SKILL_BACKEND,
    ],
    arch: [
      {
        id: 'angular',
        title: 'Angular — expert, 14 yrs',
        detail:
          'Angular 22, Signals & Signal Store, schematics, @angular/elements micro-frontends, framework authorship, migration strategy',
        emphasis: true,
      },
      {
        id: 'platform',
        title: 'Platform & build tooling',
        detail:
          'Component-library packaging & versioning (ng-packagr, secondary entry points), private npm registries, Node.js, npm, Vite, esbuild, Webpack, CLI tooling (oclif), project scaffolding, Git, GitHub, Figma',
        emphasis: true,
      },
      { ...SKILL_AI, emphasis: true },
      {
        id: 'frontend',
        title: 'Frontend engineering',
        detail: 'TypeScript, JavaScript, React 18+, HTML5, CSS3, SASS',
        emphasis: false,
      },
      {
        id: 'quality',
        title: 'Quality & accessibility',
        detail:
          'Vitest, Playwright (Phoenix held at 90% test coverage), WCAG 2.2 AA, Section 508, CI/CD automation',
        emphasis: false,
      },
      SKILL_BACKEND,
    ],
  },

  expertise: {
    lead: {
      title: 'Leadership',
      items: [
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
    },
    arch: {
      title: 'Core expertise',
      items: [
        'Angular platform architecture',
        'Micro-frontends (@angular/elements)',
        'Component libraries & design systems',
        'Versioning & automated migrations',
        'Developer tooling & CLIs',
        'JSON-driven form authoring',
        'LLM context design',
        'Frontend security',
        'Accessibility (WCAG 2.2 AA, 508)',
        'Technical influence & mentoring',
      ],
    },
  },

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
    metrics: {
      lead: [
        { value: '$3–4M', label: 'annual budget' },
        { value: '100K → 40K', label: 'OSS vulnerabilities' },
        { value: '30', label: 'teams migrated' },
        { value: '24', label: 'person team' },
      ],
      arch: [
        { value: '80%', label: 'bundle size cut' },
        { value: '~1 wk', label: 'per upgrade (was ~3 mo)' },
        { value: '30', label: 'teams migrated' },
        { value: '90%', label: 'test coverage' },
      ],
    },
  },

  education: {
    degree: 'Bachelor of Engineering, Electronics & Telecommunications',
    institution: 'Mumbai University, India',
    year: '2010',
  },
};
