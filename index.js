function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  var position = parseInt(katzDeliLine.indexOf(name))
  return `Welcome, ${name}. You are number ${position+1} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine == []){
    return "There is nobody waiting to be served!"
  }

  else if (katzDeliLine != []){
    return `Currently serving ${katzDeliLine.shift()}.`
    katzDeliLine
  }

}
