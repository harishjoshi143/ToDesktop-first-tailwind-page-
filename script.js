const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupintersectionobserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;

    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

setupintersectionobserver(line1, true, 0.15);
setupintersectionobserver(line2, false, 0.15);
setupintersectionobserver(line3, true, 0.15);
setupintersectionobserver(line4, true, 0.8);

const dtelements = document.querySelectorAll("dt");

dtelements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddid = element.getAttribute("aria-controls");
    const ddelements = document.getElementById(ddid);
    const ddarowicon = element.querySelectorAll("i")[0];

    ddelements.classList.toggle("hidden");
    ddarowicon.classList.toggle('-rotate-180')
  });
});
