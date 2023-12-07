var toggle_btn = document.querySelector(".toggle-btn");
var big_wrapper = document.querySelector(".big-wrapper");
const main = document.querySelector("main");

let dark = false;

function toggleAnimation() {
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);

  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add('copy');
  main.appendChild(clone);
}
toggle_btn.addEventListener("click", toggleAnimation);
