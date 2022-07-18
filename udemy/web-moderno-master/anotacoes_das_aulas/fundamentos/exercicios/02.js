/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

let descobrirTipoTriangulo = (a, b, c) => {
    if (a == b && b == c) {
        return console.log("O triangulo é equilátero")
    }
    if ((a == b && b !== c) || (a !== b && b == c) || (a == c && b !== c)) {
        return console.log("O triangulo é isósceles")
    }
    if (a !== b && b !== c ) {
        return console.log("O triangulo é escaleno")
    }

}

descobrirTipoTriangulo(10,10,10)
descobrirTipoTriangulo(10, 20, 20)
descobrirTipoTriangulo(20, 10, 10)
descobrirTipoTriangulo(10, 20, 10)
descobrirTipoTriangulo(10, 20, 30)