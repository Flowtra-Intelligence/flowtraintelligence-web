import { headers } from "next/headers";

type Experience = "company" | "healthcare";

type SearchParamsInput =
  | Promise<Record<string, string | string[] | undefined>>
  | Record<string, string | string[] | undefined>;

type Surface = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

type FeatureSlide = {
  eyebrow: string;
  title: string;
  description: string;
  outcome: string;
  image: string;
  alt: string;
};

type AutomationStory = {
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  alt: string;
};

const healthcareSurfaces: Surface[] = [
  {
    title: "Operational command surface",
    description:
      "A leadership-first view of where revenue is moving, where it is blocked, and which intervention matters next.",
    image: "/screens/flowtra-home.png",
    alt: "Flowtra Healthcare operational home surface",
  },
  {
    title: "Revenue follow-up",
    description:
      "Financial posture tied directly to payer status, ageing, and accountable follow-up.",
    image: "/screens/flowtra-finance.png",
    alt: "Flowtra Healthcare finance view",
  },
  {
    title: "Payer query inbox",
    description:
      "Communications organized as real operating work, with urgency and cleanup visible.",
    image: "/screens/queries-viewport-v2.png",
    alt: "Flowtra Healthcare payer query inbox",
  },
  {
    title: "Leadership insights",
    description:
      "Analytical context drawn from the same live operating data used by the work surfaces.",
    image: "/screens/insights-viewport-v2.png",
    alt: "Flowtra Healthcare leadership insights",
  },
];

const flagshipFeatureSlides: FeatureSlide[] = [
  {
    eyebrow: "Operational intelligence workspace",
    title: "See where revenue is moving, where it is blocked, and what matters next.",
    description:
      "A leadership-first surface that makes operational posture visible across claims, queries, evidence, finance, and accountable follow-up.",
    outcome: "Outcome: one working view of risk, intervention priority, and operational momentum.",
    image: "/screens/flowtra-home.png",
    alt: "Flowtra Healthcare operational home surface",
  },
  {
    eyebrow: "Claims command center",
    title: "Turn claim status into ownership, urgency, and accountable action.",
    description:
      "Claims are not just records. The product is built to preserve the claim story across approval, evidence, payer movement, and follow-through.",
    outcome: "Outcome: fewer claims drifting silently between teams, statuses, and financial consequences.",
    image: "/screens/flowtra-claim-command-center.png",
    alt: "Flowtra Healthcare claims command center",
  },
  {
    eyebrow: "Payer query inbox",
    title: "Keep payer communication tied to the real case, not trapped in email noise.",
    description:
      "Queries are organized as operational work with context, urgency, and cleanup visible to the right people.",
    outcome: "Outcome: faster response cycles and less value lost to fragmented follow-up.",
    image: "/screens/queries-viewport-v2.png",
    alt: "Flowtra Healthcare payer query inbox",
  },
  {
    eyebrow: "Evidence readiness",
    title: "Know what is missing before evidence delays collection or weakens the claim.",
    description:
      "Evidence surfaces are meant to make document readiness visible while there is still time to intervene.",
    outcome: "Outcome: tighter claim defense and better recovery on revenue-sensitive cases.",
    image: "/screens/flowtra-work.png",
    alt: "Flowtra Healthcare work and evidence surface",
  },
  {
    eyebrow: "Finance posture",
    title: "Track approved, pending, and unsettled money with operational context attached.",
    description:
      "Financial follow-up stays connected to the same claim, communication, and evidence state used by operating teams.",
    outcome: "Outcome: cleaner visibility into collectible value and what has to happen next to realize it.",
    image: "/screens/flowtra-finance.png",
    alt: "Flowtra Healthcare finance surface",
  },
];

