// Master nature teacher database - all teachers for offline use
// When adding new teachers, also update Teacher-dataset.md in the repo root

export const natureTeachers = {
  sunflower_chef: {
    teaches: ["photosynthesis", "energy_conversion", "solar_power"],
    emoji: "🌻",
    name: "Chef Sunflower",
    teacher_type: "plant",
    story_templates: {
      preschool: "Sunflowers are magical chefs who cook yummy food using nothing but sunshine!",
      elementary: "Sunflowers are like solar-powered kitchens that capture sunlight and cook it into sugar food in their leaves.",
      middle: "Sunflowers demonstrate photosynthetic energy conversion through chlorophyll-based light capture.",
    },
    activities: {
      preschool: "Put a clear plastic bag over a plant leaf on a sunny day and watch water droplets appear!",
      elementary: "Track how a sunflower follows the sun during the day and measure how plants grow in light vs. dark.",
      middle: "Design an experiment testing how different light colors affect plant growth and oxygen production.",
    },
    wow_facts: {
      preschool: "One big tree makes enough oxygen for you and a friend to breathe all day!",
      elementary: "A single large tree produces enough oxygen for 2 people every day and absorbs 48 pounds of CO2 per year!",
      middle: "Photosynthesis converts 3,000 EJ of solar energy annually - more energy than humans use in a year!",
    },
  },

  gravity_apple: {
    teaches: ["gravity", "forces", "attraction", "orbits"],
    emoji: "🍎",
    name: "Sir Isaac Apple",
    teacher_type: "animal",
    story_templates: {
      preschool: "Gravity is like an invisible friend that always pulls things down to give Earth a big hug!",
      elementary: "Gravity is like an invisible rope that always pulls objects toward the biggest, heaviest thing nearby.",
      middle: "Gravity is the curvature of spacetime caused by mass, creating what we experience as an attractive force.",
    },
    activities: {
      preschool: "Drop different toys from the same height and see that they all fall down together!",
      elementary: "Test if heavy and light objects fall at the same speed, and explore what gravity does to water.",
      middle: "Calculate gravitational force between objects and model how gravity creates planetary orbits.",
    },
    wow_facts: {
      preschool: "Without gravity, you would float away like a balloon!",
      elementary: "Gravity is so strong that it holds the moon in orbit around Earth, even though the moon is 238,855 miles away!",
      middle: "Gravity affects time - clocks run slower in stronger gravitational fields!",
    },
  },

  copy_snake: {
    teaches: ["dna", "genetics", "replication", "heredity"],
    emoji: "🐍",
    name: "Copy-Cat Snake",
    teacher_type: "animal",
    story_templates: {
      preschool: "DNA is like a magical snake that can split in half and each half grows back into a perfect copy!",
      elementary: "DNA is like a twisted ladder that unzips down the middle, and each half rebuilds its missing partner.",
      middle: "DNA replication involves helicase unwinding, polymerase synthesis, and complementary base pairing.",
    },
    activities: {
      preschool: "Make a paper snake, cut it in half, and help each half grow back using matching colors!",
      elementary: "Build DNA models with colored beads and demonstrate how copying preserves genetic information.",
      middle: "Simulate DNA replication with complementary base pairing and explore how mutations occur.",
    },
    wow_facts: {
      preschool: "Your DNA is like instructions for building you, and every cell has a complete copy!",
      elementary: "If you stretched out all the DNA in your body, it would reach from Earth to the sun and back 300 times!",
      middle: "DNA polymerase copies genetic information at 1,000 base pairs per second with 99.9% accuracy!",
    },
  },

  algorithm_ant: {
    teaches: ["algorithms", "programming", "logic", "problem_solving"],
    emoji: "🐜",
    name: "Recipe Ant",
    teacher_type: "animal",
    story_templates: {
      preschool: "Ants are like tiny robots that follow simple recipes to find food and build homes!",
      elementary: "Ants use step-by-step instructions (algorithms) to solve problems like finding the shortest path to food.",
      middle: "Ant colonies demonstrate distributed algorithms, optimization, and emergent intelligence.",
    },
    activities: {
      preschool: 'Follow simple "ant recipes" to build things: step 1) get blocks, step 2) stack them, step 3) make a tower!',
      elementary: "Create algorithms for daily tasks and trace ant paths to understand how they optimize routes.",
      middle: "Program simple algorithms and study how ant colony optimization solves complex routing problems.",
    },
    wow_facts: {
      preschool: "Ants can find the best path to food even though no single ant knows the whole route!",
      elementary: "Ant colonies solve complex problems using simple rules - the same way computer programs work!",
      middle: "Ant colony optimization algorithms are used to solve traffic routing and supply chain problems!",
    },
  },

  lego_atom: {
    teaches: ["atoms", "chemistry", "matter", "elements"],
    emoji: "⚛️",
    name: "LEGO Universe Builder",
    teacher_type: "crystal",
    story_templates: {
      preschool: "Everything is made of impossibly tiny LEGO blocks called atoms that stick together in different ways!",
      elementary: "Atoms are like cosmic LEGO pieces - the same building blocks arrange differently to make water, air, rocks, and you!",
      middle: "Atoms consist of protons, neutrons, and electrons, with chemical bonds forming through electron interactions.",
    },
    activities: {
      preschool: "Build different things with LEGO blocks to see how the same pieces make different objects!",
      elementary: "Use colored marshmallows and toothpicks to build molecules like water (H2O) and carbon dioxide (CO2).",
      middle: "Model atomic structure and chemical bonding, exploring how electron configuration determines properties.",
    },
    wow_facts: {
      preschool: "There are more atoms in a drop of water than there are drops of water in all the oceans!",
      elementary: "There are more atoms in a grain of sand than there are grains of sand on all the beaches on Earth!",
      middle: "Atoms are 99.9999999% empty space - if an atom were the size of a football stadium, the nucleus would be a marble!",
    },
  },

  network_forest: {
    teaches: ["ecosystems", "networks", "interdependence", "systems"],
    emoji: "🌲",
    name: "Network Forest",
    teacher_type: "plant",
    story_templates: {
      preschool: "Forests are like giant families where all the plants and animals help each other!",
      elementary: "Forest ecosystems are complex networks where every organism depends on others in an interconnected web.",
      middle: "Ecosystems demonstrate emergent properties, feedback loops, and network effects in biological systems.",
    },
    activities: {
      preschool: "Draw pictures of forest friends helping each other (bees help flowers, flowers feed bees)!",
      elementary: "Map food webs and trace how energy flows through different levels of forest ecosystems.",
      middle: "Model ecosystem dynamics, carrying capacity, and the effects of removing or adding species.",
    },
    wow_facts: {
      preschool: "Trees can talk to each other through underground root networks!",
      elementary: "Forest trees share nutrients through underground fungal networks that connect their roots like the internet!",
      middle: "A single forest network can span thousands of acres with trees sharing resources and warning each other!",
    },
  },

  wise_oak: {
    teaches: ["time", "growth", "patience", "ecosystems", "climate"],
    emoji: "🌳",
    name: "Wise Old Oak",
    teacher_type: "plant",
    story_templates: {
      preschool: "Oak trees are ancient storytellers who grow very slowly and remember everything they see!",
      elementary: "Oak trees live for hundreds of years, growing one ring each year like nature's calendar.",
      middle: "Oak trees demonstrate long-term ecological processes, carbon sequestration, and climate adaptation.",
    },
    activities: {
      preschool: "Count the rings on a tree stump to see how old it was and imagine all the seasons it lived through!",
      elementary: "Research local oak trees, measure their circumference, and calculate their approximate age.",
      middle: "Study tree ring patterns to understand climate history and analyze how trees respond to environmental changes.",
    },
    wow_facts: {
      preschool: "Some oak trees are older than your great-great-great-grandparents!",
      elementary: "The oldest oak tree in the world is over 1,000 years old and was alive when Vikings sailed the seas!",
      middle: "Oak trees can live over 2,000 years and their root systems can extend 3 times wider than their canopy!",
    },
  },

  fibonacci_fern: {
    teaches: ["patterns", "mathematics", "spirals", "growth_patterns"],
    emoji: "🌿",
    name: "Fibonacci Fern",
    teacher_type: "plant",
    story_templates: {
      preschool: "Ferns grow in beautiful spiral patterns like nature's own artwork!",
      elementary: "Fern fronds unfurl in perfect spirals following mathematical patterns found throughout nature.",
      middle: "Ferns demonstrate the Fibonacci sequence and golden ratio in their growth patterns and leaf arrangements.",
    },
    activities: {
      preschool: "Draw spirals like unfurling fern fronds and look for spiral patterns in shells and flowers!",
      elementary: "Count spiral patterns in pinecones, sunflowers, and fern fronds to discover the Fibonacci sequence.",
      middle: "Measure and calculate the golden ratio in various plant structures and model fractal growth patterns.",
    },
    wow_facts: {
      preschool: "Ferns have been growing spiral patterns for 360 million years!",
      elementary: "The same spiral pattern in fern fronds appears in galaxies, hurricanes, and nautilus shells!",
      middle: "Fern spirals follow the golden ratio (1.618...) which appears in art, architecture, and nature everywhere!",
    },
  },

  structure_quartz: {
    teaches: ["crystals", "geometry", "structure", "lattices", "minerals"],
    emoji: "💎",
    name: "Professor Quartz",
    teacher_type: "crystal",
    story_templates: {
      preschool: "Crystals are Earth's way of building perfect geometric shapes from tiny invisible pieces!",
      elementary: "Quartz crystals grow in perfect geometric patterns because their atoms stack in organized, repeating structures.",
      middle: "Quartz demonstrates crystalline lattice structures and how atomic arrangement determines macroscopic properties.",
    },
    activities: {
      preschool: "Build crystal shapes with blocks and look at salt crystals under a magnifying glass!",
      elementary: "Grow your own crystals from salt water and observe how they form geometric shapes.",
      middle: "Study different crystal systems and model how atomic structures create macroscopic crystal forms.",
    },
    wow_facts: {
      preschool: "Crystals grow themselves into perfect shapes without anyone teaching them how!",
      elementary: "Quartz crystals can grow for thousands of years and some are bigger than school buses!",
      middle: "Quartz crystals vibrate at precise frequencies and are used in every computer and smartphone!",
    },
  },

  // --- New teachers ---

  weather_chameleon: {
    teaches: ["weather", "adaptation", "camouflage", "temperature", "climate"],
    emoji: "🦎",
    name: "Weather Chameleon",
    teacher_type: "animal",
    story_templates: {
      preschool: "Chameleons are magical color-changers who dress up to match the weather and their feelings!",
      elementary: "Chameleons change color based on temperature, light, and mood - they're like living weather stations!",
      middle: "Chameleons demonstrate thermoregulation and adaptive coloration through chromatophore cells responding to environmental stimuli.",
    },
    activities: {
      preschool: "Use crayons to color a chameleon different colors for sunny, rainy, and snowy weather!",
      elementary: "Track the weather for a week and draw how a chameleon might change color each day based on temperature.",
      middle: "Design an experiment to test how temperature affects color change in thermochromic materials, modeling chromatophore behavior.",
    },
    wow_facts: {
      preschool: "Chameleons can look in two directions at the same time!",
      elementary: "Chameleons don't just change color to hide - they also change to communicate and control their body temperature!",
      middle: "Chameleon skin contains nanoscale crystals that shift wavelength by spacing changes - essentially biological photonic crystals!",
    },
  },

  magnetic_turtle: {
    teaches: ["magnetism", "navigation", "earth_science", "magnetic_fields"],
    emoji: "🐢",
    name: "Navigator Turtle",
    teacher_type: "animal",
    story_templates: {
      preschool: "Sea turtles have a secret compass inside them that helps them find their way across the whole ocean!",
      elementary: "Sea turtles navigate thousands of miles using Earth's magnetic field like an invisible GPS system.",
      middle: "Sea turtles demonstrate magnetoreception - detecting Earth's magnetic field intensity and inclination for geolocation.",
    },
    activities: {
      preschool: "Use a magnet to move a paper turtle through a maze on a table - the turtle follows the invisible force!",
      elementary: "Build a simple compass and use it to navigate a treasure hunt, just like turtles use Earth's magnetic field.",
      middle: "Map Earth's magnetic field lines and calculate how declination changes with location, modeling turtle navigation.",
    },
    wow_facts: {
      preschool: "Baby turtles can find their way to the ocean the moment they hatch, even in the dark!",
      elementary: "Sea turtles travel over 10,000 miles and return to the exact beach where they were born, using Earth's magnetism!",
      middle: "Turtles detect magnetic field variations as small as 0.01% - more sensitive than most human-made instruments!",
    },
  },

  echo_dolphin: {
    teaches: ["sound", "waves", "echolocation", "frequency", "communication"],
    emoji: "🐬",
    name: "Echo Dolphin",
    teacher_type: "animal",
    story_templates: {
      preschool: "Dolphins make clicking sounds that bounce off things and come back, helping them 'see' with their ears!",
      elementary: "Dolphins use echolocation - they send out sound waves that bounce back, creating a sound picture of everything around them.",
      middle: "Dolphins demonstrate sonar principles through biosonar, emitting broadband clicks and interpreting returning echoes for spatial mapping.",
    },
    activities: {
      preschool: "Clap your hands near a wall and listen for the echo! That is how dolphins see underwater!",
      elementary: "Measure echo delays in different spaces and calculate the speed of sound using distance and time.",
      middle: "Model echolocation by calculating wave reflection, frequency shifts, and how dolphins distinguish objects by echo signatures.",
    },
    wow_facts: {
      preschool: "Dolphins can tell the difference between a golf ball and a tennis ball just by listening to echoes!",
      elementary: "Dolphin echolocation clicks are so precise they can detect a coin-sized object from 70 meters away!",
      middle: "Dolphin sonar operates at frequencies up to 150 kHz and can distinguish objects differing by less than 1mm in size!",
    },
  },
};

