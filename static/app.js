// Static Recipe App (no build, no Node required)
(function(){
  const sampleRecipes = [
    {
      id: 1,
      title: 'Classic Pancakes',
      description: 'Fluffy pancakes made from scratch.',
      ingredients: ['flour', 'milk', 'eggs', 'baking powder', 'salt', 'butter'],
      steps: [
        'Mix dry ingredients.',
        'Whisk in milk and eggs.',
        'Cook on greased skillet until golden.'
      ]
    },
    {
      id: 2,
      title: 'Spaghetti Aglio e Olio',
      description: 'Simple pasta with garlic and olive oil.',
      ingredients: ['spaghetti', 'garlic', 'olive oil', 'red pepper flakes', 'parsley'],
      steps: [
        'Cook spaghetti.',
        'Sauté garlic in olive oil.',
        'Toss pasta with oil and garlic, add parsley.'
      ]
    },
    {
      id: 3,
      title: 'Avocado Toast',
      description: 'Quick and healthy breakfast.',
      ingredients: ['bread', 'avocado', 'lemon', 'salt', 'pepper'],
      steps: ['Toast bread.', 'Mash avocado with lemon and seasoning.', 'Spread on toast.']
    }
  ]

  // use localStorage to persist additions
  function loadRecipes(){
    try{
      const raw = localStorage.getItem('recipes')
      if(raw) return JSON.parse(raw)
    }catch(e){}
    localStorage.setItem('recipes', JSON.stringify(sampleRecipes))
    return sampleRecipes.slice()
  }

  function saveRecipes(list){
    localStorage.setItem('recipes', JSON.stringify(list))
  }

  let recipes = loadRecipes()
  let filtered = recipes.slice()
  let selected = null

  const listContainer = document.getElementById('listContainer')
  const detailContainer = document.getElementById('detailContainer')
  const searchInput = document.getElementById('searchInput')

  function renderList(){
    listContainer.innerHTML = ''
    if(filtered.length === 0){
      listContainer.innerHTML = '<div class="empty">No recipes found</div>'
      return
    }
    const ul = document.createElement('ul')
    ul.className = 'list'
    filtered.forEach(r => {
      const li = document.createElement('li')
      li.className = 'item'
      li.innerHTML = `<div class="title">${escapeHtml(r.title)}</div><div class="desc">${escapeHtml(r.description)}</div>`
      li.addEventListener('click', ()=>{
        selected = r
        renderDetail()
      })
      ul.appendChild(li)
    })
    listContainer.appendChild(ul)
  }

  function renderDetail(){
    if(!selected){
      detailContainer.innerHTML = '<div class="placeholder">Select a recipe to see details</div>'
      return
    }
    const r = selected
    let html = ''
    html += `<button id="backBtn" class="close">Back</button>`
    html += `<h2>${escapeHtml(r.title)}</h2>`
    html += `<p class="desc">${escapeHtml(r.description)}</p>`
    html += '<section><h3>Ingredients</h3><ul>'
    r.ingredients.forEach(i => { html += `<li>${escapeHtml(i)}</li>` })
    html += '</ul></section>'
    html += '<section><h3>Steps</h3><ol>'
    r.steps.forEach(s => { html += `<li>${escapeHtml(s)}</li>` })
    html += '</ol></section>'
    detailContainer.innerHTML = html
    document.getElementById('backBtn').addEventListener('click', ()=>{ selected=null; renderDetail() })
  }

  function handleSearch(q){
    const qq = q.trim().toLowerCase()
    if(!qq){ filtered = recipes.slice() }
    else{
      filtered = recipes.filter(r => (
        r.title.toLowerCase().includes(qq) ||
        r.description.toLowerCase().includes(qq) ||
        r.ingredients.join(' ').toLowerCase().includes(qq)
      ))
    }
    renderList()
    if(selected && !filtered.find(x=>x.id===selected.id)) selected = null
    renderDetail()
  }

  // add recipe
  const addBtn = document.getElementById('addBtn')
  addBtn.addEventListener('click', ()=>{
    const title = document.getElementById('addTitle').value.trim()
    const desc = document.getElementById('addDesc').value.trim()
    const ingredients = document.getElementById('addIngredients').value.split(',').map(s=>s.trim()).filter(Boolean)
    const steps = document.getElementById('addSteps').value.split('\n').map(s=>s.trim()).filter(Boolean)
    if(!title) return alert('Title required')
    const newR = { id: Date.now(), title, description: desc, ingredients, steps }
    recipes.unshift(newR)
    saveRecipes(recipes)
    searchInput.value = ''
    handleSearch('')
    // clear form
    document.getElementById('addTitle').value=''
    document.getElementById('addDesc').value=''
    document.getElementById('addIngredients').value=''
    document.getElementById('addSteps').value=''
  })

  searchInput.addEventListener('input', (e)=> handleSearch(e.target.value))

  function escapeHtml(str){
    return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]))
  }

  // initial render
  filtered = recipes.slice()
  renderList()
  renderDetail()

})();
