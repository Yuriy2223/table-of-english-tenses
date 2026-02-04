// Irregular verbs database - extended with Phase 1
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

// PHASE 1: Contextual examples with translations
const contextualExamples = {
  love: [
    { en: 'I will love you forever', ua: 'Я буду любити тебе вічно' },
    { en: 'Do you love chocolate?', ua: 'Ти любиш шоколад?' },
    { en: 'She loves her cat very much', ua: 'Вона дуже любить свого кота' },
    { en: 'They loved the movie', ua: 'Їм сподобався фільм' },
  ],
  play: [
    { en: 'I will play football tomorrow', ua: 'Я гратиму у футбол завтра' },
    { en: 'Do you play guitar?', ua: 'Ти граєш на гітарі?' },
    {
      en: 'He plays video games every day',
      ua: 'Він грає у відеоігри кожен день',
    },
    { en: 'We played chess yesterday', ua: 'Ми грали в шахи вчора' },
  ],
  work: [
    { en: 'I will work hard', ua: 'Я буду працювати наполегливо' },
    { en: 'Do you work on weekends?', ua: 'Ти працюєш на вихідних?' },
    { en: 'She works as a teacher', ua: 'Вона працює вчителькою' },
    { en: 'They worked together', ua: 'Вони працювали разом' },
  ],
  study: [
    { en: 'I will study English', ua: 'Я буду вчити англійську' },
    { en: 'Do you study every day?', ua: 'Ти вчишся щодня?' },
    { en: 'He studies at university', ua: 'Він навчається в університеті' },
    { en: 'We studied math yesterday', ua: 'Ми вчили математику вчора' },
  ],
  go: [
    { en: 'I will go to the park', ua: 'Я піду до парку' },
    { en: 'Do you go to school?', ua: 'Ти ходиш до школи?' },
    {
      en: 'She goes shopping every week',
      ua: 'Вона ходить за покупками щотижня',
    },
    { en: 'They went home', ua: 'Вони пішли додому' },
  ],
  see: [
    { en: 'I will see you tomorrow', ua: 'Я побачу тебе завтра' },
    { en: 'Do you see that bird?', ua: 'Ти бачиш того птаха?' },
    { en: 'He sees his friends often', ua: 'Він часто бачиться з друзями' },
    { en: 'We saw a movie', ua: 'Ми подивилися фільм' },
  ],
  eat: [
    { en: 'I will eat pizza tonight', ua: "Я з'їм піцу сьогодні ввечері" },
    { en: 'Do you eat meat?', ua: "Ти їси м'ясо?" },
    { en: 'She eats healthy food', ua: 'Вона їсть здорову їжу' },
    { en: 'They ate lunch together', ua: 'Вони разом пообідали' },
  ],
  default: [
    { en: 'I will [VERB]', ua: 'Я буду [VERB_UA]' },
    { en: 'Do you [VERB]?', ua: 'Ти [VERB_UA]?' },
    { en: 'He/She [VERB]s often', ua: 'Він/Вона часто [VERB_UA]' },
    { en: 'I [PAST] yesterday', ua: 'Я [VERB_UA] вчора' },
  ],
};

// Verb categories
const categories = {
  actions: ['run', 'jump', 'walk', 'swim', 'fly', 'dance', 'climb'],
  work: ['work', 'help', 'build', 'create', 'manage', 'teach', 'sell'],
  study: ['study', 'learn', 'read', 'write', 'understand', 'know', 'think'],
  hobbies: ['play', 'cook', 'paint', 'draw', 'sing', 'dance', 'travel'],
  communication: ['speak', 'talk', 'say', 'tell', 'ask', 'call', 'listen'],
};

// Popular verbs
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
let favorites = [];
let speechSynth = window.speechSynthesis;
let voices = [];
let selectedVoice = null;
let speechRate = 1;

