# ⚡ Etapa 2 - Resolução de Problemas com JavaScript

## 🎯 Objetivo
Resolver desafios simples utilizando **JavaScript**, aplicando conceitos de manipulação de arrays e strings.

---

## 🧠 Desafios

1. **Filtrar números pares de um array**  
   > Implemente uma função que receba um array de números e retorne apenas os números pares.

2. **Contar frequência de palavras em uma frase**  
   > Implemente uma função que receba uma frase e conte a frequência de cada palavra, ignorando pontuação e diferenciação entre maiúsculas e minúsculas.

---

## 💻 Tecnologias utilizadas
- **Linguagem:** JavaScript (ES6+)  
- **Ambiente de execução:** Node.js ou navegador  
- **Editor recomendado:** VS Code  

---

## ⚙️ Como executar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/FcesarBzSilva/FernandoCesar.git
   ```

2. **Acesse o diretório da etapa**
   ```bash
   cd Etapa2
   ```

3. **Execute o código**
   ```bash
   node etapa2.js
   ```

---

## 📁 Estrutura do projeto

```
📂 Etapa2/
 ┣ 📜 etapa2.js
 ┗ 📜 README.md
```

---

## 🔍 Descrição das Funções

### 1. `filtrarNumerosPares(arrayDeNumeros)`
Recebe um array de números e retorna um novo array contendo apenas os números pares.

**Exemplo de uso:**
```javascript
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6]));
// Saída: [2, 4, 6]
```

---

### 2. `contarFrequenciaPalavras(frase)`
Recebe uma frase, remove pontuações e retorna um objeto com a frequência de cada palavra.

**Exemplo de uso:**
```javascript
console.log(contarFrequenciaPalavras("A casa é bonita e a casa é azul."));
// Saída: { a: 2, casa: 2, é: 2, bonita: 1, e: 1, azul: 1 }
```

---

## 🧪 Casos de Teste

A função `filtrarNumerosPares` foi testada com:
- Arrays contendo números pares e ímpares  
- Arrays contendo apenas ímpares  
- Arrays com números grandes  

A função `contarFrequenciaPalavras` foi testada com:
- Frases contendo pontuação  
- Palavras repetidas  
- Diferentes capitalizações (maiúsculas/minúsculas)  

---

## 🧾 Autor
**Fernando Cesar**  
💼 Estudante de Desenvolvimento Full-stack

