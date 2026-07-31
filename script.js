const thumbs = [
  "assets/1.webp",
  "assets/2.webp",
  "assets/3.webp",
  "assets/4.webp",
  "assets/5.webp.png",
  "assets/6.webp.png",
  "assets/7.webp.png",
  "assets/8.webp.png"
];

const gallery = document.getElementById("gallery");
gallery.innerHTML = thumbs
  .map(
    (src, i) => `
      <figure class="thumb">
        <img src="${src}" alt="Thumbnail ${i + 1}" width="1280" height="720" loading="lazy" />
      </figure>`
  )
  .join("");

document.getElementById("thumb-count").textContent = `${thumbs.length} pieces`;

const discordBtn = document.getElementById("discord-btn");

if (discordBtn) {
  // Store the initial text ("Discord: Ghiandex_")
  const originalText = discordBtn.textContent;
  
  discordBtn.setAttribute("aria-label", "Copy Discord username");

  discordBtn.addEventListener("click", async () => {
    // Temporarily change the button's text
    discordBtn.textContent = "Copied ✓";
    discordBtn.setAttribute("aria-label", "Discord username copied");

    try {
      await navigator.clipboard.writeText("Ghiandex_");
    } catch (e) {
      console.error(e);
      discordBtn.textContent = "Copy failed";
    }

    // Revert back to the original text after 1.5 seconds
    setTimeout(() => {
      discordBtn.textContent = originalText;
      discordBtn.setAttribute("aria-label", "Copy Discord username");
    }, 1500);
  });
}

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  const setMenuState = (open) => {
    navLinks.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.textContent = open ? "✕" : "☰";
  };

  menuToggle.addEventListener("click", () => {
    setMenuState(!navLinks.classList.contains("is-open"));
  });

  if (menuClose) {
    menuClose.addEventListener("click", () => setMenuState(false));
  }

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}
