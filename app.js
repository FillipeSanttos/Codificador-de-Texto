

var validacao__texto = /^[a-z ]*$/;



function criptografar__texto(){
    let frase = document.querySelector('textarea').value;
    if (validacao__texto.test(frase)) { // se o texto corresponde à expressão
        console.log("o conteudo esta correto"); 
        var botao = document.querySelector(".botoes__copiar");                  //ATIVAR O BOTAO COPIAR
        botao.removeAttribute("hidden");                                        //ATIVAR O BOTAO COPIAR
        botao.removeAttribute("disable");                                       //ATIVAR O BOTAO COPIAR
        var botao = document.querySelector(".botoes__inverter");                  //ATIVAR O BOTAO COPIAR
        botao.removeAttribute("hidden");                                        //ATIVAR O BOTAO COPIAR
        botao.removeAttribute("disable");                                       //ATIVAR O BOTAO COPIAR
        
        var frase__criptografada = frase.replace(/e/g, "enter");
        var frase__criptografada = frase__criptografada.replace(/i/g, "imes");
        var frase__criptografada = frase__criptografada.replace(/a/g, "ai");
        var frase__criptografada = frase__criptografada.replace(/o/g, "ober");
        var frase__criptografada = frase__criptografada.replace(/u/g, "ufat");
 

        console.log(frase__criptografada);


        var mensagem__resolucao = document.querySelector(".texto__resposta")
        mensagem__resolucao.innerHTML = frase__criptografada;
        var elemento = document.querySelector(".texto__resposta");
        elemento.style.backgroundImage = "none";


    } 
    else { // se o texto não corresponde à expressão
        console.log("o conteudo possuí caracteres invalidos"); 
        var mensagem__erro = document.querySelector(".texto__resposta")
        mensagem__erro.innerHTML = "Caracteres inválidos digitados! <br> <strong class=\"subtexto_resposta\"> Tente novamente. </strong>";
        var elemento = document.querySelector(".texto__resposta");
        elemento.style.backgroundImage = "none";
    }
}




function descriptografar__texto(){
    let frase = document.querySelector('textarea').value;
    if (validacao__texto.test(frase)) { // Verificar se o texto digitado é válido
        
        //ATIVAR O BOTAO COPIAR E INVERTER
        var botao = document.querySelector(".botoes__copiar");                  
        botao.removeAttribute("hidden");                                        
        botao.removeAttribute("disable");                                       
        var botao = document.querySelector(".botoes__inverter");                
        botao.removeAttribute("hidden");                                        
        botao.removeAttribute("disable");                                       

        //Decodificar frases
        var frase__criptografada = frase.replace(/ai/g, "a");
        var frase__criptografada = frase__criptografada.replace(/enter/g, "e");
        var frase__criptografada = frase__criptografada.replace(/imes/g, "i");
        var frase__criptografada = frase__criptografada.replace(/ober/g, "o");
        var frase__criptografada = frase__criptografada.replace(/ufat/g, "u");
  

        var mensagem__resolucao = document.querySelector(".texto__resposta")
        mensagem__resolucao.innerHTML = frase__criptografada;
        var elemento = document.querySelector(".texto__resposta");
        elemento.style.backgroundImage = "none";

     
    }  
    else { // Se o texto digitado não for válido
        console.log("o conteudo possuí caracteres invalidos"); 
        var mensagem__erro = document.querySelector(".texto__resposta")
        mensagem__erro.innerHTML = "Caracteres inválidos digitados! <br> <strong class=\"subtexto_resposta\"> Tente novamente. </strong>";
        var elemento = document.querySelector(".texto__resposta");
        elemento.style.backgroundImage = "none";
    }
}

function copiar__texto(){
    //Copiar o texto criptografrado/descriptografado
    var elemento = document.querySelector(".texto__resposta");
    var texto = elemento.innerText;
    navigator.clipboard.writeText(texto);
}

function inverter__selecao(){
    //Copiar o texto criptografrado/descriptografado
    var elemento = document.querySelector(".texto__resposta");
    var texto = elemento.innerText;
    navigator.clipboard.writeText(texto);
    var frase__criptografada = texto;
    //Substituir o box de digitar texto pelo texto criptografado/descriptografado
    var textarea = document.querySelector(".digitar__texto");
    var texto = frase__criptografada;
    textarea.value = texto;
}