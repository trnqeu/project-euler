function biggestPrime(n: number):number | null {
    let largest:number = -1;
    if (n <= 1) {
        return null;
    }

    while (n%2 === 0) {
        largest = 2;
        n = Math.floor(n / 2);
    } 

    for (let p = 3; p * p <= n; p+= 2) {
        while (n % p === 0) {
            largest = p;
            n = Math.floor(n / p);
        }
    }

    if (n > 1) largest = n;

    return largest
}

console.log(biggestPrime(600851475143))