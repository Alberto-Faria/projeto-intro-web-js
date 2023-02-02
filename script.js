// criando os cursos com arrays
const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Aprenda HTML e CSS do básico ao avançado",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "Aprenda JavaScript do básico ao avançado",
        duracao: "2 meses",
        valor: 900
    },
    {
        curso: "APIsRest",
        descricao: "Aprenda APIsRest do básico ao avançado",
        duracao: "6 meses",
        valor: 2000
    }
];
//criando as turmas e estudantes com objetos
const turmas = [
    {
        turma: "Hipátia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        nAlunos: 150,
        periodo: "Noturno",
        concluida: false
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        nAlunos: 200,
        periodo: "Integral",
        concluida: false
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        nAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        nAlunos: 80,
        periodo: "Integral",
        concluida: false
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        nAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        nAlunos: 100,
        periodo: "Integral",
        concluida: true
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        nAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        nAlunos: 90,
        periodo: "Integral",
        concluida: false
    }
];

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor: "R$900,00",
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Halle Berry ",
        turma: "Burnell",
        curso: "APIsRest",
        valor: "R$500,00",
        nParcelas: 4,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: "R$500,00",
        nParcelas: 0,
        desconto: true,
        parcelas: 0
    },
    {
        estudante: "Alberto Faria",
        turma: "Sibyla",
        curso: "JavaScript",
        valor: "R$900,00",
        nParcelas: 0,
        desconto: true,
        parcelas: 0
    }, 
]
// opçoes de pagamentos e parcelamentos com condicionais

const carrinhoCursos = [500, 900, 2000]

const parcelarCurso = (parcelas) => {
    let valorTotal = 0
    let valorParcela = 0
    let desconto = 0

    switch(carrinhoCursos.length){
        case 2:
            desconto = 0.10
            break;
        case 3:
            desconto = 0.15
            break;
        default:
            desconto = 0
            break;
    }
    //retornando parcelas com e sem desconto
    if(parcelas <= 2) {
       valorTotal = cursos[1].valor
       valorParcela = valorTotal / parcelas
       valorTotal = cursos[1].valor - (cursos[1].valor * 0,2)
    }else{
        valorTotal = cursos[1].valor
        valorParcela = valorTotal / parcelas
    }
}
    parcelarCurso(2)

    const orcamento = () => {
        const orcamentoCurso = document.getElementById("buscar-curso").value.toLowerCase()
        document.getElementById("buscar-curso").value=""
        console.log(orcamentoCurso);
        
        const orcamentoParcelas = document.getElementById("parcelas").value.toLowerCase()
        document.getElementById("parcelas").value=""
        console.log(orcamentoParcelas);
        
    const msmOrcamento = document.getElementById("valor-retornado")
     msmOrcamento.innerHTML = 
         `
                <p>Curso: ${orcamentoCurso}</p>
                <p>Parcela: ${orcamentoParcelas}</p>
                <br>
                <p>Valores: "Favor entrar em contato para mais informações"</p> 
            `
    } 
//utilizandos laços para fazer buscas
/* const buscarCurso = () => {
    const inputCurso = document.getElementById("buscar-curso").value.toLowerCase()
    document.getElementById("buscar-curso").value=""
    const filtroCurso = cursos.filter(inputCurso => {
            if(inputCurso.curso.toLowerCase().includes(buscado)){
                console.log(inputCurso);
                return filtroCurso
            }
        })
        return busca.length > 0 ? busca : "Curso não encontrado"    
} */

