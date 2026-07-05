/* ==========================================================================
   Aura Study - Core Application Logic & State (Vanilla JS)
   ========================================================================== */

// --- 1. CLASS-TAILORED INITIAL DATABASES ---
const CLASS_CONTENT_MAP = {
  "1": {
    tasks: [
      { id: 'task-1-1', name: 'Practice single-digit addition (1 to 10)', subject: 'Math', priority: 'High', dueDate: '2026-07-08', targetPomodoros: 2, completedPomodoros: 0, completed: false },
      { id: 'task-1-2', name: 'Learn spelling of simple animal names', subject: 'English', priority: 'Medium', dueDate: '2026-07-10', targetPomodoros: 2, completedPomodoros: 0, completed: false }
    ],
    decks: [
      {
        id: 'deck-1-1',
        name: 'Class 1 Spelling Bee',
        cards: [
          { id: 'card-1-1-1', front: 'How do you spell APPLE?', back: 'A-P-P-L-E', rating: 'none' },
          { id: 'card-1-1-2', front: 'How do you spell TIGER?', back: 'T-I-G-E-R', rating: 'none' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'quiz-1-1',
        name: 'Fun Math Addition',
        questions: [
          { id: 'q-1-1-1', text: 'What is 3 + 2?', options: ['4', '5', '6', '3'], correctIndex: 1 },
          { id: 'q-1-1-2', text: 'What is 5 + 4?', options: ['8', '10', '9', '7'], correctIndex: 2 }
        ]
      }
    ],
    schedules: [
      { id: 'sched-1-1', title: 'Math Additions', day: 'mon', time: '09:00', color: 'purple' },
      { id: 'sched-1-2', title: 'Spelling Bee', day: 'wed', time: '11:00', color: 'blue' }
    ]
  },
  "2": {
    tasks: [
      { id: 'task-2-1', name: 'Practice double-digit subtraction', subject: 'Math', priority: 'High', dueDate: '2026-07-08', targetPomodoros: 2, completedPomodoros: 0, completed: false },
      { id: 'task-2-2', name: 'Read about desert animal habitats', subject: 'Science', priority: 'Medium', dueDate: '2026-07-10', targetPomodoros: 2, completedPomodoros: 0, completed: false }
    ],
    decks: [
      {
        id: 'deck-2-1',
        name: 'Animal Habitats',
        cards: [
          { id: 'card-2-1-1', front: 'Where does a camel live?', back: 'In the desert habitat.', rating: 'none' },
          { id: 'card-2-1-2', front: 'Where does a polar bear live?', back: 'In the cold polar ice region.', rating: 'none' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'quiz-2-1',
        name: 'Class 2 Subtractions',
        questions: [
          { id: 'q-2-1-1', text: 'What is 20 - 5?', options: ['12', '15', '18', '10'], correctIndex: 1 },
          { id: 'q-2-1-2', text: 'What is 15 - 8?', options: ['6', '7', '8', '9'], correctIndex: 1 }
        ]
      }
    ],
    schedules: [
      { id: 'sched-2-1', title: 'Desert Science', day: 'mon', time: '10:00', color: 'purple' },
      { id: 'sched-2-2', title: 'Subtraction math', day: 'wed', time: '14:00', color: 'blue' }
    ]
  },
  "3": {
    tasks: [
      { id: 'task-3-1', name: 'Practice 7 and 8 multiplication tables', subject: 'Math', priority: 'High', dueDate: '2026-07-08', targetPomodoros: 3, completedPomodoros: 0, completed: false },
      { id: 'task-3-2', name: 'Study the order of planets from the Sun', subject: 'Science', priority: 'Medium', dueDate: '2026-07-10', targetPomodoros: 2, completedPomodoros: 0, completed: false }
    ],
    decks: [
      {
        id: 'deck-3-1',
        name: 'Solar System Facts',
        cards: [
          { id: 'card-3-1-1', front: 'What is the closest planet to the Sun?', back: 'Mercury', rating: 'none' },
          { id: 'card-3-1-2', front: 'What is the largest planet in our solar system?', back: 'Jupiter', rating: 'none' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'quiz-3-1',
        name: 'Solar System Trivia',
        questions: [
          { id: 'q-3-1-1', text: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correctIndex: 1 },
          { id: 'q-3-1-2', text: 'Which planet has the famous rings around it?', options: ['Earth', 'Mars', 'Uranus', 'Saturn'], correctIndex: 3 }
        ]
      }
    ],
    schedules: [
      { id: 'sched-3-1', title: 'Solar System Prep', day: 'mon', time: '11:00', color: 'purple' },
      { id: 'sched-3-2', title: 'Multiplications', day: 'fri', time: '15:00', color: 'pink' }
    ]
  },
  "4": {
    tasks: [
      { id: 'task-4-1', name: 'Complete division worksheet with remainders', subject: 'Math', priority: 'High', dueDate: '2026-07-08', targetPomodoros: 3, completedPomodoros: 0, completed: false },
      { id: 'task-4-2', name: 'Memorize states and their capitals', subject: 'Geography', priority: 'Medium', dueDate: '2026-07-10', targetPomodoros: 2, completedPomodoros: 0, completed: false }
    ],
    decks: [
      {
        id: 'deck-4-1',
        name: 'US States & Capitals',
        cards: [
          { id: 'card-4-1-1', front: 'Capital of California?', back: 'Sacramento', rating: 'none' },
          { id: 'card-4-1-2', front: 'Capital of Texas?', back: 'Austin', rating: 'none' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'quiz-4-1',
        name: 'Geography States Quiz',
        questions: [
          { id: 'q-4-1-1', text: 'What is the capital of New York state?', options: ['New York City', 'Buffalo', 'Albany', 'Rochester'], correctIndex: 2 },
          { id: 'q-4-1-2', text: 'What is the capital of Florida?', options: ['Miami', 'Orlando', 'Tampa', 'Tallahassee'], correctIndex: 3 }
        ]
      }
    ],
    schedules: [
      { id: 'sched-4-1', title: 'Geography Session', day: 'tue', time: '09:00', color: 'blue' },
      { id: 'sched-4-2', title: 'Division Workout', day: 'thu', time: '13:00', color: 'purple' }
    ]
  },
  "5": {
    tasks: [
      { id: 'task-5-1', name: 'Solve fractions and decimals addition', subject: 'Math', priority: 'High', dueDate: '2026-07-08', targetPomodoros: 3, completedPomodoros: 0, completed: false },
      { id: 'task-5-2', name: 'Study the human digestive organ structures', subject: 'Biology', priority: 'Medium', dueDate: '2026-07-10', targetPomodoros: 2, completedPomodoros: 0, completed: false }
    ],
    decks: [
      {
        id: 'deck-5-1',
        name: 'Human Anatomy Basics',
        cards: [
          { id: 'card-5-1-1', front: 'Which organ pumps blood throughout the human body?', back: 'The Heart', rating: 'none' },
          { id: 'card-5-1-2', front: 'Which organs are responsible for gas exchange (breathing)?', back: 'The Lungs', rating: 'none' }
        ]
      }
    ],
    quizzes: [
      {
        id: 'quiz-5-1',
        name: 'Fractions & Biology Prep',
        questions: [
          { id: 'q-5-1-1', text: 'Simplify the fraction 4/8 to its lowest terms.', options: ['1/4', '1/2', '2/3', '3/4'], correctIndex: 1 },
          { id: 'q-5-1-2', text: 'Which organ absorbs nutrients from digested food?', options: ['Stomach', 'Liver', 'Small Intestine', 'Large Intestine'], correctIndex: 2 }
        ]
      }
    ],
    schedules: [
      { id: 'sched-5-1', title: 'Anatomy Science', day: 'wed', time: '10:00', color: 'pink' },
      { id: 'sched-5-2', title: 'Fractions & Decimals', day: 'fri', time: '16:00', color: 'blue' }
    ]
  }
};

const MOTIVATIONAL_QUOTES = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Focus is a muscle, and you build it by using it.", author: "Srinivas Rao" },
  { text: "Don't let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { text: "Your talent determines what you can do. Your motivation determines how much you are willing to do.", author: "Lou Holtz" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

const DEFAULT_POP_QUIZZES = [
  { text: 'Which data structure follows the LIFO rule?', options: ['Queue', 'Stack', 'Tree', 'Graph'], correctIndex: 1 },
  { text: 'Mitosis results in how many daughter cells?', options: ['2 diploid cells', '4 haploid cells', '1 clone', '3 cells'], correctIndex: 0 },
  { text: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'], correctIndex: 2 }
];

// --- 2. STATE MANAGER ---
class StateManager {
  constructor() {
    this.loadState();
  }

  loadState() {
    this.userClass = localStorage.getItem('aura_user_class') || null;

    // Dynamically retrieve class defaults if no local storage data is set
    this.tasks = JSON.parse(localStorage.getItem('aura_tasks')) || (this.userClass ? CLASS_CONTENT_MAP[this.userClass].tasks : []);
    this.decks = JSON.parse(localStorage.getItem('aura_decks')) || (this.userClass ? CLASS_CONTENT_MAP[this.userClass].decks : []);
    this.quizzes = JSON.parse(localStorage.getItem('aura_quizzes')) || (this.userClass ? CLASS_CONTENT_MAP[this.userClass].quizzes : []);
    this.schedules = JSON.parse(localStorage.getItem('aura_schedules')) || (this.userClass ? CLASS_CONTENT_MAP[this.userClass].schedules : []);

    // Timer Configurations
    this.timerSettings = JSON.parse(localStorage.getItem('aura_timer_settings')) || {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
      autoBreaks: true,
      autoPomodoros: false
    };

    // Tracking stats
    this.stats = JSON.parse(localStorage.getItem('aura_stats')) || {
      focusTime: 0,
      cardsStudiedCount: 0,
      completedSessionsToday: 0,
      quizAttempts: 0,
      quizTotalScore: 0,
      quizTotalQuestions: 0
    };
  }

  setClass(cls) {
    this.userClass = cls.toString();
    this.tasks = JSON.parse(JSON.stringify(CLASS_CONTENT_MAP[this.userClass].tasks));
    this.decks = JSON.parse(JSON.stringify(CLASS_CONTENT_MAP[this.userClass].decks));
    this.quizzes = JSON.parse(JSON.stringify(CLASS_CONTENT_MAP[this.userClass].quizzes));
    this.schedules = JSON.parse(JSON.stringify(CLASS_CONTENT_MAP[this.userClass].schedules));

    // Reset stats for fresh selection
    this.stats = {
      focusTime: 0,
      cardsStudiedCount: 0,
      completedSessionsToday: 0,
      quizAttempts: 0,
      quizTotalScore: 0,
      quizTotalQuestions: 0
    };

    this.save();
  }

  save() {
    if (this.userClass) {
      localStorage.setItem('aura_user_class', this.userClass);
    }
    localStorage.setItem('aura_tasks', JSON.stringify(this.tasks));
    localStorage.setItem('aura_decks', JSON.stringify(this.decks));
    localStorage.setItem('aura_quizzes', JSON.stringify(this.quizzes));
    localStorage.setItem('aura_schedules', JSON.stringify(this.schedules));
    localStorage.setItem('aura_timer_settings', JSON.stringify(this.timerSettings));
    localStorage.setItem('aura_stats', JSON.stringify(this.stats));
  }

  resetAll() {
    localStorage.clear();
    this.loadState();
    this.save();
  }
}

const state = new StateManager();

// --- 3. AUDIO SYNTHESIZER HUB (Web Audio API) ---
class AudioSynthesizer {
  constructor() {
    this.audioCtx = null;
    this.ambientNodes = {};
    this.gainNodes = {};
    this.volume = 0.5;
    this.currentAmbient = null;
  }

  initContext() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setVolume(val) {
    this.volume = parseFloat(val);
    if (this.currentAmbient && this.gainNodes[this.currentAmbient]) {
      this.gainNodes[this.currentAmbient].gain.value = this.volume;
    }
  }

  // Synthesize custom sound nodes
  playAmbient(type) {
    this.initContext();
    this.stopAmbient();

    const ctx = this.audioCtx;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume, ctx.currentTime);
    masterGain.connect(ctx.destination);
    this.gainNodes[type] = masterGain;

    if (type === 'white') {
      // White noise generator
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const source = ctx.createBufferSource();
      source.buffer = noiseBuffer;
      source.loop = true;

      // Filter to soften white noise to pinker spectrum
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, ctx.currentTime);

      source.connect(filter);
      filter.connect(masterGain);
      source.start(0);

      this.ambientNodes[type] = source;
    }
    else if (type === 'rain') {
      // Rain / Waves effect: Low-pass filtered noise modulated by LFO (swell)
      const bufferSize = 3 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const rainFilter = ctx.createBiquadFilter();
      rainFilter.type = 'lowpass';
      rainFilter.frequency.setValueAtTime(600, ctx.currentTime);

      // Low frequency oscillator (swell)
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // ~8 second wave cycles
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.25, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(masterGain.gain); // modulate volume

      noiseSource.connect(rainFilter);
      rainFilter.connect(masterGain);

      noiseSource.start(0);
      lfo.start(0);

      this.ambientNodes[type] = {
        noise: noiseSource,
        lfo: lfo
      };
    }
    else if (type === 'drone') {
      // Deep Work cosmic drone
      // Base frequencies (Sub-bass, harmonic mids)
      const frequencies = [65.4, 98.0, 130.8, 196.0]; // C2, G2, C3, G3
      const oscillators = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        osc.type = idx % 2 === 0 ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.08 / frequencies.length, ctx.currentTime);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(250, ctx.currentTime);

        osc.connect(filter);
        filter.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start(0);

        oscillators.push(osc);
      });

      this.ambientNodes[type] = oscillators;
    }

    this.currentAmbient = type;
  }

  stopAmbient() {
    if (!this.currentAmbient) return;

    const node = this.ambientNodes[this.currentAmbient];
    if (node) {
      if (Array.isArray(node)) {
        node.forEach(osc => { try { osc.stop(); } catch (e) { } });
      } else if (node.noise && node.lfo) {
        try { node.noise.stop(); node.lfo.stop(); } catch (e) { }
      } else {
        try { node.stop(); } catch (e) { }
      }
    }
    delete this.ambientNodes[this.currentAmbient];
    delete this.gainNodes[this.currentAmbient];
    this.currentAmbient = null;
  }

  // Synthesize sound alert (Alarm chime)
  playChime() {
    this.initContext();
    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Sequence of 3 sweet notes (Arpeggio)
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + (index * 0.15));

      gain.gain.setValueAtTime(0.3, now + (index * 0.15));
      gain.gain.exponentialRampToValueAtTime(0.001, now + (index * 0.15) + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + (index * 0.15));
      osc.stop(now + (index * 0.15) + 0.6);
    });
  }
}

const synthHub = new AudioSynthesizer();

// --- 4. APP CONTROLLER (NAVIGATION, CLOCK, MODALS, STATE RENDERS) ---
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initClassSelection();
  initClock();
  initNavigation();
  initQuote();
  initModals();

  // Render Components
  renderDashboard();
  renderTasks();
  renderFlashcardDecks();
  renderQuizzes();
  initSettings();
  initTimerPage();
  initPopQuizTrigger();
}

function initClassSelection() {
  const overlay = document.getElementById('class-select-overlay');
  if (!overlay) return;

  if (!state.userClass) {
    overlay.style.display = 'flex';

    const choiceBtns = overlay.querySelectorAll('.class-choice-btn');
    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cls = btn.getAttribute('data-class');
        state.setClass(cls);
        overlay.style.display = 'none';

        // Rerender all components with new database values
        updateGreetingMessage();
        renderDashboard();
        renderTasks();
        renderFlashcardDecks();
        renderQuizzes();
        initSettings();
      });
    });
  } else {
    overlay.style.display = 'none';
    updateGreetingMessage();
  }
}

