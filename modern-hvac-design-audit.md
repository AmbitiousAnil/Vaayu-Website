# Vaayu Website Modern HVAC Design Audit

## Audit Scope

Audit date: June 9, 2026  
Audit mode: Combined UX, visual design, and accessibility audit  
Capture tool: CloakBrowser  
Vaayu target: `http://127.0.0.1:3000`  
Reference targets: `https://www.lg.com/global/business/hvac/`, `https://www.mitsubishicomfort.com/`

## Evidence

Screenshots saved in `design-audit-evidence/cloak/`:

1. `01-vaayu-desktop.png` - Vaayu homepage desktop
2. `02-vaayu-mobile.png` - Vaayu homepage mobile
3. `03-lg-global-desktop.png` - LG HVAC desktop
4. `04-lg-global-mobile.png` - LG HVAC mobile
5. `05-mitsubishi-desktop.png` - Mitsubishi Comfort desktop
6. `06-mitsubishi-mobile.png` - Mitsubishi Comfort mobile

## Overall Read

Vaayu has useful raw material: real installation/product imagery, patented-technology claims, broad application coverage, success videos, client logos, certifications, and a contact form. Compared with LG and Mitsubishi, the main gap is not content availability. The gap is presentation, hierarchy, product storytelling, and conversion flow.

LG feels modern because it turns HVAC into a structured B2B journey: hero promise, solution categories, technical proof, insight content, resources, and business support. Mitsubishi feels modern because it makes the buyer journey clear: benefits, quantified savings, product options, solution types, trust, news, and repeated CTAs.

Vaayu currently feels like a legacy gallery page: many assets are present, but they are arranged as long grids with small text, weak explanation, minimal CTA hierarchy, and little decision support.

## Strengths To Preserve

- Strong authentic assets: factory/site video, HVAC images, application photos, client logos, certificates, and success videos.
- Clear domain focus: patented cooling technology, HVAC design, clean rooms, ventilation, laminar airflow, and hybrid evaporative cooling.
- Broad application range: amusement parks, hospitals, schools, malls, industries, warehouses, gyms, showrooms, places of worship, and more.
- Trust signals already exist: clients, certifications, patented claim, ISO/CE/RoHS-style marks, and social links.
- Contact form is present on the homepage, so conversion infrastructure exists.

## Priority Improvements

### P0 - Modernize The First Screen

The hero currently relies mainly on video and a small navigation bar. It does not clearly tell a first-time visitor what Vaayu does, why it is different, or what action to take.

Recommended changes:

- Add a strong hero headline over the video, such as `Patented Hybrid Air Handling Units for Efficient, Fresh-Air Cooling`.
- Add one short supporting line focused on outcomes: energy savings, fresh air, lower water use, and commercial HVAC expertise.
- Add two clear CTAs: `Explore Products` and `Talk to an HVAC Expert`.
- Keep `Download Brochure` as a secondary action, not the only visible CTA.
- Add a subtle dark overlay or gradient over the video so text is readable.
- Move navigation into a cleaner sticky header with proper spacing and active states.
- Add proof chips near the hero: `Patented Technology`, `100% Fresh Air`, `24-26 C Green Temperature`, `Commercial HVAC`.

Reference pattern:

- LG uses a hero with a clear solution message and a `Learn more` CTA.
- Mitsubishi uses a hero headline plus `Find a Contractor` as the primary action.

### P0 - Rebuild Information Architecture

The current nav labels are too broad and do not reflect how a modern HVAC buyer thinks.

Recommended navigation:

- `Technology`
- `Products`
- `Applications`
- `Projects`
- `Resources`
- `About`
- `Contact`

Recommended dropdowns:

- Products: AHU, HVAC Products, HVAC Projects, HVAC Design Services
- Applications: Clean Rooms, Hospitals, Schools, Industrial, Showrooms, Warehouses, Hospitality, Places of Worship
- Resources: Brochure, Case Studies, FAQs, Certifications, Blog/Insights

Reference pattern:

- LG separates Commercial, Residential, Industrial, Service, and Resources.
- Mitsubishi separates Comfort Solutions, Products, Resources, and Pros.

### P0 - Replace Long Image Grids With Decision Cards

The application grid and client grid are visually long and repetitive. They add proof, but they do not help visitors choose a solution.

Recommended changes:

