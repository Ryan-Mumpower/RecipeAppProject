# Recipe App Project

This workspace contains a minimal React recipe app (Vite) scaffolded with components for listing, viewing, adding, and searching recipes. The code was generated as a demonstration of using VS Code + GitHub Copilot to speed development.

Getting started
 1. Install dependencies:

```powershell
npm install
```

2. Run the dev server:

```powershell
npm run dev
```

3. Open the app in your browser at `http://localhost:5173` (Vite default).

Quick notes:
- Files to inspect: [src/App.jsx](src/App.jsx), [src/components/RecipeList.jsx](src/components/RecipeList.jsx), [src/components/RecipeDetail.jsx](src/components/RecipeDetail.jsx), [src/components/AddRecipe.jsx](src/components/AddRecipe.jsx), [src/components/SearchBar.jsx](src/components/SearchBar.jsx), [src/data/sampleRecipes.js](src/data/sampleRecipes.js)
- To create the repo locally and push to GitHub:

```powershell
git init
git add .
git commit -m "Initial recipe app scaffold"
gh repo create <your-username>/recipe-app --public --source=. --remote=origin
git push -u origin main
```

If you prefer to scaffold using `npx` directly, you can instead run `npx create-vite@latest recipe-app --template react` then copy or adapt these files into that project.