function updateGreetingMessage() {
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  const now = new Date();
  const hour = now.getHours();
  let timeStr = 'Day';
  if (hour < 12) timeStr = 'Morning';
  else if (hour < 17) timeStr = 'Afternoon';
  else timeStr = 'Evening';

  if (state.userClass) {
    greetingEl.textContent = `Good ${timeStr}, Class ${state.userClass} Scholar`;
  } else {
    greetingEl.textContent = `Good ${timeStr}, Scholar`;
  }
}

// Sidebar View Switching Router
function initNavigation() {
  const navButtons = document.querySelectorAll('.nav-item');
  const panels = document.querySelectorAll('.content-panel');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');

      navButtons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target).classList.add('active');

      // Hook: specific page loads
      if (target === 'dashboard') {
        renderDashboard();
      } else if (target === 'tasks') {
        renderTasks();
      } else if (target === 'flashcards') {
        renderFlashcardDecks();
      } else if (target === 'quizzes') {
        renderQuizzes();
      }
    });
  });

  // Link inside Dashboard (View All)
  document.getElementById('view-all-tasks-btn').addEventListener('click', () => {
    document.querySelector('.nav-item[data-target="tasks"]').click();
  });
}

// Clock Header updates
function initClock() {
  const clockEl = document.getElementById('header-clock');
  const dateEl = document.getElementById('header-date');
  const greetingEl = document.getElementById('greeting');

  function update() {
    const now = new Date();

    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    clockEl.textContent = `${hours}:${minutes}`;

    // Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);

    // Greeting
    updateGreetingMessage();
  }

  update();
  setInterval(update, 1000 * 30); // update every half minute
}

