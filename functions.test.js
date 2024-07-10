const { orderArray } = require("./index")

test('ordena a lista', () => {
    const entrada = [5,2,3,4,1]
    const saida_esperada = [1,2,3,4,5]
    expect(orderArray(entrada)).toEqual(saida_esperada)
})

