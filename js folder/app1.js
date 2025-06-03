
const video = document.getElementById("stepVideo");
  const source = video.querySelector("source");
  const steps = document.querySelectorAll(".right-column .step");

  let currentStep = 0;

  function highlightStep(index) {
    steps.forEach(s => s.classList.remove("active"));
    const step = steps[index];
    step.classList.add("active");

    const src = step.getAttribute("data-src");
    if (src) {
      source.src = src;
      video.load();
      video.play();
    }
  }
  highlightStep(currentStep);
  setInterval(() => {
    currentStep = (currentStep + 1) % steps.length;
    highlightStep(currentStep);
  }, 8000);