function StringToNumber(str) {
    return Number.parseInt(str, 10)
}

function NumberToString(num, radix) {
    if(radix < 2 || radix > 36)
        return '参数不合法'
    return (num).toString(radix)
}
