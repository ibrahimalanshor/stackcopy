# server

## Depedencies

* express
* nodemon
* dotenv
* mongoose
* cors
* express-validator
* bcrypt
* dayjs
* morgan
* jsonwebtoken

## Api Endpoint

### Auth

* `POST` `/api/auth/login` Login User
* `POST` `/api/auth/register` Register User

### Tag

* `GET` `/api/tag` Read All Tags
* `POST` `/api/tag` Create New Tag

### Question

* `GET` `/api/question` Read All Questions
* `POST` `/api/question` Create New Question 

## Project setup
```
npm install
```

## Start Mongodb
```
sudo systemctl start mongod
```

## Set Env

copy `.env.example` to `.env` and edit

## Run

```
npm start
```