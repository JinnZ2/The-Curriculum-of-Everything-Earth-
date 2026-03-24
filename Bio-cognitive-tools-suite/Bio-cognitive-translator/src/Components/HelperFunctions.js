import { animalTeachers } from "./AnimalTeachers";

export const findBestAnimalMatch = (concept) => {
  for (const [key, teacher] of Object.entries(animalTeachers)) {
    if (
      teacher.teaches.includes(concept.toLowerCase()) ||
      teacher.teaches.some((topic) => concept.toLowerCase().includes(topic))
    ) {
      return teacher;
    }
  }
  return animalTeachers.sunflower_chef; // fallback
};

export const extractMaterials = (activityDescription) => {
  const materials = [];
  if (activityDescription.includes("bag")) materials.push("clear plastic bag");
  if (activityDescription.includes("plant")) materials.push("plant or leaf");
  if (activityDescription.includes("marshmallow"))
    materials.push("colored marshmallows", "toothpicks");
  if (activityDescription.includes("paper"))
    materials.push("paper", "scissors", "colored pencils");
  if (activityDescription.includes("blocks")) materials.push("building blocks");
  if (activityDescription.includes("magnifying"))
    materials.push("magnifying glass");
  if (activityDescription.includes("crystal") || activityDescription.includes("salt"))
    materials.push("salt or sugar", "string", "jar");
  if (activityDescription.includes("rings") || activityDescription.includes("stump"))
    materials.push("tree stump or tree ring image");
  return materials.length > 0 ? materials : ["basic household items"];
};
