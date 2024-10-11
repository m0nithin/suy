import { DotLottie } from "./lottie.min.js";

new DotLottie({
  autoplay: true,
  loop: true,
  canvas: document.querySelector("canvas.tokenomics__illustration"),
  src: "/assets/lottie/bruh.json",
});

const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion__header");
  const body = accordion.querySelector(".accordion__body");

  const bodyHeight = body.scrollHeight;
  accordion.style.setProperty("--body-height", bodyHeight + 20 + "px");

  header.addEventListener("click", () => {
    accordion.classList.toggle("accordion_open");
  });
});

const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.onclick = (e) => {
    const hash = anchor.getAttribute("href");
    if (!hash || hash === "#") return;
    const element = document.querySelector(hash);
    if (!element) return;

    e.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
  };
});

document.querySelector(".tokenomics__copy").onclick = () => {
  const contract = document
    .querySelector(".tokenomics__contract")
    .textContent.trim();
  window.navigator.clipboard.writeText(contract);
};

const heroBruh = document.querySelector(".hero__bruh");
let heroBruhIndex = 0;

setInterval(() => {
  heroBruhIndex = (heroBruhIndex + 1) % 2;
  const image = `/assets/img/hero-bruh_${heroBruhIndex + 1}.svg`;
  heroBruh.src = image;
}, 1000);

function setIframeHeight() {
  const height = document.querySelector(".buy__steps").scrollHeight;
  document.querySelector(".buy__iframe").height = height;
}

window.onload = () => {
  setIframeHeight();
};
window.onresize = () => {
  setIframeHeight();
};
