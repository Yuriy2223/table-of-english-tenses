// Set current date
const months = [
  'січня',
  'лютого',
  'березня',
  'квітня',
  'травня',
  'червня',
  'липня',
  'серпня',
  'вересня',
  'жовтня',
  'листопада',
  'грудня',
];
const now = new Date();
document.getElementById('currentDate').textContent =
  `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

// Training mode
let trainingMode = false;
let hiddenSections = new Set();

function toggleTrainingMode() {
  trainingMode = !trainingMode;
  const cells = document.querySelectorAll('.section-cell');
  const btn = document.getElementById('trainingText');
  const icon = document.getElementById('trainingIcon');

  if (trainingMode) {
    btn.textContent = 'Вимкнути тренування';
    icon.textContent = '👁️';
    cells.forEach((cell) => {
      cell.classList.add('hidden-mode');
      cell.addEventListener('click', revealCell);
    });
  } else {
    btn.textContent = 'Режим тренування';
    icon.textContent = '🎯';
    cells.forEach((cell) => {
      cell.classList.remove('hidden-mode', 'revealed');
      cell.removeEventListener('click', revealCell);
    });
    hiddenSections.clear();
  }
}

function revealCell(e) {
  if (trainingMode) {
    e.currentTarget.classList.remove('hidden-mode');
    e.currentTarget.classList.add('revealed');
  }
}

// Toggle examples
let examplesVisible = false;
function toggleExamples() {
  examplesVisible = !examplesVisible;
  const examples = document.querySelectorAll('.example-row');
  examples.forEach((row) => {
    if (examplesVisible) {
      row.classList.add('show');
    } else {
      row.classList.remove('show');
    }
  });
}

// Theme toggle
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');

  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    icon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    icon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('themeIcon').textContent = '☀️';
  }
});

// Reset progress
function resetProgress() {
  if (confirm('Скинути весь прогрес тренування?')) {
    const cells = document.querySelectorAll('.section-cell');
    cells.forEach((cell) => {
      cell.classList.remove('hidden-mode', 'revealed');
    });
    hiddenSections.clear();
    if (trainingMode) {
      toggleTrainingMode();
    }
  }
}

// Add hover tooltips (optional enhancement)
const cells = document.querySelectorAll('.section-cell');
cells.forEach((cell) => {
  cell.addEventListener('mouseenter', function (e) {
    if (trainingMode && this.classList.contains('hidden-mode')) {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip show';
      tooltip.textContent = '👆 Клікніть, щоб відкрити';
      tooltip.style.top = e.pageY - 40 + 'px';
      tooltip.style.left = e.pageX - 70 + 'px';
      tooltip.id = 'temp-tooltip';
      document.body.appendChild(tooltip);
    }
  });

  cell.addEventListener('mouseleave', function () {
    const tooltip = document.getElementById('temp-tooltip');
    if (tooltip) tooltip.remove();
  });
});
