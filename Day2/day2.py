# PART 1
ROUND_RESULT = {
    'A,X': 4,
    'B,X': 1,
    'C,X': 7,
    'A,Y': 8,
    'B,Y': 5,
    'C,Y': 2,
    'A,Z': 3,
    'B,Z': 9,
    'C,Z': 6
}

score = 0
with open('day2.in', 'r') as file:
    for line in file:
        score += ROUND_RESULT[','.join(line.rstrip().split(' '))]

print(score)

# PART 2

# LOGIC
LOSE = { 'A': 'SCISSORS', 'B': 'ROCK', 'C': 'PAPER' }
TIE = { 'A': 'ROCK', 'B': 'PAPER', 'C': 'SCISSORS'}
WIN = { 'A': 'PAPER', 'B': 'SCISSORS', 'C': 'ROCK' }

HAND_VALUE = { 'ROCK': 1, 'PAPER': 2, 'SCISSORS': 3 }
RESULT_VALUE = { 'X': 0, 'Y': 3, 'Z': 6 }

score = 0
with open('day2.in', 'r') as file:
    for line in file:
        P1, P2 = line.rstrip().split(' ')
        score += HAND_VALUE[LOSE[P1] if P2 == 'X' else TIE[P1] if P2 == 'Y' else WIN[P1]] + RESULT_VALUE[P2]

print(score)
