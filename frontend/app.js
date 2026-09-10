/* Lab 1 */

const predictSamples = [
    {id: 1, name: "Nguyen Thuy Quynh", score: 85},
    {id: 2, name: "Nguyen Ngan An", score: 95},
    {id: 3, name: "Nguyen Thi Nhien", score: 90},
    {id: 4, name: "Tran Khai Van", score: 80},
]

const filteredSamples = [];
for (let i = 0; i < predictSamples.length; i++) {
  if (predictSamples[i].score >= 90) {
    filteredSamples.push(predictSamples[i]);
  }
}
console.log("Filtered samples (score >= 90):", filteredSamples);

function sumField(array, fieldName) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i][fieldName] === "number") {
      total += array[i][fieldName];
    }
  }
  return total;
}
console.log("Total score sum:", sumField(predictSamples, "score"));

function findMaxObject(array, fieldName) {
  if (array.length === 0) return null;
  
  let maxObj = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i][fieldName] > maxObj[fieldName]) {
      maxObj = array[i];
    }
  }
  return maxObj;
}
console.log("Sample with max score:", findMaxObject(predictSamples, "score"));

const sumFieldArrow = (array, fieldName) => 
  array.reduce((total, item) => 
    typeof item[fieldName] === "number" ? total + item[fieldName] : total, 0
  );

console.log("Total score sum (Arrow Function):", sumFieldArrow(predictSamples, "score"));

// Lab 2: Week 4

let form = document.querySelector("#score-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // mon1
  let mon1 = document.querySelector("#mon1").value;
  let mon2 = document.querySelector("#mon2").value;
  let mon3 = document.querySelector("#mon3").value;

  console.log("mon1:", mon1);
  console.log("mon2:", mon2);
  console.log("mon3:", mon3);

  //   Calculate the totel score
  let totalScore = Number(mon1) + Number(mon2) + Number(mon3);
  console.log("Total Score:", totalScore);

  let totalElement = document.querySelector("#total");
  totalElement.textContent = "Total Score: " + totalScore;
});
