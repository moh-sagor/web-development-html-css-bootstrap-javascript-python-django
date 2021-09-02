def outer(message):
    print('In the outer function')
    def inner():
        print('calling the inner function')
        print(message)
    return inner
# f = outer('Hello World')
# f()

def decorator(original_func):
    print('In the decorator Function\n')

    def wrapper():
        print(f'wrapper executed before {original_func.__name__}() function')

        if 10 > 5 :
            print("Ten is heigher")
        return original_func()

    return wrapper

# non keyword arguments => f(1,2,3)
# keyword arguments => f(a= 2 , b= 1, x = 4)

def decorator_2(original_func):
    print('In the decorator 2  Function\n')

    def wrapper(*args, **kwargs):
        print(f'wrapper executed before {original_func.__name__}() function')

        if 10 > 5 :
            print("Ten is heigher")
        return original_func(*args, **kwargs)

    return wrapper


@decorator
def print_something():
    print('Print')

@decorator_2
def print_something_more(arg1,arg2):
    print(f'argument 1 = {arg1} and argument 2 = {arg2}')

# best way
# print_something()

print_something_more(1,2)

# another way
# dec = decorator(print_something)
# dec()

