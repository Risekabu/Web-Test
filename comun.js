(() => {
  const N8N_WEBHOOK = "https://example.com/webhook/taqalid-chat"; // CAMBIAR

  const T = {
    es: {
      skip: "Saltar al contenido",
      nInicio: "Inicio", nPrograma: "Programa", nHist: "Historia", nIns: "Inscripción",
      fechas: "22 – 25 DE ABRIL DE 2027", faltan: "Faltan", dias: "Días", horas: "Horas", min: "Min", seg: "Seg",
      envivo: "¡YA ESTAMOS EN VIVO!",
      sobreTexto: "Taqalid 2027 es un encuentro de cuatro días para compartir cultura, música, gastronomía y comunidad. Te invitamos a formar parte de esta experiencia.",
      btnIns: "Inscríbete", btnCal: "Agregar a Google Calendar", volver: "← Volver al inicio",
      vidTitulo: "Video", patTitulo: "Patrocinadores",
      galTitulo: "Galería", foto1: "Ediciones anteriores", foto2: "Próximamente", foto3: "Próximamente",
      histTitulo: "HISTORIA", histSub: "Nuestro origen",
      histTexto: "Aquí va la historia de Taqalid: cómo nació el encuentro, quiénes lo impulsan y qué lo ha hecho crecer cada año.",
      progTitulo: "PROGRAMA", progSub: "Elige un día", hApertura: "Por confirmar", pApertura: "Apertura", pClub: "Club Árabe", pA2: "Actividad 2", pA3: "Actividad 3", hCierre: "Por confirmar", pCierre: "Cierre",
      progNota: "Horarios y sedes se confirmarán próximamente.",
      insTitulo: "INSCRÍBETE", insSub: "Elige tu idioma", insTexto: "Completa el formulario para participar. Cada botón abre el formulario en su idioma.",
      btnEs: "Formulario en Español", btnEn: "Formulario en Inglés",
      contacto: "Contacto", chatTitulo: "Asistente Taqalid",
      chatBienvenida: "¡Hola! Soy el asistente de Taqalid 2027. ¿En qué te ayudo?",
      chatError: "No pude responder en este momento. Intenta de nuevo más tarde.",
      chatPlaceholder: "Escribe tu pregunta...",
      calTitulo: "Taqalid 2027"
    },
    en: {
      skip: "Skip to content",
      nInicio: "Home", nPrograma: "Program", nHist: "History", nIns: "Register",
      fechas: "APRIL 22 – 25, 2027", faltan: "Countdown", dias: "Days", horas: "Hours", min: "Min", seg: "Sec",
      envivo: "WE ARE LIVE NOW!",
      sobreTexto: "Taqalid 2027 is a four-day gathering to share culture, music, food and community. We invite you to be part of this experience.",
      btnIns: "Register", btnCal: "Add to Google Calendar", volver: "← Back to home",
      vidTitulo: "Video", patTitulo: "Sponsors",
      galTitulo: "Gallery", foto1: "Past editions", foto2: "Coming soon", foto3: "Coming soon",
      histTitulo: "HISTORY", histSub: "Our origin",
      histTexto: "Here goes the story of Taqalid: how the gathering started, who drives it, and what has helped it grow every year.",
      progTitulo: "PROGRAM", progSub: "Choose a day", hApertura: "To be confirmed", pApertura: "Opening", pClub: "Arab Club", pA2: "Activity 2", pA3: "Activity 3", hCierre: "To be confirmed", pCierre: "Closing",
      progNota: "Schedules and venues will be confirmed soon.",
      insTitulo: "REGISTER", insSub: "Choose your language", insTexto: "Fill out the form to take part. Each button opens the form in its language.",
      btnEs: "Form in Spanish", btnEn: "Form in English",
      contacto: "Contact", chatTitulo: "Taqalid Assistant",
      chatBienvenida: "Hi! I'm the Taqalid 2027 assistant. How can I help you?",
      chatError: "I couldn't respond right now. Please try again later.",
      chatPlaceholder: "Type your question...",
      calTitulo: "Taqalid 2027"
    },
    ar: {
      skip: "انتقل إلى المحتوى",
      nInicio: "الرئيسية", nPrograma: "البرنامج", nHist: "التاريخ", nIns: "التسجيل",
      fechas: "22 – 25 أبريل 2027", faltan: "متبقي", dias: "أيام", horas: "ساعات", min: "دقائق", seg: "ثوانٍ",
      envivo: "الحدث مباشر الآن!",
      sobreTexto: "طاقليد 2027 لقاء يدوم أربعة أيام لمشاركة الثقافة والموسيقى والطعام والمجتمع. ندعوك لتكون جزءًا من هذه التجربة.",
      btnIns: "سجّل الآن", btnCal: "أضف إلى تقويم Google", volver: "→ العودة إلى الرئيسية",
      vidTitulo: "فيديو", patTitulo: "الرعاة",
      galTitulo: "المعرض", foto1: "الدورات السابقة", foto2: "قريبًا", foto3: "قريبًا",
      histTitulo: "التاريخ", histSub: "أصلنا",
      histTexto: "هنا تُكتب قصة طاقليد: كيف بدأ اللقاء، ومن يقف خلفه، وما الذي جعله يكبر كل عام.",
      progTitulo: "البرنامج", progSub: "اختر يومًا", hApertura: "قريبًا", pApertura: "الافتتاح", pClub: "النادي العربي", pA2: "النشاط 2", pA3: "النشاط 3", hCierre: "قريبًا", pCierre: "الختام",
      progNota: "سيتم تأكيد المواعيد والأماكن قريبًا.",
      insTitulo: "التسجيل", insSub: "اختر لغتك", insTexto: "أكمل النموذج للمشاركة. كل زر يفتح النموذج بلغته.",
      btnEs: "النموذج بالإسبانية", btnEn: "النموذج بالإنجليزية",
      contacto: "التواصل", chatTitulo: "مساعد طاقليد",
      chatBienvenida: "مرحبًا! أنا مساعد طاقليد 2027. كيف يمكنني مساعدتك؟",
      chatError: "تعذّر الرد الآن. حاول مرة أخرى لاحقًا.",
      chatPlaceholder: "اكتب سؤالك...",
      calTitulo: "طاقليد 2027"
    }
  };

  let lang = "es";
  try { const g = localStorage.getItem("lang"); lang = ["es", "en", "ar"].includes(g) ? g : "es"; } catch (_) {}
  let tema = "oscuro";
  try { tema = localStorage.getItem("tema") === "claro" ? "claro" : "oscuro"; } catch (_) {}

  const t = () => T[lang];

  // ── TEMA ──
  function aplicarTema() {
    document.documentElement.dataset.theme = tema === "claro" ? "light" : "dark";
    document.getElementById("tema-btn").textContent = tema === "claro" ? "☀" : "🌙";
  }
  document.getElementById("tema-btn").addEventListener("click", () => {
    tema = tema === "claro" ? "oscuro" : "claro";
    try { localStorage.setItem("tema", tema); } catch (_) {}
    aplicarTema();
  });

  // ── IDIOMA ──
  function aplicarIdioma() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = t()[el.dataset.i18n] || T.es[el.dataset.i18n];
      if (v) el.textContent = v;
    });
    document.getElementById("lang-toggle").textContent = { es: "EN", en: "AR", ar: "ES" }[lang];
    document.getElementById("chat-input").placeholder = t().chatPlaceholder;
    actualizarCalendario();
  }
  document.getElementById("lang-toggle").addEventListener("click", () => {
    lang = lang === "es" ? "en" : lang === "en" ? "ar" : "es";
    try { localStorage.setItem("lang", lang); } catch (_) {}
    aplicarIdioma();
  });

  // ── CALENDARIO (solo existe en index.html) ──
  function actualizarCalendario() {
    const btn = document.getElementById("btn-gcal");
    if (!btn) return;
    const detalles = encodeURIComponent(t().sobreTexto);
    btn.href =
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(t().calTitulo) +
      "&dates=20270422T100000/20270425T180000&ctz=America/El_Salvador&details=" + detalles + "&location=El+Salvador";
  }

  // ── PESTAÑAS DEL PROGRAMA (solo existen en programa.html) ──
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(b => b.classList.toggle("activo", b === btn));
      document.querySelectorAll(".dia").forEach(d => d.classList.toggle("activo", d.id === "dia-" + btn.dataset.dia));
    });
  });

  // ── REVELAR AL HACER SCROLL ──
  function observarReveal() {
    const els = document.querySelectorAll(".page.activo .reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(entradas => {
      entradas.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  }

  // ── MENÚ MÓVIL ──
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  menuBtn.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    menuBtn.setAttribute("aria-expanded", String(abierto));
    menuBtn.textContent = abierto ? "✕" : "☰";
  });
  menu.addEventListener("click", e => {
    if (e.target.closest("a")) {
      menu.classList.remove("abierto");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    }
  });

  // ── CHAT ──
  const box = document.getElementById("chat-box");
  const msgs = document.getElementById("chat-msgs");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const send = document.getElementById("chat-send");
  const sessionId = String(Date.now()) + Math.random().toString(36).slice(2);

  function addMsg(texto, tipo) {
    const div = document.createElement("div");
    div.className = "msg " + tipo;
    div.textContent = texto;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }
  document.getElementById("chat-toggle").addEventListener("click", () => {
    box.classList.toggle("open");
    if (box.classList.contains("open") && !msgs.children.length) addMsg(t().chatBienvenida, "bot");
  });
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const pregunta = input.value.trim();
    if (!pregunta) return;
    addMsg(pregunta, "user");
    input.value = "";
    send.disabled = true;
    try {
      const res = await fetch(N8N_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: pregunta, lang, sessionId })
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      addMsg(String(data.reply || t().chatError), "bot");
    } catch (_) {
      addMsg(t().chatError, "bot");
    } finally {
      send.disabled = false;
      input.focus();
    }
  });

  // ── CURSOR + PARTÍCULAS ──
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fino = matchMedia("(pointer: fine)").matches;
  if (!reduce && fino) {
    const cv = document.getElementById("trail");
    const ctx = cv.getContext("2d");
    const colores = ["#CE1126", "#FFFFFF", "#007A3D"];
    const parts = [];
    const resize = () => { cv.width = innerWidth; cv.height = innerHeight; };
    resize();
    addEventListener("resize", resize);

    const llave = document.getElementById("llave");
    let mx = innerWidth / 2, my = innerHeight / 2, lx = mx, ly = my, ultimo = 0;

    addEventListener("mousemove", e => {
      mx = e.clientX; my = e.clientY;
      const ahora = performance.now();
      if (ahora - ultimo > 20) {
        ultimo = ahora;
        parts.push({
          x: mx, y: my,
          r: 1.1 + Math.random() * 1.7,
          vida: 1,
          c: colores[Math.floor(Math.random() * 3)]
        });
        if (parts.length > 85) parts.shift();
      }
    });
    addEventListener("mousedown", () => {
      llave.classList.remove("girar");
      void llave.offsetWidth;
      llave.classList.add("girar");
      for (let i = 0; i < 12; i++) {
        parts.push({
          x: mx, y: my,
          r: 1.5 + Math.random() * 1.8,
          vida: 1.4,
          c: colores[i % 3],
          vx: (Math.random() - .5) * 5,
          vy: (Math.random() - .5) * 5
        });
      }
    });
    llave.addEventListener("animationend", () => llave.classList.remove("girar"));

    function frame() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.vida -= 0.028;
        if (p.vida <= 0) { parts.splice(i, 1); continue; }
        if (p.vx) { p.x += p.vx; p.y += p.vy; p.vx *= .93; p.vy *= .93; }
        ctx.globalAlpha = Math.max(p.vida, 0);
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(p.r * p.vida, .25), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      lx += (mx - lx) * 0.28;
      ly += (my - ly) * 0.28;
      llave.style.transform = `translate(${lx - 18}px, ${ly - 18}px) rotate(${(mx - lx) * 0.55}deg)`;
      requestAnimationFrame(frame);
    }
    frame();

    document.querySelectorAll(".glass, .unidad").forEach(c => {
      c.addEventListener("mousemove", e => {
        const r = c.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - .5;
        const py = (e.clientY - r.top) / r.height - .5;
        c.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-6px)`;
      });
      c.addEventListener("mouseleave", () => { c.style.transform = ""; });
    });
  }

  // ── ONDA TÁCTIL ──
  if (!reduce) {
    addEventListener("touchstart", e => {
      for (const tc of e.touches) {
        const o = document.createElement("span");
        o.className = "onda";
        o.style.left = tc.clientX + "px";
        o.style.top = tc.clientY + "px";
        o.style.borderColor = ["#CE1126", "#FFFFFF", "#007A3D"][Math.floor(Math.random() * 3)];
        document.body.appendChild(o);
        o.addEventListener("animationend", () => o.remove());
      }
    }, { passive: true });
  }

  // ── INICIO ──
  aplicarTema();
  aplicarIdioma();
  observarReveal();
})();