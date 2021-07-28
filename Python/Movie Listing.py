def movie_list():
    fav_movie = []
    while True:
        print("Movie no " + str(len(fav_movie) + 1) + " or ENTER to Stop Listing : \n")
        movie = input()
        if movie == "":
            break
        fav_movie = fav_movie + [movie]

    if len(fav_movie) != 0:
        print("The list are : ")
        for i in range(len(fav_movie)):
            print(i + 1, "=", fav_movie[i])
movie_list()