// Initialize
document.addEventListener('DOMContentLoaded', function () {
  setCurrentDate();
  loadTheme();
  loadFavorites();
  generateQuickVerbs();
  updateTable('love');
  initSpeech();
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

// PHASE 1: Speech Synthesis
function initSpeech() {
  if ('speechSynthesis' in window) {
    voices = speechSynth.getVoices();
    if (voices.length === 0) {
      speechSynth.addEventListener('voiceschanged', () => {
        voices = speechSynth.getVoices();
        populateVoiceList();
      });
    } else {
      populateVoiceList();
    }
  }
}

function populateVoiceList() {
  const voiceSelect = document.getElementById('voiceSelect');
  voiceSelect.innerHTML = '';

  const englishVoices = voices.filter((voice) => voice.lang.startsWith('en-'));

  englishVoices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = index;
    voiceSelect.appendChild(option);
  });

  const preferredVoice = englishVoices.findIndex(
    (v) => v.lang === 'en-US' || v.lang === 'en-GB'
  );
  if (preferredVoice !== -1) {
    voiceSelect.value = preferredVoice;
    selectedVoice = englishVoices[preferredVoice];
  } else if (englishVoices.length > 0) {
    selectedVoice = englishVoices[0];
  }

  voiceSelect.addEventListener('change', (e) => {
    selectedVoice = englishVoices[e.target.value];
  });

  document.getElementById('rateSelect').addEventListener('change', (e) => {
    speechRate = parseFloat(e.target.value);
  });
}

function speak(text) {
  if (!speechSynth) return;
  speechSynth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice =
    selectedVoice || voices.find((v) => v.lang.startsWith('en-'));
  utterance.rate = speechRate;
  utterance.pitch = 1;
  utterance.volume = 1;

  speechSynth.speak(utterance);
}

function speakCurrentVerb() {
  const verb = currentVerb;
  const thirdPerson = addThirdPersonS(verb);
  const past = getPastForm(verb);

  const sentences = [
    `I will ${verb}`,
    `Do you ${verb}?`,
    `He ${thirdPerson}`,
    `I ${past} yesterday`,
  ];

  sentences.forEach((sentence, index) => {
    setTimeout(() => speak(sentence), index * 2000);
  });
}

function toggleVoiceSettings() {
  const settings = document.getElementById('voiceSettings');
  settings.classList.toggle('show');
}

// PHASE 1: Favorites
function loadFavorites() {
  favorites = JSON.parse(localStorage.getItem('favoriteVerbs') || '[]');
  updateFavoriteBtn();
  updateFavoritesList();
}

function saveFavorites() {
  localStorage.setItem('favoriteVerbs', JSON.stringify(favorites));
}

function toggleFavorite() {
  const verb = currentVerb.toLowerCase();
  const index = favorites.indexOf(verb);

  if (index === -1) {
    favorites.push(verb);
  } else {
    favorites.splice(index, 1);
  }

  saveFavorites();
  updateFavoriteBtn();
  updateFavoritesList();
  generateQuickVerbs();
}

function updateFavoriteBtn() {
  const btn = document.getElementById('favoriteBtn');
  const isFavorite = favorites.includes(currentVerb.toLowerCase());

  if (isFavorite) {
    btn.classList.add('favorite-active');
    btn.innerHTML = '⭐ Видалити з улюблених';
  } else {
    btn.classList.remove('favorite-active');
    btn.innerHTML = '⭐ Додати до улюблених';
  }
}

