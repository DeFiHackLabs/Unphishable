# 🧩 Contributing Challenges
We welcome contributions of new phishing challenges! Follow these steps to add a new challenge:

### Languages: [English](#-getting-started) [中文简体](#如何新增挑战challenge--中文简体) [中文繁體](#如何新增挑戰challenge--中文繁體)

---

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

### Step 0: Fork the Project and Create a Branch (e.g., `your-challenge-name`)

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

---

For questions or support, please open an issue or join our [Telegram community](https://t.me/+hBfBSw1_zIUyZTQ1).

---

# 如何新增挑战（Challenge）- 中文简体

本文将教你如何在专案中新增一个挑战（challenge）。我们将以 `airdrop-scam` 作为范例进行说明。

---

## 📌 步骤 0：fork 专案并开新分支 (ex: `airdrop-scam`)

## 📌 步骤 1：新增挑战资料

开启档案：`app/data/challenges.ts`
在阵列中新增一笔挑战资料，例如：

```ts
{
name: "airdrop-scam",
difficulty: "Beginner",
title: {
en: "Airdrop Scam",
"zh-hant": "空投诈骗",
"zh-hans": "空投诈骗",
},
description: {
en: "Experience how fake airdrops can trick users into sending ETH to malicious contracts under the guise of claiming tokens.",
"zh-hant": "体验假空投如何欺骗用户在声称领取代币的幌子下向恶意合约发送 ETH。",
"zh-hans": "体验假空投如何欺骗用户在声称领取代币的幌子下向恶意合约发送 ETH。",
},
link: "/challenges/airdrop-scam",
},
```

---

## 📢 步骤 2：告知相关人员新增 challenges 料表资料

此步骤非常重要，需要联络后端或资料库管理人员，请他们在资料库的 challenges 表格中新增对应的记录。

需要提供的资讯：

- 挑战名称（challenge name，例如：airdrop-scam）
- 挑战标题（各语言版本）
- 挑战描述（各语言版本）
- 难度等级（beginner/intermediate/advanced）

联络方式：

可透过专案管理系统建立任务
或直接联系资料库维护人员（建议附上明确的资料格式）

---

## 📁 步骤 3：建立挑战资料夹

在 `app/challenges/` 资料夹下，建立一个与挑战名称相同的子资料夹。
例如：`app/challenges/airdrop-scam/`

---

## 🧱 步骤 4：新增页面元件

在你刚建立的 `airdrop-scam` 资料夹中，建立以下两个档案：

### 1. `page.tsx`

用来注册该挑战的页面。

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

这是挑战的主画面元件。你可以自行设计内容与样式：

```tsx
export default function AirdropScam() {
return <div>AirdropScam</div>;
}
```
你也可以使用 Tailwind CSS 或其他工具来设计这个画面。

---

## ✅ 完成！

只要完成以上 3 个步骤，你就成功新增了一个挑战 🎉

## 关于 i18n
如果你需要在挑战中使用多国语言，请参考 `app/i18n/locales` 档案。
在 `app/i18n/locales` 档案中，你可以看到所有支援的语言。
例如：`en.ts`, `zh-hant.ts`, `zh-hans.ts`
`airdropScam: {}` 是 `airdrop-scam` 挑战的翻译。

记得 Commit 并发 PR，让我们能 review 你的挑战内容！

如有任何问题或需要支援，请建立 Issue 或加入我们的 Telegram 社群 [Telegram community](https://t.me/+hBfBSw1_zIUyZTQ1).

---

# 如何新增挑戰（Challenge）- 中文繁體

本文將教你如何在專案中新增一個挑戰（challenge）。我們將以 `airdrop-scam` 作為範例進行說明。

---

## 📌 步骤 0：fork 專案並且開新的分支 (ex: `airdrop-scam`)

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
