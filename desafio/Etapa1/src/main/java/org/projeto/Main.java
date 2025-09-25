package org.projeto;

import java.util.Arrays;

public class Main {

    public static int somaArray(int[] array) {
        int soma = 0;
        for (int num : array) {
            soma += num;
        }
        return soma;
    }

    public static int[] inverteArray(int[] array) {
        int[] invertido = new int[array.length];
        for (int i = 0; i < array.length; i++) {
            invertido[i] = array[array.length - 1 - i];
        }
        return invertido;
    }

    public static int[] moveElementos(int[] array, int n) {

        if (array == null || array.length == 0) {
            return new int[0];
        }

        n = n % array.length;
        if (n == 0) {
            return array.clone(); // Retorna cópia do array original
        }

        int[] resultado = new int[array.length];

        for (int i = 0; i < array.length - n; i++) {
            resultado[i] = array[i + n];
        }
        
        for (int i = 0; i < n; i++) {
            resultado[array.length - n + i] = array[i];
        }

        return resultado;
    }

    public static void main(String[] args) {

        System.out.println("=== TESTE DA FUNÇÃO SOMA ARRAY ===\n");

        int[] teste1 = {1, 2, 3, 4, 5};
        System.out.println("Array: " + Arrays.toString(teste1));
        System.out.println("Soma: " + somaArray(teste1));
        System.out.println("Resultado esperado: 15");
        System.out.println();

        int[] teste2 = {10, 20, 30};
        System.out.println("Array: " + Arrays.toString(teste2));
        System.out.println("Soma: " + somaArray(teste2));
        System.out.println("Resultado esperado: 60");
        System.out.println();

        int[] teste3 = {-1, 0, 1};
        System.out.println("Array: " + Arrays.toString(teste3));
        System.out.println("Soma: " + somaArray(teste3));
        System.out.println("Resultado esperado: 0");
        System.out.println();

        int[] teste4 = {};
        System.out.println("Array: " + Arrays.toString(teste4));
        System.out.println("Soma: " + somaArray(teste4));
        System.out.println("Resultado esperado: 0");

        System.out.println();
        System.out.println("2. TESTE INVERTE ARRAY:");
        int[] array1 = {1, 2, 3, 4, 5};
        System.out.println("Original: " + Arrays.toString(array1));
        System.out.println("Invertido: " + Arrays.toString(inverteArray(array1)));
        System.out.println("Resultado esperado: [5, 4, 3, 2, 1]\n");

        int[] array2 = {10, 20, 30, 40};
        System.out.println("Original: " + Arrays.toString(array2));
        System.out.println("Invertido: " + Arrays.toString(inverteArray(array2)));
        System.out.println("Resultado esperado: [40, 30, 20, 10]\n");

        int[] array3 = {5};
        System.out.println("Original: " + Arrays.toString(array3));
        System.out.println("Invertido: " + Arrays.toString(inverteArray(array3)));
        System.out.println("Resultado esperado: [5]\n");

        int[] array4 = {};
        System.out.println("Original: " + Arrays.toString(array4));
        System.out.println("Invertido: " + Arrays.toString(inverteArray(array4)));
        System.out.println("Resultado esperado: []");

        System.out.println();
        System.out.println("\n3. DESAFIO - FUNÇÃO MOVE ELEMENTOS:");

        int[] original1 = {1, 2, 3, 4, 5};
        System.out.println("Original: " + Arrays.toString(original1));
        System.out.println("n=2: " + Arrays.toString(moveElementos(original1, 2)) + " (esperado: [3, 4, 5, 1, 2])");

        System.out.println("n=3: " + Arrays.toString(moveElementos(original1, 3)) + " (esperado: [4, 5, 1, 2, 3])");

        System.out.println("n=0: " + Arrays.toString(moveElementos(original1, 0)) + " (esperado: [1, 2, 3, 4, 5])");

        System.out.println("n=10: " + Arrays.toString(moveElementos(original1, 10)) + " (n > tamanho, esperado: [1, 2, 3, 4, 5])");

        int[] original2 = {10, 20, 30};
        System.out.println("\nOriginal: " + Arrays.toString(original2));
        System.out.println("n=1: " + Arrays.toString(moveElementos(original2, 1)) + " (esperado: [20, 30, 10])");

        int[] vazio = {};
        System.out.println("\nArray vazio: " + Arrays.toString(vazio));
        System.out.println("n=2: " + Arrays.toString(moveElementos(vazio, 2)) + " (esperado: [])");

        System.out.println("n=5: " + Arrays.toString(moveElementos(original1, 5)) + " (n = tamanho, esperado: [1, 2, 3, 4, 5])");

    }
}