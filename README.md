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

### 3. Run it

```
npm run dev
```

Open the `Local:` address it prints (usually http://localhost:5173). Press `Ctrl+C` in the terminal to stop.

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
