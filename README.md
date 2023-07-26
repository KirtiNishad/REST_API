# Rest API

## Prerequisite

Node 

## Available Scripts

Before you start you may have to run following commands in the project directory: 

```
npm init
npm install
```

After all installation in the project directory, you can run:

```
node index.js
```

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Endpoints 

### GET/crud
1. This endpoint is used to fetch all the data from the database.
2. `GET http://localhost:3000/crud`

### POST/crud
1. This endpoint is used to create all the data and store in the database.
2. `POST http://localhost:3000/crud`

### PUT/crud
1. This endpoint is used to update data stored in the database.
2. `PATCH http://localhost:3000/crud`

### DELETE/crud
1. This endpoint is used to delete the data stored in the database.
2. `DELETE http://localhost:3000/crud`

## Error Handling

For handling the error I use the tryCatch method. In the catch block error is define using the status code 400 and 404.

## Testing

For the testing I use the POSTMAN

1. Copy the url of any method
2. Select the method in the postman and paste the link
3. Click on the send button 
