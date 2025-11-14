function sumEvenFibonacci(limit: number): number {
    let a = 0;
    let b = 1;
    let total = 0;

    while (a <= limit) {
        if (a % 2 === 0) {
            total += a;
        }
        [a,b] = [b, a + b]
    }
    return total
}

console.log(sumEvenFibonacci(4_000_000))