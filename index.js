// Irregular verbs database
const irregularVerbs = {
  go: { past: 'went', translation: 'йти' },
  see: { past: 'saw', translation: 'бачити' },
  make: { past: 'made', translation: 'робити' },
  have: { past: 'had', translation: 'мати' },
  do: { past: 'did', translation: 'робити' },
  say: { past: 'said', translation: 'говорити' },
  get: { past: 'got', translation: 'отримувати' },
  come: { past: 'came', translation: 'приходити' },
  know: { past: 'knew', translation: 'знати' },
  think: { past: 'thought', translation: 'думати' },
  take: { past: 'took', translation: 'брати' },
  give: { past: 'gave', translation: 'давати' },
  find: { past: 'found', translation: 'знаходити' },
  tell: { past: 'told', translation: 'розповідати' },
  become: { past: 'became', translation: 'ставати' },
  leave: { past: 'left', translation: 'залишати' },
  feel: { past: 'felt', translation: 'відчувати' },
  bring: { past: 'brought', translation: 'приносити' },
  begin: { past: 'began', translation: 'починати' },
  keep: { past: 'kept', translation: 'тримати' },
  hold: { past: 'held', translation: 'тримати' },
  write: { past: 'wrote', translation: 'писати' },
  stand: { past: 'stood', translation: 'стояти' },
  hear: { past: 'heard', translation: 'чути' },
  let: { past: 'let', translation: 'дозволяти' },
  mean: { past: 'meant', translation: 'означати' },
  set: { past: 'set', translation: 'встановлювати' },
  meet: { past: 'met', translation: 'зустрічати' },
  run: { past: 'ran', translation: 'бігти' },
  pay: { past: 'paid', translation: 'платити' },
  sit: { past: 'sat', translation: 'сидіти' },
  speak: { past: 'spoke', translation: 'говорити' },
  lie: { past: 'lay', translation: 'лежати' },
  lead: { past: 'led', translation: 'вести' },
  read: { past: 'read', translation: 'читати' },
  grow: { past: 'grew', translation: 'рости' },
  lose: { past: 'lost', translation: 'втрачати' },
  fall: { past: 'fell', translation: 'падати' },
  send: { past: 'sent', translation: 'відправляти' },
  build: { past: 'built', translation: 'будувати' },
  understand: { past: 'understood', translation: 'розуміти' },
  draw: { past: 'drew', translation: 'малювати' },
  break: { past: 'broke', translation: 'ламати' },
  spend: { past: 'spent', translation: 'витрачати' },
  cut: { past: 'cut', translation: 'різати' },
  rise: { past: 'rose', translation: 'підніматися' },
  drive: { past: 'drove', translation: 'водити' },
  buy: { past: 'bought', translation: 'купувати' },
  wear: { past: 'wore', translation: 'носити' },
  choose: { past: 'chose', translation: 'вибирати' },
  seek: { past: 'sought', translation: 'шукати' },
  throw: { past: 'threw', translation: 'кидати' },
  catch: { past: 'caught', translation: 'ловити' },
  deal: { past: 'dealt', translation: 'мати справу' },
  win: { past: 'won', translation: 'вигравати' },
  forget: { past: 'forgot', translation: 'забувати' },
  sell: { past: 'sold', translation: 'продавати' },
  fight: { past: 'fought', translation: 'боротися' },
  teach: { past: 'taught', translation: 'навчати' },
  eat: { past: 'ate', translation: 'їсти' },
  drink: { past: 'drank', translation: 'пити' },
  sing: { past: 'sang', translation: 'співати' },
  swim: { past: 'swam', translation: 'плавати' },
  fly: { past: 'flew', translation: 'літати' },
};

