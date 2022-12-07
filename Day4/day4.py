
# Part 1
count = 0
with open('./day4.in', 'r') as file:
    for line in file:
        if set([i for i in range(int(line.split(',')[0].split('-')[0]), int(line.split(',')[0].split('-')[1]) + 1)]) <= set([i for i in range(int(line.split(',')[1].split('-')[0]), int(line.split(',')[1].split('-')[1]) + 1)]) or set([i for i in range(int(line.split(',')[1].split('-')[0]), int(line.split(',')[1].split('-')[1]) + 1)]) <= set([i for i in range(int(line.split(',')[0].split('-')[0]), int(line.split(',')[0].split('-')[1]) + 1)]):
            count += 1
        # l, r = line.split(',')
        # l, r = [i for i in range(int(l.split('-')[0]), int(l.split('-')[1]) + 1)], [i for i in range(int(r.split('-')[0]), int(r.split('-')[1]) + 1)]
        # if set(l) <= set(r) or set(r) <= set(l):
        #     count += 1

print(count)

# Part 2
count = 0
with open('./day4.in', 'r') as file:
    for line in file:
        l, r = line.split(',')
        l, r = [i for i in range(int(l.split('-')[0]), int(l.split('-')[1]) + 1)], [i for i in range(int(r.split('-')[0]), int(r.split('-')[1]) + 1)]
        if l[0] in r or l[-1] in r or r[0] in l or r[-1] in l:
            count += 1

print(count)