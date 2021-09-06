class Dancer:
    def __init__(self,style):
        self.style = style

    def dance(self):
        print(f'Dancing in {self.style}')

class Singer:
    def __init__(self,genre):
        self.genre = genre

    def sing(self):
        print(f'Singing {self.genre} music')

class Artist:
    def __init__(self,painting):
        self.painting = painting

    def paint(self):
        print(f'Painting with {self.painting}')

class SuperHuman(Dancer,Singer,Artist):
    def __init__(self,style,genre,painting,sport):
        self.sport = sport
        Dancer.__init__(self,style)
        Singer.__init__(self,genre)
        Artist.__init__(self,painting)


    def play_sport(self):
        print(f'Playing {self.sport}')


# Overriding the dance method of dancer class

    def dance(self, competition = 'ganer mela'):
        print(f'Dancing with my own {self.style} in the competetion {competition}')



s = SuperHuman('Hip Hop','Jazz','Acrylic','Football')
print(s.style)
print(s.genre)
print(s.painting)
print(s.sport)

s.dance()
s.sing()
s.paint()
s.play_sport()

# print(help(SuperHuman))