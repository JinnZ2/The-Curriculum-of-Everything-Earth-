import React, { useState, useMemo } from "react";
import { Globe, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { natureTeachers, ageGroups } from "./AnimalTeachers";

const cultureColors = {
  "Polynesian": { bg: "bg-cyan-50", border: "border-cyan-300", accent: "text-cyan-700", badge: "bg-cyan-100" },
  "Aboriginal Australian": { bg: "bg-orange-50", border: "border-orange-300", accent: "text-orange-700", badge: "bg-orange-100" },
  "Persian": { bg: "bg-rose-50", border: "border-rose-300", accent: "text-rose-700", badge: "bg-rose-100" },
  "Sami": { bg: "bg-indigo-50", border: "border-indigo-300", accent: "text-indigo-700", badge: "bg-indigo-100" },
  "Indigenous Worldwide": { bg: "bg-amber-50", border: "border-amber-300", accent: "text-amber-700", badge: "bg-amber-100" },
  "Ubuntu (Southern African)": { bg: "bg-yellow-50", border: "border-yellow-300", accent: "text-yellow-700", badge: "bg-yellow-100" },
  "Maori (Aotearoa/New Zealand)": { bg: "bg-teal-50", border: "border-teal-300", accent: "text-teal-700", badge: "bg-teal-100" },
  "Inuit": { bg: "bg-sky-50", border: "border-sky-300", accent: "text-sky-700", badge: "bg-sky-100" },
};

const CulturalWisdom = ({ onSelectConcept }) => {
  const [selectedAge, setSelectedAge] = useState("elementary");
  const [expandedTeacher, setExpandedTeacher] = useState(null);

  const culturalTeachers = useMemo(() => {
    return Object.entries(natureTeachers)
      .filter(([, t]) => t.teacher_type === "cultural")
      .map(([key, t]) => ({ key, ...t }));
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Globe className="w-7 h-7 text-rose-500" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-gray-800">Cultural Wisdom Teachers</h2>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Indigenous and traditional knowledge systems from around the world -
          each culture offers unique scientific insights developed over thousands of years.
        </p>
      </div>

      {/* Age group selector */}
      <div className="flex justify-center gap-2" role="group" aria-label="Select age group">
        {Object.entries(ageGroups).map(([key, info]) => (
          <button
            key={key}
            onClick={() => setSelectedAge(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedAge === key
                ? "bg-rose-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {info.emoji} {info.label} ({info.range})
          </button>
        ))}
      </div>

      {/* Cultural teacher cards */}
      <div className="space-y-4">
        {culturalTeachers.map((teacher) => {
          const colors = cultureColors[teacher.culture] || cultureColors["Indigenous Worldwide"];
          const isExpanded = expandedTeacher === teacher.key;

          return (
            <div
              key={teacher.key}
              className={`${colors.bg} border-2 ${colors.border} rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md`}
              role="article"
              aria-label={`${teacher.name} - ${teacher.culture} wisdom`}
            >
              {/* Card header - always visible */}
              <button
                onClick={() => setExpandedTeacher(isExpanded ? null : teacher.key)}
                className="w-full p-5 text-left"
                aria-expanded={isExpanded}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl flex-shrink-0" role="img" aria-label={teacher.name}>
                    {teacher.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors.badge} ${colors.accent}`}>
                        {teacher.culture}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {teacher.story_templates[selectedAge]}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {teacher.teaches.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 bg-white bg-opacity-70 rounded-full text-xs text-gray-500 border border-gray-200"
                        >
                          {topic.replace(/_/g, " ")}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-400 flex-shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="px-5 pb-5 space-y-4 border-t border-opacity-50 pt-4" style={{ borderColor: "inherit" }}>
                  {/* Activity */}
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-1">
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      Hands-On Activity ({ageGroups[selectedAge].label})
                    </h4>
                    <p className="text-gray-600">{teacher.activities[selectedAge]}</p>
                  </div>

                  {/* Wow fact */}
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <h4 className="font-semibold text-purple-700 mb-2">
                      Mind-Blowing Fact
                    </h4>
                    <p className="text-gray-600">{teacher.wow_facts[selectedAge]}</p>
                  </div>

                  {/* Generate lesson button */}
                  {onSelectConcept && (
                    <button
                      onClick={() => onSelectConcept(teacher.teaches[0])}
                      className="px-4 py-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-rose-600 hover:to-purple-600 transition-all"
                    >
                      Generate Full Lesson
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* World map footer */}
      <div className="bg-gray-50 rounded-xl p-5 text-center">
        <p className="text-sm text-gray-500">
          Representing wisdom traditions from the Pacific Islands, Australia, Persia,
          Arctic Scandinavia, Africa, Aotearoa/New Zealand, the Arctic, and indigenous
          fire keepers worldwide. Each tradition offers scientifically verified knowledge
          systems developed over thousands of years.
        </p>
      </div>
    </div>
  );
};

export default CulturalWisdom;