// Quote Banner logic
function initQuote() {
  const quoteEl = document.getElementById('motivational-quote');
  const authorEl = document.getElementById('motivational-author');
  const refreshBtn = document.getElementById('new-quote-btn');

  function getNewQuote() {
    const randomIdx = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
    const quote = MOTIVATIONAL_QUOTES[randomIdx];
    quoteEl.textContent = `"${quote.text}"`;
    authorEl.textContent = `- ${quote.author}`;
  }

  refreshBtn.addEventListener('click', getNewQuote);
  getNewQuote(); // run once on start
}

// General Modal managers
function initModals() {
  const overlayBtns = document.querySelectorAll('.close-modal-btn');
  overlayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(overlay => overlay.classList.remove('active'));
    });
  });

  // Clicking overlay backdrop closes modal
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
}

// --- 5. COMPONENT: DASHBOARD & WEEKLY PLANNER ---
function renderDashboard() {
  // Stats counters
  document.getElementById('stat-focus-time').textContent = `${state.stats.focusTime}m`;

  const completedTasks = state.tasks.filter(t => t.completed).length;
  document.getElementById('stat-tasks-done').textContent = `${completedTasks}/${state.tasks.length}`;
  document.getElementById('stat-cards-mastered').textContent = state.stats.cardsStudiedCount;

  // Calculate average accuracy
  let accuracy = 0;
  if (state.stats.quizTotalQuestions > 0) {
    accuracy = Math.round((state.stats.quizTotalScore / state.stats.quizTotalQuestions) * 100);
  }
  document.getElementById('stat-quiz-accuracy').textContent = `${accuracy}%`;

  // Render Dashboard High priority lists
  const focusListEl = document.getElementById('dashboard-tasks-list');
  const highPriorityTasks = state.tasks.filter(t => !t.completed).sort((a, b) => {
    if (a.priority === 'High' && b.priority !== 'High') return -1;
    if (a.priority !== 'High' && b.priority === 'High') return 1;
    return 0;
  }).slice(0, 4);

  if (highPriorityTasks.length === 0) {
    focusListEl.innerHTML = '<p class="empty-state-text">No active task priorities. Create one in the Planner!</p>';
  } else {
    focusListEl.innerHTML = highPriorityTasks.map(task => `
      <div class="quick-task-item">
        <div class="quick-task-left">
          <span class="quick-task-name">${task.name}</span>
          <div class="quick-task-meta">
            <span>${task.subject}</span>
            <span class="priority-badge priority-${task.priority.toLowerCase()}">${task.priority}</span>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm link-pomodoro-btn" data-id="${task.id}">
          <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>Focus</span>
        </button>
      </div>
    `).join('');

    // Attach click events to "Focus" button to load into Pomodoro page
    focusListEl.querySelectorAll('.link-pomodoro-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const taskId = btn.getAttribute('data-id');
        selectActiveTask(taskId);
      });
    });
  }

  // Render Planner grid
  renderPlannerGrid();
}

function renderPlannerGrid() {
  const gridBody = document.getElementById('planner-grid-body');
  gridBody.innerHTML = '';

  // Time Slots 8:00 AM to 10:00 PM
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  timeSlots.forEach(time => {
    const row = document.createElement('div');
    row.className = 'planner-row';

    // Time label cell
    const timeLabel = parseInt(time.split(':')[0]);
    const ampm = timeLabel >= 12 ? 'PM' : 'AM';
    const formattedHour = timeLabel > 12 ? timeLabel - 12 : timeLabel;

    const timeCell = document.createElement('div');
    timeCell.className = 'planner-time-cell';
    timeCell.textContent = `${formattedHour} ${ampm}`;
    row.appendChild(timeCell);

    // Days columns
    days.forEach(day => {
      const dayCell = document.createElement('div');
      dayCell.className = 'planner-day-cell';
      dayCell.setAttribute('data-day', day);
      dayCell.setAttribute('data-time', time);

      // Find if there is a scheduled item matching this day and time
      const item = state.schedules.find(s => s.day === day && s.time === time);
      if (item) {
        const block = document.createElement('div');
        block.className = `schedule-block ${item.color || 'purple'}`;
        block.title = `${item.title} (Click to delete)`;
        block.innerHTML = `
          <span>${item.title}</span>
          <button class="delete-block-btn" data-id="${item.id}">&times;</button>
        `;

        block.querySelector('.delete-block-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          deleteSchedule(item.id);
        });

        dayCell.appendChild(block);
      }

      row.appendChild(dayCell);
    });

    gridBody.appendChild(row);
  });

  // Schedule modal button hookup
  document.getElementById('add-schedule-btn').onclick = () => {
    document.getElementById('schedule-form').reset();
    document.getElementById('schedule-modal').classList.add('active');
  };

  // Schedule form submit
  document.getElementById('schedule-form').onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById('schedule-title').value.trim();
    const day = document.getElementById('schedule-day').value;
    const time = document.getElementById('schedule-time').value;

    const colors = ['purple', 'blue', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newItem = {
      id: 'sched-' + Date.now(),
      title,
      day,
      time,
      color: randomColor
    };

    state.schedules.push(newItem);
    state.save();
    document.getElementById('schedule-modal').classList.remove('active');
    renderPlannerGrid();
  };
}

