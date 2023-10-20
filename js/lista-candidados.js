"use strict"
//Seleção dos elementos : botão carregar e lista
const botao = $("#carregar");
const lista = $("#lista");

//Ouvinte de evento para clicar no botão
botao.on("click", function () {
    //Técnica ajax através da jquery - ELA EXIJE UM OBJETO
    $.ajax({
        url: "http://localhost:3000/candidatos",
        dataType: "json",
        success: function (resposta) {
           //Resset/Limpe a lista antes do carregamento
           lista.html("");
           
            /* Loop $.each para percorrer os dados 
            da resposta vinda do servidor API */
            $.each(resposta, function (indice, candidato) {
           lista.append(
               `<li class="list-group-item"> ${candidato.nome} - ${candidato.vaga}</li>`
           );
            });

        }
    });

});