//buscando turmas
const buscarTurma = () => {
    
    const inputTurma = document.getElementById("input-buscar-turma").value.toLowerCase()
    document.getElementById("input-buscar-turma").value=""
    const turmaFiltrada = turmas.filter(cadaTurma => {
        if(cadaTurma.turma.toLowerCase().includes(inputTurma)){
            console.log(cadaTurma);
            return cadaTurma  
        }                 
    })
    return turmaFiltrada.length > 0 ? gerarCard(turmaFiltrada) : gerarCard(turmas)
}
//gerando o card de turmas para mostrar na tela
const gerarCard = (turmaFiltrada) => {
    let retornoTurmas = turmaFiltrada.map((cadaTurmaBuscada) => {
        return(`<section class="card">
        <h3>${cadaTurmaBuscada.turma}</h3>
        <br>
        <div>
        <p><b>Curso:</b> ${cadaTurmaBuscada.curso}</p>
        <p><b>Início:</b> ${cadaTurmaBuscada.inicio}</p>
        <p><b>Término:</b> ${cadaTurmaBuscada.termino}</p>
        <p><b>Nº Alunos:</b> ${cadaTurmaBuscada.nAlunos}</p>
        <p><b>Período:</b> ${cadaTurmaBuscada.periodo}</p>
        <p><b>Concluído:</b> ${cadaTurmaBuscada.concluida ? "Sim" : "Não"}</p>
        </div>
        </section>`
        )       
    })
    const adicionarCard = document.getElementById("container")
    adicionarCard.innerHTML = retornoTurmas.join("")
}
/////relatorio de estudante////
const buscarEstudante = () => {
    const inputEstudante = document.getElementById("nome-aluno").value.toLowerCase()
    document.getElementById("nome-aluno").value=""

    const alunoFiltrado = estudantes.filter(cadaAluno =>{
        if(cadaAluno.estudante.toLowerCase().includes(inputEstudante)){
            return cadaAluno
        } 
    })
    return alunoFiltrado ? geraCard(alunoFiltrado) : geraCard("Aluno não encontrado")
}
//gerando relatorio de alunos
const geraCard = (alunoFiltrado)=>{

    let cardAluno = alunoFiltrado.map((cadaEstudante)=>{
        return(`
        <h3>Dados do Aluno</h3>
        <br>
        <br>
        <p><b>Aluno:</b> ${cadaEstudante.estudante}</p> 
        <p><b>Turma:</b> ${cadaEstudante.turma}</p> 
        <p><b>Curso:</b> ${cadaEstudante.curso}</p> 
        <p><b>Valor Total:</b> ${cadaEstudante.valor}</p> 
        <p><b>Valor parcela:</b> ${cadaEstudante.parcelas}</p> 
        <p><b>N° Parcelas:</b> ${cadaEstudante.nParcelas}</p>
        `)
    })
const adicionaCard = document.getElementById("rel-aluno")
adicionaCard.innerHTML = cardAluno.join("")
}
//matricular aluno
const matricular = () => {
    const newStudent = document.getElementById("input-nome-matricula").value.toLowerCase()
    document.getElementById("input-nome-matricula").value=""
    
    const newCurso = document.getElementById("buscar-curso").value.toLowerCase()
    document.getElementById("buscar-curso").value=""
    
    const newTurma = document.getElementById("input-buscar-turma").value.toLowerCase()
    document.getElementById("input-buscar-turma").value=""

    const newParcelas = document.getElementById("parcelas").value.toLowerCase()
    document.getElementById("parcelas").value=""

    const novoAluno = {
        estudante: newStudent,
        turma: newTurma,
        curso: newCurso.curso,
        valor: newCurso.valor,
        nParcelas: newParcelas,
        /* desconto: desconto, */
        /* parcelas: valorPorParcela */
    }
    
const addMatricula = document.getElementById("matriculado")
addMatricula.innerHTML =
    (`
        <div>
            <img src="midias/Vector.png" alt="confirm">
            <h3>Aluno Matriculado</h3>
            <br>
            <br>
            <p>Nome: ${newStudent}</p>
            <p>Curso: ${newCurso}</p>
            <p>Turma: ${newTurma}</p>
            <p>Número de parcelas: ${newParcelas}</p>
        </div> 
        `)
}