function deleteSchedule(id) {
  state.schedules = state.schedules.filter(s => s.id !== id);
  state.save();
  renderPlannerGrid();
}

// --- 6. COMPONENT: TO-DO LIST (TASK MANAGER) ---
let currentTaskFilter = 'all';

function renderTasks() {
  const container = document.getElementById('task-list-body');
  container.innerHTML = '';

  let filteredTasks = state.tasks;
  if (currentTaskFilter === 'active') {
    filteredTasks = state.tasks.filter(t => !t.completed);
  } else if (currentTaskFilter === 'completed') {
    filteredTasks = state.tasks.filter(t => t.completed);
  }

  // Sorting: Pending high priority first
  filteredTasks.sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;

    const priorityWeights = { High: 3, Medium: 2, Low: 1 };
    return priorityWeights[b.priority] - priorityWeights[a.priority];
  });

  if (filteredTasks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" width="48" height="48" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" fill="none"><line x1="9" y1="6" x2="20" y2="6"></line><line x1="9" y1="12" x2="20" y2="12"></line><line x1="9" y1="18" x2="20" y2="18"></line></svg>
        <p>No study tasks found matching the filter "${currentTaskFilter}".</p>
      </div>
    `;
    return;
  }

  filteredTasks.forEach(task => {
    const item = document.createElement('div');
    item.className = `task-item ${task.completed ? 'completed' : ''}`;

    // Pomodoro dots representation
    let pomodoroDots = '';
    for (let i = 0; i < task.targetPomodoros; i++) {
      const activeClass = i < task.completedPomodoros ? 'active' : '';
      pomodoroDots += `<span class="pomodoro-dot ${activeClass}"></span>`;
    }

    item.innerHTML = `
      <div class="th-check">
        <label class="checkbox-container">
          <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="task-title" title="${task.name}">${task.name}</div>
      <div class="task-subject">${task.subject}</div>
      <div class="task-date">${task.dueDate}</div>
      <div>
        <span class="priority-badge priority-${task.priority.toLowerCase()}">${task.priority}</span>
      </div>
      <div class="task-pomodoro-count">
        ${pomodoroDots}
        <span style="font-size:11px; margin-left: 4px;">(${task.completedPomodoros}/${task.targetPomodoros})</span>
      </div>
      <div class="task-action-buttons">
        <button class="btn-icon task-focus-btn" data-id="${task.id}" title="Focus on this task" ${task.completed ? 'disabled style="opacity:0.3"' : ''}>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--accent-purple)" stroke-width="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </button>
        <button class="btn-icon task-delete-btn" data-id="${task.id}" title="Delete task">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--accent-red)" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    `;

    // Listeners inside individual task items
    item.querySelector('.task-checkbox').addEventListener('change', (e) => {
      toggleTaskCompletion(task.id, e.target.checked);
    });

    item.querySelector('.task-focus-btn').addEventListener('click', () => {
      selectActiveTask(task.id);
    });

    item.querySelector('.task-delete-btn').addEventListener('click', () => {
      deleteTask(task.id);
    });

    container.appendChild(item);
  });
}

// Filtering Tabs logic
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentTaskFilter = tab.getAttribute('data-filter');
    renderTasks();
  });
});

// Create task triggers
document.getElementById('create-task-btn').addEventListener('click', () => {
  document.getElementById('task-form').reset();
  document.getElementById('task-id-field').value = '';
  document.getElementById('task-modal-title').textContent = 'Create Study Task';

  // Set default due date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById('task-due-date').value = tomorrow.toISOString().substring(0, 10);

  document.getElementById('task-modal').classList.add('active');
});

// Submit Form Task
document.getElementById('task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const idField = document.getElementById('task-id-field').value;
  const name = document.getElementById('task-name').value.trim();
  const subject = document.getElementById('task-subject').value.trim();
  const priority = document.getElementById('task-priority').value;
  const dueDate = document.getElementById('task-due-date').value;
  const targetPomodoros = parseInt(document.getElementById('task-pomodoros').value);

  if (idField) {
    // Edit (Not used in default layout but supported in State)
    const taskIdx = state.tasks.findIndex(t => t.id === idField);
    if (taskIdx !== -1) {
      state.tasks[taskIdx] = { ...state.tasks[taskIdx], name, subject, priority, dueDate, targetPomodoros };
    }
  } else {
    // Create new
    const newTask = {
      id: 'task-' + Date.now(),
      name,
      subject,
      priority,
      dueDate,
      targetPomodoros,
      completedPomodoros: 0,
      completed: false
    };
    state.tasks.push(newTask);
  }

  state.save();
  document.getElementById('task-modal').classList.remove('active');
  renderTasks();
});

function toggleTaskCompletion(id, checked) {
  const task = state.tasks.find(t => t.id === id);
  if (task) {
    task.completed = checked;
    state.save();
    renderTasks();
  }
}

function deleteTask(id) {
  if (confirm('Delete this task?')) {
    state.tasks = state.tasks.filter(t => t.id !== id);
    // Unlink if it was loaded in timer
    if (activeTask && activeTask.id === id) {
      activeTask = null;
      document.getElementById('active-task-container').style.display = 'none';
      document.getElementById('active-task-title').textContent = 'General Study Session';
      document.getElementById('clear-active-task').style.display = 'none';
    }
    state.save();
    renderTasks();
  }
}

// Load task in Pomodoro page router
let activeTask = null;

function selectActiveTask(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (task) {
    activeTask = task;

    // Update Pomodoro timer UI labels
    document.getElementById('active-task-container').style.display = 'inline-flex';
    document.getElementById('active-task-title').textContent = `${task.subject}: ${task.name}`;
    document.getElementById('clear-active-task').style.display = 'block';

    // Go to Pomodoro tab
    document.querySelector('.nav-item[data-target="pomodoro"]').click();
  }
}

document.getElementById('clear-active-task').addEventListener('click', () => {
  activeTask = null;
  document.getElementById('active-task-container').style.display = 'inline-flex';
  document.getElementById('active-task-title').textContent = 'General Study Session';
  document.getElementById('clear-active-task').style.display = 'none';
});