// Regular verbs with translations
const regularVerbs = {
  love: 'любити',
  play: 'грати',
  work: 'працювати',
  study: 'вчитися',
  watch: 'дивитися',
  help: 'допомагати',
  like: 'подобатися',
  want: 'хотіти',
  need: 'потребувати',
  use: 'використовувати',
  walk: 'ходити',
  talk: 'розмовляти',
  listen: 'слухати',
  look: 'дивитися',
  wait: 'чекати',
  call: 'дзвонити',
  try: 'намагатися',
  ask: 'питати',
  seem: 'здаватися',
  open: 'відкривати',
  close: 'закривати',
  believe: 'вірити',
  live: 'жити',
  die: 'вмирати',
  save: 'рятувати',
  kill: 'вбивати',
  agree: 'погоджуватися',
  decide: 'вирішувати',
  remember: "пам'ятати",
  consider: 'розглядати',
  appear: "з'являтися",
  expect: 'очікувати',
  suggest: 'пропонувати',
  require: 'вимагати',
  allow: 'дозволяти',
  remain: 'залишатися',
  produce: 'виробляти',
  involve: 'залучати',
  continue: 'продовжувати',
  create: 'створювати',
  add: 'додавати',
  change: 'змінювати',
  move: 'рухатися',
  follow: 'слідувати',
  stop: 'зупинятися',
  travel: 'подорожувати',
  cook: 'готувати',
  clean: 'прибирати',
  dance: 'танцювати',
  laugh: 'сміятися',
  cry: 'плакати',
  smile: 'посміхатися',
  jump: 'стрибати',
  climb: 'лізти',
  paint: 'малювати',
  wash: 'мити',
};

// Verb categories
const categories = {
  actions: ['run', 'jump', 'walk', 'swim', 'fly', 'dance', 'climb'],
  work: ['work', 'help', 'build', 'create', 'manage', 'teach', 'sell'],
  study: ['study', 'learn', 'read', 'write', 'understand', 'know', 'think'],
  hobbies: ['play', 'cook', 'paint', 'draw', 'sing', 'dance', 'travel'],
  communication: ['speak', 'talk', 'say', 'tell', 'ask', 'call', 'listen'],
};

// Popular verbs for quick selection
const popularVerbs = [
  'love',
  'play',
  'work',
  'study',
  'watch',
  'go',
  'make',
  'see',
  'have',
  'do',
  'come',
  'know',
  'take',
  'give',
  'think',
  'help',
  'like',
  'want',
  'need',
  'use',
];

let currentVerb = 'love';
let trainingMode = false;

// Initialize
document.addEventListener('DOMContentLoaded', function () {
  setCurrentDate();
  loadTheme();
  generateQuickVerbs();
  updateTable('love');
});

function setCurrentDate() {
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
}

function generateQuickVerbs() {
  const container = document.getElementById('quickVerbList');
  popularVerbs.forEach((verb) => {
    const span = document.createElement('span');
    span.className = 'quick-verb';
    span.textContent = verb;
    span.onclick = () => {
      document.getElementById('verbInput').value = verb;
      applyVerb();
    };
    container.appendChild(span);
  });
}

function selectCategory(category) {
  const verbs = categories[category];
  if (verbs && verbs.length > 0) {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    document.getElementById('verbInput').value = verbs[randomIndex];
    applyVerb();
  }
}

function randomVerb() {
  const randomIndex = Math.floor(Math.random() * popularVerbs.length);
  document.getElementById('verbInput').value = popularVerbs[randomIndex];
  applyVerb();
}

function applyVerb() {
  const input = document.getElementById('verbInput').value.trim().toLowerCase();
  if (input) {
    currentVerb = input;
    updateVerbInfo(input);
    updateTable(input);
    saveToHistory(input);
  }
}

function updateVerbInfo(verb) {
  const typeSpan = document.getElementById('verbType');
  const translationSpan = document.getElementById('verbTranslation');

  const isIrregular = irregularVerbs.hasOwnProperty(verb);

  if (isIrregular) {
    typeSpan.className = 'verb-type irregular';
    typeSpan.textContent = 'Неправильне дієслово';
    translationSpan.textContent = irregularVerbs[verb].translation;
  } else {
    typeSpan.className = 'verb-type regular';
    typeSpan.textContent = 'Правильне дієслово';
    translationSpan.textContent = regularVerbs[verb] || '';
  }
}

function addThirdPersonS(verb) {
  // Special cases
  if (verb === 'have') return 'has';
  if (verb === 'be') return 'is';

  // Ends with -s, -ss, -sh, -ch, -x, -o, -z
  if (/[sxz]$/.test(verb) || /[cs]h$/.test(verb) || /o$/.test(verb)) {
    return verb + 'es';
  }

  // Ends with consonant + y
  if (/[^aeiou]y$/.test(verb)) {
    return verb.slice(0, -1) + 'ies';
  }

  // Default: add -s
  return verb + 's';
}

