# Allen Kurian Thomas — Portfolio

Personal portfolio website built with **React + Vite + TypeScript**, hosted on **Firebase Hosting**.

---

## 🚀 Running the Local Dev Server

1. **Install dependencies** (only needed once, or after pulling new changes):

   ```bash
   npm install
   ```

2. **Start the dev server:**

   ```bash
   npm run dev
   ```

3. Open your browser and go to **http://localhost:5173**

   The server supports **Hot Module Replacement (HMR)** — changes you save are reflected instantly in the browser without a full reload.

4. **To stop the server**, press `Ctrl + C` in the terminal.

---

## 🔥 Building & Deploying to Firebase

### Step 1 — Build the production bundle

```bash
npm run build
```

This compiles and optimises the project into the `build/` folder.

### Step 2 — Deploy to Firebase Hosting

```bash
firebase deploy
```

This pushes the contents of `build/` to Firebase and gives you a live URL.

> **Firebase project:** `allenkurianthomas-b846f`  
> **Live URL:** https://allenkurianthomas.web.app

---

### One-liner (build + deploy together)

```bash
npm run build && firebase deploy
```

---

## 📋 Other Useful Commands

| Command                                   | Description                           |
| ----------------------------------------- | ------------------------------------- |
| `npm run dev`                             | Start local dev server                |
| `npm run build`                           | Build for production                  |
| `npm run preview`                         | Preview the production build locally  |
| `firebase deploy`                         | Deploy latest build to Firebase       |
| `firebase hosting:channel:deploy preview` | Deploy to a temporary preview channel |

---

## 🛠 Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Firebase Hosting](https://firebase.google.com/docs/hosting) — deployment
