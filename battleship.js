// Your code here
function box() {
  let battleBox = []
  let x = 0
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
      x++
      if (j % 10 === 0) {
        if (j % 2 === 0) {
          battleBox.push('\n', '   ')
        } else {
          battleBox.push('\n', '   ')
        }
      } else {
        if (j % 2 === 0) {
          battleBox.push('   ')
        } else {
          battleBox.push('   ')
        }
      }
      if (i % 2 === 0) {
        battleBox.push('\n', '---')
      }
    }
  }
  battleBox.push('')
  return battleBox.join('|')
}

console.log(box())