function getPastForm(verb) {
  // Check if irregular
  if (irregularVerbs.hasOwnProperty(verb)) {
    return irregularVerbs[verb].past;
  }

  // Regular verb rules
  // Ends with -e
  if (/e$/.test(verb)) {
    return verb + 'd';
  }

  // Ends with consonant + y
  if (/[^aeiou]y$/.test(verb)) {
    return verb.slice(0, -1) + 'ied';
  }

  // CVC pattern (consonant-vowel-consonant) - double last consonant
  if (/[^aeiou][aeiou][^aeiouwy]$/.test(verb) && verb.length > 2) {
    return verb + verb.slice(-1) + 'ed';
  }

  // Default: add -ed
  return verb + 'ed';
}

function updateTable(verb) {
  const verbUpper = verb.toUpperCase();
  const thirdPerson = addThirdPersonS(verb).toUpperCase();
  const pastForm = getPastForm(verb).toUpperCase();

  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = `
                <!-- WILL row -->
                <tr>
                    <td class="left-label">WILL</td>
                    <td class="section-cell" data-section="question">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="question">
                        <div class="verb-form">
                            <div class="verb-item verb-highlight">${verbUpper} ?</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="affirmative">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="affirmative">
                        <div class="verb-form">
                            <div class="verb-item">WILL</div>
                            <div class="verb-item verb-highlight">${verbUpper}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="negative">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="negative">
                        <div class="verb-form">
                            <div class="verb-item">WILL</div>
                            <div class="verb-item">NOT</div>
                            <div class="verb-item verb-highlight">${verbUpper}</div>
                        </div>
                    </td>
                    <td class="right-label future">МАЙБУТНЄ</td>
                </tr>

                <!-- DO row -->
                <tr>
                    <td class="left-label">DO</td>
                    <td class="section-cell" data-section="question">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="question">
                        <div class="verb-form">
                            <div class="verb-item verb-highlight">${verbUpper} ?</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="affirmative">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="affirmative">
                        <div class="verb-form">
                            <div class="verb-item verb-highlight">${verbUpper}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="negative">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="negative">
                        <div class="verb-form">
                            <div class="verb-item">DON'T</div>
                            <div class="verb-item verb-highlight">${verbUpper}</div>
                        </div>
                    </td>
                    <td class="right-label present">ТЕПЕРІШНЄ</td>
                </tr>

                <!-- DOES row -->
                <tr>
                    <td class="left-label">DOES</td>
                    <td class="section-cell" data-section="question">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="question">
                        <div class="verb-form">
                            <div class="verb-item verb-highlight">${verbUpper} ?</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="affirmative">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="affirmative">
                        <div class="verb-form">
                            <div class="verb-item verb-highlight">${thirdPerson}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="negative">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="negative">
                        <div class="verb-form">
                            <div class="verb-item">DOESN'T</div>
                            <div class="verb-item verb-highlight">${verbUpper}</div>
                        </div>
                    </td>
                    <td class="right-label present">ТЕПЕРІШНЄ</td>
                </tr>

                <!-- DID row -->
                <tr>
                    <td class="left-label">DID</td>
                    <td class="section-cell" data-section="question">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="question">
                        <div class="verb-form">
                            <div class="verb-item verb-highlight">${verbUpper} ?</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="affirmative">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="affirmative">
                        <div class="verb-form">
                            <div class="verb-item verb-highlight">${pastForm}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="negative">
                        <div class="cell-group">
                            <div class="pronouns">
                                <div class="pronouns-item">I</div>
                                <div class="pronouns-item">YOU</div>
                                <div class="pronouns-item">WE</div>
                                <div class="pronouns-item">THEY</div>
                                <div class="pronouns-item">HE</div>
                                <div class="pronouns-item">SHE</div>
                            </div>
                            <div class="brace">}</div>
                        </div>
                    </td>
                    <td class="section-cell" data-section="negative">
                        <div class="verb-form">
                            <div class="verb-item">DID</div>
                            <div class="verb-item">NOT</div>
                            <div class="verb-item verb-highlight">${verbUpper}</div>
                        </div>
                    </td>
                    <td class="right-label past">МИНУЛЕ</td>
                </tr>

                <!-- EXAMPLES ROW -->
                <tr class="example-row">
                    <td colspan="8" class="example-content">
                        <h4>📝 Приклади речень з "${verb}" (${irregularVerbs[verb]?.translation || regularVerbs[verb] || ''}):</h4>
                        <div class="example-list">
                            <div class="example-item">🔮 Future: I will ${verb} tomorrow</div>
                            <div class="example-item">✅ Present: I ${verb} every day</div>
                            <div class="example-item">👤 Present (3rd): He/She ${addThirdPersonS(verb)} often</div>
                            <div class="example-item">⏪ Past: I ${getPastForm(verb)} yesterday</div>
                            <div class="example-item">❌ Negative: I don't ${verb}</div>
                            <div class="example-item">❓ Question: Do you ${verb}?</div>
                            <div class="example-item">❌ Past Negative: I didn't ${verb}</div>
                            <div class="example-item">❓ Past Question: Did you ${verb}?</div>
                        </div>
                    </td>
                </tr>
            `;

  // Re-attach event listeners if in training mode
  if (trainingMode) {
    const cells = document.querySelectorAll('.section-cell');
    cells.forEach((cell) => {
      cell.classList.add('hidden-mode');
      cell.addEventListener('click', revealCell);
    });
  }

  if (examplesVisible) {
    const allCells = document.querySelectorAll('.section-cell');
    allCells.forEach((cell) => {
      const oldExample = cell.querySelector('.cell-example');
      if (oldExample) oldExample.remove();
      addExampleToCell(cell);
    });
  }
}

