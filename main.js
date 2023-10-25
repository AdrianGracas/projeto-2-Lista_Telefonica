const formulario = document.getElementById('form-inputs');
const footer =document.getElementById('footer');
const totalArray = []
const totalNumero = []

let linhas = '';

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizarContatos();
});

function recarregarAPagina() {
    window.location.reload()
}

function  adicionaLinha() {
    const Nome = document.getElementById('Nome')
    const Sobrenome = document.getElementById('Sobrenome')
    const DDD = document.getElementById('DDD')
    const Numero = document.getElementById('Telefone')
    const Apelido = document.getElementById('Apelido')
    let quantidade = 0

    if (totalNumero.includes(Numero.value)) {
        alert(`O número ${Numero.value} já está atribuído a um outro contato`)
    } else {
        totalNumero.push(Numero.value)

        let linha = '<tr>'
        linha += `<td>${Nome.value}</td>`
        linha += `<td>${Sobrenome.value}</td>`
        linha += `<td>(${DDD.value}) ${Numero.value}</td>`
        linha += `<td>${Apelido.value}</td>`
        linha += `</tr>`
        quantidade += 1
    
        totalArray.push(quantidade)

        linhas += linha
    }

    Nome.value = '';
    Sobrenome.value = '';
    DDD.value = '';
    Numero.value = '';
    Apelido.value = '';
}

function atualizarContatos() {
    const Tabela = document.querySelector('tbody')
    Tabela.innerHTML = linhas
}
