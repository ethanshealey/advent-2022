const fs = require('fs')

/**
 * PART 1
 */

fs.readFile('./day2.in', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return err
    }
    const ROUND_RESULT = {
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
    
    let score = 0

    const lines = data.replace(/\n/g, "").split('\r')
    lines.pop()

    lines.forEach((line) => {
        score += ROUND_RESULT[line.split(' ').join(',')]
    })

    console.log(score)
})

/**
 * PART 2
 */
 fs.readFile('./day2.in', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return err
    }

    const LOSE = { 'A': 'SCISSORS', 'B': 'ROCK', 'C': 'PAPER' }
    const TIE = { 'A': 'ROCK', 'B': 'PAPER', 'C': 'SCISSORS'}
    const WIN = { 'A': 'PAPER', 'B': 'SCISSORS', 'C': 'ROCK' }

    const HAND_VALUE = { 'ROCK': 1, 'PAPER': 2, 'SCISSORS': 3 }
    const RESULT_VALUE = { 'X': 0, 'Y': 3, 'Z': 6 }

    let score = 0

    const lines = data.replace(/\n/g, "").split('\r')
    lines.pop()

    lines.forEach((line) => {
        const [ P1, P2 ] = line.split(' ')
        score += HAND_VALUE[P2 === 'X' ? LOSE[P1] : P2 === 'Y' ? TIE[P1] : WIN[P1]] + RESULT_VALUE[P2]
    })

    console.log(score)

})