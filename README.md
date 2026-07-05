# Aura Study Hub 🌌

A premium, visually stunning, and highly interactive **Single-Page Application (SPA)** designed to elevate your study productivity. Built with modern glassmorphic aesthetics, fluid micro-interactions, and robust offline capabilities.

## Features

- **Class Onboarding Selector**: Customizes default tasks, flashcards, quizzes, and planner blocks for **Class 1 to Class 5** scholars on first startup.
- **Weekly Planner Grid**: Visual weekly time-blocking calendar where students can schedule and manage study sessions.
- **Task Manager (To-Do List)**: Complete study task CRUD with priority levels (Low, Medium, High), subjects, target Pomodoro tracking, and direct integration with the timer.
- **Pomodoro Focus Timer**: SVG circular timer with responsive ticking, linked task increments, and ambient noise machine.
- **Offline Sound Synthesizer**: Synthesizes White Noise, Ocean Waves, Cosmic Drone, and alarm chime alerts using the **Web Audio API** (completely offline, no external file dependencies).
- **3D Flashcards**: Create decks and review terms using CSS 3D perspectives for smooth flipping animations, with self-assessment difficulty parameters.
- **Interactive Quiz Hub**: Take custom quizzes with instant visual feedback and score compilations.
- **Pop Quiz Memory Refresher**: Intermittent challenge widget that randomly pulls questions from your database to reinforce memory recall.

## Technologies Used

- **HTML5**: Semantic layout & SVG circular progress graphics.
- **Vanilla CSS3**: Glassmorphism (`backdrop-filter`), custom layouts, scrollbar tweaks, keyframe pulses, and 3D card transforms.
- **Vanilla JavaScript (ES6)**: State manager, Web Audio synthesis oscillators, local storage persistence, and view routers.

## How to Run Locally

Since this app is a pure front-end package, there are no build steps, compiling, or dependencies to download.

### Option 1: Light Web Server (Recommended)
To enable full offline browser features without CORS warnings:
1. Navigate to the project folder.
2. Run a simple HTTP server (Python is usually installed on most OS):
   ```bash
   python -m http.server 8080
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

### Option 2: Direct File Open
You can also simply double-click the [index.html](index.html) file to launch it directly in any modern web browser.

## File Structure

```
├── index.html       # Structural layouts, nav routers, modals
├── style.css        # Responsive layouts, glassmorphic theme styling, 3D card flips
├── app.js           # State manager, database defaults, sound synthesizers
└── .gitignore       # Git excludes file
```
