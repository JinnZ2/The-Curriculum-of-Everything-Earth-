import React, { useState, useMemo } from "react";
import { conceptDatabase, categoryInfo, natureTeachers } from "./AnimalTeachers";
import { findBestTeacherMatch } from "./HelperFunctions";

const difficultyLabel = (score) => {
  if (score <= 4) return { text: "Beginner", color: "bg-green-100 text-green-700" };
  if (score <= 6) return { text: "Intermediate", color: "bg-yellow-100 text-yellow-700" };
  if (score <= 8) return { text: "Advanced", color: "bg-orange-100 text-orange-700" };
  return { text: "Expert", color: "bg-red-100 text-red-700" };
};

const difficultyBar = (score) => {
  const bars = [];
  for (let i = 1; i <= 10; i++) {
    bars.push(
      <div
        key={i}
        className={`h-2 w-full rounded-full ${i <= score ? "bg-blue-500" : "bg-gray-200"}`}
      />
    );
  }
  return bars;
};

const ConceptExplorer = ({ onSelectConcept }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedConcept, setExpandedConcept] = useState(null);

  const categories = useMemo(() => {
    const grouped = {};
    for (const [concept, data] of Object.entries(conceptDatabase)) {
      const cat = data.category;
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push({ key: concept, ...data });
    }
    return grouped;
  }, []);

  const visibleCategories = selectedCategory
    ? { [selectedCategory]: categories[selectedCategory] }
    : categories;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Concept Explorer</h2>
        <p className="text-gray-500">
          Discover {Object.keys(conceptDatabase).length} scientific concepts organized by category
        </p>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label="Filter by category">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            !selectedCategory
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All Categories
        </button>
        {Object.entries(categoryInfo).map(([key, info]) => {
          if (!categories[key]) return null;
          return (
            <button
              key={key}
              onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === key
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {info.emoji} {info.label} ({categories[key].length})
            </button>
          );
        })}
      </div>

      {/* Category sections */}
      {Object.entries(visibleCategories).map(([catKey, concepts]) => {
        const info = categoryInfo[catKey] || { label: catKey, emoji: "📚" };
        return (
          <div key={catKey} className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-white px-5 py-3 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-700">
                {info.emoji} {info.label}
              </h3>
            </div>
            <div className="divide-y divide-gray-50">
              {concepts.map((concept) => {
                const diff = difficultyLabel(concept.difficulty);
                const isExpanded = expandedConcept === concept.key;
                const teacher = findBestTeacherMatch(concept.key);

                return (
                  <div key={concept.key} className="px-5 py-4">
                    <button
                      onClick={() => setExpandedConcept(isExpanded ? null : concept.key)}
                      className="w-full text-left"
                      aria-expanded={isExpanded}
                      aria-label={`${concept.key} - ${diff.text} difficulty`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{teacher.emoji}</span>
                          <div>
                            <h4 className="font-semibold text-gray-800 capitalize">
                              {concept.key.replace(/_/g, " ")}
                            </h4>
                            <p className="text-xs text-gray-400">
                              Taught by {teacher.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${diff.color}`}>
                            {diff.text}
                          </span>
                          <span className="text-gray-300 text-lg">{isExpanded ? "−" : "+"}</span>
                        </div>
                      </div>

                      {/* Difficulty bar */}
                      <div className="flex gap-0.5 mt-2 max-w-xs">
                        {difficultyBar(concept.difficulty)}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="mt-4 pl-11 space-y-3 animate-in">
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Key Concepts:</p>
                          <div className="flex flex-wrap gap-1">
                            {concept.keywords.map((kw) => (
                              <span
                                key={kw}
                                className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs"
                              >
                                {kw.replace(/_/g, " ")}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Preview (Elementary):</p>
                          <p className="text-sm text-gray-600 italic">
                            "{teacher.story_templates.elementary}"
                          </p>
                        </div>

                        {onSelectConcept && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectConcept(concept.key);
                            }}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all"
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
          </div>
        );
      })}
    </div>
  );
};

export default ConceptExplorer;
