import React, { useState, useMemo } from 'react'
import sampleRecipes from './data/sampleRecipes'
import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'
import AddRecipe from './components/AddRecipe'
import SearchBar from './components/SearchBar'

export default function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    if (!query) return recipes
    const q = query.toLowerCase()
    return recipes.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.ingredients.join(' ').toLowerCase().includes(q)
    )
  }, [recipes, query])

  function addRecipe(recipe) {
    setRecipes(prev => [recipe, ...prev])
  }

  return (
    <div className="app">
      <header>
        <h1>Recipe App</h1>
      </header>

      <main>
        <div className="sidebar">
          <SearchBar value={query} onChange={setQuery} />
          <AddRecipe onAdd={addRecipe} />
          <RecipeList recipes={filtered} onSelect={setSelected} />
        </div>

        <div className="content">
          {selected ? (
            <RecipeDetail recipe={selected} onClose={() => setSelected(null)} />
          ) : (
            <div className="placeholder">Select a recipe to see details</div>
          )}
        </div>
      </main>
    </div>
  )
}
