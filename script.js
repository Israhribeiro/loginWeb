function showPh(id,texto){
    var input = document.querySelector(id)
    input.placeholder = texto
}

function offPh(id){
    var input = document.querySelector(id)
    input.placeholder = ""
}