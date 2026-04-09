import React, { useState } from "react";
import { Brain, Users, Compass, Heart, Globe, Zap } from "lucide-react";
import BioCognitiveTranslator from "./Components/Bio-cognitive-translator";
import TeacherGallery from "./Components/TeacherGallery";
import ConceptExplorer from "./Components/ConceptExplorer";
import CulturalWisdom from "./Components/CulturalWisdom";
import FavoritesManager from "./Components/FavoritesManager";

const tabs = [
  { id: "translator", label: "Translator", icon: Brain, shortLabel: "Translate" },
  { id: "gallery", label: "Teacher Gallery", icon: Users, shortLabel: "Teachers" },
  { id: "explorer", label: "Concept Explorer", icon: Compass, shortLabel: "Explore" },
  { id: "cultural", label: "Cultural Wisdom", icon: Globe, shortLabel: "Cultural" },
  { id: "favorites", label: "Saved Lessons", icon: Heart, shortLabel: "Saved" },
];

const App = () => {
  const [activeTab, setActiveTab] = useState("translator");

  const handleSelectTeacher = (teacher) => {
    setActiveTab("translator");
  };

  const handleSelectConcept = (conceptKey) => {
    setActiveTab("translator");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Top navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10 no-print" role="navigation" aria-label="Main navigation">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <span className="text-xl" role="img" aria-label="nature">🌱</span>
              <span className="font-bold text-gray-800 hidden sm:inline">Bio-Cognitive Tools</span>
            </div>

            <div className="flex" role="tablist" aria-label="Application sections">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 text-sm font-medium border-b-2 transition-all ${
                      isActive
                        ? "border-purple-600 text-purple-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-5xl mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <div
            id="panel-translator"
            role="tabpanel"
            aria-labelledby="translator"
            hidden={activeTab !== "translator"}
          >
            {activeTab === "translator" && <BioCognitiveTranslator />}
          </div>

          <div
            id="panel-gallery"
            role="tabpanel"
            aria-labelledby="gallery"
            hidden={activeTab !== "gallery"}
          >
            {activeTab === "gallery" && (
              <TeacherGallery onSelectTeacher={handleSelectTeacher} />
            )}
          </div>

          <div
            id="panel-explorer"
            role="tabpanel"
            aria-labelledby="explorer"
            hidden={activeTab !== "explorer"}
          >
            {activeTab === "explorer" && (
              <ConceptExplorer onSelectConcept={handleSelectConcept} />
            )}
          </div>

          <div
            id="panel-cultural"
            role="tabpanel"
            aria-labelledby="cultural"
            hidden={activeTab !== "cultural"}
          >
            {activeTab === "cultural" && (
              <CulturalWisdom onSelectConcept={handleSelectConcept} />
            )}
          </div>

          <div
            id="panel-favorites"
            role="tabpanel"
            aria-labelledby="favorites"
            hidden={activeTab !== "favorites"}
          >
            {activeTab === "favorites" && <FavoritesManager />}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-sm text-gray-400 no-print">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Zap className="w-3 h-3" aria-hidden="true" />
            <span>Offline-First</span>
          </div>
          <p>
            Bio-Cognitive Learning Engine - Nature-Inspired Education -
            Animals, Plants, Crystals, Energy, Plasma, and Cultural Wisdom
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
