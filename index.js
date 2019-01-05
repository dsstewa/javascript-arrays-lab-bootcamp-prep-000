var kittens = ["Milo","Otis","Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
 return [...kittens,name]
}
function prependKitten(name) {
 return [name,...kittens]
}

function removeLastKitten() {
<<<<<<< HEAD
 return kittens.slice(0,kittens.length - 1)
}

function removeFirstKitten() {
 return kittens.slice(1)
=======
 return kittens.slice(0,kitens.lenght)
>>>>>>> bf7c51e1ddd51f6215a8135f3e047c8c6b5c30f4
}