class Robot:
    def __init__(self,name,version):
        self.name = name
        self.version = version

    def move_forword(self):
        print(f'{self.name} is moving forword! ')

    def move_backword(self):
        print(f'{self.name} is moving backword! ')

    def move_right(self):
        print(f'{self.name} is moving right! ')

    def move_left(self):
        print(f'{self.name} is moving left! ')


class HouseBot(Robot):
    def __init__(self,name,version,area_covered):
        # Robot.__init__(self,name, version) # If we use super class name for calling we must need to use (self) as parameter
        super().__init__(name, version) # for using super() dont need to use self as parameter
        self.area_covered = area_covered

    def clean(self):
        if self.area_covered > 0:
            print(f'{self.name} is cleaning the house ')
            self.area_covered -= 50

            if self.area_covered < 0 :
                self.area_covered = 0
        else:
            print('Cannot clean . Reset for cleaning')


    def set_covered_area(self,area):
        if self.area_covered == 0:
            self.area_covered = area
        else:
            print('I can still clean more area')

    @staticmethod
    def hold():
        print('Holding Robot')

# Override a method
    def move_forword(self):
        print("This is in HouseBot class")
        super().move_forword()


alpha = HouseBot('Alpha' , 'v1.1', 70)
beta = Robot('Beta','V_2.0')
# print(alpha.name)
# print(alpha.version)
# alpha.move_forword()
# alpha.move_backword()
# alpha.move_left()
# alpha.move_right()
# alpha.clean()
# alpha.clean()
# alpha.clean()
# print(alpha.area_covered)
# alpha.set_covered_area(50)
# alpha.clean()


# alpha = HouseBot('Alpha' , 'v1.1', 30)
# print(f'name is {alpha.name} and Version is {alpha.version} and ared covered {alpha.area_covered} % ')
# alpha.move_backword()

# print(help(Robot))