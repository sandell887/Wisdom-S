// Seleciona o elemento do cursor
const cursor = document.querySelector(".cursor-circle");

// Atualiza a posição do cursor e deixa visível
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursor.style.opacity = "1";
});

// Esconde o cursor quando o mouse sai da janela
document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
});

// Mostra o cursor ao entrar na janela
document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
});

// Observador para animações fade-in nas seções
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Observa todos elementos com classe fade-in
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Scroll suave para links do menu
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

// Destaque do menu conforme a seção visível no scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
