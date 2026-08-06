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

export const dynamic = "force-dynamic";

function readSingle(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
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

function BrandLockup({ sublabel }: { sublabel: string }) {
  return (
    <a href="#top" className="brand-lockup" aria-label="Flowtra Intelligence home">
      <img
        src="/flowtra-mark-192.png"
        srcSet="/flowtra-mark-192.png 192w, /flowtra-mark-512.png 512w"
        sizes="56px"
        alt=""
        width={56}
        height={56}
        className="brand-mark"
        draggable={false}
      />
      <span className="brand-copy">
        <strong>FLOWTRA INTELLIGENCE</strong>
        <small>{sublabel}</small>
      </span>
    </a>
  );
}

function SiteHeader({
  nav,
  ctaLabel,
  ctaHref,
}: {
  nav: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLockup sublabel="AI intelligence and automation" />

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

function CompanySite() {
  return (
    <div className="site-shell company-shell">
      <SiteHeader
        nav={[
          { label: "Company", href: "#company" },
          { label: "Products", href: "#products" },
          { label: "Vision", href: "#vision" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Healthcare product"
        ctaHref="https://healthcare.flowtraintelligence.com"
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
                  AI should not just summarize data. It should help systems understand state,
                  surface risk, route work, and support accountable decisions.
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
              Flowtra Healthcare is the first major product under the Flowtra Intelligence umbrella.
              It is focused on hospital revenue intelligence, claims operations, and healthcare
              workflow coordination.
            </p>
          </div>

          <div className="container flagship-card">
            <div className="flagship-copy">
              <span className="micro-label">Healthcare</span>
              <h3>Flowtra Healthcare</h3>
              <p>
                AI revenue intelligence for hospitals, with product surfaces built around claims,
                payer communication, evidence readiness, and realized cash.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="https://healthcare.flowtraintelligence.com"
                >
                  Open healthcare site
                </a>
                <a className="button button-secondary" href="/?site=healthcare">
                  Preview mode
                </a>
              </div>
            </div>

            <div className="flagship-visual">
              <img src="/screens/flowtra-home.png" alt="Flowtra Healthcare product preview" />
            </div>
          </div>
        </section>

        <section id="vision" className="section">
          <div className="container statement-wide">
            <div>
              <p className="eyebrow">Vision</p>
              <h2>Build intelligent systems that understand how work actually moves.</h2>
            </div>
            <p>
              The long-term goal is a broader company with multiple products across operationally
              complex domains. Healthcare is first, not the limit. The company should earn
              credibility from the usefulness and authority of what it builds.
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
              <a className="button button-primary" href="mailto:hello@flowtraintelligence.com">
                hello@flowtraintelligence.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function HealthcareSite() {
  return (
    <div className="site-shell healthcare-shell">
      <SiteHeader
        nav={[
          { label: "Product", href: "#product" },
          { label: "Screens", href: "#surfaces" },
          { label: "Roadmap", href: "#roadmap" },
          { label: "Contact", href: "#contact" },
        ]}
        ctaLabel="Parent company"
        ctaHref="https://flowtraintelligence.com"
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
                losing insurance revenue because payer movement, operational follow-up, and evidence
                readiness drift apart.
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
                  <strong>Claims visibility</strong>
                  <p>Working posture made visible before value disappears into accounting lag.</p>
                </article>
                <article className="glass-card mini-panel">
                  <strong>Operational memory</strong>
                  <p>One connected surface for status, evidence, communication, and follow-up.</p>
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

        <section id="surfaces" className="section section-tint">
          <div className="container section-head">
            <div>
              <p className="eyebrow">Screens</p>
              <h2>Current product surfaces</h2>
            </div>
            <p>Development-stage screens used here as product evidence, not decorative filler.</p>
          </div>

          <div className="container surface-grid">
            {healthcareSurfaces.map((surface, index) => (
              <article
                key={surface.title}
                className={`surface-card ${index === 0 ? "surface-feature" : "surface-half"}`}
              >
                <div className="surface-frame">
                  <img src={surface.image} alt={surface.alt} />
                </div>
                <div className="surface-copy">
                  <h3>{surface.title}</h3>
                  <p>{surface.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="section section-tint">
          <div className="container section-head">
            <div>
              <p className="eyebrow">Roadmap</p>
              <h2>Build direction</h2>
            </div>
            <p>
              First build the strongest hospital revenue-intelligence layer possible. Then deepen
              decision support, pattern memory, and operational automation from a trustworthy base.
            </p>
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
              <a className="button button-primary" href="mailto:hello@flowtraintelligence.com">
                hello@flowtraintelligence.com
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