function saveToHistory(verb) {
  let history = JSON.parse(localStorage.getItem('verbHistory') || '[]');
  if (!history.includes(verb)) {
    history.unshift(verb);
    history = history.slice(0, 10);
    localStorage.setItem('verbHistory', JSON.stringify(history));
  }
}

// Training mode
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
  }
}

function revealCell(e) {
  if (trainingMode) {
    e.currentTarget.classList.remove('hidden-mode');
    e.currentTarget.classList.add('revealed');
  }
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
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('themeIcon').textContent = '☀️';
  }
}

// Reset progress
function resetProgress() {
  if (confirm('Скинути весь прогрес тренування?')) {
    const cells = document.querySelectorAll('.section-cell');
    cells.forEach((cell) => {
      cell.classList.remove('hidden-mode', 'revealed');
    });
    if (trainingMode) {
      toggleTrainingMode();
    }
  }
}

let examplesVisible = false;
function toggleExamples() {
  examplesVisible = !examplesVisible;
  const allCells = document.querySelectorAll('.section-cell');

  allCells.forEach((cell) => {
    if (examplesVisible) {
      addExampleToCell(cell);
    } else {
      const example = cell.querySelector('.cell-example');
      if (example) example.remove();
    }
  });
}

function addExampleToCell(cell) {
  if (cell.querySelector('.cell-example')) return;

  const section = cell.getAttribute('data-section');
  const verb = currentVerb.toLowerCase();
  const verbUpper = verb.toUpperCase();
  const thirdPerson = addThirdPersonS(verb);
  const pastForm = getPastForm(verb);
  const exampleDiv = document.createElement('div');
  exampleDiv.className = 'cell-example';

  let exampleText = '';

  // WILL row
  if (
    cell.closest('tr')?.querySelector('.left-label')?.textContent === 'WILL'
  ) {
    if (section === 'question') {
      exampleText = `Will you ${verb} me?`;
    } else if (section === 'affirmative') {
      exampleText = `I will ${verb} you`;
    } else if (section === 'negative') {
      exampleText = `I will not ${verb}`;
    }
  }

  // DO row
  else if (
    cell.closest('tr')?.querySelector('.left-label')?.textContent === 'DO'
  ) {
    if (section === 'question') {
      exampleText = `Do you ${verb} it?`;
    } else if (section === 'affirmative') {
      exampleText = `I ${verb} music`;
    } else if (section === 'negative') {
      exampleText = `I don't ${verb}`;
    }
  }

  // DOES row
  else if (
    cell.closest('tr')?.querySelector('.left-label')?.textContent === 'DOES'
  ) {
    if (section === 'question') {
      exampleText = `Does he ${verb} her?`;
    } else if (section === 'affirmative') {
      exampleText = `She ${thirdPerson} cats`;
    } else if (section === 'negative') {
      exampleText = `He doesn't ${verb}`;
    }
  }

  // DID row
  else if (
    cell.closest('tr')?.querySelector('.left-label')?.textContent === 'DID'
  ) {
    if (section === 'question') {
      exampleText = `Did you ${verb} it?`;
    } else if (section === 'affirmative') {
      exampleText = `I ${pastForm} yesterday`;
    } else if (section === 'negative') {
      exampleText = `I didn't ${verb}`;
    }
  }

  if (exampleText) {
    exampleDiv.textContent = `💡 ${exampleText}`;
    cell.appendChild(exampleDiv);
  }
}

// Enter key support
document.getElementById('verbInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    applyVerb();
  }
});
