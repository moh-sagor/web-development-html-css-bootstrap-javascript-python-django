
def function_area(n):
    if n == 'circle':
        pi = 3.14156
        r = int(input("Enter radius : "))
        area =pi*r*r
        print("Area of circle is :"+str(area))
    elif n == 'triangle':
        a,b,c = list(map(int,input("Enter value of A,B,C").split()))
        s = (a + b + c) / 2
        area = (s*(s-a)*(s-b)*(s-c)) ** 0.5
        print("Area is triangle :"+str(area))
    else:
        print("Wrong input ")

print("Enter 'circle' or 'triangle' to find the area : ")
n = input()
function_area(n)
