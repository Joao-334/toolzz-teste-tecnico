# Teste Tecnico Toolzz

<p stylee="text-align: center; font-size: 14px">Este projeto foi desenvolvido para o teste tecnico da Toolzz, se tratando de uma página de Login com um backend simples em Laravel, a SPA foi desenvolvida usando ReactJs (Vite e Typescript)
</p>

<h2>Tecnologias Utilizadas:</h2>

<div style="display: inline-block">
<img width="45" height="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
<img width="45" height="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
<img width="45" height="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
<img width="45" height="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />        
<img width="45" height="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
<img width="45" height="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
<img width="45" height="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
</div>

<h2>Executando o projeto:</h2>

<p stylee="text-align: center; font-size: 14px">Logo abaixo você encontra os comandos nescessários para executar o projeto, como também o guia de rotas da aplicação backend</p>

```bash

#Apos clonar o repositorio...

cd backend

composer install # se não funcionar, use composer update

php artisan serve

# Em outro terminal, digite os comandos abaixo

cd frontend

npm install

npm run dev

```

<p stylee="text-align: center; font-size: 14px">Com estes comandos, você podera executar a aplicação na sua propria máquina, funcionando localmente.</p>

<h2>Rotas da API:</h2>

<p stylee="text-align: center; font-size: 14px">/api/login - Esta rota recebe o usernam e o password informado pelo frontend e compara com um mock predefinido (conforme pedido pelo teste), se sua senha e usuario forem correspondentes, retorna autorizado com status 200, caso contrario, retorna falha com código 401 (Unauthorized)</p>

<p stylee="text-align: center; font-size: 14px">O frontend recebe essa resposta, devolvendo ao usuário uma flash message de acordo com o retorno da API.</p>


<h2>Deploy do Projeto:</h2>

<p stylee="text-align: center; font-size: 14px">Segue o link da aplicação funcionando, não foi possivel fazer o deploy da API, portanto, a funcionalidade de login não estará funcionando devidamente na versão informada abaixo.</p>

-  Link Da Página - [Aqui](https://toolzz-teste-tecnico.vercel.app)