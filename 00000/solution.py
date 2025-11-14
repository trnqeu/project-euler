import math

def count_odd_squares(limit: int = 642000):
    total_sum = 0
    for i in range(1, limit + 1, 2):
        total_sum += i * i
    return total_sum


print(count_odd_squares())