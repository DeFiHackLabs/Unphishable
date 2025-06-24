
# Unphishable - Interactive Web3 Anti-Phishing Training Platform

## 🌐 Project Introduction

Unphishable is an interactive educational platform designed to train users on identifying and avoiding Web3 phishing attacks. Through hands-on challenges that simulate real-world phishing scenarios, users can safely experience and learn to recognize various phishing techniques used by attackers in the Web3 space.

The platform features:
- 30+ interactive phishing challenges across different difficulty levels (Beginner, Intermediate, Advanced)
- Multilingual support (English, Traditional Chinese, Simplified Chinese)
- Simulations of common Web3 phishing attacks including:
  - Seed phrase scams
  - Token approval phishing
  - Airdrop scams
  - Clipboard hijacking
  - Punycode domain attacks
  - And many more advanced attack vectors

By completing these challenges, users develop practical skills to protect their digital assets in the Web3 ecosystem.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/DeFiHackLabs/Unphishable.git
cd Unphishable/

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🌐 Internationalization (i18n)

Unphishable supports multiple languages to make the platform accessible to a wider audience. Currently, the following languages are supported:

- English (en)
- Traditional Chinese (zh-hant)
- Simplified Chinese (zh-hans)

### Adding Translations

Translations are managed in the `app/i18n/locales/` directory with separate files for each supported language:

- `en.ts` - English translations
- `zh-hant.ts` - Traditional Chinese translations
- `zh-hans.ts` - Simplified Chinese translations

When adding new content or challenges, make sure to update all language files to maintain full multilingual support.

### Translation Structure

Each challenge should include translations for at least:
- Title
- Description
- UI elements and instructions

Example translation entry:

```ts
export default {
  challengeName: {
    title: "Challenge Title",
    subtitle: "Challenge Subtitle",
    description: "Detailed description of the challenge",
    // Other UI elements...
  },
  // Other challenges...
}
```

## 🧩 [Contributing Challenges](./Contribution.md) 

## Funding Team

<p align="center">
  <a href="https://defihacklabs.io">
    <img src="https://github.com/user-attachments/assets/010f6e9c-7ab6-4e7a-a8e3-4e95494564b5" height="60" alt="DeFiHackLabs"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://scamsniffer.io">
    <img src="https://github.com/user-attachments/assets/8cd9b75c-c9f6-4005-9d6a-a1490dcef832" height="60" alt="ScamSniffer"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://slowmist.com">
    <img src="https://github.com/user-attachments/assets/bf86a8cd-2d01-4175-8246-1ed15d09372d" height="70" alt="SlowMist"/>
  </a>
</p>


## Supporters
<p align="center">
  <a href="https://esp.ethereum.foundation">
    <img src="https://github.com/user-attachments/assets/27d003a4-05e7-49f4-a4b7-d3f1428f6984" height="60" alt="EF ESP Logo"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://geodework.com/">
    <img src="https://github.com/user-attachments/assets/7979d0d3-7977-4474-acd1-717f55729fbf" height="60" alt="Unphishable Logo"/>
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://gopluslabs.io/">
    <img src="https://github.com/user-attachments/assets/d86be163-2d31-4ead-bb68-5d1bd56d87ab" height="50" alt="Goplus Horizontal Logo"/>
  </a>
</p>



---

For questions or support, please open an issue or join our [Telegram community](https://t.me/+hBfBSw1_zIUyZTQ1).

