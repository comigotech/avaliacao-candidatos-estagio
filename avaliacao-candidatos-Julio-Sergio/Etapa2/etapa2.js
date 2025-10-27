function FilterNumbers(array) {
  return array.filter(num => num % 2 === 0);
}


function ShowNumbers(inputId, resultID) {
  const Entrace = document.getElementById(inputId).value;

  const numbers = Entrace.split(",").map(Number);

  const Filter = FilterNumbers(numbers);

  document.getElementById(resultID).value = Filter.join(", ");
}

function CountFrequency() {
  const text = document.getElementById("Phrase").value

  const words = text.toLowerCase().replace(/[.,;:()]/g, "").split(/\s+/);
  
  const frequency = {};

  for (const word of words) {
    if (word) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  }

  let restultHTML = "<ul>";
  for (const [word, qtd] of Object.entries(frequency)){
    restultHTML += `<li><strong>${word}</strong>: ${qtd}</li>`;
  }
  restultHTML += "</ul>"

  document.getElementById("ResultText").innerHTML = restultHTML;
}