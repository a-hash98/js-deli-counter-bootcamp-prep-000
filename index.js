function takeANumber(katzDeliLine, name){
  var position = parseInt(katzDeliLine.indexOf(name))+1
  return position
  return `Welcome, ${name}. You are number ${position} in line.`
}
