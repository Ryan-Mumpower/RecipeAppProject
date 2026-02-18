# Recipe App Project — Static (Node-free)

This workspace now contains a Node-free static recipe app implemented with plain JavaScript and CSS. The previous React/Vite scaffold was removed to avoid confusion.

Quick start (no Node required)
- Open `index.html` directly in your browser, or use the VS Code Live Server extension and open `index.html`.
- Static app files:
	- [index.html](index.html)
	- [static/app.js](static/app.js)
	- [static/styles.css](static/styles.css)

Notes
- Recipes are stored in `localStorage` when you add new ones so they persist between reloads in the same browser.
- If you want a build/dev workflow later, you can reintroduce a React/Vite scaffold or use `npx create-vite@latest` and move these files into that project.

To create a Git repository and push to GitHub:

```powershell
git init
git add .
git commit -m "Static recipe app (no Node)"
gh repo create <your-username>/recipe-app --public --source=. --remote=origin
git push -u origin main
```

If you want me to remove any remaining files or initialize the git repo for you, tell me and I'll proceed.