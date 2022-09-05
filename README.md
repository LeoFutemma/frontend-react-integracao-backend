![](https://i.imgur.com/xG74tOh.png)

# Integração com backend

:pencil2: Exercício (originalmente desenvolvido em 15 de Agosto de 2022) <br>
Exercício proposto pela [Cubos Academy](https://cubos.academy/sucesso), tem como objetivo realizar a integração entre o frontend e o backend (com uma API já pronta) utilizando Axios.

:desktop_computer: Tecnologias usadas
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React](https://pt-br.reactjs.org/)
- [React Router](https://reactrouter.com/en/main/getting-started/concepts)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

## Exercícios de classe 🏫

1. **Exercício 1** - 

    O exercício 1 é basicamente consiste em criar uma tela de cadastro de usuário, onde apenas **nome e email**, serão usados para o cadastro. Ao cadastrar um novo usuário, esse usuário precisará ser exibido dentro do quadrado de **Users**.
        
    O que você precisa fazer:
    - Instalar axios
    - Criar a configuração inicial do axios
    - Criar a integração com dois end-points
        - Integrar com o end-point (api) de cadastro de usuário **(POST)**
        - Integrar com o end-point (api) de listagem de usuários **(GET)**


    **Documentação da MINI API**
    
    - Rota de listar usuários **GET em http://localhost:3334/users**, Esse end-point trás uma lista de usuários no seguinte formato:
        ```json
            [
              {
                "name": "Daniel",
                "email": "danieldeandradelopes@gmail.com",
                "id": 1
              },
              {
                "name": "João",
                "email": "joao@gmail.com",
                "id": 2
              }
            ]
        ```
        
    - Rota de cadastrar um usuário **POST em http://localhost:3334/users**, para cadastrar um usuário você precisa fazer uma requisição com um body (informações a serem enviadas para a API) no seguinte formato:
        ```json            
              {
                "name": "José Lopes",
                "email": "joselopes@gmail.com",
                "password":"lopes32145"
              }
        ```

                
        <br/>
        O layout a ser desenvolvido é básico e por isso não possuí figma:
        
        ![](https://i.imgur.com/YsYM9ds.png)


---


2. **Exercício 2** - 

    O exercício 2 é basicamente realizar a integração de **login** de um usuário, além de criar a estrutura de validação de rotas públicas e privadas no frontend, ou seja, dentro do arquivo `routes.js` fazer com que a função `ProtectedRoutes` valide o token que deve ser armazenado assim que o usuário realizar o login.
    
     O que você precisa fazer:
    - Instalar axios
    - Criar a configuração inicial do axios
    - Criar a integração com um end-point
        - Integrar com o end-point (api) de login de usuário **(POST)**
    - Salvar o token no localStorage
    - Enquanto o token existir o usuário não deve conseguir voltar para a página de login
    - Validar o token dentro da função de `ProtectedRoutes`
    - Após o login ser executado, redirecionar o usuário para a página **MAIN**
    
    </br>
    
    O link da API que você irá usar é: 
    [https://public-profile-cubos.herokuapp.com](https://public-profile-cubos.herokuapp.com)
    
    
    Você irá usar um end-point (rotas) dessa api, apenas do de `/login`
    
    </br>
    
    **Documentação da MINI API**
    
     - Rota de login é um **POST em https://public-profile-cubos.herokuapp.com/login**, para realizar o login você deverá enviar um body (informações a serem enviadas para a API na requisição), no seguinte formato:
        ```json            
              {                
                "email": "joselopes@gmail.com",
                "password":"lopes32145"
              }
        ```
        
    - Assim que você efetuar o login e a API retornar com sucesso, os dados que virão no `response.data`, estarão no seguinte formato:
        
        ```json            
             {
              "user": {
                "id": "31ede891-c6ab-4ad8-84d3-f5f5710edc4b",
                "name": "Daniel Loeps",
                "email": "danieldeandradelopes@gmail.com",
                "linkedIn": "https://www.linkedin.com/in/danieldeandradelopes/",
                "github": "https://github.com/danieldeandradelopes/",
                "avatar": "https://media-exp1.licdn.com/dms/image/C5603AQEo8ZSOFGaUZg/profile-displayphoto-shrink_800_800/0/1615557942847?e=1653523200&v=beta&t=VNnnRyqVodFB_4Rrbzp3o9BnwyiDu-mDvngA0b9OrPs",
                "profileName": "danieldeandradelopes",
                "bio": "asdfasdfasdfasfasçdlkfjpqoiweurpoicçaslkdjfasdfasdfasdfasfasçdlkfjpqoiweurpoicçaslkdjfasdfasdfasdfasfasçdlkfjpqoiweurpoicçaslkdjf"
              },
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMxZWRlODkxLWM2YWItNGFkOC04NGQzLWY1ZjU3MTBlZGM0YiIsImVtYWlsIjoiZGFuaWVsZGVhbmRyYWRlbG9wZXNAZ21haWwuY29tIiwiaWF0IjoxNjQ4NTIxNjc5LCJleHAiOjE2NDg2MDgwNzl9.oDwFOMXCZ3EfvccGDxyDIDdL22kEQjHDYQd7EwwtlNU"
            }
        ```


    O layout a ser desenvolvido é básico e por isso não possui figma:

    ![](https://i.imgur.com/5KfS0ie.png)


---

Obs.: Em caso de dúvidas, lembre-se de assistir os vídeos de orientação.

---

Preencha a checklist para fazer os exercícios:

-   [ ] Fazer o fork do repositório para sua conta
-   [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
-   [ ] Após fazer e commitar todos os exercícios fazer o `git push` para seu fork
-   [ ] Copiar a url do seu fork e enviar na plataforma

###### tags: `módulo 3` `front-end` `React`

