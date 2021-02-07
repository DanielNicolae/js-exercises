const caesar = function(word, key) {
    if (word === "") {
        return "";
    }
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    let codeLowerCase = "";
    let codeUpperCase = "";
    if (key < 26 && key > -26) {
        codeLowerCase = lowerCase.slice(key) + lowerCase.slice(0, key);
        codeUpperCase = upperCase.slice(key) + upperCase.slice(0, key);
    }
    else {
        codeLowerCase = lowerCase.slice(key % 26) + lowerCase.slice(0, key % 26);
        codeUpperCase = upperCase.slice(key % 26) + upperCase.slice(0, key % 26);
    }

    let coddedWord = "";
    for(let i = 0; i < word.length; i++) {
        let char = word[i];
        let  charIndex = 0;
        if(lowerCase.includes(char)){
            charIndex = lowerCase.indexOf(char);
            char = codeLowerCase[charIndex];
            coddedWord += char;
        }
        else if(upperCase.includes(char)) {
            charIndex = upperCase.indexOf(char);
            char = codeUpperCase[charIndex];
            coddedWord += char;
        }
        else {
            coddedWord += char;
        }
    }
    console.log(coddedWord);
    return coddedWord;
};

module.exports = caesar
