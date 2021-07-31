def linear_search(some_list,value):

    for i in range(len(some_list)):
        if some_list[i] == value:
            return 'Found'  #return i >>>>> for index number

    if i == len(some_list)-1:
        return "Not Found"  #return i
some_list = [1,2,3,4,5,6,7]
value = 7
print(str(linear_search(some_list,value)))
# print("element found at index "+str(linear_search(some_list,value)))