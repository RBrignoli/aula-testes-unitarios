
function orderArray(arr) {
    return arr.sort((a,b) => a - b);
}

// console.log(orderArray([5,3,4,1,2]))






function orderArrayPorIdade(arr2) {
    return arr2.sort((a,b) => a.idade - b.idade);
}

const users = [
    {name: 'Ramon', idade: 28},
    {name: 'Luciano', idade: 45},
    {name: 'Markus'},
    {name: 'Lucas', idade: 22}
]

// console.log(orderArrayPorIdade(users))



const formato = 'quadrado'

const dimensao = {
    altura: 5,
    largura: 10,
    raio: null
}


function calcularArea(nomeObjeto, dimensoes) {
    let area;

    switch (nomeObjeto.toLowerCase()) {
        case 'quadrado':
            if (dimensoes.largura && dimensoes.altura) {
                area = dimensoes.largura * dimensoes.altura;
            } else {
                throw new Error("Para um quadrado, forneça as propriedades 'largura' e 'altura'.");
            }
            break;
       
        case 'triangulo':
            if (dimensoes.largura && dimensoes.altura) {
                area = (dimensoes.largura * dimensoes.altura) / 2;
            } else {
                throw new Error("Para um triângulo, forneça as propriedades 'largura' e 'altura'.");
            }
            break;

        case 'circulo':
            if (dimensoes.raio) {
                area = Math.PI.toFixed(2) * Math.pow(dimensoes.raio, 2);
            } else {
                throw new Error("Para um círculo, forneça a propriedade 'raio'.");
            }
            break;

        default:
            throw new Error("Objeto desconhecido. Use 'quadrado', 'triangulo' ou 'circulo'.");
    }

    return area;
}

function snakeToCamel(snakeStr) {
    if (typeof snakeStr !== 'string') {
      throw new Error("O argumento deve ser uma string.");
    }
    return snakeStr.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
  }


module.exports = {orderArray, orderArrayPorIdade, calcularArea, snakeToCamel};


