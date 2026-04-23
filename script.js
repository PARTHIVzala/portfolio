const roles = [
  "Designing Experiences",
  "Building Web Apps",
  "Creative Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {
  const current = roles[roleIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    typing.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = deleting ? 50 : 90;
  setTimeout(type, speed);
}

type();