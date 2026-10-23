export type SupportMethod = {
	id: string;
	label: string;
	note: string;
	href?: string;
	address?: string;
	network?: string;
	kind: "link" | "address";
};

/**
 * All support methods live here.
 * TODO(dev): replace the placeholder values with real links/addresses
 * before deploying — the site currently points at fake values.
 */
export const supportMethods: SupportMethod[] = [
	{
		id: "payu",
		kind: "link",
		label: "PayU",
		note: "UPI / cards / netbanking — best for India (₹)",
		href: "https://pmny.in/REPLACE_ME",
	},
	{
		id: "paypal",
		kind: "link",
		label: "PayPal",
		note: "Works internationally",
		href: "https://paypal.me/SarK283",
	},
	{
		id: "sol",
		kind: "address",
		label: "Solana",
		note: "SOL / SPL tokens",
		address: "SOLWALLETADDRESSHERE000000000000000000000",
	},
	{
		id: "eth",
		kind: "address",
		label: "Ethereum",
		note: "ETH / ERC-20",
		address: "0x0000000000000000000000000000000000000000",
	},
	{
		id: "btc",
		kind: "address",
		label: "Bitcoin",
		note: "BTC mainnet",
		address: "bc1q00000000000000000000000000000000000000",
	},
];
