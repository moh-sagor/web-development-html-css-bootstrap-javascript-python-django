import random as r
age = (r.randint(1,10))
flag = False

def game_func(gessed_age,secret):
    if gessed_age < secret:
        return 'Too Low'
    elif gessed_age > secret:
        return 'Too High'
    else:
        return 'CORRECT GUESS'

for i in range(1,6):
    print('You have '+str(6-i)+' guesses left.')
    guess = input("Enter a age to guess : ")
    if game_func(int(guess),age)=='CORRECT GUESS':
        print('You won the game!')
        flag = True
        break
if not flag:
    print('You loss the game!')