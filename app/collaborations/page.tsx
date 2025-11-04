import CollaborationCard from "@/components/ui/CollaborationCard";

export default function Collaborations() {
  const collaborations = [
    {
      id: 1,
      logo: "Tuscan Heritage Logo",
      name: "Tuscan Heritage Wines",
      description: "A prestigious Tuscan winery with 200 years of wine-making tradition, specializing in Chianti Classico and Super Tuscans.",
      caseStudy: "Developed comprehensive market entry strategy for Australia, resulting in 45% increase in export sales and partnerships with 12 premium distributors across Sydney, Melbourne, and Perth.",
      link: "https://example.com",
    },
    {
      id: 2,
      logo: "Napa Valley Estates Logo",
      name: "Napa Valley Estates",
      description: "Boutique winery producing premium Cabernet Sauvignon and Chardonnay in the heart of Napa Valley.",
      caseStudy: "Led European market expansion, successfully launching in Italy, France, and UK. Created brand positioning strategy emphasizing California craftsmanship with European appeal.",
      link: "https://example.com",
    },
    {
      id: 3,
      logo: "Australian Wine Co Logo",
      name: "Southern Cross Vineyards",
      description: "Award-winning Australian winery known for innovative Shiraz blends and sustainable practices.",
      caseStudy: "Facilitated entry into US market through strategic partnerships with specialty wine retailers and high-end restaurants. Achieved presence in 8 states within first year.",
      link: "https://example.com",
    },
    {
      id: 4,
      logo: "Piedmont Excellence Logo",
      name: "Piedmont Excellence",
      description: "Family-owned estate producing exceptional Barolo and Barbaresco wines from historic vineyards.",
      caseStudy: "Implemented digital marketing strategy and e-commerce platform, increasing direct-to-consumer sales by 120% and expanding global reach to 15 new markets.",
      link: "https://example.com",
    },
    {
      id: 5,
      logo: "Sonoma Valley Logo",
      name: "Sonoma Valley Organic Wines",
      description: "Certified organic and biodynamic winery committed to sustainable viticulture and exceptional Pinot Noir.",
      caseStudy: "Developed sustainability-focused brand story and connected with eco-conscious distributors in Europe, resulting in partnerships with premium organic retailers.",
      link: "https://example.com",
    },
    {
      id: 6,
      logo: "Adelaide Hills Logo",
      name: "Adelaide Hills Premium",
      description: "Cool-climate specialist producing world-class Chardonnay and Sauvignon Blanc.",
      caseStudy: "Created luxury market positioning strategy for Asian markets, securing listings in high-end hotels and restaurants across Singapore, Hong Kong, and Tokyo.",
      link: "https://example.com",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-wine to-burgundy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Collaborations</h1>
            <p className="text-xl md:text-2xl text-burgundy-100 max-w-3xl mx-auto">
              Proud partnerships with exceptional wineries across three continents
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-wine mb-2">50+</div>
              <div className="text-gray-600">Wineries Consulted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wine mb-2">3</div>
              <div className="text-gray-600">Continents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wine mb-2">25+</div>
              <div className="text-gray-600">Markets Entered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wine mb-2">$10M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collaboration) => (
              <CollaborationCard
                key={collaboration.id}
                logo={collaboration.logo}
                name={collaboration.name}
                description={collaboration.description}
                caseStudy={collaboration.caseStudy}
                link={collaboration.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              What Partners Say
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from winery owners and industry professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-burgundy-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-wine" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Working with this professional transformed our approach to international markets.
                The results exceeded our expectations."
              </p>
              <p className="text-sm font-semibold text-gray-900">Marco Rossi</p>
              <p className="text-sm text-gray-600">Owner, Tuscan Heritage Wines</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-burgundy-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-wine" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The expertise in both European and American markets was invaluable.
                A true professional who delivers results."
              </p>
              <p className="text-sm font-semibold text-gray-900">Sarah Thompson</p>
              <p className="text-sm text-gray-600">Director, Napa Valley Estates</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-burgundy-50 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-wine" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Strategic insights and personal connections opened doors we couldn't have accessed on our own. Highly recommended."
              </p>
              <p className="text-sm font-semibold text-gray-900">James Mitchell</p>
              <p className="text-sm text-gray-600">CEO, Southern Cross Vineyards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-wine to-burgundy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-burgundy-100 mb-8">
            Let's discuss how we can help your winery reach new markets and achieve your goals.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-wine px-8 py-4 rounded-full font-semibold text-lg hover:bg-burgundy-50 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