function updateFavoritesList() {
  const section = document.getElementById('favoritesSection');
  const container = document.getElementById('favoritesList');

  if (favorites.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = 'block';
  container.innerHTML = '';

  favorites.forEach((verb) => {
    const span = document.createElement('span');
    span.className = 'quick-verb favorite';
    span.textContent = verb;
    span.onclick = () => {
      document.getElementById('verbInput').value = verb;
      applyVerb();
    };
    container.appendChild(span);
  });
}

function generateQuickVerbs() {
  const container = document.getElementById('quickVerbList');
  container.innerHTML = '';

  popularVerbs.forEach((verb) => {
    const span = document.createElement('span');
    span.className = 'quick-verb';
    if (favorites.includes(verb)) {
      span.classList.add('favorite');
    }
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
    updateFavoriteBtn();
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
  if (verb === 'have') return 'has';
  if (verb === 'be') return 'is';
  if (/[sxz]$/.test(verb) || /[cs]h$/.test(verb) || /o$/.test(verb)) {
    return verb + 'es';
  }
  if (/[^aeiou]y$/.test(verb)) {
    return verb.slice(0, -1) + 'ies';
  }
  return verb + 's';
}

function getPastForm(verb) {
  if (irregularVerbs.hasOwnProperty(verb)) {
    return irregularVerbs[verb].past;
  }
  if (/e$/.test(verb)) {
    return verb + 'd';
  }
  if (/[^aeiou]y$/.test(verb)) {
    return verb.slice(0, -1) + 'ied';
  }
  if (/[^aeiou][aeiou][^aeiouwy]$/.test(verb) && verb.length > 2) {
    return verb + verb.slice(-1) + 'ed';
  }
  return verb + 'ed';
}

// PHASE 1: Get contextual examples
function getExamples(verb) {
  const examples = contextualExamples[verb] || contextualExamples.default;
  const translation =
    irregularVerbs[verb]?.translation || regularVerbs[verb] || verb;
  const past = getPastForm(verb);

  return examples.map((ex) => ({
    en: ex.en.replace('[VERB]', verb).replace('[PAST]', past),
    ua: ex.ua.replace('[VERB_UA]', translation),
  }));
}

function updateTable(verb) {
  const verbUpper = verb.toUpperCase();
  const thirdPerson = addThirdPersonS(verb).toUpperCase();
  const pastForm = getPastForm(verb).toUpperCase();
  const translation =
    irregularVerbs[verb]?.translation || regularVerbs[verb] || '';

  const examples = getExamples(verb);

  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = `
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
          <button class="speak-btn" onclick="speak('Will you ${verb}?')">🔊</button>
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
          <button class="speak-btn" onclick="speak('I will ${verb}')">🔊</button>
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
          <button class="speak-btn" onclick="speak('I will not ${verb}')">🔊</button>
        </div>
      </td>
      <td class="right-label future">МАЙБУТНЄ</td>
    </tr>

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
          <button class="speak-btn" onclick="speak('Do you ${verb}?')">🔊</button>
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
          <button class="speak-btn" onclick="speak('I ${verb}')">🔊</button>
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
          <button class="speak-btn" onclick="speak('I don\\'t ${verb}')">🔊</button>
        </div>
      </td>
      <td class="right-label present">ТЕПЕРІШНЄ</td>
    </tr>

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
          <button class="speak-btn" onclick="speak('Does he ${verb}?')">🔊</button>
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
          <button class="speak-btn" onclick="speak('He ${addThirdPersonS(verb)}')">🔊</button>
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
          <button class="speak-btn" onclick="speak('He doesn\\'t ${verb}')">🔊</button>
        </div>
      </td>
      <td class="right-label present">ТЕПЕРІШНЄ</td>
    </tr>

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
          <button class="speak-btn" onclick="speak('Did you ${verb}?')">🔊</button>
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
          <button class="speak-btn" onclick="speak('I ${getPastForm(verb)}')">🔊</button>
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
          <button class="speak-btn" onclick="speak('I did not ${verb}')">🔊</button>
        </div>
      </td>
      <td class="right-label past">МИНУЛЕ</td>
    </tr>

    <tr class="example-row">
      <td colspan="8">
        <div class="example-content">
          <h4>📝 Контекстні приклади з "${verb}" (${translation}):</h4>
          <div class="example-list">
            ${examples
              .map(
                (ex) => `
              <div class="example-item">
                <div class="example-english">${ex.en}
                  <button class="speak-btn-small" onclick="speak('${ex.en.replace(/'/g, "\\'")}')">🔊</button>
                </div>
                <div class="example-ukrainian">${ex.ua}</div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      </td>
    </tr>
  `;

  if (trainingMode) {
    const cells = document.querySelectorAll('.section-cell');
    cells.forEach((cell) => {
      cell.classList.add('hidden-mode');
      cell.addEventListener('click', revealCell);
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

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    document.getElementById('themeIcon').textContent = '☀️';
  }
}

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

document.getElementById('verbInput').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    applyVerb();
  }
});
