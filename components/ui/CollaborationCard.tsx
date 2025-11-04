import Image from "next/image";

interface CollaborationCardProps {
  logo: string;
  name: string;
  description: string;
  link?: string;
  caseStudy?: string;
}

export default function CollaborationCard({
  logo,
  name,
  description,
  link,
  caseStudy,
}: CollaborationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Logo */}
      <div className="h-48 bg-gradient-to-br from-gray-100 to-burgundy-50 flex items-center justify-center p-8">
        <div className="relative w-full h-full">
          <Image
            src={logo}
            alt={`${name} Logo`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-wine transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {caseStudy && (
          <div className="bg-burgundy-50 p-4 rounded-lg mb-4">
            <h4 className="text-sm font-semibold text-wine mb-2">Case Study</h4>
            <p className="text-sm text-gray-700">{caseStudy}</p>
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-wine hover:text-wine-dark font-semibold transition-colors"
          >
            Let's Collaborate
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
