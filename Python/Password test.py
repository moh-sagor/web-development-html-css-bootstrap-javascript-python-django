password_bank = {'sagor':1234, 'shohag':5678, 'mohuya': 12345}
matched = False
x = 0
print('Enter your name : ')

while x<5:
    name = input()
    if name in password_bank:
        for i in range(0,3):
            print("Enter your password: ")
            password = input()

            if int(password) in password_bank.values():
                matched = True
                print('Access Granted.')
                break

            else:
                print('Wrong password. Enter again '+'you have '+str(2-i)+'tries left')
    else:
        print("There has no mathced name that you entered ")

    x = x+1

    if matched:
        break


