import fs from "fs";

function predictBigBang(integerList: number[]): (number | string)[] {
  return integerList.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "BIGBANG";
    } else if (num % 3 === 0) {
      return "BIG";
    } else if (num % 5 === 0) {
      return "BANG";
    } else {
      return num;
    }
  });
}

function generateIntegerList(): number[] {
  const integerList: number[] = [];
  for (let i = 1; i <= 100; i++) {
    integerList.push(i);
  }
  return integerList;
}

function writeToFile(data: (number | string)[], filename: string): void {
  fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log(`Predicted big bang has been written to ${filename}`);
  });
}

const integerList = generateIntegerList();
// console.log(integerList);
const predictedBigBang = predictBigBang(integerList);
// console.log(predictedBigBang);
writeToFile(predictedBigBang, "output.json");