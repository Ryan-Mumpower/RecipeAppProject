import React from 'react'

export default function RecipeDetail({ recipe, onClose }) {
  if (!recipe) return null
  return (
    <div className="recipe-detail">
      <button className="close" onClick={onClose}>Back</button>
      <h2>{recipe.title}</h2>
      <p className="desc">{recipe.description}</p>

      <section>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Steps</h3>
        <ol>
          {recipe.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </section>
    </div>
  )
}
