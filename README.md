# ecomm

Projeto de Ecommerce criando durante o programa LevelUp da Alura

----------------------------------------
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
