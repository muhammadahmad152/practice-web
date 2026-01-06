// Array flat 

let arry = [23, 45, [38, 11, [23, 67,[89]]]]
let result = arry.flat(4)
console.log(result);

// String.trim 

let name = 'Hello World'

let final = name.trim()
console.log(final)

// map Object 

let mapobj = new Map([
  ['name', 'ali'],
  ['email', 'ali@gmail.com']
])

let data = Object.fromEntries(mapobj)

for (let value of Object.values(data)) {
  document.body.innerHTML += value + '<br>'
}

console.log(data)
