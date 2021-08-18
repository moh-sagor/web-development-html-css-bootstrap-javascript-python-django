def digit_counter(n):
    if n==0:
        return 0
    return 1+digit_counter(n//10)
number = int(input("Enter digit for count : "))
print(digit_counter(number))