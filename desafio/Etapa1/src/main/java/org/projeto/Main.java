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

    }
}