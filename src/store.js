import rootReducer from "./reducers";
import {createStore} from "redux";

//Now that root reducer have all the state of our application and remebver rootreducer is actually the reducer function we combine so we are just providing that state to our redux store
//This store is the global centralized store who ever call this store can have the data
const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_());

//window.__REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_(){It will check the store the current state}
export default store