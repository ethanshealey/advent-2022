const fs = require('fs');

mapping = [1, 5, 9, 13, 17, 21, 25, 29, 33]

/**
 * Part 1
 */

fs.readFile('./day5.in', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }

    const lines = data.replace(/\n/g, "").split('\r')

    const [ drawing, instructions ] = [ lines.slice(0, lines.indexOf('')), lines.slice(lines.indexOf('') + 1) ]
    
    drawing.reverse()

    const boxes = {}

    for(let i = 0; i < mapping.length; i++) 
        boxes[`${i+1}`] = []
    
    for(let i = 0; i < mapping.length; i++) 
        for(let j = 0; j < drawing.length; j++) 
            if(drawing[j][mapping[i]].match(/[A-Z]/g)) boxes[`${i+1}`].push(drawing[j][mapping[i]])

    instructions.forEach((ins, i) => {
        const instruction = ins.split(' ')
        const [ val, from, to ] = [ instruction[1], instruction[3], instruction[5] ]
        for(let i = 0; i < val; i++) {
            let b = boxes[`${from}`].pop()
            boxes[`${to}`].push(b)
        }
    })

    const ans = []
    for (const [_, value] of Object.entries(boxes)) {
        ans.push(value.at(-1))
    }

    console.log(ans.join(''))

})

/**
 * Part 1
 */

 fs.readFile('./day5.in', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }

    const lines = data.replace(/\n/g, "").split('\r')

    const [ drawing, instructions ] = [ lines.slice(0, lines.indexOf('')), lines.slice(lines.indexOf('') + 1) ]
    
    drawing.reverse()

    const boxes = {}

    for(let i = 0; i < mapping.length; i++) 
        boxes[`${i+1}`] = []
    
    for(let i = 0; i < mapping.length; i++) 
        for(let j = 0; j < drawing.length; j++) 
            if(drawing[j][mapping[i]].match(/[A-Z]/g)) boxes[`${i+1}`].push(drawing[j][mapping[i]])

    instructions.forEach((ins, i) => {
        const instruction = ins.split(' ')
        const [ val, from, to ] = [ instruction[1], instruction[3], instruction[5] ]
        let b = []
        for(let i = 0; i < val; i++) {  
            b.push(boxes[`${from}`].pop())
            // let b = boxes[`${from}`].pop()
            // boxes[`${to}`].push(b)
        }
        b.reverse()
        b.forEach((bb) => {
            boxes[`${to}`].push(bb)
        })
    })

    const ans = []
    for (const [_, value] of Object.entries(boxes)) {
        ans.push(value.at(-1))
    }

    console.log(ans.join(''))


})