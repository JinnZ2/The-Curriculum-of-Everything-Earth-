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

  // --- Living Intelligence Database teachers ---

  precision_hawk: {
    teaches: ["precision", "triangulation", "vision", "prediction"],
    emoji: "🦅",
    name: "Precision Hawk",
    teacher_type: "animal",
    story_templates: {
      preschool: "Hawks have super-powered eyes that can spot a tiny mouse from way up high in the sky!",
      elementary: "Hawks demonstrate precision hunting - they calculate speed, distance, and angle to strike with pinpoint accuracy from hundreds of feet up.",
      middle: "Hawks exemplify predictive motion calculation, using binocular vision to triangulate targets and adjust trajectories mid-dive at speeds over 150 mph.",
    },
    activities: {
      preschool: "Play a spotting game - how many tiny objects can you find hidden across the room using just your eyes?",
      elementary: "Drop a ball from different heights and try to catch it in a cup - practice predicting where things will land!",
      middle: "Calculate the trajectory of a falling object using distance, time, and angle measurements to model raptor strike precision.",
    },
    wow_facts: {
      preschool: "A hawk can see a mouse from as far away as a football field!",
      elementary: "Hawks can see 8 times better than humans and spot prey from over 1 mile away while flying!",
      middle: "Raptors process visual information so fast they can track prey at angular velocities that would appear as a blur to human eyes!",
    },
  },

  parallel_octopus: {
    teaches: ["parallel_processing", "distributed_intelligence", "adaptation", "camouflage"],
    emoji: "🐙",
    name: "Parallel Octopus",
    teacher_type: "animal",
    story_templates: {
      preschool: "Octopuses are amazing - each of their 8 arms can think and move all by itself!",
      elementary: "An octopus has a mini-brain in each arm that can solve problems independently, like having 8 little scientists working at once.",
      middle: "Octopuses demonstrate decentralized parallel processing - each arm has its own neural cluster, enabling independent sensory-motor control without central brain coordination.",
    },
    activities: {
      preschool: "Try doing two different things with your two hands at the same time - now imagine doing 8!",
      elementary: "Have 8 students each solve one part of a puzzle independently, then combine them - that is how octopus arms work together!",
      middle: "Model distributed computing by splitting a complex problem into independent sub-tasks solved simultaneously, then merging results.",
    },
    wow_facts: {
      preschool: "An octopus can change color and shape in less than one second!",
      elementary: "Two-thirds of an octopus's neurons are in its arms, not its brain - each arm literally thinks for itself!",
      middle: "Octopuses have 500 million neurons with 2/3 distributed across their arms, enabling asynchronous parallel processing rivaling multi-core computer architectures!",
    },
  },

  sensor_shark: {
    teaches: ["electromagnetic_sensing", "signal_processing", "efficiency", "evolution"],
    emoji: "🦈",
    name: "Sensor Shark",
    teacher_type: "animal",
    story_templates: {
      preschool: "Sharks can feel the tiny electricity that comes from other animals' heartbeats - like having a superpower!",
      elementary: "Sharks have special sensors called ampullae of Lorenzini that detect electrical fields, letting them find hidden prey even in total darkness.",
      middle: "Sharks demonstrate electromagnetic signal detection through electroreceptive organs sensitive to fields as weak as 5 nanovolts per centimeter.",
    },
    activities: {
      preschool: "Play hide and seek but the seeker is blindfolded and finds hiders by listening to their heartbeat sounds!",
      elementary: "Use a compass to detect hidden magnets under a table - model how sharks sense invisible electromagnetic fields.",
      middle: "Build a simple electromagnetic detector circuit and explore how biological electroreception compares to engineered sensors.",
    },
    wow_facts: {
      preschool: "Sharks have been swimming in the ocean for longer than trees have existed on land!",
      elementary: "Sharks can detect the electric field of a AA battery from 1,000 miles away through seawater!",
      middle: "Shark electroreception is sensitive to 5 nV/cm - a billion times more sensitive than any human-made voltage detector of comparable size!",
    },
  },

  leap_spider: {
    teaches: ["engineering", "calculation", "precision", "problem_solving"],
    emoji: "🕷️",
    name: "Leaping Spider",
    teacher_type: "animal",
    story_templates: {
      preschool: "Jumping spiders are tiny acrobats that measure their jumps perfectly every single time!",
      elementary: "Jumping spiders calculate exact jump distances using special eyes that measure depth, like having a built-in range finder.",
      middle: "Jumping spiders demonstrate hydraulic locomotion and stereoscopic depth calculation, computing jump vectors with remarkable accuracy across variable surfaces.",
    },
    activities: {
      preschool: "Practice jumping to different targets on the floor - can you land exactly on the mark?",
      elementary: "Measure the distance to a target and predict where a tossed beanbag will land - practice calculating like a jumping spider!",
      middle: "Calculate projectile trajectories for different launch angles and forces, modeling how jumping spiders optimize their leap parameters.",
    },
    wow_facts: {
      preschool: "Jumping spiders can leap 50 times their own body length!",
      elementary: "Jumping spiders have 4 pairs of eyes giving them nearly 360-degree vision, with front eyes as sharp as a cat's!",
      middle: "Jumping spiders achieve launch accelerations of 50g and adjust trajectories mid-air using silk draglines as dynamic stabilizers!",
    },
  },

  rhythm_frog: {
    teaches: ["rhythm", "vibration", "resonance", "environmental_sensing"],
    emoji: "🐸",
    name: "Rhythm Frog",
    teacher_type: "animal",
    story_templates: {
      preschool: "Tree frogs sing and leap in perfect rhythm, and their sticky toes hold onto anything!",
      elementary: "Tree frogs sense moisture and vibrations through their skin, timing their leaps to match the rhythm of their environment.",
      middle: "Tree frogs demonstrate bioelectric sensing and adhesion physics, using van der Waals forces in toe pads and timing behaviors to humidity and vibrational cues.",
    },
    activities: {
      preschool: "Clap a rhythm and hop to the beat like a frog - can you keep the pattern going?",
      elementary: "Test which surfaces are stickiest when wet vs dry, and explore how frogs grip smooth leaves using moisture.",
      middle: "Investigate how surface area and moisture affect adhesion forces, modeling the van der Waals forces in frog toe pads.",
    },
    wow_facts: {
      preschool: "Some tree frogs can stick to a window even upside down!",
      elementary: "Tree frogs can sense a rainstorm coming hours before it arrives by detecting tiny changes in air pressure!",
      middle: "Frog toe pads generate adhesion of 10-140 mN using nanopillar structures and capillary forces - inspiring next-generation adhesive technology!",
    },
  },

  hexagon_bee: {
    teaches: ["geometry", "cooperation", "optimization", "engineering"],
    emoji: "🐝",
    name: "Architect Bee",
    teacher_type: "animal",
    story_templates: {
      preschool: "Bees build their homes using perfect hexagons - the strongest shape in nature!",
      elementary: "Bees construct honeycombs using hexagonal cells because hexagons use the least wax while storing the most honey - nature's perfect engineering.",
      middle: "Honeybees demonstrate optimal surface packing through hexagonal tessellation, minimizing material use while maximizing volume - a solution to the honeycomb conjecture proven mathematically in 1999.",
    },
    activities: {
      preschool: "Press hexagon shapes into playdough and fit them together like a honeycomb puzzle!",
      elementary: "Compare how many circles, squares, and hexagons fit together on paper without gaps - discover why bees chose hexagons!",
      middle: "Calculate the surface-area-to-volume ratio of hexagonal vs square vs triangular prisms to prove hexagonal packing efficiency.",
    },
    wow_facts: {
      preschool: "Bees visit over 2 million flowers to make just one jar of honey!",
      elementary: "A honeycomb hexagon is tilted exactly 13 degrees to keep honey from dripping out - bees are natural engineers!",
      middle: "Bee swarms use a quorum-sensing algorithm where scout bees 'vote' through waggle dances - a distributed consensus protocol remarkably similar to blockchain validation!",
    },
  },

  // --- Plasma & Energy teachers (from Living Intelligence Database) ---

  aurora_plasma: {
    teaches: ["plasma", "electromagnetic_waves", "magnetism", "atmosphere"],
    emoji: "🌌",
    name: "Aurora Dancer",
    teacher_type: "plasma",
    story_templates: {
      preschool: "The Northern Lights are a magical light show created when tiny space particles dance with Earth's invisible shield!",
      elementary: "Auroras happen when charged particles from the sun crash into Earth's magnetic field and make gases in the atmosphere glow with beautiful colors.",
      middle: "Auroras demonstrate charged-particle precipitation and electromagnetic wave-particle coupling as solar wind plasma interacts with Earth's magnetosphere.",
    },
    activities: {
      preschool: "Wave colored scarves in the dark with a flashlight to create your own aurora dance!",
      elementary: "Use iron filings and a magnet to see invisible magnetic field lines, then imagine solar wind flowing along them.",
      middle: "Model magnetospheric particle deflection by rolling marbles past magnets and observing curved trajectories.",
    },
    wow_facts: {
      preschool: "The Northern Lights can be so bright they make shadows at night!",
      elementary: "Auroras happen 60-200 miles above Earth and can stretch across the entire sky - they even make sounds!",
      middle: "Auroral electrons accelerated to 10 keV excite atmospheric oxygen at 557.7nm (green) and nitrogen at 427.8nm (blue) - each color reveals a specific altitude!",
    },
  },

  lightning_bolt: {
    teaches: ["electricity", "plasma", "energy_transfer", "weather"],
    emoji: "⚡",
    name: "Lightning Pathfinder",
    teacher_type: "plasma",
    story_templates: {
      preschool: "Lightning is nature's biggest spark - it is hotter than the sun and lights up the whole sky!",
      elementary: "Lightning forms when electrical charge builds up in clouds until it breaks through the air in a giant spark, following the path of least resistance.",
      middle: "Lightning demonstrates dielectric field breakdown and stepped-leader pathfinding as charge differentials overcome air's resistance through ionized plasma channels.",
    },
    activities: {
      preschool: "Rub a balloon on your hair and watch it stick - you just made a tiny version of lightning's static electricity!",
      elementary: "Build a simple electroscope from a jar and foil strips to detect and visualize static charge buildup.",
      middle: "Map the branching pattern of electrical discharges and compare them to fractal tree structures and river deltas.",
    },
    wow_facts: {
      preschool: "Lightning is 5 times hotter than the surface of the sun!",
      elementary: "A single lightning bolt carries enough energy to toast 100,000 slices of bread!",
      middle: "Lightning channels reach 30,000 K and carry 30,000 amps through plasma channels only 1-2 cm wide, with stepped leaders advancing in 50-meter increments!",
    },
  },

  wave_sine: {
    teaches: ["waves", "oscillation", "music", "mathematics"],
    emoji: "🌊",
    name: "Sine Wave Surfer",
    teacher_type: "energy",
    story_templates: {
      preschool: "Waves are everywhere - in the ocean, in sound, in light, even in the way your heart beats!",
      elementary: "A sine wave is the most basic wave pattern in nature - ocean waves, sound waves, and light waves all follow this same beautiful S-curve.",
      middle: "The sine wave is the fundamental oscillation underlying all wave phenomena, forming the basis of Fourier analysis where any complex wave decomposes into sine components.",
    },
    activities: {
      preschool: "Make waves in a bathtub or with a jump rope and watch the beautiful up-and-down pattern!",
      elementary: "Stretch a slinky across the floor and send waves through it - measure how wavelength changes with different frequencies.",
      middle: "Use a tone generator to visualize sine waves at different frequencies and demonstrate how complex sounds decompose into simple sine components.",
    },
    wow_facts: {
      preschool: "Your voice is actually a wave that travels through the air to reach other people's ears!",
      elementary: "Every sound you hear - music, speech, thunder - is actually made of sine waves added together!",
      middle: "Fourier proved in 1807 that ANY periodic signal can be decomposed into sine waves - this discovery underlies all modern digital audio, radio, and image compression!",
    },
  },

  torus_flow: {
    teaches: ["energy_flow", "topology", "cycles", "sustainability"],
    emoji: "🍩",
    name: "Torus Flow Master",
    teacher_type: "energy",
    story_templates: {
      preschool: "A torus is a donut shape where energy goes round and round forever without stopping!",
      elementary: "The torus shape appears everywhere in nature - from magnetic fields to smoke rings to the way blood flows through your heart.",
      middle: "The torus demonstrates sustainable flow topology where energy circulates through a closed system, appearing in magnetic fields, vortex dynamics, and tokamak fusion reactors.",
    },
    activities: {
      preschool: "Blow smoke rings or make a vortex cannon from a box to see the donut shape energy loves to make!",
      elementary: "Create a water vortex in a bottle and observe how the toroidal flow pattern keeps energy circulating.",
      middle: "Model magnetic field line topology around a bar magnet and compare to toroidal confinement in fusion reactor designs.",
    },
    wow_facts: {
      preschool: "Earth's magnetic field is shaped like a giant invisible donut around the whole planet!",
      elementary: "Your heart creates a toroidal electromagnetic field that can be detected up to 3 feet outside your body!",
      middle: "The torus is the only 3D shape where energy can circulate indefinitely without dissipation - this is why tokamak fusion reactors use toroidal geometry!",
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

  // --- Cultural Wisdom teachers ---

  polynesian_navigator: {
    teaches: ["navigation", "wayfinding", "astronomy", "ocean_currents", "oral_tradition"],
    emoji: "🌺",
    name: "Polynesian Star Navigator",
    teacher_type: "cultural",
    culture: "Polynesian",
    story_templates: {
      preschool: "Polynesian sailors crossed the biggest ocean in the world using only the stars, waves, and birds to find their way!",
      elementary: "Polynesian wayfinders navigated thousands of miles of open Pacific Ocean by reading star paths, ocean swells, cloud patterns, and the flight of birds - no maps or compass needed.",
      middle: "Polynesian wayfinding demonstrates non-instrument celestial navigation using star compasses, swell refraction patterns, and biological indicators to traverse 10,000+ miles of open ocean with remarkable precision.",
    },
    activities: {
      preschool: "Go outside at night and find the brightest star - Polynesian children learned all the star names to find their way home!",
      elementary: "Build a star compass using a paper plate and track how stars move across the sky over one hour to learn Polynesian navigation.",
      middle: "Calculate latitude from star altitude angles and model how ocean swell refraction patterns around islands create detectable signatures at 30+ mile distances.",
    },
    wow_facts: {
      preschool: "Polynesian families sailed across the Pacific Ocean in canoes - the biggest ocean adventure in history!",
      elementary: "Polynesian navigators memorized over 200 stars and could detect invisible islands by reading wave patterns bouncing off land over 30 miles away!",
      middle: "The Polynesian star compass divides the horizon into 32 houses, and navigators like Mau Piailug could detect island-reflected swells at distances exceeding 50km - outperforming modern wave models!",
    },
  },

  aboriginal_songline: {
    teaches: ["mapping", "ecology", "oral_tradition", "memory", "land_management"],
    emoji: "🎵",
    name: "Aboriginal Songline Keeper",
    teacher_type: "cultural",
    culture: "Aboriginal Australian",
    story_templates: {
      preschool: "Aboriginal Australians sing special songs that are like invisible maps - each song tells you exactly where to walk across the land!",
      elementary: "Aboriginal Songlines are ancient songs that map the entire Australian continent - each verse describes landmarks, water sources, and the Dreaming stories that created the land.",
      middle: "Aboriginal Songlines represent a mnemonic spatial mapping system encoding geographical, ecological, and cultural information across 65,000+ years of continuous oral tradition.",
    },
    activities: {
      preschool: "Make up a song about the path from your room to the kitchen, naming every landmark you pass!",
      elementary: "Create a songline for your neighborhood - write a song where each verse describes a real landmark in the correct walking order.",
      middle: "Map a route using only musical mnemonics encoding distance, direction, and landmarks, then test if others can navigate using only your song.",
    },
    wow_facts: {
      preschool: "Aboriginal Australians have been telling the same stories for over 65,000 years - the oldest stories on Earth!",
      elementary: "Aboriginal Songlines crisscross all of Australia and were used as a GPS system thousands of years before satellites existed!",
      middle: "Aboriginal oral traditions accurately describe events from over 10,000 years ago, including sea level changes verified by modern geology - the longest continuous knowledge system on Earth!",
    },
  },

  persian_garden: {
    teaches: ["water_engineering", "geometry", "symmetry", "sustainability", "agriculture"],
    emoji: "🏛️",
    name: "Persian Garden Architect",
    teacher_type: "cultural",
    culture: "Persian",
    story_templates: {
      preschool: "Persian people built magical gardens in the desert using clever water tunnels that brought water from mountains far away!",
      elementary: "Ancient Persians engineered qanat systems - underground tunnels that used gravity to carry mountain water across deserts, creating lush gardens in the driest places on Earth.",
      middle: "Persian qanat systems demonstrate gravity-driven hydraulic engineering using precise gradient calculations to transport groundwater across kilometers of arid terrain without any pumps.",
    },
    activities: {
      preschool: "Build a channel in sand and pour water at one end - watch how water flows downhill just like a Persian qanat!",
      elementary: "Design a gravity-fed irrigation system using tubes and containers at different heights to water a small garden without a pump.",
      middle: "Calculate the gradient needed for water to flow through a channel over a given distance, and design an optimal qanat cross-section for your local terrain.",
    },
    wow_facts: {
      preschool: "The word 'paradise' comes from the Persian word for 'walled garden'!",
      elementary: "Some Persian qanats are over 3,000 years old and still carry water today - engineering that lasts millennia!",
      middle: "The longest qanat stretches 71km with shafts up to 350m deep, maintaining a precise 1:1000 to 1:1500 gradient - built without modern surveying tools over 2,500 years ago!",
    },
  },

  sami_reindeer: {
    teaches: ["ecology", "migration", "seasons", "climate_adaptation", "sustainability"],
    emoji: "🦌",
    name: "Sami Reindeer Herder",
    teacher_type: "cultural",
    culture: "Sami",
    story_templates: {
      preschool: "The Sami people of the Arctic follow reindeer across the snow, knowing exactly where to go in every season!",
      elementary: "The Sami people have herded reindeer across Arctic tundra for thousands of years, reading snow, wind, and stars to guide annual migrations across hundreds of miles.",
      middle: "Sami reindeer pastoralism demonstrates transhumance ecology and traditional ecological knowledge, with over 300 Sami words for snow conditions encoding critical survival and migration data.",
    },
    activities: {
      preschool: "Describe 5 different types of weather outside - Sami children know over 300 words just for different kinds of snow!",
      elementary: "Track weather patterns for a month and predict how animals in your area change behavior with seasons, like Sami herders track reindeer migration.",
      middle: "Analyze how microclimate indicators (snow density, wind patterns, vegetation) predict migration conditions, and compare indigenous ecological knowledge to meteorological models.",
    },
    wow_facts: {
      preschool: "Sami people have over 300 different words for snow because each type means something important!",
      elementary: "Sami herders can predict weather changes days in advance by reading reindeer behavior, wind patterns, and snow crystal shapes!",
      middle: "Sami traditional knowledge identifies 300+ snow and ice classifications that correlate with measurable physical properties - studies show this system predicts safe travel conditions more accurately than satellite data!",
    },
  },

  indigenous_fire: {
    teaches: ["fire_ecology", "land_management", "cycles", "sustainability", "ecology"],
    emoji: "🔥",
    name: "Indigenous Fire Keeper",
    teacher_type: "cultural",
    culture: "Indigenous Worldwide",
    story_templates: {
      preschool: "Indigenous peoples around the world learned that gentle, careful fires help forests grow healthier and stronger!",
      elementary: "Indigenous communities worldwide developed cultural burning - using small, controlled fires to keep forests healthy, prevent big wildfires, and help new plants grow.",
      middle: "Indigenous fire stewardship demonstrates pyrogeographic land management, where strategic low-intensity burns create mosaic landscapes that increase biodiversity and reduce catastrophic wildfire risk.",
    },
    activities: {
      preschool: "Plant seeds in two pots - one with ash mixed in the soil and one without - watch which grows better!",
      elementary: "Research how different ecosystems respond to fire and create a poster showing the fire cycle: burn, regrow, thrive, repeat.",
      middle: "Compare satellite fire scar data from managed vs unmanaged landscapes and analyze how indigenous burning patterns affect species diversity and biomass recovery rates.",
    },
    wow_facts: {
      preschool: "Some seeds can only grow after a fire warms them up - fire helps new forests be born!",
      elementary: "Indigenous Australians have used fire to manage land for over 65,000 years - the longest land management practice in human history!",
      middle: "Studies show indigenous cultural burning reduces wildfire severity by 60% and increases plant species diversity by 30% compared to fire-suppressed landscapes!",
    },
  },

  ubuntu_circle: {
    teaches: ["community", "empathy", "cooperation", "social_systems", "ethics"],
    emoji: "🤝",
    name: "Ubuntu Circle Elder",
    teacher_type: "cultural",
    culture: "Ubuntu (Southern African)",
    story_templates: {
      preschool: "Ubuntu means 'I am because we are' - we all become better people by being kind and helping each other!",
      elementary: "Ubuntu is a Southern African philosophy meaning 'I am because we are' - it teaches that every person's wellbeing depends on the wellbeing of their whole community.",
      middle: "Ubuntu philosophy demonstrates emergent social intelligence - the principle 'umuntu ngumuntu ngabantu' (a person is a person through other persons) encodes the insight that individual consciousness arises through communal relationships.",
    },
    activities: {
      preschool: "Sit in a circle and each person says one nice thing about the person next to them - that is Ubuntu!",
      elementary: "Play a cooperative game where the whole group can only win together, then discuss how Ubuntu means no one succeeds unless everyone succeeds.",
      middle: "Model how cooperative strategies outperform competitive ones using iterative game theory simulations, connecting results to Ubuntu social principles.",
    },
    wow_facts: {
      preschool: "In Ubuntu communities, if one person is sad, everyone helps until that person is happy again!",
      elementary: "Nelson Mandela used Ubuntu philosophy to unite South Africa after apartheid, proving that community healing is stronger than revenge!",
      middle: "Game theory research confirms Ubuntu-like cooperative strategies produce higher long-term outcomes than competitive ones - Axelrod's tournaments showed 'tit-for-tat with forgiveness' wins evolutionary stability!",
    },
  },

  maori_kaitiaki: {
    teaches: ["guardianship", "ecology", "sustainability", "respect", "conservation"],
    emoji: "🌿",
    name: "Maori Kaitiaki Guardian",
    teacher_type: "cultural",
    culture: "Maori (Aotearoa/New Zealand)",
    story_templates: {
      preschool: "Maori people believe that rivers, mountains, and forests are family members that we must love and protect!",
      elementary: "In Maori culture, kaitiakitanga means guardianship of the natural world - people don't own nature, they are its family and protectors.",
      middle: "Maori kaitiakitanga embodies reciprocal ecological guardianship where humans exist within whakapapa (genealogical relationships) with all living and non-living elements of their environment.",
    },
    activities: {
      preschool: "Adopt a plant or tree near your home and take care of it every day like it is part of your family!",
      elementary: "Map your local ecosystem and identify what each part needs to stay healthy, then create a kaitiaki (guardian) plan for one area.",
      middle: "Research how granting legal personhood to rivers (like New Zealand's Whanganui River) changes environmental management outcomes compared to conventional approaches.",
    },
    wow_facts: {
      preschool: "In New Zealand, a river was given the same rights as a person because Maori people said it was a living ancestor!",
      elementary: "The Whanganui River in New Zealand was the first river in the world to be recognized as a legal person with its own rights, based on Maori kaitiakitanga!",
      middle: "New Zealand's granting of legal personhood to the Whanganui River (Te Awa Tupua) in 2017 has inspired similar rights-of-nature legislation in 30+ countries!",
    },
  },

  inuit_ice: {
    teaches: ["climate", "observation", "adaptation", "survival", "environmental_science"],
    emoji: "❄️",
    name: "Inuit Ice Reader",
    teacher_type: "cultural",
    culture: "Inuit",
    story_templates: {
      preschool: "Inuit elders can look at ice and snow and know exactly if it is safe, what weather is coming, and where animals are hiding!",
      elementary: "Inuit peoples have developed incredibly precise knowledge of Arctic ice, identifying dozens of ice types and reading weather patterns that modern science is only now learning to measure.",
      middle: "Inuit siku (sea ice) knowledge encompasses a classification system of 100+ ice types encoding formation processes, structural integrity, and ecological significance that correlates with satellite-measured physical properties.",
    },
    activities: {
      preschool: "Freeze water in different containers and at different temperatures - notice how each piece of ice looks and feels different!",
      elementary: "Freeze salt water and fresh water and compare the results - discover how Inuit hunters know which ice is safe to walk on.",
      middle: "Analyze how salinity, temperature, and wind affect ice crystal formation and strength, comparing laboratory results to Inuit ice classification categories.",
    },
    wow_facts: {
      preschool: "Inuit children learn to read ice before they learn to read books - ice reading can save your life in the Arctic!",
      elementary: "Inuit ice knowledge is so precise that scientists now use it alongside satellite data to predict ice conditions!",
      middle: "Inuit elders detected Arctic sea ice thinning decades before satellite measurements confirmed it - their observations now form a critical supplement to IPCC climate monitoring data!",
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

  // Living Intelligence Database concepts
  precision: {
    difficulty: 5,
    keywords: ["accuracy", "targeting", "vision", "calculation", "triangulation"],
    category: "physics",
  },
  parallel_processing: {
    difficulty: 8,
    keywords: ["distributed", "multi-tasking", "neural_networks", "coordination"],
    category: "computer_science",
  },
  electromagnetic_sensing: {
    difficulty: 7,
    keywords: ["electroreception", "signals", "detection", "fields"],
    category: "biology",
  },
  engineering: {
    difficulty: 6,
    keywords: ["design", "calculation", "structures", "optimization", "building"],
    category: "mathematics",
  },
  rhythm: {
    difficulty: 3,
    keywords: ["vibration", "resonance", "timing", "music", "patterns"],
    category: "physics",
  },
  geometry: {
    difficulty: 5,
    keywords: ["hexagons", "tessellation", "packing", "shapes", "optimization"],
    category: "mathematics",
  },
  plasma: {
    difficulty: 8,
    keywords: ["ionization", "charged_particles", "aurora", "electromagnetic"],
    category: "physics",
  },
  electricity: {
    difficulty: 6,
    keywords: ["charge", "current", "voltage", "lightning", "static"],
    category: "physics",
  },
  waves: {
    difficulty: 5,
    keywords: ["oscillation", "sine", "frequency", "amplitude", "superposition"],
    category: "physics",
  },
  energy_flow: {
    difficulty: 7,
    keywords: ["topology", "torus", "circulation", "sustainability", "cycles"],
    category: "physics",
  },

  // Cultural wisdom concepts
  wayfinding: {
    difficulty: 6,
    keywords: ["navigation", "stars", "ocean", "celestial", "traditional_knowledge"],
    category: "cultural_wisdom",
  },
  songlines: {
    difficulty: 5,
    keywords: ["mapping", "oral_tradition", "memory", "landscape", "dreaming"],
    category: "cultural_wisdom",
  },
  water_engineering: {
    difficulty: 6,
    keywords: ["irrigation", "qanat", "hydraulics", "gravity", "sustainability"],
    category: "cultural_wisdom",
  },
  migration: {
    difficulty: 5,
    keywords: ["seasons", "ecology", "adaptation", "snow", "herding"],
    category: "cultural_wisdom",
  },
  fire_ecology: {
    difficulty: 6,
    keywords: ["cultural_burning", "land_management", "biodiversity", "cycles"],
    category: "cultural_wisdom",
  },
  ubuntu: {
    difficulty: 4,
    keywords: ["community", "empathy", "cooperation", "ethics", "togetherness"],
    category: "cultural_wisdom",
  },
  kaitiakitanga: {
    difficulty: 5,
    keywords: ["guardianship", "conservation", "respect", "whakapapa", "rivers"],
    category: "cultural_wisdom",
  },
  ice_knowledge: {
    difficulty: 6,
    keywords: ["climate", "observation", "arctic", "adaptation", "survival"],
    category: "cultural_wisdom",
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
  cultural_wisdom: { label: "Cultural Wisdom", color: "rose", emoji: "🌏" },
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
