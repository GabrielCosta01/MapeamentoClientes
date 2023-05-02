# 🛠️ Abrir e rodar o projeto

**Para rodar a aplicação Back**

- `yarn install`: deverá fazer download das dependencias do ambiente.

- `.env.example`: aqui voce tera um exemplo de campos que DEVE ter para a aplicação rodar.

- `yarn dev`: para fazer a aplicação rodar.

## ENDPOINTS
  
  * Criação de cliente(user) 
    ## Rota nao precisa estar autenticado
  Request
  `POST /client`
  
  {
    "name": "Gabriel Costa",
    
    "email": "gabrielcosta@gmail.com",
    
    "password": "123456",
    
    "telephone": "169999-9999"
  }
    
