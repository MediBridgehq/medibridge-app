# MediBridge App

MediBridge is an AI-powered healthcare platform that connects patients with providers through smart matching, onboarding, and in-app chat.

---

## Tech Stack

- [Expo](https://expo.dev) (v54) with Expo Router
- React Native 0.81 + React 19
- TypeScript
- Supabase (backend + database)

---

## Prerequisites

Before running the app, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v18 or higher)
- [npm](https://www.npmjs.com) (comes with Node)
- [Expo Go](https://expo.dev/go) app on your phone (iOS or Android)

---

## VS Code Setup

Install the recommended extension when prompted, or search for it manually:

| Extension | ID |
|---|---|
| Expo Tools | `expo.vscode-expo-tools` |

VS Code is also configured to auto-fix lint errors and organize imports on save — no extra setup needed.

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/MediBridgehq/medibridge-app.git
cd medibridge-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project:

```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> Ask the team lead for the Supabase credentials. Never commit this file — it's already in `.gitignore`.

### 4. Start the dev server

```bash
npm start
```

This opens the Expo dev menu. From there:

- Press **`i`** to open on iOS simulator
- Press **`a`** to open on Android emulator
- Scan the **QR code** with Expo Go on your phone to run it on a real device

---

## Available Commands

| Command | What it does |
|---|---|
| `npm start` | Start the Expo dev server |
| `npm run ios` | Open directly in iOS simulator |
| `npm run android` | Open directly in Android emulator |
| `npm run web` | Open in browser |
| `npm run lint` | Run the linter |

---

## Project Structure

```
medibridge-app/
├── app/              # Screens and routing (Expo Router)
│   ├── _layout.tsx   # Root layout
│   └── index.tsx     # Entry screen
├── assets/           # Images, fonts, icons
├── lib/              # Shared utilities and Supabase client
├── docs/             # Architecture and technical docs
└── .vscode/          # Shared editor settings
```

---

## Environment

This project uses `EXPO_PUBLIC_` prefixed environment variables for Supabase. These are safe to read client-side but the actual values should never be committed to the repo.
