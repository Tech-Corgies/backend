# Back End for TTB2020 TG Project

# QuickDecks Backend

```json
"version": "1.0"
"description": "TTB2020"
"apihost":  "https://saveenviro.herokuapp.com/api"
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
DATABASE_URL
TEST_DATABASE_URL
PORT
JWTSECRET
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GOOGLE_FRONTEND_REDIRCT
GOOGLE_BACKEND_BASEURL
PROJECT_ID
COMPUTER_REGION
MODEL_ID
SCORE_THRESHOLD
GOOGLE_APPLICATION_CREDENTIALS
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

| ENDPOINT                                                       | DESCRIPTION              |
| -------------------------------------------------------------- | ------------------------ |
| [GET /](#get)                                                  | Base URL                 |
| -------------------------------------------------------------- | -----------------------  |
| AUTH                                                           |
| -------------------------------------------------------------- | -----------------------  |
| [POST /api/auth](#post-apiauth)                                | Register A User          |
| [POST /api/auth/login](#post-tapiauthlogin)                    | Login A User             |
| [PUT /api/auth/](#put-apiauth)                                 | Modify email or password |
| [DELETE /api/auth/](#delete-apiauth)                           | Delete User              |
| [GET /api/auth/google/](#get-apiauthgoogle)                    | Redirect to google auth  |
| [POST /api/auth/google/:token](#post-apiauthgoogleToken)       | Confirms auth & login    |
| -------------------------------------------------------------- | -----------------------  |
| CATEGORIES                                                     |
| -------------------------------------------------------------- | -----------------------  |
| [POST /api/categories](#post-apicategories)                    | Create category          |
| [GET /api/categories](#get-tapicategoriesId)                   | Get all categories       |
| [GET /api/categories/:id](#get-apicategoriesId)                | Get category by ID       |
| [PUT /api/categories/:id](#put-apicategoriesId)                | Edit category            |
| [DELETE /api/categories/:id](#delete-apicategoriesId)          | Delete category          |
| -------------------------------------------------------------- | -----------------------  |
| PREDICT                                                        |
| -------------------------------------------------------------- | -----------------------  |
| [POST /api/predict](#post-apiauth)                             | Recieve a prediction     |

#### GET /

_**Description**: Test server is running._.

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

_**Description**: Create user._.

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

_**Description**: Login User._.

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

_**Description**: Edit user information._.

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

_**Description**: Delete user._.

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

## Categories

#### POST /api/categories

_**Description**: Create category._.

Request body:

```json
{
  "category_name": "New Category",
  "impact_description": "If you have a new category, it increases user's ability to identify different waste",
  "fact": "Fun fact"
}
```

Required: category_name: String!, impact_description: String!, fact: String!

Response body:

```json
{
  "message": "Successfully created category",
  "category": {
    "id": 17,
    "category_name": "New Category",
    "impact_description": "If you have a new category, it increases user's ability to identify different waste",
    "fact": "Fun fact"
  }
}
```

#### GET /api/categories

_**Description**: Get all categories._.

Request body:

```json
{}
```

Response body:

```json
{
  "message": "Successfully fetched all categories",
  "category": [
    {
      "id": 1,
      "category_name": "Plastic Cup",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 2,
      "category_name": "Plastic Bag",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 3,
      "category_name": "Cigarette",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 4,
      "category_name": "Plastic Bottle",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 5,
      "category_name": "Lid",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 6,
      "category_name": "Paper Cup",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 7,
      "category_name": "Straw",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 8,
      "category_name": "Paper",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 9,
      "category_name": "Glass Bottle",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 10,
      "category_name": "Styrofoam",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 11,
      "category_name": "Foil",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 12,
      "category_name": "Plastic Utensils",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 13,
      "category_name": "Carton",
      "impact_description": "",
      "fact": ""
    },
    {
      "id": 14,
      "category_name": "Can",
      "impact_description": "",
      "fact": ""
    }
  ]
}
```

#### GET /api/categories/:id

_**Description**: Get category by ID._.

Request body:

```json
{}
```

Response body:

```json
{
  "message": "Successfully fetch category",
  "category": {
    "id": 17,
    "category_name": "New Category",
    "impact_description": "If you have a new category, it increases user's ability to identify different waste",
    "fact": "Fun fact"
  }
}
```

#### PUT /api/categories/:id

_**Description**: Edit a specific category._.

Request body:

```json
{
  "category_name": "New Category2"
}
```

Response body:

```json
{
  "message": "Successfully edit category"
}
```

#### DELETE /api/categories/:id

_**Description**: Delete category._.

Request body:

```json
{}
```

Response body:

```json
{
  "message": "Successfully delete category"
}
```

## Predict

#### POST /api/predict

_**Description**: Will recieve an base64 string and send it to autoML google client, will take the return response and give it back._.

Request body:

```json
{ "content": "reallyLongEncodedBase64String" }
```

```json
{
  "message": "Succesful model prediction transaction",
  "responses": [{ "className": "Plastic Cup", "score": 0.85 }]
}
```
