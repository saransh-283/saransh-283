---
inProgress: false
title: 3DMGV
description: "A Linux-first toolchain to convert videos into textured 3D models using OpenMVG, OpenMVS, and Python automation scripts."
thumbnail: https://raw.githubusercontent.com/saransh-283/3d-MGV/refs/heads/main/screenshots/thumbnail.png
banner: https://raw.githubusercontent.com/saransh-283/3d-MGV/refs/heads/main/screenshots/banner.png
what: "3DMGV automates a video-to-3D workflow: extract frames, run Structure-from-Motion (OpenMVG) to estimate cameras and a sparse point cloud, then densify and reconstruct textured meshes with OpenMVS."
features:
  - Extract frames from videos (frame sampling + optional background removal)
  - Structure-from-Motion pipeline (OpenMVG) for camera estimation and sparse reconstruction
  - Multi-View Stereo (OpenMVS) for densification, mesh reconstruction, and texturing
  - Python runner that orchestrates the end-to-end workflow and utility scripts
planned: [
  "Make background removal optional in the pipeline",
  "Add parameter presets for quality vs speed",
  "Improve robustness for low-quality / variable frame-rate videos",
  "Better output organization and cleanup"
]
technologies: [
  "Python 3",
  "OpenMVG (SfM)",
  "OpenMVS (MVS / mesh / textures)",
  "OpenCV",
  "rembg"
]
screenshots: [
  { src: "https://raw.githubusercontent.com/saransh-283/3d-MGV/refs/heads/main/screenshots/console.png", alt: "Console output", label: "Console output" },
  { src: "https://raw.githubusercontent.com/saransh-283/3d-MGV/refs/heads/main/screenshots/warehouse.png", alt: "Warehouse sample", label: "Warehouse sample" },
  { src: "https://raw.githubusercontent.com/saransh-283/3d-MGV/refs/heads/main/screenshots/dice.png", alt: "Dice sample", label: "Dice sample" },
  { src: "https://raw.githubusercontent.com/saransh-283/3d-MGV/refs/heads/main/screenshots/skull.png", alt: "Skull sample", label: "Skull sample" }
]
link: /projects/3d-mgv
github: https://github.com/saransh-283/3d-MGV
tags: ['Python', 'OpenMVG', 'OpenMVS', 'OpenCV', '3D']
featured: false
---
