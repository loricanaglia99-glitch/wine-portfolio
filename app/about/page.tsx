import Image from "next/image";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-wine to-burgundy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">About Me</h1>
            <p className="text-xl md:text-2xl text-burgundy-100 max-w-3xl mx-auto">
              A journey through wine, culture, and passion across three continents
            </p>
          </div>
        </div>
      </section>

      {/* Main Photo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Photo - Orange Background Event */}
          <div className="relative h-[500px] rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/images/lorenzo-event.jpg"
              alt="Lorenzo Canaglia - Wine Professional"
              fill
              className="object-contain bg-gray-50"
              priority
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">My Journey</h2>
            <p className="text-xl text-gray-600">
              From Italian vineyards to global wine markets
            </p>
          </div>

          <div className="space-y-12">
            {/* High School - The Beginning */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="inline-block bg-wine text-white px-4 py-2 rounded-full font-bold text-lg">
                  🎓 High School
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed">
                  My journey in the world of wine began in high school, where I discovered my passion for
                  viticulture and enology. Fascinated by the complexity of the vine and the art of winemaking,
                  I knew I wanted to turn this passion into a professional career. This early foundation sparked
                  a lifelong commitment to understanding and sharing the world of wine.
                </p>
              </div>
            </div>

            {/* Franciacorta - Marketing & Business */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="inline-block bg-wine text-white px-4 py-2 rounded-full font-bold text-lg">
                  🇮🇹 Franciacorta
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wine Marketing & Business</h3>
                <p className="text-gray-600 leading-relaxed">
                  I expanded my knowledge in wine marketing and business in Franciacorta, learning how tradition
                  meets strategy in one of Italy's most prestigious sparkling wine regions. This experience taught
                  me the importance of communicating the value of wine to the world and understanding the business
                  side of the industry.
                </p>
              </div>
            </div>

            {/* Napa Valley */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="inline-block bg-wine text-white px-4 py-2 rounded-full font-bold text-lg">
                  🇺🇸 Napa Valley
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">V.Sattui Winery & WSET Level 3</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To broaden my horizons, I spent a year in Napa Valley working for V.Sattui Winery and earning
                  my WSET Level 3 certification. Living in California gave me deep insight into both US and
                  international wine markets.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This immersion in one of the world's most renowned wine regions taught me about the American
                  approach to winemaking and the dynamics of global wine commerce.
                </p>
              </div>
            </div>

            {/* Alsace - Biodynamic Practices */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="inline-block bg-wine text-white px-4 py-2 rounded-full font-bold text-lg">
                  🇫🇷 Alsace
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Marcel Deiss - Biodynamic Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  I enriched my experience during the harvest in Alsace with Marcel Deiss, learning biodynamic
                  practices and terroir-driven winemaking. This experience opened my eyes to sustainable viticulture
                  and the profound connection between land, vine, and wine.
                </p>
              </div>
            </div>

            {/* Yarra Valley - Australia */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="inline-block bg-wine text-white px-4 py-2 rounded-full font-bold text-lg">
                  🇦🇺 Yarra Valley
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Re'em Estate - DTC Sales Supervisor</h3>
                <p className="text-gray-600 leading-relaxed">
                  In Yarra Valley with Re'em Estate, I supervised direct-to-consumer sales in the cellar door,
                  managing customer experiences and sales operations. The Australian wine industry's innovative
                  spirit, customer-focused approach, and export expertise would later influence my approach to
                  international wine markets.
                </p>
              </div>
            </div>

            {/* Vintrail Pro - Wine Tech */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="inline-block bg-wine text-white px-4 py-2 rounded-full font-bold text-lg">
                  💻 Wine Tech
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vintrail Pro - Digital Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  I entered the tech side of the wine industry, helping launch the Italian market for Vintrail Pro,
                  a winery software company based in Bordeaux, France, guided by the former VP of Vivino. Here, I
                  combined wine knowledge with business strategy and digital solutions, bridging tradition and innovation.
                </p>
              </div>
            </div>

            {/* Velvet Global - Current */}
            <div className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="inline-block bg-wine text-white px-4 py-2 rounded-full font-bold text-lg">
                  🌍 Today
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Velvet Global - Italian Wine Export</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Today, I focus fully on the export of Italian wine, working with Velvet Global, founded by Mauro,
                  former CEO of Vivino Italy until 2021.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My mission is to connect Italian wineries with the world, helping them reach new markets while
                  preserving their passion and authenticity. I leverage my international experience across Italy,
                  France, US, and Australia to create meaningful connections and drive business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-burgundy-50 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To connect Italian wineries with the world, helping them reach new markets while
                preserving their passion and authenticity. I bridge tradition with innovation,
                combining deep wine knowledge with business strategy and digital solutions to
                empower producers in the global marketplace.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-burgundy-50 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the leading bridge between Italian wine excellence and global markets,
                leveraging my international experience across four countries (Italy, France, US,
                Australia) to create meaningful connections. I envision a world where Italian
                wineries thrive internationally while maintaining their authentic identity and
                passion for quality winemaking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">Gallery</h2>
            <p className="text-xl text-gray-600">
              Moments from my journey in the wine industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/images/lorenzo-headshot.jpg"
                alt="Lorenzo Canaglia - Wine Tasting"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/images/lorenzo-harvest.jpg"
                alt="Lorenzo Canaglia - Harvest Experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/images/lorenzo australia .jpeg"
                alt="Lorenzo Canaglia - Australia Experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-wine to-burgundy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-xl text-burgundy-100 mb-8">
            Whether you're a winery looking to expand or a wine professional seeking guidance,
            I'm here to help you achieve your goals.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-white text-wine px-8 py-4 rounded-full font-semibold text-lg hover:bg-burgundy-50 transition-all duration-200 shadow-xl hover:shadow-2xl"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
