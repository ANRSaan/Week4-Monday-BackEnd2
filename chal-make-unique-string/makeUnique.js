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

// For a faster way, make 2 dictionaries: letter to number and numer to letter, and compare against those.

// For a frickin' cool way, do it with code points with only math.