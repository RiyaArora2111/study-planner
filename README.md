# StudyMentor: Premium Glassmorphic Study Planner & Focus Hub 🌌

Welcome to **StudyMentor** (formerly Aura Study Hub) – a premium, visually stunning, and highly interactive Single-Page Application (SPA) designed to elevate student productivity. Built using modern glassmorphic aesthetics, fluid micro-interactions, and robust offline-first sound synthesis capabilities, StudyMentor offers a personalized focus ecosystem.

---
##this is good
## 🗺️ Architectural Workflow & Data Flows

### 1. Scholar Onboarding & State Initialization Flow
When a user visits StudyMentor for the first time, they select their educational grade (Class 1 to 5). This selection acts as a seed to generate age-appropriate tasks, flashcard decks, quizzes, and schedules.

```mermaid
flowchart TD
    A[Start Application] --> B{Is Class Selected?\nCheck localStorage}
    B -- Yes --> C[Load State from localStorage]
    B -- No --> D[Show Class Selector Overlay]
    D --> E[User Selects Class 1-5]
    E --> F[Seed CLASS_CONTENT_MAP Content]
    F --> G[Initialize Default Stats & Schedules]
    G --> H[Save State to localStorage]
    H --> C
    C --> I[Initialize Audio Context]
    C --> J[Render SPA Dashboard & Components]
```

### 2. Audio Synthesizer Engine (Web Audio API)
Unlike traditional web players, StudyMentor does not fetch external MP3 files. It synthesizes soundwaves dynamically in the browser utilizing the Web Audio API, which functions completely offline.

```mermaid
flowchart TD
    SubGraph1[Web Audio API Graph]
    A[Play Ambient Sound Request] --> B{Sound Type}
    
    B -- "White Noise (Pink Filter)" --> C[Generate Random Signal Buffer]
    C --> D[Biquad Lowpass Filter @ 1000Hz]
    D --> G[Master Gain Node]
    
    B -- "Rain / Waves (Modulated)" --> E[Generate Wave Noise Buffer]
    E --> F[Biquad Lowpass Filter @ 600Hz]
    H[Low Frequency Oscillator @ 0.12Hz] --> I[LFO Gain Node]
    I --> G
    F --> G
    
    B -- "Deep Cosmic Drone" --> J[Base Frequencies: 65.4Hz, 98.0Hz, 130.8Hz, 196.0Hz]
    J --> K[Harmonic Sine & Sawtooth Oscillators]
    K --> L[Biquad Lowpass Filter @ 250Hz]
    L --> G
    
    G --> M[Audio Destination / Speakers]
```

### 3. Pomodoro Focus Session Lifecycle
The core productivity tool features an interactive, tick-synchronized Pomodoro timer linked to user tasks.

```mermaid
flowchart LR
    A[Timer Idle] -->|Start / Pause| B[Timer Ticking]
    B -->|Tick Event| C[Update SVG Circle Progress]
    B -->|Time Reaches 0| D[Synthesize Alarm Arpeggio Chime]
    D --> E{Timer Mode}
    E -- Pomodoro --> F[Increment Completed Pomodoros on Active Task]
    F --> G[Auto Start / Manual Short Break]
    E -- Break --> H[Auto Start / Manual Next Pomodoro]
    G --> A
    H --> A
```

---

## ✨ Features

- **🎓 Personalized Class Selector**: Tailors tasks, flashcards, study schedules, and interactive quizzes specifically for **Class 1 to Class 5** learners upon setup.
- **📅 Weekly Planner Grid**: A sleek time-blocking calendar layout from 8:00 AM to 10:00 PM for managing and tracking scheduled classes and sessions.
- **📝 Task Manager (To-Do List)**: Full CRUD support for tasks, featuring high/medium/low priority tags, subject filters, and custom Pomodoro targets.
- **⏱️ Pomodoro Timer**: A responsive, SVG circular countdown timer that synchronizes with the active task and plays a custom arpeggio alert sound upon completion.
- **🔊 Offline Audio Machine**: High-quality, dynamically synthesized ambient noises (White Noise, Ocean Swell, Cosmic Drone) running entirely offline using oscillators, LFOs, and filters.
- **🗂️ CSS 3D Flashcards**: Fully responsive virtual flashcard decks with smooth CSS 3D flip card animations and self-assessment buttons.
- **🧠 Interactive Quiz Hub**: Customizable quizzes with real-time grade-specific questions and instantaneous feedback.
- **⚡ Pop Quiz Refresher**: A persistent floating memory refresher that prompts the user with quick review questions.

---

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5 layout structure.
- **Styling**: Vanilla CSS3 featuring glassmorphic backgrounds (`backdrop-filter`), CSS custom variables, keyframe animations, and 3D card perspectives.
- **Logic**: Vanilla ES6 JavaScript handling states, localStorage synchronization, routing, and synthesizer controls.
- **Web Audio API**: Real-time sound wave generation and filtering nodes.

---

## 🚀 How to Run Locally

Because StudyMentor is built with standard, vanilla front-end files, there are no heavy bundlers or complex installation commands needed.

### Option 1: Using a Simple HTTP Server (Recommended)
Running the app through an HTTP server ensures full Web Audio API initialization and browser local storage security settings function seamlessly without CORS alerts:

```bash
# Using Python (standard on Windows/macOS/Linux)
python -m http.server 8080
```
Then, open [http://localhost:8080](http://localhost:8080) in your web browser.

### Option 2: Run directly
You can open the [index.html](index.html) file directly in any modern web browser.

---

## 📁 File Structure

```
├── index.html       # Application layouts, modal structures, and SPA router panels
├── style.css        # Responsive layouts, glassmorphism theme, and CSS 3D transforms
├── app.js           # Core state controller, default databases, and synthesizers
├── .gitignore       # Git exclusion configuration
└── README.md        # Comprehensive architecture and user guide
```
