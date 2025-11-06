import Hero from "@/components/ui/Hero";
import ContactForm from "@/components/ui/ContactForm";
import CollaborationCard from "@/components/ui/CollaborationCard";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Wine Industry Professional"
        title="Connecting Passion with Excellence"
        description="Building market connections for Italian wineries across Italy, USA, Canada, Europe, South America, Asia, and Australia. Bridging quality wine producers with global opportunities."
        ctaText="Work With Me"
        ctaLink="#contact"
      />

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                EXPERTISE & SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif leading-tight">
              Connecting Italian Wine Excellence
              <br />
              <span className="text-wine">With Global Markets</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With international experience across four continents, I bridge Italian wineries with distributors, importers, and retailers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white text-center p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-wine/20">
              <div className="w-20 h-20 bg-gradient-to-br from-wine to-burgundy-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-wine transition-colors">Global Market Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Direct connections to distributors and retailers across <strong>6 continents</strong>, including USA, Canada, Europe, Asia, South America, and Australia.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white text-center p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-wine/20">
              <div className="w-20 h-20 bg-gradient-to-br from-wine to-burgundy-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-wine transition-colors">Strategic Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">
                Building <strong>long-term relationships</strong> between Italian producers and qualified international buyers for sustainable growth.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white text-center p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-wine/20">
              <div className="w-20 h-20 bg-gradient-to-br from-wine to-burgundy-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-wine transition-colors">Complete Export Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>End-to-end support</strong> including market analysis, positioning strategy, logistics coordination, and documentation assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collaborations */}
      <section className="py-20 bg-white relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-50/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                TRUSTED PARTNERSHIPS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Featured Collaborations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Working with industry-leading organizations to bring Italian wine excellence to the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CollaborationCard
              logo="/images/velvet-global-logo.png"
              name="Velvet Global"
              description="Export office founded by the former CEO of Vivino Italy, specializing in Italian wine export to global markets."
              link="/#contact"
            />
            <CollaborationCard
              logo="/images/inomon-logo.png"
              name="Inomon"
              description="Curated selection of organic wine producers from all over Italy for the Japanese market."
              link="/#contact"
            />
          </div>
        </div>
      </section>

      {/* Wine Sourcing Section - For Buyers */}
      <section className="relative py-20 overflow-hidden">
        {/* Background - same as Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-wine to-burgundy-900 opacity-90">
          <div className="absolute inset-0 bg-black/20" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Headline */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                FOR PROFESSIONAL BUYERS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight">
              Source Premium Italian & French Wines
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Direct access to certified wineries offering competitive pricing and exceptional quality wines, perfectly suited for your market.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/95 backdrop-blur-sm text-center p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-white/20 hover:border-wine/50">
              <div className="w-20 h-20 bg-gradient-to-br from-wine to-burgundy-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-wine transition-colors">Curated Wine Portfolios</h3>
              <p className="text-gray-600 leading-relaxed">
                Handpicked selections tailored to your target market and customer preferences
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm text-center p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-white/20 hover:border-wine/50">
              <div className="w-20 h-20 bg-gradient-to-br from-wine to-burgundy-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-wine transition-colors">Competitive Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Direct winery relationships ensuring the best margins for your business
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm text-center p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-white/20 hover:border-wine/50">
              <div className="w-20 h-20 bg-gradient-to-br from-wine to-burgundy-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-wine transition-colors">Full-Service Support</h3>
              <p className="text-gray-600 leading-relaxed">
                From sourcing to logistics, we handle everything for a seamless experience
              </p>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-10 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-wine flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Private label development for your brand</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-wine flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Organic & sustainable wine options available</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-wine flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Certified wineries with proven quality standards</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-wine flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">Export documentation & logistics assistance</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-wine px-12 py-5 rounded-xl font-bold text-lg hover:bg-burgundy-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="mt-4 text-gray-200">
              Ready to explore premium wine sourcing? Let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-burgundy-50/20 via-transparent to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Let's Create Something
              <br />
              <span className="text-wine">Extraordinary Together</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're looking to expand into new markets or source premium Italian wines, I'm here to help you succeed.
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Me a Message</h3>
              <p className="text-gray-600">I typically respond within 24 hours</p>
            </div>
            <ContactForm />
          </div>

          {/* LinkedIn Link */}
          <div className="mt-8 text-center">
            <a
              href="https://www.linkedin.com/in/lorenzo-canaglia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-wine hover:text-burgundy-700 font-semibold transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
