
# Restaurants :fork_and_knife:
### _The JS restaurant search engine_ 
**by** [![N|Solid](http://fior.in/img/fiorin.png)](http://fior.in)

## .: Backend :.

The project was conceived as an API and the following technologies were used in the backend development: 

| What? | For what? |
| ------ | ------ |
| Nest.js | Node.js based architecture.|
| Yarn | Dependency management. |
| Typescript | Language used. |
| Jest.js | Test coverage. |

### Execution requirements
- Node.js 
- Npm
- Yarn

### Preparing the environment

To prepare the environment and run the application, run the commands:
```sh
$ cd backend
$ yarn install
$ yarn start 
```

The application will be available at:
```sh
http://localhost:3000
```
| Method | Endpoint | For what? |
| ------ | ------ | ------ |
| GET | / | redirect to /restaurants. |
| GET | /restaurants | Unfiltered restaurant list. |
| GET | /restaurants? | List of restaurants with query parameters. |
| GET | /restaurant/cuisines | Cuisines complete list. |

### Tests
For testing with Jest.js, run the command:
```sh
yarn test
```

To show test coverage run:
```sh
yarn test:cov
```

### Endpoints
#### GET /restaurants
Using GET method returns a list of **5 restaurants** in the format:

```sh
[
    {
        "name": "string",
        "costumer_rating": 0,
        "distance": 0,
        "price": 0,
        "cuisine_id": 0
    },
]
```

#### GET /restaurants?
Using the GET method and entering query parameters returns a list of 5 restaurants that match the criteria in the same format as the previous endpoint.
Allowed query parameters are:

| Parameter | Type | Values |
| ------ | ------ | ------ |
| name | string | [a-zA-Z]* | 
| rating | number | [1-5] | 
| distance | number | [1-10] | 
| price | number | [10-50] | 
| cuisine | string | [a-zA-Z]* | 

Parameters can be combined as follows, or any other combination::

```sh
?name=xxxx&rating=0&distance=0&price=0&cuisine=xxxx
```

### GET /restaurant/cuisines
Using the get method returns the list of cuisines in the format:
```sh
{
    "id": 0,
    "name": "string"
}
```

---

## .: Frontend :.

#### Click [here to see the preview](http://fior.in/img/frontend.png)

The project was conceived as a sample SPA (Single Page Application) and it's only to demonstrate the use of the API. It is not a full product.

The following technologies were used in the frontend development: 

| What? | For what? |
| ------ | ------ |
| Next.js | Node.js based architecture.|
| Yarn | Dependency management. |
| Javascript | Language used. |
| Styled Components | CSS-in-JS. |
| React-icons | Icon library. |

### Execution requirements
- Node.js 
- Npm
- Yarn

### Preparing the environment

To prepare the environment and run the application, run the commands:
```sh
$ cd frontend
$ yarn install
$ yarn start 
```

The application will be available at:
```sh
http://localhost:3001
```

**by** [![N|Solid](http://fior.in/img/fiorin.png)](http://fior.in)

---

#### Useful links
- [Node.js](https://nodejs.org/en/)
- [Nest.js](https://nestjs.com/)
- [Yarn](https://yarnpkg.com/)
- [Jest.js](https://jestjs.io/)
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)