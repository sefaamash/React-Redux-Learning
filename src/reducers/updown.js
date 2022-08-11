//Reducer Functions takes state and action it is better that you intialize state with 0 if it is list of elements than intialize with empty array
const intialState=0

const changeTheNumber =(state=intialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            return state +1
        case "DECREMENT":
                return state -1
        default:
            return state
    }
}

export default changeTheNumber;