export interface Transaction {
  hash: string;
  method: string;
  age: string;
  from: string;
  to: string;
  amount: string;
  type: "in" | "out";
  toAddress?: string;
  fromAddress?: string;
  gas?: number;
}

export const REAL_ADDRESS = "0x1234ab7890123456781232345678901234567890";
export const FAKE_ADDRESS = "0x1234ab789012345678abc2345678901234567890";

export const transactions: Transaction[] = [
  {
    hash: "0xac0137d0808d",
    method: "Transfer",
    age: "6 hours ago",
    from: REAL_ADDRESS,
    to: "0xE18f24Bb789012345678901234567890f643c72e",
    amount: "50 USDT",
    type: "out",
    fromAddress: REAL_ADDRESS,
    toAddress: "0xE18f24Bb789012345678901234567890f643c72e",
    gas: 21000,
  },
  {
    hash: "0x21fd4c85160d",
    method: "TransferFrom",
    age: "12 hours ago",
    from: "0xe18f24bb789012345678901234567890f643C72e",
    to: FAKE_ADDRESS,
    amount: "0 USDT",
    type: "in",
    fromAddress: "0xe18f24bb789012345678901234567890f643C72e",
    toAddress: FAKE_ADDRESS,
    gas: 41000,
  },
  {
    hash: "0x7b9d2e8f4a01",
    method: "TransferFrom",
    age: "1 days ago",
    from: "0xe18f24bb789012345678901234567890f643C72e",
    to: FAKE_ADDRESS,
    amount: "0 USDT",
    type: "in",
    fromAddress: "0xe18f24bb789012345678901234567890f643C72e",
    toAddress: FAKE_ADDRESS,
    gas: 41000,
  },
  {
    hash: "0x3e5f9c2d8b6a",
    method: "Transfer",
    age: "2 days ago",
    from: REAL_ADDRESS,
    to: "0xE18f24Bb789012345678901234567890f643c72e",
    amount: "50 USDT",
    type: "out",
    fromAddress: REAL_ADDRESS,
    toAddress: "0xE18f24Bb789012345678901234567890f643c72e",
    gas: 21000,
  },
];
