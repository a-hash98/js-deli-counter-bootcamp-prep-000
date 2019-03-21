function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
    katzDeliLine.slice(1)
  } else if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  } else {
    var queueDict = []
    var i = 0
    for(i = 0; i < katzDeliLine.length; i++){
       queueDict.push(`${i+1}. ${katzDeliLine[i]}`)
     }
     return queueDict.replace(\[,"")
  }
}
