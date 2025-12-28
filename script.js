/* ---------------------------
   Smooth Scroll
---------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  /* ---------------------------
     Scroll Progress Bar
  ---------------------------- */
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("scroll-progress").style.width =
      (scrollTop / height) * 100 + "%";
  });
  
  /* ---------------------------
     Reveal on Scroll
  ---------------------------- */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  }, { threshold: 0.15 });
  
  document.querySelectorAll(".section, .card, .project-card")
    .forEach(el => observer.observe(el));
  
  /* ---------------------------
     Active Nav Highlight
  ---------------------------- */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  
  /* ---------------------------
     Typing Effect
  ---------------------------- */
  const roles = [
    "AI Engineer",
    "Prompt Engineer",
    "LLM Specialist",
    "Web Developer"
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  const typingEl = document.getElementById("typing");
  
  function type() {
    if (charIndex < roles[roleIndex].length) {
      typingEl.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 60);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 300);
    }
  }
  
  type();
  
  /* ---------------------------
     Dark Mode Toggle
  ---------------------------- */
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  /* ---------------------------
     Back to Top Button
  ---------------------------- */
  const backToTop = document.getElementById("backToTop");
  
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 500 ? "block" : "none";
  });
  
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  