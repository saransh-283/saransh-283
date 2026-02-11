---
inProgress: true
title: INRT
description: INRT is a Solana + Flutter prototype that bootstraps a local test validator and a demo client workflow, including airdrops and SPL token minting for rapid iteration on on-chain + app interactions.
what: INRT provides a "one command" local Solana environment initializer (validator + funded signer + minted SPL token) and a Flutter desktop client that can read the generated token mint configuration for development/testing.
features: [
  "One-command local ledger initialization via ledger_initializer.sh",
  "Starts a local solana-test-validator and configures Solana CLI to use it",
  "Airdrops SOL to the configured signer for testing",
  "Mints an SPL token and wires the mint address into the Flutter app constants",
  "Flutter desktop app scaffold for interacting with the local test setup"
]
planned: [
  "Build and deploy on-chain programs as part of the initializer script",
  "End-to-end flows that exercise the program(s) from the Flutter client",
  "Improved configuration management (multiple clusters / keypairs)",
  "Better developer UX: logs, status UI, and reset/reseed tooling"
]
technologies: [
  "Dart + Flutter (desktop client)",
  "Solana CLI + solana-test-validator (local chain)",
  "SPL Token (minting/testing)",
  "Rust (programs / on-chain components)",
  "Bash scripting (automation)"
]
screenshots: []
link: /projects/inrt
github: https://github.com/saransh-283/inrt
tags: ['Solana', 'Flutter', 'Dart', 'Rust', 'SPL Token', 'Web3']
featured: true
---
