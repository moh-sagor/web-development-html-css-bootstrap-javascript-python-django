class StoryBook:
    # Class Variable
    no_of_books = 0
    discount = 0.5


#     special method
    def __init__(self,name,price,author,birth,no_of_pages):
        self.name = name
        self.price = price
        self.author = author
        self.birth = birth
        self.publish = 2012
        self.no_of_pages = no_of_pages
        StoryBook.no_of_books += 1


#     regular method 1
    def get_book_info(self):
        print(f'The book name : {self.name},price:{self.price}')
#     regular method 2
    def get_auth_info(self):
        print(f'The author name : {self.author},birth:{self.birth}')

#     Applying discount to an instance
    def apply_discount(self):
        self.price = int(self.price - self.price * StoryBook.discount)

# Method to change price
    def set_price(self,new_price):
        self.price = new_price


    # class method 1
    @classmethod
    def set_discount(cls,new_discount):
        cls.discount = new_discount


    @classmethod
    def construct_from_string(cls,book_str):
        name, price, author, birth, pages = book_str.split(',')

        return cls(name, price, author, birth, pages)


# Static method
    @staticmethod
    def is_new(publishing_year):
        if publishing_year > 2016:
            print("Yes New")
        else:
            print("Not New")





book_1 = StoryBook("Power",320,'sagor',1998,25)
book_2 = StoryBook('Love',244,'Moh',1998,45)



# book_1.name = "Power of Love"
# book_1.writer = "Sagor"
# book_1.price = 350
# book_1.author_birth = 1999
# book_2.name = "Power of Love 2"
# book_2.writer = "Sagor 2 "
# book_2.price = 3500
# book_2.author_birth = 1998
#

# book_1.get_book_info()
# StoryBook.get_auth_info(book_2)


# print(book_1.no_of_books)
# print(book_2.no_of_books)
# print(StoryBook.no_of_books)


# print(book_2.price)
# book_2.discount = 0.7  # for discount account modifying
# book_2.apply_discount()
# print(book_2.price)


# print(book_1.price)
# print(book_1.discount)
# StoryBook.set_discount(0.6)
# book_1.apply_discount()
# print(book_1.price)


# book_1.get_auth_info()


book_str = 'Harry Potter, 200, JK Rowling , 1970 , 400'

harry_potter = StoryBook.construct_from_string(book_str)
# print(harry_potter.author)

StoryBook.is_new(book_1.publish)
