let totalGeral;
limpar();


function adicionar() {
    let quantidade = document.getElementById("quantidade").value;

    // ❌ validação: quantidade deve ser maior que 0, !quantidade serve para capturar casos em que o usuário não digitou nada ou digitou algo que não virou número.
    if (!quantidade || quantidade <= 0) {
        alert("Digite uma quantidade válida!");
    } else {
        //recuperar valores - nome do produto, quantidade e valor
        let produto = document.getElementById("produto").value;
        let nomeProduto = produto.split('-')[0]; // split('-') divide a string em duas partes pelo "-" e pega a primeira parte
        let valorUnitario = produto.split('R$')[1]; // split('R$') divide a string pelo "R$" e pega a segunda parte

        //calcular o preço, o nosso subtotal
        let preco = quantidade * valorUnitario;
        let carrinho = document.getElementById("lista-produtos");

        //adicionar no carrinho
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
              <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`;

        //atualizar o valor total
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById("valor-total");
        campoTotal.textContent = `R$ ${totalGeral}`

        //resetar o campo quantidade
        document.getElementById("quantidade").value = 0;
    }
}

function limpar() {
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$0";
}