def binary_search(some_list,value):
    if value > some_list[-1]:
        return "Not Found"

    first = 0
    last = len(some_list)-1

    while first <= last:
        mid = (first+last)//2

        if some_list[mid] == value:
            return 'Found'
        elif some_list[mid] > value:
            first = mid+1
        elif some_list[mid] < value:
            last = mid-1

    if first > last:
        return "Not Found"

some_list  = [1,2,3,4,5,6,7]
print(binary_search(some_list,3))
