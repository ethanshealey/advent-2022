
with open('day1.in', 'r') as file:
    calories = [0]
    i = 0
    for line in file:
        if(line == '\n'):
            i += 1
            calories.append(0)
        else:
            calories[i] += int(line)

    calories.sort(reverse=True)
    print(sum([int(x) for x in calories[0:3]]))
    