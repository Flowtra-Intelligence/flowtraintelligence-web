/**
 * Shared shell for the legal pages (/privacy, /terms).
 *
 * These pages exist because Google's OAuth consent screen for the Flowtra
 * Healthcare Gmail connector must link to a reachable privacy policy and terms
 * on an authorised domain before the app can leave "Testing" status. Keep the
 * wording in step with what the product actually does with mailbox data.
 */
import Link from "next/link";
import type { ReactNode } from "react";

export const CONTACT_EMAIL = "contact@flowtraintelligence.com";

export function LegalPage({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <div className="site-shell legal-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand-lockup" aria-label="Flowtra Intelligence home">
            <img
              src="/flowtra-intelligence-company-logo.png"
              alt=""
              width={56}
              height={56}
              className="brand-mark"
              draggable={false}
            />
            <span className="brand-copy">
              <strong>Flowtra Intelligence</strong>
              <small>Applied intelligence for real operations</small>
            </span>
          </Link>
        </div>
      </header>

      <main className="container legal-main">
        <article className="legal-article">
          <h1>{title}</h1>
          <p className="legal-effective">Effective {effectiveDate}</p>
          {children}
        </article>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Flowtra Intelligence</p>
          <nav className="legal-links" aria-label="Legal">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
