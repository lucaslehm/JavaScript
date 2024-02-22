// Refente a aula 020 do curso

// Operadores Aritiméricos

// + Soma (ou concatenação (juntar dois valores) a depender do tipo de dado)
// - Subtrair
// / Dividir
// * Multiplicar
// ** Potencia
// % Resto da Divisao

console.log(10 + 4)

// Precedencia dos operadores é bem similar a matematica na escola, primeiro parentese, potencia, divisao, resto e multiplicacao e soma e adicão, o que vier primeiro da esquerda pra direita 

//          -7
//          18 - 25
//          10 + 8 - 25
//          10 + 4 * 2 - 1 * 25
//          10 + 4 * 2 - 1 * 5 ** 2
console.log(10 + 4 * 2 - (8 - 7) * 5 ** 2)


// Incremento ++
// Decremento --

let contador = 5
contador++ // O valor da variavel + 1
console.log(contador)

contador-- // O valor da variavel - 1
console.log(contador)

// Operadores de atribuição

// +=, *= -= /= **= %= 

// contador += 2 (é a mesma coisa que ->) contador = contador + 2 | assim como os outros sinais

// Not a Number = NaN - algo deu errado, provavelmente é o tipo de dado.

// Number('string') = converter string para numero.