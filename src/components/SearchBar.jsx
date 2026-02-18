import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <input
        placeholder="Search recipes..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}
