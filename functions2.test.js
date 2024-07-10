const { orderArray } = require("./index")


test('ordena a lista com numeros negativos', () => {
    const entrada = [-5,2,-3,4,1]
    const saida_esperada = [-5,-3,1,2,4]
    expect(orderArray(entrada)).toEqual(saida_esperada)
})