'''
    PART 1
'''
# Simple function to check if all characters are unqiue
def check(str: str) -> bool:
    return len(set(list(str))) == len(str)

def __main__():

    part2 = True

    # read in data from input file
    data = ''
    with open('./day6.in', 'r') as file:
        data = file.readlines()[0]

    # iterate through characters in data stream
    i = 0
    for _ in data:
        # get next four characters
        read_data = data[i:4+i if not part2 else 14+i]

        i+=1
        # check if all are unique
        if check(read_data):
            # if so, print the value for the 
            # end of the flag and return
            print(i+3 if not part2 else 13+i)
            return

if __name__ == "__main__": __main__()
