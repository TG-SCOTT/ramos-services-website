let currentIndex = 0;

function slide(direction) {
  const track = document.getElementById('slider-track');
  const cardsCount = track.children.length;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= cardsCount - 1) currentIndex = cardsCount - 1;

  const slideAmount = currentIndex * 620;
  track.style.transform = `translateX(-${slideAmount}px)`;
}
