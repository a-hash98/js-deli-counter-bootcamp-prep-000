function takeANumber(katzDeliLine, name){
  var position = parseInt(katzDeliLine.indexOf(name))
  return position
  return `Welcome, ${name}. You are number ${position+1} in line.`
}
