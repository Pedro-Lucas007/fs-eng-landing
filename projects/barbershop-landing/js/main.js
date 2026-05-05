const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const whatsappBtn = document.getElementById("whatsapp-btn");

whatsappBtn.addEventListener("click", () => {
  const message = "Olá! Gostaria de agendar um horário na barbearia.";
  const phone = "5500000000000";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});

const form = document.querySelector(".booking-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const barber = document.getElementById("barber").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (!name || !date || !time) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  const message = `
Olá, gostaria de agendar:

Nome: ${name}
Serviço: ${service}
Profissional: ${barber}
Data: ${date}
Horário: ${time}
`;

  const phone = "5500000000000";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});