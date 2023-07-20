




//Declarar uma função que retorna um array de objeto com nome e idade de 5 pessoas. Ao final, exibir o nome e idade de cada pessoa no console

function array(){

	var pessoas = [
    {nome:'Du',      idade:10},
    {nome:'Dudu',    idade:20},
    {nome:'Edu',     idade:30},
    {nome:'Eduardo', idade:40},
    {nome:'Kadu',    idade:50},
    ];

    return pessoas;

}
  var cidadao = array();

  for(var x = 0; x < cidadao.length;x++){
    
	console.log('Nome: '+cidadao[x].nome+' - Idade: '+cidadao[x].idade);
  }












 





 