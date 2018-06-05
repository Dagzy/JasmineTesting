var theOuput = document.getElementById("theOutput")
function testResponse(e){
    fetch('http://localhost:3000/test').then(data => data.json()).then(data => theOuput.placeholder = data)
}