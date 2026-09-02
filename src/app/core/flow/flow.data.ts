import type { Scenario, Stage } from './flow.model';

/**
 * The pipeline every kind of work runs, and the four ways it bends.
 *
 * Deliberately says nothing about which organisation this is: the shape of the
 * process is the point, not whose process it is.
 */
export const STAGES: readonly Stage[] = [
  {
    id: 'intake',
    name: 'Intake',
    purpose: 'How the work arrives and gets recorded',
  },
  {
    id: 'triage',
    name: 'Triage',
    purpose: 'Severity, priority, and who owns the call',
  },
  {
    id: 'design',
    name: 'Design',
    purpose: 'The API shape and its trade-offs, settled before code',
  },
  {
    id: 'build',
    name: 'Build',
    purpose: 'Implementation, tests, and the migration path',
  },
  {
    id: 'verify',
    name: 'Verify',
    purpose: 'Accessibility, visual regression and contract checks',
  },
  {
    id: 'release',
    name: 'Release',
    purpose: 'The version that carries it, and to which supported lines',
  },
  {
    id: 'adopt',
    name: 'Adopt',
    purpose: 'How consuming applications take it up',
  },
];

export const SCENARIOS: readonly Scenario[] = [
  {
    id: 'feature',
    label: 'Feature',
    title: 'A new feature request',
    summary:
      'A consuming team needs a component or an API the platform does not have yet. The full pipeline, and the only one of the four that spends real time in design.',
    timescale: 'Weeks',
    outcome: 'Ships in the next scheduled minor',
    divergence:
      'The stage that costs the most is the one before any code exists — most of what arrives is one application’s problem wearing a platform costume, and design is where that gets settled.',
    stages: [
      {
        stage: 'intake',
        weight: 'normal',
        detail:
          'A team files a component or API request against the central queue, with the screen it is blocked on attached.',
        decidedBy: 'Platform intake',
        duration: '~2 days',
      },
      {
        stage: 'triage',
        weight: 'normal',
        detail:
          'Weighed against the roadmap, and against the harder question: does this belong in the platform at all, or in the application that asked for it?',
        decidedBy: 'Platform lead',
        duration: '~1 week',
      },
      {
        stage: 'design',
        weight: 'dwell',
        detail:
          'The expensive stage. API shape, accessibility acceptance criteria, and a tech-feasibility session with the requesting team’s designers — non-standard usage gets caught here rather than in review.',
        decidedBy: 'UX + platform architect',
        duration: '~2 weeks',
      },
      {
        stage: 'build',
        weight: 'normal',
        detail:
          'Implementation against the agreed API, with tests and the documentation entry written alongside it rather than after.',
        decidedBy: 'Owning engineer',
        duration: '~2 weeks',
      },
      {
        stage: 'verify',
        weight: 'normal',
        detail:
          'Accessibility audit, visual regression across both themes, and the contract tests every consuming application leans on.',
        decidedBy: 'QA + accessibility',
        duration: '~1 week',
      },
      {
        stage: 'release',
        weight: 'normal',
        detail:
          'Additive by definition, so it rides the next scheduled minor and nothing downstream has to move.',
        decidedBy: 'Release manager',
        duration: 'Scheduled',
      },
      {
        stage: 'adopt',
        weight: 'normal',
        detail:
          'Teams pick it up on their next version bump. No migration, no deadline, no chasing.',
        decidedBy: 'Consuming teams',
        duration: 'At their pace',
      },
    ],
  },

  {
    id: 'bug',
    label: 'Bug fix',
    title: 'A bug fix',
    summary:
      'A defect in something the platform already promised. The contract exists and is not being honoured, so the whole design stage falls away.',
    timescale: 'Days',
    outcome: 'Patch release on the current line',
    divergence:
      'Nothing is designed. The entire question is whether the defect is the platform’s at all — roughly half of what arrives turns out to be application-side.',
    stages: [
      {
        stage: 'intake',
        weight: 'normal',
        detail:
          'A defect report with a reproduction. Without one it goes back — an unreproducible report costs the team more than it costs the reporter.',
        decidedBy: 'Platform intake',
        duration: 'Same day',
      },
      {
        stage: 'triage',
        weight: 'normal',
        detail:
          'Severity set against the bug SLA, and the call on whether this is a platform defect or an application using the component in a way it was never shaped for.',
        decidedBy: 'Platform lead',
        duration: '~1 day',
      },
      {
        stage: 'design',
        weight: 'skipped',
        detail:
          'Skipped. There is nothing to design — the contract already exists, it simply is not being honoured.',
      },
      {
        stage: 'build',
        weight: 'normal',
        detail:
          'Reproduce in isolation, fix, and add the regression test that would have caught it. The test is the deliverable as much as the fix is.',
        decidedBy: 'Owning engineer',
        duration: '~2 days',
      },
      {
        stage: 'verify',
        weight: 'normal',
        detail:
          'The new regression test plus the existing suite. Anything that changes rendered output takes the visual pass too.',
        decidedBy: 'QA',
        duration: '~1 day',
      },
      {
        stage: 'release',
        weight: 'normal',
        detail: 'A patch on the current line, out the same week.',
        decidedBy: 'Release manager',
        duration: 'Same week',
      },
      {
        stage: 'adopt',
        weight: 'normal',
        detail: 'Passive. Teams get it on their next bump and nobody is chased for it.',
        decidedBy: 'Consuming teams',
        duration: 'At their pace',
      },
    ],
  },

  {
    id: 'cve',
    label: 'CVE fix',
    title: 'A CVE fix release',
    summary:
      'A published vulnerability in something the platform depends on. An external clock, an audience that includes people who do not read changelogs, and a release that has to reach every supported line at once.',
    timescale: 'Hours to days',
    outcome: 'Out-of-band patch on every supported major',
    divergence:
      'Intake is a scanner rather than a person, and release forks: the newest line is not where the exposed applications are, so the fix is backported across every major still in support.',
    stages: [
      {
        stage: 'intake',
        weight: 'normal',
        detail:
          'Not a person. Dependency scanning files advisories against every supported line, continuously, whether or not anyone is looking.',
        decidedBy: 'Automated scanning',
        duration: 'Continuous',
      },
      {
        stage: 'triage',
        weight: 'dwell',
        detail:
          'The real work: is the vulnerable path reachable from anything the platform actually calls? Most advisories are transitive and unreachable, and being able to say so with evidence is what keeps the queue from swallowing the team.',
        decidedBy: 'Platform lead + security',
        duration: 'Hours',
      },
      {
        stage: 'design',
        weight: 'skipped',
        detail:
          'Skipped, and deliberately so. There is no design surface here — the fix is a version bump or a patch, and the public API must not move.',
      },
      {
        stage: 'build',
        weight: 'normal',
        detail:
          'Upgrade or patch the dependency and prove the public API is unchanged. A security fix that breaks consumers is a worse outage than the vulnerability was.',
        decidedBy: 'Owning engineer',
        duration: '~1 day',
      },
      {
        stage: 'verify',
        weight: 'normal',
        detail:
          'The full suite against every supported major, not only the current one — the backport is the part most likely to go wrong.',
        decidedBy: 'QA',
        duration: '~1 day',
      },
      {
        stage: 'release',
        weight: 'dwell',
        detail:
          'Where this flow stops resembling the others. An out-of-band patch on every supported line at once, because older majors are where the exposed applications actually are.',
        decidedBy: 'Release manager',
        duration: 'Same day',
      },
      {
        stage: 'adopt',
        weight: 'dwell',
        detail:
          'Chased, not awaited. Remediation is tracked per application until the finding count clears — the difference between a fix existing and a fix landing.',
        decidedBy: 'Platform lead',
        duration: 'Tracked to zero',
      },
    ],
  },

  {
    id: 'architecture',
    label: 'Architecture',
    title: 'A major architectural change',
    summary:
      'A framework major, or a constraint the current shape cannot reach. Every consuming team pays for it, so the bar is high and the plan is measured in quarters.',
    timescale: 'Quarters',
    outcome: 'A major, with both paths live behind a deprecation window',
    divergence:
      'Design ends at a budget conversation rather than a design review, and build produces codemods — if migration is manual across dozens of applications, the plan was wrong.',
    stages: [
      {
        stage: 'intake',
        weight: 'normal',
        detail:
          'Rarely a request. A framework major, an accumulated constraint, or a security posture the current architecture cannot reach.',
        decidedBy: 'Platform lead',
        duration: 'Recognised, not filed',
      },
      {
        stage: 'triage',
        weight: 'normal',
        detail:
          'Is this worth a major? The bar is high, because the cost is not paid by the platform team — it is paid by every team consuming it.',
        decidedBy: 'Platform lead + stakeholders',
        duration: '~1 month',
      },
      {
        stage: 'design',
        weight: 'dwell',
        detail:
          'An RFC with the options and their trade-offs, a prototype that proves the expensive one is possible, and a costed plan — because this stage ends at a budget conversation, not a design review.',
        decidedBy: 'Architect + executive stakeholders',
        duration: '~1 quarter',
      },
      {
        stage: 'build',
        weight: 'dwell',
        detail:
          'The change, and the codemods that carry teams across it. Tooling is not a nice-to-have here; it is the difference between a migration that lands and one that stalls.',
        decidedBy: 'Platform team',
        duration: '~1–2 quarters',
      },
      {
        stage: 'verify',
        weight: 'normal',
        detail:
          'The suite, plus the codemods run against real consuming applications before anyone else is asked to run them.',
        decidedBy: 'QA + pilot teams',
        duration: '~1 month',
      },
      {
        stage: 'release',
        weight: 'normal',
        detail:
          'A major, with both paths live: the old shape deprecated but working, the new one documented as the default.',
        decidedBy: 'Release manager',
        duration: 'Scheduled',
      },
      {
        stage: 'adopt',
        weight: 'dwell',
        detail:
          'Phased, with a deprecation window and per-team support. Sequencing matters more than speed — the goal is that the next version bump takes a week rather than a quarter.',
        decidedBy: 'Consuming teams + platform',
        duration: '~2–3 quarters',
      },
    ],
  },
];
