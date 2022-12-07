const fs = require('fs')

const check = (str) => {
    return new Set(str).size === str.length
}

fs.readFile('./day6.in', 'utf-8', (err, data) => {
    let stream = ''
    for(let i = 0; i < data.length; i++) {
        stream = data.slice(i, i+4)
        if(check(stream)) {
            console.log(i+4)
            break
        }
    }
})