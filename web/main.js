function inputdata(){
    var data=document.getElementById("data").value
    var source = document.getElementById("source")
    var sourcelang = source.options[source.selectedIndex].text
    var destination = document.getElementById("destination")
    var destlang = destination.options[destination.selectedIndex].text
    eel.translate(data, sourcelang, destlang)(setOutput)
}
 function setOutput(outputText){
    document.getElementById("output").value = outputText

 }