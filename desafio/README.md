# ETAPA 1: JAVA

## 📋 VISÃO GERAL
Primeira etapa do desafio focada em lógica de programação utilizando Java.

## 🎯 IMPLEMENTAÇÕES
**Arquivo principal:** `Etapa1.java`

### Funções Desenvolvidas:

1. **somaArray()**
    - **Objetivo:** Calcular a soma de todos os elementos de um array de números
    - **Funcionalidade:** Percorre o array somando cada elemento
    - **Casos testados:** Arrays com números positivos, negativos, zero e vazio

2. **inverteArray()**
    - **Objetivo:** Inverter a ordem dos elementos de um array
    - **Funcionalidade:** Cria novo array com elementos na ordem inversa
    - **Casos testados:** Arrays de diferentes tamanhos, incluindo unitário e vazio

3. **moveElementos()**
    - **Objetivo:** Mover os primeiros n elementos para o final do array
    - **Funcionalidade:** Rotaciona o array conforme parâmetro n
    - **Tratamento especial:** n maior que tamanho do array, n zero, array vazio

## 🧪 SISTEMA DE TESTES
- Testes automatizados integrados no próprio código
- Múltiplos cenários para cada função (mínimo 3 por função)
- Validação visual com indicadores ✅ de sucesso/falha
- Casos extremos cobertos (valores limite, entradas inválidas)

## 🔧 EXECUÇÃO
- **Compilação:** `javac Etapa1.java`
- **Execução:** `java Etapa1`
- **Ambiente:** Java 21, compatível com IntelliJ IDEA

## 💡 CARACTERÍSTICAS TÉCNICAS
- Código limpo e bem estruturado
- Tratamento robusto de casos especiais
- Documentação inline clara
- Saída organizada no console para fácil verificação

# ETAPA 2: JAVASCRIPT

## 📋 VISÃO GERAL
Segunda etapa do desafio focada em manipulação de dados e strings utilizando JavaScript.

## 🎯 IMPLEMENTAÇÕES
**Arquivo principal:** `etapa2.js`

### Funções Desenvolvidas:

1. **filtrarPares()**
    - **Objetivo:** Filtrar números pares de um array
    - **Funcionalidade:** Usa `filter()` com verificação de módulo 2
    - **Casos testados:** Arrays com positivos, negativos, zero, mistos e vazios
    - **Tratamento:** Identifica corretamente zero como número par

2. **contarFrequenciaPalavras()**
    - **Objetivo:** Contar frequência de cada palavra em uma frase
    - **Funcionalidade:** Limpa pontuação, converte para minúsculas e conta ocorrências
    - **Processamento:** Remove caracteres especiais, trata múltiplos espaços
    - **Casos testados:** Frases com pontuação, maiúsculas, espaços múltiplos e vazias

## 🧪 SISTEMA DE TESTES
- Testes abrangentes com múltiplos cenários realistas
- Validação por comparação de JSON para arrays e objetos
- Casos complexos: frases com pontuação e variação de capitalização
- Verificação automática de resultados esperados vs obtidos

## 🔧 EXECUÇÃO
- **Ambiente:** Node.js
- **Execução:** `node etapa2.js`
- **Compatibilidade:** JavaScript ES6+

## 💡 CARACTERÍSTICAS TÉCNICAS
- Uso moderno de ES6: arrow functions, template literals
- Manipulação avançada de strings com expressões regulares
- Processamento de texto com tratamento de casos edge
- Saída formatada para fácil análise dos resultados

## 🚀 DESTAQUES
- Função de contagem de palavras robusta contra variações de input
- Sistema de testes que valida tanto estrutura quanto conteúdo
- Código limpo e funcional pronto para produção

# ETAPA 3: TYPESCRIPT

## 📋 VISÃO GERAL
Terceira etapa do desafio focada em TypeScript com tipagem estática, generics e sistema completo de classes.

## 🎯 IMPLEMENTAÇÕES
Estrutura modular organizada em pastas específicas.

### Interfaces Desenvolvidas:

1. **Interface Usuario**
    - **Propriedades:** `nome` (string), `idade` (number), `email` (string)
    - **Uso:** Definição de estrutura para dados de usuário

2. **Interface Produto**
    - **Propriedades:** `id`, `nome`, `preco`, `categoria`, `emEstoque`
    - **Uso:** Base para sistema de cadastro de produtos

### Funções Desenvolvidas:

1. **filtrarMaioresDeIdade()**
    - **Objetivo:** Filtrar usuários maiores de 18 anos
    - **Funcionalidade:** Usa `filter()` com verificação de idade ≥ 18
    - **Tipagem:** Recebe e retorna array de `Usuario[]`

2. **embaralharArray() - GENÉRICA**
    - **Objetivo:** Embaralhar elementos de qualquer tipo de array
    - **Funcionalidade:** Algoritmo Fisher-Yates com troca de posições
    - **Generics:** Funciona com arrays de números, strings, objetos
    - **Característica:** Preserva todos os elementos, apenas altera ordem

### Sistema de Classes:

**SistemaCadastro - Classe Completa**
- CRUD completo: Adicionar, listar, buscar, atualizar, remover
- Métodos avançados: Filtrar por categoria, listar em estoque, calcular valor total
- Gerenciamento de estado: controle automático de IDs, array interno de produtos
- Métodos utilitários: `contarPorCategoria()`, `calcularValorTotalEstoque()`

## 🧪 SISTEMA DE TESTES
- Testes modulares organizados por funcionalidade
- Cobertura completa de todos os métodos do sistema
- Validação de tipos em tempo de compilação
- Cenários complexos: arrays de objetos, operações em lote

## 🔧 EXECUÇÃO
- **Compilação:** `tsc` (gera JavaScript em pasta `dist/`)
- **Execução:** `node dist/etapa3.js`
- **Configuração:** `tsconfig.json` com strict typing habilitado

## 💡 CARACTERÍSTICAS TÉCNICAS
- Tipagem forte em todas as funções e classes
- Generics para funções reutilizáveis
- Programação orientada a objetos com encapsulamento
- Sistema modular com imports/exports organizados
- Tratamento robusto de casos edge em operações de array

## 🚀 DESTAQUES
- Sistema completo de cadastro com múltiplas operações
- Função genérica verdadeiramente polimórfica
- Arquitetura escalável e bem organizada
- Código production-ready com tipagem completa
