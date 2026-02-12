---
inProgress: true
title: PRPG
description: PRPG (Procedural RPG) is a small C++ project demonstrating procedural generation, rendering, and lightweight LLM integration for in-game behaviors. It's intended as a prototype and research playground for procedural world generation, NPC behaviors, and integration with local model runtimes.
thumbnail: https://raw.githubusercontent.com/saransh-283/prpg/refs/heads/main/screenshots/thumbnail.png
banner: https://raw.githubusercontent.com/saransh-283/prpg/refs/heads/main/screenshots/banner.png
what: PRPG is a prototype application that generates procedural roads, terrain and simple city elements, renders them with OpenGL, and experiments with local LLM integration (via `llama`/`ggml`) for NPC/dialogue behaviors.
features: [
    "Procedural road / terrain generation utilities",
    "Deferred OpenGL renderer and skybox",
    "Basic entity system including `player` and `npc` entities",
    "Asset loaders for images, glTF models and simple shaders",
    "Optional local model support using `llama` / `ggml` (model files included under `models/`)"]
planned: [
  "Improved building generation (procedural placement of building elements like windows, corners, and higher-quality models)",
  "Textured roads and terrains",
  "NPC animations, movements, and richer dialogues",
  "Improved NPC AI and dialogue pipelines",
  "More procedural city elements (traffic simulation)",
  "Save/load functionality for world state and NPC interactions",
  "Performance optimizations and better resource management"
]
technologies: [
  "C++17",
  "CMake (build system)",
  "vcpkg (dependency management)",
  "OpenGL + glad + glm (rendering)",
  "SDL2 + SDL2_ttf (windowing/input and fonts)",
  "nlohmann_json (config / serialization)",
  "llama / ggml / gguf (local model runtimes - optional)"
]
screenshots: [
  {
    src: "https://github.com/saransh-283/prpg/blob/main/screenshots/buildings.png",
    alt: "Buildings",
    label: "Buildings"
  },
  {
    src: "https://github.com/saransh-283/prpg/blob/main/screenshots/loading.png",
    alt: "Loading Screen",
    label: "Loading Screen"
  },
  {
    src: "https://github.com/saransh-283/prpg/blob/main/screenshots/map.png",
    alt: "Map",
    label: "Map"
  },
  {
    src: "https://github.com/saransh-283/prpg/blob/main/screenshots/npc.png",
    alt: "NPC with name",
    label: "NPC with name"
  }
]
link: /projects/prpg
github: https://github.com/saransh-283/prpg
tags: ['C++', 'OpenGL', 'Procedural Generation', 'LLM Integration', 'llama.cpp']
featured: true
---
