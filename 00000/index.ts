function sumOfOddSquares(limit: number = 642000): bigint {
    const n = Math.floor((limit + 1) / 2);
    const bn = BigInt(n)
    const result = bn * (2n * bn +1n) * (2n * bn - 1n) / 3n;

    return result
}

console.log(sumOfOddSquares())