# Flowtra Intelligence web

Repository for the Flowtra Intelligence public web presence, including:

- `flowtraintelligence.com` for the company site
- `healthcare.flowtraintelligence.com` for the healthcare product experience

## Positioning

This site is intentionally built as an authority website, not a marketing website.

It centers:

- Product
- Founder
- Vision
- Screenshots
- Roadmap
- Contact

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production build output is generated in `dist/`.

## Current status

- Current production preview has been published through OpenAI Sites for fast iteration.
- The long-term intended production hosting path is Netlify.
- The codebase currently supports both the company experience and the healthcare product experience from one repository.

## Netlify deployment model

Recommended setup is two Netlify sites pointing to the same repository:

- `flowtraintelligence.com` for the company site
- `healthcare.flowtraintelligence.com` for the healthcare product site

Both sites can use the same build settings:

- Build command: `npm run build:netlify`
- Publish directory: `.next`

Set site-specific environment variables in Netlify:

### Company site

- `FLOWTRA_SITE_VARIANT=company`
- `FLOWTRA_COMPANY_URL=https://flowtraintelligence.com`
- `FLOWTRA_HEALTHCARE_URL=https://healthcare.flowtraintelligence.com`
- `FLOWTRA_DEMO_URL=<demo operational site url>`

### Healthcare site

- `FLOWTRA_SITE_VARIANT=healthcare`
- `FLOWTRA_COMPANY_URL=https://flowtraintelligence.com`
- `FLOWTRA_HEALTHCARE_URL=https://healthcare.flowtraintelligence.com`
- `FLOWTRA_DEMO_URL=<demo operational site url>`
