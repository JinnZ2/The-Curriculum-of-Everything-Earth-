import { natureTeachers } from "./AnimalTeachers";

export const findBestTeacherMatch = (concept) => {
  for (const teacher of Object.values(natureTeachers)) {
    if (
      teacher.teaches.includes(concept.toLowerCase()) ||
      teacher.teaches.some((topic) => concept.toLowerCase().includes(topic))
    ) {
      return teacher;
    }
  }
  return natureTeachers.sunflower_chef;
};

export const extractMaterials = (activityDescription) => {
  const materials = [];
  if (activityDescription.includes("bag")) materials.push("clear plastic bag");
  if (activityDescription.includes("plant") || activityDescription.includes("leaf"))
    materials.push("plant or leaf");
  if (activityDescription.includes("marshmallow"))
    materials.push("colored marshmallows", "toothpicks");
  if (activityDescription.includes("paper"))
    materials.push("paper", "scissors", "colored pencils");
  if (activityDescription.includes("blocks") || activityDescription.includes("LEGO"))
    materials.push("building blocks");
  if (activityDescription.includes("magnifying"))
    materials.push("magnifying glass");
  if (activityDescription.includes("crystal") || activityDescription.includes("salt"))
    materials.push("salt or sugar", "string", "jar");
  if (activityDescription.includes("rings") || activityDescription.includes("stump"))
    materials.push("tree stump or tree ring image");
  if (activityDescription.includes("magnet") || activityDescription.includes("compass"))
    materials.push("magnet", "compass or needle");
  if (activityDescription.includes("bead")) materials.push("colored beads");
  if (activityDescription.includes("crayon") || activityDescription.includes("color"))
    materials.push("crayons or colored pencils");
  if (activityDescription.includes("maze")) materials.push("paper maze printout");
  if (activityDescription.includes("clap") || activityDescription.includes("echo"))
    materials.push("open space with walls");
  if (activityDescription.includes("measure"))
    materials.push("ruler or measuring tape");
  return materials.length > 0 ? materials : ["basic household items"];
};

// localStorage helpers for favorites
const FAVORITES_KEY = "bio-cognitive-favorites";

export const getFavorites = () => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveFavorite = (lesson) => {
  const favorites = getFavorites();
  const entry = {
    id: Date.now(),
    savedAt: new Date().toISOString(),
    ...lesson,
  };
  favorites.unshift(entry);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return entry;
};

export const removeFavorite = (id) => {
  const favorites = getFavorites().filter((f) => f.id !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return favorites;
};
