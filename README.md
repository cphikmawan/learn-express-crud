## SIMPLE RESTFUL API EXPRESS JS

### Installation
1. Clone this repository
2. Install package
    ```sh
    sudo npm install
    ```
3. 

### Test
- Use POSTMAN
- Use Curl

### List API

#### Users API

- GET /users
    > curl http://10.151.36.39:3000/users
- POST /users
    > curl -d "nrp=[nrp]&password=[password]" -X POST http://10.151.36.39:3000/users
- GET users/:user_id
    > curl http://10.151.36.39:3000/users/[id_user]
- PUT users/:user_id
    > curl -d "nrp=[nrp]&password=[password]" -X POST http://10.151.36.39:3000/users/[id_user]
- DELETE users/:user_id
    > curl -X DELETE http://10.151.36.39:3000/users/[id_user]

#### Books API

- GET /books
    > curl http://10.151.36.39:3000/books
- POST /books
    > curl -d "book_name=[book_name]" -X POST http://10.151.36.39:3000/books
- GET books/:book_id
    > curl http://10.151.36.39:3000/books/[id_book]
- PUT books/:book_id
    > curl -d "book_name=[book_name]" -X POST http://10.151.36.39:3000/books/[id_book]
- DELETE books/:book_id
    > curl -X DELETE http://10.151.36.39:3000/books/[id_book]