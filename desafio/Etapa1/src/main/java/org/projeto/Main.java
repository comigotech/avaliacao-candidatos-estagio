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

    }
}