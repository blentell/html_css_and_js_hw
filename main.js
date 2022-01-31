const remove = document.querySelector(".remove");
const add = document.querySelector(".add");
const counterNumber = document.querySelector(".number");
const stars = document.querySelector("#stars");
// Counter
let counter = 0;

const updateCounter = (input) => {
	counter = input;
	counterNumber.innerText = counter;
};
remove.addEventListener("click", () => {
	updateCounter(counter - 1);
	if (counter >= 0) {
		stars.removeChild(stars.lastElementChild);
	}
});
add.addEventListener("click", () => {
	updateCounter(counter + 1);
	if (counter > 0) {
	stars.appendChild(StarComponent());
	}
});

const StarComponent = () => {
	
		const starsImage = document.createElement("div");
		starsImage.innerHTML = `
  <img
  class="starIMG"
  src="https://previews.123rf.com/images/ayzek/ayzek1107/ayzek110700103/9942926-brushed-gold-star-isolated-on-white-.jpg"
  alt=""
  />`;
		return starsImage;
	
};
