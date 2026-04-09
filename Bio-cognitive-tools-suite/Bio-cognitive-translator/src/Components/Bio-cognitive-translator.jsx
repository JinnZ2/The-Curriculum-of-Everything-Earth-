import React, { useState } from "react";
import { Brain, Zap, Database, Sparkles, BookOpen, Play, Heart } from "lucide-react";
import { conceptDatabase, natureTeachers, ageGroups, contextTips } from "./AnimalTeachers";
import { findBestTeacherMatch, extractMaterials, saveFavorite } from "./HelperFunctions";
import PrintableLesson from "./PrintableLesson";

const BioCognitiveTranslator = () => {
  const [concept, setConcept] = useState("");
  const [ageGroup, setAgeGroup] = useState("elementary");
  const [context, setContext] = useState("classroom");
  const [translation, setTranslation] = useState(null);
  const [saved, setSaved] = useState(false);

  const translateConcept = () => {
    const conceptData = conceptDatabase[concept.toLowerCase()];
    if (!conceptData) {
      setTranslation({ error: "Concept not found in database" });
      return;
    }

    const natureTeacher = findBestTeacherMatch(concept);
    const ctxInfo = contextTips[context];

    setSaved(false);
    setTranslation({
      original_concept: concept,
      difficulty_score: conceptData.difficulty,
      category: conceptData.category,
      teacher: natureTeacher,
      ageGroup,
      explanation: {
        story: natureTeacher.story_templates[ageGroup],
        keywords: conceptData.keywords.join(", "),
      },
      activity: {
        main_activity: natureTeacher.activities[ageGroup],
        materials_needed: extractMaterials(natureTeacher.activities[ageGroup]),
      },
      contextTip: ctxInfo?.tip || null,
      wow_fact: natureTeacher.wow_facts[ageGroup],
      offline_ready: true,
    });
  };

  const handleSave = () => {
    if (translation && !translation.error) {
      saveFavorite(translation);
      setSaved(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Brain className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Bio-Cognitive Concept Translator
          </h1>
          <Database className="w-6 h-6 text-green-600" aria-hidden="true" />
        </div>
        <p className="text-gray-600 text-lg">
          Transform any scientific concept into an engaging nature teacher lesson
        </p>
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mt-2">
          <Zap className="w-4 h-4" aria-hidden="true" />
          Offline Ready - Works Anywhere!
        </div>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="concept-select" className="block text-sm font-medium mb-2 text-purple-700">
            Scientific Concept
          </label>
          <select
            id="concept-select"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            className="w-full p-3 border-2 border-purple-200 rounded-lg focus:border-purple-400 focus:outline-none"
          >
            <option value="">Choose concept to translate...</option>
            {Object.keys(conceptDatabase).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="age-select" className="block text-sm font-medium mb-2 text-blue-700">
            Age Group
          </label>
          <select
            id="age-select"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full p-3 border-2 border-blue-200 rounded-lg focus:border-blue-400 focus:outline-none"
          >
            {Object.entries(ageGroups).map(([key, info]) => (
              <option key={key} value={key}>
                {info.emoji} {info.label} ({info.range})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="context-select" className="block text-sm font-medium mb-2 text-green-700">
            Learning Context
          </label>
          <select
            id="context-select"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="w-full p-3 border-2 border-green-200 rounded-lg focus:border-green-400 focus:outline-none"
          >
            {Object.entries(contextTips).map(([key, info]) => (
              <option key={key} value={key}>
                {info.emoji} {info.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={translateConcept}
        disabled={!concept}
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-[1.02] transition-all duration-200"
        aria-label="Generate bio-cognitive lesson"
      >
        <Sparkles className="w-6 h-6" aria-hidden="true" />
        Generate Bio-Cognitive Lesson!
      </button>

      {/* Translation output */}
      {translation && !translation.error && (
        <div className="space-y-6" role="region" aria-label="Generated lesson">
          {/* Teacher introduction */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-orange-300 rounded-xl p-6 text-center">
            <h2 className="text-3xl font-bold text-orange-800 mb-2">
              Meet Your Nature Teacher!
            </h2>
            <div className="text-6xl mb-4" role="img" aria-label={translation.teacher.name}>
              {translation.teacher.emoji}
            </div>
            <h3 className="text-2xl font-semibold text-orange-700 mb-2">
              {translation.teacher.name}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
              <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border-2 border-orange-200 text-sm font-medium text-orange-700 capitalize">
                {translation.teacher.teacher_type} teacher
              </span>
              <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full border-2 border-orange-200 text-sm font-medium text-orange-700">
                Teaches: {translation.teacher.teaches.join(", ").replace(/_/g, " ")}
              </span>
            </div>

            {/* Save / Print actions */}
            <div className="flex items-center justify-center gap-3 mt-4 no-print">
              <button
                onClick={handleSave}
                disabled={saved}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  saved
                    ? "bg-pink-100 text-pink-600 cursor-default"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-pink-600"
                }`}
                aria-label={saved ? "Lesson saved" : "Save this lesson"}
              >
                <Heart className={`w-4 h-4 ${saved ? "fill-pink-500 text-pink-500" : ""}`} />
                {saved ? "Saved!" : "Save Lesson"}
              </button>
              <PrintableLesson translation={translation} ageGroup={ageGroup} context={context} />
            </div>
          </div>

          {/* Story section */}
          <div className="bg-blue-50 border-4 border-blue-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6" aria-hidden="true" />
              The Bio-Cognitive Story
            </h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Nature Teacher Explanation:</h4>
                <p className="text-lg text-blue-600">{translation.explanation.story}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-2">Key Concepts:</h4>
                <div className="flex flex-wrap gap-1">
                  {translation.explanation.keywords.split(", ").map((kw) => (
                    <span key={kw} className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {kw.replace(/_/g, " ")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Activity section */}
          <div className="bg-green-50 border-4 border-green-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <Play className="w-6 h-6" aria-hidden="true" />
              Hands-On Activity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">Activity:</h4>
                <p className="text-green-600">{translation.activity.main_activity}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-green-200">
                <h4 className="font-semibold text-green-700 mb-2">Materials Needed:</h4>
                <ul className="space-y-1" role="list">
                  {translation.activity.materials_needed.map((material, idx) => (
                    <li key={idx} className="text-green-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" aria-hidden="true"></span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Context-specific teaching tip */}
            {translation.contextTip && (
              <div className="mt-4 bg-white p-4 rounded-lg border-2 border-green-200">
                <h4 className="font-semibold text-green-700 mb-1">
                  {contextTips[context]?.emoji} Teaching Tip ({contextTips[context]?.label}):
                </h4>
                <p className="text-green-600 italic">{translation.contextTip}</p>
              </div>
            )}
          </div>

          {/* Wow fact section */}
          <div className="bg-purple-50 border-4 border-purple-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
              Mind-Blowing Fact!
            </h3>
            <div className="bg-white p-4 rounded-lg border-2 border-purple-200">
              <p className="text-lg text-purple-600">{translation.wow_fact}</p>
            </div>
          </div>

          {/* Metadata footer */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 text-center no-print">
            <p className="text-sm text-gray-600">
              Offline Ready - Category: {translation.category} - Difficulty: {translation.difficulty_score}/10
            </p>
          </div>
        </div>
      )}

      {/* Error state */}
      {translation && translation.error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center" role="alert">
          <p className="text-red-600">{translation.error}</p>
        </div>
      )}
    </div>
  );
};

export default BioCognitiveTranslator;
