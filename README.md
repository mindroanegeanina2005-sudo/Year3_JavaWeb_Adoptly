# Adoptly

Animal shelter website with a fast personality quiz that suggests the best-suited animal.
University software systems design project, team of 3.

## Project description

Adoptly lets guests browse pets and take a 2-minute personality quiz. Adopters can
register, save their quiz result, and request a meeting for a pet. Shelter admins manage
listings and answer meeting requests. Registration and request-status emails are sent
automatically.

Actors: Guest, Adopter, Shelter Admin.

## Run it from zero

These steps assume a brand-new computer and that you already have the project folder.

### 1. Install Node.js

Download the **LTS** version from https://nodejs.org and install it with the default options. npm comes with it. You need Node 22 or newer (minimum 20.19).

Close and reopen your terminal, then check:

```
node -v
npm -v
```

Both should print a version number. If you get "command not found", restart the computer and try again.

### 2. Install dependencies

Open a terminal in the project folder and run:

```
npm install
```

This downloads everything into `node_modules/` (takes a minute; never commit that folder).
An `install-scripts` warning about `protobufjs` and `@firebase/util` is expected and harmless.

### 3. Add the Firebase config

Copy the template to `.env.local` in the project root (next to `package.json`):

```
Copy-Item .env.example .env.local    # PowerShell
cp .env.example .env.local           # Git Bash / macOS / Linux
```

Fill in the values Member 1 sent you privately (no quotes). **Never commit `.env.local`** (git already ignores it).

### 4. Run it

```
npm run dev
```

Open the `Local:` address it prints (usually http://localhost:5173). Press `Ctrl+C` in the terminal to stop.
The home page should show **"Firestore: connected ✔"** (dev mode only).
If you change `.env.local`, stop and restart `npm run dev`.

### Other commands

```
npm run build     # production build into dist/
npm run preview   # serve the dist/ build locally
npm run lint      # check the code with oxlint
npm test          # unit tests (vitest)
```

### Common problems

- **`npm` or `node` not found:** reopen the terminal (or restart) after installing Node.
- **Vite says your Node version is unsupported:** install the current LTS from nodejs.org.
- **Port 5173 already in use:** another dev server is running; stop it, or use the new port Vite prints.
- **PowerShell says running scripts is disabled:** run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, or use another terminal (e.g. Git Bash, cmd).
- **Console says `[firebase] Missing config values`:** `.env.local` is missing, misnamed (e.g. `.env.local.txt`) or has empty values. Fix it and restart `npm run dev`.
- **"Firestore: ERROR ✖ · permission-denied":** the Firestore test-mode rules expired. In the Firebase console → Firestore → Rules, move the date in `timestamp.date(...)` forward and click Publish.

## Current state

The app shell is done; most pages are placeholders to replace.

- **Firebase:** set up once in `src/shared/firebase.js`. Import from there: `import { auth, db, storage } from '../shared/firebase'`. Firestore is in test mode. **Storage is not enabled yet** (needs the Blaze plan), so image uploads don't work.
- **Login is a mock.** `useAuth()` from `src/shared/AuthContext` returns `{ user, profile, role, loading, login, register, logout }`. Switch guest / adopter / admin with the dev toggle in the footer. Mock uids: `test-adopter-1`, `test-admin-1`. Real Firebase login will replace it with the same API.
- **Routes** are in `src/App.jsx`. Pages are grouped by feature:

| Folder | Built by | Routes |
|---|---|---|
| `src/shared/`, `src/auth/`, `src/quiz/`, `src/App.jsx` | Member 1 | `/`, `/login`, `/register`, `/profile`, `/quiz`, `/quiz/result` |
| `src/catalog/` | Member 2 | `/pets`, `/pets/:petId`, `/species`, `/my-requests` |
| `src/admin/` | Member 3 | `/admin/*` (add nested routes inside `AdminPage.jsx`) |

Everyone can change any file, including routes (`src/App.jsx`) and nav links (`src/shared/Layout.jsx`). Overwrite placeholders when you build the real page.
