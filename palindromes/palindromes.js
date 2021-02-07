const palindromes = function(word) {
    let newWord = word.toLowerCase().replace(/[\s,\.;:'"!?]/g , "");
    
    const wordSplitted = newWord.split('');
    console.log(newWord);
    
    const inversedArr = [];
    for(let i = wordSplitted.length - 1; i >= 0; i--) {
        inversedArr.push(wordSplitted[i]);
    }
    let inversedWord = "";
    inversedArr.forEach(char => {
        inversedWord += char;
    });
    console.log(inversedWord);
    return (inversedWord === newWord);
}

module.exports = palindromes
