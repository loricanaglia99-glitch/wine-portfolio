interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  status?: "completed" | "ongoing" | "upcoming";
  icon?: string;
}

export default function ProjectCard({
  title,
  date,
  description,
  status = "completed",
  icon,
}: ProjectCardProps) {
  const statusColors = {
    completed: "bg-green-100 text-green-800",
    ongoing: "bg-blue-100 text-blue-800",
    upcoming: "bg-purple-100 text-purple-800",
  };

  const statusLabels = {
    completed: "Completed",
    ongoing: "Ongoing",
    upcoming: "Upcoming",
  };

  return (
    <div className="relative pl-8 pb-12 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-burgundy-200 group-last:bg-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-wine border-4 border-white transform -translate-x-[7px] shadow-lg" />

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 ml-4 border border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {icon && (
                <div className="w-10 h-10 bg-burgundy-50 rounded-lg flex items-center justify-center text-wine">
                  {icon}
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}
          >
            {statusLabels[status]}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
