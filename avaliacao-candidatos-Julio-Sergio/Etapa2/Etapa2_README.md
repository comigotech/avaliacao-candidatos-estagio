#  Etapa 2 — Filtragem de Números Pares e Contagem de Palavras

Projeto em **HTML + JavaScript** que permite:
1. Filtrar **números pares** de uma lista digitada pelo usuário.  
2. Contar a **frequência de palavras** em um texto.

---

##  Funcionalidades

###  1. Filtrar números pares
O usuário insere uma lista de números separados por vírgulas.  
O programa exibe apenas os **números pares**.

Exemplo:
Entrada: 1, 2, 3, 4, 5, 6  
Saída: 2, 4, 6

###  2. Contar o número de palavras
O usuário insere uma frase, e o script mostra a **frequência de cada palavra**.

Exemplo:
Entrada: O sol brilha e o sol aquece  
Saída:
- o: 2  
- sol: 2  
- brilha: 1  
- aquece: 1

---

##  Estrutura dos arquivos

###  index.html
Responsável pela interface do usuário, contém os campos de entrada, botões e áreas de exibição dos resultados.

Principais elementos:
- Campos de texto para inserir números e frases.  
- Botões que disparam as funções JavaScript.  
- Campos de saída (`input` ou `div`) para mostrar resultados.  

###  etapa2.js

Funções principais:

| Função | Descrição |
|--------|------------|
| FilterNumbers(array) | Recebe um array e retorna apenas os números pares. |
| ShowNumbers(inputId, resultID) | Lê o valor de um campo de entrada, filtra os números pares e exibe o resultado. |
| CountFrequency() | Conta a frequência de palavras em um texto e exibe o resultado em formato de lista. |

---

##  Exemplo de uso

Filtragem de Números:
1. Digite: 42, 17, 89, 5, 73, 31, 96, 23
2. Clique em “Filtrar”
3. Resultado exibido: 42, 96

Contagem de Palavras:
1. Digite: O sol brilha e o sol aquece
2. Clique em “Contar”
3. Resultado exibido:
   o: 2
   sol: 2
   brilha: 1
   aquece: 1
---

##  Como executar o projeto

1. Baixe ambos os arquivos:  
   - index.html  
   - etapa2.js

2. Certifique-se de que ambos estejam na mesma pasta.

3. Abra o arquivo index.html em qualquer navegador moderno.
---

##  Tecnologias utilizadas

- HTML5
- JavaScript
---