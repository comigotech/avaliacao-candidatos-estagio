package desafio1;

import java.util.Arrays;

public class Main {

    public static int somarElementos(int[] numeros) {
        if (numeros == null || numeros.length == 0) {
            return 0;
        }
        int somaTotal = 0;
        for (int numero : numeros) {
            somaTotal += numero;
        }
        return somaTotal;
    }

    public static void main(String[] args) {

        System.out.println("### Testes da Função: somarElementos ###");

        int[] arraySoma1 = {};
        System.out.println("Entrada: " + Arrays.toString(arraySoma1));
        System.out.println("Saída: " + somarElementos(arraySoma1));
        System.out.println("--------------------");

        int[] arraySoma2 = {10, 20, 30};
        System.out.println("Entrada: " + Arrays.toString(arraySoma2));
        System.out.println("Saída: " + somarElementos(arraySoma2));
        System.out.println("--------------------");

        int[] arraySoma3 = {-5, 10, 2, -1};
        System.out.println("Entrada: " + Arrays.toString(arraySoma3));
        System.out.println("Saída: " + somarElementos(arraySoma3));
    }
}
