bank_users = {'sagor': 1500, 'mohuya': 2000, 'shohag': 2500}
print("************ Welcome to Sagor's Bank ************")
while True:
    print('What do you like to do ? ')
    print('  '+'1.View Balance')
    print('  ' + '2.View All Info')
    print('  ' + '3.Upate Balance')
    print('  ' + '4.Exit')

    desc = input("Enter your choice : ")
    if desc == '1':
        print("Enter your name, Please : ")
        k = input()
        if k in bank_users.keys():
            print(k+' Your Bank balance is '+str(bank_users[k]))
        else:
            print('The User can not be found. Would you like to add the user to bank ? ')
            desc = input()
            if desc == 'yes':
                k = input('Enter Your Name : ')
                v = input('Enter Your Deposite Balance : ')
                bank_users.update({k:v})
            else:
                print('Would you like to EXIT ? ')
                desc = input()
                if desc == 'yes':
                    break
    elif desc =='2':
        for k,v in bank_users.items():
            print("UserName : "+str(k)+"   Bank Balance : "+str(v))
    elif desc =='3':
        print('Enter your name Please : ')
        k = input()
        if k in bank_users.keys():
            print('What you want to do ? deposite or withdrow ? ')
            desc=input()
            if desc == 'deposite':
                temp_balance = bank_users[k]
                extra = input('Enter Your Amount to Deposite : ')
                bank_users[k] = temp_balance + int(extra)
                print('Your Balance is Updated. Now your Balance is : '+str(bank_users[k]))
            elif desc == 'withdrow':
                temp_balance = bank_users[k]
                extra = input('Enter Your Amount to Deposite : ')
                bank_users[k] = temp_balance - int(extra)
                print('Your Balance is Updated. Now your Balance is : ' + str(bank_users[k]))
        else:
            print('There is no such account in the Database.')
    elif desc == '4':
        print("\nThanks")
        break






