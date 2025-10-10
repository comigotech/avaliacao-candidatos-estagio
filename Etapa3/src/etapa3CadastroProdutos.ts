interface Produto {
  id: number;
  nome: string;
  preco: number;
}

class GerenciadorDeProdutos {
  private produtos: Produto[] = [];
  private proximoId = 1;

  public adicionarProduto(nome: string, preco: number): void {
    const novoProduto: Produto = {
      id: this.proximoId++,
      nome: nome,
      preco: preco,
    };
    this.produtos.push(novoProduto);
    console.log(`Produto "${nome}" adicionado com sucesso!`);
  }

  public listarProdutos(): void {
    console.log("\nLista de Produtos Cadastrados");
    if (this.produtos.length === 0) {
      console.log("Nenhum produto cadastrado.");
      return;
    }
    this.produtos.forEach(p => {
      console.log(`ID: ${p.id}, Nome: ${p.nome}, Preço: R$${p.preco.toFixed(2)}`);
    });
  }
}

console.log("Desafio 3 - Sistema de Cadastro de Produtos");

const meuEstoque = new GerenciadorDeProdutos();
meuEstoque.adicionarProduto("Notebook Gamer", 7500.00);
meuEstoque.adicionarProduto("Mouse sem Fio", 149.90);
meuEstoque.adicionarProduto("Teclado sem Fio", 129.90);
meuEstoque.listarProdutos();