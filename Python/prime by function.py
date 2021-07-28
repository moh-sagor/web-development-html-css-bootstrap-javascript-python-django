def prime(n):
    if n>1:
        for i in range (2,n):
            if (n%i==0):
                print("Not Prime Number")
                break
            else:
                print("Prime number")
                break
    else:
        print('Not a prime number')

n = int(input('Enter a integer number : '))
prime(n)