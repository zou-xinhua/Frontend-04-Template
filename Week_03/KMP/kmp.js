function kmp (source, pattern) {
    //计算跳转table
    let table = new Array(pattern.length).fill(0);
    {
        let i = 1,// 自重复串开始的位置
            j = 0; // 已重复的位置

        while (i < pattern.length) {
            if (pattern[i] === pattern[j]) {
                ++j, ++i;
                table[i] = j;
            } else {
                if (j > 0)
                    j = table[j];
                else
                    ++i;
            }
        }
    }
    {
        let i = 0, //source串的位置
        j = 0; //pattern串的位置
        while(i < source.length){
            if(source[i] === pattern[j]) {
                ++i, ++j;
            } else {
                if (j > 0)
                    j = table[j];
                else
                    ++i;
            }
            if (j === pattern.length)
                return true
        }
        return false
    }

    console.log(table)

    //匹配
}

console.log(kmp('abc', 'abc'))
