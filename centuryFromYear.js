function century(year) {
    // let arr = [];
    // arr.push(year + 99)
    // let result = []
    // for(let i = 0 ; i <= 1 ; i++) {
    //     result.push(arr[0].toString().split('')[i])
    // }
    // console.log(result)
    // return arr;
    let century = Math.ceil(year / 100);
    return century + ', '+ `'Testing for year ${year}'`;
}
console.log(century(1705))