// --- 7. COMPONENT: POMODORO TIMER TIMER ---
let timerInterval = null;
let timerSecondsRemaining = 25 * 60;
let timerTotalDurationSeconds = 25 * 60;
let timerMode = 'pomodoro'; // 'pomodoro', 'shortBreak', 'longBreak'
let timerIsRunning = false;

function initTimerPage() {
  const countdownEl = document.getElementById('timer-countdown');
  const toggleBtn = document.getElementById('timer-toggle');
  const resetBtn = document.getElementById('timer-reset');
  const skipBtn = document.getElementById('timer-skip');
  const modeBtns = document.querySelectorAll('.timer-mode-btn');

  // Load times
  timerSecondsRemaining = state.timerSettings.pomodoro * 60;
  timerTotalDurationSeconds = state.timerSettings.pomodoro * 60;
  updateTimerDisplay();

  // Mode clicks
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const newMode = btn.getAttribute('data-mode');
      switchTimerMode(newMode);
    });
  });

  // Play / Pause toggle
  toggleBtn.addEventListener('click', () => {
    if (timerIsRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  });

  // Reset clock
  resetBtn.addEventListener('click', () => {
    pauseTimer();
    const minutes = state.timerSettings[timerMode];
    timerSecondsRemaining = minutes * 60;
    timerTotalDurationSeconds = minutes * 60;
    updateTimerDisplay();
  });

  // Skip step
  skipBtn.addEventListener('click', () => {
    pauseTimer();
    handleSessionComplete(true); // completed via skip
  });

  // Ambient sound buttons togglers
  const ambientBtns = document.querySelectorAll('.btn-ambient');
  ambientBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const soundType = btn.getAttribute('data-sound');
      const wasActive = btn.classList.contains('active');

      ambientBtns.forEach(b => {
        b.classList.remove('active');
        b.querySelector('.sound-on-icon').style.display = 'none';
        b.querySelector('.sound-off-icon').style.display = 'block';
      });

      if (!wasActive) {
        btn.classList.add('active');
        btn.querySelector('.sound-on-icon').style.display = 'block';
        btn.querySelector('.sound-off-icon').style.display = 'none';
        synthHub.playAmbient(soundType);
      } else {
        synthHub.stopAmbient();
      }
    });
  });

  // Ambient Volume Slider
  document.getElementById('ambient-volume').addEventListener('input', (e) => {
    synthHub.setVolume(e.target.value);
  });
}

function switchTimerMode(mode) {
  pauseTimer();
  timerMode = mode;
  const minutes = state.timerSettings[mode];
  timerSecondsRemaining = minutes * 60;
  timerTotalDurationSeconds = minutes * 60;

  // UI adjustments
  const statusEl = document.getElementById('timer-current-status');
  const miniStatus = document.getElementById('mini-session-info');
  const timerBar = document.getElementById('timer-bar');

  if (mode === 'pomodoro') {
    statusEl.textContent = 'FOCUS TIME';
    miniStatus.textContent = 'Focusing...';
    timerBar.style.stroke = 'var(--accent-purple)';
    timerBar.style.filter = 'drop-shadow(0 0 6px var(--accent-purple-glow))';
  } else {
    statusEl.textContent = 'BREAK TIME';
    miniStatus.textContent = 'On Break';
    timerBar.style.stroke = 'var(--accent-pink)';
    timerBar.style.filter = 'drop-shadow(0 0 6px var(--accent-pink-glow))';
  }

  // Update tabs active state if switched internally
  document.querySelectorAll('.timer-mode-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-mode') === mode) {
      btn.classList.add('active');
    }
  });

  updateTimerDisplay();
}

function startTimer() {
  if (timerIsRunning) return;

  synthHub.initContext(); // ensure audio context is ready
  timerIsRunning = true;
  document.getElementById('play-icon').style.display = 'none';
  document.getElementById('pause-icon').style.display = 'block';

  timerInterval = setInterval(() => {
    timerSecondsRemaining--;
    updateTimerDisplay();

    if (timerSecondsRemaining <= 0) {
      handleSessionComplete(false);
    }
  }, 1000);
}

function pauseTimer() {
  if (!timerIsRunning) return;
  timerIsRunning = false;
  clearInterval(timerInterval);
  document.getElementById('play-icon').style.display = 'block';
  document.getElementById('pause-icon').style.display = 'none';
}

function updateTimerDisplay() {
  const min = Math.floor(timerSecondsRemaining / 60);
  const sec = timerSecondsRemaining % 60;
  document.getElementById('timer-countdown').textContent = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;

  // SVG dash array calculation
  // Total stroke-dasharray = 2 * PI * r = 2 * 3.14159 * 88 = 552.92
  const maxDash = 552.92;
  const progressRatio = timerSecondsRemaining / timerTotalDurationSeconds;
  const offset = maxDash * (1 - progressRatio);
  document.getElementById('timer-bar').style.strokeDashoffset = offset;
}

function handleSessionComplete(isSkip = false) {
  clearInterval(timerInterval);
  timerIsRunning = false;
  document.getElementById('play-icon').style.display = 'block';
  document.getElementById('pause-icon').style.display = 'none';

  // Sound Synth alert chime
  synthHub.playChime();

  if (!isSkip) {
    if (timerMode === 'pomodoro') {
      // Focus complete
      state.stats.completedSessionsToday += 1;
      const minutesCompleted = state.timerSettings.pomodoro;
      state.stats.focusTime += minutesCompleted;

      // Handle linked task pomodoro count increments
      if (activeTask) {
        const taskObj = state.tasks.find(t => t.id === activeTask.id);
        if (taskObj) {
          taskObj.completedPomodoros += 1;
          if (taskObj.completedPomodoros >= taskObj.targetPomodoros) {
            taskObj.completed = true;
            alert(`Amazing! You completed task: "${taskObj.name}"`);
            activeTask = null;
            document.getElementById('active-task-container').style.display = 'none';
            document.getElementById('active-task-title').textContent = 'General Study Session';
            document.getElementById('clear-active-task').style.display = 'none';
          }
        }
      }

      state.save();
      alert('Focus session complete! Time to take a breather.');

      // Auto-start next break
      if (state.timerSettings.autoBreaks) {
        switchTimerMode('shortBreak');
        startTimer();
      } else {
        switchTimerMode('shortBreak');
      }
    } else {
      // Break complete
      state.save();
      alert('Break time is over! Let\'s get back to studying.');

      // Auto-start focus
      if (state.timerSettings.autoPomodoros) {
        switchTimerMode('pomodoro');
        startTimer();
      } else {
        switchTimerMode('pomodoro');
      }
    }
  } else {
    // Toggle manual sequence (if skipped)
    if (timerMode === 'pomodoro') {
      switchTimerMode('shortBreak');
    } else {
      switchTimerMode('pomodoro');
    }
  }

  // Update Pomodoro side stats elements
  document.getElementById('timer-stats-completed').textContent = state.stats.completedSessionsToday;
  document.getElementById('timer-stats-total-time').textContent = `${state.stats.focusTime}m`;
  renderDashboard();
}

// --- 8. COMPONENT: FLASHCARDS (DECKS AND STUDY CAROUSEL) ---
let currentStudyDeck = null;
let currentStudyCardIndex = 0;

