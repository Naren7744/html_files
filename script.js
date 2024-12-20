document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".letter");

  function getRandomNeonColor() {
    const randomChannel = () => Math.floor(Math.random() * 155 + 100);
    const randomRed = randomChannel();
    const randomGreen = randomChannel();
    const randomBlue = randomChannel();
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
  }

  function applyRandomProperties(letter) {
    const randomDelay = Math.random() * 0.6;
    const randomColor = getRandomNeonColor();

    letter.style.animation = `randomMove 0.5s infinite alternate ${randomDelay}s`;
    letter.style.color = randomColor;

    setInterval(function () {
      letter.style.color = getRandomNeonColor();
    }, 1000); // Update color every 1000 milliseconds (1 second)
  }

  letters.forEach(applyRandomProperties);
});

document.addEventListener("DOMContentLoaded", function () {
  const balloons = document.querySelectorAll(".balloon");

  function getRandomColor() {
    const randomRed = Math.floor(Math.random() * 80 + 20);
    const randomGreen = Math.floor(Math.random() * 50 + 20);
    const randomBlue = Math.floor(Math.random() * 80 + 20);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
  }

  function applyRandomColor(balloon) {
    const randomColor = getRandomColor();
    balloon.querySelector("svg").style.fill = randomColor;
  }

  function onAnimationIteration(event) {
    const balloon = event.target;
    applyRandomColor(balloon);
  }

  balloons.forEach((balloon) => {
    balloon.addEventListener("animationiteration", onAnimationIteration);
    applyRandomColor(balloon);
  });
});