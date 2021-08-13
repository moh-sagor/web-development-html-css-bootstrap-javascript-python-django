# open a file
# f = open("Test_file.txt","w")

# getting some info from file
# print('name = ',f.name)
# print('name = ',f.mode)
# f.write("My name is Sagor.")
# f.close()

# f = open("Test_file.txt","a")
# f.write(" My age is 22.")

# f = open("Test_file.txt","r+")
# info = f.read()
# print(info)
# # f.write(" My age is 22.")
# f.close()

f = open("Test_file.txt","w+")
f.write(" My age is 22.")