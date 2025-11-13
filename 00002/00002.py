def sum_even_fibonacci(limit):
    a,b=0,1
    total = 0
    while a <= limit:
        if a % 2 == 0:
            total += a
        a,b = b, a + b
    return total

print(sum_even_fibonacci(4_000_000))