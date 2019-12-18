# The Movie DB - React App

## Technology Used
- React
- React Router Dom
- Jest / Enzyme


## Application Structure
- Application is split into `feature domains` 
- Most if not relative folders will be enclosed in their own feature, to allow for easier refactoring

`/__mocks__` - Mock data for Jest / Enzyme Tests
`/webpack-config` - Build and Development Config
`/src` - Application root folder
  `/pages` - Split application up per page (All related files will go into relative folder)
  `/shared` - Shared files throughout the project such as reusable components, styles, util files


## Running Application

### Development
- On `develop` branch run `yarn`
- Once installed run `yarn dev`
- Navigate to `localhost:8080/movies`

### Local Production
- On `master` branch run `yarn`
- Once installed run `yarn build`
- Once built run `yarn start:local`
- Navigate to `localhost:3000/movies`

### Live
- https://afternoon-spire-06540.herokuapp.com/movies

## Running Tests
- `yarn test`