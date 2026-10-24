export type SupportMethod = {
  id: string;
  label: string;
  note: string;
  href?: string;
  address?: string;
  network?: string;
  kind: "link" | "address";
  disabled?: boolean;
  comingSoon?: string;
};

/**
 * All support methods live here.
 * TODO(dev): replace the placeholder values with real links/addresses
 * before deploying - the site currently points at fake values.
 */
export const supportMethods: SupportMethod[] = [
  {
    id: "payu",
    kind: "link",
    label: "PayU",
    note: "UPI / cards / netbanking - best for India (₹)",
    href: "https://u.payu.in/ArQ2xq2Vsbg6",
  },
  {
    id: "paypal",
    kind: "link",
    label: "PayPal",
    note: "Works internationally",
    href: "https://paypal.me/SarK283",
    disabled: true,
    comingSoon: "Coming soon",
  },
  {
    id: "btc",
    kind: "address",
    label: "Bitcoin",
    note: "BTC mainnet",
    address: "bc1q5xg8ygez6jnft4t2n28wyf0mzthufcuq7lncy9",
  },
  {
    id: "eth",
    kind: "address",
    label: "Ethereum",
    note: "ETH / ERC-20",
    address: "0xc5D35c32Ae13804DdddD28d4C0A7F9Ce15a464e2",
  },
  {
    id: "sol",
    kind: "address",
    label: "Solana",
    note: "SOL / SPL tokens",
    address: "2zF8oSjCRxmj2gLxTiXMN7QCGsYQCWvcLjg2VbT6SBkq",
  },
];
