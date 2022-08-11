import changeTheNumber from "./updown";

//Here we have only single reducer but if there are Multiple reducers than we need to compbine tat reducers
import {combineReducers} from "redux"

const rootReducer=combineReducers({
    //its like key value pair changeTheNUmber:changeThe Number 
    //but we can write it single changeTheNumber
    changeTheNumber
});

export default rootReducer;