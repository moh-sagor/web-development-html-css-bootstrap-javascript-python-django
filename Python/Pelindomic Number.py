def pelindomic():
    f = open('Numbers','w+')
    x = input("Enter Numbers : ")
    f.write(x)
    f.close()

    f = open('Numbers','r+')
    some_list = list(f.read())
    f.close()

    is_palindromic = True

    for i in range(int(len(some_list)/2)):
        if some_list[i] != some_list[len(some_list)-i-1]:
            is_palindromic = False

    if is_palindromic:
        f = open('Numbers','a')
        f.write(' YES')
        print("Operation Done")
        f.close()
    else:
        f = open('Numbers','w')
        for i in range(len(some_list)):
            f.write('0')
        print("Operation Done")

pelindomic()
