//var nomeA =["felipe","marcio","fernando","jose","carlos"];
//var nomeB =["felipe","marcio","fernando"];

var nomeA =["a","b","c","d","e"]
var nomeB =["b","g","h"]
 var novoArray = []
 

for(let i = 0; i < nomeA.length;i++){


   for(let x = 0;x < nomeB.length;x++){
    
if(nomeA[i] !== nomeB[x]){
    novoArray.push (nomeA[i])
    novoArray.push (nomeB[x])

}console.log(novoArray)

}
}
   


var array1 = [2, 2, 3];
var array2 = [2, 4, 4];
var array3 = [array1[0]];

for(i = 1; i < array1.length; i++)
{
    var tem = false;
    for(j = 0; j < array3.length; j++){

        if (array1[i] === array3[j]){
            tem = true;
        }
    }
    if (!tem){
       array3.push(array1[i]); 
    }
}
for(i = 0; i < array2.length; i++)
{
    var tem = false;
    for(j = 0; j < array3.length; j++){

        if (array2[i] === array3[j]){
            tem = true;
        }
    }
    if (!tem){
       array3.push(array2[i]); 
    }
}

console.log(array3); 





//Declarar uma função passando dois parâmetros, tendo como primeiro argumento um array de objeto com nome e idade de 5 pessoas e o segundo argumento
// um array com nome de 7 pessoas. No escopo da função deverá ser verificado se contém nomes iguais entre ambos arrays. Caso seja encontrado,
 //deverá ser chamado uma outra função tendo como parâmetro esse array de nomes iguais e exibir seus elementos via console.


 let pessoas_obj = [
    {nome:'Du',idade:10},
    {nome:'Dudu',idade:20},
    {nome:'Edu',idade:30},
    {nome:'Felipe',idade:40},
    {nome:'Kadu',idade:50},
    ];
    
    let pessoas_array = ["Du","Teste","Edu","Felipe","PHP","JS","HTML"];
    
    var pessoas_iguais = [];

    function verifica(pessoas_obj,pessoas_array){

        for(var x=0;x < pessoas_obj.length;x++){
            
            for(var y=0;y < pessoas_array.length;y++){

                if(pessoas_obj[x].nome == pessoas_array[y]){
                     pessoas_iguais.push(pessoas_obj[x].nome);
                }
            }
        }
    
        if(pessoas_iguais.length>0){

            exibe_array(pessoas_iguais);
        }

    }

    function exibe_array(pessoas_iguais){

        for(var x=0; x<pessoas_iguais.length; x++){
    
            console.log(pessoas_iguais[x]);
        }
    }
    
    verifica(pessoas_obj, pessoas_array);