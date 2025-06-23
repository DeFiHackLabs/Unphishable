
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


# 如何新增挑戰（Challenge）

本文將教你如何在專案中新增一個挑戰（challenge）。我們將以 `airdrop-scam` 作為範例進行說明。

---

## 📌 步驟 1：新增挑戰資料

開啟檔案：`app/data/challenges.ts`
在陣列中新增一筆挑戰資料，例如：

```ts
{
  name: "airdrop-scam",
  difficulty: "Beginner",
  title: {
    en: "Airdrop Scam",
    "zh-hant": "空投詐騙",
    "zh-hans": "空投诈骗",
  },
  description: {
    en: "Experience how fake airdrops can trick users into sending ETH to malicious contracts under the guise of claiming tokens.",
    "zh-hant": "體驗假空投如何欺騙用戶在聲稱領取代幣的幌子下向惡意合約發送 ETH。",
    "zh-hans": "体验假空投如何欺骗用户在声称领取代币的幌子下向恶意合约发送 ETH。",
  },
  link: "/challenges/airdrop-scam",
},
```

---

## 📢 步驟 2：告知相關人員新增 challenges 料表資料

此步驟非常重要，需要聯絡後端或資料庫管理人員，請他們在資料庫的 challenges 表格中新增對應的記錄。

需要提供的資訊：

- 挑戰名稱（challenge name，例如：airdrop-scam）
- 挑戰標題（各語言版本）
- 挑戰描述（各語言版本）
- 難度等級（beginner/intermediate/advanced）

聯絡方式：

可透過專案管理系統建立任務
或直接聯繫資料庫維護人員（建議附上明確的資料格式）

---

## 📁 步驟 3：建立挑戰資料夾

在 `app/challenges/` 資料夾下，建立一個與挑戰名稱相同的子資料夾。  
例如：`app/challenges/airdrop-scam/`

---

## 🧱 步驟 4：新增頁面元件

在你剛建立的 `airdrop-scam` 資料夾中，建立以下兩個檔案：

### 1. `page.tsx`

用來註冊該挑戰的頁面。

```tsx
'use client';

import AirdropScam from './AirdropScam';
import DynamicMetadata from '@/app/components/DynamicMetadata';

export default function Page() {
  return (
    <>
      // airdrop-scam 要和 `app/data/challenges.ts` name: "airdrop-scam", 一致
      <DynamicMetadata pageKey="airdrop-scam" />
      <AirdropScam />;
    </>
  )

}

```

---

### 2. `AirdropScam.tsx`

這是挑戰的主畫面元件。你可以自行設計內容與樣式：

```tsx
export default function AirdropScam() {
  return <div>AirdropScam</div>;
}
```
你也可以使用 Tailwind CSS 或其他工具來設計這個畫面。

---

## ✅ 完成！

只要完成以上 3 個步驟，你就成功新增了一個挑戰 🎉

## 關於 i18n
如果你需要在挑戰中使用多國語言，請參考 `app/i18n/locales` 檔案。
在 `app/i18n/locales` 檔案中，你可以看到所有支援的語言。
例如：`en.ts`, `zh-hant.ts`, `zh-hans.ts`
`airdropScam: {}` 是 `airdrop-scam` 挑戰的翻譯。

記得 Commit 並發 PR，讓我們能 review 你的挑戰內容！

如有任何問題或需要支援，請建立 Issue 或加入我們的 Telegram 社群 [Telegram community](https://t.me/+hBfBSw1_zIUyZTQ1).
