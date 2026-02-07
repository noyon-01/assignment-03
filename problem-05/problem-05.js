// !Problem-05: Text Analyzer for an AI Company! //
function analyzeText(str) {
  const strObj = { longwords: "", token: 0 };

  if (typeof str !== "string" || str === "") {
    return "Invalid";
  } else {
    const sentence = str.split(" ").join("");
    const sentenceLength = sentence.length;
    strObj.token = sentenceLength;

    const text = str.split(" ");
    for (const word of text) {
      if (word.length > strObj.longwords.length) {
        strObj.longwords = word;
      }
    }
  }
  return strObj;
}

const result1 = analyzeText("I am a little honest person");
console.log(result1);

const result2 = analyzeText("Hello world");
console.log(result2);

const result3 = analyzeText("Keep coding keep shining");
console.log(result3);

const result4 = analyzeText(12345);
console.log(result4);

const result5 = analyzeText("Programming is fun");
console.log(result5);

const result6 = analyzeText("A quick brown fox");
console.log(result6);

const result7 = analyzeText("");
console.log(result7);
