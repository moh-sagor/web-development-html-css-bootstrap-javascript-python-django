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


class Library:
    def __init__(self,book_list = None ):
        if book_list is None :
            self.book_list = []
        else:
            self.book_list = book_list

    def get_all_books(self):
        for book in self.book_list:
            print(f'Title {book.name}, Author : {book.author}, Price : {book.price}')

    def add_book(self,book):
        self.book_list.append(book)

    def remove_book(self, book):
        self.book_list.remove(book)



book_1 = StoryBook("Power",320,'sagor',1998,25)
book_2 = StoryBook('Love',244,'Moh',1998,45)

public_library = Library()

public_library.add_book(book_1)
public_library.add_book(book_2)

public_library.get_all_books()

public_library.remove_book(book_2)

public_library.get_all_books()



