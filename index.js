const inputField = document.getElementById('userInput');
const bottomDiv = document.getElementById('bottom');
const saveButton = document.getElementById('saveButton');
const savedTextsDiv = document.getElementById('savedTexts');

inputField.addEventListener('focus', () => {
  inputField.style.borderColor = '#blue';
});

inputField.addEventListener('blur', () => {
  inputField.style.borderColor = '#white';
});

saveButton.addEventListener('click', () => {
  const text = inputField.value.trim();
  if (text) {
    const newTextDiv = document.createElement('div');
    newTextDiv.textContent = text;
    savedTextsDiv.appendChild(newTextDiv);
  }
});