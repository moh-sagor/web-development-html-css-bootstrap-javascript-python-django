# csv means comma separated value
import csv
# file = open('example.csv')
#
# file_reader = csv.reader(file)
# print(file_reader)
# data = list(file_reader)
# print(data)
# print(data[0][1])
#
# for row in file_reader:
#     print("row no = "+str(file_reader.line_num)+' is => '+str(row))

# output_file = open('out.csv','w',newline='')
output_file = open('out.csv','a',newline='')
output_writer= csv.writer(output_file,delimiter='*')

output_writer.writerow(['12','23','34'])
output_writer.writerow(['112','224','335'])
output_file.close()