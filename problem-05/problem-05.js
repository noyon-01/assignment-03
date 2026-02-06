function analyzeText(str) {
    const strObj = { "longwords": "", "token": 0 };

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
const result = analyzeText("Programming is fun");
console.log(result);
