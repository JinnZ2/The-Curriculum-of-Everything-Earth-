# CLAUDE.md - The Curriculum of Everything Earth

## Project Overview

Cross-disciplinary, nature-inspired educational curriculum that teaches STEM, character
development, emotional intelligence, and human-AI partnership through bio-cognitive
"nature teacher" metaphors. Designed for offline-first, low-resource environments.

## Repository Structure

```
├── CLAUDE.md                          # This file - project conventions
├── README.md                          # Project overview and navigation
├── Teacher-dataset.md                 # Master database of all nature teachers
├── Modules/                           # Numbered cross-disciplinary learning modules
│   ├── 01_patterns_waves.md
│   └── 07_geometric_ai_detective.md
├── Framework/                         # Pedagogical and cognitive frameworks
│   ├── AncientMoralTechnologies.md    # Wisdom-based character curriculum
│   ├── CogniSpeak-CognitiveLanguage.md # Kid-AI communication language
│   ├── NaturesWisdom.md               # Critical thinking via cognitive biases
│   └── Nature-AI-Human-Partnerships.md # Human-AI collaboration guide
├── Mathematical-Mysteries/            # Math detective story frameworks
│   └── MysteryFramework.md
├── PhysicsAdventures/                 # Physics superhero frameworks
│   └── PhysicsAdventures.md
├── GlobalMusicMath/                   # Music-mathematics integration
│   └── GlobalMusicMathematics.md
├── LanguageTechnologies/              # Communication technology evolution
│   └── LanguageTechnologies.md
└── Bio-cognitive-tools-suite/         # React app: Bio-Cognitive Translator
    └── Bio-cognitive-translator/
        ├── package.json               # Project dependencies (Vite + React)
        ├── index.html                 # HTML entry point
        └── src/
            └── components/            # React components (lowercase dir)
                ├── BioCognitiveTranslator.jsx  # Main translator component
                ├── AnimalTeachers.js            # Nature teacher database
                └── HelperFunctions.js           # Utility functions
```

## Naming Conventions

- **Directories**: PascalCase or kebab-case, never spaces (e.g., `Mathematical-Mysteries/`)
- **Markdown files**: PascalCase (e.g., `MysteryFramework.md`)
- **JS/JSX files**: PascalCase for components (e.g., `BioCognitiveTranslator.jsx`)
- **Module files**: snake_case with numeric prefix (e.g., `01_patterns_waves.md`)
- **No spaces** in any file or directory names

## Content Architecture

### Nature Teachers
All teachers are defined in `Teacher-dataset.md` (master reference). The React app
in `Bio-cognitive-tools-suite/` has its own embedded copy for offline use. When adding
new teachers, update both locations.

### Teacher Types
- **Animal Teachers**: Real animals demonstrating scientific principles
- **Plant Teachers**: Plants showing mathematical/biological patterns
- **Crystal Teachers**: Minerals illustrating geometry and structure
- **Mythical Teachers**: Legendary creatures for advanced/cross-cutting concepts
- **Cryptid Teachers**: Mystery creatures for engagement

### Age Groups
All content is tiered into three levels:
- `preschool` (ages 3-5) - narrative, sensory, play-based
- `elementary` (ages 6-8) - hands-on experiments, guided discovery
- `middle` (ages 9-12) - scientific method, mathematical analysis

## Code Conventions (React App)

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS via utility classes
- **Icons**: lucide-react
- **State**: React useState (keep it simple, no external state libs)
- **Data**: All data is bundled inline for offline-first operation
- **Exports**: Use `export default` for components, named exports for utilities

### Key Equations & Constants Referenced

| Domain | Equation/Constant | Value | Used In |
|--------|-------------------|-------|---------|
| Music | Octave ratio | 2:1 frequency | GlobalMusicMathematics.md |
| Music | Perfect Fifth | 3:2 frequency ratio | GlobalMusicMathematics.md |
| Music | Golden Ratio | 1.618... | GlobalMusicMathematics.md |
| Music | Harmonic Series | 1:2:3:4:5:6... | GlobalMusicMathematics.md |
| Physics | Gravitational time dilation | GR prediction | PhysicsAdventures.md |
| Biology | DNA replication rate | 1000 bp/sec, 99.9% accuracy | AnimalTeachers.js |
| Biology | Tree O2 production | 2 people/day, 48 lbs CO2/yr | AnimalTeachers.js |
| Chemistry | Atom empty space | 99.9999999% | AnimalTeachers.js |
| Ecology | Mycorrhizal networks | Thousands of acres | AnimalTeachers.js |

All equations and scientific facts have been audited for accuracy.

## Development

```bash
cd Bio-cognitive-tools-suite/Bio-cognitive-translator
npm install
npm run dev      # Start dev server
npm run build    # Production build
```

## Contributing

1. Follow naming conventions above
2. All new content needs preschool/elementary/middle tiers
3. New nature teachers go in Teacher-dataset.md first
4. Keep the React app offline-capable (no external API calls)
5. Test markdown rendering before committing
