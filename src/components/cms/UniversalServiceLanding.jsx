"use client";

import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Zap,
  Briefcase,
  Layers,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const iconMap = {
  Zap,
  ShieldCheck,
  Briefcase,
  Layers,
  CheckCircle,
};

const defaultFeatures = [
  {
    id: "feat-1",
    title: "Expert Quality",
    description: "Delivering top-tier results with industry-leading standards and practices.",
    icon: "Briefcase",
  },
  {
    id: "feat-2",
    title: "Fast & Reliable",
    description: "Streamlined processes to ensure timely completion without compromising on quality.",
    icon: "Zap",
  },
  {
    id: "feat-3",
    title: "Guaranteed Satisfaction",
    description: "We stand behind our work with comprehensive warranties and support.",
    icon: "ShieldCheck",
  },
];

const defaultShowcase = [
  {
    id: "showcase-1",
    title: "Residential & Commercial",
    subtitle: "Tailored Solutions",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "showcase-2",
    title: "Premium Products",
    subtitle: "Highest Quality Materials",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "showcase-3",
    title: "Dedicated Support",
    subtitle: "24/7 Availability",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

export const universalServiceLandingDefaultProps = {
  heroHeadline: "Premium Solutions for Your Every Need",
  heroSubtext: "Whether you need expert services, high-quality products, or seamless experiences, we deliver excellence tailored to your goals.",
  heroPrimaryCta: "Get Started Today",
  heroSecondaryCta: "Learn More",
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
  featuresTitle: "Why Choose Us",
  featuresSubtitle: "Built on a foundation of trust, quality, and speed.",
  features: defaultFeatures,
  showcaseTitle: "Our Expertise in Action",
  showcase: defaultShowcase,
  testimonialQuote: "The absolute best experience I've had. Professional, efficient, and delivered exactly what was promised on time.",
  testimonialAuthor: "Sarah Jenkins",
  testimonialRole: "Verified Customer",
  ctaHeadline: "Ready to transform your experience?",
  ctaSubtext: "Join thousands of satisfied clients who trust our platform.",
  ctaButtonText: "Contact Us Now",
  contactTitle: "Let's Talk",
  contactSubtitle: "Reach out to our specialists to discuss your next project.",
  contactPhone: "+1 (800) 555-0199",
  contactEmail: "hello@universalservices.com",
  contactAddress: "123 Innovation Drive, Tech City, TC 10101",
  fontFamily: "inherit",
  heroHeadingFontSize: "4rem",
  sectionHeadingFontSize: "2.25rem",
  bodyFontSize: "1.125rem",
  sectionPaddingY: "6rem",
  sectionPaddingX: "2rem",
  accentColor: "#4f46e5",
  headingColor: "#111827",
  textColor: "#4b5563",
  heroBackgroundColor: "transparent",
  featuresBackgroundColor: "#ffffff",
  showcaseBackgroundColor: "#f8fafc",
  testimonialBackgroundColor: "#ffffff",
  contactBackgroundColor: "#ffffff",
  surfaceColor: "#f8fafc",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const UniversalServiceLanding = (incomingProps) => {
  const props = incomingProps.props || incomingProps;
  const { isPreviewing, isEditable } = incomingProps;

  const {
    id,
    className = "",
    style = {},
    heroHeadline,
    heroSubtext,
    heroPrimaryCta,
    heroSecondaryCta,
    heroImage,
    featuresTitle,
    featuresSubtitle,
    features,
    showcaseTitle,
    showcase,
    testimonialQuote,
    testimonialAuthor,
    testimonialRole,
    ctaHeadline,
    ctaSubtext,
    ctaButtonText,
    contactTitle,
    contactSubtitle,
    contactPhone,
    contactEmail,
    contactAddress,
    fontFamily,
    heroHeadingFontSize,
    sectionHeadingFontSize,
    bodyFontSize,
    sectionPaddingY,
    sectionPaddingX,
    accentColor,
    headingColor,
    textColor,
    heroBackgroundColor,
    featuresBackgroundColor,
    showcaseBackgroundColor,
    testimonialBackgroundColor,
    contactBackgroundColor,
    surfaceColor,
  } = { ...universalServiceLandingDefaultProps, ...props };

  const handleClick = (e) => {
    if (isEditable && !isPreviewing) {
      e.preventDefault();
    }
  };

  return (
    <div id={id} className={`w-full overflow-hidden ${className}`} style={{ fontFamily, ...style }}>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center" style={{ backgroundColor: heroBackgroundColor }}>
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto" style={{ padding: `${sectionPaddingY} ${sectionPaddingX}` }}>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl space-y-6">
            <motion.h1 variants={fadeInUp} className="font-extrabold text-white tracking-tight leading-tight" style={{ fontSize: heroHeadingFontSize }}>
              {heroHeadline}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-200 leading-relaxed max-w-2xl" style={{ fontSize: bodyFontSize }}>
              {heroSubtext}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-6">
              <a href="#" onClick={handleClick} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: accentColor, fontSize: bodyFontSize }}>
                {heroPrimaryCta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#" onClick={handleClick} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold border border-white/30 backdrop-blur-sm transition-all hover:bg-white/10" style={{ fontSize: bodyFontSize }}>
                {heroSecondaryCta}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition / Features Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} style={{ backgroundColor: featuresBackgroundColor, padding: `${sectionPaddingY} ${sectionPaddingX}` }}>
        <div className="text-center max-w-3xl mx-auto mb-16 max-w-7xl">
          <motion.h2 variants={fadeInUp} className="font-bold mb-4" style={{ color: headingColor, fontSize: sectionHeadingFontSize }}>{featuresTitle}</motion.h2>
          <motion.p variants={fadeInUp} style={{ color: textColor, fontSize: bodyFontSize }}>{featuresSubtitle}</motion.p>
        </div>
        <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <div key={index} className="p-8 rounded-2xl transition-shadow duration-300 hover:shadow-xl border border-gray-100" style={{ backgroundColor: surfaceColor }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${accentColor}15` }}>
                  <Icon className="w-7 h-7" style={{ color: accentColor }} />
                </div>
                <h3 className="font-bold mb-3" style={{ color: headingColor, fontSize: `calc(${bodyFontSize} * 1.25)` }}>{feature.title}</h3>
                <p className="leading-relaxed" style={{ color: textColor, fontSize: bodyFontSize }}>{feature.description}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Showcase / Gallery Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} style={{ backgroundColor: showcaseBackgroundColor, padding: `${sectionPaddingY} ${sectionPaddingX}` }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeInUp} className="font-bold mb-12" style={{ color: headingColor, fontSize: sectionHeadingFontSize }}>{showcaseTitle}</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcase.map((item, index) => (
              <motion.div variants={fadeInUp} key={index} className="group relative overflow-hidden rounded-2xl aspect-square sm:aspect-[4/5] cursor-pointer">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-semibold uppercase tracking-wider mb-2" style={{ color: accentColor, fontSize: `calc(${bodyFontSize} * 0.8)` }}>{item.subtitle}</p>
                  <h3 className="font-bold text-white" style={{ fontSize: `calc(${bodyFontSize} * 1.5)` }}>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial & CTA Split */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} style={{ backgroundColor: testimonialBackgroundColor, padding: `${sectionPaddingY} ${sectionPaddingX}` }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div variants={fadeInUp}>
            <Star className="w-12 h-12 mb-6" style={{ color: accentColor, fill: accentColor }} />
            <blockquote className="font-bold leading-tight mb-8" style={{ color: headingColor, fontSize: sectionHeadingFontSize }}>
              "{testimonialQuote}"
            </blockquote>
            <div>
              <p className="font-bold" style={{ color: headingColor, fontSize: `calc(${bodyFontSize} * 1.1)` }}>{testimonialAuthor}</p>
              <p style={{ color: textColor, fontSize: bodyFontSize }}>{testimonialRole}</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="p-10 sm:p-12 rounded-3xl shadow-2xl" style={{ backgroundColor: headingColor }}>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: `calc(${sectionHeadingFontSize} * 0.8)` }}>{ctaHeadline}</h2>
            <p className="text-gray-300 mb-10" style={{ fontSize: bodyFontSize }}>{ctaSubtext}</p>
            <a href="#" onClick={handleClick} className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-lg text-white font-bold transition-transform hover:-translate-y-1" style={{ backgroundColor: accentColor, fontSize: bodyFontSize }}>
              {ctaButtonText}
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="border-t border-gray-100" style={{ backgroundColor: contactBackgroundColor, padding: `${sectionPaddingY} ${sectionPaddingX}` }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <motion.div variants={fadeInUp}>
            <h2 className="font-bold mb-4" style={{ color: headingColor, fontSize: sectionHeadingFontSize }}>{contactTitle}</h2>
            <p className="mb-10" style={{ color: textColor, fontSize: bodyFontSize }}>{contactSubtitle}</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50" style={{ color: accentColor }}><Phone className="w-5 h-5" /></div>
                <div><p className="font-semibold" style={{ color: textColor, fontSize: `calc(${bodyFontSize} * 0.85)` }}>Phone</p><p className="font-bold" style={{ color: headingColor, fontSize: bodyFontSize }}>{contactPhone}</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50" style={{ color: accentColor }}><Mail className="w-5 h-5" /></div>
                <div><p className="font-semibold" style={{ color: textColor, fontSize: `calc(${bodyFontSize} * 0.85)` }}>Email</p><p className="font-bold" style={{ color: headingColor, fontSize: bodyFontSize }}>{contactEmail}</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50" style={{ color: accentColor }}><MapPin className="w-5 h-5" /></div>
                <div><p className="font-semibold" style={{ color: textColor, fontSize: `calc(${bodyFontSize} * 0.85)` }}>Office</p><p className="font-bold" style={{ color: headingColor, fontSize: bodyFontSize }}>{contactAddress}</p></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="p-8 rounded-2xl shadow-sm border border-gray-100" style={{ backgroundColor: surfaceColor }}>
            <form className="space-y-5" onSubmit={handleClick}>
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="First Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 bg-white" style={{ focusRingColor: accentColor, fontSize: bodyFontSize }} />
                <input type="text" placeholder="Last Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 bg-white" style={{ fontSize: bodyFontSize }} />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 bg-white" style={{ fontSize: bodyFontSize }} />
              <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 bg-white resize-none" style={{ fontSize: bodyFontSize }} />
              <button type="submit" className="w-full py-4 rounded-lg text-white font-bold transition-opacity hover:opacity-90" style={{ backgroundColor: accentColor, fontSize: bodyFontSize }}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

UniversalServiceLanding.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  heroHeadline: PropTypes.string,
  heroSubtext: PropTypes.string,
  heroPrimaryCta: PropTypes.string,
  heroSecondaryCta: PropTypes.string,
  heroImage: PropTypes.string,
  featuresTitle: PropTypes.string,
  featuresSubtitle: PropTypes.string,
  features: PropTypes.array,
  showcaseTitle: PropTypes.string,
  showcase: PropTypes.array,
  testimonialQuote: PropTypes.string,
  testimonialAuthor: PropTypes.string,
  testimonialRole: PropTypes.string,
  ctaHeadline: PropTypes.string,
  ctaSubtext: PropTypes.string,
  ctaButtonText: PropTypes.string,
  contactTitle: PropTypes.string,
  contactSubtitle: PropTypes.string,
  contactPhone: PropTypes.string,
  contactEmail: PropTypes.string,
  contactAddress: PropTypes.string,
  fontFamily: PropTypes.string,
  heroHeadingFontSize: PropTypes.string,
  sectionHeadingFontSize: PropTypes.string,
  bodyFontSize: PropTypes.string,
  sectionPaddingY: PropTypes.string,
  sectionPaddingX: PropTypes.string,
  accentColor: PropTypes.string,
  headingColor: PropTypes.string,
  textColor: PropTypes.string,
  heroBackgroundColor: PropTypes.string,
  featuresBackgroundColor: PropTypes.string,
  showcaseBackgroundColor: PropTypes.string,
  testimonialBackgroundColor: PropTypes.string,
  contactBackgroundColor: PropTypes.string,
  surfaceColor: PropTypes.string,
};

export default UniversalServiceLanding;