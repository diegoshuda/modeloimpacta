"use strict"

const selectVagas = document.querySelector("#vaga");

/* Técnica Ajax 
Técmoca de comunicação e transmição de dados*/

//Etapa 1: acessando API (endpoint de vagas)
fetch("http://localhost:3000/vagas")

//Etapa 2: depois de buscar/acessar, pegamos a 
// resposta do servidor no formato json
.then( resposta => resposta.json() )

//Etapa 3 : e depois trabalhamos com os dados recebidos
.then( dados => {
//definindo um option vazio
selectVagas.innerHTML = "<option></option>";

    for(let vaga of dados){
        //1 - Criando na memoria/Dom o elemento (option)
        let opcao = document.createElement("option");
        
        //2 - Colocando no atributo value o id da vaga
        opcao.value = vaga.id;

        // 3- Colocando o título da vaga dentro de cada vaga
        opcao.textContent = vaga.titulo;
       
       //4 - Colocando <option> criado DENTRO DO SELECT
        selectVagas.appendChild(opcao);
    }





    
});