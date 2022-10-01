let string = "";
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
    if (e.target.innerHTML == "C" || e.target.innerHTML == "CE") {
      document.querySelector("input").value = "";
      string = "";
    }
  });
});
