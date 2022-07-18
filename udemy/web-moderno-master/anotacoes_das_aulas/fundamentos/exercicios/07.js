/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

function calculateDelta(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c
    return delta
}

function calculateXPositive (a, b, c) {
    if (calculateDelta(a, b, c) < 0) {
        return 'Delta é negativo'
    } else {
        xPositive = ((b * -1) + (Math.sqrt(calculateDelta(a, b, c)))) / 2 * a
        return xPositive
    }
}

function calculateXNegative(a, b, c) {
    if (calculateDelta(a, b, c) < 0) {
        return 'Delta é negativo'
    } else {
        xNegative = ((b * -1) - (Math.sqrt(calculateDelta(a, b, c)))) / 2 * a
        return xNegative
    }
}

function calculateBhaskara(a, b, c) {
    
    return console.log(`Usando a fórmula de Bhaskara com  os seguintes valores: ${a}, ${b} e ${c}, temos:
    Delta = ${calculateDelta(a, b, c)}
    x1 = ${calculateXPositive(a, b, c)}
    x2 = ${calculateXNegative(a, b, c)}`
    )
}

calculateBhaskara(3, -5, 12)
calculateBhaskara(1, 12, -13)