- Convert applications into cards with title, one-line use case, and link.
- Group applications into categories: Commercial, Institutional, Industrial, Hospitality, Public Spaces, Specialized Environments.
- Show 6-8 priority applications first, with `View all applications` for the rest.
- Add filters or tabs if all applications must remain visible.
- Replace the huge client logo wall with a curated proof section: top logos, industry categories, and a `View client stories` CTA.

Reference pattern:

- LG uses large solution cards for Commercial, Residential, and Industrial.
- Mitsubishi uses product cards and solution-type cards rather than dumping all options at once.

### P0 - Strengthen Product And Technology Storytelling

Vaayu has patented benefits but they appear as small icon text and one image strip. The site should explain why the technology matters.

Recommended changes:

- Turn `Our Patented Technology` into a full section with 3-5 benefit cards.
- For each claim, add plain-language proof:
  - Compressor based unique cooling tech: what it means and where it helps.
  - Reduces water consumption by 60%: compared to what baseline?
  - Reduces power consumption by 80%: add test context or qualifying note.
  - Generates carbon credits: explain eligibility or remove if not substantiated.
  - 100% fresh air: explain indoor air quality benefit.
- Add a diagram or simple process visual showing how Vaayu air handling differs from conventional HVAC.
- Add spec highlights: air volume, suitable building types, temperature range, maintenance requirements, energy/water savings.

Reference pattern:

- LG explains Expertise, Commitment, and Integration.
- Mitsubishi explains efficiency, incentives, energy use, and greenhouse-gas impact with clear supporting copy.

### P1 - Redesign The Success Stories Section

The videos are useful but currently look like embedded media blocks with minimal context.

Recommended changes:

- Present each success story as a case-study card.
- Add fields: client/application type, challenge, Vaayu solution, result/outcome, video.
- Add a CTA: `Read case study` or `Watch story`.
- Include metrics where possible: energy saved, temperature achieved, project size, water saved, operational improvement.
- Add industry tags such as `Mushroom Farm`, `Coaching Institute`, `Showroom`.

Reference pattern:

- LG uses insight cards and case-study cards.
- Mitsubishi uses news and proof cards with recognizable sources and concise CTAs.

### P1 - Upgrade Visual System

The current visual language feels inconsistent: tiny text, compressed section spacing, mixed image sizing, and a legacy blue-heavy palette.

Recommended changes:

- Establish a modern type scale:
  - Hero headline: 48-64px desktop, 32-40px mobile
  - Section headings: 32-44px desktop, 26-32px mobile
  - Body copy: 16-18px with 1.5-1.7 line-height
- Use consistent section spacing: 80-120px desktop, 48-72px mobile.
- Use a restrained palette: Vaayu blue/teal as accents, neutral backgrounds, and warmer off-white or cool grey sections.
- Standardize card radius, image aspect ratios, shadows, icon sizes, and CTA styles.
- Increase whitespace around text and cards.
- Avoid making the page look like a logo/image dump; every section should have a clear job.

### P1 - Improve Contact And Lead Capture

The contact form is functional but generic. Modern HVAC sites guide users toward the right next step.

Recommended changes:

- Rename `Let's Connect` to a more specific conversion heading, such as `Plan Your Cooling Project`.
- Add CTA context: `Tell us your application and our team will recommend the right Vaayu solution.`
- Add labels above fields, not placeholder-only inputs.
- Add required-field markers and visible validation.
- Add contact alternatives: phone, email, WhatsApp, office address, and response-time expectation.
- Add privacy reassurance near submit.
- Add a sticky mobile CTA: `Talk to Expert` or `Get Consultation`.
- Consider a multi-step form:
  1. Application type
  2. City/project size
  3. Contact details

### P1 - Make Mobile Less Exhausting

The mobile page is very long, especially application images and client logos. It works, but it asks too much scrolling before a user reaches contact.

Recommended changes:

- Add a mobile hero CTA above the fold.
- Collapse application categories into accordions or horizontal cards.
- Show selected client logos first with `View more clients`.
- Convert success stories into swipeable cards.
- Add sticky bottom action: `Call`, `WhatsApp`, `Brochure`, or `Contact`.
- Increase text size and vertical spacing in dense sections.
- Ensure touch targets are at least 44px high.

Reference pattern:

- LG mobile keeps sections modular and cards readable.
- Mitsubishi mobile keeps repeated CTAs and strong section separation.

### P1 - Add Resource And Insight Content

Modern HVAC buyers often need education before contacting sales.

Recommended new sections:

