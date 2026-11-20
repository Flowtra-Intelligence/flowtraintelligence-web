import type { Metadata } from "next";
import { CONTACT_EMAIL, LegalPage } from "../_components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy policy | Flowtra Intelligence",
  description:
    "How Flowtra Intelligence and Flowtra Healthcare collect, use, store and protect data, including Google user data from connected Gmail accounts.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" effectiveDate="20 November 2026">
      <p>
        This policy explains how Flowtra Intelligence (&quot;Flowtra&quot;, &quot;we&quot;) handles
        data in this website and in Flowtra Healthcare, our software for hospital revenue and
        insurance operations (the desktop application installed at a hospital, and the Flowtra
        cloud service it works with).
      </p>

      <h2>Who is responsible for the data</h2>
      <p>
        Flowtra Healthcare is used by hospitals. The hospital decides what patient, claim and
        mailbox data is brought into Flowtra and why; we process that data on the hospital&apos;s
        behalf and only to provide the service to that hospital. Patients who want to exercise
        rights over their records should contact their hospital first; we will help the hospital
        respond.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Hospital user accounts:</strong>{" "}name, work email, role and sign-in records of
          hospital staff who use Flowtra.
        </li>
        <li>
          <strong>Case and claim data</strong>{" "}the hospital enters or connects: patient and
          admission details, insurance and claim records, bills, and documents. Aadhaar numbers
          are stored masked and are never sent to an AI model.
        </li>
        <li>
          <strong>Email from a connected mailbox</strong>{" "}(Gmail or Zoho Mail), described in detail
          below.
        </li>
        <li>
          <strong>Website:</strong>{" "}this website does not use analytics, advertising or tracking
          cookies. If you email us, we keep your message to reply to you.
        </li>
      </ul>

      <h2>Google user data (Gmail)</h2>
      <p>
        A hospital can connect its own Gmail account to Flowtra Healthcare. When it does, Flowtra
        asks Google for these permissions:
      </p>
      <ul>
        <li>
          <strong>Read email (gmail.readonly)</strong>{" "}to find messages from insurers, third-party
          administrators (TPAs) and insurance portals: queries on a claim, approvals, denials,
          settlement and payment advices, their attachments, and one-time sign-in codes that an
          insurance portal emails to the hospital so that Flowtra&apos;s automation can sign in to
          that portal on the hospital&apos;s behalf.
        </li>
        <li>
          <strong>Compose and send email (gmail.compose, gmail.send)</strong>{" "}to send a reply to
          an insurer or TPA from the hospital&apos;s own mailbox. A reply is sent only after a
          hospital user has reviewed it and chosen to send it; Flowtra does not send replies to
          insurers on its own.
        </li>
      </ul>
      <p>
        <strong>How we use it.</strong>{" "}Flowtra reads only the messages it needs for the purposes
        above, recognises what each message is about, extracts details such as the claim number,
        patient name, amounts and requested documents, and links the message to the right
        hospital case so the hospital&apos;s staff can act on it. Messages that are not about
        insurance work are not kept.
      </p>
      <p>
        <strong>Where it is stored.</strong>{" "}Extracted details and the messages Flowtra keeps are
        stored on the hospital&apos;s own computer and in the hospital&apos;s own database in the
        Flowtra cloud, hosted on Microsoft Azure in India. Each hospital&apos;s data is kept in a
        separate database.
      </p>
      <p>
        <strong>Who it is shared with.</strong>{" "}We do not sell Google user data, use it for
        advertising, or use it to build user profiles. We share it only with the service providers
        we need to run Flowtra for the hospital:
      </p>
      <ul>
        <li>Microsoft Azure, which hosts the Flowtra cloud service.</li>
        <li>
          If the hospital turns on AI-assisted reading, the AI provider it has chosen (Google
          Gemini or Anthropic Claude) receives the text of a relevant message or attachment to
          extract its details. The result is returned to Flowtra; it is not used by Flowtra to
          train AI models.
        </li>
      </ul>
      <p>
        We may also disclose data where the law requires it, or with the hospital&apos;s
        instruction.
      </p>
      <p>
        <strong>Who can read it.</strong>{" "}Hospital staff with the right role in Flowtra. Flowtra
        personnel read a hospital&apos;s email data only when the hospital asks us to for support,
        when needed for security or abuse investigation, or when the law requires it.
      </p>
      <p>
        <strong>Limited Use.</strong>{" "}Flowtra&apos;s use and transfer of information received from
        Google APIs to any other app will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. We do not use Google user data to develop,
        improve or train generalised AI or machine-learning models.
      </p>
      <p>
        <strong>Disconnecting.</strong>{" "}The hospital can disconnect its mailbox in Flowtra at any
        time, or remove Flowtra&apos;s access from its Google Account at{" "}
        <a href="https://myaccount.google.com/permissions" target="_blank" rel="noreferrer">
          myaccount.google.com/permissions
        </a>
        . Once access is removed, Flowtra stops reading the mailbox.
      </p>

      <h2>How long we keep data</h2>
      <p>
        We keep a hospital&apos;s data for as long as the hospital uses Flowtra and as its records
        obligations require. When a hospital asks us to delete its data, or its agreement ends, we
        delete it, except where the law requires us to keep it. To ask for deletion of data
        obtained from a connected mailbox, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>How we protect data</h2>
      <ul>
        <li>All traffic between Flowtra components is encrypted in transit (HTTPS/TLS).</li>
        <li>
          Mailbox access tokens and service keys are kept in the operating system&apos;s secure
          credential store or in a managed key vault, not in plain files.
        </li>
        <li>
          Each hospital&apos;s data sits in its own database, and access inside Flowtra is limited
          by role.
        </li>
      </ul>

      <h2>Your choices and rights</h2>
      <p>
        You can ask us to access, correct or delete personal data we hold about you, subject to
        the hospital&apos;s instructions and legal obligations. We handle personal data in line
        with applicable Indian law, including the Digital Personal Data Protection Act, 2023.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we will update it on this page and change the effective date
        above. Significant changes will be notified to the hospitals using Flowtra.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests about privacy:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </LegalPage>
  );
}
