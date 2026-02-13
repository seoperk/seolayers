(function () {
  const WA_LINK = "https://wa.me/923429852419";
  const EMAIL = "usamaiskills@gmail.com";
  const PHONE = "0342 9852419";

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()} SEO Layers`;

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function closeMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  }

  function toggleMenu() {
    if (!hamburger || !mobileMenu) return;
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", toggleMenu);

    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Marquee clone for seamless
  const marqueeTrack = document.getElementById("marqueeTrack");
  if (marqueeTrack) {
    const row = marqueeTrack.querySelector(".marquee__row");
    if (row) {
      const clone = row.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      marqueeTrack.appendChild(clone);
    }
  }

  // Contact form => mailto
  const form = document.getElementById("auditForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const name = (fd.get("name") || "").toString().trim();
      const site = (fd.get("site") || "").toString().trim();
const email = (fd.get("email") || "").toString().trim();
const message = (fd.get("message") || "").toString().trim();


      const subject = encodeURIComponent("Free SEO Audit Request — SEO Layers");
      const body = encodeURIComponent(
        `Name: ${name}\nWebsite: ${site}\n\nMessage:\n${message}\n\nPreferred Contact: WhatsApp (${PHONE})\n\nWhatsApp: ${WA_LINK}`
      );

      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    });
  }
})();
