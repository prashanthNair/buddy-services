export const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Migobuks Buddy",
    "description": "Bigobuks API Application ",
    "license": {
      "name": "",
      "url": ""
    }
  },
  "host": "localhost:3000",
  "basePath": "/api/v1",
  "tags": [
    {
      "name": "Buddy",
      "description": "API for buddy users in the system"
    }
  ],
  "schemes": [
    "http"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/signup": {
      "post": {
        "tags": [
          "signup"
        ],
        "description": "User can register into Migobucks Buddy system by entering the required data",
        "parameters": [
          {
            "name": "user",
            "mobileNumber": "9037463199",
            "in": "body",
            "description": "Login user in to system",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        ],
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Registered sucessfully",
            "schema": {
              "$ref": "#/definitions/User"
            }
          }
        }
      }
    },
  },  
  "definitions": { 
    "User": {
      "required": [],
      "properties": {

        "email": {
          "type": "string"
        },
        "password": {
          "type": "string"
        },
        "created_date": {
          "type": "string"
        },
        "isActive": {
          "type": "string"
        }
      }
    },
    },
     
    "Users": {
      "type": "array",
      "$ref": "#/definitions/User"
    }
  }
