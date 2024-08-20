const contatos = [
    {id: 1, nome: 'Alice', telefone: [12345678], email: 'alice@example.com' },
    {id: 2, nome: 'Bob', telefone: [87654321], email: 'bob@example.com' },
    {id: 3, nome: 'Carol', telefone: [56781234], email: 'carol@example.com'},
    {id: 4, nome: 'Murilo', telefone: [98043574], email: 'murilomergner@gmail.com'}
];

function processarRequisicao(requisicao){
    const {acao, nome, telefone, email} = requisicao

    switch (acao){
        case 'CONSULTAR':
            return contatos.find(d => d.nome.toLowerCase() === nome.toLowerCase()) || { mensagem: "Contato não encontrado. "}

        case 'LISTAR':
            return contatos

        case 'ADICIONAR':
            const novoContato = { id: contatos.length + 1, nome, telefone, email}
            contatos.push(novoContato)
            return {mensagem: "Contato Adicionado com sucesso.", contato: novoContato }

        case 'REMOVER':
            const removerContato = {id: contatos.length - 3, nome, email, telefone }
            contatos.splice(contatos, 1)
            return {mensagem: 'Contato removido com sucesso.', contatos: removerContato}

        default:
            return { mensagem: "Ação inválida." }
        }
}

module.exports = { processarRequisicao }