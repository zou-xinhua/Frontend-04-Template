function match(str) {
    let aExistFlag = false;
    for(let c of str) {
        if (c === 'a')
            aExistFlag = true;
        else if (aExistFlag && c === 'b')
            return true
        else
            aExistFlag = false;
    }
    return false;
}


console.log(match('I ab groot'))
