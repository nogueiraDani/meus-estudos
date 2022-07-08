const booksByCategory = [{
        category: "Riqueza",
        books: [{
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [{
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

let totalCategorias = booksByCategory.length
let categorias = []

function contarCategorias() {

    for (let x of booksByCategory) {
        if (categorias.indexOf(x.category) == -1) {
            categorias.push(x.category)
        }
    }
    console.log(`Existem ${totalCategorias} categorias de livros: ${categorias.join(", ")} `)

}


function contarLivrosPorCategoria() {

    for (let x of booksByCategory) {
        console.log(`Total de livros da categoria ${x.category}: ${x.books.length}`)
    }

}

let autores = []

function contarAutores() {

    for (let x of booksByCategory) {
        for (let y of x.books) {
            if (autores.indexOf(y.author) == -1) {
                autores.push(y.author)
            }
        }
    }
    let totalDeAutores = autores.length
    console.log(`Existem ${totalDeAutores} de autores: ${autores.join(', ')}`)

}


let livros = []

function listarLivrosDoAutor(nome) {

    for (let x of booksByCategory) {
        for (let y of x.books) {
            if (y.author === nome) {
                livros.push(y.title)
            }
        }
    }
    console.log(`Estes sao os livros de ${nome}: ${livros.join(', ')}`)
}

function exibirMensagem() {

    contarCategorias()
    contarLivrosPorCategoria()
    contarAutores()
    
}

function exibirLivrosDoAutor(nome) {

    listarLivrosDoAutor(nome)

}

exibirMensagem()
exibirLivrosDoAutor("George S. Clason")
exibirLivrosDoAutor("T. Harv Eker")


