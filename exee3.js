
// Declarar uma função passando um parâmetro, tendo como argumento um array de objeto contendo nome, idade e profissão de 5 pessoas. No escopo da função deverá exibir via console apenas as pessoas que tiverem entre 18 e 25 anos e que sua profissão seja  Programador.


var pessoas =[{
    nome:"Fernando",
    idade:10,
    profissao:'Motorista',
  },
  { nome:"Carlos",
    idade:20,
    profissao:'Professora',
  }
  ,
  { nome:"Jose",
    idade:25,
    profissao:'Programador',
  },
  { nome:"Marcos",
    idade:40,
    profissao:'Policial',
  },
  { nome:"Fernanda",
    idade:60,
    profissao:'Programador',
  }];




  function verifica(pessoas){

for(var i = 0;i < pessoas.length;i++){

  if(pessoas[i].idade >= 18 && pessoas[i].idade <=25 || pessoas[i].profissao == 'Programador' ){
    console.log(pessoas[i].nome);
  }
}

  }

verifica(pessoas)











 




  


  


