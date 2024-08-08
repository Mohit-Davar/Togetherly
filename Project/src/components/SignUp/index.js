
function divide(n, testCase) {
    if (testCase > Math.floor(Math.sqrt(n))) return true
    if (n % testCase == 0) return false
    else return divide(n, testCase + 1)
}
function isPrime(n) {
    return divide(n, 2)
}
var countPrimes = function (n) {
    let count=0;
    if (n == 1) return 0
    for (let i = 2; i <= n; i++) {
        if(isPrime(i)) count++
    }
    console.log(count)
};
countPrimes(33)