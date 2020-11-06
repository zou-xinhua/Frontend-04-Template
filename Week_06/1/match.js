function match(str) {
    for(let a of str) {
        if (a === 'a')
            return true
    }
    return false;
}

console.log(match('i am groot'))
