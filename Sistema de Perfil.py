# Sistema de Análise de Perfil com Interface em Terminal (Python) usando IMC e BSA
# Indice de Massa Corporal (IMC)
# Área da Superfície Corporal (BSA)

# Bibliotecas usadas: math, time
from time import sleep
from math import sqrt

# Variáveis usando os tipos primitivos junto com a entrada dos dados para o usuário
nameuser = str(input("\nDigite seu nome completo: ")).strip()
age = int(input("Digite a sua idade: "))
altura = float(input("Digite a sua altura em (metros): "))
peso = float(input("Digite o quanto você pesa em (Kg): "))
separado = nameuser.split()
alturacm = altura*100

# Variáveis para as cores no terminal de um jeito mais organizado
verde = "\033[1;32m"
vermelho = "\033[1;31m"
magenta = "\033[1;34m"
amarelo = "\033[1;33m"
ciano = "\033[1;36m"
reset_fim = "\033[0m"

# Variáveis para o cálculo e análise das condições
# Ordem de Precedência mais os Operadores Aritméticos
imc = peso / (altura**2)
bsa = sqrt((alturacm*peso) / 3600)

# Estética no Terminal usando as cores e uns símbolos
print(f"{magenta}-=-"*25)
print("      SISTEMA DE PERFIL DA SAÚDE (IMC) (BSA)")
print("-=-"*25 + reset_fim)

# A saída dos dados junto com a exibição na tela do terminal 
print (f"\nPrazer em te conhecer {nameuser}!")
print (f"Você tem {age} anos")
print (f"Você tem {altura:.2f} metros")
print (f"Você pesa {peso} quilos\n")

# print ("-=-"*30)
print (f"O seu nome em maiúsculo {nameuser.upper()}")
print (f"O seu nome em minúsculo {nameuser.lower()}")
# print ("-=-"*30)

# Fatiamento das Strings junto com o conceito de indexação
print (f"\nA quantidade de letras em seu nome é igual a {len(nameuser)-nameuser.count(" ")} letras")
print (f"Seu primeiro nome é {separado[0]} e ele tem {len(separado[0])} letras\n")
 
print (f"As 3 primeiras letras do seu nome é => {nameuser[:3]}")
print (f"As 4 últimas letras dos nomes é => {nameuser[-4:]}")

# Estética no terminal cores e simbolos

print ("\nAnalisando os valores...\n")
sleep (2)

print(f"\n{amarelo}=== RESULTADO ==={reset_fim}")

# Condicionais

if imc < 18.5:
    print (f"\n{vermelho}Baixo Peso{reset_fim}")
elif imc > 18.5 and imc < 24.99:
    print (f"\n{verde}Peso Normal{reset_fim}\n")
elif imc > 24.99 and imc < 29.99:
    print (f"\n{amarelo}Sobrepeso{reset_fim}")
elif imc > 29.99 and imc < 34.9:
    print (f"{vermelho}Obesidade Grau I{reset_fim}")
elif imc > 34.9 and imc < 39.9:
    print (f"{vermelho}Obesidade Severa (Grau II){reset_fim}")
elif imc > 39.9 and imc > 40:
    print (f"{vermelho}Obesidade Mórbida (Grau III){reset_fim}")

print (f"\nO valor do seu BSA é {bsa:.2f}(m²)")
print (f"O valor do seu IMC é {imc:.2f}(Kg/m²)\n")

print(f"\n{ciano}Programa finalizado 🚀{reset_fim}")