def expo(a,b):
    if b ==0:
        return 1
    else:
        return a*expo(a,b-1)
a,b = list(map(int,input("Enter a and b :").split()))

print('exponential is :', expo(a,b))
