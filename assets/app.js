/* ============================================================
   PORTFOLIO APPLICATION — Thrinadh Kadimi
   Pure vanilla JS — no build step required
============================================================ */

/* ──────────────────────────────────────────────────────────────
   CONTACT FORM ENDPOINT CONFIGURATION
   Replace the URL below with your actual form service endpoint.
   Options:
     • Formspree:  https://formspree.io/f/YOUR_FORM_ID
     • Basin:      https://usebasin.com/f/YOUR_FORM_ID
     • Netlify:    Set to null and add netlify attribute to form
   Set FORM_ENDPOINT to null to disable submissions until configured.
──────────────────────────────────────────────────────────────── */
const FORM_ENDPOINT = null; // e.g. "https://formspree.io/f/xpwzabcd"

(function () {
  "use strict";

  const D = window.PORTFOLIO_DATA;

  /* ============================================================
     THEME
  ============================================================ */
  const themeBtn = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(dark) {
    document.body.classList.toggle("dark-mode", dark);
    themeBtn.textContent = dark ? "☀️" : "🌙";
    themeBtn.setAttribute("aria-pressed", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  const saved = localStorage.getItem("theme");
  applyTheme(saved ? saved === "dark" : prefersDark.matches);

  themeBtn.addEventListener("click", () =>
    applyTheme(!document.body.classList.contains("dark-mode"))
  );

  /* ============================================================
     SCROLL PROGRESS
  ============================================================ */
  const prog = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    prog.style.width = pct + "%";
  }, { passive: true });

  /* ============================================================
     NAVBAR SCROLL SHADOW
  ============================================================ */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  /* ============================================================
     BACK TO TOP
  ============================================================ */
  const btt = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    btt.classList.toggle("visible", window.scrollY > 350);
  }, { passive: true });
  btt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ============================================================
     HAMBURGER MENU
  ============================================================ */
  const ham = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  ham.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    ham.classList.toggle("open", open);
    ham.setAttribute("aria-expanded", open);
  });

  /* ============================================================
     SPA PAGE ROUTING
  ============================================================ */
  const pageMap = {
    home:           "page-home",
    skills:         "page-skills",
    about:          "page-about",
    certifications: "page-certifications",
    projects:       "page-projects",
  };

  let currentPage = "home";

  function showPage(name) {
    if (!pageMap[name]) name = "home";
    // Hide all pages
    Object.values(pageMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.classList.remove("active-page"); }
    });
    // Show target
    const target = document.getElementById(pageMap[name]);
    if (target) {
      target.classList.add("active-page");
      window.scrollTo({ top: 0, behavior: "instant" });
      // Trigger intersection animations
      setTimeout(triggerAnimations, 50);
    }
    // Update nav indicators
    document.querySelectorAll("[data-page]").forEach(el => {
      el.classList.toggle("active", el.dataset.page === name);
    });
    currentPage = name;
    // Update hash
    history.pushState({ page: name }, "", "#" + name);
    // Close mobile nav
    mobileNav.classList.remove("open");
    ham.classList.remove("open");
    ham.setAttribute("aria-expanded", false);
  }

  // Handle [data-page] link clicks
  document.addEventListener("click", e => {
    const link = e.target.closest("[data-page]");
    if (link) {
      e.preventDefault();
      const page = link.dataset.page;
      if (page) showPage(page);
    }
  });

  // Handle browser back/forward
  window.addEventListener("popstate", e => {
    const page = (e.state && e.state.page) || hashPage();
    showPage(page);
  });

  function hashPage() {
    const h = location.hash.replace("#", "");
    return pageMap[h] ? h : "home";
  }

  // Initial page from hash
  showPage(hashPage());

  /* ============================================================
     SCROLL-TRIGGERED ANIMATIONS
  ============================================================ */
  function triggerAnimations() {
    const els = document.querySelectorAll("[data-animate]:not(.visible)");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
  }
  triggerAnimations();

  /* ============================================================
     POPULATE PERSONAL INFO
  ============================================================ */
  function initPersonal() {
    const p = D.personal;
    // Hero
    document.getElementById("hero-name").innerHTML = p.name.replace(" ", "<br>");
    document.getElementById("hero-headline").textContent =
      "B.Tech Data Science Student · Aspiring Data Analyst · Python, SQL & Data Visualization";
    document.getElementById("hero-intro").textContent = p.intro;

    // Email
    const emailEl = document.getElementById("email-link");
    const emailDisplay = document.getElementById("email-display");
    if (!p.email.startsWith("[")) {
      emailEl.href = "mailto:" + p.email;
      emailDisplay.textContent = p.email;
    } else {
      emailDisplay.textContent = "Email (placeholder)";
    }

    // Phone
    const phoneEl = document.getElementById("phone-link");
    const phoneDisplay = document.querySelector("#phone-link span");
    if (!p.phone.startsWith("[")) {
      phoneEl.href = "tel:" + p.phone;
      phoneDisplay.textContent = p.phone;
    } else {
      phoneDisplay.textContent = "Phone (placeholder)";
    }

    // Footer email
    const footerEmail = document.getElementById("footer-email");
    if (footerEmail && !p.email.startsWith("[")) {
      footerEmail.href = "mailto:" + p.email;
      footerEmail.textContent = p.email;
    }

    // GitHub
    const ghLinks = document.querySelectorAll("#github-link, #footer-github, #footer-github-icon");
    ghLinks.forEach(el => {
      if (!p.github.startsWith("[")) el.href = p.github;
    });

    // Availability badge
    const badge = document.getElementById("avail-badge");
    if (!p.availableForInternship) badge.style.display = "none";

    // Year
    document.getElementById("year").textContent = new Date().getFullYear();
  }

  /* ============================================================
     PAGE 2 — SKILLS
  ============================================================ */
  function initSkills() {
    const grid = document.getElementById("skills-grid");
    const filterContainer = document.getElementById("skills-filter");
    const searchInput = document.getElementById("skills-search");

    const categories = Object.keys(D.skills);
    let activeFilter = "All";

    // Build filter pills
    const allFilters = ["All", ...categories];
    filterContainer.innerHTML = allFilters.map(cat => `
      <button class="pill ${cat === "All" ? "pill-active" : ""}" data-cat="${cat}" aria-pressed="${cat === "All"}">${cat}</button>
    `).join("");

    filterContainer.addEventListener("click", e => {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      activeFilter = btn.dataset.cat;
      filterContainer.querySelectorAll(".pill").forEach(b => {
        b.classList.toggle("pill-active", b.dataset.cat === activeFilter);
        b.setAttribute("aria-pressed", b.dataset.cat === activeFilter);
      });
      renderSkills();
    });

    searchInput.addEventListener("input", renderSkills);

    function renderSkills() {
      const query = searchInput.value.toLowerCase().trim();
      grid.innerHTML = "";

      categories.forEach(cat => {
        if (activeFilter !== "All" && activeFilter !== cat) return;

        const skills = D.skills[cat].filter(s =>
          !query || s.name.toLowerCase().includes(query) || s.note.toLowerCase().includes(query)
        );
        if (!skills.length) return;

        const section = document.createElement("div");
        section.className = "skill-category";
        section.setAttribute("data-animate", "");
        section.innerHTML = `
          <h3 class="skill-cat-title">
            <span class="skill-cat-label">${cat === "Currently Learning" ? "🎓 " + cat : cat}</span>
            <span class="skill-cat-count">${skills.length}</span>
          </h3>
          <div class="skill-cards">
            ${skills.map(s => `
              <div class="skill-card" tabindex="0" title="${s.note}">
                <span class="skill-icon" aria-hidden="true">${s.icon}</span>
                <span class="skill-name">${s.name}</span>
                <span class="skill-note">${s.note}</span>
              </div>
            `).join("")}
          </div>
        `;
        grid.appendChild(section);
      });

      if (!grid.children.length) {
        grid.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--muted);grid-column:1/-1;">
          <p style="font-size:2rem;margin-bottom:.5rem;">🔍</p>
          <p>No skills matched "<strong>${query}</strong>"</p>
        </div>`;
      }
      triggerAnimations();
    }

    renderSkills();
  }

  /* ============================================================
     PAGE 3 — ABOUT & EDUCATION
  ============================================================ */
  function initAbout() {
    // Career interests
    const ciList = document.getElementById("career-interests-list");
    ciList.innerHTML = D.careerInterests.map(i => `
      <li style="display:flex;align-items:center;gap:.6rem;color:var(--muted);">
        <span style="color:var(--brown);font-weight:700;">→</span> ${i}
      </li>`).join("");

    // Learning goals
    const lgList = document.getElementById("learning-goals-list");
    lgList.innerHTML = D.learningGoals.map(g => `
      <li style="display:flex;align-items:flex-start;gap:.6rem;color:var(--muted);">
        <span style="color:var(--brown);margin-top:.15em;">✓</span> ${g}
      </li>`).join("");

    // Education timeline
    const timeline = document.getElementById("edu-timeline");
    timeline.innerHTML = D.education.map(edu => `
      <div class="edu-entry card" data-animate>
        <div class="edu-dot"></div>
        <div class="edu-header">
          <div>
            <h3 class="edu-institution">${edu.institution}</h3>
            <p class="edu-degree">${edu.degree}</p>
          </div>
          <div class="edu-meta">
            <span class="tag">${edu.period}</span>
            ${edu.cgpa ? `<span class="tag">CGPA: ${edu.cgpa}</span>` : ""}
            ${edu.location && !edu.location.startsWith("[") ? `<span class="tag">📍 ${edu.location}</span>` : ""}
            ${edu.graduationYear && !edu.graduationYear.startsWith("[") ? `<span class="tag">Grad: ${edu.graduationYear}</span>` : ""}
          </div>
        </div>
        ${edu.courses.length ? `
          <div class="edu-courses">
            <h4>Relevant Coursework</h4>
            <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.65rem;">
              ${edu.courses.map(c => `<span class="tag">${c}</span>`).join("")}
            </div>
          </div>` : ""}
        ${edu.achievements.length ? `
          <div class="edu-achievements" style="margin-top:1rem;">
            <h4 style="font-size:.875rem;font-weight:700;color:var(--brown);margin-bottom:.5rem;">Achievements</h4>
            <ul style="list-style:disc;padding-left:1.25rem;color:var(--muted);">
              ${edu.achievements.map(a => `<li>${a}</li>`).join("")}
            </ul>
          </div>` : ""}
      </div>
    `).join("");
  }

  /* ============================================================
     PAGE 4 — CERTIFICATIONS & INTERNSHIPS
  ============================================================ */
  function initCertifications() {
    // ── Certifications grid ──────────────────────────────────
    const certGrid = document.getElementById("cert-grid");

    // Build category filter pills above the grid
    const certCats = ["All", ...new Set(D.certifications.map(c => c.category))];
    let activeCertCat = "All";

    // Insert filter bar above the grid
    const filterBar = document.createElement("div");
    filterBar.className = "skills-controls";
    filterBar.style.marginBottom = "1.75rem";
    filterBar.innerHTML = `<div class="filter-pills" id="cert-filter" role="group" aria-label="Filter certifications">
      ${certCats.map(cat => `<button class="pill ${cat === "All" ? "pill-active" : ""}" data-cat="${cat}" aria-pressed="${cat === "All"}">${cat}</button>`).join("")}
    </div>`;
    certGrid.parentElement.insertBefore(filterBar, certGrid);

    filterBar.addEventListener("click", e => {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      activeCertCat = btn.dataset.cat;
      filterBar.querySelectorAll(".pill").forEach(b => {
        b.classList.toggle("pill-active", b.dataset.cat === activeCertCat);
        b.setAttribute("aria-pressed", b.dataset.cat === activeCertCat);
      });
      renderCerts();
    });

    function renderCerts() {
      const visible = D.certifications.filter(c =>
        activeCertCat === "All" || c.category === activeCertCat
      );
      certGrid.innerHTML = visible.map(c => `
        <div class="card cert-card" data-animate>

          ${c.badge
            ? `<div class="cert-badge-wrap">
                 <img src="${c.badge}" alt="${c.name} badge" class="cert-badge-img"
                      onerror="this.parentElement.innerHTML='<div class=\\'cert-badge-icon\\'>🏆</div>'" />
               </div>`
            : `<div class="cert-badge-icon">${c.category === "AI & ML" ? "🤖" : c.category === "Programming" ? "🐍" : c.category === "Networking" ? "🌐" : "🏆"}</div>`
          }

          <div class="cert-cat-tag">
            <span class="tag" style="font-size:.7rem;">${c.category}</span>
          </div>

          <h3 class="cert-name">${c.name}</h3>
          <p class="cert-org">${c.org}</p>

          <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin:.6rem 0 .9rem;">
            ${c.date ? `<span class="tag">📅 ${c.date}</span>` : ""}
            ${c.credentialId ? `<span class="tag" title="Credential ID" style="font-size:.7rem;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">🔑 ${c.credentialId}</span>` : ""}
          </div>

          <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
            ${c.link
              ? `<a class="btn btn-primary btn-sm" href="${c.link}" ${c.verifyExternal ? 'target="_blank" rel="noopener"' : 'target="_blank" rel="noopener"'}>
                  ${c.verifyExternal ? "Verify on Credly / Coursera" : "View Certificate"}
                 </a>`
              : `<span class="btn btn-outline btn-sm" style="opacity:.55;cursor:default;">Certificate Coming Soon</span>`
            }
          </div>

        </div>
      `).join("");
      triggerAnimations();
    }

    renderCerts();

    // ── Internships timeline ─────────────────────────────────
    const internTimeline = document.getElementById("intern-timeline");
    internTimeline.innerHTML = D.internships.map(i => {
      const isReal = !i.role.startsWith("[");
      return `
      <div class="card intern-card" data-animate>
        <div class="intern-header">
          <div>
            <h3 class="intern-org">${i.org}</h3>
            <p class="intern-role">${isReal ? i.role : "Role: Placeholder — update in portfolio-data.js"}</p>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.4rem;">
            <span class="tag">${i.start}${i.end !== i.start ? " – " + i.end : ""}</span>
            <span class="tag">${i.type}</span>
          </div>
        </div>

        ${isReal && !i.responsibilities[0].startsWith("[") ? `
          <div class="intern-section">
            <h4>Responsibilities</h4>
            <ul>${i.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>
          </div>` : ""}

        ${isReal && !i.tools[0].startsWith("[") ? `
          <div class="intern-section">
            <h4>Areas Covered</h4>
            <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.5rem;">
              ${i.tools.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>` : ""}

        ${isReal && !i.projects[0].startsWith("[") ? `
          <div class="intern-section">
            <h4>Simulation / Project</h4>
            <ul>${i.projects.map(p => `<li>${p}</li>`).join("")}</ul>
          </div>` : ""}

        ${isReal && !i.outcomes[0].startsWith("[") ? `
          <div class="intern-section">
            <h4>Outcomes</h4>
            <ul>${i.outcomes.map(o => `<li>${o}</li>`).join("")}</ul>
          </div>` : ""}

        ${isReal && i.certificateLink ? `
          <div style="margin-top:.75rem;">
            <a class="btn btn-primary btn-sm" href="${i.certificateLink}" target="_blank" rel="noopener">
              View Certificate
            </a>
          </div>` : ""}

        ${!isReal ? `
          <p style="color:var(--muted);font-size:.875rem;border:1px dashed var(--border);padding:.75rem;border-radius:8px;">
            📝 Update this entry in <code>data/portfolio-data.js</code>
          </p>` : ""}
      </div>`;
    }).join("");
  }

  /* ============================================================
     PAGE 5 — PROJECTS
  ============================================================ */
  function initProjects() {
    const grid = document.getElementById("projects-grid");
    const filterContainer = document.getElementById("project-filter");
    const searchInput = document.getElementById("project-search");
    const emptyState = document.getElementById("projects-empty");

    const allCats = ["All", ...new Set(D.projects.flatMap(p => p.category))];
    let activeFilter = "All";

    // Filter pills
    filterContainer.innerHTML = allCats.map(cat => `
      <button class="pill ${cat === "All" ? "pill-active" : ""}" data-cat="${cat}" aria-pressed="${cat === "All"}">${cat}</button>
    `).join("");

    filterContainer.addEventListener("click", e => {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      activeFilter = btn.dataset.cat;
      filterContainer.querySelectorAll(".pill").forEach(b => {
        b.classList.toggle("pill-active", b.dataset.cat === activeFilter);
        b.setAttribute("aria-pressed", b.dataset.cat === activeFilter);
      });
      renderProjects();
    });

    searchInput.addEventListener("input", renderProjects);

    function renderProjects() {
      const query = searchInput.value.toLowerCase().trim();
      const filtered = D.projects.filter(p => {
        const matchCat = activeFilter === "All" || p.category.includes(activeFilter);
        const matchSearch = !query ||
          p.title.toLowerCase().includes(query) ||
          p.tags.some(t => t.toLowerCase().includes(query)) ||
          p.description.toLowerCase().includes(query);
        return matchCat && matchSearch;
      });

      if (!filtered.length) {
        grid.innerHTML = "";
        emptyState.style.display = "block";
        return;
      }
      emptyState.style.display = "none";

      grid.innerHTML = filtered.map(p => `
        <article class="project-card card" data-animate>
          <div class="project-thumb">
            ${p.screenshots.length
              ? `<img src="${p.screenshots[0]}" alt="${p.title} screenshot" loading="lazy">`
              : `<div class="project-thumb-placeholder" aria-label="Project preview not yet added">
                  <span style="font-size:2.5rem;">📊</span>
                  <span style="font-size:.8rem;color:var(--muted);margin-top:.35rem;">Screenshot coming soon</span>
                 </div>`
            }
            ${p.featured ? '<span class="featured-badge">Featured</span>' : ""}
          </div>
          <div class="project-body">
            <div class="project-cats">
              ${p.category.map(c => `<span class="tag" style="background:var(--navy);color:var(--cream);border-color:var(--navy);">${c}</span>`).join("")}
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-tagline">${p.tagline}</p>
            <div class="project-tags">
              ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
            <div class="project-actions">
              <button class="btn btn-primary btn-sm" onclick="openProjectModal(${p.id})">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                View Details
              </button>
              ${p.github && !p.github.startsWith("[")
                ? `<a class="btn btn-outline btn-sm" href="${p.github}" target="_blank" rel="noopener">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                    GitHub
                   </a>`
                : `<span class="btn btn-outline btn-sm" style="opacity:.55;cursor:default;">
                    GitHub (Coming Soon)
                   </span>`
              }
              ${p.live
                ? `<a class="btn btn-secondary btn-sm" href="${p.live}" target="_blank" rel="noopener">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                   </a>`
                : ""
              }
            </div>
          </div>
        </article>
      `).join("");
      triggerAnimations();
    }

    renderProjects();
  }

  /* ============================================================
     PROJECT MODAL
  ============================================================ */
  window.openProjectModal = function (id) {
    const p = D.projects.find(x => x.id === id);
    if (!p) return;

    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-content");

    content.innerHTML = `
      <h2 id="modal-title" style="font-size:1.5rem;font-weight:800;margin-bottom:.25rem;">${p.title}</h2>
      <p style="color:var(--brown);margin-bottom:1.25rem;">${p.tagline}</p>

      ${p.screenshots.length ? `
        <div class="modal-screenshots">
          ${p.screenshots.map((s, i) => `<img src="${s}" alt="${p.title} screenshot ${i + 1}" loading="lazy">`).join("")}
        </div>` : `
        <div class="project-thumb-placeholder" style="height:160px;border-radius:10px;background:var(--surface);margin-bottom:1.25rem;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.4rem;">
          <span style="font-size:2.5rem;">📊</span>
          <span style="font-size:.8rem;color:var(--muted);">Add screenshots to assets/projects/</span>
        </div>`
      }

      <div class="modal-grid">
        <div>
          <h4>Problem Statement</h4>
          <p>${p.problem}</p>
        </div>
        <div>
          <h4>Dataset &amp; Source</h4>
          <p>${p.dataset}</p>
        </div>
      </div>

      <h4>Data Cleaning &amp; Processing</h4>
      <ul>${p.cleaning.map(c => `<li>${c}</li>`).join("")}</ul>

      ${p.algorithm ? `<div style="margin:.75rem 0;"><h4>ML Algorithm</h4><p>${p.algorithm}</p></div>` : ""}

      ${p.metrics && Object.values(p.metrics).some(Boolean) ? `
        <h4>Evaluation Metrics</h4>
        <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin:.5rem 0 1rem;">
          ${p.metrics.accuracy && !String(p.metrics.accuracy).startsWith("[") ? `<span class="tag">Accuracy: ${p.metrics.accuracy}</span>` : ""}
          ${p.metrics.precision && !String(p.metrics.precision).startsWith("[") ? `<span class="tag">Precision: ${p.metrics.precision}</span>` : ""}
          ${p.metrics.recall && !String(p.metrics.recall).startsWith("[") ? `<span class="tag">Recall: ${p.metrics.recall}</span>` : ""}
          ${p.metrics.f1 && !String(p.metrics.f1).startsWith("[") ? `<span class="tag">F1: ${p.metrics.f1}</span>` : ""}
        </div>` : ""}

      ${p.insights && p.insights.length && !p.insights[0].startsWith("[") ? `
        <h4>Key Insights</h4>
        <ul>${p.insights.map(i => `<li>${i}</li>`).join("")}</ul>` : ""}

      <h4>Technologies Used</h4>
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin:.5rem 0 1.5rem;">
        ${p.tools.filter(t => !t.startsWith("[")).map(t => `<span class="tag">${t}</span>`).join("")}
      </div>

      <div style="display:flex;gap:.75rem;flex-wrap:wrap;">
        ${p.github && !p.github.startsWith("[")
          ? `<a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener">GitHub Repository</a>`
          : `<span class="btn btn-outline" style="opacity:.55;cursor:default;">GitHub Repo (Add Link)</span>`}
        ${p.live ? `<a class="btn btn-secondary" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>` : ""}
      </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    document.getElementById("modal-close").focus();
  };

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("project-modal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
  function closeModal() {
    document.getElementById("project-modal").style.display = "none";
    document.body.style.overflow = "";
  }

  /* ============================================================
     CONTACT FORM
  ============================================================ */
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const feedback = document.getElementById("form-feedback");

    // Validate
    const name    = document.getElementById("cf-name").value.trim();
    const email   = document.getElementById("cf-email").value.trim();
    const subject = document.getElementById("cf-subject").value.trim();
    const message = document.getElementById("cf-message").value.trim();

    let valid = true;
    function setError(id, msg) {
      document.getElementById(id).textContent = msg;
      if (msg) valid = false;
    }
    function emailValid(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

    setError("err-name",    !name    ? "Please enter your name."    : "");
    setError("err-email",   !email   ? "Please enter your email."   : !emailValid(email) ? "Enter a valid email address." : "");
    setError("err-subject", !subject ? "Please enter a subject."    : "");
    setError("err-message", !message ? "Please enter your message." : "");

    if (!valid) return;

    // Submit
    feedback.style.display = "none";
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    btn.textContent = "Sending…";

    if (!FORM_ENDPOINT) {
      btn.disabled = false;
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
      feedback.className = "form-error-msg";
      feedback.innerHTML = `⚠️ <strong>Form not configured.</strong> Set <code>FORM_ENDPOINT</code> in <code>assets/app.js</code> to a real service (e.g., Formspree) before deploying. Message was NOT sent.`;
      feedback.style.display = "block";
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        form.reset();
        feedback.className = "form-success";
        feedback.textContent = "✅ Message sent successfully! I'll get back to you soon.";
      } else {
        throw new Error("Server returned " + res.status);
      }
    } catch (err) {
      feedback.className = "form-error-msg";
      feedback.textContent = "❌ Failed to send message. Please email me directly.";
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
      feedback.style.display = "block";
    }
  });

  /* ============================================================
     INITIALISE ALL PAGES
  ============================================================ */
  initPersonal();
  initSkills();
  initAbout();
  initCertifications();
  initProjects();
  triggerAnimations();

})();
