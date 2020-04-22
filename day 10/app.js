let button = document.querySelector("button");
let part2 = document.querySelector(".part2");
let back = document.querySelector(".back");
let add = document.querySelector("label");
let inputValue = document.querySelector("input");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let p = document.querySelector("li p");

let = button.addEventListener("click", (e) => {
  part2.style.transform = "scale(0)";
});

back.addEventListener("click", (e) => {
  part2.style.transform = "none";
});
add.addEventListener("click", (e) => {
  let value = "hello";
  let eg = li.innerHTML;

  ul.insertBefore(eg);
});