const automationStories: AutomationStory[] = [
  {
    eyebrow: "Operational alerts",
    title: "Detect payer events early and route intervention to the right operator.",
    description:
      "Flowtra can watch inbox activity and surface clarification requests, claim updates, and other revenue-relevant events as actionable alerts instead of leaving them buried in email.",
    detail:
      "The goal is not passive notification. The alert becomes an intervention point with direct actions like opening the query, linking the patient, and moving straight into the response loop.",
    image: "/screens/flowtra-automation-alerts-sanitized.png",
    alt: "Sanitized Flowtra Agent alert showing payer-query notification and intervention actions",
  },
  {
    eyebrow: "Draft response and delivery",
    title: "Turn a payer query into a ready-to-send response with guided submission.",
    description:
      "Once the request is understood, Flowtra can help structure the reply, draft the response, collect attachments, and prepare delivery through email, the IHX portal, or both.",
    detail:
      "That compresses the most repetitive part of payer communication: reading the thread, rewriting the response, gathering the packet, and pushing it through the right submission path.",
    image: "/screens/flowtra-automation-draft-sanitized.png",
    alt: "Sanitized Flowtra draft response screen showing automated payer reply preparation",
  },
  {
    eyebrow: "Prefill and pre-auth automation",
    title: "Reuse structured patient and insurer context to reduce repetitive form work.",
    description:
      "Flowtra can carry known case data into forms and pre-auth preparation so teams are not repeatedly retyping the same details across insurer workflows.",
    detail:
      "This is where automation becomes practical: faster submission prep, fewer clerical errors, and less dependence on copy-paste work to keep revenue moving.",
    image: "/screens/flowtra-automation-form-sanitized.png",
    alt: "Sanitized prefilled insurer form showing form-generation and pre-auth preparation workflow",
  },
];

export const dynamic = "force-dynamic";

