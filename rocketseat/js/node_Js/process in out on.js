const questions = [
    "1+1?",
    "2+2?",
    "3+3?",
    "4+4?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", (data) => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask (answers.length)
    } else {
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
    Dani, então vc me diz que:
    
    ${questions[0]} é igual a ${answers[0]}

    ${questions[1]} é igual a ${answers[1]}

    ${questions[2]} é igual a ${answers[2]}

    ${questions[3]} é igual a ${answers[3]}
    
    Ok! Volte amanha para outros cálculos!"
    
    `)
})
