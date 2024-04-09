function sumMix(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += parseInt(arr[i])
    }
    console.log(result)

}
sumMix([9, 3, '7', '3'])