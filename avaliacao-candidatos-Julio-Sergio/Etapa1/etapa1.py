import time

def separation():
    return print("-" * 50)


def soma(num):
    return sum(num)

def invert(num):
    return num[::-1]

def concatenation(arr, quant):
    if not arr:
        return []
    lengh = len(arr)
    quant = quant % lengh
    first = arr[:quant]
    conc = arr[quant:] + first
    return conc

separation()

numbers = input("Enter a list of integers separated by spaces for the custom array: ")

separation()

List = [int(x) for x in numbers.split()]

print(f"the sum of the numbers in the custom array is equal to \033[32m{soma(List)}\033[0m")
print(f"The sum of the default array \033[36m[2, 34, 6, 12, 64, 444]\033[0m is equal to: \033[32m{soma([2, 34, 6, 12, 64, 444])}\033[0m")
print(f"The sum of the default array \033[36m[1, 2, 3, 4, 5]\033[0m is equal to: \033[32m{soma([1, 2, 3, 4, 5])}\033[0m")
separation()
time.sleep(1)

print(f"the array with the inverted values: \033[32m{invert(List)}\033[0m")
print(f"The inversion of the values in the default array \033[36m[2, 34, 6, 12, 64, 444]\033[0m is: \033[32m{invert([2, 34, 6, 12, 64, 444])}\033[0m")
print(f"The inversion of the values in the default array \033[36m[1, 2, 3, 4, 5]\033[0m  is: \033[32m{invert([1, 2, 3, 4, 5])}\033[0m")
separation()

time.sleep(1)
while True:
    try:
        n = int(input("Enter an integer for custom concatenation.: "))
        break
    except ValueError:
        print("\033[36mPlease insert a valid integer!\033[0m")

print(f"The concatenation of \033[36m{n}\033[0m values of the custom Array is: \033[36m{concatenation(List, n)}\033[0m")
print(f"The concatenation of \033[36m2\033[0m values of the default Array \033[36m[2, 34, 6, 12, 64, 444]\033[0m is: \033[32m{concatenation([2, 34, 6, 12, 64, 444], 2)}\033[0m")
print(f"The concatenation of \033[36m4\033[0m values of the default Array \033[36m[1, 2, 3, 4, 5]\033[0m is: \033[32m{concatenation([1, 2, 3, 4, 5], 3)}\033[0m")

separation()