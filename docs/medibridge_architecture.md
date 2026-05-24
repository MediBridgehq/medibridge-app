# MediBridge · System Architecture
**AI Integration Blueprint** — Claude API via Supabase Edge Functions · MVP

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────┐
│                  CLIENT LAYER                   │
│                                                 │
│   📱  React Native + Expo                       │
│       iOS / Android / Web                       │
└─────────────────────┬───────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│                 SUPABASE LAYER                  │
│                                                 │
│  🔐 Supabase Auth    🗄️ Postgres DB    📦 Storage │
│  JWT / Session       User, Provider,   Docs /   │
│                      Insurance         Assets   │
└─────────────────────┬───────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│             EDGE FUNCTIONS LAYER                │
│                                                 │
│  🧭 onboarding-assistant                        │
│     Guided profile setup flow                   │
│                                                 │
│  🔍 provider-match                              │
│     AI matching from profile data               │
│                                                 │
│  💬 chat-assistant                              │
│     In-app Q&A assistant                        │
└─────────────────────┬───────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│               CLAUDE API LAYER                  │
│                                                 │
│  ⚡ Claude API                🎛️ Anthropic Console │
│  claude-sonnet-4-20250514     Keys · Limits ·   │
│                               Monitoring        │
└─────────────────────────────────────────────────┘
```

---

## Data Flow

| # | Step |
|---|------|
| 1 | React Native → Supabase Edge Function (authenticated request) |
| 2 | Edge Function → Claude API (server-side, key never exposed) |
| 3 | Claude → Edge Function (streaming or full response) |
| 4 | Edge Function → React Native (formatted response) |
| 5 | Usage automatically tracked in Anthropic Console |

---

## Edge Function Details

### 🧭 `supabase/functions/onboarding-assistant/index.ts`

| | |
|---|---|
| **Trigger** | User completes signup → hits profile setup screen |
| **Purpose** | Claude guides user through health history, insurance, and preference entry with contextual prompts |
| **Prompt Strategy** | System prompt includes profile schema. Claude asks targeted follow-up questions and returns structured JSON to populate the DB. |
| **HIPAA Note** | No PHI in prompt at this stage — only preference/insurance category data |

### 🔍 `supabase/functions/provider-match/index.ts`

| | |
|---|---|
| **Trigger** | User requests provider recommendations |
| **Purpose** | Claude receives anonymized profile summary and returns ranked provider suggestions with reasoning |
| **Prompt Strategy** | System prompt includes available providers from DB. Claude ranks and explains matches based on specialty, insurance, location, and preferences. |
| **HIPAA Note** | De-identify before sending. Pass insurance type + specialty need, not full patient record. |

### 💬 `supabase/functions/chat-assistant/index.ts`

| | |
|---|---|
| **Trigger** | User opens in-app assistant |
| **Purpose** | General Q&A about their care, app navigation, appointment prep |
| **Prompt Strategy** | System prompt scopes Claude to MediBridge context only. Stateless per session for MVP. |
| **HIPAA Note** | Do not pass raw health history. Scope strictly to app navigation + general health questions. |

---

## Secret Setup (one-time)

Store your Claude API key in **Supabase Dashboard → Settings → Edge Functions → Secrets**

```
ANTHROPIC_API_KEY=sk-ant-...
```

> Never hardcode, never expose to client.
