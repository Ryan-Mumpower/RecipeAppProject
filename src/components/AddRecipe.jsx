import React, { useState } from 'react'

export default function AddRecipe({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title) return
    const recipe = {
      id: Date.now(),
      title,
      description,
      ingredients: ingredients.split(',').map(s => s.trim()).filter(Boolean),
      steps: steps.split('\n').map(s => s.trim()).filter(Boolean)
    }
    onAdd(recipe)
    setTitle('')
    setDescription('')
    setIngredients('')
    setSteps('')
  }

  return (
    <div className="add-recipe">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Short description" />
        <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder="Ingredients (comma separated)" />
        <textarea value={steps} onChange={e => setSteps(e.target.value)} placeholder="Steps (one per line)" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
