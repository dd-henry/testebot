import os

def processar_escolha(opcao, nome):
    if opcao == '1':
        print(f'{nome}, você escolheu Sorvete.')
        sabor = input(f'Escolha o sabor: {os.linesep}[1] - Sorvete de Chocolate{os.linesep}[2] - Sorvete de Morango{os.linesep}Digite a sua escolha: ')
        if sabor == '1':
            print(f'{nome}, você escolheu Sorvete de Chocolate.')
            print(f'quer calda extra?')
            calda = input(f'[1] - sim [2] - não')
            if calda == '1':
                print(f'ebaaaa')
        elif sabor == '2':
            print(f'{nome}, você escolheu Sorvete de Morango.')
        else:
            print(f'{nome}, escolha inválida. Tente novamente.')
    elif opcao == '2':
        print(f'{nome}, você escolheu Algodão Doce.')
        tamanho = input(f'Escolha o tamanho: {os.linesep}[1] - Grande{os.linesep}[2] - Pequeno{os.linesep}Digite a sua escolha: ')
        if tamanho == '1':
            print(f'{nome}, você escolheu Algodão Doce Grande.')
        elif tamanho == '2':
            print(f'{nome}, você escolheu Algodão Doce Pequeno.')
        else:
            print(f'{nome}, escolha inválida. Tente novamente.')
    else:
        print(f'{nome}, escolha inválida. Tente novamente.')

def start():
    # Apresentar o chatbot
    print('Olá! Bem-vindo ao nosso chatbot de escolhas.')
    # pedir o nome
    nome = input('Digite seu nome: ')
    
    while True:
        # Oferecer o menu de opções
        opcao = input(f'{os.linesep}{nome}, o que você gostaria de escolher hoje?{os.linesep}[1] - Sorvete{os.linesep}[2] - Algodão Doce{os.linesep}Digite a sua escolha: ')
        # Processar a escolha enviada
        processar_escolha(opcao, nome)
        
        # Perguntar se deseja continuar
        continuar = input(f'{os.linesep}{nome}, você deseja continuar pedindo? (Digite "sim" para continuar ou qualquer outra tecla para sair): ').strip().lower()
        if continuar != 'sim':
            print(f'Obrigado, {nome}, por usar nosso chatbot. Até a próxima!')
            break

if __name__ == '__main__':
    start()
