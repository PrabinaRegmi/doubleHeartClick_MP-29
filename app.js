const loveMe = document.querySelector(".loveme");
const times = document.querySelector("#times");

let timeClicked = 0;

loveMe.addEventListener("dblclick", (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  // knowing the horizontal and veritcal coordinate within the application's viewport at which dblclick event occured
  const x = e.clientX;
  const y = e.clientY;
  // knowing the number of pixels that the upper left corner of the current element is offset to the left within its parent node
  const left = e.target.offsetLeft;
  // knowing the distance of the outer border of the current element relative to the inner border of the top of the parent node
  const top = e.target.offsetTop;
  // knowing the actual distance of dblclick event relative to the top and left of the target element
  const xInside = x - left;
  const yInside = y - top;

  console.log(xInside, yInside);

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timeClicked;

  setTimeout(() => {
    heart.remove();
  }, 1000);
});
