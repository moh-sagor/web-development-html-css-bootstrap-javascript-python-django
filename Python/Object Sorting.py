class Toy:
    def __init__(self,name,price):
        self.name = name
        self.price = price

    def sort_priority(self):
        return self.price

def print_toy_object(toy_list):
    for obj in toy_list:
        print(f'Toy : {obj.name} , Price : {obj.price}')


toy_1 = Toy('Car', 1500)
toy_2 = Toy('Putul', 2000)
toy_3 = Toy('Mobile', 450)
toy_4 = Toy('Lap', 458)

toys = [toy_1,toy_2,toy_3,toy_4]

toys.sort(key= Toy.sort_priority) # (reverse = True)  for decending orders

# print_toy_object(toys)


# result = lambda x,y,z : x*y+z
# print(result(1,2.3,12))

toys_again = [toy_1,toy_2,toy_3,toy_4]
# toys_again.sort(key = lambda x : x.price, reverse = True
toys_again = sorted(toys, key=lambda x:x.price)
print_toy_object(toys_again)

