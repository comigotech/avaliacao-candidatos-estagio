# Etapa 3 – TypeScript 🚀

## 📘 Descrição do Projeto

Este projeto tem como objetivo praticar conceitos fundamentais de **TypeScript**, como **tipagem estática**, **interfaces**, **classes** e **funções genéricas**.

A Etapa 3 propôs três desafios principais, implementados em arquivos separados dentro da pasta `src`.

---

## 🗂️ Estrutura do Projeto

```
Etapa3/
 ├── node_modules/
 ├── src/
 │   ├── etapa3CadastroProdutos.ts
 │   ├── etapa3Embaralhar.ts
 │   └── etapa3FiltroIdade.ts
 ├── package.json
 ├── package-lock.json
 └── tsconfig.json
```

---

## ⚙️ Tecnologias Utilizadas

- **TypeScript**
- **Node.js**
- **VS Code** como ambiente de desenvolvimento
- **ts-node** para execução direta de arquivos `.ts`

---

## 💡 Desafios Propostos

### 🧍 Desafio 1 – Filtrar Usuários Maiores de Idade

**Objetivo:**  
Criar uma interface `Usuario` e uma função que receba um array de usuários e retorne apenas aqueles com idade maior ou igual a 18.

**Arquivo:** `src/etapa3FiltroIdade.ts`

**Exemplo de Saída:**
```bash
Desafio 1 - Filtrar Usuários Maiores de Idade
Maiores de idade: [
  { nome: 'Fernando', idade: 25 },
  { nome: 'Antonio', idade: 18 },
  { nome: 'Maria', idade: 45 }
]
```

---

### 🔀 Desafio 2 – Embaralhar Array Genérico

**Objetivo:**  
Criar uma função genérica que embaralhe os elementos de um array de qualquer tipo.

**Arquivo:** `src/etapa3Embaralhar.ts`

**Exemplo de Saída:**
```bash
Desafio 2 - Embaralhar Array Genérico
Array original de números: [ 1, 2, 3, 4, 5, 6 ]
Array embaralhado: [ 4, 1, 6, 3, 2, 5 ]
```

---

### 💻 Desafio 3 – Sistema de Cadastro de Produtos

**Objetivo:**  
Criar um sistema simples de cadastro de produtos utilizando classes e interfaces.

**Arquivo:** `src/etapa3CadastroProdutos.ts`

**Exemplo de Saída:**
```bash
Desafio 3 - Sistema de Cadastro de Produtos
Produto "Notebook Gamer" adicionado com sucesso!
Produto "Mouse sem Fio" adicionado com sucesso!
Produto "Teclado sem Fio" adicionado com sucesso!

Lista de Produtos Cadastrados
ID: 1, Nome: Notebook Gamer, Preço: R$7500.00
ID: 2, Nome: Mouse sem Fio, Preço: R$149.90
ID: 3, Nome: Teclado sem Fio, Preço: R$129.90
```

---

## 🧠 Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute cada desafio separadamente:

   - **Filtro de Idade:**
     ```bash
     npm run start:filtro
     ```

   - **Embaralhar Array:**
     ```bash
     npm run start:embaralhar
     ```

   - **Cadastro de Produtos:**
     ```bash
     npm run start:cadastro
     ```

---

## ✨ Autor

**Fernando César**  
Projeto avaliativo – Etapa 3 (TypeScript)
