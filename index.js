/* task1 */
// const nightModeBtn = document.querySelector(".nightMode");

// function toggleDarkMode() {
//   const body = document.body;
//   body.classList.toggle("darkMode");
//   const isDarkMode = body.classList.contains("darkMode");
//   localStorage.setItem("darkmode", isDarkMode);
// }
// nightModeBtn.addEventListener("click", toggleDarkMode);
// const savedDarkMode = localStorage.getItem("darkmode");
// if (savedDarkMode === "true") {
//   document.body.classList.add("darkMode");
// }

/* task2 */
const regForm = document.forms.regForm;
let formElements = regForm.elements;
console.log(formElements);
regForm.onsubmit = (e) => {
  e.preventDefault();
  let fr = new FormData(regForm);
  const obj = {};
  fr.forEach((value, key) => {
    obj[key] = value;
  });
  console.log(obj);
  localStorage.setItem("data", JSON.stringify(obj));
};
if (localStorage.getItem("data") !== null) {
  let parsedData = JSON.parse(localStorage.getItem("data"));
  console.log(parsedData);
  for (let i of formElements) {
    if (i.type != "submit") {
      for (let j in parsedData) {
        if (i.name == j) {
          i.value = parsedData[j];
        }
      }
    }
  }
}
