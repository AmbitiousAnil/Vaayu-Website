"use client";

import type { CSSProperties, FormEvent } from "react";
import { useMemo, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiDroplet,
  FiPieChart,
  FiShield,
  FiTrendingUp,
  FiZap,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";

const navItems = [
  { label: "HOME", href: "https://vaayuindia.com/" },
  { label: "ABOUT US", href: "https://vaayuindia.com/about_us" },
  { label: "PRODUCT", href: "https://vaayuindia.com/vaayu_product" },
  {
    label: "ESG",
    href: "#",
    children: [
      "Energy efficiency",
      "Carbon Neutral",
      "Oxygenated Air",
      "Sustainable Solutions",
      "Ergonomic",
    ],
  },
  {
    label: "MEDIA",
    href: "#",
    children: ["Gallery", "Press Release", "youtube"],
  },
  { label: "CONTACT US", href: "https://vaayuindia.com/contact" },
];

const metrics = [
  {
    id: "cop",
    label: "Cooling efficiency",
    value: "6.8",
    unit: "COP",
    icon: FiTrendingUp,
    visual: "bars",
    detail: "High-efficiency cooling performance highlighted as a patented technology metric.",
    x: "23%",
    y: "34%",
  },
  {
    id: "water",
    label: "Reduced water consumption",
    value: "35%",
    unit: "improved",
    icon: FiDroplet,
    visual: "bars",
    detail: "Designed to reduce water demand while maintaining dependable cooling output.",
    x: "28%",
    y: "64%",
  },
  {
    id: "electricity",
    label: "Electricity saving",
    value: "35%",
    unit: "kW/ton improved",
    icon: FiZap,
    visual: "pie",
    detail: "Energy-conscious operation for commercial and industrial HVAC use cases.",
    x: "73%",
    y: "52%",
  },
  {
    id: "aqi",
    label: "AQI",
    value: "22",
    unit: "good",
    icon: FiShield,
    visual: "gauge",
    detail: "Fresh-air led cooling proposition for healthier occupied environments.",
    x: "76%",
    y: "76%",
  },
];

const products = [
  {
    title: "AHU",
    eyebrow: "Patented air handling",
    interest: "AHU",
    image: "/assets/uploads/VERT_HVAC.webp",
    description:
      "Hybrid air handling units built for fresh-air cooling, controlled airflow, and efficient commercial comfort.",
    bullets: ["Fresh-air focused", "Engineered airflow", "Energy-conscious cooling"],
    featured: true,
  },
  {
    title: "HVAC",
    eyebrow: "Comfort applications",
    interest: "HVAC",
    image: "/assets/uploads/VERT_Project management.webp",
    description:
      "HVAC solutions for showrooms, institutions, hospitality, healthcare, and mixed-use commercial spaces.",
    bullets: ["Commercial cooling", "Project-ready systems", "Application support"],
  },
  {
    title: "Industrial Cooling",
    eyebrow: "Operational environments",
    interest: "Industrial Cooling",
    image: "/assets/uploads/VERT_Design.webp",
    description:
      "Cooling concepts for industrial floors, warehouses, process areas, and high-occupancy facilities.",
    bullets: ["Large-volume spaces", "Ventilation-led comfort", "Custom design support"],
  },
];

const caseStudies = [
  {
    application: "Mushroom Farm",
    title: "Fresh-air cooling for controlled growing environments",
    video: "/assets/videos/testimonialsvideo1.mp4",
    poster: "/assets/generated/case-mushroom-farm.webp",
    challenge: "Maintain a stable, breathable environment for a moisture-sensitive application.",
    solution: "Vaayu hybrid cooling with focused air movement and fresh-air delivery.",
    result: "A practical cooling story for agriculture and controlled-environment operations.",
  },
  {
    application: "Educational Institutions",
    title: "Comfort cooling for high-occupancy learning spaces",
    video: "/assets/videos/Application_ Educational Institutions - VIDYODAY.mp4",
    poster: "/assets/generated/case-educational-institute.webp",
    challenge: "Support student comfort where occupancy and ventilation needs change through the day.",
    solution: "Application-specific HVAC planning with fresh-air led cooling.",
    result: "A school and institute use case that makes the technology easier to evaluate.",
  },
  {
    application: "Showrooms",
    title: "Customer comfort for retail display floors",
    video: "/assets/videos/testimonialsvideo3.mp4",
    poster: "/assets/generated/case-showroom.webp",
    challenge: "Cool open retail areas without losing the customer experience to heavy HVAC noise or drafts.",
    solution: "Vaayu cooling configured around visibility, comfort, and continuous occupancy.",
    result: "A retail-focused story for showrooms, malls, and customer-facing commercial spaces.",
  },
  {
    application: "Healthcare",
    title: "Ventilation-led cooling for sensitive environments",
    video: "/assets/videos/testimonialsvideo4.mp4",
    poster: "/assets/generated/case-healthcare.webp",
    challenge: "Balance comfort, air movement, and indoor air quality in a sensitive facility context.",
    solution: "Fresh-air cooling design supported by Vaayu application expertise.",
    result: "A useful reference for hospitals, clinics, and other specialized environments.",
  },
  {
    application: "Industrial Cooling",
    title: "Engineered cooling for industrial operations",
    video: "/assets/videos/testimonialsvideo5.mp4",
    poster: "/assets/generated/case-industrial-cooling.webp",
    challenge: "Address large spaces where conventional comfort cooling can become expensive or difficult.",
    solution: "Industrial cooling planning with Vaayu air handling and ventilation-led design.",
    result: "A project-oriented story for warehouses, factories, and large-volume facilities.",
  },
];

const clients = [
  ...Array.from({ length: 31 }, (_, index) => `${index + 1}.png`),
  "32.jpg",
  "33.jpg",
  "OAkaz - Vinyl.png",
  "meraki.png",
  "roop.png",
];

const leadInterestOptions = [
  "AHU",
  "HVAC",
  "Industrial Cooling",
  "Clean Rooms",
  "Hospitals",
  "Schools/Colleges",
  "Mall/Showrooms",
  "Industries",
  "Warehouses",
  "Gym/Fitness Center",
  "Other",
];

export default function VaayuHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [activeMetric, setActiveMetric] = useState<string | null>(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const [productInterest, setProductInterest] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState<Record<string, boolean>>({});

  const activeStory = caseStudies[storyIndex];
  const marqueeLogos = useMemo(() => [...clients, ...clients], []);

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function scrollToContact(interest?: string) {
    if (interest) {
      setProductInterest(interest);
    }
    setFormStatus("");
    requestAnimationFrame(() => scrollToId("contact"));
  }

  function cycleStory(direction: number) {
    setStoryIndex((current) => (current + direction + caseStudies.length) % caseStudies.length);
  }

  function markProductLoaded(title: string) {
    setLoadedProducts((current) => ({ ...current, [title]: true }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus(
      productInterest
        ? `Thank you. Your ${productInterest} inquiry has been captured for follow-up.`
        : "Thank you. Your inquiry has been captured for follow-up.",
    );
  }

  return (
    <main>
      <header className="site-header">
        <div className="top-strip">
          <span>Patented hybrid cooling systems for commercial and industrial spaces</span>
          <button className="appointment" onClick={() => scrollToContact()}>
            Appointment
          </button>
        </div>
        <div className="nav-shell">
          <a className="brand" href="https://vaayuindia.com/">
            <img src="/assets/img/VERT_newlogo.webp" alt="Vaayu" />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <div className="nav-item" key={item.label}>
                <a className={item.label === "HOME" ? "active" : ""} href={item.href}>
                  {item.label}
                </a>
                {item.children ? (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <a key={child} href="#">
                        {child}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <button
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <button className="drawer-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          x
        </button>
        <nav>
          {navItems.map((item) => (
            <div className="drawer-item" key={item.label}>
              <a
                className={item.label === "HOME" ? "active" : ""}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
              {item.children ? (
                <button
                  aria-label={`Toggle ${item.label}`}
                  onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                >
                  +
                </button>
              ) : null}
              {item.children && openGroup === item.label ? (
                <div className="drawer-submenu">
                  {item.children.map((child) => (
                    <a href="#" key={child} onClick={() => setMenuOpen(false)}>
                      {child}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </aside>
      {menuOpen ? (
        <button
          className="drawer-scrim"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <section className="hero" id="technology" aria-label="Vaayu patented technology">
        <picture className={`hero-background media-shell ${heroLoaded ? "is-loaded" : ""}`}>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/generated/vaayu-hero-mobile-portrait.webp"
          />
          <img
            src="/assets/generated/vaayu-hero-desktop-wide.webp"
            alt="Vaayu AHU technology visualization"
            onLoad={() => setHeroLoaded(true)}
          />
        </picture>

        <div className="hero-shell">
          <div className="metric-layer" aria-label="Patented technology metrics">
            {metrics.map((metric) => (
              <button
                className={`metric-pin metric-${metric.id} ${
                  activeMetric === metric.id ? "active" : ""
                }`}
                key={metric.id}
                style={{ "--x": metric.x, "--y": metric.y } as CSSProperties}
                aria-expanded={activeMetric === metric.id}
                onClick={() => setActiveMetric(activeMetric === metric.id ? null : metric.id)}
              >
                <span className="metric-topline">
                  <span className="metric-icon" aria-hidden="true">
                    <metric.icon />
                  </span>
                  <span className="metric-label">{metric.label}</span>
                </span>
                <span className="metric-readout">
                  <span className="metric-value">{metric.value}</span>
                  <small>{metric.unit}</small>
                  <span className={`metric-visual metric-${metric.visual}`} aria-hidden="true">
                    {metric.visual === "pie" ? <FiPieChart /> : null}
                    {metric.visual === "gauge" ? <FiBarChart2 /> : null}
                    {metric.visual === "bars" ? <FiBarChart2 /> : null}
                  </span>
                </span>
                <span className="metric-detail">{metric.detail}</span>
              </button>
            ))}
          </div>

          <div className="hero-actions">
            <button className="secondary-action hero-expert-action" onClick={() => scrollToContact()}>
              <FiPhoneCall aria-hidden="true" />
              Talk to an HVAC Expert
            </button>
          </div>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-heading">
          <p className="eyebrow">Products</p>
          <h2>Explore Vaayu HVAC solutions</h2>
          <p>
            Three clear entry points for commercial buyers: patented air handling, comfort HVAC,
            and industrial cooling applications.
          </p>
        </div>

        <div className="product-layout">
          {products.map((product) => (
            <article
              className={`product-card ${product.featured ? "featured" : ""}`}
              key={product.title}
            >
              <div
                className={`product-media media-shell ${
                  loadedProducts[product.title] ? "is-loaded" : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={`${product.title} solution`}
                  decoding="async"
                  onLoad={() => markProductLoaded(product.title)}
                />
              </div>
              <div className="product-card-content">
                <p>{product.eyebrow}</p>
                <h3>{product.title}</h3>
                <span>{product.description}</span>
                <ul>
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <button onClick={() => scrollToContact(product.interest)}>
                  <FiDownload aria-hidden="true" />
                  Download brochure
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section case-section" id="applications">
        <div className="section-heading compact">
          <p className="eyebrow">Applications & Success Stories</p>
          <h2>Real applications. Proven cooling stories.</h2>
        </div>

        <div className="case-study-shell">
          <div className="case-copy">
            <p className="case-count">
              {String(storyIndex + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
            </p>
            <span>{activeStory.application}</span>
            <h3>{activeStory.title}</h3>
            <dl>
              <div>
                <dt>Challenge</dt>
                <dd>{activeStory.challenge}</dd>
              </div>
              <div>
                <dt>Vaayu solution</dt>
                <dd>{activeStory.solution}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{activeStory.result}</dd>
              </div>
            </dl>
            <div className="case-actions">
              <button onClick={() => cycleStory(-1)} aria-label="Previous success story">
                <FiChevronLeft aria-hidden="true" />
              </button>
              <button onClick={() => cycleStory(1)} aria-label="Next success story">
                <FiChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="case-video media-shell">
            <video
              key={activeStory.video}
              src={activeStory.video}
              poster={activeStory.poster}
              controls
              preload="none"
              aria-label={`Watch ${activeStory.application} success story`}
            />
          </div>
        </div>
      </section>

      <section className="clients-section" id="clients" aria-label="Vaayu clients">
        <div className="clients-copy">
          <p className="eyebrow">Clients</p>
          <h2>Customers who trusted us for cooling solutions</h2>
        </div>
        <div className="client-marquee" aria-label="Client logo carousel">
          <div className="client-track">
            {marqueeLogos.map((file, index) => (
              <div className="client-logo" key={`${file}-${index}`}>
                <img
                  src={`/assets/client_logo/${file}`}
                  alt={`Client logo ${index + 1}`}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-intro">
          <p className="eyebrow">Contact Us</p>
          <h2>Plan your cooling project</h2>
          <p>
            Tell us your application and our team will recommend the right Vaayu solution for your
            space, usage pattern, and cooling expectations.
          </p>
          <div className="contact-methods" aria-label="Direct contact options">
            <a href="tel:+918435003000">
              <FiPhoneCall aria-hidden="true" />
              +91 84350 03000
            </a>
            <a href="mailto:info@vaayuindia.com">
              <FiMail aria-hidden="true" />
              info@vaayuindia.com
            </a>
            <a href="https://wa.me/918435003000">
              <FaWhatsapp aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            <span>Name</span>
            <input name="name" placeholder="Your name" required />
          </label>
          <label>
            <span>Phone</span>
            <input name="phone" type="tel" placeholder="+91" required />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>City</span>
            <input name="city" placeholder="Project city" />
          </label>
          <label className="wide">
            <span>Product / application interest</span>
            <select
              name="application"
              value={productInterest}
              onChange={(event) => setProductInterest(event.target.value)}
              required
            >
              <option value="">Select interest</option>
              {leadInterestOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="wide">
            <span>Project note</span>
            <textarea
              name="message"
              placeholder="Tell us about the space, application, or cooling challenge."
              rows={4}
            />
          </label>
          <button type="submit">
            Submit inquiry
            <FiArrowRight aria-hidden="true" />
          </button>
          {formStatus ? (
            <p className="form-status" aria-live="polite">
              {formStatus}
            </p>
          ) : null}
        </form>
      </section>

      <div className="footer-strip">
        <img src="/assets/img/VERT_footer.webp" alt="Vaayu certifications and trust marks" />
      </div>

      <footer>
        <div className="footer-column address">
          <img src="/assets/img/VERT_newlogo.webp" alt="Logo" />
          <p>
            Address:- International Office:503, Apollo Premiere,
            <br />
            Vijay Nagar, Indore, MP, India
            <br />
            <br />
            Experience Zone:FH-196, Scheme No.54,
            <br />
            Vijay Nagar, Indore - 452010, (M.P)
          </p>
          <div className="socials">
            <a href="https://www.facebook.com/vaayuindia/" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/Vaayuindia" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a
              href="https://in.linkedin.com/company/vaayu-home-appliances-india-private-limited"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/channel/UCCtdmePxAq3gpBmoXpb_zDQ" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-column links">
          <h2>Important Links</h2>
          <a href="https://vaayuindia.com/Career">Career</a>
          <a href="https://vaayuindia.com/about_us">About Us</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms and conditions</a>
        </div>
        <div className="footer-column map">
          <h2>Visit Vaayu</h2>
          <p>
            <FiMapPin aria-hidden="true" />
            Indore, Madhya Pradesh
          </p>
          <iframe
            title="Vaayu Aircon map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.2637654483287!2d75.88537787476238!3d22.75559062623964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5114fd3e57%3A0x63f001e0ec92e145!2sVaayu%20Aircon!5e0!3m2!1sen!2sin!4v1721734248625!5m2!1sen!2sin"
            loading="lazy"
          />
        </div>
      </footer>
    </main>
  );
}
