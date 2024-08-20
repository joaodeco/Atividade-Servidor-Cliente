const { processarRequisicao } = require('./server')

function solicitarConsulta(nome) {
    const requisicao = { acao: 'CONSULTAR', nome}
    const telefone = processarRequisicao(requisicao)
    const email = processarRequisicao(requisicao)
    console.log('Telefone e email: ', telefone, email)
}

function solicitarListagem() {
    const requisicao = { acao: 'LISTAR'}
    const resposta = processarRequisicao(requisicao)
    console.log('Lista de contatos', resposta)
    
}

function solicitarAdicao(nome, telefone, email) {
    const requisicao = { acao: 'ADICIONAR', nome, telefone, email}
    const respostaServidor = processarRequisicao(requisicao)
    console.log('Resposta do Servidor:', respostaServidor)
}

function solicitarRemocao(id) {
    const requisicao = { acao: 'REMOVER', id}
    const respostaServidor = processarRequisicao(requisicao)
    console.log('Resposta Servidor:', respostaServidor)
}

solicitarConsulta('Bob')
solicitarListagem()
solicitarAdicao('Rodrigo', [9995-4322], 'rodrigo@gmail.com')
solicitarRemocao(2)
