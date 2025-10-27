## Funcionalidades

O programa permite:

1. **Somar** todos os números de uma lista.  
2. **Inverter** a ordem dos elementos.  
3. **Concatenar** os elementos de forma circular, deslocando os primeiros `n` elementos para o final da lista.
---

##  Como usar

### 1. Executar o programa
Execute o arquivo Python em um terminal:

```bash
python main.py
```

### 2. Inserir os valores
O programa pedirá uma lista de inteiros separados por espaço:

```
Enter a list of integers separated by spaces for the custom array:
```

Por exemplo:
```
1 2 3 4 5
```

### 3. Resultados exibidos
O script mostrará:

- A soma dos elementos da lista inserida.
- A soma de listas padrão (`[2, 34, 6, 12, 64, 444]` e `[1, 2, 3, 4, 5]`).
- A lista invertida.
- O resultado da concatenação personalizada (com rotação circular).

---

## Exemplo de uso

### Entrada:
```
Enter a list of integers separated by spaces for the custom array: 
10 20 30 40 50
```

```
Enter an integer for custom concatenation.: 
2
```

### Saída:
```
--------------------------------------------------
the sum of the numbers in the custom array is equal to 150
The sum of the default array [2, 34, 6, 12, 64, 444] is equal to: 562
The sum of the default array [1, 2, 3, 4, 5] is equal to: 15
--------------------------------------------------
the array with the inverted values: [50, 40, 30, 20, 10]
The inversion of the values in the default array [2, 34, 6, 12, 64, 444] is: [444, 64, 12, 6, 34, 2]
The inversion of the values in the default array [1, 2, 3, 4, 5] is: [5, 4, 3, 2, 1]
--------------------------------------------------
Enter an integer for custom concatenation.: 2
The concatenation of 2 values of the custom Array is: [30, 40, 50, 10, 20]
The concatenation of 2 values of the default Array [2, 34, 6, 12, 64, 444] is: [6, 12, 64, 444, 2, 34]
The concatenation of 4 values of the default Array [1, 2, 3, 4, 5] is: [4, 5, 1, 2, 3]
--------------------------------------------------
```
---

##  Estrutura do código

| Função | Descrição |
|--------|------------|
| `separation()` | Imprime uma linha separadora  |
| `soma(num)` | Retorna a soma dos valores em uma lista |
| `invert(num)` | Retorna a lista invertida |
| `concatenation(arr, quant)` | Rotaciona a lista `arr` em `quant` posições circulares |
---

##  Requisitos

- Python 3.7 ou superior  
---

