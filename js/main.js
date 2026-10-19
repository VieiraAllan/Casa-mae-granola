document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = document.querySelectorAll("section[id]");

  if (!navToggle || !navMenu) {
    console.warn("Menu mobile não encontrado no DOM.");
    return;
  }

  // Efeito no header ao rolar
  function handleHeaderScroll() {
    if (!header) return;

    if (window.scrollY > 10) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  // Destaca o item ativo do menu conforme a seção visível
  function handleActiveSection() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("is-active");

      const href = link.getAttribute("href");
      if (href === `#${currentSectionId}`) {
        link.classList.add("is-active");
      }
    });
  }

  // Abre/fecha menu mobile
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Fecha menu ao clicar em um link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("is-open")) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "☰";
      }
    });
  });

  // Inicialização
  handleHeaderScroll();
  handleActiveSection();

  window.addEventListener("scroll", () => {
    handleHeaderScroll();
    handleActiveSection();
  });
});