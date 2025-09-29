feather.replace();
AOS.init({ duration: 1000, once: true, offset: 100 });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function showCopyNotification() {
  const notification = document.getElementById("copyNotification");
  notification.classList.add("show");
  setTimeout(() => notification.classList.remove("show"), 2000);
}

function openWhatsApp(phoneNumber) {
  const message = encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${message}`;
  window.open(whatsappUrl, "_blank");
  showCopyNotification();
}

function bookAppointment() {
  const message = encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous à la Clinique Les Babors."
  );
  window.open(`https://wa.me/21336XXXXXX?text=${message}`, "_blank");
}

function bookWithDoctor(doctorName) {
  const message = encodeURIComponent(
    `Bonjour, je souhaite prendre rendez-vous avec ${doctorName}.`
  );
  window.open(`https://wa.me/21336XXXXXX?text=${message}`, "_blank");
}

function contactUs() {
  window.location.href =
    "mailto:info@cliniquebaabors.dz?subject=Demande d'information";
}

function openMap() {
  window.open(
    "https://www.google.com/maps/search/?api=1&query=Cité+Les+Babors+Sétif+Algeria",
    "_blank"
  );
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const submitBtn = this.querySelector(".btn-submit");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML =
    '<i data-feather="loader" style="width: 20px; height: 20px; margin-right: 0.5rem;"></i>Envoi en cours...';
  feather.replace();
  setTimeout(() => {
    alert("Merci pour votre message! Nous vous répondrons dans les 24 heures.");
    this.reset();
    submitBtn.innerHTML = originalText;
    feather.replace();
  }, 2000);
});

gsap.from(".hero h1", { duration: 1, y: 50, opacity: 0, ease: "power3.out" });
gsap.from(".hero p", {
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power2.out",
  delay: 0.3,
});
