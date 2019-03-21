function takeANumber(katzDeliLine, name){
  var position = katzDeliLine.indexOf(name)+1
  return `Welcome ${name}. You are number ${position} in line.`
}
