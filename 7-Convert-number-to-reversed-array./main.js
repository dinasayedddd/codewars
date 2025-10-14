//7.  Convert-number-to-reversed-array of-digits






function digitize(n){
    return n.toString().split("").map((m) => Number(m)).reverse();
}
console.log(digitize(1234567));

















