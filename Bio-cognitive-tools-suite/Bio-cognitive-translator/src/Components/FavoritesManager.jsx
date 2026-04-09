import React, { useState, useEffect } from "react";
import { Heart, Trash2, BookOpen, Clock } from "lucide-react";
import { getFavorites, removeFavorite } from "./HelperFunctions";
import { ageGroups } from "./AnimalTeachers";

const FavoritesManager = ({ onViewLesson }) => {
  const [favorites, setFavorites] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id) => {
    const updated = removeFavorite(id);
    setFavorites(updated);
  };

  if (favorites.length === 0) {
    return (
      <div className="text-center py-16">
        <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-400 mb-2">No Saved Lessons Yet</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Generate a lesson from the Translator tab and click the heart icon to save it here for quick access later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Saved Lessons</h2>
        <p className="text-gray-500">
          {favorites.length} saved lesson{favorites.length !== 1 ? "s" : ""} - stored locally on this device
        </p>
      </div>

      <div className="space-y-3">
        {favorites.map((fav) => {
          const isExpanded = expandedId === fav.id;
          const ageInfo = ageGroups[fav.ageGroup] || { label: fav.ageGroup, emoji: "" };

          return (
            <div
              key={fav.id}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-all"
            >
              <div className="flex items-center justify-between p-4">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : fav.id)}
                  className="flex items-center gap-3 text-left flex-1 min-w-0"
                  aria-expanded={isExpanded}
                >
                  <span className="text-3xl flex-shrink-0">{fav.teacher?.emoji || "📖"}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate capitalize">
                      {fav.original_concept?.replace(/_/g, " ")}
                    </h3>
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                      <span>{fav.teacher?.name}</span>
                      <span>-</span>
                      <span>{ageInfo.emoji} {ageInfo.label}</span>
                      <span>-</span>
                      <Clock className="w-3 h-3 inline" />
                      <span>{new Date(fav.savedAt).toLocaleDateString()}</span>
                    </p>
                  </div>
                </button>

                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  {onViewLesson && (
                    <button
                      onClick={() => onViewLesson(fav)}
                      className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                      aria-label="View lesson"
                      title="View lesson"
                    >
                      <BookOpen className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleRemove(fav.id)}
                    className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                    aria-label="Remove from favorites"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="px-4 pb-4 pt-0 border-t border-gray-50 space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-700 mb-1">Story:</p>
                    <p className="text-sm text-blue-600">{fav.explanation?.story}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-700 mb-1">Activity:</p>
                    <p className="text-sm text-green-600">{fav.activity?.main_activity}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-purple-700 mb-1">Wow Fact:</p>
                    <p className="text-sm text-purple-600">{fav.wow_fact}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesManager;
