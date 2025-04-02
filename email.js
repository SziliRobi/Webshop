const toggleBtn = document.getElementById("toggle-button");
const body = document.body;

function toggleTheme() {
  body.classList.toggle("dark");
}

toggleBtn.addEventListener('click', toggleTheme);

// Téma mentése
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
  }
  
  // Téma betöltése
  function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      body.classList.add('dark');
    }
  }
  
  // Frissítés a gombra kattintva
  function toggleTheme() {
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      saveTheme('light');
    } else {
      body.classList.add('dark');
      saveTheme('dark');
    }
  }
  
  loadTheme();
  