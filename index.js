function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = parseInt(katzDeliLine.indexOf(name))
  return `Welcome, ${name}. You are number ${position+1} in line.`
}

function nowServing(katzDeliLine){
  return `Now serving ${katzDeliLine[0]}`
  katzDeliLine.shift()
}

