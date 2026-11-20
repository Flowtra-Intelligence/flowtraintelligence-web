import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, LegalPage } from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of service | Flowtra Intelligence",
  description: "The terms that apply to this website and to the use of Flowtra Healthcare.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service" effectiveDate="20 November 2026">
      <p>
        These terms apply to this website and to Flowtra Healthcare, the software Flowtra
        Intelligence (&quot;Flowtra&quot;, &quot;we&quot;) provides to hospitals. Where a hospital
        has a signed agreement with Flowtra, that agreement takes precedence over these terms.
      </p>

      <h2>Using Flowtra Healthcare</h2>
      <ul>
        <li>
          Flowtra Healthcare is provided to hospitals and their authorised staff. Each user must
          use their own account and keep their sign-in details private.
        </li>
        <li>
          The hospital is responsible for having the right to bring patient, claim and mailbox
          data into Flowtra, and for the decisions its staff make with it.
        </li>
        <li>
          You must not misuse the service: no attempts to access another hospital&apos;s data, to
          disrupt the service, or to use it for anything unlawful.
        </li>
      </ul>

      <h2>Connected mailboxes and portals</h2>
      <p>
        When a hospital connects a Gmail or Zoho Mail account, or gives Flowtra sign-in details
        for an insurance portal, Flowtra acts only on the hospital&apos;s behalf and only for the
        purposes described in our <Link href="/privacy">privacy policy</Link>. The hospital can
        disconnect at any time.
      </p>

      <h2>Automation and AI assistance</h2>
      <p>
        Flowtra reads documents and messages, extracts details and suggests next steps. Extracted
        details and suggestions can be wrong, so they stay reviewable, and Flowtra does not send
        replies to insurers or change financial or clinical facts without a hospital user&apos;s
        action. Hospital staff remain responsible for clinical, billing and claim decisions.
      </p>

      <h2>Your data</h2>
      <p>
        The hospital&apos;s data remains the hospital&apos;s. We use it only to provide the service,
        as described in our <Link href="/privacy">privacy policy</Link>.
      </p>

      <h2>Availability and changes</h2>
      <p>
        We work to keep Flowtra available and reliable, but we do not promise it will be
        uninterrupted or error-free. We may improve or change features over time and will tell
        hospitals about changes that affect how they work.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent the law allows, Flowtra is not liable for indirect or consequential losses
        arising from use of the website or the service. Nothing in these terms limits liability
        that cannot be limited by law.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </LegalPage>
  );
}