function readSingle(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

function buildSiteConfig() {
  const configuredVariantValue = readEnv("FLOWTRA_SITE_VARIANT");
  const configuredVariant: Experience | undefined =
    configuredVariantValue === "healthcare" || configuredVariantValue === "company"
      ? configuredVariantValue
      : undefined;

  const companyUrl =
    readEnv("FLOWTRA_COMPANY_URL") ??
    "https://flowtraintelligence.sreenivasa-goud.chatgpt.site";
  const demoUrl =
    readEnv("FLOWTRA_DEMO_URL") ?? `${trimTrailingSlash(companyUrl)}/?site=healthcare`;
  const healthcareUrl = readEnv("FLOWTRA_HEALTHCARE_URL") ?? demoUrl;

  return {
    companyUrl,
    demoUrl,
    healthcareUrl,
    configuredVariant,
  };
}

async function detectExperience(searchParamsInput: SearchParamsInput): Promise<Experience> {
  const searchParams = await searchParamsInput;
  const forced = readSingle(searchParams.site)?.toLowerCase();

  if (forced === "healthcare") {
    return "healthcare";
  }

  if (forced === "company") {
    return "company";
  }

  const siteConfig = buildSiteConfig();
  if (siteConfig.configuredVariant) {
    return siteConfig.configuredVariant;
  }

  const requestHeaders = await headers();
  const host = (
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    ""
  ).toLowerCase();

  if (host === "healthcare.flowtraintelligence.com" || host.startsWith("healthcare.")) {
    return "healthcare";
  }

  return "company";
}

function BrandLockup({
  title,
  sublabel,
  experience,
}: {
  title: string;
  sublabel: string;
  experience: Experience;
}) {
  const isCompany = experience === "company";

  return (
    <a href="#top" className="brand-lockup" aria-label="Flowtra Intelligence home">
      <img
        src={
          isCompany
            ? "/flowtra-intelligence-company-logo.png"
            : "/flowtra-mark-192.png"
        }
        srcSet={
          isCompany
            ? undefined
            : "/flowtra-mark-192.png 192w, /flowtra-mark-512.png 512w"
        }
        sizes="56px"
        alt=""
        width={56}
        height={56}
        className="brand-mark"
        draggable={false}
      />
      <span className="brand-copy">
        <strong>{title}</strong>
        <small>{sublabel}</small>
      </span>
    </a>
  );
}

function SiteHeader({
  nav,
  ctaLabel,
  ctaHref,
  brandTitle,
  brandSublabel,
  experience,
}: {
  nav: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
  brandTitle: string;
  brandSublabel: string;
  experience: Experience;
}) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLockup
          title={brandTitle}
          sublabel={brandSublabel}
          experience={experience}
        />

        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

function FeatureCarousel({
  slides,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  slides: FeatureSlide[];
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="feature-carousel" aria-label="Flagship product capabilities">
      {slides.map((slide, index) => {
        const slideId = `feature-slide-${index + 1}`;

        return (
          <article key={slide.title} id={slideId} className="feature-slide">
            <div className="feature-slide-copy">
              <span className="micro-label">{slide.eyebrow}</span>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <p className="feature-outcome">{slide.outcome}</p>

              <div className="hero-actions">
                {primaryHref && primaryLabel ? (
                  <a className="button button-primary" href={primaryHref}>
                    {primaryLabel}
                  </a>
                ) : null}
                <a
                  className="button button-secondary"
                  href={secondaryHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {secondaryLabel}
                </a>
              </div>
            </div>

            <div className="feature-slide-visual">
              <img src={slide.image} alt={slide.alt} />
            </div>
          </article>
        );
      })}

      <nav className="feature-carousel-nav" aria-label="Flagship product feature slides">
        {slides.map((slide, index) => (
          <a key={slide.title} href={`#feature-slide-${index + 1}`} className="feature-dot-link">
            <span className="feature-dot"></span>
            <span className="feature-dot-label">{index + 1}. {slide.eyebrow}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}

function AutomationSection() {
  return (
    <section id="capabilities" className="section section-tint">
      <div className="container section-head">
        <div>
          <p className="eyebrow">Capabilities</p>
          <h2>Operational intelligence and automation that move revenue work forward</h2>
        </div>
        <p>
          Flowtra is not only about seeing revenue posture. It is also about shortening response
          loops: surfacing the event, preparing the action, and reducing repetitive submission
          work across payer operations.
        </p>
      </div>

      <div className="container automation-stack">
        {automationStories.map((story) => (
          <article key={story.title} className="feature-slide automation-story">
            <div className="feature-slide-copy">
              <span className="micro-label">{story.eyebrow}</span>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <p className="automation-detail">{story.detail}</p>
            </div>

            <div className="feature-slide-visual automation-visual">
              <img src={story.image} alt={story.alt} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TariffIntelligenceSection() {
  return (
    <section id="tariff" className="section">
      <div className="container section-head">
        <div>
          <p className="eyebrow">Tariff intelligence</p>
          <h2>Apply billing and insurer rules before under-approval becomes lost revenue</h2>
        </div>
        <p>
          Flowtra can use tariff and billing rule logic to compare expected value against what the
          payer has approved, surface mismatches early, and recommend the next financial or
          operational intervention.
        </p>
      </div>

      <div className="container feature-slide tariff-story">
        <div className="feature-slide-copy">
          <span className="micro-label">Rule-based revenue protection</span>
          <h3>Catch approval shortfalls against expected billing logic while there is still time to act.</h3>
          <p>
            Instead of discovering the loss only after settlement or reconciliation, Flowtra can
            flag cases where the approval amount appears below expected bill value based on tariff,
            billing posture, and known claim context.
          </p>
          <p className="automation-detail">
            This turns tariff rules into operational leverage: finance and claims teams can review
            enhancement need, respond to the payer, gather support, and intervene before discharge
            or final submission closes the window.
          </p>

          <ul className="summary-points">
            <li>Detect approval-vs-expected-bill mismatches</li>
            <li>Surface rule-backed revenue-risk alerts with evidence confidence</li>
            <li>Recommend concrete next steps instead of leaving teams with raw variance alone</li>
          </ul>
        </div>

        <div className="feature-slide-visual automation-visual">
          <img
            src="/screens/flowtra-tariff-intelligence-sanitized.png"
            alt="Sanitized Flowtra alert screen showing tariff-based revenue risk detection"
          />
        </div>
      </div>
    </section>
  );
}

function CompanySite() {
  const siteConfig = buildSiteConfig();

  return (
    <div className="site-shell company-shell">
      <SiteHeader
        nav={[
          { label: "Company", href: "#company" },
          { label: "Products", href: "#products" },
          { label: "Vision", href: "#vision" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Flowtra Healthcare"
        ctaHref={siteConfig.healthcareUrl}
        brandTitle="FLOWTRA INTELLIGENCE"
        brandSublabel="Applied Intelligence for Real Operations"
        experience="company"
      />

      <main id="top">
        <section className="hero-section hero-company">
          <div className="hero-aurora hero-aurora-blue"></div>
          <div className="hero-aurora hero-aurora-purple"></div>
          <div className="hero-aurora hero-aurora-green"></div>

          <div className="container company-hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Flowtra Intelligence</p>
              <h1>AI intelligence and automation for real operating environments.</h1>
              <p className="hero-text">
                Flowtra Intelligence is a product company building applied AI systems for
                operationally complex work. The goal is not generic automation theater. The goal is
                better understanding, better action, and better outcomes in environments where
                workflow truth actually matters.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#products">
                  View products
                </a>
                <a className="button button-secondary" href="#vision">
                  Read vision
                </a>
              </div>
            </div>

            <div className="company-hero-panels">
              <article className="glass-card statement-card">
                <span className="micro-label">What we build</span>
                <h2>Products that turn operational complexity into intelligent action.</h2>
                <p>
                  Operational intelligence and intelligent automation for complex work: systems
                  that understand state, surface risk, route work, and support accountable action.
                </p>
              </article>

              <div className="mini-panel-grid">
                <article className="glass-card mini-panel">
                  <strong>AI intelligence</strong>
                  <p>Products that understand context, not just isolated fields.</p>
                </article>
                <article className="glass-card mini-panel">
                  <strong>Automation</strong>
                  <p>Useful action layered on top of trustworthy state.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="company" className="section">
          <div className="container section-head">
            <div>
              <p className="eyebrow">Company</p>
              <h2>Built around domain-specific intelligence</h2>
            </div>
            <p>
              Flowtra Intelligence is meant to be the parent company for a family of intelligent
              products. Each product should understand its domain deeply enough to improve how work
              is seen, prioritized, and executed.
            </p>
          </div>

          <div className="container pillars-grid">
            <article className="pillar-card">
              <h3>Applied AI</h3>
              <p>
                Real software for real operating problems, where intelligence has to remain usable
                and accountable.
              </p>
            </article>
            <article className="pillar-card">
              <h3>Automation with context</h3>
              <p>
                Automation matters when the system understands what is happening, what is blocked,
                and what should happen next.
              </p>
            </article>
            <article className="pillar-card">
              <h3>Authority products</h3>
              <p>
                Products should help expert teams act with more clarity, not drown them in generic
                workflow noise.
              </p>
            </article>
          </div>
        </section>

        <section id="products" className="section section-tint">
          <div className="container section-head">
            <div>
              <p className="eyebrow">Products</p>
              <h2>Current flagship product</h2>
            </div>
            <p>
              Flowtra Healthcare is the first product under Flowtra Intelligence. It is focused on
              hospital revenue intelligence, claims operations, payer communication, evidence
              readiness, and realized cash follow-through.
            </p>
          </div>

          <div className="container">
            <article className="flagship-card flagship-summary-card">
              <div className="flagship-copy">
                <span className="micro-label">Healthcare</span>
                <h3>Flowtra Healthcare</h3>
                <p>
                  An AI revenue-intelligence product for hospitals, built to make revenue-sensitive
                  operational work visible before value is lost between teams, status changes,
                  evidence gaps, and payer follow-up.
                </p>
                <ul className="summary-points">
                  <li>Claims posture with ownership and urgency</li>
                  <li>Payer communication tied to the real case story</li>
                  <li>Evidence readiness and finance follow-through in one system</li>
                </ul>

                <div className="hero-actions">
                  <a className="button button-primary" href={siteConfig.healthcareUrl}>
                    Visit Flowtra Healthcare
                  </a>
                  <a
                    className="button button-secondary"
                    href={siteConfig.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Try live demo
                  </a>
                </div>
              </div>

              <div className="flagship-visual">
                <img
                  src="/screens/flowtra-home.png"
                  alt="Flowtra Healthcare operational intelligence workspace"
                />
              </div>
            </article>
          </div>
        </section>

        <section id="vision" className="section">
          <div className="container statement-wide">
            <div>
              <p className="eyebrow">Vision</p>
              <h2>Build intelligent systems that understand work, drive action, and improve outcomes.</h2>
            </div>
            <p>
              The long-term goal is a broader company with multiple products across operationally
              complex domains. Healthcare is first, not the limit. The company should earn
              credibility from systems that do not just describe work better, but help teams act
              earlier, with more clarity and better follow-through.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-panel light-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Direct company contact</h2>
              <p>Product conversations, partnership discussions, and serious operator inquiries.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:contact@flowtraintelligence.com">
                contact@flowtraintelligence.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HealthcareSite() {
  const siteConfig = buildSiteConfig();

  return (
    <div className="site-shell healthcare-shell">
      <SiteHeader
        nav={[
          { label: "Product", href: "#product" },
          { label: "Capabilities", href: "#capabilities" },
          { label: "Product tour", href: "#surfaces" },
          { label: "Roadmap", href: "#roadmap" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Flowtra Intelligence"
        ctaHref={siteConfig.companyUrl}
        brandTitle="FLOWTRA HEALTHCARE"
        brandSublabel="AI Revenue Intelligence for Hospitals"
        experience="healthcare"
      />

      <main id="top">
        <section className="hero-section hero-healthcare">
          <div className="hero-aurora hero-aurora-blue"></div>
          <div className="hero-aurora hero-aurora-purple"></div>
          <div className="hero-aurora hero-aurora-green"></div>

          <div className="container company-hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Flowtra Healthcare</p>
              <h1>AI Revenue Intelligence for Hospitals</h1>
              <p className="hero-text">
                Flowtra Healthcare is focused on one high-value outcome: helping hospitals stop
                losing insurance revenue because payer movement, operational follow-up, evidence
                readiness, and response execution drift apart. It surfaces the work that matters
                and automates parts of the response loop where repetition slows teams down.
              </p>

              <div className="hero-stance">
                <span>Claims intelligence</span>
                <span>Payer communication</span>
                <span>Revenue operations</span>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="#surfaces">
                  Review screens
                </a>
                <a className="button button-secondary" href="#product">
                  Read product story
                </a>
              </div>
            </div>

            <div className="company-hero-panels">
              <article className="glass-card statement-card">
                <span className="micro-label">Operating thesis</span>
                <h2>Hospitals do not lose revenue in the ledger first.</h2>
                <p>
                  They lose it in the space between approval, evidence, payer communication,
                  follow-up discipline, and operational memory.
                </p>
              </article>

              <div className="mini-panel-grid">
                <article className="glass-card mini-panel">
                  <strong>Intervention routing</strong>
                  <p>Alerts and query signals are surfaced early, with actions that move work forward.</p>
                </article>
                <article className="glass-card mini-panel">
                  <strong>Automation in the loop</strong>
                  <p>Draft replies, attachment prep, and form-prefill reduce repetitive payer work.</p>
                </article>
              </div>
            </div>
          </div>

          <div className="container hero-stage">
            <div className="hero-stage-main light-stage">
              <img src="/screens/flowtra-home.png" alt="Flowtra Healthcare operational workspace" />
            </div>
          </div>
        </section>

        <section id="product" className="section">
          <div className="container section-head">
            <div>
              <p className="eyebrow">Product</p>
              <h2>Built for revenue-sensitive hospital operations</h2>
            </div>
            <p>
              Flowtra Healthcare is an operating intelligence layer for claims, payer
              communication, evidence, and receivables. It helps teams see the real claim story
              early enough to intervene before value leaks away.
            </p>
          </div>

          <div className="container pillars-grid">
            <article className="pillar-card">
              <h3>See the loss early</h3>
              <p>
                Revenue often leaks before final accounting. The product is meant to expose that
                earlier operational gap.
              </p>
            </article>
            <article className="pillar-card">
              <h3>Treat status as signal</h3>
              <p>
                A claim status should become urgency, ownership, and next action, not just another
                passive data field.
              </p>
            </article>
            <article className="pillar-card">
              <h3>Keep the claim story intact</h3>
              <p>
                Approval, evidence, communication, reconciliation, and collection should remain
                connected inside one working system.
              </p>
            </article>
          </div>
        </section>

        <AutomationSection />
        <TariffIntelligenceSection />

        <section id="surfaces" className="section section-tint">
          <div className="container section-head">
            <div>
              <p className="eyebrow">Product tour</p>
              <h2>Major operating surfaces, explained with product context</h2>
            </div>
            <p>
              These are the core workflow surfaces behind the healthcare product: the places where
              revenue posture, claim state, payer communication, evidence, and finance are meant to
              stay connected.
            </p>
          </div>

          <div className="container">
            <FeatureCarousel
              slides={flagshipFeatureSlides}
              secondaryHref={siteConfig.demoUrl}
              secondaryLabel="Try live demo"
            />
          </div>
        </section>

        <section id="roadmap" className="section section-tint">
          <div className="container section-head">
            <div>
              <p className="eyebrow">Roadmap</p>
              <h2>Where the product is going next</h2>
            </div>
              <p>
                The roadmap is not just more dashboards. It is a fuller operating system for case,
                treatment, payer, billing, and continuous local and cross-hospital learning loops.
              </p>
          </div>

          <div className="container roadmap-grid">
            <article className="pillar-card">
              <h3>Ask Flowtra</h3>
              <p>
                A case-aware AI assistant that can answer questions about a patient, treatment,
                claim status, payer communication, and pending next steps using the live operating
                context already inside the system.
              </p>
            </article>

            <article className="pillar-card">
              <h3>Global learning models</h3>
              <p>
                Continuous cross-hospital learning that improves query handling, claim-risk pattern
                detection, document readiness, tariff interpretation, and recommended interventions
                based on recurring payer behavior and revenue outcomes across the network.
              </p>
            </article>

            <article className="pillar-card">
              <h3>Local learning for each hospital</h3>
              <p>
                Continuous hospital-specific learning that adapts to local billing habits, document
                practices, insurer mix, care patterns, and operational bottlenecks so Flowtra
                becomes more useful inside each hospital’s own way of working over time.
              </p>
            </article>

            <article className="pillar-card">
              <h3>Deeper automation loops</h3>
              <p>
                More of the repetitive revenue workflow can move from manual handling to supervised
                automation: draft responses, attachment packets, form generation, pre-auth prep,
                and payer follow-through with clear operator control.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-panel light-panel">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Flowtra Healthcare</h2>
              <p>Product contact for healthcare pilots, design conversations, and implementation.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:contact@flowtraintelligence.com">
                contact@flowtraintelligence.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsInput;
}) {
  const experience = await detectExperience(searchParams);
  return experience === "healthcare" ? <HealthcareSite /> : <CompanySite />;
}
