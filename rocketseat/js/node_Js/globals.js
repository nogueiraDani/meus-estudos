//módulos nativos do node


console.log(global) // documentação no site do node https://nodejs.org/dist/latest-v16.x/docs/api/globals.html#console

console.log(__dirname)

console.log(__filename)

// meus módulos

const myModule = require('./exports')

console.log(myModule)