function renderFlashcardDecks() {
  const grid = document.getElementById('decks-grid');
  grid.innerHTML = '';

  state.decks.forEach(deck => {
    const card = document.createElement('div');
    card.className = 'glass-card deck-card';
    card.innerHTML = `
      <div class="deck-card-info">
        <h3>${deck.name}</h3>
        <p>${deck.cards.length} flashcards inside</p>
      </div>
      
      <div class="deck-card-actions">
        <button class="btn btn-gradient btn-sm study-deck-btn" data-id="${deck.id}">Study Deck</button>
        <div class="deck-edit-opts">
          <button class="btn-icon add-card-btn" data-id="${deck.id}" title="Add flashcard">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
          <button class="btn-icon delete-deck-btn" data-id="${deck.id}" title="Delete deck">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--accent-red)" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    `;

    // Deck actions
    card.querySelector('.study-deck-btn').addEventListener('click', () => {
      startDeckStudy(deck.id);
    });

    card.querySelector('.add-card-btn').addEventListener('click', () => {
      document.getElementById('card-form').reset();
      document.getElementById('card-deck-id').value = deck.id;
      document.getElementById('card-modal').classList.add('active');
    });

    card.querySelector('.delete-deck-btn').addEventListener('click', () => {
      deleteDeck(deck.id);
    });

    grid.appendChild(card);
  });
}

// Deck Modals Actions
document.getElementById('create-deck-btn').addEventListener('click', () => {
  document.getElementById('deck-form').reset();
  document.getElementById('deck-modal').classList.add('active');
});

document.getElementById('deck-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('deck-name').value.trim();
  const newDeck = {
    id: 'deck-' + Date.now(),
    name,
    cards: []
  };

  state.decks.push(newDeck);
  state.save();
  document.getElementById('deck-modal').classList.remove('active');
  renderFlashcardDecks();
});

document.getElementById('card-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const deckId = document.getElementById('card-deck-id').value;
  const front = document.getElementById('card-front').value.trim();
  const back = document.getElementById('card-back').value.trim();

  const deck = state.decks.find(d => d.id === deckId);
  if (deck) {
    deck.cards.push({
      id: 'card-' + Date.now(),
      front,
      back,
      rating: 'none'
    });
    state.save();
    document.getElementById('card-modal').classList.remove('active');
    renderFlashcardDecks();
  }
});

function deleteDeck(id) {
  if (confirm('Delete this flashcard deck permanently?')) {
    state.decks = state.decks.filter(d => d.id !== id);
    state.save();
    renderFlashcardDecks();
  }
}

// FLASHCARD ACTIVE CAROUSEL STUDY MODE
function startDeckStudy(deckId) {
  const deck = state.decks.find(d => d.id === deckId);
  if (!deck || deck.cards.length === 0) {
    alert('Please add some cards to this deck first!');
    return;
  }

  currentStudyDeck = deck;
  currentStudyCardIndex = 0;

  // Toggle View panels
  document.getElementById('decks-grid').style.display = 'none';
  document.getElementById('create-deck-btn').style.display = 'none';
  document.getElementById('deck-study-view').style.display = 'flex';

  document.getElementById('study-deck-title').textContent = deck.name;

  loadStudyCard();
}

function loadStudyCard() {
  const card = currentStudyDeck.cards[currentStudyCardIndex];

  // Update labels
  document.getElementById('study-card-index').textContent = currentStudyCardIndex + 1;
  document.getElementById('study-card-total').textContent = currentStudyDeck.cards.length;

  // Card reset
  const flashcard3d = document.getElementById('interactive-flashcard');
  flashcard3d.classList.remove('flipped');
  document.getElementById('card-front-text').textContent = card.front;
  document.getElementById('card-back-text').textContent = card.back;

  // Toggle rating helper visibility initially off
  document.getElementById('rate-buttons-container').style.display = 'none';
  document.getElementById('reveal-card-btn').style.display = 'block';
}

// Flipping Animations and interactions
document.getElementById('interactive-flashcard').addEventListener('click', toggleCardFlip);
document.getElementById('reveal-card-btn').addEventListener('click', () => {
  toggleCardFlip(true);
});

function toggleCardFlip(forceFlip = false) {
  const cardElement = document.getElementById('interactive-flashcard');
  cardElement.classList.toggle('flipped');

  // Reveal self-rating options when flipped over
  const isFlippedNow = cardElement.classList.contains('flipped');
  if (isFlippedNow) {
    document.getElementById('rate-buttons-container').style.display = 'flex';
    document.getElementById('reveal-card-btn').style.display = 'none';
  } else {
    document.getElementById('rate-buttons-container').style.display = 'none';
    document.getElementById('reveal-card-btn').style.display = 'block';
  }
}

// Study carousel next and previous controls
document.getElementById('prev-card-btn').addEventListener('click', () => {
  if (currentStudyCardIndex > 0) {
    currentStudyCardIndex--;
    loadStudyCard();
  }
});

document.getElementById('next-card-btn').addEventListener('click', () => {
  if (currentStudyCardIndex < currentStudyDeck.cards.length - 1) {
    currentStudyCardIndex++;
    loadStudyCard();
  } else {
    alert('You have reached the end of the deck!');
  }
});

// Self assessment buttons clicks
document.querySelectorAll('.rating-btn-group button').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const ratingType = btn.getAttribute('data-rating');
    const card = currentStudyDeck.cards[currentStudyCardIndex];

    // Save state review ratings
    card.rating = ratingType;
    state.stats.cardsStudiedCount += 1;
    state.save();

    // Advance naturally
    if (currentStudyCardIndex < currentStudyDeck.cards.length - 1) {
      currentStudyCardIndex++;
      loadStudyCard();
    } else {
      alert('Deck review complete! Excellent work.');
      document.getElementById('exit-study-btn').click();
    }
  });
});

// Exit study view
document.getElementById('exit-study-btn').addEventListener('click', () => {
  document.getElementById('deck-study-view').style.display = 'none';
  document.getElementById('decks-grid').style.display = 'grid';
  document.getElementById('create-deck-btn').style.display = 'block';
  renderFlashcardDecks();
});

// --- 9. COMPONENT: QUIZ MAKER & INTERACTIVE RUN ---
let activePlayQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let answerSelected = null;

function renderQuizzes() {
  const grid = document.getElementById('quizzes-grid');
  grid.innerHTML = '';

  state.quizzes.forEach(quiz => {
    const card = document.createElement('div');
    card.className = 'glass-card quiz-card';
    card.innerHTML = `
      <div class="quiz-info">
        <h3>${quiz.name}</h3>
        <p>${quiz.questions.length} questions included</p>
      </div>
      <div class="quiz-actions">
        <button class="btn btn-gradient btn-sm start-quiz-btn" data-id="${quiz.id}">Start Quiz</button>
        <button class="btn-icon delete-quiz-btn" data-id="${quiz.id}" title="Delete Quiz">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--accent-red)" stroke-width="2" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    `;

    card.querySelector('.start-quiz-btn').addEventListener('click', () => {
      startQuizSession(quiz.id);
    });

    card.querySelector('.delete-quiz-btn').addEventListener('click', () => {
      deleteQuiz(quiz.id);
    });

    grid.appendChild(card);
  });
}

function deleteQuiz(id) {
  if (confirm('Delete this quiz permanently?')) {
    state.quizzes = state.quizzes.filter(q => q.id !== id);
    state.save();
    renderQuizzes();
  }
}

