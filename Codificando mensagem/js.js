const encryptButton = document.getElementById('encrypt-btn')
const decryptButton = document.getElementById('decrypt-btn')
const output = document.getElementById('output')
const hideImage = document.getElementById('hide-image')
const hideTitle = document.getElementById('hide-title')
const textInput = document.getElementById("input-text");
const criptografado = false

encryptButton.onclick = () =>{

    const texto = textInput.value;

    const resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")    

    document.getElementById('output').innerHTML = '<textarea readonly id="output-text" class="output-saida">'
    + resultCripto + '</textarea>' + 
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
    hideImage.style.display = 'none'
    hideTitle.style.display = 'none'
    output.style.justifyContent = 'start'

    criptografado = true;
}

decryptButton.onclick = () =>{

    const texto = textInput.value;
   
    const resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="output-text" class="output-saida">'
     + resultDescripto + '</textarea>' + 
     '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
     hideImage.style.display = 'none'
     hideTitle.style.display = 'none'
     output.style.justifyContent = 'start'
  
  }

function copiar() {
    const textoCop = document.getElementById('output-text');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Copiado.");
}
