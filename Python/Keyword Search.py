def phone():
    phn_name = ['apple','android','java','symbian','blackbery']
    print("Enter a phone operating system name : \n")
    name = input()
    if name not in phn_name:
        print("Oops !!! Not found.")
    else:
        print(name+" found in list")
phone()
