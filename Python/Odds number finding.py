def odd(some_list):
    new_list = []

    for i in range(len(some_list)):
        if some_list[i] % 2 !=0:      # use >>>some_list[i] % 2 ==0 for even number searching
            new_list.append(some_list[i])

    return new_list

some_list = [1,2,3,4,5,6,7,8,9]
print(odd(some_list))