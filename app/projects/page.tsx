import Link from "next/link";

export default function Projects() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-wine to-burgundy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Projects</h1>
            <p className="text-xl md:text-2xl text-burgundy-100 max-w-3xl mx-auto">
              Portfolio of initiatives, partnerships, and achievements
            </p>
          </div>
        </div>
      </section>

      {/* Private Content Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-12 text-center border border-gray-100">
            {/* Lock Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-burgundy-50 rounded-full mb-8">
              <svg
                className="w-12 h-12 text-wine"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
              Private Portfolio
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              My project portfolio includes confidential client work, strategic partnerships, and ongoing initiatives in the wine export industry. To maintain privacy and protect business relationships, detailed project information is shared upon request.
            </p>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-wine text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-wine-dark transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contact Me to Learn More
            </Link>

            {/* Additional Info */}
            <p className="text-sm text-gray-500 mt-8">
              I'd be happy to discuss my experience and share relevant case studies during our conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Key areas where I can help your wine business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                title: "Market Entry Strategy",
                desc: "Comprehensive market analysis and strategic planning for entering new international markets"
              },
              {
                icon: "🤝",
                title: "B2B Partnerships",
                desc: "Connecting Italian wineries with qualified distributors, importers, and retailers globally"
              },
              {
                icon: "📊",
                title: "Export Management",
                desc: "End-to-end export logistics, compliance, and documentation for international wine trade"
              },
              {
                icon: "🍷",
                title: "Brand Positioning",
                desc: "Strategic positioning and storytelling to differentiate your wines in competitive markets"
              },
              {
                icon: "🌍",
                title: "Multi-Market Experience",
                desc: "Hands-on experience across Italy, USA, Europe, Asia, and Australia markets"
              },
              {
                icon: "💼",
                title: "Business Development",
                desc: "Creating sustainable growth strategies and long-term partnerships for wine producers"
              },
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-burgundy-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-burgundy-100"
              >
                <div className="text-5xl mb-4">{expertise.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{expertise.title}</h3>
                <p className="text-gray-600 leading-relaxed">{expertise.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-wine to-burgundy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Let's Discuss Your Wine Export Goals
          </h2>
          <p className="text-xl text-burgundy-100 mb-8">
            Whether you're launching in a new market or expanding your distribution network,
            I'm here to help make it happen.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-white text-wine px-8 py-4 rounded-full font-semibold text-lg hover:bg-burgundy-50 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
