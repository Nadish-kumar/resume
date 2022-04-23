// section reveal
const allSection = document.querySelectorAll(".section-R");

const secObsFn = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
};
const secObs = new IntersectionObserver(secObsFn, {
  root: null,
  threshold: 0.05,
});

allSection.forEach((sec) => secObs.observe(sec));
