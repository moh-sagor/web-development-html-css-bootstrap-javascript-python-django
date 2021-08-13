contact_bank = {'sagor':1234, 'shohag':5678, 'mohuya': 12345}
x = 0

while x<5:
    print('Enter your name (Press ENTER to exits): ')
    name = input()

    if name == '':
        break

    if name in contact_bank:
        print('The contact number of '+name+' is - ' +str(contact_bank[name]))
    else:
        print("There is no name that you entered . Do you want to add ??")
        desc = input()

        if desc == "yes":
            print("Enter the number : ")
            num = input()
            contact_bank[name] = num
            print("Added Successfully ")
        elif desc == 'no':
            print("Do you want to quit ? ")
            desc = input()
            if desc == 'yes':
                print("Thanks for using the System")
                break
            else:
                print("Keep searching")
    x = x+1

