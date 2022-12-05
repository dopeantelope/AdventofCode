const fs = require('fs')

function readData(err, data) {
  mostCalories(data)
}

function mostCalories(data) {
  let input = data.split('\n')
  let elves = []
  let elf = []
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== "") {
      elf.push(+input[i])
    } else {
      elves.push(elf)
      elf = []
    }
  }
  
  let calories = elves.map(element => element.reduce((acc, curr) => acc + curr, 0))
  console.log(Math.max(...calories))

  let topThree = calories.sort((a, b) => b - a).slice(0, 3)
  let total = topThree.reduce((acc, curr) => acc + curr)
  console.log(total)
}


fs.readFile('data.txt', 'utf8', readData)
