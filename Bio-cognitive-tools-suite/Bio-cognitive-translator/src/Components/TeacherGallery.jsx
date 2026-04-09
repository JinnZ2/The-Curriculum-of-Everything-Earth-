import React, { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import { natureTeachers } from "./AnimalTeachers";
import TeacherCard from "./TeacherCard";

const TeacherGallery = ({ onSelectTeacher }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const teacherList = useMemo(() => Object.values(natureTeachers), []);

  const teacherTypes = useMemo(
    () => [...new Set(teacherList.map((t) => t.teacher_type))],
    [teacherList]
  );

  const filtered = useMemo(() => {
    return teacherList.filter((teacher) => {
      const matchesType = typeFilter === "all" || teacher.teacher_type === typeFilter;
      if (!matchesType) return false;
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        teacher.name.toLowerCase().includes(q) ||
        teacher.teaches.some((t) => t.toLowerCase().includes(q)) ||
        teacher.teacher_type.toLowerCase().includes(q)
      );
    });
  }, [teacherList, search, typeFilter]);

  const typeEmojis = { animal: "🐾", plant: "🌿", crystal: "💎", plasma: "⚡", energy: "🌊", cultural: "🌏" };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Nature Teacher Gallery</h2>
        <p className="text-gray-500">
          Browse all {teacherList.length} nature teachers and discover what they teach
        </p>
      </div>

      {/* Search and filter bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search teachers or topics..."
            aria-label="Search teachers"
            className="w-full pl-10 pr-8 py-2.5 border-2 border-gray-200 rounded-lg focus:border-blue-400 focus:outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
              aria-label="Clear search"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        <div className="flex gap-2" role="group" aria-label="Filter by teacher type">
          <button
            onClick={() => setTypeFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              typeFilter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Filter className="w-4 h-4 inline mr-1" />
            All
          </button>
          {teacherTypes.map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                typeFilter === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {typeEmojis[type] || ""} {type}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500">
        Showing {filtered.length} of {teacherList.length} teachers
      </p>

      {/* Gallery grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((teacher) => (
            <TeacherCard
              key={teacher.name}
              teacher={teacher}
              onClick={onSelectTeacher ? () => onSelectTeacher(teacher) : undefined}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400">
          <p className="text-4xl mb-2">🔍</p>
          <p>No teachers found matching your search.</p>
          <button
            onClick={() => { setSearch(""); setTypeFilter("all"); }}
            className="mt-2 text-blue-500 hover:underline text-sm"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default TeacherGallery;
