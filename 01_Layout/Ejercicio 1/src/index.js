function subsets(word) {
    wordArr = []
    while (word.length > 0) {
        word = word.substring(1);
        wordArr.push(word);
    }
    return wordArr;
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]