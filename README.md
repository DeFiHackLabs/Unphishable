
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

## 🧩 Contributing Challenges

We welcome contributions of new phishing challenges! Follow these steps to add a new challenge:

### Step 1: Add Challenge Data

Open the file `app/data/challenges.ts` and add a new challenge entry to the array:

```ts
{
  name: "your-challenge-name",
  difficulty: "Beginner", // or "Intermediate", "Advanced"
  title: {
    en: "Your Challenge Title",
    "zh-hant": "繁體中文標題",
    "zh-hans": "简体中文标题",
  },
  description: {
    en: "Brief description of your challenge in English.",
    "zh-hant": "繁體中文描述",
    "zh-hans": "简体中文描述",
  },
  link: "/challenges/your-challenge-name",
},
```

### Step 2: Create Challenge Directory

Create a new directory under `app/challenges/` with the same name as your challenge:

```
app/challenges/your-challenge-name/
```

### Step 3: Add Page Components

In your challenge directory, create two files:

1. `page.tsx`

```tsx
'use client';

import YourChallenge from './YourChallenge';

export default function Page() {
  return <YourChallenge />;
}
```

2. `YourChallenge.tsx`

This is the main component for your challenge. Design it to simulate the phishing scenario you want to teach:

```tsx
export default function YourChallenge() {
  // Implement your challenge UI and logic here
  return (
    <div>
      {/* Your challenge content */}
    </div>
  );
}
```

## Funding Team

DeFiHackLabs , SlowMist , ScamSniffer

## Supporters

Ethereum ESP, Geodework, Goplus

---

For questions or support, please open an issue or join our [Telegram community](https://t.me/+hBfBSw1_zIUyZTQ1).

