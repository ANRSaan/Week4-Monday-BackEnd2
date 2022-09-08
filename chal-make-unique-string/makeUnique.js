// Write your solution below:

const makeUnique = string => {
    let letters = ''
    for (i = 0; i < string.length; i++) {
        if (!letters.includes(string[i])) {
            letters += string[i]
        }
    }
    return letters
}

console.log(makeUnique('helloworld'))