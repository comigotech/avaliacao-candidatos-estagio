import { SistemaCadastro } from '../classes/SistemaCadastro';

export function executarTestesSistemaCadastro(): void {
    console.log("\n=== TESTE 3 - SISTEMA DE CADASTRO DE PRODUTOS ===");
    console.log("=================================================\n");

    const sistema = new SistemaCadastro();

    console.log(" Teste 1 - Adicionar produtos:");
    sistema.adicionarProduto("Notebook", 2500.00, "Eletrônicos", true);
    sistema.adicionarProduto("Mouse", 50.00, "Eletrônicos", true);
    sistema.adicionarProduto("Teclado", 120.00, "Eletrônicos", false);
    sistema.adicionarProduto("Caderno", 15.00, "Papelaria", true);
    sistema.adicionarProduto("Caneta", 2.50, "Papelaria", true);
    
    const produtos = sistema.listarProdutos();
    console.log("   Produtos cadastrados:", produtos.length);
    console.log("    5 produtos adicionados:", produtos.length === 5 ? "CORRETO" : "INCORRETO");
    console.log();

    console.log(" Teste 2 - Listar produtos em estoque:");
    const emEstoque = sistema.listarEmEstoque();
    console.log("   Produtos em estoque:", emEstoque.length);
    console.log("    4 produtos em estoque:", emEstoque.length === 4 ? "CORRETO" : "INCORRETO");
    console.log();

    console.log(" Teste 3 - Buscar produto por ID:");
    const produto = sistema.buscarPorId(2);
    console.log("   Produto com ID 2:", produto?.nome);
    console.log("    Mouse encontrado:", produto?.nome === "Mouse" ? "CORRETO" : "INCORRETO");
    console.log();

    console.log(" Teste 4 - Filtrar por categoria:");
    const eletronicos = sistema.filtrarPorCategoria("Eletrônicos");
    console.log("   Eletrônicos:", eletronicos.length);
    console.log("    3 eletrônicos:", eletronicos.length === 3 ? "CORRETO" : "INCORRETO");
    console.log();

    console.log(" Teste 5 - Atualizar preço:");
    const atualizado = sistema.atualizarPreco(1, 2300.00);
    const produtoAtualizado = sistema.buscarPorId(1);
    console.log("   Preço atualizado:", atualizado);
    console.log("   Novo preço do Notebook:", produtoAtualizado?.preco);
    console.log("    Preço atualizado para 2300:", produtoAtualizado?.preco === 2300.00 ? "CORRETO" : "INCORRETO");
    console.log();

    console.log(" Teste 6 - Remover produto:");
    const removido = sistema.removerProduto(3);
    const produtosAposRemocao = sistema.listarProdutos();
    console.log("   Produto removido:", removido);
    console.log("   Produtos restantes:", produtosAposRemocao.length);
    console.log("    4 produtos após remoção:", produtosAposRemocao.length === 4 ? "CORRETO" : "INCORRETO");
    console.log();

    console.log(" Teste 7 - Calcular valor total do estoque:");
    const valorTotal = sistema.calcularValorTotalEstoque();
    console.log("   Valor total do estoque: R$", valorTotal.toFixed(2));
    console.log("    Valor calculado corretamente:", valorTotal > 0 ? "CORRETO" : "INCORRETO");
    console.log();

    console.log(" Teste 8 - Contar produtos por categoria:");
    const contagem = sistema.contarPorCategoria();
    console.log("   Contagem por categoria:", contagem);
    console.log("    Categorias contadas:", Object.keys(contagem).length > 0 ? "CORRETO" : "INCORRETO");

}