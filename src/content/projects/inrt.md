---
inProgress: true
title: INRT
description: "A Solana-based, blockchain-first banking prototype with a Flutter desktop client and on-chain programs for identity uniqueness and fixed deposits."
thumbnail: https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/thumbnail.png
banner: https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/banner.png
what: "INRT is a decentralized banking-style application built on Solana. Instead of using a traditional database, it treats the blockchain as the ledger: users interact via wallets, PDAs, and associated token accounts (ATAs) to manage balances and account-like sub-wallets (savings/current/FD/RD)."
features:
    - Wallet creation and login using mnemonic phrases (HD wallet concepts)
    - Sub-wallet/account-style structure (PDA + ATAs) for separating balances
    - Send / receive INRT SPL tokens
    - Fixed Deposit (FD) program scaffolding (on-chain) and UI flows
    - Local validator workflow and one-command initializer script
planned: [
    "Stronger recovery and identity workflows (e.g., biometric-based key derivation)",
    "Hardened security model for secrets and recovery",
    "Mainnet-ready deployment + production-grade program audits",
    "Rebuild + deploy pipeline for programs and expanded tests"
]
technologies: [
    "Flutter / Dart (client)",
    "Solana (local validator + RPC)",
    "SPL Token + Associated Token Accounts (ATAs)",
    "Rust (Solana programs / Anchor)",
    "Bash scripting (automation)"
]
screenshots: [
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/splash.png",
        alt: "Splash",
        label: "Splash"
    },
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/signup_form.png",
        alt: "Signup Form",
        label: "Signup Form"
    },
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/signup_success.png",
        alt: "Signup Success",
        label: "Signup Success"
    },
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/login.png",
        alt: "Login",
        label: "Login"
    },
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/new_wallet.png",
        alt: "New Wallet",
        label: "New Wallet"
    },
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/send.png",
        alt: "Send",
        label: "Send"
    },
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/receive.png",
        alt: "Receive",
        label: "Receive"
    },
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/create_account.png",
        alt: "Create Account",
        label: "Create Account"
    },
    {
        src: "https://raw.githubusercontent.com/saransh-283/inrt/refs/heads/main/screenshots/account.png",
        alt: "Account View",
        label: "Account"
    }
]
link: /projects/inrt
github: https://github.com/saransh-283/inrt
tags: ['Solana', 'Flutter', 'Dart', 'Rust', 'SPL Token', 'Web3']
featured: true
---