- `Resources & Guides`
- `Case Studies`
- `Energy Savings Calculator`
- `Application Guides`
- `FAQ`
- `Certifications & Patents`
- `Maintenance and Service`
- `Brochure Download`

Content ideas:

- `How hybrid evaporative cooling reduces water consumption`
- `Choosing HVAC for clean rooms`
- `Fresh-air cooling for schools and institutes`
- `AHU vs conventional cooling systems`
- `How Vaayu supports ESG goals`

Reference pattern:

- LG includes blogs, case studies, white papers, resource download, engineering support, and technical insight.
- Mitsubishi includes press/news, product education, and savings support.

### P1 - Improve Trust Signals

Client logos and certificates are present, but they need context.

Recommended changes:

- Add short testimonials or project outcomes next to client logos.
- Group clients by industry.
- Add `Trusted by` section near top with 6-8 strongest logos.
- Move full logo wall lower or onto a dedicated clients page.
- Explain each certification/patent mark in a tooltip or card.
- Add a `Patented Nano` or `Patent Details` page if available.
- Add project count, years in market, cities served, and service coverage if true.

### P2 - Accessibility Improvements

Screenshot-based audit cannot prove full WCAG compliance, but visible risks are present.

Recommended changes:

- Increase text contrast and font size, especially small blue text on white.
- Add semantic heading hierarchy: one `h1`, then section `h2`s.
- Add descriptive alt text for application/client images where meaningful.
- Avoid placeholder-only form labels.
- Add visible focus states for nav, buttons, form controls, carousel arrows, and mobile menu controls.
- Ensure keyboard access to dropdowns and mobile drawer.
- Add captions/transcripts or summaries for videos.
- Respect reduced-motion preferences for autoplaying video and animations.
- Ensure icons are not the only way benefits are communicated.

### P2 - Performance And Media Improvements

The page is media-heavy. It should feel rich without becoming heavy.

Recommended changes:

- Use optimized responsive images instead of serving full-size images everywhere.
- Use Next.js image optimization or manually generated sizes.
- Keep the hero video local, compressed, muted, looped, and `playsInline`.
- Lazy-load below-fold videos and large media.
- Use video posters for success stories.
- Convert repetitive logos to optimized WebP/AVIF where possible.
- Avoid loading all hidden carousel videos at once.

### P2 - Footer And Utility Navigation

The footer is useful but sparse compared with modern references.

Recommended changes:

- Add structured footer columns:
  - Products
  - Applications
  - Resources
  - Company
  - Contact
- Add direct phone/email/WhatsApp links.
- Add service area and office details.
- Add legal links and privacy policy.
- Keep map only if it helps conversion; otherwise move it to Contact page.

## Recommended Homepage Structure

1. Hero: headline, subcopy, CTAs, proof chips, video background.
2. Trusted proof: top clients, certifications, patented claim.
3. Technology: patented benefits with quantified proof.
4. Solutions: product/service category cards.
5. Applications: prioritized categories, not full image dump.
6. Case studies: 3 featured stories with outcomes.
7. Resources: brochure, guides, FAQs, insights.
8. Contact CTA: consultation-focused form and direct contact options.
9. Footer: structured navigation and business details.

## Step Health

1. Vaayu desktop - Needs improvement. Content exists, but hierarchy, CTA clarity, and product decision support are weak.
2. Vaayu mobile - Needs improvement. Usable, but too long and visually repetitive.
3. LG HVAC desktop - Strong reference. Clear B2B structure, solution categories, insights, resource cards, and footer taxonomy.
4. LG HVAC mobile - Strong reference. Modular, readable, and category-driven, though long.
5. Mitsubishi desktop - Strong reference. Clear buyer path, quantified benefits, product cards, solution types, CTAs, and trust content.
6. Mitsubishi mobile - Strong reference. Clean stacked journey with repeated CTAs and readable product/benefit modules.

## Evidence Limits

- This audit is based on screenshot and rendered-text evidence, not analytics, customer interviews, code-level accessibility testing, or conversion data.
- I did not test every dropdown, form state, or keyboard path during this pass.
- Some reference-site sections may be personalized, cookie-gated, or changed by geography.
- LG and Mitsubishi are larger global brands, so their content scale should guide structure and quality, not be copied literally.

## Suggested Next Step

Create a redesigned Vaayu homepage wireframe using the recommended structure above, then implement it section by section while preserving Vaayu's authentic assets, patented-technology claims, clients, and local hero video.

