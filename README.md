# ✦ Creative Developer Portfolio

A sleek, cosmic-inspired personal portfolio designed and engineered by **Aahan Vishwakarma**. Built from the ground up with plain HTML, CSS, and JavaScript, with responsive layouts, interactive project cards, and accessibility-minded interactions.

---

## 👨‍💻 About Me

Hi, I'm **Aahan Vishwakarma** — a curious Computer Science & Engineering (CSE) student, Web Developer, and UI enthusiast based in **Noida, India**.

- 🚀 **Focus Areas**: Web development, mobile apps, and game design.
- 💡 **Philosophy**: Learning in public, turning abstract ideas into tangible, responsive interfaces, and following genuine curiosity.
- 🎨 **Beyond Code**: Sketching & visual arts, gaming (*Wuthering Waves*), anime (*Naruto*), and soundtracks that make everyday moments cinematic.
- 🔭 **My North Star**: Exploring the intersection of design and engineering with the long-term ambition of building immersive game worlds.

---

## 🛠️ Key Technologies & Architecture

This project deliberately avoids heavy framework overhead. It has no build step or package dependencies; Google Fonts are loaded externally at runtime:

| Layer | Technologies & Techniques |
| :--- | :--- |
| **Core Structure** | **Semantic HTML5** — Document structure, ARIA labels, and keyboard-accessible interactive elements. |
| **Styling & Design System** | **Modern CSS3** — Custom properties (CSS variables), CSS Grid, Flexbox, Glassmorphism (`backdrop-filter`), radial gradients, and fluid typography (`clamp()`). |
| **Client-Side Logic** | **Vanilla JavaScript (ES6+)** — Reactive DOM manipulation, IntersectionObserver API, HTML sanitization, and state handling. |
| **Typography** | Google Fonts: *Playfair Display* (expressive serif), *Manrope* (clean grotesque sans-serif), and *DM Mono* (technical mono accents). |
| **Accessibility (a11y)** | Accessibility-focused details including `:focus-visible` states, keyboard interactions, focus trapping in the mobile menu, `aria-hidden` synchronization, and reduced-motion support. |

---

## ✨ Features & Highlights

- **Dynamic Project Showcase (`projects.js`)**: Easily add, edit, or delete projects via a single decoupled JavaScript data file without editing HTML markup. Includes project goals, stack tags, live preview triggers, and source repository links.
- **Interactive Project Cards**: Each card acts as an accessible interactive surface (`role="link"`, `tabindex="0"`) that opens the live demo upon click or `Enter` keypress, while preserving individual sub-links.
- **Accessible Mobile Navigation**:
  - Full keyboard focus trap (cycling `Tab` and `Shift + Tab` inside the open drawer).
  - `Escape` key and outside-click dismissal.
  - Automatic focus management (focuses first link on open; restores focus to menu toggle button on close).
  - True hidden-state handling via `visibility: hidden` and `aria-hidden="true"` so closed navigation links never trap keyboard users.
- **Comprehensive `:focus-visible` Styling**: High-contrast, tailored focus rings across all interactive buttons, cards, and links for keyboard navigators.
- **Interactive Skills Explorer**: Live preview switcher displaying details and tooling focus on hover, click, or keyboard focus.
- **Mobile-Optimized Interest Cards**: Descriptions visible by default on mobile touch screens, paired with 3D tilt effects on desktop and keyboard activation.
- **Cosmic Dark Aesthetic**: Interactive pointer glow (`.cursor-glow`), subtle film grain overlay, and responsive orbital decorative visuals.
- **Integrated Contact & Resume CTAs**: Top navigation and full footer suite including direct email (`mailto:`), phone, location, LinkedIn, GitHub, LeetCode, Instagram, and links to the Resume PDF.
- **Motion Accessibility**: Full support for `prefers-reduced-motion: reduce` to respect user motion preferences.

---

## 🚀 Development & Engineering Workflow

This portfolio was crafted with a modern, AI-assisted development workflow:

- **Primary Editor**: [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- **Pair Programming & Agentic Assistance**: Built with support from **Google Antigravity** — driving iterative layout engineering, interactive scripting, and responsive design systems.
- **Critical Code Review & Auditing**: Rigorously reviewed and polished with **Codex** — focusing on web accessibility audits (a11y), keyboard navigability, DOM safety, and CSS specificity optimizations.

---

## 📂 Project Structure

```text
My-Portfolio/
├── index.html                 # Main semantic HTML5 markup
├── styles.css                 # Complete design system, animations & media queries
├── script.js                  # Interactions, a11y, mobile menu drawer & DOM rendering
├── projects.js                # Decoupled project data store
├── Aahan Vishwakarma.pdf      # Resume document linked across navigation & footer
├── README.md                  # Project documentation & overview
└── Projects/                  # Project visual preview screenshots
    ├── ExpenseList.png
    └── Meridian Dental Studio.png
```

---

## 📝 How to Add or Update Projects

You can add new projects to your portfolio in seconds without touching `index.html`:

1. Open [`projects.js`](projects.js).
2. Inside the `projects` array, copy and paste the starter template:

```javascript
{
  title: "Your Project Name",
  description: "A short, engaging description of what you built and why.",
  goal: "The goal and problem-solving rationale behind this build.",
  tags: ["HTML", "CSS", "JavaScript"],
  image: "Projects/your-screenshot.png", // Or leave empty for abstract artwork
  liveUrl: "https://your-live-demo.com",
  codeUrl: "https://github.com/your-username/your-repo",
  accent: "violet" // Choose: "violet", "cyan", "coral", or "lime"
}
```

3. Save the file and reload your browser — your project card will automatically render with the appropriate accent color, goal text, tags, and interactive links.

---

## 💻 Getting Started Locally

No package managers, build tools, or bundlers required:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vishwakarmaaahan954-dot/My-Portfolio.git
   ```
2. **Navigate into the directory**:
   ```bash
   cd My-Portfolio
   ```
3. **Open the project**:
   - Open `index.html` directly in your favorite browser, or
   - Use VS Code's **Live Server** extension for real-time live reloading.

---

## 📬 Let's Connect

- **LinkedIn**: [Aahan Vishwakarma](https://www.linkedin.com/in/aahan-vishwakarma-6508a6353/)
- **GitHub**: [@vishwakarmaaahan954-dot](https://github.com/vishwakarmaaahan954-dot)
- **LeetCode**: [Aahan_Vishwakarma](https://leetcode.com/u/Aahan_Vishwakarma/)
- **Instagram**: [@_im.aahan_](https://www.instagram.com/_im.aahan_/?hl=en)
- **Email**: [vishwakarmaaahan954@gmail.com](mailto:vishwakarmaaahan954@gmail.com)
- **Location**: Noida, India 📍

---

