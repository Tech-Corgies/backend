# Back End for TTB2020 TG Project

# QuickDecks Backend

```json
"version": "1.0"
"description": "TTB2020"
"apihost":  "localhost"
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for contribution and testing purposes.

## Installing

- Clone Repository
  `$ git clone https://github.com/LABS-EU3/flashcards_backend.git`

- Change Directory
  `$ cd backend`

- Install Node Modules
  `$ npm i`

- Setup Environment Variables (.env) on root folder:

  ```.env
  PORT
  TEST_DATABASE_URL
  DATABASE_URL
  DB_ENV

  ```

- To start API
  `$ npm start`
  or `$ npm run server`

## Running the tests

- To run tests on api
  - `$ npm test`
  - or use Postman

## Request & Response Examples

### Sample Response

Request Success ( **200 - OK** || **201 - CREATED** )

```json
{
  "message": "Success message",
  "key": "data"
}
```

Request Error ( **400 - Bad Request** || **404 - Not Found** || **403 - Unauthorized** || **500 - Internal Server Error** )

```json
{
  "message": "Error message"
}
```

### API Endpoints

| ENDPOINT                                                       | DESCRIPTION             |
| -------------------------------------------------------------- | ----------------------- |
| [GET /](#get)                                                  | Base URL                |
| -------------------------------------------------------------- | ----------------------- |
| AUTH                                                                                     |
| -------------------------------------------------------------- | ----------------------- |
| [POST /api/auth](#post-apiauth)                                 | Register A User         |
| [POST /api/auth/login](#post-tapiauthlogin)                     | Login A User            |
| [PUT /api/auth/](#put-apiauth)                                  | Modify email or password|
| [DELETE /api/auth/](#delete-apiauth)                            | Delete User             |
| [PUT /api/auth/](#put-apiauth)                                  | Modify email or password|
| [DELETE /api/auth/](#delete-apiauth)                            | Delete User             |
| [GET /api/auth/google/](#get-apiauthgoogle)                    | Redirect to google auth |
| [POST /api/auth/google/:token](#post-apiauthgoogleToken)       | Confirms auth & login   |
| -------------------------------------------------------------- | ----------------------- |



 
#### GET /

Request body:

```json
{}
```

Response body:

```json
{ "message": "TTB2020" }
```

## Auth 

#### POST /api/auth

Request body:

```json
{
"email": "tester@email.com",
"password": "securePassword"
}
```
Required: Email: String!, Password: String!

Response body:

```json
{
    "message": "Successfully registered user",
    "user": {
        "id": "fdf92298-6ae0-424a-b43e-d2a71794f614",
        "email": "tester@email.com",
        "time_create": "2020-02-01T12:43:21.267Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiZmRmOTIyOTgtNmFlMC00MjRhLWI0M2UtZDJhNzE3OTRmNjE0IiwiaWF0IjoxNTgwNTYxMDAxLCJleHAiOjE1ODA2NDc0MDF9.9SCdhu2D8tOedaqy-NGBkK7hgeZDTfIVy5baPpsSGtA"
}
```

#### POST /api/auth/login

Request body:

```json
{
"email": "tester@email.com",
"password": "securePassword"
}
```
Required: Email: String!, Password: String!

Response body:

```json
{
    "message": "Welcome user",
    "user": {
        "id": "fdf92298-6ae0-424a-b43e-d2a71794f614",
        "email": "tester@email.com",
        "time_create": "2020-02-01T12:43:21.267Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiZmRmOTIyOTgtNmFlMC00MjRhLWI0M2UtZDJhNzE3OTRmNjE0IiwiaWF0IjoxNTgwNTYyMTc3LCJleHAiOjE1ODA2NDg1Nzd9.XbGNLa0JuCUQALitHApVH73VUyYz-0fukdyFqfAyURI"
}
```


#### PUT /api/auth/

Request body:

```json
{
"email": "tester3@email.com",
"oldPassword": "anotherSecurePassword",
"newPassword": "anotherSecurePassword2"
}
```

Response body:

```json
{
    "message": "User successfully edited"
}
```


#### DELETE /api/auth/

Request body:

```json
{
"password": "anotherSecurePassword23"
}
```

Response body:

```json
{
    "message": "Successfully removed user from database"
}
```

#### GET /api/auth/google

_**Description**: Redirects user to google auth, user will signin or cannot and will be redirected back to the landing page._.

Request body:

```json
{}
```

Response body:

```json
{}
```

#### POST /api/auth/google/:token

_**Description**: User will be verified in the data based as created and will be sent a token with userID._.

Request body:

```json
{}
```

```json
{
    "message": "Welcome user",
    "user": {
        "id": "fdf92298-6ae0-424a-b43e-d2a71794f614",
        "email": "tester@email.com",
        "time_create": "2020-02-01T12:43:21.267Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiZmRmOTIyOTgtNmFlMC00MjRhLWI0M2UtZDJhNzE3OTRmNjE0IiwiaWF0IjoxNTgwNTYyMTc3LCJleHAiOjE1ODA2NDg1Nzd9.XbGNLa0JuCUQALitHApVH73VUyYz-0fukdyFqfAyURI"
}
```