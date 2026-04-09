import React from "react";

const typeColors = {
  animal: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700", badge: "bg-amber-100" },
  plant: { bg: "bg-green-50", border: "border-green-300", text: "text-green-700", badge: "bg-green-100" },
  crystal: { bg: "bg-purple-50", border: "border-purple-300", text: "text-purple-700", badge: "bg-purple-100" },
  plasma: { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-700", badge: "bg-blue-100" },
  energy: { bg: "bg-cyan-50", border: "border-cyan-300", text: "text-cyan-700", badge: "bg-cyan-100" },
  cultural: { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-700", badge: "bg-rose-100" },
};

const TeacherCard = ({ teacher, onClick, compact = false, selected = false }) => {
  const colors = typeColors[teacher.teacher_type] || typeColors.animal;

  if (compact) {
    return (
      <button
        onClick={onClick}
        aria-label={`Select ${teacher.name}`}
        className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-200 w-full text-left
          ${selected ? "ring-2 ring-blue-400 border-blue-400 bg-blue-50" : `${colors.bg} ${colors.border} hover:shadow-md hover:scale-[1.02]`}`}
      >
        <span className="text-3xl" role="img" aria-label={teacher.name}>
          {teacher.emoji}
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-gray-800 truncate">{teacher.name}</p>
          <p className="text-xs text-gray-500 capitalize">{teacher.teacher_type} teacher</p>
        </div>
      </button>
    );
  }

  return (
    <div
      className={`${colors.bg} border-2 ${colors.border} rounded-xl p-5 transition-all duration-200 hover:shadow-lg`}
      role="article"
      aria-label={`${teacher.name} - ${teacher.teacher_type} teacher`}
    >
      <div className="text-center mb-3">
        <span className="text-5xl block mb-2" role="img" aria-label={teacher.name}>
          {teacher.emoji}
        </span>
        <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
        <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-medium ${colors.badge} ${colors.text} capitalize`}>
          {teacher.teacher_type} teacher
        </span>
      </div>

      <div className="mt-3">
        <p className="text-sm font-medium text-gray-600 mb-1">Teaches:</p>
        <div className="flex flex-wrap gap-1">
          {teacher.teaches.map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 bg-white rounded-full text-xs text-gray-600 border border-gray-200"
            >
              {topic.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      </div>

      {onClick && (
        <button
          onClick={onClick}
          className={`mt-4 w-full py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all`}
          aria-label={`Start lesson with ${teacher.name}`}
        >
          Start Lesson
        </button>
      )}
    </div>
  );
};

export default TeacherCard;
