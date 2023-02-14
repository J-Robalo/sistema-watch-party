# sistema-watch-party

Com a proposta de projeto recebida, minha primeira ação foi definir um recorte para o que abordaria. Optei por um que contemplasse o segmento de atuação da erural - o agronegócio - com algo com o qual também tivesse uma conexão  pessoa - nessa caso, utilizando um vídeo narrado por meu pai, a partir do canal no qual compartilha seus registros de cavalos de marcha Brasil afora. 

Tendo definido, procurei referências de serviços que utilizassem o “Watch party”, para ter uma melhor compreensão de como era abordado em cada um desses casos. A partir das referências coletadas, defini uma proposta de estética similar àquela aplicada pela Amazon Prime para o compartilhamento de vídeo entre seus usuários.

Antes de partir para a construção do código em si, dediquei um tempo a elaborar - via Figma - os designs de cada tela, de acordo com o que estava imaginando para cada. Seria uma forma de contar com uma referência visual para nortear o projeto, deixando o processo mais intuitivo. Em alguns casos, fiz algumas alterações na hora de traduzir o visual para o código, como reorganizar o texto da página principal, para que não ficasse sob a imagem do cavalo, dificultando a leitura, ou alterando os nomes de alguns elementos da tela. 

Referência da tela principal (criada no Figma):

<img width="654" alt="Captura de Tela 2023-02-13 às 22 33 35" src="https://user-images.githubusercontent.com/91551462/218615723-f41b9eeb-f447-4c9e-9754-f1bb1b88422b.png">

Referência da tela do modal (criada no Figma):

<img width="653" alt="Captura de Tela 2023-02-13 às 22 34 02" src="https://user-images.githubusercontent.com/91551462/218615933-8168b96c-c534-42f9-8bc6-142337b64103.png">

Referência da tela de watch party (criada no Figma):

<img width="654" alt="Captura de Tela 2023-02-13 às 22 34 37" src="https://user-images.githubusercontent.com/91551462/218616003-5e0d4c53-c0d3-458c-a259-6c421233db32.png">


Meu projeto parte de uma tela que faz parte da composição de um site maior - o AgroFlix - espécie de streaming de exibição de vídeos de animais de criadores brasileiros. Essa tela em questão simula um perfil previamente escolhido pelo usuário, que se interessou por acompanhar mais sobre o animal selecionado.

O usuário em questão tem duas opções a seu dispor: ao clicar no botão “Play”, é carregado imediatamente o vídeo do cavalo escolhido, sendo possível assisti-lo em tela cheia. Caso deseje compartilhar essa experiência com outros criadores ou entusiastas, ele pode clicar em “Watch Party”, opção que abrirá um modal no qual será possível definir o nome de uma sala e adentrar na mesma ao clicar no botão “Criar Watch Party”. Ao executar essa ação, o usuário será levado a uma sala no qual o referido vídeo poderá ser carregado para exibição, contando com uma coluna lateral com algumas funções disponíveis.

Ao clicar em uma delas, chamada “Compartilhar link”, a url da sala/vídeo é automaticamente copiada para que seja compartilhada com outros usuários, para que possam acompanhar também o registro que está sendo exibido. 
