# Clone do Netflix

Projeto realizado com ReactJs, para consumir a API do TMDB(The movie database), com o intuito de botar em pratica o conhecimento que fui adiquiridno com o tempo sobre desenvolvimento front-end.

## Estrutura do projeto

Usando React-router-dom, cada rota tem seu componente padrão localizado na pasta pages, que por sua vez requisita de outro sub-componentes que se localizão na pasta components.

![image](https://user-images.githubusercontent.com/95532270/179457229-ad056932-9881-43a7-afbb-493033246140.png)

### Metodo de estilização

Components simples são estilizados no arquivo styles.js referente a sua pasta, estilizado com styled components, classes de uso globais (box-shadow configs etc...) estão localizados no arquivo core.css que é carregado diretamente no arquivo javascript que renderiza todos os outros componentes.  

## Deploy/Acesso ao site sem muito trabalho

Deploy feito no netfly, para acessar e ver como o proejto vai executar em seu dispositivo é só acessar esse link: https://netflix-clone-by-cjr.netlify.app/

## Exibição 

### Home / Modal / Search by genre / Search by query

#### Desktop

![image](https://user-images.githubusercontent.com/95532270/179458591-60d37a74-98c8-459c-bf33-78167fc28fd1.png)
![image](https://user-images.githubusercontent.com/95532270/179458975-c40e8ce2-c935-4b03-a7c9-2a63f3ded968.png)
![image](https://user-images.githubusercontent.com/95532270/179459171-038c942d-9039-4ddf-93b3-a6c21b6da941.png)
![image](https://user-images.githubusercontent.com/95532270/179459381-05c6fc35-b1fa-4b85-851c-45c9bdc1ebbe.png)

#### Mobile

![image](https://user-images.githubusercontent.com/95532270/179458687-5d2c42c2-b780-44ef-85e9-816634b702c7.png)
![image](https://user-images.githubusercontent.com/95532270/179459050-d46ca0e1-3c34-419e-abf9-7952d26e6e1c.png)
![image](https://user-images.githubusercontent.com/95532270/179459234-957bebff-e156-4c13-9bfd-8a83f809a4d3.png)
![image](https://user-images.githubusercontent.com/95532270/179459438-7eaeb00a-cc22-466a-a1d8-329cfc148837.png)

## Metodo para executar o Webapp em sua maquina

* Entre no site https://www.themoviedb.org/documentation/api e faça o pedido da sua API_key
* Na area de trabalho crie uma pasta chamada Netflix-Clone, abra o terminal git bash e execute o comando abaixo 

```git
git clone https://github.com/ClaudioProjects/Netflix-Clone
```

* Abra com o vs code na pasta Netflix-CLone e aperte Crtl + Shift + C para abrir o terminal cmd na pasta onde contem os arquivos clonados e execute o comando abaixo

```node
npm install
```

* Com isso pegue a sua API_key e subistitua pela API_key configurada no arquivo services.js
* Volte ao terminal e execute o comando abaixo e em alguns instantes sua aplicação ira abrir no seu navegador padrão

```node
npm start
```

### Considerações finais

* Esse é um projeto que não visa nenhum fim lucrativo, o objetivo é apenas praticar o conhecimento em react e consumir uma api.

Muito obrigado por quem leu até aqui, este projeto é de livre acesso e sem restrições, qualquer bug entrar em contato pelo email na seção de contato

### Contato 

* Email: claudiodevcontact@gmail.com
