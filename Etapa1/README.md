# 🧩 Etapa 1 - Resolução de Problemas (Lógica de Programação)

## 🎯 Objetivo
Resolver três desafios de lógica de programação utilizando **Java**, com foco em manipulação de arrays e boas práticas de estrutura de código.

---

## 🧠 Desafios

1. **Somar elementos de um array**  
   > Implemente uma função que receba um array de números e retorne a soma dos elementos.

2. **Inverter um array**  
   > Implemente uma função que receba como parâmetro um array de elementos e retorne um novo array com os elementos invertidos.

3. **Rotacionar um array**  
   > Dado um array de números, crie uma função que receba esse array e um número `n` como parâmetros.  
   O código deve pegar os `n` primeiros números do array, removê-los e concatená-los ao final.

---

## 💻 Tecnologias utilizadas
- **Linguagem:** Java  
- **Versão utilizada:** Java 21  
- **Gerenciador de dependências:** Maven  
- **IDE recomendada:** IntelliJ IDEA / Eclipse / VS Code  
- **Compilador:** `javac` (compilador padrão do JDK)

---

## ⚙️ Como executar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/FcesarBzSilva/FernandoCesar.git
   ```

2. **Acesse o diretório do projeto**
   ```bash
   cd Etapa1
   ```

3. **Compile e execute com Maven**
   ```bash
   mvn compile exec:java -Dexec.mainClass="desafio1.Main"
   ```

   > 💡 Caso o plugin `exec-maven-plugin` não esteja configurado no `pom.xml`, você pode rodar manualmente:
   ```bash
   javac src/main/java/desafio1/Main.java -d target/classes
   java -cp target/classes desafio1.Main
   ```

---

## 🧩 Estrutura do projeto (Maven)

```
📂 Etapa1/
 ┣ 📂 .idea/
 ┣ 📂 .mvn/
 ┣ 📂 src/
 │  ┣ 📂 main/
 │  │  ┣ 📂 java/desafio1/
 │  │  │  ┗ 📜 Main.java
 │  │  ┗ 📂 resources/
 │  ┗ 📂 test/java/
 ┣ 📜 pom.xml
 ┗ 📜 README.md
```

---

## 🔍 Descrição das Funções

### 1. `somarElementos(int[] numeros)`
Recebe um array de inteiros e retorna a soma total dos elementos.

**Exemplo de uso:**
```java
int[] numeros = {10, 20, 30};
System.out.println(somarElementos(numeros)); // Saída: 60
```

---

### 2. `inverterArray(Object[] elementos)`
Recebe um array de objetos e retorna um novo array com a ordem dos elementos invertida.

**Exemplo de uso:**
```java
String[] letras = {"A", "B", "C"};
System.out.println(Arrays.toString(inverterArray(letras))); // Saída: [C, B, A]
```

---

### 3. `rotacionarArray(Object[] array, int n)`
Recebe um array e um número `n`. Move os `n` primeiros elementos para o final do array, preservando a ordem dos demais.

**Exemplo de uso:**
```java
Integer[] numeros = {1, 2, 3, 4, 5, 6};
System.out.println(Arrays.toString(rotacionarArray(numeros, 3)));
// Saída: [4, 5, 6, 1, 2, 3]
```

---

## 🧪 Casos de Teste
O método `main` contém diversos testes cobrindo:
- Arrays vazios  
- Arrays de tipos diferentes (`Integer`, `String`)  
- Arrays com um único elemento  
- Diferentes valores de `n` na rotação  

---

## 🧾 Autor
**Fernando Cesar**  
💼 Estudante de Desenvolvimento Full-stack
