/**
 * CSEJ Endurance Hub - Standalone Bilingual & UI Controller
 */

(function () {
  "use strict";

  const copy = {
    fr: {
      metaTitle: "CSEJ | Club Sportif Endurance Jijel",
      metaDesc: "Découvrez le Club Sportif Endurance Jijel : course sur piste, trail et HIIT à Jijel.",
      heroAlt: "Jambes de coureurs démarrant ensemble sur une piste",
      nav: ["Accueil", "Qui sommes-nous", "Programmes", "Contact"],
      join: "Rejoignez-nous",
      heroTag: "Club Sportif Endurance Jijel",
      hero: "Excellence. Endurance. Jijel.",
      heroSub: "Rejoignez le mouvement.",
      heroBody: "Courir ensemble. Se dépasser ensemble. Une communauté unie par l’effort, au cœur de Jijel.",
      discover: "Découvrir le club",
      aboutKicker: "Notre identité",
      aboutTitle: "Plus qu’un club, une force collective.",
      aboutBody: "CSEJ rassemble les passionnés de course et d’entraînement fonctionnel à Jijel. Notre mission : rendre l’endurance accessible, cultiver la discipline et avancer ensemble — sur piste, en montagne et au-delà.",
      pillars: [
        ["Jijel, notre terrain", "De la piste au littoral, nous puisons notre énergie dans un territoire unique."],
        ["L’effort partagé", "Chaque séance transforme l’effort individuel en réussite collective."],
        ["Héritage algérien", "Fiers de nos couleurs, nous portons les valeurs du sport algérien."]
      ],
      programsKicker: "Nos disciplines",
      programsTitle: "Trois terrains. Un même engagement.",
      programs: [
        ["Course sur piste", "Vitesse, technique et progression mesurée sur piste."],
        ["Trail endurance", "Dénivelé, nature et résistance sur les sentiers de Jijel."],
        ["HIIT & conditionnement", "Des intervalles intenses pour développer puissance et agilité."]
      ],
      scheduleKicker: "Rythme hebdomadaire",
      scheduleTitle: "La semaine CSEJ",
      tableHeaders: ["Jour", "Séance", "Horaire", "Remarques"],
      rows: [
        ["Samedi", "HIIT & conditionnement", "18:00", "Stade de Jijel"],
        ["Lundi", "Course en extérieur ou Trail endurance (10 à 15 km par groupes)", "17:30", "—"],
        ["Mercredi", "Trail endurance", "18:00", "Point de départ communiqué"],
        ["Vendredi", "Sortie collective", "06:30", "Jijel"]
      ],
      contactKicker: "Prenez le départ",
      contactTitle: "Votre prochaine foulée commence ici.",
      contactBody: "Une question sur les entraînements ou envie de rejoindre le groupe ? Écrivez-nous ou contactez directement un représentant du club.",
      nameLabel: "Nom complet",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      messageLabel: "Votre message",
      send: "Envoyer le message",
      sent: "Message prêt à être envoyé !",
      reps: "Représentants officiels",
      location: "Notre point de rencontre",
      map: "Voir sur Google Maps",
      footer: "Ensemble, plus loin.",
      legal: "Club Sportif Endurance Jijel © 2024"
    },
    ar: {
      metaTitle: "النادي الرياضي للتحمل جيجل | CSEJ",
      metaDesc: "اكتشف النادي الرياضي للتحمل جيجل: الجري على المضمار، التحمل الجبلي، والتمارين المكثفة في جيجل.",
      heroAlt: "أرجل عدائين ينطلقون معاً على المضمار",
      nav: ["الرئيسية", "من نحن", "البرامج", "اتصل بنا"],
      join: "انضم إلينا",
      heroTag: "النادي الرياضي للتحمل جيجل",
      hero: "التميز. التحمل. جيجل.",
      heroSub: "انضم إلى الحركة.",
      heroBody: "نركض معاً. نتجاوز حدودنا معاً. مجتمع يوحّده الجهد في قلب جيجل.",
      discover: "اكتشف النادي",
      aboutKicker: "هويتنا",
      aboutTitle: "أكثر من نادٍ، قوة جماعية.",
      aboutBody: "يجمع نادي CSEJ عشاق الجري والتدريب الوظيفي في جيجل. مهمتنا هي جعل رياضة التحمل متاحة للجميع، وتنمية الانضباط والتقدم معاً على المضمار وفي الجبال وما بعدها.",
      pillars: [
        ["جيجل، ملعبنا", "من المضمار إلى الساحل، نستمد طاقتنا من أرض فريدة."],
        ["الجهد المشترك", "كل حصة تحول الجهد الفردي إلى نجاح جماعي."],
        ["إرث جزائري", "نعتز بألواننا ونحمل قيم الرياضة الجزائرية."]
      ],
      programsKicker: "تخصصاتنا",
      programsTitle: "ثلاثة ميادين. التزام واحد.",
      programs: [
        ["الجري على المضمار", "السرعة والتقنية والتطور المدروس على المضمار."],
        ["التحمل الجبلي", "الطبيعة والمرتفعات والمقاومة على مسارات جيجل."],
        ["التمارين المكثفة", "فترات عالية الشدة لتطوير القوة والرشاقة."]
      ],
      scheduleKicker: "الإيقاع الأسبوعي",
      scheduleTitle: "أسبوع CSEJ",
      tableHeaders: ["اليوم", "التدريب", "التوقيت", "ملاحظات"],
      rows: [
        ["السبت", "HIIT وتكييف بدني", "18:00", "ملعب جيجل"],
        ["الاثنين", "الجري الخارجي أو الجري الجبلي للتحمل (10 إلى 15 كلم حسب المجموعات)", "17:30", "—"],
        ["الأربعاء", "الجري الجبلي للتحمل (Trail endurance)", "18:00", "نقطة الانطلاق تُعلن لاحقا"],
        ["الجمعة", "خرجة جماعية", "06:30", "جيجل"]
      ],
      contactKicker: "خذ الانطلاقة",
      contactTitle: "خطوتك القادمة تبدأ هنا.",
      contactBody: "هل لديك سؤال حول التدريبات أو ترغب في الانضمام؟ راسلنا أو اتصل مباشرة بأحد ممثلي النادي.",
      nameLabel: "الاسم الكامل",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      messageLabel: "رسالتك",
      send: "إرسال الرسالة",
      sent: "رسالتك جاهزة للإرسال!",
      reps: "الممثلون الرسميون",
      location: "نقطة تجمعنا",
      map: "افتح في خرائط Google",
      footer: "معاً، إلى أبعد مدى.",
      legal: "النادي الرياضي للتحمل جيجل © 2024"
    }
  };

  let currentLang = "fr";
  try {
    const saved = localStorage.getItem("csej_lang");
    if (saved === "ar" || saved === "fr") {
      currentLang = saved;
    }
  } catch (e) {
    // localStorage might be unavailable in private browsing
  }

  function renderContent(lang) {
    const t = copy[lang];
    const isRtl = lang === "ar";

    // Document-level attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.title = t.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.metaDesc);

    // Hero image alt
    const heroImg = document.getElementById("heroImg");
    if (heroImg) heroImg.setAttribute("alt", t.heroAlt);

    // Navigation links
    const navLinks = document.querySelectorAll(".nav-desktop .nav-link");
    navLinks.forEach((link, idx) => {
      if (t.nav[idx]) link.textContent = t.nav[idx];
    });

    const mobileNavLinks = document.querySelectorAll(".nav-mobile .nav-mobile-link");
    mobileNavLinks.forEach((link, idx) => {
      if (t.nav[idx]) link.textContent = t.nav[idx];
    });

    // Join CTA
    const joinBtns = document.querySelectorAll("[data-i18n-join]");
    joinBtns.forEach((btn) => {
      const arrowIcon = btn.querySelector("svg");
      btn.childNodes[0].textContent = t.join + " ";
      if (arrowIcon) {
        if (isRtl) {
          arrowIcon.classList.add("rtl-rotate-180");
        } else {
          arrowIcon.classList.remove("rtl-rotate-180");
        }
      }
    });

    // Hero
    const heroTag = document.getElementById("heroTag");
    if (heroTag) {
      const line = heroTag.querySelector(".kicker-line");
      heroTag.textContent = "";
      if (line) heroTag.appendChild(line);
      heroTag.appendChild(document.createTextNode(" " + t.heroTag));
    }

    const heroTitle = document.getElementById("heroTitle");
    if (heroTitle) heroTitle.textContent = t.hero;

    const heroSub = document.getElementById("heroSub");
    if (heroSub) heroSub.textContent = t.heroSub;

    const heroBody = document.getElementById("heroBody");
    if (heroBody) heroBody.textContent = t.heroBody;

    const heroDiscover = document.getElementById("heroDiscover");
    if (heroDiscover) {
      const arrow = heroDiscover.querySelector("svg");
      heroDiscover.childNodes[0].textContent = t.discover + " ";
    }

    // About
    const aboutKicker = document.getElementById("aboutKicker");
    if (aboutKicker) {
      const line = aboutKicker.querySelector(".kicker-line");
      aboutKicker.textContent = "";
      if (line) aboutKicker.appendChild(line);
      aboutKicker.appendChild(document.createTextNode(" " + t.aboutKicker));
    }

    const aboutTitle = document.getElementById("aboutTitle");
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;

    const aboutBody = document.getElementById("aboutBody");
    if (aboutBody) aboutBody.textContent = t.aboutBody;

    // Pillars
    t.pillars.forEach(([pTitle, pBody], idx) => {
      const titleEl = document.getElementById(`pillarTitle${idx}`);
      const bodyEl = document.getElementById(`pillarBody${idx}`);
      if (titleEl) titleEl.textContent = pTitle;
      if (bodyEl) bodyEl.textContent = pBody;
    });

    // Programs
    const programsKicker = document.getElementById("programsKicker");
    if (programsKicker) {
      const line = programsKicker.querySelector(".kicker-line");
      programsKicker.textContent = "";
      if (line) programsKicker.appendChild(line);
      programsKicker.appendChild(document.createTextNode(" " + t.programsKicker));
    }

    const programsTitle = document.getElementById("programsTitle");
    if (programsTitle) programsTitle.textContent = t.programsTitle;

    t.programs.forEach(([progTitle, progBody], idx) => {
      const titleEl = document.getElementById(`programTitle${idx}`);
      const bodyEl = document.getElementById(`programBody${idx}`);
      if (titleEl) titleEl.textContent = progTitle;
      if (bodyEl) bodyEl.textContent = progBody;
    });

    // Schedule
    const scheduleKicker = document.getElementById("scheduleKicker");
    if (scheduleKicker) {
      const line = scheduleKicker.querySelector(".kicker-line");
      scheduleKicker.textContent = "";
      if (line) scheduleKicker.appendChild(line);
      scheduleKicker.appendChild(document.createTextNode(" " + t.scheduleKicker));
    }

    const scheduleTitle = document.getElementById("scheduleTitle");
    if (scheduleTitle) scheduleTitle.textContent = t.scheduleTitle;

    const ths = document.querySelectorAll("#scheduleTable thead th");
    ths.forEach((th, idx) => {
      if (t.tableHeaders[idx]) th.textContent = t.tableHeaders[idx];
    });

    const rows = document.querySelectorAll("#scheduleTable tbody tr");
    rows.forEach((tr, rowIdx) => {
      const rowData = t.rows[rowIdx];
      if (rowData) {
        const dayCell = tr.querySelector(".td-day");
        const sessionCell = tr.querySelector(".td-session");
        const timeCell = tr.querySelector(".td-time-val span");
        const remarkCell = tr.querySelector(".td-remark");
        if (dayCell) dayCell.textContent = rowData[0];
        if (sessionCell) sessionCell.textContent = rowData[1];
        if (timeCell) timeCell.textContent = rowData[2];
        if (remarkCell) remarkCell.textContent = rowData[3];
      }
    });

    // Contact
    const contactKicker = document.getElementById("contactKicker");
    if (contactKicker) {
      const line = contactKicker.querySelector(".kicker-line");
      contactKicker.textContent = "";
      if (line) contactKicker.appendChild(line);
      contactKicker.appendChild(document.createTextNode(" " + t.contactKicker));
    }

    const contactTitle = document.getElementById("contactTitle");
    if (contactTitle) contactTitle.textContent = t.contactTitle;

    const contactBody = document.getElementById("contactBody");
    if (contactBody) contactBody.textContent = t.contactBody;

    const repsHeading = document.getElementById("repsHeading");
    if (repsHeading) repsHeading.textContent = t.reps;

    const locationLabel = document.getElementById("locationLabel");
    if (locationLabel) locationLabel.textContent = t.location;

    const mapLink = document.getElementById("mapLink");
    if (mapLink) mapLink.textContent = t.map;

    // Contact Form
    const labelName = document.getElementById("labelName");
    if (labelName) labelName.textContent = t.nameLabel;

    const labelEmail = document.getElementById("labelEmail");
    if (labelEmail) labelEmail.textContent = t.emailLabel;

    const labelPhone = document.getElementById("labelPhone");
    if (labelPhone) labelPhone.textContent = t.phoneLabel;

    const labelMessage = document.getElementById("labelMessage");
    if (labelMessage) labelMessage.textContent = t.messageLabel;

    const submitBtn = document.getElementById("formSubmitBtn");
    if (submitBtn) {
      const sendIcon = submitBtn.querySelector("svg");
      const isSent = submitBtn.classList.contains("submitted");
      submitBtn.childNodes[0].textContent = (isSent ? t.sent : t.send) + " ";
      if (sendIcon) {
        if (isRtl) {
          sendIcon.classList.add("rtl-rotate-180");
        } else {
          sendIcon.classList.remove("rtl-rotate-180");
        }
      }
    }

    // Footer
    const footerTagline = document.getElementById("footerTagline");
    if (footerTagline) footerTagline.textContent = t.footer;

    const footerLegal = document.getElementById("footerLegal");
    if (footerLegal) footerLegal.textContent = t.legal;

    // Language button states
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    document.querySelectorAll(".footer-lang-btn").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang");
      if (btnLang === lang) {
        btn.style.color = "var(--accent)";
      } else {
        btn.style.color = "";
      }
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    try {
      localStorage.setItem("csej_lang", lang);
    } catch (e) {}
    renderContent(lang);
  }

  // Setup Event Handlers on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    // Language toggles
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const selectedLang = this.getAttribute("data-lang");
        if (selectedLang) setLanguage(selectedLang);
      });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById("mobileMenuToggle");
    const navMobile = document.getElementById("navMobile");
    const iconMenu = document.getElementById("iconMenu");
    const iconClose = document.getElementById("iconClose");

    if (menuToggle && navMobile) {
      menuToggle.addEventListener("click", function () {
        const isOpen = navMobile.classList.toggle("open");
        if (iconMenu && iconClose) {
          iconMenu.style.display = isOpen ? "none" : "block";
          iconClose.style.display = isOpen ? "block" : "none";
        }
      });

      // Auto close menu when clicking link
      navMobile.querySelectorAll(".nav-mobile-link").forEach((link) => {
        link.addEventListener("click", function () {
          navMobile.classList.remove("open");
          if (iconMenu && iconClose) {
            iconMenu.style.display = "block";
            iconClose.style.display = "none";
          }
        });
      });
    }

    // Contact Form
    const contactForm = document.getElementById("contactForm");
    const submitBtn = document.getElementById("formSubmitBtn");

    if (contactForm && submitBtn) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        submitBtn.classList.add("submitted");
        const t = copy[currentLang];
        submitBtn.childNodes[0].textContent = t.sent + " ";
      });
    }

    // Initial render
    renderContent(currentLang);
  });
})();
