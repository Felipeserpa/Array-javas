//var nomeA =["felipe","marcio","fernando","jose","carlos"];
//var nomeB =["felipe","marcio","fernando"];

//var nomeA =["a","b","c","d","e"]
//var nomeB =["b","g","h","c",]
 


//for(let i = 0; i < nomeA.length;i++){

 

 // for(let x = 0;x < nomeB.length;x++ ){
    
 // if(nomeA[i] === nomeB[x]){
//    console.log(nomeA[i],nomeB[x])
 // }
  
  
//}

//}

//Declarar uma função passando dois parâmetros, onde o primeiro argumento é um array com nome de 5 pessoas e o 
//outro argumento contém apenas o nome de uma pessoa. Retorne e exiba via console se o nome informado consta no array ou não.


var nomeA =["felipe","marcio","fernando","jose","carlos"];
var nomeB ="fernando";

function verificar(nomeA,nomeB){

   var marcador;

   for(var i = 0;i < nomeA.length;i++){
      
      if(nomeA[i]==nomeB){

        marcador = 'x' 
      }

   }
   return marcador
}

var marcador = verificar(nomeA,nomeB)
 if(marcador == 'x'){
   console.log('nome iguais')
 }else{
   console.log('Nenhum nome igual')
 }
