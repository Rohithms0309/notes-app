const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Rohith'
data.age = 23

const newUser = JSON.stringify(data)
fs.writeFileSync('1-json.json', newUser)
