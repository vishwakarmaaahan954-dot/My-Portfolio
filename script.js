const skillDetails = {
  web: "Building responsive, expressive experiences with HTML, CSS, JavaScript, and a love for thoughtful details.",
  java: "Strengthening my foundations through Core Java, OOP, DSA, and the satisfying logic of a problem well solved.",
  design: "Sketching ideas and shaping clear, inviting interfaces in Figma—where creativity gets practical.",
  app: "Exploring Flutter and the possibility of useful, beautiful experiences that can travel in your pocket."
};

const accentColors = {
  violet: "#a88cff",
  cyan: "#78dfea",
  coral: "#ff9075",
  lime: "#d9ff7e"
};

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const projectGrid = document.querySelector("#project-grid");
const renderProjects = () => {
    projectGrid.innerHTML = projects.map((project, index) => {
    const accent = accentColors[project.accent] || accentColors.violet;
    const tags = (project.tags || []).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    const links = [
      project.codeUrl ? `<a href="${escapeHtml(project.codeUrl)}" target="_blank" rel="noreferrer">Code ↗</a>` : ""
    ].join("");
    const preview = project.image
      ? `<img src="${escapeHtml(project.image)}" alt="Preview of ${escapeHtml(project.title)}" />`
      : `<span class="project-glyph">✦</span>`;
    const goal = project.goal ? `<p class="project-goal">${escapeHtml(project.goal)}</p>` : "";

    return `
      <article
        class="project-card"
        style="--project-accent: ${accent}"
        data-live-url="${escapeHtml(project.liveUrl || "")}"
        tabindex="0"
        role="link"
        aria-label="Open ${escapeHtml(project.title)} live preview"
      >
        <div class="project-preview">${preview}</div>
        <div class="project-info">
          <div class="project-topline">
            <span class="project-count">PROJECT ${String(index + 1).padStart(2, "0")}</span>
            <span class="project-arrow">↗</span>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          ${goal}
          <div class="project-bottom">
            <div class="project-tags">${tags}</div>
            <div class="project-links">${links}</div>
          </div>
        </div>
      </article>`;
  }).join("");
};

renderProjects();

document.querySelectorAll(".project-card").forEach((card) => {
  const openLivePreview = () => {
    if (card.dataset.liveUrl) {
      window.open(card.dataset.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest(".project-links")) return;
    openLivePreview();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openLivePreview();
  });
});

const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.13 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const skillText = document.querySelector("#skill-detail-text");
const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach((card) => {
  const selectSkill = () => {
    skillCards.forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    skillText.style.opacity = "0";
    window.setTimeout(() => {
      skillText.textContent = skillDetails[card.dataset.skill];
      skillText.style.opacity = "1";
    }, 130);
  };
  card.addEventListener("mouseenter", selectSkill);
  card.addEventListener("focus", selectSkill);
  card.addEventListener("click", selectSkill);
});

document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.transform = `perspective(700px) rotateX(${y * -6}deg) rotateY(${x * 7}deg) translateY(-5px)`;
  });
  card.addEventListener("pointerleave", () => { card.style.transform = ""; });
});

// Interest Cards Keyboard & Tap Interactivity
const interestCards = document.querySelectorAll(".interest-card");
interestCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isCurrentlyActive = card.classList.contains("active");
    interestCards.forEach((c) => c.classList.remove("active"));
    if (!isCurrentlyActive) {
      card.classList.add("active");
    }
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".interest-card")) {
    interestCards.forEach((c) => c.classList.remove("active"));
  }
});

// Mobile Navigation Accessibility & Focus Management
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav-links");

const isMobileNav = () => window.innerWidth <= 800;

const openMenu = () => {
  nav.classList.add("open");
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Close navigation");
  nav.removeAttribute("aria-hidden");
  const firstLink = nav.querySelector("a");
  if (firstLink) {
    firstLink.focus();
  }
};

const closeMenu = (returnFocus = true) => {
  if (!nav.classList.contains("open")) return;
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  if (isMobileNav()) {
    nav.setAttribute("aria-hidden", "true");
  }
  if (returnFocus) {
    menuButton.focus();
  }
};

menuButton.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
    closeMenu(true);
  } else {
    openMenu();
  }
});

// Close mobile menu on link click
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu(false);
  });
});

// Close mobile menu on Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    closeMenu(true);
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    nav.classList.contains("open") &&
    !nav.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    closeMenu(false);
  }
});

// Keyboard Focus Trap within mobile navigation drawer when open
document.addEventListener("keydown", (event) => {
  if (event.key !== "Tab" || !nav.classList.contains("open")) return;

  const focusable = [menuButton, ...Array.from(nav.querySelectorAll("a"))];
  const firstFocusable = focusable[0];
  const lastFocusable = focusable[focusable.length - 1];

  if (event.shiftKey) {
    if (document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    }
  } else {
    if (document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  }
});

// Synchronize aria-hidden and state on resize
const syncNavAccessibility = () => {
  if (isMobileNav()) {
    if (!nav.classList.contains("open")) {
      nav.setAttribute("aria-hidden", "true");
    } else {
      nav.removeAttribute("aria-hidden");
    }
  } else {
    nav.removeAttribute("aria-hidden");
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }
};

window.addEventListener("resize", syncNavAccessibility);
syncNavAccessibility();
