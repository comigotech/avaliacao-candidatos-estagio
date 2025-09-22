# Soluções do Desafio - Avaliação para Estágio em TypeScript

Este documento apresenta as soluções desenvolvidas para cada etapa do desafio técnico, explicando as abordagens utilizadas e as decisões de implementação.

---

## 📁 Etapa 1: Resolução de Problemas (Python)

**Arquivo:** `etapa1/etapa1.py`

Implementei três funções em Python para resolver os desafios propostos:

### 🔢 Função `soma_array(lista)`
- **Objetivo:** Calcular a soma de todos os elementos de um array
- **Implementação:** Utilizei a função built-in `sum()` do Python para uma solução concisa e eficiente
- **Exemplo:** `[85, 21, 47, 33, 54, 101]` → `341`

### 🔄 Função `inverte_array(lista)`
- **Objetivo:** Retornar um array com todos os elementos invertidos
- **Implementação:** Utilizei `reversed()` combinado com `list()` para criar uma nova lista com os elementos na ordem inversa
- **Exemplo:** `[85, 21, 47, 33, 54, 101]` → `[101, 54, 33, 47, 21, 85]`

### 🎯 Função `manipula_array(lista, n)` (Desafio)
- **Objetivo:** Remover os n primeiros elementos do array e concatená-los no final
- **Implementação:** Utilizei slicing do Python (`lista[n:]` e `lista[:n]`) para dividir o array e concatenar as partes
- **Tratamento de casos:** A função funciona naturalmente para casos onde n é maior que o tamanho do array ou quando n é 0
- **Exemplo:** `[85, 21, 47, 33, 54, 101]` com `n=2` → `[47, 33, 54, 101, 85, 21]`

**Testes:** Cada função foi testada com três arrays diferentes para validar o funcionamento correto.

---

## 🟨 Etapa 2: JavaScript

**Arquivo:** `etapa2/etapa2.js`

Desenvolvi duas funções em JavaScript para trabalhar com manipulação de arrays e strings:

### ⚡ Função `filtraPares(array)`
- **Objetivo:** Filtrar apenas os números pares de um array
- **Implementação:** Utilizei um loop `for...of` com verificação do resto da divisão por 2 (`n % 2 === 0`)
- **Abordagem:** Criei um novo array `pares` para armazenar apenas os números que atendem ao critério
- **Exemplo:** `[2, -4, -84, 65, 3, 9]` → `[2, -4, -84]`

### 📊 Função `contaPalavras(frase)`
- **Objetivo:** Contar a frequência de cada palavra em uma frase
- **Implementação:** 
  1. Dividi a frase em palavras usando `split(" ")`
  2. Para cada palavra, usei `reduce()` para contar suas ocorrências na frase
  3. Criei objetos no formato `{palavra: frequência}` para cada resultado
- **Exemplo:** `"Com grandes poderes vem grandes responsabilidades"` → `[{Com: 1}, {grandes: 2}, {poderes: 1}, ...]`

**Testes:** Testei as funções com três arrays diferentes e três frases distintas, incluindo casos com palavras repetidas.

---

## 🔷 Etapa 3: TypeScript

**Arquivos:** `etapa3/src/etapa3_1.ts`, `etapa3/src/etapa3_2.ts`, `etapa3/src/etapa3_3.ts`

### 👤 Desafio 1: Interface Usuario e Filtro por Idade (`etapa3_1.ts`)

**Interface Usuario:**
```typescript
interface Usuario {
    nome: string;
    email: string;
    idade: number;
}
```

**Função `maioresDeIdade(usuarios: Usuario[])`:**
- **Objetivo:** Filtrar usuários maiores de idade (≥18 anos)
- **Implementação:** Utilizei `forEach` para iterar sobre o array e verificar a idade de cada usuário
- **Tipagem:** Aproveitei o sistema de tipos do TypeScript para garantir type safety
- **Exemplo:** Filtra usuários com idade ≥ 18 de uma lista mista

### 🎲 Desafio 2: Função Genérica de Embaralhamento (`etapa3_2.ts`)

**Função `embaralha<T>(array: T[])`:**
- **Objetivo:** Embaralhar elementos de um array de qualquer tipo
- **Implementação:** Utilizei o algoritmo Fisher-Yates shuffle:
  1. Criei uma cópia do array original usando spread operator
  2. Percorri o array de trás para frente
  3. Para cada posição, selecionei um índice aleatório e troquei os elementos
- **Genericidade:** A função funciona com qualquer tipo `T` (números, strings, objetos)
- **Testes:** Testei com arrays de números, strings e objetos Usuario

### 🏪 Desafio 3: Sistema de Cadastro de Produtos (`etapa3_3.ts`)

**Arquitetura implementada:**

#### Interface e Classes:
```typescript
interface Produto {
    marca: string;
    preco: number;
    tipo: string;
}
```

**Classes implementadas:**
- `Notebook`: Implementa Produto com tipo fixo "Notebook"
- `Teclado`: Implementa Produto com tipo fixo "Teclado"  
- `Monitor`: Implementa Produto com tipo fixo "Monitor"

#### Funcionalidades do Sistema:
1. **Menu interativo**: Sistema CLI com readline para interação do usuário
2. **Cadastro de produtos**: Permite adicionar produtos com validação de tipo, marca e preço
3. **Listagem de produtos**: Exibe todos os produtos cadastrados de forma organizada
4. **Validações implementadas:**
   - Tipo de produto (apenas Notebook, Teclado, Monitor)
   - Marca não vazia
   - Preço numérico positivo

#### Recursos avançados:
- **Interface readline**: Para criar uma aplicação CLI interativa
- **Validação robusta**: Tratamento de erros para entradas inválidas
- **Design pattern Strategy**: Uso de switch/case para criação polimórfica de produtos
- **Feedback visual**: Emojis e formatação para melhor UX

**Execução:** Para testar o sistema, compile o TypeScript e execute o arquivo resultante.

---

## 🛠️ Tecnologias e Configurações

### Etapa 3 - Configuração TypeScript:
- **tsconfig.json**: Configurado para ES2020 com strict mode
- **package.json**: Configurado com scripts de build e dependências necessárias

### Como executar:
1. **Etapa 1 (Python):** `python etapa1/etapa1.py`
2. **Etapa 2 (JavaScript):** `node etapa2/etapa2.js`  
3. **Etapa 3 (TypeScript):** 

#### Opção 1: Usando scripts npm (recomendado)
```bash
cd etapa3
npm install

# Execução direta
npm run dev:1    # etapa3_1.ts - Interface Usuario
npm run dev:2    # etapa3_2.ts - Função embaralha
npm run dev:3    # etapa3_3.ts - Sistema de cadastro

# Compilar e executar
npm run build
npm run start:1  # etapa3_1.js compilado
npm run start:2  # etapa3_2.js compilado  
npm run start:3  # etapa3_3.js compilado
```

#### Opção 2: Execução manual com ts-node
```bash
cd etapa3
npm install

# Execute diretamente qualquer arquivo TypeScript
npx ts-node src/etapa3_1.ts    # Interface Usuario e filtro por idade
npx ts-node src/etapa3_2.ts    # Função genérica de embaralhamento
npx ts-node src/etapa3_3.ts    # Sistema CLI de cadastro de produtos
```

---
