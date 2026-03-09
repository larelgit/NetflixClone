# 🎬 Netflix Clone

> A pixel-perfect Netflix UI clone built with pure HTML, CSS, and JavaScript.  
> No frameworks. No dependencies. Just open `index.html` and watch it come alive.

<img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/No%20Dependencies-zero%20npm-brightgreen">

---

## 🚀 Quick start

### 1. Clone the repository

```bash
git clone https://github.com/larelgit/NetflixClone.git
cd NetflixClone
```

### 2. Open in browser

No build step needed — just open the file:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or simply drag `index.html` into any modern browser (Chrome, Firefox, Safari, Edge).

---

## 📖 Features

### 🖥️ Main page

- **Sticky header** — transparent initially, turns opaque as you scroll
- **Profile dropdown** — click the avatar to reveal a Sign Out button
- **Auto-playing banner video** — trailer fades in 3 seconds after page load
- **Play button** — unmutes the video and shows native playback controls
- **More Info modal** — pauses the banner, opens a full-screen modal with the trailer and show description; resumes exactly where it left off on close
- **Horizontally scrollable movie row** — "Popular on Netflix" with left/right scroll buttons and a smooth hover-scale effect on each card

### 📋 Sign-up page

- Step indicator (Step 1 of 3)
- Plan benefits checklist
- Localization-ready language selector dropdown
- Fully styled footer with FAQ, Help Center, Terms, and Privacy links

---

## 📁 Project structure

```
├── index.html         # Main page — header, banner, movie row, modal
├── signup.html        # Sign-up flow — plan selection (step 1 of 3)
├── css/
│   ├── main.css       # Styles for the main page (responsive, dark theme)
│   └── signup.css     # Styles for the sign-up page
├── js/
│   └── main.js        # Movie data, video logic, modal, scroll, dropdown
├── images/
│   ├── netflix-logo0.svg    # Netflix wordmark
│   ├── v9_28096.png         # Banner background
│   ├── v9_28102.png         # Featured series logo
│   ├── v9_28164.png         # Profile avatar
│   ├── inception.png        # Movie card thumbnail
│   ├── matrix.png           # Movie card thumbnail
│   └── strangerthings.png   # Movie card thumbnail
├── videos/
│   └── trailer.mp4          # Banner/modal trailer video
└── .gitignore
```

---

## 🎨 Design details

| Property | Value |
|---|---|
| Background | `#141414` (Netflix dark) |
| Accent color | `#E50914` (Netflix red) |
| Text | `#e5e5e5` / `#e6e6e6` |
| Font | Helvetica Neue (system stack) |
| Breakpoints | 1024 px · 768 px · 480 px |

---

## 🛠️ Tech stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic elements) |
| Styling | CSS3 — flexbox, gradients, transitions, media queries |
| Logic | Vanilla JavaScript — DOM API, events, video API |
| Icons | Inline SVG (Play, Info, Close, Tick) |
| Build tools | None — runs directly in the browser |

---

## 📜 License

MIT
