# Sistema para alocação de pessoas no bandejão

<h1 align="center"> Sistema para alocação de pessoas no bandejão </h1>

<p align="justify"> Este projeto foi iniciado na disciplina de Tópicos Especiais em Programação de Computadores, ministrada pelo professor D. Sc. Filipe Braida do Carmo. O objetivo é criar uma ideia de sistema e implementar o seu MVP. </p>

POV: São 10 horas da manhã, você está na faculdade no intervalo da aula já pensando no almoço de hoje, hoje é dia de lasanha. Você já fica um pouco desanimado pela fila imensa que vai ter que enfrentar, até porque sua aula termina às 12:00, e quando chegar na fila vai ter que esperar bons 30 minutos até poder comer.


Nosso sistema tem como finalidade resolver o problema das esperas para as refeições no bandejão, alocando um número máximo de pessoas por intervalo de 30 minutos. Consideramos que a capacidade do restaurante é de 100 pessoas. O sistema a ser desenvolvido será de acesso a todos os discentes que estiverem cursando ao menos uma disciplina na UFRRJ. O usuário do sistema terá um login e uma senha. O login do usuário será sempre a sua matrícula e o mesmo poderá escolher a senha ao realizar o cadastro no sistema. Ao logar-se no sistema, o discente escolhe um horário disponível dentre os que são exibidos, indicando que o mesmo pretende realizar uma refeição naquele horário. Os horários disponíveis serão exibidos em intervalos fixos com 30 minutos de diferença entre si, de 11:45 até 13:15, e de 17:00 até 18:00, somente nos dias úteis.

Sempre que o discente selecionar um horário ele será adicionado a uma lista juntamente aos outros que selecionaram o mesmo horário. A reserva pode ser realizada num intervalo de 2 horas antes do horário desejado até 5 minutos antes deste mesmo horário. Quando esta hora chegar, todos os discentes que selecionaram aquele horário receberão uma notificação via push em seus dispositivos. O usuário informa que entrou no restaurante por para iniciar a sua refeição por uma de duas possíveis formas:
- mostrando para um funcionário na entrada, de modo que este identifica aquele discente como estando agora dentro do restaurante
- através de um scan nfc, que fará de modo automático aquilo que o funcionário faria manualmente.

No caso de um atraso de 5 minutos, o discente recebe uma notificação push em seu dispositivo, informando que sua reserva foi cancelada. Do lado de fora do bandejão, um funcionário terá acesso a uma quantidade de vagas que não estão reservadas, podendo deixar discentes adentrarem no restaurante no caso de haver disponibilidade no horário. Sempre que um discente sai do restaurante, ele informa o sistema por uma das mesmas duas formas que informou a sua entrada e uma vaga é disponibilizada.