# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura

------------------------------------------

# The Twelve-Factors App

A aplicação doze-fatores é uma metodologia para construir softwares como serviço

## I. Base de Código
"Uma mesma base de código com ratreamento utilizando controle de revisão, muitos deploys"

O projeto utiliza o Git para o versionamento de código e tem um repositório no Github que mantém o código base

## II. Dependências
"Declare e isole explicitamente as dependências"

Foi utilizado o NPM para o gerenciamento das dependências em cada serviço, garantindo assim que as mesmas permaneçam isoladas

## III. Configurações
"Armazene as configurações no ambiente"

Foram utilizadas variáveis de ambientes contidas nos arquivos .env suportados pela lib dotenv
Obs: ainda não foi aplicado em todos os serviços

## IV. Serviços de Apoio
"Trate serviços de apoio como recursos anexados"

No projeto foram utilizadas ORM, ODM e configurações através de url, com todos os dados dos bancos de dados sendo salvos em containers individuais

## V. Construa, Lance, Execute
"Separe estritamente os estágios de construção e execução"

Ainda não foi implementado no projeto

## VI. Processos
"Execute a aplicação como um ou mais processos que não armazenam estado"

Os dados necessários são salvos nos bancos de dados utilizados, não armazenando estados

## VII. Vínculo de Porta
"Exporte serviços via vínculo de portas"

A aplicação é independente e autocontida, todas as portas estão explicitamente expostas e a comunicação entre serviços se dá por meio delas.

## VIII. Concorrência
"Escale através do processo modelo"

A aplicação não é monolítica o que garante a possibilidade de escalonamento

## IX. Descartabilidade
"Maximize robustez com inicialização rápida e desligamento gracioso"

O uso do Docker garante para a aplicação a possibilidade de desligamento e inicialização de forma rápida.

## X. Paridade entre Desenvolvimento e Produção
"Mantenha o desenvolvimento, homologação e produção o mais similares possível"

Ainda não foi implementado no projeto

## XI. Logs
"Trate logs como fluxos de eventos"

Ainda não foi implementado no projeto

## XII. Processos Administrativos
"Rode tarefas de administração/gestão em processos pontuais"

Ainda não foi implementado no projeto

------------------------------------------

# Microservices

Microsserviços são pequenos pedaços de uma aplicação maior, cada um desses pedaços tem uma responsabilidade muito bem definida.

## Patterns
### Serviços de Domínio
A aplicação está dividida em alguns pequenos contextos específicos e utiliza o padão API REST nos serviços

### Serviços de Negócios
Algumas operações possuem interações com mais de um domínio

### API Gateway
Ainda não foi implementado no projeto

### Agregador de Processos
Possui algumas operações que precisam interagir com mais de um domínio
### Edge Service
Ainda não foi implementado no projeto

### Single Database vs. Bancos Diferentes
Foram utilizados múltiplos bancos de dados

### Eventos Assíncronos
Foram utilizados eventos síncronos

### Agregação de Logs
Ainda não foi implementado no projeto

### Agregação de Métricas
Ainda não foi implementado no projeto

## Aspectos
### Padronização das Stacks
Todos os serviços foram desenvolvidos utilizando JavaScript respeitando a padronização da linguagem

### Solução para Service Discovery
Esse serviço localiza redes automaticamente e integra tudo através de uma linguagem em comum na rede de comunicação, podemos utilizar load balancers ou pods do Kubernetes

### Aspectos de Segurança
Foi aplicado nos serviços o uso de token JWT e criptografia de senha utilizando hash para salvá-las no banco

### Tecnologias para Deploy e Build
Realizar testes e verificar o estilo de código de acordo com a linguagem utilizada são importantes em um processo de build, na aplicação foram utilizadas o Jest e o ESLint respectivamente.
Para o deploy precisamos de uma pipeline, que é um fluxo de trabalho que torna o deploy possível, para isso poderiamos utilizar o GitHub Actions, o Travis CI ou o Jenkins

### Tolerância a Falhas em Aplicações Síncronas
A aplicação é síncrona portanto as mais indicadas são o circuit breaker e o cache pois poupam o servidor de sofrer sobrecargas

## Comunicação Assíncrona
Usamos a comunicação assíncrona quando um serviço necessita de outro para retornar uma resposta. Pode ser usada entre o finance e o order, quando um cliente realizar um pagamento uma ordem é gerada para que a encomenda seja enviada
