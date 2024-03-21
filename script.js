const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");



const getResult = function () {
  const inputTextReverse = inputText.value
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  const inputTextRegEx = inputTextReverse.split(/[^A-Za-z0-9]/).join("");

  if (inputText.value === "") {
    alert("Please input a value");
  } else if (
    inputText.value
      .split(/[^A-Za-z0-9]/)
      .join("")
      .toLowerCase() === inputTextRegEx
  ) {
    resultText.innerHTML = `
    <p class="text-result"><span class="input-text-result">${inputText.value} </span> is a palindrome</p>`;
  } else {
    resultText.innerHTML = `
    <p class="text-result"><span class="input-text-result">${inputText.value}</span> is not a palindrome</p>`;
  }
};

checkButton.addEventListener("click", getResult);

