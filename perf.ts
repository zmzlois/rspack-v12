import * as acorn from "acorn"
import fs from "node:fs"
const ts = require.resolve('typescript')
const content = fs.readFileSync(ts, 'utf-8')
console.time('parse')

acorn.parse(content, {
    ecmaVersion: 'latest'
})

console.timeEnd('parse')