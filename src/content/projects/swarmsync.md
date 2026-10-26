---
inProgress: true
title: SwarmSync
description: SwarmSync is an open-source, peer-to-peer synchronization platform for local-network devices, built around a reusable .NET library (SwarmSync.Core) that lets developers create custom daemons, CLIs, desktop, and mobile apps without vendor lock-in.
thumbnail: https://raw.githubusercontent.com/saransh-283/swarmsync/refs/heads/main/screenshots/thumbnail.png
banner: https://raw.githubusercontent.com/saransh-283/swarmsync/refs/heads/main/screenshots/banner.png
what: "SwarmSync is an open-source, peer-to-peer synchronization platform designed for devices connected over a local network. Its core is a reusable .NET library (SwarmSync.Core) that provides the fundamental functionality developers need to build their own SwarmSync-compatible applications. The project is Core-first and implementation-agnostic: developers can use the library to build custom daemons, command-line tools, desktop applications, and mobile apps without being forced to use any official client or daemon."
features:
  - "Reusable .NET 9 core library (SwarmSync.Core) with synchronization logic and protocol functions"
  - "Background daemon (SwarmSync.Daemon) with REST API for peer discovery and sync management"
  - "Command-line interface (SwarmSync.Cli) for device listing and interaction"
  - "Cross-platform desktop GUI scaffold using Avalonia (SwarmSync.Desktop)"
  - "Android app scaffold (SwarmSync.Android)"
  - "Local-network peer discovery and basic device enumeration"
  - "Core-first, implementation-agnostic architecture — build custom clients without vendor lock-in"
planned:
  - "Full synchronization protocol implementation (file transfer, conflict resolution, delta sync)"
  - "Security features (encryption, authentication, access control)"
  - "Selective syncing (choose specific files/folders to synchronize)"
  - "Remote-configured directory access controls (file browsing restricted to allowed directories set by remote peer)"
  - "Complete Avalonia desktop application with real-time sync UI"
  - "Complete Android mobile application"
  - "Daemon persistence and auto-start integration"
  - "Cross-platform installers and distribution packaging"
technologies:
  - ".NET 9"
  - "C#"
  - "ASP.NET Core (Daemon web API)"
  - "Avalonia (Desktop GUI)"
  - "Android (Mobile scaffold)"
  - "CMake / MSBuild (via .NET SDK)"
screenshots: []
link: /projects/swarmsync
github: https://github.com/saransh-283/swarmsync
tags: ['.NET', 'C#', 'Avalonia', 'P2P', 'Local Network', 'Sync', 'Desktop App', 'Mobile']
featured: false
---