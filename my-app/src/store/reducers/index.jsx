const { combineReducers } = require("redux");
const { default: characters } = require("./characters");
const { default: favChar } = require("./favorites");

const reducers = combineReducers({characters, favChar})

export default reducers