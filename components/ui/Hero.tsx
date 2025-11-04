interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  imagePlaceholder?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  imagePlaceholder = true,
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      {imagePlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-wine to-burgundy-900 opacity-90">
          <div className="absolute inset-0 bg-black/20" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        {subtitle && (
          <p className="text-burgundy-300 text-sm sm:text-base font-medium tracking-wide uppercase mb-4 animate-slide-up">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up font-serif">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-slide-up">
          {description}
        </p>
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block bg-white text-wine px-8 py-4 rounded-full font-semibold text-lg hover:bg-burgundy-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 animate-slide-up"
          >
            {ctaText}
          </a>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
