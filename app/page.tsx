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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              What I Do & Who I Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With experience spanning multiple continents, I create market connections for Italian wineries,
              opening doors to distributors, importers, and retailers across Italy, USA, Canada, Europe, South America, Asia, and Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center p-8 rounded-lg hover:bg-burgundy-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Market Access</h3>
              <p className="text-gray-600">
                Opening doors to distributors, importers, and retailers across Italy, USA, Canada, Europe, South America, Asia, and Australia.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-8 rounded-lg hover:bg-burgundy-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">B2B Partnerships</h3>
              <p className="text-gray-600">
                Connecting Italian wine producers with qualified buyers and building long-term business relationships.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-8 rounded-lg hover:bg-burgundy-50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Export Strategy</h3>
              <p className="text-gray-600">
                Market analysis, positioning strategy, and export logistics for Italian wineries entering new markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collaborations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              Featured Collaborations
            </h2>
            <p className="text-xl text-gray-600">
              Proud partnerships with exceptional wineries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
      <section className="py-20 bg-gradient-to-br from-wine to-burgundy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Need Help Sourcing Wine?
            </h2>
            <p className="text-xl md:text-2xl text-burgundy-100 mb-4">
              Looking for trusted partners in Italy & France?
            </p>
            <p className="text-lg text-burgundy-50 max-w-3xl mx-auto leading-relaxed">
              I connect professional buyers with certified wineries offering competitive, high-quality wines — ready for your market.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-burgundy-100 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-white font-semibold mb-1">Tailored Wine Portfolios</h3>
                  <p className="text-burgundy-100 text-sm">Curated selections matching your market needs</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-burgundy-100 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-white font-semibold mb-1">Private Label Development</h3>
                  <p className="text-burgundy-100 text-sm">Custom wine programs for your brand</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-burgundy-100 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-white font-semibold mb-1">End-to-End Support</h3>
                  <p className="text-burgundy-100 text-sm">From selection to shipment guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-wine px-12 py-5 rounded-lg font-bold text-xl hover:bg-burgundy-50 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 text-center">
            <p className="text-burgundy-100 text-sm">
              📬 Contact me to explore current opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600">
              Ready to take your wine business to the next level? Get in touch.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <ContactForm />
          </div>

          {/* LinkedIn */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Or connect with me on</p>
            <a
              href="https://www.linkedin.com/in/lorenzo-canaglia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#006399] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
