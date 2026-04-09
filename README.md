# 🏥 Sistema de Perfil da Saúde (IMC e BSA)

Uma aplicação web interativa que realiza análise completa do perfil de saúde de uma pessoa, calculando o **Índice de Massa Corporal (IMC)** e a **Área da Superfície Corporal (BSA)**.

## 📋 Sobre o Projeto

Este sistema foi desenvolvido para fornecer uma análise rápida e visual das métricas de saúde baseada nas informações pessoais do usuário. A aplicação processa dados como nome, idade, altura e peso, gerando uma classificação de IMC com feedback visual através de cores e fornecendo o valor do BSA.
Eu converti a Lógica em Python para a Lógica com JavaScript para criar a interface um método tradicional dos programadores por mais que exista como fazer um site em python decidir não usar nenhum tipo de Framework apenas a conversão das Lógicas mas o arquivo Sistema de Perfil.py é a lógica inteira em python rodando no terminal.

### ✨ Funcionalidades

- ✅ **Cálculo de IMC** - Índice de Massa Corporal com classificação automática
- ✅ **Cálculo de BSA** - Área da Superfície Corporal baseada na fórmula de Mosteller
- ✅ **Análise de Dados** - Processamento e exibição de informações pessoais
- ✅ **Manipulação de Strings** - Análise de nomes (maiúsculas, minúsculas, fatiamento)
- ✅ **Feedback Visual** - Classificação de IMC com cores indicativas
- ✅ **Interface Responsiva** - Funciona em diversos tamanhos de tela
- ✅ **Validação de Entrada** - Campos com validação de tipo e intervalo

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura e semântica
- **CSS3** - Estilos responsivos com gradientes e animações
- **JavaScript (Vanilla)** - Lógica de processamento de dados
- **Python** - Versão original da aplicação (referência)

## 📊 Classificação de IMC

| Classificação | Intervalo (Kg/m²) |
|---|---|
| Baixo Peso | < 18.5 |
| Peso Normal | 18.5 - 24.99 |
| Sobrepeso | 25.0 - 29.99 |
| Obesidade Grau I | 30.0 - 34.9 |
| Obesidade Severa (Grau II) | 35.0 - 39.9 |
| Obesidade Mórbida (Grau III) | ≥ 40.0 |

## 🚀 Como Usar

### Pré-requisitos
- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Sem necessidade de instalação adicional

### Passos para Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Abra o arquivo `index.HTML`:**
   - Duplo clique em `index.HTML` para abrir no navegador padrão
   - Ou arraste o arquivo para o navegador
   - Ou use a opção "Abrir arquivo" no navegador

3. **Preencha o formulário:**
   - Digite seu nome completo
   - Insira sua idade (1 - 120anos)
   - Informe sua altura em metros (1 -2.3m)
   - Informe seu peso em quilos (30 - 450 kg)

4. **Clique em "Analisar Perfil"**
   - Os resultados serão exibidos de forma visual e interativa

5. **Faça um novo cálculo:**
   - Clique em "Novo Cálculo" para voltar ao formulário

## 📁 Estrutura de Arquivos

```
União Back-End + Front-End/
├── index.HTML          # Estrutura e formulário da aplicação
├── lógica.js          # Lógica de cálculos e processamento
├── script.css         # Estilos e design responsivo
└── README.md          # Este arquivo
```

## 🎨 Interface

A aplicação possui:
- **Formulário Intuitivo** - Layout limpo com validação em tempo real
- **Resultados Organizados** - Informações agrupadas por categoria
- **Código de Cores** - Verde (saudável), Amarelo (sobrepeso), Vermelho (obesidade)
- **Animações Suaves** - Transições elegantes entre formulário e resultados
- **Design Responsivo** - Adaptado para mobile, tablet e desktop

## 📐 Fórmulas Utilizadas

### Índice de Massa Corporal (IMC)
```
IMC = peso (kg) / altura (m)²
```

### Área da Superfície Corporal (BSA) - Fórmula de Mosteller
```
BSA = √[(altura em cm × peso em kg) / 3600]
```

## 🔧 Funcionalidades JavaScript

- **Validação de Entrada** - Impedimento de notação científica em campos numéricos
- **Análise de Strings** - Contagem de letras, transformação de caso, fatiamento
- **Cálculos Matemáticos** - Operadores aritméticos e precedência
- **Manipulação do DOM** - Atualização dinâmica de elementos
- **Event Listeners** - Resposta a eventos do formulário

## 📱 Compatibilidade

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## 💡 Exemplos de Uso

### Entrada Exemplo 1:
- Nome: João Silva
- Idade: 30 anos
- Altura: 1.75m
- Peso: 75kg
- **Resultado:** IMC = 24.49 (Peso Normal)

### Entrada Exemplo 2:
- Nome: Maria Santos
- Idade: 25 anos
- Altura: 1.60m
- Peso: 85kg
- **Resultado:** IMC = 33.20 (Obesidade Grau I)

## 📚 Conceitos Educacionais

Este projeto demonstra:
- Tipos de dados primitivos (string, number, boolean)
- Operadores aritméticos e de precedência
- Estruturas condicionais (if/else)
- Manipulação e fatiamento de strings
- Cálculos matemáticos
- Validação de entrada
- Manipulação do DOM com JavaScript
- Styling responsivo com CSS3

## 🎓 Versão Python

O projeto também possui uma versão em Python (`Sistema de Perfil.py`) que implementa a mesma lógica com interface em terminal.

## 🐛 Tratamento de Erros

A aplicação valida:
- ✅ Campos obrigatórios preenchidos
- ✅ Ranges válidos de valores
- ✅ Previne notação científica em inputs numéricos
- ✅ Mensagens de erro claras ao usuário

## 🚀 Melhorias Futuras

- [ ] Backend com armazenamento de histórico
- [ ] Gráficos e estatísticas de progresso
- [ ] Exportar resultados em PDF
- [ ] Sistema de login e perfil
- [ ] API integrada com dados de saúde
- [ ] Modo dark/light
- [ ] Suporte para múltiplos idiomas

## 📝 Licença

Este projeto é aberto e pode ser utilizado livremente para fins educacionais e pessoais.

## 👨‍💻 Autor

**Sistema de Perfil da Saúde**  
Desenvolvido como projeto educacional para aprendizado de:
- Desenvolvimento Full-Stack
- Concessão entre Back-End e Front-End
- Lógica de programação

## 📧 Contato

Para dúvidas, sugestões ou reportar problemas, entre em contato ou abra uma issue no repositório.

---
