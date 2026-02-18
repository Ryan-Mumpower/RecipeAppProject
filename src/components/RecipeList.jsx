import React from 'react'

export default function RecipeList({ recipes, onSelect }) {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.length === 0 && <div className="empty">No recipes found</div>}
      <ul>
        {recipes.map(r => (
          <li key={r.id} onClick={() => onSelect(r)}>
            <div className="title">{r.title}</div>
            <div className="desc">{r.description}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