// CREATE QUIZ MODAL BUILDER SCRIPTS
let quizQuestionsInputList = [];

document.getElementById('create-quiz-btn').addEventListener('click', () => {
  document.getElementById('quiz-form').reset();
  document.getElementById('quiz-id-field').value = '';
  document.getElementById('modal-questions-list').innerHTML = '';
  quizQuestionsInputList = [];
  document.getElementById('modal-question-count').textContent = 0;

  // Add first question input form automatically
  addQuestionFieldToModal();
  document.getElementById('quiz-modal').classList.add('active');
});

document.getElementById('modal-add-question-btn').addEventListener('click', () => {
  addQuestionFieldToModal();
});

function addQuestionFieldToModal() {
  const index = quizQuestionsInputList.length;
  const container = document.getElementById('modal-questions-list');
  const id = 'modal-q-' + index;

  const item = document.createElement('div');
  item.className = 'question-builder-item';
  item.id = id;
  item.innerHTML = `
    <button type="button" class="btn-icon remove-question-btn" onclick="removeQuestionFieldFromModal('${id}')">&times;</button>
    <div class="form-group">
      <label>Question #${index + 1}</label>
      <input type="text" class="q-text" placeholder="e.g., What is cellular energy currency?" required>
    </div>
    
    <div class="form-row" style="margin-bottom:8px">
      <div class="form-group" style="margin-bottom:0">
        <label>A</label>
        <input type="text" class="q-opt" required>
      </div>
      <div class="form-group" style="margin-bottom:0">
        <label>B</label>
        <input type="text" class="q-opt" required>
      </div>
    </div>
    
    <div class="form-row" style="margin-bottom:12px">
      <div class="form-group" style="margin-bottom:0">
        <label>C</label>
        <input type="text" class="q-opt" required>
      </div>
      <div class="form-group" style="margin-bottom:0">
        <label>D</label>
        <input type="text" class="q-opt" required>
      </div>
    </div>
    
    <div class="form-group">
      <label>Correct Choice Option</label>
      <select class="q-correct">
        <option value="0">Option A</option>
        <option value="1">Option B</option>
        <option value="2">Option C</option>
        <option value="3">Option D</option>
      </select>
    </div>
  `;

  container.appendChild(item);
  quizQuestionsInputList.push(id);
  document.getElementById('modal-question-count').textContent = quizQuestionsInputList.length;
}

// Global hook for deleting inside modal questions builder
window.removeQuestionFieldFromModal = function (elementId) {
  if (quizQuestionsInputList.length <= 1) {
    alert('A quiz must contain at least one question!');
    return;
  }
  const el = document.getElementById(elementId);
  if (el) {
    el.remove();
    quizQuestionsInputList = quizQuestionsInputList.filter(id => id !== elementId);
    document.getElementById('modal-question-count').textContent = quizQuestionsInputList.length;
  }
};

// Form Quiz saving
document.getElementById('quiz-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('quiz-name').value.trim();
  const qElements = document.querySelectorAll('.question-builder-item');
  const questions = [];

  qElements.forEach(el => {
    const text = el.querySelector('.q-text').value.trim();
    const optionElements = el.querySelectorAll('.q-opt');
    const options = Array.from(optionElements).map(opt => opt.value.trim());
    const correctIndex = parseInt(el.querySelector('.q-correct').value);

    questions.push({
      id: 'q-' + Date.now() + Math.random().toString(36).substr(2, 4),
      text,
      options,
      correctIndex
    });
  });

  const newQuiz = {
    id: 'quiz-' + Date.now(),
    name: title,
    questions
  };

  state.quizzes.push(newQuiz);
  state.save();
  document.getElementById('quiz-modal').classList.remove('active');
  renderQuizzes();
});

// START PLAYING THE QUIZ
function startQuizSession(quizId) {
  const quiz = state.quizzes.find(q => q.id === quizId);
  if (!quiz || quiz.questions.length === 0) {
    alert('This quiz is empty!');
    return;
  }

  activePlayQuiz = quiz;
  currentQuestionIndex = 0;
  quizScore = 0;
  answerSelected = null;

  // Toggle View displays
  document.getElementById('quizzes-grid').style.display = 'none';
  document.getElementById('create-quiz-btn').style.display = 'none';
  document.getElementById('quiz-play-view').style.display = 'flex';
  document.getElementById('quiz-result-view').style.display = 'none';

  document.getElementById('play-quiz-title').textContent = quiz.name;

  loadQuizQuestion();
}

