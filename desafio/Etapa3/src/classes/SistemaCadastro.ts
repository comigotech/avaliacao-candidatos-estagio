import { Produto } from '../interfaces/Produto';

export class SistemaCadastro {
    private produtos: Produto[] = [];
    private proximoId: number = 1;

    adicionarProduto(nome: string, preco: number, categoria: string, emEstoque: boolean = true): Produto {
        const novoProduto: Produto = {
            id: this.proximoId++,
            nome,
            preco,
            categoria,
            emEstoque
        };
        
        this.produtos.push(novoProduto);
        return novoProduto;
    }

    listarProdutos(): Produto[] {
        return [...this.produtos];
    }

    buscarPorId(id: number): Produto | undefined {
        return this.produtos.find(produto => produto.id === id);
    }

    filtrarPorCategoria(categoria: string): Produto[] {
        return this.produtos.filter(produto => 
            produto.categoria.toLowerCase() === categoria.toLowerCase()
        );
    }

    listarEmEstoque(): Produto[] {
        return this.produtos.filter(produto => produto.emEstoque);
    }

    atualizarPreco(id: number, novoPreco: number): boolean {
        const produto = this.buscarPorId(id);
        if (produto) {
            produto.preco = novoPreco;
            return true;
        }
        return false;
    }

    removerProduto(id: number): boolean {
        const index = this.produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            return true;
        }
        return false;
    }

    calcularValorTotalEstoque(): number {
        return this.produtos
            .filter(produto => produto.emEstoque)
            .reduce((total, produto) => total + produto.preco, 0);
    }

    contarPorCategoria(): { [categoria: string]: number } {
        const contador: { [categoria: string]: number } = {};
        
        this.produtos.forEach(produto => {
            contador[produto.categoria] = (contador[produto.categoria] || 0) + 1;
        });
        
        return contador;
    }
}