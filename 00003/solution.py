import math

def find_biggest_prime_factor(n: int) -> int:
    if n<= 1:
        return None
    
    big_prime = -1

    while n % 2 == 0:
        big_prime = 2
        n = n //  2
    
    p = 3
    while p * p <= n:
        while n % p == 0:
            big_prime = p
            n = n // p
        p += 2
    
    if n > 1:
        big_prime = n

    return big_prime

print(find_biggest_prime_factor(600851475143))