def soma_array(lista):
    return sum(lista)

def inverte_array(lista):
    return list(reversed(lista))

def manipula_array(lista, n):
    nova_lista = lista[n:]
    nova_lista += lista[:n]
    return nova_lista

lista1 = [85, 21, 47, 33, 54, 101]
lista2 = [2, -4, 25, -84, 65, 19, 3, 9]
lista3 = [44, -233, 454, -121, 101, 313, -70, 15]

n = 2

# Arrays originais
print('Arrays originais')
print('-' * 40)
print(lista1)
print(lista2)
print(lista3)
print('-' * 40)

# Chamadas da função soma_array
print('Soma dos elementos do array')
print('-' * 40)
print(soma_array(lista1))
print(soma_array(lista2))
print(soma_array(lista3))
print('-' * 40)

# Chamadas da função inverte_array
print('Array invertido')
print('-' * 40)
print(inverte_array(lista1))
print(inverte_array(lista2))
print(inverte_array(lista3))
print('-' * 40)

# Chamadas da função manipula_array
print('Array modificado (n elementos removidos\ndo ínicio e concatenados no final)')
print('-' * 40)
print(manipula_array(lista1, n))
print(manipula_array(lista2, n))
print(manipula_array(lista3, n))
