# Funcionalidades

## Criação da conta
 [ * ] O usuário deve fornecer o nome, email e senha para a criação da conta
 [ * ] Apos a criação da conta os dados do usuário deveram ser salvos em um banco mysql contendo:
    - id -> UUID
    - name -> Nome do usuário
    - email -> email do usuário (identificador único)
    - senha -> Senha do usuário
 [  ] Apos a criação da conta deve ser atrelado uma token JWT para a autenticação do usuário
 [  ] Encriptar a senha o bcriptyJS para gerar o hash da senha

## Criação de tarefas
[  ] O usuário devera poder criar uma tarefa contendo:
    - título -> titulo da tarefa com no máximo 25 caracteres, o titulo deverá ser único, se o usuário tentar cadastrar novamente o mesmo titulo informe a ele que aquele titulo ja existe
    - descrição -> descrição da tarefa com no máximo 256 caracteres
    - data de vencimento (opcional) -> data de vencimento da tarefa, devera ser salvo no banco de dados no formato **UTC**
    - Prioridade -> Prioridade de realização daquela determinada tarefa A,B ou C (Método ABC)
    - Status -> Status da tarefa (Não iniciada, Em andamento, Finalizada)
[  ] O usuário deve poder listar todas as tarefas que pertencem a ele, e ele não poderá ver as tarefas de outros usuários
[  ] Devera poder buscar uma tarefa pelo título(identificador único)
[  ] Atualizar um tarefa (título, descrição, data de vencimento, prioridade, status)
[  ] O usuário deve poder excluir um tarefa que pertença a ele, e não poderá excluir uma tarefa que não pertença a ele