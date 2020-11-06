let COUNT = 3;
function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === 'a') {
        COUNT--;
        return foundA;
    } else {
        COUNT = 3
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if (c === 'b')
        if (!!COUNT)
            return start;
        else
            return foundX;
    else
        return start(c);
}

function foundX(c) {
    if (c === 'x')
        return end;
    else
        return start(c)
}

console.log(match('aba1babx'))
// abababx
