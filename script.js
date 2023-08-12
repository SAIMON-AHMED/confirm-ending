function confirmEnding(str, target) {
    return (str.substring(str.length - target.length) === target);  // checking condition & returning result
}

console.log(confirmEnding("Bastian", "n"));   //return true