// Concept database mapping concepts to categories and metadata
export const conceptDatabase = {
  photosynthesis: {
    difficulty: 6,
    keywords: ["energy", "conversion", "solar", "food", "plants", "oxygen"],
    category: "biology",
  },
  gravity: {
    difficulty: 4,
    keywords: ["force", "attraction", "mass", "weight", "falling"],
    category: "physics",
  },
  dna: {
    difficulty: 8,
    keywords: ["genetics", "heredity", "code", "instructions", "copying"],
    category: "biology",
  },
  algorithms: {
    difficulty: 7,
    keywords: ["steps", "instructions", "problem-solving", "computers"],
    category: "computer_science",
  },
  atoms: {
    difficulty: 9,
    keywords: ["matter", "particles", "elements", "building_blocks"],
    category: "chemistry",
  },
  ecosystems: {
    difficulty: 5,
    keywords: ["environment", "interactions", "food_chains", "balance"],
    category: "ecology",
  },
  crystals: {
    difficulty: 6,
    keywords: ["structure", "geometry", "lattice", "minerals"],
    category: "chemistry",
  },
  patterns: {
    difficulty: 5,
    keywords: ["mathematics", "spirals", "fibonacci", "nature"],
    category: "mathematics",
  },
  weather: {
    difficulty: 4,
    keywords: ["temperature", "climate", "adaptation", "seasons", "atmosphere"],
    category: "earth_science",
  },
  magnetism: {
    difficulty: 6,
    keywords: ["magnetic_fields", "compass", "navigation", "poles", "forces"],
    category: "physics",
  },
  sound: {
    difficulty: 5,
    keywords: ["waves", "frequency", "vibration", "echo", "communication"],
    category: "physics",
  },
};

