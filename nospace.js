function noSpace(x) {
    let result = ''
    for (let p in x) {
        if (x[p] != ' ') {
            result += x[p] 
        } 
    }
    console.log(result)
}
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')