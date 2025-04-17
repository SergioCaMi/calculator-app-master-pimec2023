// Buena suerte!
const buttonsCalc = document.querySelectorAll("button");
const currentDisplay = document.querySelector(".current-operand");
const previousDisplay = document.querySelector(".previous-operand");
let calculateStr = "";
let currentOperator = "";

buttonsCalc.forEach((element) => {
  element.addEventListener("click", (e) => {
    // NUMEROS
    if (e.target.hasAttribute("data-num")) {
      if (
        !(
          e.target.dataset.num === "." &&
          currentDisplay.textContent.includes(".")
        )
      ) {
        calculateStr += e.target.dataset.num;
        console.log(calculateStr);
        currentDisplay.textContent = calculateStr;
      }
    }

    // OPERADORES
    if (e.target.hasAttribute("data-operator")) {
      if (currentOperator&&currentDisplay.textContent.length>0) {
        calculateStr = eval(previousDisplay.textContent + calculateStr) + e.target.dataset.operator;
        previousDisplay.textContent = calculateStr;
        currentDisplay.textContent = "";
        calculateStr = "";
      }
      currentOperator = e.target.dataset.operator;
    }

    // DELETE
    if (e.target.hasAttribute("data-delete")) {
      currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
      calculateStr = currentDisplay.textContent;
    }

    // RESET
    if (e.target.hasAttribute("data-reset")) {
      result = 0;
      calculateStr = "";
      currentDisplay.textContent = '';
      previousDisplay.textContent = '';
    }

    // RESULTADO
    if (e.target.hasAttribute("data-output")) {
        try {
          calculateStr = eval(previousDisplay.textContent + currentDisplay.textContent);
          if (isFinite(calculateStr)) {
            currentDisplay.textContent = calculateStr;
            previousDisplay.textContent = "";
          } else {
            currentDisplay.textContent = "Error";
          }
        } catch (error) {
          currentDisplay.textContent = "Error";
        }
      }
        });
});


const themeRadios = document.querySelectorAll('input[name="theme"]');
const themeLink = document.getElementById("theme-link");

themeRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
      let themePath = "";
      if (e.target.value === "0") {
        themePath = "css/styles.css";
      } else if (e.target.value === "1") {
        themePath = "css/theme1.css";
      } else if (e.target.value === "2") {
        themePath = "css/theme2.css"; 
      }
      themeLink.href = `${themePath}?v=${new Date().getTime()}`;
    });
  });