const reverseSeq = n => {
    let r = []
    for (let i = n; i >= 1; i--) {
        r.push(i)
    }
    return r
};
console.log(reverseSeq(5))