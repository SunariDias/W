# servicebooking-service
- [Confluence](https://teamdmeetsstockmann.atlassian.net/wiki/spaces/SD/overview)
- [Jira](https://teamdmeetsstockmann.atlassian.net/jira/software/projects/STOC/boards/1)

## <u>Architecture of the application</u>

The software includes React-UI which is ran on [NodeJs](https://nodejs.org/en/) ([src/server.js](src/server.js)).

The NodeJs layer is started with Express-server [express-library](http://expressjs.com/)

## <u>Parameters</u>

The applications parameters are managed by [dotenv](https://github.com/motdotla/dotenv)

Parameters can be found in [.env](.env).

## <u>How to start the application</u>

React-UI can be ran in development mode in localhost, where you are able to see changes made in the React code instantly in browser without the need to build the application.\
Logs are printed in browser console.\
Application will automatically start in localhost:3000

**Before anything, you've to build the application**  
to install the application run `npm install` 

**Command to start React-UI** `npm run startlocal`

The NodeJs layer can be also started in development mode in localhost with [Nodemon](https://www.npmjs.com/package/nodemon).\
The application will start Express-server and serve it at localhost:8080 by default.

**Command to start Express-server locally with nodemon** `npm run dev`

It's also possible to start the whole application with React-UI and Express-server.\
In this mode you are not able to make changes in the code and see them without building the application in between changes. \
This is the version that the application will run in production environment.

To build the application run **command** `npm run build` and to start it run `npm start`.\
The application will start ([src/server.js](src/server.js)) and serve the built UI from /build/index.html.

## <u>Unit test</u>

Application uses [jest](https://jestjs.io/) and [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) to run tests.\

**Test can be run with command** `npm run tests`

## <u>Code formatting</u>
The code is formatted with [Prettier](https://prettier.io/)\
**Prettier can check files with** `npx prettier src --check` and format all documents in src folder with `npx prettier src --write` 

## <u>Logging</u>

Logging in NodeJs is done with LogStash format. 
Check ([src/util/Logstash.js](src/util/Logstash.js)) with four levels of logging; DEBUG, INFO, WARNING, AND ERROR. To change logstash level,\
please see environment details [.env](.env) `LOG_LEVEL`.


