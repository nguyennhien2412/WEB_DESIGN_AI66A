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