function loadQuizQuestion() {
  answerSelected = null;
  const question = activePlayQuiz.questions[currentQuestionIndex];

  // Progress calculations
  const totalQuestions = activePlayQuiz.questions.length;
  document.getElementById('quiz-progress-text').textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;

  const percentage = ((currentQuestionIndex) / totalQuestions) * 100;
  document.getElementById('quiz-progress-fill').style.width = `${percentage}%`;

  document.getElementById('quiz-question-text').textContent = question.text;

  // Render options buttons list
  const container = document.getElementById('quiz-options-container');
  container.innerHTML = '';

  question.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span style="font-weight:700; margin-right:8px">${['A', 'B', 'C', 'D'][index]}.</span> ${optText}`;
    btn.addEventListener('click', () => {
      if (answerSelected !== null) return; // lock inputs after submittal

      // Select option toggles
      container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      document.getElementById('submit-answer-btn').disabled = false;
      answerSelected = index;
    });
    container.appendChild(btn);
  });

  document.getElementById('submit-answer-btn').disabled = true;
  document.getElementById('submit-answer-btn').textContent = 'Confirm Answer';
}

// Answer submission
document.getElementById('submit-answer-btn').addEventListener('click', () => {
  const currentQ = activePlayQuiz.questions[currentQuestionIndex];
  const container = document.getElementById('quiz-options-container');
  const buttons = container.querySelectorAll('.option-btn');

  // If already confirmed, move next
  if (document.getElementById('submit-answer-btn').textContent === 'Next Question') {
    currentQuestionIndex++;
    if (currentQuestionIndex < activePlayQuiz.questions.length) {
      loadQuizQuestion();
    } else {
      showQuizResults();
    }
    return;
  }

  // Answer validation styling
  const isCorrect = answerSelected === currentQ.correctIndex;
  if (isCorrect) {
    quizScore++;
    buttons[answerSelected].classList.add('correct');
  } else {
    buttons[answerSelected].classList.add('incorrect');
    buttons[currentQ.correctIndex].classList.add('correct'); // reveal correct one
  }

  // Alter submit button behavior to act as router next
  document.getElementById('submit-answer-btn').textContent = 'Next Question';
}
);

function showQuizResults() {
  document.getElementById('quiz-play-view').style.display = 'none';
  document.getElementById('quiz-result-view').style.display = 'flex';

  const total = activePlayQuiz.questions.length;
  const accuracy = Math.round((quizScore / total) * 100);

  document.getElementById('quiz-final-score').textContent = `You scored ${quizScore} out of ${total} (${accuracy}%)`;
  document.getElementById('quiz-result-correct').textContent = quizScore;
  document.getElementById('quiz-result-wrong').textContent = total - quizScore;
  document.getElementById('quiz-result-percentage').textContent = `${accuracy}%`;

  // Save statistics
  state.stats.quizAttempts += 1;
  state.stats.quizTotalScore += quizScore;
  state.stats.quizTotalQuestions += total;
  state.save();
}

// Navigation / Retry Quiz buttons
document.getElementById('retry-quiz-btn').onclick = () => {
  startQuizSession(activePlayQuiz.id);
};

document.getElementById('finish-quiz-btn').onclick = () => {
  document.getElementById('quiz-result-view').style.display = 'none';
  document.getElementById('quizzes-grid').style.display = 'grid';
  document.getElementById('create-quiz-btn').style.display = 'block';
  renderQuizzes();
};

document.getElementById('exit-quiz-btn').onclick = () => {
  if (confirm('Cancel quiz session? Score will not be counted.')) {
    document.getElementById('quiz-play-view').style.display = 'none';
    document.getElementById('quizzes-grid').style.display = 'grid';
    document.getElementById('create-quiz-btn').style.display = 'block';
    renderQuizzes();
  }
};

// --- 10. COMPONENT: REMINDER POP-QUIZ TRIGGER SYSTEM ---
let currentPopQuiz = null;

function initPopQuizTrigger() {
  // Alert banner buttons trigger
  document.getElementById('pop-quiz-btn').addEventListener('click', () => {
    launchReminderPopQuiz();
  });
}

function launchReminderPopQuiz() {
  // Synthesize options database
  let questionsPool = [];

  // Grab questions from custom quizzes first
  state.quizzes.forEach(quiz => {
    questionsPool = questionsPool.concat(quiz.questions);
  });

  // Pull flashcards as a simple text conversion questions fallback
  state.decks.forEach(deck => {
    deck.cards.forEach(card => {
      questionsPool.push({
        text: `From deck [${deck.name}]: ${card.front}`,
        options: [card.back, 'Incorrect Definition A', 'Incorrect Definition B', 'Incorrect Definition C'].sort(() => Math.random() - 0.5),
        correctIndex: -1 // will resolve matches below
      });
    });
  });

  // Default fallbacks if database is thin
  if (questionsPool.length === 0) {
    questionsPool = DEFAULT_POP_QUIZZES;
  }

  // Draw one random quiz question
  const randomQIndex = Math.floor(Math.random() * questionsPool.length);
  const q = questionsPool[randomQIndex];

  // Resolve card correct answers Index
  if (q.correctIndex === -1) {
    // Locate match
    const deckMatch = state.decks.find(d => d.cards.some(c => c.front === q.text.split(': ')[1]));
    if (deckMatch) {
      const cardObj = deckMatch.cards.find(c => c.front === q.text.split(': ')[1]);
      if (cardObj) {
        q.correctIndex = q.options.indexOf(cardObj.back);
      }
    }
    if (q.correctIndex === -1) q.correctIndex = 0; // standard fallback
  }

  currentPopQuiz = q;

  // Load modal inputs
  document.getElementById('pop-question-title').textContent = q.text;
  document.getElementById('pop-quiz-feedback').style.display = 'none';
  document.getElementById('pop-quiz-next-btn').style.display = 'none';

  const container = document.getElementById('pop-quiz-options-container');
  container.innerHTML = '';

  q.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = optText;
    btn.addEventListener('click', () => {
      validatePopQuizAnswer(index);
    });
    container.appendChild(btn);
  });

  document.getElementById('pop-quiz-modal').classList.add('active');
}

function validatePopQuizAnswer(selectedIndex) {
  const container = document.getElementById('pop-quiz-options-container');
  const buttons = container.querySelectorAll('.option-btn');
  const feedbackEl = document.getElementById('pop-quiz-feedback');
  const correctIdx = currentPopQuiz.correctIndex;

  // Lock buttons input
  buttons.forEach(btn => btn.style.pointerEvents = 'none');

  if (selectedIndex === correctIdx) {
    buttons[selectedIndex].classList.add('correct');
    feedbackEl.className = 'pop-feedback-message correct';
    feedbackEl.innerHTML = '🎉 Correct! Memory refreshed.';

    // update stats
    state.stats.quizTotalScore += 1;
    state.stats.quizTotalQuestions += 1;
  } else {
    buttons[selectedIndex].classList.add('incorrect');
    buttons[correctIdx].classList.add('correct');
    feedbackEl.className = 'pop-feedback-message';
    feedbackEl.innerHTML = `Incorrect. The correct answer was: <strong>${currentPopQuiz.options[correctIdx]}</strong>`;

    state.stats.quizTotalQuestions += 1;
  }
  state.save();

  feedbackEl.style.display = 'block';
  document.getElementById('pop-quiz-next-btn').style.display = 'inline-block';

  // Attach next pop-quiz rotation trigger
  document.getElementById('pop-quiz-next-btn').onclick = () => {
    launchReminderPopQuiz();
  };
}

// --- 11. SETTINGS CONFIGS & RESTORE DEFAULTS ---
function initSettings() {
  const settingsCard = document.getElementById('settings');
  if (!settingsCard) return;

  // Read current values into inputs
  document.getElementById('settings-pomodoro').value = state.timerSettings.pomodoro;
  document.getElementById('settings-short').value = state.timerSettings.shortBreak;
  document.getElementById('settings-long').value = state.timerSettings.longBreak;
  document.getElementById('settings-auto-breaks').checked = state.timerSettings.autoBreaks;
  document.getElementById('settings-auto-pomodoro').checked = state.timerSettings.autoPomodoros;

  if (state.userClass) {
    document.getElementById('settings-user-class').value = state.userClass;
  }

  // Save hooks
  const saveTriggerFields = ['settings-pomodoro', 'settings-short', 'settings-long'];
  saveTriggerFields.forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      updateTimerSettings();
    });
  });

  const checkBoxes = ['settings-auto-breaks', 'settings-auto-pomodoro'];
  checkBoxes.forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      updateTimerSettings();
    });
  });

  // User class change save hook
  document.getElementById('settings-user-class').addEventListener('change', (e) => {
    const newClass = e.target.value;
    if (confirm(`Change your academic grade level to Class ${newClass}? This will reload preloaded default tasks, flashcards, and quizzes for Class ${newClass}.`)) {
      state.setClass(newClass);

      // Update UI panels instantly
      updateGreetingMessage();
      renderDashboard();
      renderTasks();
      renderFlashcardDecks();
      renderQuizzes();
    } else {
      // revert dropdown
      e.target.value = state.userClass;
    }
  });

  // Clear memory data
  document.getElementById('clear-all-data-btn').onclick = () => {
    if (confirm('CAUTION: This will delete all tasks, flashcards, quizzes and planner blocks from local memory. Do you want to proceed?')) {
      state.resetAll();
      alert('Data reset completed successfully.');
      window.location.reload();
    }
  };
}

function updateTimerSettings() {
  const pomodoro = parseInt(document.getElementById('settings-pomodoro').value);
  const shortBreak = parseInt(document.getElementById('settings-short').value);
  const longBreak = parseInt(document.getElementById('settings-long').value);
  const autoBreaks = document.getElementById('settings-auto-breaks').checked;
  const autoPomodoros = document.getElementById('settings-auto-pomodoro').checked;

  state.timerSettings = {
    pomodoro,
    shortBreak,
    longBreak,
    autoBreaks,
    autoPomodoros
  };
  state.save();

  // Reset clock to new durations
  if (!timerIsRunning) {
    switchTimerMode(timerMode);
  }
}
