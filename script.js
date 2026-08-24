/* ==========================================================================
   YAMILA MONTILLA — PORTFOLIO
   Theme, i18n (ES/EN), mobile nav, reveal-on-scroll, command palette,
   toolbox doors. Deliberately simple: plain native scroll, no scroll-snap,
   no scroll-linked transforms, no animation the page's correctness depends on.
   ========================================================================== */

(() => {
  "use strict";

  /* ------------------------------- i18n DICTIONARY ------------------------ */
  const dict = {
    es: {
      "a11y.skip": "Saltar al contenido",
      "header.logoSub": "ENGINEERING",
      "nav.about": "Sobre mí", "nav.projects": "Proyectos", "nav.toolbox": "Herramientas",
      "nav.journey": "Recorrido", "nav.contact": "Contacto",
      "cta.contact": "Hablemos",

      "palette.placeholder": "Buscar proyectos o tecnologías…",
      "palette.empty": "Sin resultados. Prueba con «VHDL», «Python» o «MIPS».",

      "hero.hud.status": "SYSTEM: ONLINE",
      "hero.hud.loc": "MADRID, ES",
      "hero.role": "Estudiante de Ingeniería de Computadores · Desarrolladora Backend",
      "hero.desc": "Diseño software desde la lógica hacia arriba: memoria, estructuras de datos y arquitectura limpia antes que la interfaz. Java y Python en el backend, C y VHDL para entender qué ocurre por debajo.",
      "hero.cta.work": "Ver proyectos",

      "about.title": "Sobre mí",
      "about.intro": "Empecé a programar queriendo entender qué pasa por debajo del código, y ese impulso no se me ha ido: sigo prefiriendo abrir la caja antes de usarla. Hoy eso se traduce en backend con Java y Python, estructuras de datos y memoria en C, y algo de hardware en VHDL, para no perder de vista ninguna capa del sistema.",
      "about.value1.title": "Desarrollar",
      "about.value1.desc": "Solidez en programación orientada a objetos con Java y Python: código modular, testing automatizado con JUnit y una arquitectura que se puede leer sin manual de instrucciones.",
      "about.value2.title": "Resolver",
      "about.value2.desc": "Pensamiento algorítmico y gestión de memoria en C, más la costumbre de resolver problemas en directo bajo presión: en un backend o en medio de un estadio lleno.",
      "about.value3.title": "Colaborar",
      "about.value3.desc": "Liderazgo de equipos, comunicación bilingüe en español e inglés, y la capacidad de explicar un problema técnico a quien no lo es, sin perder precisión.",
      "about.code.role": '"Ingeniería de Computadores · Backend"',
      "about.code.status": '"open_to_work"',
      "about.intl": "Perfil internacional", "about.intl.es": "España", "about.intl.be": "Bélgica", "about.intl.ae": "EAU",

      "projects.title": "Proyectos",
      "projects.subtitle": "Siete repositorios reales y este mismo sitio. Cada tarjeta lleva directo a su código.",
      "projects.viewGithub": "Ver en GitHub",
      "projects.comingSoon": "Coming Soon",
      "projects.p1.desc": "Repositorio con implementaciones modulares de tipos de datos abstractos: listas, árboles, grafos y algoritmos de búsqueda, ordenación y resolución de colisiones. Arquitectura modular en .h/.c, asignación dinámica y pruebas unitarias en main.c.",
      "projects.p2.desc": "Máquina de estados finitos en VHDL para un parquímetro: inserción de monedas, emisión de tickets y control de capacidad con lógica secuencial síncrona. Modelado Mealy/Moore, mapas de Karnaugh y verificación por simulación de formas de onda.",
      "projects.p3.desc": "Código, ejercicios y miniproyectos del curso de Python 3.13 (Udemy, 7h): de la sintaxis básica a estructuras de datos, programación modular y programación orientada a objetos.",
      "projects.p4.desc": "Unidad Aritmético-Lógica de 4 bits en VHDL: cuatro operaciones aritméticas y lógicas sobre dos entradas, verificadas en aritmética de complemento a dos. Diseño, simulación y corrección de tablas de verdad en Vivado.",
      "projects.p5.desc": "Programas para reforzar los fundamentos de C: gestión de memoria, recursividad, entrada/salida de archivos, algoritmos de ordenación y estructuras de datos básicas, con enfoque en resolución de problemas.",
      "projects.p6.desc": "Programas en ensamblador MIPS para Arquitectura de Computadores: optimización de código, estructuras de control, operaciones con enteros y coma flotante, arrays y manipulación de cadenas.",
      "projects.p7.title": "POO (Programación Orientada a Objetos)",
      "projects.p7.desc": "Arquitectura POO en Java: herencia, polimorfismo, interfaces y testing automatizado con JUnit. Repositorio en construcción.",
      "projects.p8.title": "Portfolio",
      "projects.p8.desc": "Este mismo sitio: HTML, CSS y JavaScript puros, sin frameworks. Diseño, contenido y despliegue continuo en GitHub Pages.",

      "toolbox.title": "Herramientas",
      "toolbox.subtitle": "Toca una categoría para ver sus proyectos.",
      "toolbox.backend": "Backend", "toolbox.frontend": "Frontend", "toolbox.systems": "C / VHDL / MIPS", "toolbox.tools": "Tools",

      "journey.title": "Recorrido",
      "journey.subtitle": "De lo más reciente hacia atrás: código y trabajo, en paralelo.",
      "journey.ongoing": "EN CURSO",
      "journey.e1.title": "Legends · Bernabéu VIP Operations",
      "journey.e1.desc": "Operativo de hospitalidad VIP en el Santiago Bernabéu. En marzo de 2026 pasé a coordinar equipos y logística en eventos de alta exigencia: planificación, inventario y resolución de incidencias en tiempo real.",
      "journey.e2.title": "Formación intensiva en Python 3.13",
      "journey.e2.desc": "Patrones de diseño, clases abstractas, encapsulamiento y arquitectura modular aplicada al procesamiento de datos.",
      "journey.e3.title": "Grado en Ingeniería de Computadores",
      "journey.e3.desc": "Empecé el grado con una pregunta fija en la cabeza: qué hay debajo del código que ya sabía escribir. La respuesta, de momento, incluye C, VHDL y bastante café.",
      "journey.e4.title": "Mutua Madrid Open · ATP/WTA",
      "journey.e4.desc": "Coordinación de accesos y flujo de público en un torneo ATP/WTA de primer nivel, con atención bilingüe español/inglés en un evento masivo y de alta visibilidad.",
      "journey.e4.date": "ABR 2023 & 2024",
      "journey.e5.title": "Brussels Operations & Finance",
      "journey.e5.desc": "Dos veranos en un pub cien por cien en inglés: coctelería de alto volumen, gestión de proveedores y cierres de caja.",
      "journey.e5.date": "VERANOS 2023 — 2024",
      "journey.tag.leadership": "Liderazgo", "journey.tag.logistics": "Logística", "journey.tag.pressure": "Alta presión",
      "journey.tag.selfTaught": "Autoaprendizaje", "journey.tag.lowLevel": "Bajo nivel",
      "journey.tag.bilingual": "Bilingüe", "journey.tag.events": "Eventos masivos", "journey.tag.highVolume": "Alto volumen",

      "contact.title": "Construyamos algo.",
      "contact.desc": "¿Tienes un proyecto, un puesto abierto o simplemente te apetece hablar de ingeniería? Escríbeme.",
      "contact.status": "Disponible para nuevas oportunidades",
      "contact.copied": "Copiado ✓",

      "meta.description": "Yamila Montilla — Estudiante de Ingeniería de Computadores y desarrolladora backend en Madrid. Java, Python, C, VHDL.",
      "meta.title": "Yamila Montilla — Backend Developer",
      "control.theme": "Cambiar tema",
      "control.menuOpen": "Abrir menú", "control.menuClose": "Cerrar menú",
    },

    en: {
      "a11y.skip": "Skip to content",
      "header.logoSub": "ENGINEERING",
      "nav.about": "About", "nav.projects": "Projects", "nav.toolbox": "Toolbox",
      "nav.journey": "Journey", "nav.contact": "Contact",
      "cta.contact": "Let's talk",

      "palette.placeholder": "Search projects or technologies…",
      "palette.empty": "No results. Try \"VHDL\", \"Python\" or \"MIPS\".",

      "hero.hud.status": "SYSTEM: ONLINE",
      "hero.hud.loc": "MADRID, ES",
      "hero.role": "Computer Engineering Student · Backend Developer",
      "hero.desc": "I design software from the logic up: memory, data structures and clean architecture before the interface. Java and Python in the backend, C and VHDL to understand what happens underneath.",
      "hero.cta.work": "View projects",

      "about.title": "About",
      "about.intro": "I started coding because I wanted to know what happens underneath, and that instinct never really left: I still prefer opening the box before using it. These days that means backend work in Java and Python, data structures and memory in C, and a bit of hardware in VHDL, so no layer of the system stays a mystery.",
      "about.value1.title": "Build",
      "about.value1.desc": "Solid object-oriented programming in Java and Python: modular code, automated testing with JUnit, and an architecture you can read without an instruction manual.",
      "about.value2.title": "Solve",
      "about.value2.desc": "Algorithmic thinking and memory management in C, plus a habit of solving problems live under pressure, whether that's in a backend or in the middle of a packed stadium.",
      "about.value3.title": "Collaborate",
      "about.value3.desc": "Team leadership, bilingual communication in Spanish and English, and the ability to explain a technical problem to someone outside tech without losing precision.",
      "about.code.role": '"Computer Engineering · Backend"',
      "about.code.status": '"open_to_work"',
      "about.intl": "International profile", "about.intl.es": "Spain", "about.intl.be": "Belgium", "about.intl.ae": "UAE",

      "projects.title": "Projects",
      "projects.subtitle": "Seven real repositories and this very site. Every card leads straight to its code.",
      "projects.viewGithub": "View on GitHub",
      "projects.comingSoon": "Coming Soon",
      "projects.p1.desc": "Modular implementations of foundational abstract data types: lists, trees, graphs, and searching, sorting and collision-resolution algorithms. Modular .h/.c architecture, dynamic allocation and unit tests in main.c.",
      "projects.p2.desc": "A finite state machine in VHDL for a parking meter: coin insertion, ticket issuance and capacity tracking with synchronous sequential logic. Mealy/Moore modelling, Karnaugh maps and waveform simulation.",
      "projects.p3.desc": "Code, exercises and mini-projects from the Python 3.13 course (Udemy, 7h): from basic syntax to data structures, modular programming and object-oriented programming.",
      "projects.p4.desc": "A 4-bit Arithmetic Logic Unit in VHDL: four arithmetic and logic operations over two inputs, verified in two's complement arithmetic. Designed, simulated and verified against truth tables in Vivado.",
      "projects.p5.desc": "Programs that reinforce C fundamentals: memory management, recursion, file I/O, sorting algorithms and basic data structures, with a problem-solving focus.",
      "projects.p6.desc": "MIPS assembly programs for Computer Architecture: code optimisation, control structures, integer and floating-point operations, arrays and string manipulation.",
      "projects.p7.title": "POO (Object-Oriented Programming)",
      "projects.p7.desc": "OOP architecture in Java: inheritance, polymorphism, interfaces and automated testing with JUnit. Repository under construction.",
      "projects.p8.title": "Portfolio",
      "projects.p8.desc": "This very site: vanilla HTML, CSS and JavaScript, no frameworks. Design, content and continuous deployment on GitHub Pages.",

      "toolbox.title": "Toolbox",
      "toolbox.subtitle": "Tap a category to see its projects.",
      "toolbox.backend": "Backend", "toolbox.frontend": "Frontend", "toolbox.systems": "C / VHDL / MIPS", "toolbox.tools": "Tools",

      "journey.title": "Journey",
      "journey.subtitle": "Most recent first: code and work, side by side.",
      "journey.ongoing": "ONGOING",
      "journey.e1.title": "Legends · Bernabéu VIP Operations",
      "journey.e1.desc": "VIP hospitality operations at the Santiago Bernabéu. In March 2026 I moved into coordinating teams and logistics for high-pressure events: planning, inventory and real-time incident response.",
      "journey.e2.title": "Intensive Python 3.13 training",
      "journey.e2.desc": "Design patterns, abstract classes, encapsulation and modular architecture applied to data processing.",
      "journey.e3.title": "Computer Engineering Degree",
      "journey.e3.desc": "Started the degree with one question stuck in my head: what's underneath the code I already knew how to write. The answer, so far, includes C, VHDL and a fair amount of coffee.",
      "journey.e4.title": "Mutua Madrid Open · ATP/WTA",
      "journey.e4.desc": "Coordinated access and crowd flow at a top-tier ATP/WTA tournament, with bilingual Spanish/English support at a large-scale, high-visibility event.",
      "journey.e4.date": "APR 2023 & 2024",
      "journey.e5.title": "Brussels Operations & Finance",
      "journey.e5.desc": "Two summers at an all-English pub: high-volume cocktail service, supplier management and till reconciliation.",
      "journey.e5.date": "SUMMERS 2023 — 2024",
      "journey.tag.leadership": "Leadership", "journey.tag.logistics": "Logistics", "journey.tag.pressure": "High pressure",
      "journey.tag.selfTaught": "Self-taught", "journey.tag.lowLevel": "Low-level",
      "journey.tag.bilingual": "Bilingual", "journey.tag.events": "Large-scale events", "journey.tag.highVolume": "High volume",

      "contact.title": "Let's build something.",
      "contact.desc": "Have a project, an open position, or just fancy talking engineering? Get in touch.",
      "contact.status": "Open to new opportunities",
      "contact.copied": "Copied ✓",

      "meta.description": "Yamila Montilla — Computer Engineering student and backend developer in Madrid. Java, Python, C, VHDL.",
      "meta.title": "Yamila Montilla — Backend Developer",
      "control.theme": "Toggle theme",
      "control.menuOpen": "Open menu", "control.menuClose": "Close menu",
    },
  };

  const STORAGE_THEME = "ym_theme";
  const STORAGE_LANG = "ym_lang";
  const root = document.documentElement;
  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LANG_CODES = { es: "ES", en: "EN" };

  /* --------------------------------- THEME ---------------------------------- */
  const THEME_BG = { dark: "#0a0806", light: "#f6f3ee" };

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_THEME);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_THEME, theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_BG[theme]);
  }

  function initTheme() {
    applyTheme(getPreferredTheme());
    document.getElementById("theme-toggle").addEventListener("click", () => {
      applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light");
    });
  }

  /* ---------------------------------- I18N ------------------------------------ */
  function getPreferredLang() {
    const stored = localStorage.getItem(STORAGE_LANG);
    if (stored === "es" || stored === "en") return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
  }

  function applyLanguage(lang) {
    const table = dict[lang] || dict.es;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (table[key] !== undefined) el.textContent = table[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (table[key] !== undefined) el.setAttribute("placeholder", table[key]);
    });
    root.setAttribute("lang", lang);
    localStorage.setItem(STORAGE_LANG, lang);
    document.title = table["meta.title"];
    const metaDesc = document.getElementById("meta-description");
    if (metaDesc) metaDesc.setAttribute("content", table["meta.description"]);

    const langCode = document.getElementById("lang-code");
    if (langCode) langCode.textContent = LANG_CODES[lang] || LANG_CODES.es;

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) themeToggle.setAttribute("aria-label", table["control.theme"]);
  }

  function initLang() {
    applyLanguage(getPreferredLang());
    const langToggle = document.getElementById("lang-toggle");
    langToggle.addEventListener("click", () => {
      const next = root.getAttribute("lang") === "en" ? "es" : "en";
      if (prefersReducedMotion()) {
        applyLanguage(next);
        return;
      }
      langToggle.classList.add("is-swapping");
      setTimeout(() => {
        applyLanguage(next);
        langToggle.classList.remove("is-swapping");
      }, 180);
    });
  }

  /* ------------------------------- MOBILE NAV --------------------------------- */
  function initMobileNav() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const body = document.body;

    function openNav() {
      mobileNav.classList.add("is-open");
      mobileNav.setAttribute("aria-hidden", "false");
      menuToggle.setAttribute("aria-expanded", "true");
      body.classList.add("nav-open");
      mobileNav.querySelector(".mobile-nav-link")?.focus({ preventScroll: true });
    }
    function closeNav({ restoreFocus = false } = {}) {
      mobileNav.classList.remove("is-open");
      mobileNav.setAttribute("aria-hidden", "true");
      menuToggle.setAttribute("aria-expanded", "false");
      body.classList.remove("nav-open");
      if (restoreFocus) menuToggle.focus({ preventScroll: true });
    }
    menuToggle.addEventListener("click", () => {
      menuToggle.getAttribute("aria-expanded") === "true" ? closeNav({ restoreFocus: true }) : openNav();
    });
    mobileNav.querySelectorAll(".mobile-nav-link").forEach((link) => link.addEventListener("click", () => closeNav()));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") closeNav({ restoreFocus: true });
    });
  }

  /* --------------------------- HEADER SCROLL STATE ----------------------------- */
  function initHeaderScrollState() {
    const header = document.getElementById("site-header");
    const sentinel = document.getElementById("scroll-sentinel");
    new IntersectionObserver(([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting), { threshold: 0 }).observe(sentinel);
  }

  /* -------------------------------- REVEAL ON SCROLL ---------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ------------------------------ ACTIVE NAV LINK -------------------------------- */
  function initActiveNav() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    if (sections.length === 0) return;
    const linkFor = (id) => document.querySelector(`.nav-link[href="#${id}"]`);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        const link = linkFor(entry.target.id);
        if (!link || !entry.isIntersecting) return;
        navLinks.forEach((l) => l.classList.remove("is-active"));
        link.classList.add("is-active");
      }),
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  /* ----------------------------- CODE BLOCK LINE REVEAL --------------------------- */
  function initCodeReveal() {
    const codeEl = document.querySelector(".code-body code");
    if (!codeEl) return;
    const lines = codeEl.innerHTML.split("\n");
    codeEl.innerHTML = lines.map((line, i) => `<span class="line" style="transition-delay:${i * 45}ms">${line}</span>`).join("\n");
  }

  /* --------------------------- POINTER MICRO-INTERACTIONS -------------------------- */
  function initPointerFX() {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer || prefersReducedMotion()) return;
    let rafId = null, px = 0.5, py = 0.5;
    const heroFrame = document.querySelector(".hero-frame");
    function flushGlobal() {
      root.style.setProperty("--mx", px.toFixed(3));
      root.style.setProperty("--my", py.toFixed(3));
      if (heroFrame) {
        heroFrame.style.setProperty("--tiltx", `${((px - 0.5) * 16).toFixed(2)}deg`);
        heroFrame.style.setProperty("--tilty", `${((px - 0.5) * -14).toFixed(1)}px`);
      }
      rafId = null;
    }
    document.addEventListener("pointermove", (e) => {
      px = e.clientX / window.innerWidth;
      py = e.clientY / window.innerHeight;
      if (!rafId) rafId = requestAnimationFrame(flushGlobal);
    }, { passive: true });

    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--magx", `${((e.clientX - rect.left - rect.width / 2) * 0.25).toFixed(1)}px`);
        el.style.setProperty("--magy", `${((e.clientY - rect.top - rect.height / 2) * 0.25).toFixed(1)}px`);
      });
      el.addEventListener("pointerleave", () => {
        el.style.setProperty("--magx", "0px");
        el.style.setProperty("--magy", "0px");
      });
    });
  }

  /* --------------------------------- COMMAND PALETTE -------------------------------- */
  function stripDiacritics(str) { return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }

  function highlightAndScrollTo(id) {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
    target.classList.remove("is-highlighted");
    void target.offsetWidth;
    target.classList.add("is-highlighted");
    target.addEventListener("animationend", () => target.classList.remove("is-highlighted"), { once: true });
  }

  function buildSearchIndex() {
    return [...document.querySelectorAll(".case-card[data-search]")].map((card) => {
      const title = card.querySelector(".case-title")?.textContent || "";
      return { id: card.id, title, keywords: stripDiacritics(`${title} ${card.getAttribute("data-search")}`) };
    });
  }

  function initPalette() {
    const backdrop = document.getElementById("palette-backdrop");
    const input = document.getElementById("palette-input");
    const resultsEl = document.getElementById("palette-results");
    const trigger = document.getElementById("search-toggle");
    let activeIndex = -1;
    let currentResults = [];

    function render(query) {
      const q = stripDiacritics(query);
      const index = buildSearchIndex();
      currentResults = q ? index.filter((r) => r.keywords.includes(q)) : index;
      activeIndex = currentResults.length ? 0 : -1;
      paint();
    }

    function paint() {
      resultsEl.innerHTML = "";
      if (currentResults.length === 0) {
        const table = dict[root.getAttribute("lang") === "en" ? "en" : "es"];
        const empty = document.createElement("div");
        empty.className = "palette-empty";
        empty.textContent = table["palette.empty"];
        resultsEl.appendChild(empty);
        return;
      }
      currentResults.forEach((r, i) => {
        const row = document.createElement("button");
        row.type = "button";
        row.className = "palette-result" + (i === activeIndex ? " is-active" : "");
        row.innerHTML = `<i class="ph ph-cube" aria-hidden="true"></i><span>${r.title}</span><span class="palette-result-meta">PROJECT</span>`;
        row.addEventListener("mouseenter", () => { activeIndex = i; paint(); });
        row.addEventListener("click", () => selectResult(r));
        resultsEl.appendChild(row);
      });
    }

    function selectResult(r) {
      highlightAndScrollTo(r.id);
      close();
    }

    function open() {
      backdrop.classList.add("is-open");
      backdrop.setAttribute("aria-hidden", "false");
      input.value = "";
      render("");
      setTimeout(() => input.focus(), 50);
    }
    function close() {
      backdrop.classList.remove("is-open");
      backdrop.setAttribute("aria-hidden", "true");
      trigger.focus({ preventScroll: true });
    }

    trigger.addEventListener("click", open);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) close(); });
    input.addEventListener("input", () => render(input.value));
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, currentResults.length - 1); paint(); }
      if (e.key === "ArrowUp") { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); paint(); }
      if (e.key === "Enter" && currentResults[activeIndex]) selectResult(currentResults[activeIndex]);
      if (e.key === "Escape") close();
    });
    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        backdrop.classList.contains("is-open") ? close() : open();
      } else if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
        close();
      }
    });
  }

  /* --------------------------------- TOOLBOX DOORS ----------------------------------
     Chip icons use each technology's real logo (devicon) where one exists; things
     without an official mark (SQL, JUnit, VHDL, memory management, Vivado) fall
     back to a plain Phosphor icon instead of a generic placeholder. */
  const CATEGORIES = {
    backend: {
      chips: [
        { label: "Java", icon: "devicon-java-plain colored" },
        { label: "Python", icon: "devicon-python-plain colored" },
        { label: "SQL", icon: "ph ph-database" },
        { label: "JUnit", icon: "ph ph-check-circle" },
      ],
      projects: ["proj-3", "proj-7"],
    },
    frontend: {
      chips: [
        { label: "HTML5", icon: "devicon-html5-plain colored" },
        { label: "CSS3", icon: "devicon-css3-plain colored" },
        { label: "JavaScript", icon: "devicon-javascript-plain colored" },
      ],
      projects: ["proj-8"],
    },
    systems: {
      chips: [
        { label: "C", icon: "devicon-c-plain colored" },
        { label: "VHDL", icon: "ph ph-cpu" },
        { label: "MIPS Assembly", icon: "devicon-assembly-line colored" },
        { label: "Punteros / Memoria", icon: "ph ph-stack" },
      ],
      projects: ["proj-1", "proj-2", "proj-4", "proj-5", "proj-6"],
    },
    tools: {
      chips: [
        { label: "Git", icon: "devicon-git-plain colored" },
        { label: "GitHub", icon: "devicon-github-original colored" },
        { label: "VS Code", icon: "devicon-vscode-plain colored" },
        { label: "Vivado", icon: "ph ph-flow-arrow" },
      ],
      projects: ["proj-2", "proj-4", "proj-8"],
    },
  };
  const CATEGORY_ICON = { backend: "ph-database", frontend: "ph-browser", systems: "ph-cpu", tools: "ph-wrench" };

  function initToolboxDoors() {
    const doorCards = document.querySelectorAll(".door-card");
    const expand = document.getElementById("door-expand");
    const title = document.getElementById("door-expand-title");
    const chipsEl = document.getElementById("door-expand-chips");
    const projectsEl = document.getElementById("door-expand-projects");
    const closeBtn = document.getElementById("door-close");
    let openCategory = null;

    function openCategoryPanel(key) {
      const cat = CATEGORIES[key];
      if (!cat) return;
      openCategory = key;
      doorCards.forEach((c) => c.classList.toggle("is-active", c.getAttribute("data-category") === key));
      title.textContent = key.toUpperCase();
      chipsEl.innerHTML = cat.chips.map((c) => `<span class="chip"><i class="${c.icon}" aria-hidden="true"></i>${c.label}</span>`).join("");
      projectsEl.innerHTML = cat.projects.map((id) => {
        const card = document.getElementById(id);
        if (!card) return "";
        const label = card.querySelector(".case-title")?.textContent || id;
        return `<button type="button" class="door-mini-card" data-goto="${id}">
          <span class="door-mini-thumb"><i class="ph ${CATEGORY_ICON[key]}" aria-hidden="true"></i></span>
          <span class="door-mini-title">${label}</span>
        </button>`;
      }).join("");
      expand.setAttribute("data-open", "true");
      projectsEl.querySelectorAll("[data-goto]").forEach((btn) => {
        btn.addEventListener("click", () => highlightAndScrollTo(btn.getAttribute("data-goto")));
      });
    }

    function closePanel() {
      openCategory = null;
      expand.setAttribute("data-open", "false");
      doorCards.forEach((c) => c.classList.remove("is-active"));
    }

    doorCards.forEach((card) => {
      card.addEventListener("click", () => {
        const key = card.getAttribute("data-category");
        openCategory === key ? closePanel() : openCategoryPanel(key);
      });
    });
    closeBtn.addEventListener("click", closePanel);
  }

  /* -------------------------------- EMAIL COPY FALLBACK -----------------------------
     mailto: links only work if the visitor has a default mail app configured, which
     isn't always true. Copying the address to the clipboard always works. */
  function initEmailCopy() {
    const btn = document.getElementById("email-copy");
    const label = document.getElementById("email-copy-text");
    if (!btn || !label) return;
    const email = btn.getAttribute("data-email");
    const original = label.textContent;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        return;
      }
      const table = dict[root.getAttribute("lang") === "en" ? "en" : "es"];
      label.textContent = table["contact.copied"];
      clearTimeout(btn._resetTimer);
      btn._resetTimer = setTimeout(() => { label.textContent = original; }, 1800);
    });
  }

  /* ---------------------------------- MISC --------------------------------------- */
  function initFooterYear() {
    const el = document.getElementById("footer-copy");
    if (el) el.textContent = `© ${new Date().getFullYear()} Yamila Montilla`;
  }
  function initHudBuildYear() {
    const el = document.getElementById("hud-build");
    if (el) el.textContent = `BUILD: ${new Date().getFullYear()}`;
  }

  /* ---------------------------------- INIT ----------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initLang();
    initMobileNav();
    initHeaderScrollState();
    initCodeReveal();
    initReveal();
    initActiveNav();
    initPointerFX();
    initPalette();
    initToolboxDoors();
    initEmailCopy();
    initFooterYear();
    initHudBuildYear();
  });
})();
