"script.js"
// Fungsi untuk scroll ke section tertentu
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth"
  });
}

// Interaksi form kontak
const contactForm = document.getElementById("contactForm");
const formOutput = document.getElementById("formOutput");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // cegah reload halaman
  formOutput.textContent = "Pesan berhasil dikirim ✅";
  formOutput.style.color = "green";

  // Reset form setelah submit
  contactForm.reset();
});

// Efek hover tambahan untuk tombol CTA
const ctaButtons = document.querySelectorAll(".cta");
ctaButtons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

// Animasi sederhana saat scroll (fade-in effect)
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const position = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      section.classList.add("visible");
    }
  });
});
