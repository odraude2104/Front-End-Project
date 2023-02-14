
  function calculate(expression) {
    try {
      return eval(expression).toString();
    } catch (error) {
      return "Error";
    }
  }

  const keys = document.querySelectorAll(".key");
  const display = document.querySelector(".display");
  let expression = "";

  keys.forEach(key => {
    key.addEventListener("click", () => {
      if (key.classList.contains("operator")) {
        expression += key.textContent;
      } else if (key.textContent === "C") {
        expression = "";
      } else if (key.textContent === "=") {
        expression = calculate(expression);
      } else {
        expression += key.textContent;
      }

      display.textContent = expression;
    });
  });
