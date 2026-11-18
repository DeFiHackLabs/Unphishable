// Static data for the Solana delegate phishing challenge.
// Everything here is fictional: the token, the domain and every address.

export const IMG = "/images/challenges/solana-delegate-phishing";

const ADDR = {
  you: "7xKpQ2nVDemoAddressNotRea1Unphishab1eTq3Vd8w",
  yourUsdc: "Fq7mW3sBDemoAddressNotRea1Unphishab1eLw9RtE4",
  yourKstr: "3nBvH8cYDemoAddressNotRea1Unphishab1eXe5HcJ6",
  kstrMint: "KSTRa1rdDemoAddressNotRea1Unphishab1eZz8PaM2",
  site: "C1mE5gTuDemoAddressNotRea1Unphishab1eRj4LmN7",
  siteKstr: "Hw2dZ9rMDemoAddressNotRea1Unphishab1eEy6FnP8",
  delegate: "9hTzK4vRDemoAddressNotRea1Unphishab1ep2mWq4e",
};

// Hotspots are written in the artwork's own viewBox units and scaled to percentages.
interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}
interface View {
  w: number;
  h: number;
}

export const boxStyle = (box: Box, view: View) => ({
  left: `${(box.x / view.w) * 100}%`,
  top: `${(box.y / view.h) * 100}%`,
  width: `${(box.w / view.w) * 100}%`,
  height: `${(box.h / view.h) * 100}%`,
});

// claim-page.svg
export const CLAIM_VIEW: View = { w: 720, h: 450 };
export const CLAIM_BUTTON: Box = { x: 424, y: 332, w: 240, h: 44 };

// wallet-popup.svg (collapsed) and instruction-list.svg (Advanced expanded)
export const POPUP = {
  collapsed: {
    src: `${IMG}/wallet-popup.svg`,
    view: { w: 380, h: 620 },
    advanced: { x: 26, y: 414, w: 328, h: 44 },
    reject: { x: 26, y: 538, w: 158, h: 48 },
    approve: { x: 196, y: 538, w: 158, h: 48 },
  },
  expanded: {
    src: `${IMG}/instruction-list.svg`,
    view: { w: 380, h: 683 },
    advanced: { x: 26, y: 126, w: 328, h: 36 },
    reject: { x: 26, y: 609, w: 158, h: 48 },
    approve: { x: 196, y: 609, w: 158, h: 48 },
  },
};

export type NoteKey =
  | "site"
  | "you"
  | "kstrMint"
  | "siteKstr"
  | "yourKstr"
  | "kstrAmount"
  | "yourUsdc"
  | "delegate"
  | "maxAmount"
  | "lamports"
  | "memo";

export type LookupKey =
  | "site"
  | "you"
  | "kstrMint"
  | "siteKstr"
  | "yourKstr"
  | "yourUsdc"
  | "delegate";

interface Field {
  label: string;
  value: string;
  note: NoteKey;
  lookup?: LookupKey; // only addresses can be looked up
}

interface Instruction {
  program: string;
  name: string;
  box: Box; // position inside instruction-list.svg
  fields: Field[];
}

export const INSTRUCTIONS: Instruction[] = [
  {
    program: "Associated Token Program",
    name: "Create",
    box: { x: 26, y: 170, w: 328, h: 85 },
    fields: [
      { label: "Payer", value: ADDR.site, note: "site", lookup: "site" },
      { label: "Wallet", value: ADDR.you, note: "you", lookup: "you" },
      { label: "Mint", value: ADDR.kstrMint, note: "kstrMint", lookup: "kstrMint" },
    ],
  },
  {
    program: "Token Program",
    name: "Transfer",
    box: { x: 26, y: 263, w: 328, h: 85 },
    fields: [
      { label: "Source", value: ADDR.siteKstr, note: "siteKstr", lookup: "siteKstr" },
      { label: "Destination", value: ADDR.yourKstr, note: "yourKstr", lookup: "yourKstr" },
      { label: "Amount", value: "5000000000", note: "kstrAmount" },
    ],
  },
  {
    program: "Token Program",
    name: "Approve",
    box: { x: 26, y: 356, w: 328, h: 85 },
    fields: [
      { label: "Source", value: ADDR.yourUsdc, note: "yourUsdc", lookup: "yourUsdc" },
      { label: "Delegate", value: ADDR.delegate, note: "delegate", lookup: "delegate" },
      { label: "Amount", value: "18446744073709551615", note: "maxAmount" },
    ],
  },
  {
    program: "System Program",
    name: "Transfer",
    box: { x: 26, y: 449, w: 328, h: 85 },
    fields: [
      { label: "From", value: ADDR.you, note: "you", lookup: "you" },
      { label: "To", value: ADDR.site, note: "site", lookup: "site" },
      { label: "Lamports", value: "100000", note: "lamports" },
    ],
  },
  {
    program: "Memo Program",
    name: "Memo",
    box: { x: 26, y: 542, w: 328, h: 51 },
    fields: [{ label: "Data", value: "kestrel:s1:claim", note: "memo" }],
  },
];

// Round 2: the player's token accounts as an explorer would list them.
export const TOKEN_ACCOUNTS = [
  { id: "usdc", token: "USDC", balance: "12,480.00", delegate: "", delegated: "", shouldRevoke: false },
  {
    id: "usdt",
    token: "USDT",
    balance: "3,150.00",
    delegate: "4mNpS6yADemoAddressNotRea1Unphishab1eGk3QbU9",
    delegated: "18,446,744,073,709.551615",
    shouldRevoke: true,
  },
  {
    id: "moss",
    token: "MOSS",
    balance: "240,000",
    delegate: "Bk8sJ2fCDemoAddressNotRea1Unphishab1eVn7XdT5",
    delegated: "240,000",
    shouldRevoke: true,
  },
  {
    id: "nft",
    token: "Pixel Otter #218",
    balance: "1",
    delegate: "MktPdaE7DemoAddressNotRea1Unphishab1eHs6YrK3",
    delegated: "1",
    shouldRevoke: false,
  },
] as const;
