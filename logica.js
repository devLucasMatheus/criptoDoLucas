function criptografar() {
    var textoDigitado = document.querySelector("#entradaUsuario").value;
    var textoCriptografado = textoDigitado.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("saidaUsuario").innerHTML = textoCriptografado;
}

function descriptografar() {
    var textoRecebido = document.querySelector("#saidaUsuario").value;
    var textoDescrip = document.getElementById("saidaUsuario").innerHTML
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");   
    
    document.getElementById("saidaUsuario").innerHTML = textoDescrip;
}

function copiar() {
    let texto = document.getElementById("saidaUsuario");
        texto.select();
        document.execCommand("copy");

    alert("Texto copiado para área de transferência");
}



