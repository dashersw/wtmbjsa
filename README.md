# An example full-stack Node.js application

Clone the repository:

```
git clone git@github.com:dashersw/wtmbjsa.git
```
## Manual installation and operation
Enter the project folder and install dependencies:

```
cd wtmbjsa
npm install
```

Make sure you have MongoDB up and running and then run
```
npm start
```

## Working with docker
----

Add `app-local.arm.ag` to your `hosts` file or modify the `docker-compose.yml` file to use any other domain and add that to your `hosts` file.

Make sure you have docker and docker-compose installed locally and then run
```
docker-compose up
```

You can visit the following URLs;

| URL | Description
| --- | ---
| `http://localhost:3000` | Index page
| `http://localhost:3000/person` | People JSON
| `http://localhost:3000/person/all` | People list
| `http://localhost:3000/person/:personId` | Person detail page with `personId`

`http://localhost:3000/person` also supports `POST` and `DELETE` actions to
create new records or delete given records.
