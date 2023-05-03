# 🛠️ Abrir e rodar o projeto

**Para rodar a aplicação Back**

- `yarn install`: deverá fazer download das dependencias do ambiente.

- `.env.example`: aqui voce tera um exemplo de campos que DEVE ter para a aplicação rodar.

- `yarn dev`: para fazer a aplicação rodar.

## ENDPOINTS
  ## Rotas de Clientes
## Criação de cliente(user) 

   Rota nao precisa estar autenticado
   
`POST /client`
    
  Request
  
    {
      "name": "Gabriel Costa",
      "email": "gabrielcosta@gmail.com",
      "password": "123456",
      "telephone": "169999-9999"
    }
  
  Response
  
`Status: 201`
  
      {
        "createdAt": "2023-05-03T00:32:49.744Z",
        "telephone": "169999-9999",
        "email": "gabrielcosta@gmail.com",
        "name": "Gabriel Costa",
        "id": "a16bff07-e672-48ba-af02-b8903fe4ddfd"
      }
      
## Session

Request

      {
        "email": "RafaeeEIlCostaa@gmail.com",
        "password": "123456"
      }
      
Response

      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODMwNzQxNzEsImV4cCI6MTY4MzE2MDU3MX0.0bkfAqM3hkKA0y2dk9Bd1qYwlCsc7IxkH_UifAjOkVY",
        "id": "f09a265d-107b-442a-8b96-8c494c35deaa"
      }

## Busca por todos os clientes cadastrados
  Rota precisa de autenticação
    
`GET /client`
    
  Resquest
`SEM BODY`
    
  Response
      
`Status: 200`
      
      [
        {
        "id": "2f43d21a-7686-4c30-bdf5-93790175d922",
        "name": "RafaeIel Costaa",
        "email": "RafaeeIlCostaa@gmail.com",
        "password": "$2b$10$4.ZmTakVyKddi1uuOP.kr.auF6Q8dayRMfpyIj9Ni1XDv6WMaHjIa",
        "telephone": "169999-9999",
        "createdAt": "2023-05-01T19:33:08.252Z",
        "contacts": [
        {
        "id": "41c09f9f-c7c6-4ba0-92f8-557a74d264bd",
        "name": "contato2",
        "email": "contato2@gmail.com",
        "telephone": "169999-9999",
        "createdAt": "2023-05-01T19:33:30.265Z"
        },
        {
        "id": "3716834b-7484-4bca-b9a9-1ef2fcf2cac5",
        "name": "contato3",
        "email": "contato3@gmail.com",
        "telephone": "169999-9999",
        "createdAt": "2023-05-01T19:33:34.105Z"
        },
        ...
      ]
  
## Busca por um cliend pelo ID
  Rota precisa de autenticação: `Bearer ${token}`.
      
`GET /client/:id`
      
  Request
      
`SEM BODY`

  Response
      
`Status: 200`
      
      {
        "id": "db7569da-cc89-4bb8-b821-4a3ff18e1c6f",
        "name": "contato11",
        "email": "contato11@gmail.com",
        "password": "$2b$10$fICcfjnkjEgACaUEM9YFROztqF0WKY/zytiGlZYR0pq7lEs1WgNTK",
        "telephone": "1699999999",
        "createdAt": "2023-05-02T13:05:38.052Z",
        "contacts": [
          {
            "id": "9cb5b1c0-10a3-4a51-97ff-c2620fb6185a",
            "name": "contato11",
            "email": "contato11@gmail.com",
            "telephone": "1699999999",
            "createdAt": "2023-05-02T14:43:07.941Z"
          },
          {
            "id": "4952a1d5-1fa9-46f2-ab6d-fdc83e90c0d6",
            "name": "contato7",
            "email": "contato7@gmail.com",
            "telephone": "1699999999",
            "createdAt": "2023-05-02T14:43:57.021Z"
          }
        ]
      }
      
## Deletar um cliente pelo id
  Rota precisa estar autenticado
      
`DELETE /client/:id`
      
Request
        
`SEM BODY`
        
Response 
  
`Status: 200`

            {
              "name": "Gabriel Costa",
              "email": "gabrielcosta@gmail.com",
              "password": "$2b$10$OKHvuQwSncLRdIOfs4YagOzv4NmKYgOuE0Mb18KnR3i9ASGju9CDa",
              "telephone": "169999-9999",
             "createdAt": "2023-05-03T00:32:49.744Z"
            }

## Atualizar um client pelo id
Rota precisa estar autenticado
          
`PATCH /client/:id`
          
Request
          
`Status: 200`

            {
              "name": "Gabriel Costa",
              "email": "gabrielcosta@gmail.com",
              "password": "123456",
              "telephone": "169999-9999"
            }
          
## Rota Contato

## Criar contato com id do client owner
Rota precisa estar autenticado

`POST /contact/:clientId`

Request

`Status: 201`

          {
          "name": "contato6",
          "email": "contato6@gmail.com",
          "telephone": "169999-9999"
          }
          
Response

          {
            "createdAt": "2023-05-02T00:07:31.010Z",
            "telephone": "169999-9999",
            "email": "contato6@gmail.com",
            "name": "contato6",
            "id": "0312e31d-df17-4643-899f-b0bef2ae937f"
          }
          
## Buscar por todos os clientes
Rota precisa estar autenticado

`GET /contact`

Request

`SEM BODY`

Response

`Status: 200`
          
            [{
                "id": "41c09f9f-c7c6-4ba0-92f8-557a74d264bd",
                "name": "contato2",
                "email": "contato2@gmail.com",
                "telephone": "169999-9999",
                "createdAt": "2023-05-01T19:33:30.265Z"
              },
              {
                "id": "3716834b-7484-4bca-b9a9-1ef2fcf2cac5",
                "name": "contato3",
                "email": "contato3@gmail.com",
                "telephone": "169999-9999",
                "createdAt": "2023-05-01T19:33:34.105Z"
              },
              {
                "id": "32394407-38b9-4449-bee4-0da8612e0b31",
                "name": "contato4",
                "email": "contato4@gmail.com",
                "telephone": "169999-9999",
                "createdAt": "2023-05-01T23:39:45.350Z"
              }
              ...]

## Deleta contato pelo id
Rota precisa estar autenticado

`DELETE /contact/:id`

Request

`SEM BODY`

Response

`Status: 200`

            {
              "name": "Jose victor",
              "email": "josevictor@gmail.com",
              "telephone": "1699999999",
              "createdAt": "2023-05-02T18:15:59.846Z"
            }
            
## Atualiza contato pelo id
Rota precisa estar autenticado

`PATCH /contact:id`

Response

`Status: 200`

            {
              "name": "Jose victor",
              "email": "josevictor@gmail.com",
              "telephone": "1699999999",
              "createdAt": "2023-05-02T18:15:59.846Z"
            }
            
            