// Category metadata for visual grouping
export const categoryInfo = {
  biology: { label: "Biology", color: "green", emoji: "🧬" },
  physics: { label: "Physics", color: "blue", emoji: "⚡" },
  chemistry: { label: "Chemistry", color: "purple", emoji: "🧪" },
  ecology: { label: "Ecology", color: "emerald", emoji: "🌍" },
  computer_science: { label: "Computer Science", color: "orange", emoji: "💻" },
  mathematics: { label: "Mathematics", color: "pink", emoji: "📐" },
  earth_science: { label: "Earth Science", color: "amber", emoji: "🌎" },
};

// Age group metadata
export const ageGroups = {
  preschool: { label: "Little Explorers", range: "3-5", emoji: "🧒" },
  elementary: { label: "Young Scientists", range: "6-8", emoji: "🔬" },
  middle: { label: "Junior Researchers", range: "9-12", emoji: "🎓" },
};

// Context tips that modify activity suggestions
export const contextTips = {
  classroom: {
    label: "Classroom Learning",
    tip: "Great for group activities! Have students work in pairs or small teams.",
    emoji: "🏫",
  },
  homeschool: {
    label: "Homeschool Learning",
    tip: "Adapt the pace to your learner. Extend activities with journal reflections.",
    emoji: "🏠",
  },
  outdoor: {
    label: "Outdoor Learning",
    tip: "Take the lesson outside! Look for real-world examples in nature around you.",
    emoji: "🌳",
  },
  remote: {
    label: "Remote Learning",
    tip: "Use video calls to share observations. Screen-share diagrams and take virtual field trips.",
    emoji: "💻",
  },
};
