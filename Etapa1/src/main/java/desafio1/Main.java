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

    public static Object[] inverterArray(Object[] elementos) {
        if (elementos == null) {
            return new Object[0];
        }
        Object[] arrayInvertido = new Object[elementos.length];
        for (int i = 0; i < elementos.length; i++) {
            arrayInvertido[i] = elementos[elementos.length - 1 - i];
        }
        return arrayInvertido;
    }

    public static Object[] rotacionarArray(Object[] array, int n) {
        if (array == null || array.length == 0 || n <= 0 || n >= array.length) {
            return array;
        }
        Object[] resultado = new Object[array.length];

        int indiceResultado = 0;
        for (int i = n; i < array.length; i++) {
            resultado[indiceResultado] = array[i];
            indiceResultado++;
        }
        for (int i = 0; i < n; i++) {
            resultado[indiceResultado] = array[i];
            indiceResultado++;
        }
        return resultado;
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
        System.out.println("\n");

        System.out.println("### Testes da Função: inverterArray ###");
        Integer[] arrayInversao1 = {1, 2, 3, 4, 5};
        System.out.println("Entrada: " + Arrays.toString(arrayInversao1));
        System.out.println("Saída: " + Arrays.toString(inverterArray(arrayInversao1)));
        System.out.println("--------------------");

        String[] arrayInversao2 = {"a", "b", "c"};
        System.out.println("Entrada: " + Arrays.toString(arrayInversao2));
        System.out.println("Saída: " + Arrays.toString(inverterArray(arrayInversao2)));
        System.out.println("--------------------");

        Integer[] arrayInversao3 = {99};
        System.out.println("Entrada: " + Arrays.toString(arrayInversao3));
        System.out.println("Saída: " + Arrays.toString(inverterArray(arrayInversao3)));
        System.out.println("\n");

        System.out.println("### Testes da Função: rotacionarArray ###");
        Integer[] array1 = {1, 2, 3, 4, 5, 6};
        int n1 = 3;
        System.out.println("Entrada: " + Arrays.toString(array1) + ", n = " + n1);
        System.out.println("Saída:   " + Arrays.toString(rotacionarArray(array1, n1)));
        System.out.println("--------------------");

        String[] array2 = {"ProcessoA", "ProcessoB", "ProcessoC", "ProcessoD"};
        int n2 = 1;
        System.out.println("Entrada: " + Arrays.toString(array2) + ", n = " + n2);
        System.out.println("Saída:   " + Arrays.toString(rotacionarArray(array2, n2)));
        System.out.println("--------------------");

        Integer[] array3 = {100, 200, 300, 400, 500};
        int n3 = 4;
        System.out.println("Entrada: " + Arrays.toString(array3) + ", n = " + n3);
        System.out.println("Saída :   " + Arrays.toString(rotacionarArray(array3, n3)));
        System.out.println("--------------------");
    }
}
