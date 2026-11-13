# Sundus Asif — Executive Portfolio

A React and Vite portfolio with a portrait-led design, a selectable impact display, an interactive career route, and keyboard-accessible experience tabs. The professional details and LinkedIn URL come from Sundus’s CV. The portrait is the supplied photograph.

## Run locally

Use Node.js 20 or newer. Open a terminal in the extracted folder and run:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
```

Deploy the generated `dist` folder to a static host.

The profile links, experience, and credentials are in `src/App.jsx`. The impact figures and career route are in `src/Visuals.jsx`. The portrait and icons ship with the project. Animations respect the visitor’s reduced-motion setting.
